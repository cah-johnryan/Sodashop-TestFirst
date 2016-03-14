import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login', {
  beforeEach() {
      server.loadFixtures();
    },
    afterEach() {}
});

test('visiting /login', function(assert) {
  server.loadFixtures();
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('after logging in the option to logout is provided',
  function(assert) {
    visit('/login');
    fillIn('#identification input', 'testUser');
    fillIn('#password input', 'testPassword');
    click('#login');
    andThen(function() {
      assert.ok($('#logout').text().trim().length !== 0,
        'the logout button appears as a result');
      assert.equal($('.logout>span').text(), 'Welcome Test User');
    });
  });
