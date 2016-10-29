import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accept coins', {
  beforeEach() {
    server.loadFixtures();
    andThen(function() {
      if (($('#logout').length !== 0)) {
        click('#logout');
      }
      visit('/');
    });
  },
  afterEach() {}
});

test('When there are no coins inserted',
  function(assert) {
    andThen(function() {
      assert.equal($('#vendingMachineDisplay>h4').text(), 'INSERT COIN',
        'the machine displays INSERT COIN');
    });
  });

test('When a quarter is inserted', function(assert) {
  click('#quarter');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.25 INSERTED',
      'the machine displays "$0.25 INSERTED"');
  });
});

test('When a dime is inserted', function(assert) {
  click('#dime');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.10 INSERTED',
      'the machine displays "$0.10 INSERTED"');
  });
});

test('When a nickel is inserted', function(assert) {
  click('#nickel');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.05 INSERTED',
      'the machine displays "$0.05 INSERTED"');
  });
});

test('When a penny is inserted', function(assert) {
  click('#penny');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay>h4').text(), 'INVALID COIN',
      'the machine displays "INVALID COIN"');
  });
});

test('When a nickel and a dime is inserted', function(assert) {
  click('#nickel');
  click('#dime');
  andThen(function() {
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.15 INSERTED',
      'the machine displays "$0.15 INSERTED"');
  });
});
