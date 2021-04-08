<?php

namespace Drupal\my_migrations\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\Event;
use Drupal\Core\Database\Driver\mysql\Connection;
use Drupal\layout_builder\InlineBlockUsage;

/**
 * Class RollbackSubscriber.
 */
class RollbackSubscriber implements EventSubscriberInterface {
  const BATCH_SIZE = 500;

  /**
   * Drupal\Core\Database\Driver\mysql\Connection definition.
   *
   * @var \Drupal\Core\Database\Driver\mysql\Connection
   */
  protected $database;

  /**
   * Constructs a new RollbackSubscriber object.
   */
  public function __construct(Connection $database) {
    $this->database = $database;
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events['migrate.post_rollback'] = ['migratePostRollback'];
    return $events;
  }

  /**
   * This method is called when the migrate.post_rollback is dispatched.
   *
   * @param \Symfony\Component\EventDispatcher\Event $event
   *   The dispatched event.
   */
  public function migratePostRollback(Event $event) {
    $inline_block_manager = new InlineBlockUsage($this->database);

    while ($unused = $inline_block_manager->getUnused(self::BATCH_SIZE)) {
      $inline_block_manager->deleteUsage($unused);
      \Drupal::messenger()->addMessage('Removed unused inline block usage.', 'status', TRUE);
    }
  }

}
