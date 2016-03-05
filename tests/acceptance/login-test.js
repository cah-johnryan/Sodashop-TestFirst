import {
  skip,
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

// TODO: constructor error
skip('after logging in the option to logout is provided', function(assert) {
  visit('/login');
  fillIn('#identification input', 'testUser');
  fillIn('#password input', 'testPassword');
  click('#login');
  andThen(function() {
    assert.ok($('#logout').text().trim().length !== 0,
      'the logout button appears as a result');
  });
});
