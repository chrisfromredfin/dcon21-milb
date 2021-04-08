<?php

namespace Drupal\Tests\migrate_plus\Kernel\Plugin\migrate\process;

use Drupal\KernelTests\KernelTestBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Plugin\MigrateDestinationInterface;
use Drupal\migrate\Plugin\MigrationInterface;
use Drupal\migrate\Row;
use Drupal\Tests\user\Traits\UserCreationTrait;

/**
 * Tests the entity_lookup plugin.
 *
 * @coversDefaultClass \Drupal\migrate_plus\Plugin\migrate\process\EntityLookup
 * @group migrate_plus
 */
class EntityLookupTest extends KernelTestBase {

  use UserCreationTrait;

  /**
   * {@inheritdoc}
   */
  protected static $modules = [
    'migrate_plus',
    'migrate',
    'user',
    'system',
  ];

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $this->installSchema('system', ['sequences']);
    $this->installEntitySchema('user');
  }

  /**
   * Lookup an entity without bundles on destination key.
   *
   * Using user entity as destination entity without bundles as example for
   * testing.
   *
   * @covers ::transform
   */
  public function testLookupEntityWithoutBundles(): void {
    // Create a user.
    $known_user = $this->createUser([], 'lucuma');
    // Setup test migration objects.
    $migration_prophecy = $this->prophesize(MigrationInterface::class);
    $migrate_destination_prophecy = $this->prophesize(MigrateDestinationInterface::class);
    $migrate_destination_prophecy->getPluginId()->willReturn('user');
    $migrate_destination = $migrate_destination_prophecy->reveal();
    $migration_prophecy->getDestinationPlugin()->willReturn($migrate_destination);
    $migration_prophecy->getProcess()->willReturn([]);
    $migration = $migration_prophecy->reveal();
    $configuration = [
      'entity_type' => 'user',
      'value_key' => 'name',
    ];
    $plugin = \Drupal::service('plugin.manager.migrate.process')
      ->createInstance('entity_lookup', $configuration, $migration);
    $executable = $this->prophesize(MigrateExecutableInterface::class)->reveal();
    $row = new Row();
    // Check the known user is found.
    $value = $plugin->transform('lucuma', $executable, $row, 'name');
    $this->assertSame($known_user->id(), $value);
    // Check an unknown user is not found.
    $value = $plugin->transform('orange', $executable, $row, 'name');
    $this->assertNull($value);
  }

}
