<?php

/**
 * @file
 * Configuration development module drush integration.
 */

use Drupal\Core\Config\InstallStorage;

/**
 * Implements hook_drush_command().
 */
function config_devel_drush_command() {
  $items = array();

  $description = '';
  $description .= "List which configuration settings you want to export in the\n";
  $description .= "module's info file by listing them under 'config_devel', as shown below:\n";
  $description .= "\n";
  $description .= "config_devel:\n";
  $description .= "  install:\n";
  $description .= "    - entity.view_display.node.article.default\n";
  $description .= "    - entity.view_display.node.article.teaser\n";
  $description .= "    - field.instance.node.article.body\n";
  $description .= "  optional:\n";
  $description .= "    - field.instance.node.article.tags\n";

  $items['config-devel-export'] = array(
    'description' => "Write back configuration to module's config directory.\n" . $description,
    'arguments' => array(
      'module' => 'Module machine name.',
    ),
    'options' => array(
    ),
    'required-arguments' => TRUE,
    'examples' => array(
      'drush config-devel-export MODULE_NAME' => 'Write back configuration to the specified module, based on .info file.',
    ),
    'aliases' => array('cde', 'cd-em'),
  );

  $items['config-devel-import'] = array(
    'description' => "Import configuration from module's config directory to active storage.\n" . $description,
    'arguments' => array(
      'module' => 'Module machine name.',
    ),
    'options' => array(
    ),
    'required-arguments' => TRUE,
    'examples' => array(
      'drush config-devel-import MODULE_NAME' => 'Import configuration from the specified module into the active storage, based on .info file.',
    ),
    'aliases' => array('cdi', 'cd-im'),
  );

  $items['config-devel-import-one'] = array(
    'description' => "Import a single configuration item from module's config directory to active storage.\n" . $description,
    'arguments' => array(
      'path' => 'Config file name.',
    ),
    'options' => array(
    ),
    'required-arguments' => TRUE,
    'examples' => array(
      'drush config-devel-import-one system.site.yml' => 'Import the contents of system.site.yml into the config object system.site.',
      'drush config-devel-import-one system.site' => 'Import the standard input into the config object system.site. Helpful for scripting copying to remote',
    ),
    'aliases' => array('cdi1', 'cd-i1'),
  );

  return $items;
}

/**
 * Drush command callback.
 */
function drush_config_devel_export($extension) {
  // Determine the type of extension we're dealing with.
  $type = drush_config_devel_get_type($extension);

  if ($type) {
    // Get the config
    $config = drush_config_devel_get_config($type, $extension);

    // Process config
    if (isset($config['install'])) {
      drush_config_devel_process_config($config['install'], $type, $extension, InstallStorage::CONFIG_INSTALL_DIRECTORY);
    }

    // If we have any optional configuration, process that as well.
    if (isset($config['optional'])) {
      drush_config_devel_process_config($config['optional'], $type, $extension, InstallStorage::CONFIG_OPTIONAL_DIRECTORY);
    }
  }
  else {
    drush_set_error("Couldn't export configuration. The '$extension' extension is not enabled.");
  }
}

/**
 * Drush command callback.
 */
function drush_config_devel_import($extension) {
  // Determine the type of extension we're dealing with.
  $type = drush_config_devel_get_type($extension);

  if ($type) {
    // Get the config
    $config = drush_config_devel_get_config($type, $extension);

    // Import config
    if (isset($config['install'])) {
      drush_config_devel_import_config($config['install'], $type, $extension, InstallStorage::CONFIG_INSTALL_DIRECTORY);
    }

    // Import optional config
    if (isset($config['optional'])) {
      drush_config_devel_import_config($config['optional'], $type, $extension, InstallStorage::CONFIG_OPTIONAL_DIRECTORY);
    }
  }
  else {
    drush_set_error("Couldn't import configuration. The '$extension' extension is not enabled.");
  }
}

/**
 * Drush command callback.
 */
