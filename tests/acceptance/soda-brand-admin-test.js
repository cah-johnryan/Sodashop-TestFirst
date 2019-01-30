import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {click, fillIn, visit} from '@ember/test-helpers';
// import {authenticateSession} from 'sodashop-test-first/tests/helpers/ember-simple-auth';
import $ from 'jquery';
import moduleForAcceptance from 'sodashop-test-first/tests/helpers/module-for-acceptance';

module('Acceptance | soda brand admin', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    visit('/');
    // authenticateSession(application, {'authorizationCode': 'dummyValue'});
  });

  test('the create soda brands icon is present', async function (assert) {
    await visit('/1/sodas');
    assert.ok($('#createSodaBrandLink').is(":visible"),
      'the icon is present');
  });

  test('when creating a soda brand', async function (assert) {
    await click('#createSodaBrandLink');
    fillIn('#brandNameInput input', 'My new soda brand');
    await click('#createSodaBrand');
    let result = $('.md-toolbar-tools span').filter(function () {
      return $(this).text() === 'My new soda brand';
    });
    assert.ok(result.length > 0, 'the toolbar shows the new soda brand');
    assert.ok($('.sodaImage').length > 0,
      'the image for the soda brand is shown');
  });
});


moduleForAcceptance('Acceptance | soda brand admin', {
  beforeEach() {
    server.loadFixtures();
    visit('/');
    authenticateSession(application, {'authorizationCode': 'dummyValue'});
  },
  afterEach() {
  }
});

test('the create soda brands icon is present', function (assert) {
  visit('/1/sodas');
  andThen(function () {
    assert.ok($('#createSodaBrandLink').is(":visible"),
      'the icon is present');
  });
});

test('when creating a soda brand',
  function (assert) {
    click('#createSodaBrandLink');
    andThen(function () {
      fillIn('#brandNameInput input', 'My new soda brand');
      click('#createSodaBrand');
      andThen(function () {
        let result = $('.md-toolbar-tools span').filter(function () {
          return $(this).text() === 'My new soda brand';
        });
        assert.ok(result.length > 0, 'the toolbar shows the new soda brand');
        assert.ok($('.sodaImage').length > 0,
          'the image for the soda brand is shown');
      });
    });
  }
);
