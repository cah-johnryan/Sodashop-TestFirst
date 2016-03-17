import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | title', {
  beforeEach() {
      server.loadFixtures();
      andThen(function() {
        visit('/');
      });
    },
    afterEach() {}
});

test('the title should state "Sodashop"', function(assert) {
  andThen(function() {
    assert.equal($('.title').text().split(" ")[0].trim(), 'Sodashop');
  });
});
