<?php

namespace Drupal\Tests\config_devel\Unit;

use org\bovigo\vfs\vfsStream;
use Drupal\Component\Serialization\Yaml;

use Drupal\config_devel\ConfigImporterExporter;

/**
 * @coversDefaultClass \Drupal\config_devel\ConfigImporterExporter
 * @group config_devel
 */
class ConfigImporterExporterTest extends ConfigDevelTestBase {

  /**
   * Test ConfigImporterExporter::writeBackConfig().
   */
  public function testWriteBackConfig() {
    $config_data = array(
      'id' => $this->randomMachineName(),
      'langcode' => 'en',
      'uuid' => '836769f4-6791-402d-9046-cc06e20be87f',
    );

    $config = $this->getMockBuilder('\Drupal\Core\Config\Config')
      ->disableOriginalConstructor()
      ->getMock();
    $config->expects($this->any())
      ->method('getName')
      ->will($this->returnValue($this->randomMachineName()));
    $config->expects($this->any())
      ->method('get')
      ->will($this->returnValue($config_data));

    $file_names = array(
      vfsStream::url('public://' . $this->randomMachineName() . '.yml'),
      vfsStream::url('public://' . $this->randomMachineName() . '.yml'),
    );

    $configDevelSubscriber = new ConfigImporterExporter(
      $this->configFactory,
      $this->prophesize(\Drupal\Core\Config\StorageInterface::class)->reveal(),
      $this->configManager,
      $this->eventDispatcher,
      $this->prophesize(\Drupal\Core\ProxyClass\Lock\PersistentDatabaseLockBackend::class)->reveal(),
      $this->prophesize(\Drupal\Core\Config\TypedConfigManagerInterface::class)->reveal(),
      $this->prophesize(\Drupal\Core\Extension\ModuleHandlerInterface::class)->reveal(),
      $this->prophesize(\Drupal\Core\ProxyClass\Extension\ModuleInstaller::class)->reveal(),
      $this->prophesize(\Drupal\Core\Extension\ThemeHandlerInterface::class)->reveal(),
      $this->prophesize(\Drupal\Core\StringTranslation\TranslationManager::class)->reveal(),
      $this->prophesize(\Drupal\Core\Extension\ModuleExtensionList::class)->reveal()
    );

    $configDevelSubscriber->writeBackConfig($config, $file_names);

    $data = $config_data;
    unset($data['uuid']);
    unset($data['_core']);

    foreach ($file_names as $file_name) {
      $this->assertEquals($data, Yaml::decode(file_get_contents($file_name)));
    }
  }

}

if (!defined('DRUPAL_MINIMUM_PHP')) {
  define('DRUPAL_MINIMUM_PHP', '7.3.0');
}
