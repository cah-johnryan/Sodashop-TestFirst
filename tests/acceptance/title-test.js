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

  test('the application should by default route to a listing of sodas when clicking on the title', async function (assert) {
    visit('/2/sodas');
    await click('.title');
    assert.equal(currentURL(), '/1/sodas', 'routed to a listing for the 1st soda brand');
  });

  test('the application should by default route to a listing of sodas', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/1/sodas', 'routed to a listing for the 1st soda brand');
  });

  test('the title should state "Soda Shop"', async function (assert) {
    await visit('/');
    assert.equal($('.title').text().substring(0, 9), 'Soda Shop');
  });
});
