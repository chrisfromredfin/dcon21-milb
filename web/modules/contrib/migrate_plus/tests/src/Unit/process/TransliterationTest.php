<?php

namespace Drupal\Tests\migrate_plus\Unit\process;

use Drupal\Component\Transliteration\PhpTransliteration;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Drupal\migrate_plus\Plugin\migrate\process\Transliteration;
use Drupal\Tests\migrate\Unit\process\MigrateProcessTestCase;

/**
 * Tests the transliteration process plugin.
 *
 * @group migrate_plus
 */
class TransliterationTest extends MigrateProcessTestCase {

  /**
   * A transliteration instance.
   *
   * @var \Drupal\Component\Transliteration\TransliterationInterface
   */
  protected $transliteration;

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    $this->transliteration = new PhpTransliteration();
    $this->row = $this->getMockBuilder(Row::class)
      ->disableOriginalConstructor()
      ->getMock();
    $this->migrateExecutable = $this->getMockBuilder(MigrateExecutableInterface::class)
      ->disableOriginalConstructor()
      ->getMock();
    parent::setUp();
  }

  /**
   * Tests transliteration transformation of non-alphanumeric characters.
   */
  public function testTransform(): void {
    $actual = '9000004351_53494854_Spøgelsesjægerneáéö';
    $expected_result = '9000004351_53494854_Spogelsesjaegerneaeo';

    $plugin = new Transliteration([], 'transliteration', [], $this->transliteration);
    $value = $plugin->transform($actual, $this->migrateExecutable, $this->row, 'destinationproperty');
    $this->assertEquals($expected_result, $value);
  }

}
