
-- SUMMARY --

The Coffee module helps you to navigate through the Drupal admin faster,
inspired by Alfred and Spotlight (OS X). By default the management menu is
included in the results. Go to the config page to select an other of multiple
menus. 

For a full description of the module, visit the project page:
  http://drupal.org/project/coffee

To submit bug reports and feature suggestions, or to track changes:
  http://drupal.org/project/issues/1356930


-- REQUIREMENTS --

Menu module (core).


-- INSTALLATION --

* Install as usual, see http://drupal.org/node/70501 for further information.


-- CONFIGURATION --

* Configure user permissions in admin/people/permissions

  - access coffee

    Users in Roles with the "access coffee" permission can make use of the
    Coffee module.

* Configure which menus are included in the coffee results here:
  - admin/config/user-interface/coffee


-- USAGE --

Toggle Coffee using the keyboard shortcut alt + D
(alt + shift + D in Opera, alt + ctrl + D in Windows Internet Explorer).

Type the first few characters of the task that you want to perform. Coffee
will try to find the right result in as less characters as possible.
For example, if you want to go the the Appearance admin page, type ap and
just hit enter.

To open the first result in a new window, press command + enter on a mac or
ctrl + enter on a pc.

If your search query returns multiple results, you can use the arrow up/down
keys to choose the one you were looking for.

This will work for all Drupal admin pages.

If the Devel module is installed it will also look for items that Devel 
generates. For example; type 'clear' to get devel/cache/clear as result. 


-- COFFEE COMMANDS --

Coffee provides default commands that you can use.

:add
Rapidly add a node of a specific content type.

-- COFFEE HOOKS --

You can define your own commands in your module with hook_coffee_commands(),
see coffee.api.php for further documentation.


-- CONTRIBUTORS --

Maintainer
- Michael Mol 'michaelmol' <https://www.drupal.org/u/michaelmol>

Co-maintainer
- Marco 'willzyx' <https://www.drupal.org/u/willzyx>
- Alli Price 'heylookalive' <https://www.drupal.org/u/heylookalive>
- Oliver Köhler 'Nebel54' <https://www.drupal.org/u/nebel54>
