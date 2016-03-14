import {
  skip
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda', {
  beforeEach() {
      server.loadFixtures();
      visit('/login');
      fillIn('#identification input', 'testUser');
      fillIn('#password input', 'testPassword');
      click('#authenticate');
      andThen(function() {
        server.loadFixtures();
        visit('/1/sodas');
      });
    },
    afterEach() {}
});

skip('when trying to create a soda and not having the appropriate privileges',
  function(assert) {
    visit('/1/sodas/create');
    andThen(function() {
      assert.equal(currentURL(), '/login');
    });
  });
