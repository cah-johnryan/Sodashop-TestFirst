import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda brand', {
  beforeEach() {
      server.loadFixtures();
      visit('/login');
      fillIn('#identification input', 'testUser');
      fillIn('#password input', 'testPassword');
      click('#authenticate');
      andThen(function() {
        visit('/');
      });
    },
    afterEach() {}
});

test('when trying to create a soda and not having the appropriate privileges',
  function(assert) {
    visit('/create');
    andThen(function() {
      assert.equal(currentURL(), '/pageNotAvailable');
    });
  }
);
