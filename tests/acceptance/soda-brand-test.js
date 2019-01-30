import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {click, currentURL, visit} from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | soda brand', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    if (($('#logout').length !== 0)) {
      click('#logout');
    }
  });

  test('the create soda brands icon is not present', async function (assert) {
    await visit('/1/sodas');
    assert.equal($('#createSodaBrandLink').is(":visible"), false,
      'the icon is not present');
  });

  test('when trying to create a soda and and not having logged in', async function (assert) {
      await visit('/create');
      assert.equal(currentURL(), '/login');
    }
  );

  test('when trying to create a soda and not having the appropriate privileges', async function (assert) {
      await visit('/create');
      assert.equal(currentURL(), '/pageNotAvailable');
    }
  );

});
