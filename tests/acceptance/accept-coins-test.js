import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accept coins', {
  beforeEach: function() {
    server.loadFixtures();
    visit('/');
  },
  afterEach: function() {}
});

test('When there are no coins inserted, the machine displays INSERT COIN',
  function(assert) {
    visit('/');

    andThen(function() {
      assert.equal($('#vendingMachineDisplay').text(), 'INSERT COIN');
    });
  });
