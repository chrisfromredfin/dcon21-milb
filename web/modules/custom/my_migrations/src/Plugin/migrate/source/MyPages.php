<?php

namespace Drupal\my_migrations\Plugin\migrate\source;

use Drupal\migrate_source_csv\Plugin\migrate\source\CSV;
use Drupal\migrate\Row;

/**
 * Node source from CSV.
 *
 * @MigrateSource(
 *   id = "my_pages",
 * )
 */
class MyPages extends CSV {

  /**
   * Builds an array of fields that will become components.
   */
  public function prepareRow(Row $row) {
    // Add components to the row.
    // What's important here is that each of these must be a section of the
    // layout, which means we have to double-nest the components array
    // so that transform is only called once (or once per section).
    $components = [];

    $blocks = $this->fetchBlocks($row);
    foreach ($blocks as $block) {
      // See above; hardcode the 0 in so only becomes a single section.
      // You could get more clever here if you wanted multiple sections.
      $components[0][] = $block;
    }
    $row->setSourceProperty('components', $components);

    // Invoke the previous chain of prepareRow methods.
    return parent::prepareRow($row);
  }

  /**
   * Fetches the blocks attached to this node.
   */
  private function fetchBlocks(Row $row) {
    // Query the database for the correct blocks,
    // by matching on the nid and ordering by the delta.
    $table = 'migrate_map_blocks';

    $database = \Drupal::database();
    $query = "SELECT destid1 FROM {" . $table . "} WHERE ";

    $query .= "sourceid1=:source_nid ";
    $args = [':source_nid' => $row->get('id')];

    $query .= "ORDER BY sourceid2";
    $result = $database->query($query, $args);

    return $result->fetchAll();
  }

}
