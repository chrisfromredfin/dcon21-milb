<?php

namespace Drupal\migrate_plus\Plugin\migrate\process;

use Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;

/**
 * String replacements on a source dom.
 *
 * Analogous to str_replace process plugin, but based on a \DOMDocument instead
 * of a string.
 * Meant to be used after dom process plugin.
 *
 * Available configuration keys:
 * - mode: What to modify. Possible values:
 *   - attribute: One element attribute.
 * - xpath: XPath query expression that will produce the \DOMNodeList to walk.
 * - attribute_options: A map of options related to the attribute mode. Required
 *   when mode is attribute. The keys can be:
 *   - name: Name of the attribute to match and modify.
 * - search: pattern to match.
 * - replace: value to replace the searched pattern with.
 * - regex: Use regular expression replacement.
 * - case_insensitive: Case insensitive search. Only valid when regex is false.
 *
 * Examples:
 *
 * @code
 * process:
 *   'body/value':
 *     -
 *       plugin: dom
 *       method: import
 *       source: 'body/0/value'
 *     -
 *       plugin: dom_str_replace
 *       mode: attribute
 *       xpath: '//a'
 *       attribute_options:
 *         name: href
 *       search: 'foo'
 *       replace: 'bar'
 *     -
 *       plugin: dom_str_replace
 *       mode: attribute
 *       xpath: '//a'
 *       attribute_options:
 *         name: href
 *       regex: true
 *       search: '/foo/'
 *       replace: 'bar'
 *     -
 *       plugin: dom
 *       method: export
 * @endcode
 *
 * @MigrateProcessPlugin(
 *   id = "dom_str_replace"
 * )
 */
class DomStrReplace extends DomProcessBase {

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->configuration += [
      'case_insensitive' => FALSE,
      'regex' => FALSE,
    ];
    $options_validation = [
      'xpath' => NULL,
      'mode' => ['attribute'],
      // @todo Move out once another mode is supported.
      // @see https://www.drupal.org/project/migrate_plus/issues/3042833
      'attribute_options' => NULL,
      'search' => NULL,
      'replace' => NULL,
    ];
    foreach ($options_validation as $option_name => $possible_values) {
      if (empty($this->configuration[$option_name])) {
        throw new InvalidPluginDefinitionException(
          $this->getPluginId(),
          "Configuration option '$option_name' is required."
        );
      }
      if (!is_null($possible_values) && !in_array($this->configuration[$option_name], $possible_values)) {
        throw new InvalidPluginDefinitionException(
          $this->getPluginId(),
          sprintf(
            'Configuration option "%s" only accepts the following values: %s.',
            $option_name,
            implode(', ', $possible_values)
          )
        );
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $this->init($value, $destination_property);

    foreach ($this->xpath->query($this->configuration['xpath']) as $html_node) {
      $subject = $this->getSubject($html_node);
      if (empty($subject)) {
        // Could not find subject, skip processing.
        continue;
      }
      $search = $this->getSearch();
      $replace = $this->getReplace();
      $this->doReplace($html_node, $search, $replace, $subject);
    }

    return $this->document;
  }

  /**
   * Retrieves the right subject string.
   *
   * @param \DOMElement $node
   *   The current element from iteration.
   *
   * @return string
   *   The string to use a subject on search.
   */
  protected function getSubject(\DOMElement $node) {
    switch ($this->configuration['mode']) {
      case 'attribute':
        return $node->getAttribute($this->configuration['attribute_options']['name']);
    }
  }

  /**
   * Retrieves the right search string based on configuration.
   *
   * @return string
   *   The value to be searched.
   */
  protected function getSearch() {
    switch ($this->configuration['mode']) {
      case 'attribute':
        return $this->configuration['search'];
    }
  }

  /**
   * Retrieves the right replace string based on configuration.
   *
   * @return string
   *   The value to use for replacement.
   */
  protected function getReplace() {
    switch ($this->configuration['mode']) {
      case 'attribute':
        return $this->configuration['replace'];
    }
  }

  /**
   * Retrieves the right replace string based on configuration.
   *
   * @param \DOMElement $html_node
   *   The current element from iteration.
   * @param string $search
   *   The search string or pattern.
   * @param string $replace
   *   The replacement string.
   * @param string $subject
   *   The string on which to perform the substitution.
   */
  protected function doReplace(\DOMElement $html_node, $search, $replace, $subject) {
    if ($this->configuration['regex']) {
      $function = 'preg_replace';
    }
    elseif ($this->configuration['case_insensitive']) {
      $function = 'str_ireplace';
    }
    else {
      $function = 'str_replace';
    }
    $new_subject = $function($search, $replace, $subject);
    $this->postReplace($html_node, $new_subject);
  }

  /**
   * Performs post-replace actions.
   *
   * @param \DOMElement $html_node
   *   The current element from iteration.
   * @param string $new_subject
   *   The new value to use.
   */
  protected function postReplace(\DOMElement $html_node, $new_subject) {
    switch ($this->configuration['mode']) {
      case 'attribute':
        $html_node->setAttribute($this->configuration['attribute_options']['name'], $new_subject);
    }
  }

}
