# Migrating Into Layout Builder Demo

For DrupalCon in 2021, I presented on Migrating Into Layout Builder.
For this presentation, I came up with this simple demo to illustrate
the main concepts covered.

## Setup

If you would like to run and poke around on this demo yourself,
you can clone or download this repo, then:

1. Run `composer install` to get all the dependencies in vendor, etc.
2. Import the database. If using DDEV, you can restore the snapshot provided. Otherwise, you can use the `source_data/db.sql.gz` file.

You will have a single node created that is the home page, which is a basic page built using layout builder.

## Changes

If you're NOT using the included DDEV configuration, you may need to change the paths in the migrations from /var/www/html to whatever makes sense in your environment.

The settings.ddev.php is set up for DDEV, but you can override any of it (especially $databases) with settings.local.php as you need to.

## Files

Everything related to the presentation is in web/modules/custom/my_migrations.

There are some additional helpful modules I used while developing the demo, which you can see in web/modules/contrib.
