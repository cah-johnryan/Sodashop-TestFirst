import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | title', {
  beforeEach() {
      server.loadFixtures();
      visit('/login');
      fillIn('#identification', 'testUser');
      fillIn('#password', 'testPassword');
      click('#login');
      andThen(function() {
        visit('/');
      });
    },
    afterEach() {}
});

test('the title should state "Sodashop"', function(assert) {
  assert.expect(1);

  andThen(function() {
    assert.equal($('#title').text(), 'Sodashop');
  });
});
