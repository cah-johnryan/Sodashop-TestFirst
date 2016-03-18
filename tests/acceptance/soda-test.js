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

test('When updating the quantity of a soda that is sold out', function(assert) {
  visit('/login');
  fillIn('#identification input', 'testUser');
  fillIn('#password input', 'testPassword');
  click('#authenticate');
  andThen(function() {
    visit('/1/sodas');
    click('md-list-item:nth-child(7) a');
    andThen(function() {
      assert.ok($('button[action="beginEditSoda"]').length === 0);
      assert.ok($('button[action="updateSoda"]').length === 0);
    });
  });
});
