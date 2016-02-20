import {
  skip
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | select product', {
  beforeEach: function() {
    server.loadFixtures();
    visit('/');
  },
  afterEach: function() {}
});

skip('When selecting "Sweet Corn Soda" with $0.50 inserted into the machine',
  function(assert) {
    click('#quarter');
    click('#quarter');
    visit('/1/sodas');
    click('md-list-item:nth-child(1) button');

    andThen(function() {
      // assert that soda was dispensed
      assert.equal($('#vendingMachineDisplay').text(), 'INSERT COIN',
        'the machine displays INSERT COIN');

    });
  });
