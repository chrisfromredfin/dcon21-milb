<?php

namespace Drupal\migrate_plus\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;

/**
 * Returns EntityLookup for a given default value if input is empty.
 *
 * @see \Drupal\migrate_plus\Plugin\migrate\process\EntityLookup
 *
 * Example usage with full configuration:
 * @code
 * process:
 *   uid:
 *     -
 *       plugin: migration_lookup
 *       migration: users
 *       source: author
 *     -
 *       plugin: default_entity_value
 *       entity_type: user
 *       value_key: name
 *       ignore_case: true
 *       default_value: editorial
 * @endcode
 *
 * @MigrateProcessPlugin(
 *   id = "default_entity_value",
 *   handle_multiples = TRUE
 * )
 */
class DefaultEntityValue extends EntityLookup {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    if (!empty($value)) {
      return $value;
    }
    return parent::transform($this->configuration['default_value'], $migrate_executable, $row, $destination_property);
  }

}
