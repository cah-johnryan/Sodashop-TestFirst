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
  this.set('temporaryDisplayMessage', '');
  this.set('generateNotification', () => {});
  this.render(hbs `{{vending-machine-display amountInserted=amountInserted generateNotification=(action generateNotification)}}`);

  this.$('#penny').click();

  assert.equal(this.get('temporaryDisplayMessage'), 'INVALID COIN',
    'A temporary display message that an invalid coin has been inserted should appear (WHY WON\'T THIS WORK!!!!!!!!!!)'
  );
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
