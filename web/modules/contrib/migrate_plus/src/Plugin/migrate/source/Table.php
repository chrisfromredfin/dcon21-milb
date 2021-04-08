<?php

namespace Drupal\migrate_plus\Plugin\migrate\source;

use Drupal\Core\State\StateInterface;
use Drupal\migrate\MigrateException;
use Drupal\migrate\Plugin\migrate\source\SqlBase;
use Drupal\migrate\Plugin\MigrationInterface;

/**
 * Source plugin for retrieving data via URLs.
 *
 * @MigrateSource(
 *   id = "table"
 * )
 */
class Table extends SqlBase {

  const TABLE_ALIAS = 't';

  /**
   * The name of the destination table.
   *
   * @var string
   */
  protected $tableName;

  /**
   * IDMap compatible array of id fields.
   *
   * @var array
   */
  protected $idFields;

  /**
   * Array of fields present on the destination table.
   *
   * @var array
   */
  protected $fields;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, MigrationInterface $migration, StateInterface $state) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $migration, $state);
    $this->tableName = $configuration['table_name'];
    // Insert alias in id_fields.
    foreach ($configuration['id_fields'] as &$field) {
      $field['alias'] = static::TABLE_ALIAS;
    }
    $this->idFields = $configuration['id_fields'];
    $this->fields = isset($configuration['fields']) ? $configuration['fields'] : [];
  }

  /**
   * {@inheritdoc}
   */
  public function query() {
    return $this->select($this->tableName, static::TABLE_ALIAS)->fields(static::TABLE_ALIAS, $this->fields);
  }

  /**
   * {@inheritdoc}
   */
  public function fields() {
    return $this->fields;
  }

  /**
   * {@inheritdoc}
   */
  public function getIds() {
    if (empty($this->idFields)) {
      throw new MigrateException('Id fields are required for a table source');
    }
    return $this->idFields;
  }

}
