import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {click, fillIn, visit} from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | select soda admin', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    if (($('#login').length !== 0)) {
      click('#login');
    }
  });

  test('When updating the quantity of a soda that is sold out', async function (assert) {
    await visit('/1/sodas');
    assert.equal($('md-list-item:nth-child(7) h4').text(),
      'SOLD OUT', 'the product now states that it is sold out');
    await click('md-list-item:nth-child(7) a');
    await click('button[action="beginEditSoda"]');
    await fillIn('#sodaEditQuantity input', '1');
    await click('button[action="updateSoda"]');
    assert.equal($('md-list-item:nth-child(7) h4').text(),
      '$0.50',
      'the product now states its price (not sold out)'
    );
  });
});
