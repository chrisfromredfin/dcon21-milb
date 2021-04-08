INTRODUCTION
------------

The Config Devel provides tools to simplify the workflow when developing
modules that provide install configuration.

WARNING: This is a developer tool. Do not deploy in production environments.
Exercise caution and always use version control.

INSTALLATION
------------

 * Install as you would normally install a contributed Drupal module. Visit
   https://www.drupal.org/docs/8/extending-drupal-8/installing-drupal-8-modules
   for further information.

USAGE
-----

This module provides three different tools:

- Automated import of configuration files into the active storage. At the
  beginning of every request the changed files are saved the way as if it were
  dumped in the core config module provided "Single import" form.
- Automated export of configuration objects into files. Only a list of filenames
  is required, the configuration object names are automatically derived. One
  configuration object can be auto exported into multiple files. This is the
  equivalent of copying the export from the 'Single export' screen.
- Helps creating modules that behave somewhat similarly to Features export in
  Drupal 7. Under config_devel the module info.yml file should contain a list of
  config objects this module deals with. Then `drush config-devel-export
  MODULE_NAME` will write those config objects into the config/install directory
  of the module. Typically filenames wil be something like
  `modulename/config/install/foo.bar.yml`.

### Exporting configuration to re-usable modules

You can use the `config:devel-export` or `cde` drush command to export
configuration into a custom module. This is pretty much what you would with
Features in the Drupal 7 era. In order to achieve this you need to:

1. Either create a custom module with a basic .info.yml file, or use a custom
   module with existing functionality.
2. Enable the module, so that Drupal knows where to export the config files.
3. Find the configuration items you want to related to this module. You can do
   this by typing:
   ```
     drush config-status --format=list | grep SEARCH-TERM
   ```
   or by searching the config files in the config/sync folder.
4. Paste the wanted configuration names in the module's info.yml file, so that
   it looks like this:
    ```
    name: My Feature
    type: module
    description: The description.
    package: Features
    core: 8.x

    config_devel:
    - core.base_field_override.node.article.promote
    - core.entity_form_display.node.article.default
    - core.entity_view_display.node.article.default
    - core.entity_view_display.node.article.teaser
    - field.field.node.article.body
    - node.type.article
    ```
5. Run `drush config:devel-export my_module`. The resulting module folder will
   have all the files needed, enable it on another installation and you will get
   the expected configuration values.
