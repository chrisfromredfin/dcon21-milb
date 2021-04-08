<?php

namespace Drupal\migrate_tools;

use Drupal\migrate\Plugin\MigrateIdMapInterface;

/**
 * Class to filter ID map by an ID list.
 */
class IdMapFilter extends \FilterIterator {

  /**
   * List of specific source IDs to import.
   *
   * @var array
   */
  protected $idList;

  /**
   * IdMapFilter constructor.
   *
   * @param \Drupal\migrate\Plugin\MigrateIdMapInterface $id_map
   *   The ID map.
   * @param array $id_list
   *   The id list to use in the filter.
   */
  public function __construct(MigrateIdMapInterface $id_map, array $id_list) {
    parent::__construct($id_map);
    $this->idList = $id_list;
  }

  /**
   * {@inheritdoc}
   */
  public function accept() {
    // Row is included.
    if (empty($this->idList) || in_array(array_values($this->getInnerIterator()->currentSource()), $this->idList)) {
      return TRUE;
    }
  }

}
