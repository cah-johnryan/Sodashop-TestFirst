import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {click, visit} from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | select soda', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    if (($('#logout').length !== 0)) {
      click('#logout');
    }
    visit('/');
  });

  test('When selecting "Sweet Corn Soda" with $0.50 inserted into the machine', async function (assert) {
    click('#quarter');
    click('#quarter');
    visit('/1/sodas');
    await click('md-list-item:nth-child(5) button');
    assert.equal($('.ember-notify:nth-child(1) .md-list-item-text>span')
        .text(),
      'Sweet Corn Soda dispensed.  Thank you!',
      'the machine dispenses the product');
    assert.ok($('.ember-notify:nth-child(2)').length === 0, 'No change is returned');
    assert.equal($('#vendingMachineDisplay>h4').text(), 'INSERT COIN',
      'the machine displays "INSERT COIN"');
  });

  test('When selecting "Sweet Corn Soda" with $0.60 inserted into the machine', async function (assert) {
    click('#quarter');
    click('#quarter');
    click('#dime');
    visit('/1/sodas');
    await click('md-list-item:nth-child(5) button');
    assert.equal($('.ember-notify:nth-child(1) .md-list-item-text>span')
        .text(),
      'Sweet Corn Soda dispensed.  Thank you!',
      'the machine dispenses the product');
    assert.equal($('.ember-notify:nth-child(2) .md-list-item-text>span')
        .text(),
      '$0.10 change',
      'the machine returns $0.10 change');
    assert.equal($('#vendingMachineDisplay>h4').text(), 'INSERT COIN',
      'the machine displays "INSERT COIN"');
  });

  test('When selecting "Sweet Corn Soda" when not enough money is inserted', async function (assert) {
    click('#quarter');
    visit('/1/sodas');
    await click('md-list-item:nth-child(5) button');
    assert.equal($('#vendingMachineDisplay>h4').text(),
      'PRICE $0.50',
      'the machine displays "PRICE $0.50"');
  });

  test('When selecting a soda that is sold out', async function (assert) {
    click('#quarter');
    visit('/1/sodas');
    await click('md-list-item:nth-child(7) button');
    assert.equal($('#vendingMachineDisplay>h4').text(), 'SOLD OUT',
      'the machine displays "SOLD OUT"');
  });

  test('When selecting the last soda', async function (assert) {
    click('#quarter');
    click('#quarter');
    visit('/2/sodas');
    await click('md-list-item:nth-child(1) button');
    assert.equal($('.ember-notify:nth-child(1) .md-list-item-text>span').text(),
      'Apple Pie Soda dispensed.  Thank you!',
      'the machine dispenses the product');
    assert.ok($('.ember-notify:nth-child(2)').length === 0, 'No change is returned');
    assert.equal($('md-list-item:nth-child(1) h4').text(),
      'SOLD OUT', 'the product now states that it is sold out');
  });
});


