import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda', {
  beforeEach() {
      server.loadFixtures();
    },
    afterEach() {}
});

test('when trying to create a soda and not having logged in',
  function(assert) {
    visit('/1/sodas/create');
    andThen(function() {
      assert.equal(currentURL(), '/login',
        'you are directed to the login screen');
    });
  });

test('when trying to create a soda and not having the appropriate privileges',
  function(assert) {
    visit('/login');
    fillIn('#identification input', 'testUser');
    fillIn('#password input', 'testPassword');
    click('#authenticate');
    andThen(function() {
      visit('/1/sodas/create');
      andThen(function() {
        assert.equal(currentURL(), '/pageNotAvailable',
          'you are directed to the page not available screen');
      });
    });
  });
