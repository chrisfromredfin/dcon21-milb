<?php

namespace Drupal\config_devel;

use Drupal\Component\Utility\Crypt;
use Drupal\Core\Config\Config;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Config\ConfigImporter;
use Drupal\Core\Config\ConfigManagerInterface;
use Drupal\Core\Config\Entity\ConfigEntityStorageInterface;
use Drupal\Core\Config\InstallStorage;
use Drupal\Core\Config\StorageComparer;
use Drupal\Core\Config\StorageInterface;
use Drupal\Core\Config\TypedConfigManagerInterface;
use Drupal\Core\Extension\ModuleExtensionList;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Extension\ModuleInstallerInterface;
use Drupal\Core\Extension\ThemeHandlerInterface;
use Drupal\Core\Lock\LockBackendInterface;
use Drupal\Core\StringTranslation\TranslationInterface;
use Drupal\config\StorageReplaceDataWrapper;
use Drupal\config_devel\Event\ConfigDevelEvents;
use Drupal\config_devel\Event\ConfigDevelSaveEvent;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Yaml\Exception\DumpException;

/**
 * Imports and exports config.
 */
class ConfigImporterExporter {

  /**
   * The configuration factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * The config storage.
   *
   * @var \Drupal\Core\Config\StorageInterface
   */
  protected $configStorage;

  /**
   * The config manager.
   *
   * @var \Drupal\Core\Config\ConfigManagerInterface
   */
  protected $configManager;

  /**
   * The event dispatcher.
   *
   * @var \Symfony\Component\EventDispatcher\EventDispatcherInterface
   */
  protected $eventDispatcher;

  /**
   * The lock service.
   *
   * @var \Drupal\Core\Lock\LockBackendInterface
   */
  protected $persistentLockBackend;

  /**
   * The typed config manager.
   *
   * @var \Drupal\Core\Config\TypedConfigManagerInterface
   */
  protected $typedConfigManager;

  /**
   * The module handler.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The module installer.
   *
   * @var \Drupal\Core\Extension\ModuleInstallerInterface
   */
  protected $moduleInstaller;

  /**
   * The theme handler.
   *
   * @var \Drupal\Core\Extension\ThemeHandlerInterface
   */
  protected $themeHandler;

  /**
   * The string translation service.
   *
   * @var \Drupal\Core\StringTranslation\TranslationInterface
   */
  protected $stringTranslation;

  /**
   * The module extension list service.
   *
   * @var \Drupal\Core\Extension\ModuleExtensionList
   */
  protected $moduleExtensionList;

  /**
   * Creates a ConfigImporterExporter instance.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory.
   * @param \Drupal\Core\Config\StorageInterface $config_storage
   *   The config storage.
   * @param \Drupal\Core\Config\ConfigManagerInterface $config_manager
   *   The config manager.
   * @param \Symfony\Component\EventDispatcher\EventDispatcherInterface $event_dispatcher
   *   The event dispatcher.
   * @param \Drupal\Core\Lock\LockBackendInterface $persistent_lock_backend
   *   The lock.
   * @param \Drupal\Core\Config\TypedConfigManagerInterface $typed_config_manager
   *   The typed config manager.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler.
   * @param \Drupal\Core\Extension\ModuleInstallerInterface $module_installer
   *   The module installer.
   * @param \Drupal\Core\Extension\ThemeHandlerInterface $theme_handler
   *   The theme handler.
   * @param \Drupal\Core\StringTranslation\TranslationInterface $string_translation
   *   The string translation service.
   * @param \Drupal\Core\Extension\ModuleExtensionList $module_extension_list
   *   The module extension list service.
   */
  public function __construct(
    ConfigFactoryInterface $config_factory,
    StorageInterface $config_storage,
    ConfigManagerInterface $config_manager,
    EventDispatcherInterface $event_dispatcher,
    LockBackendInterface $persistent_lock_backend,
    TypedConfigManagerInterface $typed_config_manager,
    ModuleHandlerInterface $module_handler,
    ModuleInstallerInterface $module_installer,
    ThemeHandlerInterface $theme_handler,
    TranslationInterface $string_translation,
    ModuleExtensionList $module_extension_list
  ) {
    $this->configFactory = $config_factory;
    $this->configStorage = $config_storage;
    $this->configManager = $config_manager;
    $this->eventDispatcher = $event_dispatcher;
    $this->persistentLockBackend = $persistent_lock_backend;
    $this->typedConfigManager = $typed_config_manager;
    $this->moduleHandler = $module_handler;
    $this->moduleInstaller = $module_installer;
    $this->themeHandler = $theme_handler;
    $this->stringTranslation = $string_translation;
    $this->moduleExtensionList = $module_extension_list;
  }

