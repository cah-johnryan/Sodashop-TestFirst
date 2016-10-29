import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda brand', {
  beforeEach() {
    server.loadFixtures();
    andThen(function() {
      if (($('#logout').length !== 0)) {
        click('#logout');
      }
    });
  },
  afterEach() {}
});

test('the create soda brands icon is not present', function(assert) {
  visit('/1/sodas');
  andThen(function() {
    assert.equal($('#createSodaBrandLink').is(":visible"), false,
      'the icon is not present');
  });
});

test('when trying to create a soda and and not having logged in',
  function(assert) {
    visit('/create');
    andThen(function() {
      assert.equal(currentURL(), '/login');
    });
  }
);

test('when trying to create a soda and not having the appropriate privileges',
  function(assert) {
    visit('/create');
    andThen(function() {
      assert.equal(currentURL(), '/pageNotAvailable');
    });
  }
);
