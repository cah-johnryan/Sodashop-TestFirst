import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | select soda admin', {
  beforeEach() {
      server.loadFixtures();
      visit('/login');
      fillIn('#identification input', 'testAdmin');
      fillIn('#password input', 'testPassword');
      click('#authenticate');
      andThen(function() {
        visit('/');
      });
    },
    afterEach() {}
});

test('When updating the quantity of a soda that is sold out', function(assert) {
  visit('/1/sodas');
  andThen(function() {
    assert.equal($('md-list-item:nth-child(7) h4').text(),
      'SOLD OUT', 'the product now states that it is sold out');
    click('md-list-item:nth-child(7) a');
    click('button[action="beginEditSoda"]');
    fillIn('#sodaEditQuantity input', '1');
    click('button[action="updateSoda"]');
    andThen(function() {
      assert.equal($('md-list-item:nth-child(7) h4').text(),
        '$0.50',
        'the product now states its price (not sold out)'
      );
    });
  });
});
