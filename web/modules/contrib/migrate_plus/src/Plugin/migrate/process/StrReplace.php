<?php

namespace Drupal\migrate_plus\Plugin\migrate\process;

use Drupal\migrate\MigrateException;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Uses the str_replace() method on a source string.
 *
 * @MigrateProcessPlugin(
 *   id = "str_replace"
 * )
 *
 * @codingStandardsIgnoreStart
 *
 * To do a simple hardcoded string replace, use the following:
 * @code
 * field_text:
 *   plugin: str_replace
 *   source: text
 *   search: foo
 *   replace: bar
 * @endcode
 * If the value of text is "vero eos et accusam et justo vero" in source, foo is
 * "et" in search and bar is "that" in replace, field_text will be "vero eos
 * that accusam that justo vero".
 *
 * Case insensitive searches can be achieved using the following:
 * @code
 * field_text:
 *   plugin: str_replace
 *   case_insensitive: true
 *   source: text
 *   search: foo
 *   replace: bar
 * @endcode
 * If the value of text is "VERO eos et accusam et justo vero" in source, foo is
 * "vero" in search and bar is "that" in replace, field_text will be "that eos
 * et accusam et justo that".
 *
 * Also regular expressions can be matched using:
 * @code
 * field_text:
 *   plugin: str_replace
 *   regex: true
 *   source: text
 *   search: foo
 *   replace: bar
 * @endcode
 * If the value of text is "vero eos et 123 accusam et justo 123 duo" in source,
 * foo is "/[0-9]{3}/" in search and bar is "the" in replace, field_text will be
 * "vero eos et the accusam et justo the duo".
 *
 * All the rules for
 * @link http://php.net/manual/function.str-replace.php str_replace @endlink
 * apply. This means that you can provide arrays as values.
 *
 * Multiple values can be matched like this:
 * @code
 * field_text:
 *   plugin: str_replace
 *   source: text
 *   search: ["AT", "CH", "DK"]
 *   replace: ["Austria", "Switzerland", "Denmark"]
 * @endcode
 *
 * @codingStandardsIgnoreEnd
 */
class StrReplace extends ProcessPluginBase {

  /**
   * Flag indicating whether there are multiple values.
   *
   * @var bool
   */
  protected $multiple;

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    if (!isset($this->configuration['search'])) {
      throw new MigrateException('"search" must be configured.');
    }
    if (!isset($this->configuration['replace'])) {
      throw new MigrateException('"replace" must be configured.');
    }
    $this->multiple = is_array($value);
    $this->configuration += [
      'case_insensitive' => FALSE,
      'regex' => FALSE,
    ];
    $function = 'str_replace';
    if ($this->configuration['case_insensitive']) {
      $function = 'str_ireplace';
    }
    if ($this->configuration['regex']) {
      $function = 'preg_replace';
    }
    return $function($this->configuration['search'], $this->configuration['replace'], $value);
  }

  /**
   * {@inheritdoc}
   */
  public function multiple() {
    return $this->multiple;
  }

}
