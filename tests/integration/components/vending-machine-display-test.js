import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vending-machine-display',
  'Integration | Component | vending machine display', {
    integration: true
  });

test('it generates an error notification when a penny is selected', function(
  assert) {
  this.set('amountInserted', 0.25);
  this.set('generateNotification', (notificationType, message, options) => {
    let expectedNotificationType = 'error';
    let expectedMessage =
      'This soda machine is not able to accept pennies';
    assert.equal(notificationType, expectedNotificationType,
      'the notification generated was not an error');
    assert.equal(message, expectedMessage,
      'the notification message was not appropriate to the error');
    assert.equal(options, undefined,
      'it should use the default notification options');
  });
  this.render(hbs `{{vending-machine-display amountInserted=amountInserted generateNotification=(action generateNotification)}}`);

  this.$('#penny').click();

  this.set('amountInserted', 0.25);
});

test('it updates the amount inserted appropriately when a quarter is inserted',
  function(
    assert) {
    this.set('amountInserted', 0.25);
    this.set('generateNotification', () => {});
    this.render(hbs `{{vending-machine-display amountInserted=amountInserted generateNotification=(action generateNotification)}}`);

    this.$('#quarter').click();

    assert.equal(this.get('amountInserted'), 0.50,
      'the inserted amount should have increased by 25 cents');
  });

test('it updates the amount inserted appropriately when a dime is inserted',
  function(
    assert) {
    this.set('amountInserted', 0.25);
    this.set('generateNotification', () => {});
    this.render(hbs `{{vending-machine-display amountInserted=amountInserted generateNotification=(action generateNotification)}}`);

    this.$('#dime').click();

    assert.equal(this.get('amountInserted'), 0.35,
      'the inserted amount should have increased by 10 cents');
  });

test('it updates the amount inserted appropriately when a nickel is inserted',
  function(
    assert) {
    this.set('amountInserted', 0.25);
    this.set('generateNotification', () => {});
    this.render(hbs `{{vending-machine-display amountInserted=amountInserted generateNotification=(action generateNotification)}}`);

    this.$('#nickel').click();

    assert.equal(this.get('amountInserted'), 0.30,
      'the inserted amount should have increased by 5 cents');
  });
