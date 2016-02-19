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

test('When there are no coins inserted',
  function(assert) {
    andThen(function() {
      assert.equal($('#vendingMachineDisplay').text(), 'INSERT COIN',
        'the machine displays INSERT COIN');
    });
  });

test('When a quarter is inserted', function(assert) {

  andThen(function() {
    assert.equal($('#vendingMachineDisplay').text(), '0.25',
      'the machine displays "0.25"');
  });
})
