<?php

namespace Drupal\Tests\coffee\Kernel;

use Drupal\Core\Url;
use Drupal\KernelTests\KernelTestBase;
use Drupal\node\Entity\NodeType;
use Drupal\user\Entity\Role;
use Drupal\user\Entity\User;

/**
 * Tests hook_coffee_commands().
 *
 * @group coffee
 */
class CoffeeCommandsTest extends KernelTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = ['coffee', 'coffee_test', 'system', 'node', 'user'];

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();

    $this->installSchema('system', ['sequences', 'router']);
    $this->installEntitySchema('user');
    $this->installConfig('coffee');

    // Create the node bundles required for testing.
    $node_type = NodeType::create([
      'type' => 'page',
      'name' => 'Basic page',
    ]);
    $node_type->save();

    // Create user that can create a node for our bundle.
    $role = Role::create([
      'id' => 'page_creator',
      'permissions' => ['create page content'],
    ]);
    $role->save();

    $user = User::create([
      'name' => $this->randomMachineName(),
      'roles' => [$role->id()],
    ]);
    $user->save();

    // Set current user.
    \Drupal::currentUser()->setAccount($user);
  }

  /**
   * Tests hook_coffee_commands().
   */
  public function testHookCoffeeCommands() {
    $expected_hook = [
      'value' => Url::fromRoute('<front>')->toString(),
      'label' => t('Coffee hook fired!'),
      'command' => ':test',
    ];

    $expected_system = [
      'value' => Url::fromRoute('<front>')->toString(),
      'label' => t('Go to front page'),
      'command' => ':front',
    ];

    $expected_node = [
      'value' => Url::fromRoute('node.add', ['node_type' => 'page'])->toString(),
      'label' => 'Basic page',
      'command' => ':add Basic page',
    ];

    $commands = \Drupal::moduleHandler()->invokeAll('coffee_commands');
    $this->assertContains($expected_hook, $commands);
    $this->assertContains($expected_system, $commands);
    $this->assertContains($expected_node, $commands);
  }

}
