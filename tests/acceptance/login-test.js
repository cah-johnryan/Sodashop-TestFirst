import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login', {
  beforeEach() {
      server.loadFixtures();
      visit('/');
    },
    afterEach() {}
});

test('when clicking the login button', function(assert) {
  click('#login');
  andThen(function() {
    assert.equal(currentURL(), '/login',
      'you are directed to the login screen');
    assert.equal($('#identification input').text(), '',
      'it prompts you for a user name');
    assert.equal($('#password input[type="password"]').text(), '',
      'it prompts you for a password in a protected password field');
  });
});

test('after logging in the option to logout is provided',
  function(assert) {
    click('#login');
    fillIn('#identification input', 'testUser');
    fillIn('#password input', 'testPassword');
    click('#authenticate');
    andThen(function() {
      assert.ok($('#logout').text().trim().length !== 0,
        'the logout button appears as a result');
      assert.equal($('.logout>span').text(), 'Welcome Test User');
    });
  });

test('when logging out I am returned to a fresh login screen',
  function(assert) {
    click('#login');
    fillIn('#identification input', 'testUser');
    fillIn('#password input', 'testPassword');
    click('#authenticate');
    andThen(function() {
      click('#logout');
      click('#login');
      andThen(function() {
        assert.equal(currentURL(), '/login');
        assert.equal($('#identification input').text(), '');
        assert.equal($('#password input').text(), '');
      });
    });
  });
