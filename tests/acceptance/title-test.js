import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | title', {
  beforeEach() {
      server.loadFixtures();
      visit('/');
    },
    afterEach() {}
});

test('the title should state "Sodashop"', function(assert) {
  assert.expect(1);

  andThen(function() {
    assert.equal($('#title').text(), 'Sodashop');
  });
});
