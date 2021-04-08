<?php

namespace Drupal\my_migrations\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\Event;

/**
 * Class RowSaveSubscriber.
 */
class RowSaveSubscriber implements EventSubscriberInterface {

  /**
   * Constructs a new RowSaveSubscriber object.
   */
  public function __construct() {}

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events['migrate.post_row_save'] = ['migratePostRowSave'];
    return $events;
  }

  /**
   * This method is called when the migrate.post_row_save is dispatched.
   *
   * This waits until a save of a news node, then
   * repairs the inline_block_usage table so that
   * rollbacks will work.
   *
   * @param \Symfony\Component\EventDispatcher\Event $event
   *   The dispatched event.
   */
  public function migratePostRowSave(Event $event) {
    $row = $event->getRow();
    // List of content types using layout builder.
    $haystack = [
      'page',
    ];
    if (in_array($row->getDestinationProperty('type'), $haystack)) {
      $ids = $event->getDestinationIdValues();
      $nid = array_pop($ids);
      $database = \Drupal::service('database');

      // Update the inline_block_usage table with the new node.
      $database->update('inline_block_usage')
        ->fields(['layout_entity_id' => $nid])
        ->isNull('layout_entity_id')
        ->execute();
    }
  }

}
