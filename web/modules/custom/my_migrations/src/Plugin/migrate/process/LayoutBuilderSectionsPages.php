<?php

namespace Drupal\my_migrations\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\layout_builder\Section;
use Drupal\layout_builder\SectionComponent;
use Drupal\block_content\Entity\BlockContent;

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
    $components = [];
    $generator = \Drupal::service('uuid');

    foreach ($value as $section_components) {
      $block_content = BlockContent::load($section_components->destid1);
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
        'block_revision_id' => $block_content->getRevisionId(),
        'block_serialized' => serialize($block_content),
        'context_mapping' => [],
      ];

      $components[] = new SectionComponent($generator->generate(), 'content', $config);
    }

    // If you were doing multiple sections, you'd want this to be an array
    // somehow. @TODO figure out how to do that ;)
    // PARAMS: $layout_id, $layout_settings, $components
    $sections = new Section('layout_onecol', [], $components);


    return $sections;
  }

  /**
   * {@inheritdoc}
   */
  public function multiple() {
    // Perhaps if multiple() returned TRUE this would help allow
    // multiple Sections. ;)
    return FALSE;
  }

}
