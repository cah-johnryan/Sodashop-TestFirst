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
  this.set('alternateMessageToDisplay', '');

  this.set('displayTemporaryMessage', (message) => {
    assert.equal(message, 'INVALID COIN');
  });

  this.render(hbs `{{vending-machine-display amountInserted=amountInserted alternateMessageToDisplay=alternateMessageToDisplay displayTemporaryMessage=(action "displayTemporaryMessage")}}`);

  this.$('#penny').click();
});

test('it updates the amount inserted appropriately when a quarter is inserted',
  function(
    assert) {
    this.set('amountInserted', 0.25);
    this.set('alternateMessageToDisplay', '');
    this.set('generateNotification', () => {});
    this.set('displayTemporaryMessage', () => {});
    this.render(hbs `{{vending-machine-display amountInserted=amountInserted alternateMessageToDisplay=alternateMessageToDisplay displayTemporaryMessage=(action "displayTemporaryMessage")}}`);

    this.$('#quarter').click();

    assert.equal(this.$('#vendingMachineDisplay>h4').text(), '$0.50 INSERTED',
      'the inserted amount should have increased by 25 cents');
  });

test('it updates the amount inserted appropriately when a dime is inserted',
  function(
    assert) {
    this.set('amountInserted', 0.25);
    this.set('alternateMessageToDisplay', '');
    this.set('generateNotification', () => {});
    this.set('displayTemporaryMessage', () => {});
    this.render(hbs `{{vending-machine-display amountInserted=amountInserted alternateMessageToDisplay=alternateMessageToDisplay displayTemporaryMessage=(action "displayTemporaryMessage")}}`);

    this.$('#dime').click();

    assert.equal(this.$('#vendingMachineDisplay>h4').text(), '$0.35 INSERTED',
      'the inserted amount should have increased by 10 cents');
  });

test('it updates the amount inserted appropriately when a nickel is inserted',
  function(assert) {
    this.set('amountInserted', 0.25);
    this.set('alternateMessageToDisplay', '');
    this.set('generateNotification', () => {});
    this.set('displayTemporaryMessage', () => {});
    this.render(hbs `{{vending-machine-display amountInserted=amountInserted alternateMessageToDisplay=alternateMessageToDisplay displayTemporaryMessage=(action "displayTemporaryMessage")}}`);

    this.$('#nickel').click();

    assert.equal(this.$('#vendingMachineDisplay>h4').text(), '$0.30 INSERTED',
      'the inserted amount should have increased by 5 cents');
  });
