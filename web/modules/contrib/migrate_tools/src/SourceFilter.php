<?php

namespace Drupal\migrate_tools;

use Drupal\migrate\Plugin\migrate\source\SourcePluginBase;
use Drupal\migrate\Plugin\MigrateSourceInterface;

/**
 * Class to filter source by an ID list.
 */
class SourceFilter extends \FilterIterator {

  /**
   * List of specific source IDs to import.
   *
   * @var array
   */
  protected $idList;

  /**
   * SourceFilter constructor.
   *
   * @param \Drupal\migrate\Plugin\MigrateSourceInterface $source
   *   The ID map.
   * @param array $id_list
   *   The id list to use in the filter.
   */
  public function __construct(MigrateSourceInterface $source, array $id_list) {
    parent::__construct($source);
    $this->idList = $id_list;
  }

  /**
   * {@inheritdoc}
   */
  public function accept() {
    // No idlist filtering, don't filter.
    if (empty($this->idList)) {
      return TRUE;
    }
    // Some source plugins do not extend SourcePluginBase. These cannot be
    // filtered so warn and return all values.
    if (!$this->getInnerIterator() instanceof SourcePluginBase) {
      trigger_error(sprintf('The source plugin %s is not an instance of %s. Extend from %s to support idlist filtering.', $this->getInnerIterator()->getPluginId(), SourcePluginBase::class, SourcePluginBase::class));
      return TRUE;
    }
    // Row is included.
    if (in_array(array_values($this->getInnerIterator()->getCurrentIds()), $this->idList)) {
      return TRUE;
    }
  }

}
