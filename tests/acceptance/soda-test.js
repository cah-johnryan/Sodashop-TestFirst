import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {click, currentURL, visit} from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | soda', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    if (($('#logout').length !== 0)) {
      click('#logout');
    }
  });

  test('when trying to create a soda and not having logged in', async function (assert) {
    await visit('/1/sodas/create');
    assert.equal(currentURL(), '/login',
      'you are directed to the login screen');
  });

  test('when trying to create a soda and not having the appropriate privileges', async function (assert) {
    await visit('/1/sodas/create');
    assert.equal(currentURL(), '/pageNotAvailable',
      'you are directed to the page not available screen');
  });

  test('When updating the quantity of a soda that is sold out', async function (assert) {
    visit('/1/sodas');
    await click('md-list-item:nth-child(7) a');
    assert.ok($('button[action="beginEditSoda"]').length === 0);
    assert.ok($('button[action="updateSoda"]').length === 0);
  });

});


