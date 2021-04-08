<?php

namespace Drupal\my_migrations\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\layout_builder\Section;
use Drupal\layout_builder\SectionComponent;
use Drupal\block_content\Entity\BlockContent;
use Drupal\migrations\Entity\MigrateLogEntity;

/**
 * Process plugin to migrate a source field into a Layout Builder Section.
 *
 * @MigrateProcessPlugin(
 *   id = "layout_builder_sections_pages",
 * )
 */
class LayoutBuilderSectionsPages extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    // Setup some variables we'll need:
    // - components holds all the components to be written into our section
    // - generator connects to the uuid generator service
    // - block_to_create maps incoming data type to type of component to create.
    $components = [];
    $generator = \Drupal::service('uuid');
    $section_list = $row->getSourceProperty('components');

    // Since we're double nested, we need to nest foreaches...
    foreach ($section_list as $section) {
      foreach ($section as $its_components) {
        $block_content = BlockContent::load($its_components->destid1);
        if (is_null($block_content)) {
          \Drupal::messenger()->addMessage("Could not load " . $bid->destid1 . ' ???', 'status', TRUE);
          continue;
        }

        $config = [
          'id' => 'inline_block:basic',
          'label' => $block_content->label(),
          'provider' => 'layout_builder',
          'label_display' => FALSE,
          'view_mode' => 'full',
          'block_revision_id' => NULL,
          'block_serialized' => serialize($block_content),
          'context_mapping' => [],
        ];

        $components[] = new SectionComponent($generator->generate(), 'content', $config);
      }

      // If you were doing multiple sections, you'd want this to be an array
      // somehow. @TODO figure out how to do that ;)
      $sections = new Section('layout_onecol', [], $components);
    }

    return $sections;
  }

  /**
   * {@inheritdoc}
   */
  public function multiple() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  private function writeMigrateLogs($type, $info, $nid) {
    $message = [];
    // Check each item, based on type, and w.
    foreach ($info as $delta => $value) {
      if ($type == 'body') {
        if ($info) {
          $issues = _migrations_scan_for_shortcodes($value['value']);
          if (count($issues)) {
            $message = array_merge($message, $issues);
          }
        }
      }

      if ($type == 'sidebar_text') {
        if ($info) {
          $issues = _migrations_scan_for_shortcodes($value['value']);
          if (count($issues)) {
            $message = array_merge($message, $issues);
          }
        }
      }

      if ($type == 'bean_text') {
        $pieces = explode(':', array_pop($value));
        $mod = $pieces[0];
        $bean_slug = $pieces[1];
        if ($mod == 'view') {
          $message = array_merge($message, ["Contains a referenced bean: $bean_slug"]);
        }
      }

    }

    if (count($message)) {
      $values = [
        'name' => 'Human needed for source node ' . $nid,
        'source' => '/node/' . $nid,
        'reason' => implode(', ', $message),
      ];

      $entity = MigrateLogEntity::create($values);
      $entity->save();
    }

  }

  /**
   * {@inheritdoc}
   */
  private function fetchBlocks($type, $nid, $delta, $bean_slug) {
    // Query the database for the correct bean or body, etc.
    $prefix = 'migrate_map_';
    if ($type == 'body' || $type == 'sidebar_text') {
      $prefix .= 'page_';
    }

    $database = \Drupal::database();
    $query = "SELECT destid1 FROM {" . $prefix . $type . "} WHERE ";
    if ($type == 'bean_text') {
      $query .= "sourceid2=:bean_slug";
      $args = [':bean_slug' => $bean_slug];
    }
    else {
      $query .= "sourceid1=:nid";
      $args = [':nid' => $nid];
    }
    if ($type == 'sidebar_text') {
      $query .= ' AND sourceid2=:delta';
      $args['delta'] = $delta;
    }
    $result = $database->query($query, $args);
    return $result->fetchAll();
  }

}
