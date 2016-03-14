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
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
    assert.equal($('#identification input').text(), '');
    assert.equal($('#password input').text(), '');
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

test('when logging out I am returned to a fresh login screen',
  function(assert) {
    visit('/login');
    fillIn('#identification input', 'testUser');
    fillIn('#password input', 'testPassword');
    click('#login');
    andThen(function() {
      click('#logout');
      andThen(function() {
        assert.equal(currentURL(), '/login');
        assert.equal($('#identification input').text(), '');
        assert.equal($('#password input').text(), '');
      });
    });
  });
