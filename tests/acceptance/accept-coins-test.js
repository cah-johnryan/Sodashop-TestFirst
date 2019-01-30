import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {click, visit} from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | accept coins', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    if (($('#logout').length !== 0)) {
      click('#logout');
    }
    visit('/');
  });

  test('When a dime is inserted', async function (assert) {
    await click('#dime');
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.10 INSERTED',
      'the machine displays "$0.10 INSERTED"');
  });

  test('When a nickel is inserted', async function (assert) {
    await click('#nickel');
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.05 INSERTED',
      'the machine displays "$0.05 INSERTED"');
  });

  test('When a penny is inserted', async function (assert) {
    await click('#penny');
    assert.equal($('#vendingMachineDisplay>h4').text(), 'INVALID COIN',
      'the machine displays "INVALID COIN"');
  });

  test('When a nickel and a dime is inserted', async function (assert) {
    await click('#nickel');
    await click('#dime');
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.15 INSERTED',
      'the machine displays "$0.15 INSERTED"');
  });
});


moduleForAcceptance('Acceptance | accept coins', {
  beforeEach() {
    server.loadFixtures();
    andThen(function () {
      if (($('#logout').length !== 0)) {
        click('#logout');
      }
      visit('/');
    });
  },
  afterEach() {
  }
});

v