function drush_config_devel_import_one($path) {
  $contents = '';
  if (!file_exists($path)) {
    if (substr($path, -4) != '.yml') {
      $contents = file_get_contents('php://stdin');
    }
    elseif (!empty($_SERVER['PWD'])) {
      $path = $_SERVER['PWD'] . '/' . trim($path, '/');
    }
  }
  if ($contents || file_exists($path)) {
    \Drupal::service('config_devel.auto_import_subscriber')->importOne($path, '', $contents);
  }
  else {
    drush_log("file '$path' not found", 'error');
    exit;
  }
}

/**
 * Exports a list of configuration entities.
 *
 * @param array $config_list
 *   An array of configuration entities.
 * @param string $type
 *   The type of extension we're exporting, one of module or theme.
 * @param string $extension
 *   The module, theme or install profile we're exporting.
 * @param string $directory
 *   The directory we're exporting to.
 *
 * @return bool
 *   TRUE when the configuration was successfully exported. FALSE otherwise.
 */
function drush_config_devel_process_config($config_list, $type, $extension, $directory) {
  $config_path = drupal_get_path($type, $extension) . "/$directory";

  // Ensure the directory always exists.
  if (!file_exists($config_path) && !\Drupal::service('file_system')->mkdir($config_path, NULL, TRUE)) {
    drush_set_error('CONFIG_DEVEL_DIRECTORY_NOT_CREATED', sprintf('The %s directory could not be created', $config_path));
    return FALSE;
  }

  foreach ($config_list as $name) {
    $config = \Drupal::config($name);
    $file_names = array($config_path . '/' . $name . '.yml');

    \Drupal::service('config_devel.writeback_subscriber')->writeBackConfig($config, $file_names);
  }

  return TRUE;
}

/**
 * Imports a list of configuration entities
 *
 * @param array $config_list
 *   An array of configuration entities.
 * @param string $type
 *   The type of extension we're exporting, one of module or theme.
 * @param string $extension
 *   The module, theme or install profile we're exporting.
 * @param string $directory
 *   The directory we're exporting to.
 */
function drush_config_devel_import_config($config_list, $type, $extension, $directory) {
  $config_path = drupal_get_path($type, $extension) . "/$directory";
  foreach ($config_list as $name) {
    $file_name = $config_path . '/' . $name . '.yml';
    drush_config_devel_import_one($file_name);
  }
}

/**
 * Gets the config.
 *
 * @param  string $type
 *   module, theme or profile
 * @param  string $extension
 *   extension name
 * @return array
 *   An array containing install and optional config
 */
function drush_config_devel_get_config($type, $extension) {
  $filename = drupal_get_path($type, $extension) . '/' . $extension .'.info.yml';
  $info = \Drupal::service('info_parser')->parse($filename);

  $config = array();
  if (isset($info['config_devel'])) {
    // Keep backwards compatibility for the old format. This has config names
    // listed directly beneath 'config_devel', rather than an intermediate level
    // for 'install' and 'optional'.
    // Detect the old format based on whether there's neither of these two keys.
    if (!isset($info['config_devel']['install']) && !isset($info['config_devel']['optional'])) {
      $info['config_devel']['install'] = $info['config_devel'];
    }

    $config['install'] = $info['config_devel']['install'];

    // If we have any optional configuration, fetch that as well.
    if (isset($info['config_devel']['optional'])) {
      $config['optional'] = $info['config_devel']['optional'];
    }
  }

  return $config;
}

/**
 * Gets the type for the given extension.
 *
 * @param  string $extension
 *   extension name
 * @return string
 *   module, theme, profile, or FALSE if no valid extension provided.
 */
function drush_config_devel_get_type($extension) {
  $type = NULL;
  if (\Drupal::moduleHandler()->moduleExists($extension)) {
    $type = 'module';
  }
  elseif (\Drupal::service('theme_handler')->themeExists($extension)) {
    $type = 'theme';
  }
  elseif (\Drupal::installProfile() === $extension) {
    $type = 'profile';
  }

  return $type;
}