  /**
   * Imports a config item from the given filename.
   *
   * @param string $filename
   *   The filename to import from with the Drupal-relative path.
   * @param string $original_hash
   *   (optional) The original hash. TODO: document this properly!
   * @param string $contents
   *   (optional) The file contents. The file will be read if omitted.
   *
   * @return string|null
   *   The new hash of the config, or NULL if there was no need to import
   *   because the config hash was identical.
   */
  public function importConfig($filename, $original_hash = '', $contents = '') {
    $hash = '';
    if (!$contents && (!$contents = @file_get_contents($filename))) {
      return $hash;
    }
    $needs_import = TRUE;
    $hash = Crypt::hashBase64($contents);
    if ($original_hash) {
      if ($hash == $original_hash) {
        $needs_import = FALSE;
      }
    }
    if ($needs_import) {
      $data = (new InstallStorage())->decode($contents);
      $config_name = basename($filename, '.yml');

      $source_storage = new StorageReplaceDataWrapper($this->configStorage);
      $source_storage->replaceData($config_name, $data);
      $storage_comparer = new StorageComparer($source_storage, $this->configStorage);

      $storage_comparer->createChangelist();

      // TODO: simplify this when
      // https://www.drupal.org/project/drupal/issues/3123491 is fixed.
      $config_importer = new ConfigImporter(
        $storage_comparer,
        $this->eventDispatcher,
        $this->configManager,
        $this->persistentLockBackend,
        $this->typedConfigManager,
        $this->moduleHandler,
        $this->moduleInstaller,
        $this->themeHandler,
        $this->stringTranslation,
        $this->moduleExtensionList
      );

      $config_importer->import();

      return $hash;
    }
  }

  /**
   * Write a configuration item to files.
   *
   * @param \Drupal\Core\Config\Config $config
   *   The config object.
   * @param array $file_names
   *   The file names to which the configuration should be written.
   *
   * @return string[]
   *   An array of the filenames that were written.
   */
  public function writeBackConfig(Config $config, array $file_names) {
    $written_files = [];

    if ($file_names) {
      $data = $config->get();
      $config_name = $config->getName();
      unset($data['_core']);
      if ($entity_type_id = $this->configManager->getEntityTypeIdByName($config_name)) {
        unset($data['uuid']);
      }

      // Let everyone else have a change to update the exported data.
      $event = new ConfigDevelSaveEvent($file_names, $data);
      $this->eventDispatcher->dispatch(ConfigDevelEvents::SAVE, $event);
      $data = $event->getData();
      $file_names = $event->getFileNames();

      foreach ($file_names as $file_name) {
        try {
          $result = file_put_contents($file_name, (new InstallStorage())->encode($data));

          if ($result !== FALSE) {
            $written_files[] = $file_name;
          }
        }
        catch (DumpException $e) {
          // Do nothing. What could we do?
        }
      }
    }

    return $written_files;
  }

  /**
   * @param string $entity_type_id
   *
   * @return \Drupal\Core\Config\Entity\ConfigEntityStorageInterface
   */
  protected function getStorage($entity_type_id) {
    return $this->configManager->getEntityTypeManager()->getStorage($entity_type_id);
  }

  /**
   * @param \Drupal\Core\Config\Entity\ConfigEntityStorageInterface $entity_storage
   * @param string $config_name
   *
   * @return string
   */
  protected function getEntityId(ConfigEntityStorageInterface $entity_storage, $config_name) {
    // getIDFromConfigName adds a dot but getConfigPrefix has a dot already.
    return $entity_storage::getIDFromConfigName($config_name, $entity_storage->getEntityType()->getConfigPrefix());
  }

  /**
   * @return \Drupal\Core\Config\Config
   */
  protected function getSettings() {
    return $this->configFactory->get('config_devel.settings');
  }

}
