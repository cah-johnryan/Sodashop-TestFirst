import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | select soda', {
  beforeEach() {
      server.loadFixtures();
      andThen(function() {
        visit('/');
      });
    },
    afterEach() {}
});

test('When selecting "Sweet Corn Soda" with $0.50 inserted into the machine',
  function(assert) {
    click('#quarter');
    click('#quarter');
    visit('/1/sodas');
    click('md-list-item:nth-child(5) button');
    andThen(function() {
      assert.equal($('.ember-notify:nth-child(1) .md-list-item-text>span')
        .text(),
        'Sweet Corn Soda dispensed.  Thank you!',
        'the machine dispenses the product');
      assert.ok($('.ember-notify:nth-child(2)').length === 0, 'No change is returned');
      assert.equal($('#vendingMachineDisplay>h4').text(), 'INSERT COIN',
        'the machine displays "INSERT COIN"');
    });
  });

test('When selecting "Sweet Corn Soda" with $0.60 inserted into the machine',
  function(assert) {
    click('#quarter');
    click('#quarter');
    click('#dime');
    visit('/1/sodas');
    click('md-list-item:nth-child(5) button');
    andThen(function() {
      assert.equal($('.ember-notify:nth-child(1) .md-list-item-text>span')
        .text(),
        'Sweet Corn Soda dispensed.  Thank you!',
        'the machine dispenses the product');
      assert.equal($('.ember-notify:nth-child(2) .md-list-item-text>span')
        .text(),
        '$0.10 change',
        'the machine returns $0.10 change');
      assert.equal($('#vendingMachineDisplay>h4').text(), 'INSERT COIN',
        'the machine displays "INSERT COIN"');
    });
  });

test('When selecting "Sweet Corn Soda" when not enough money is inserted',
  function(assert) {
    assert.expect(2);
    click('#quarter');
    visit('/1/sodas');
    click('md-list-item:nth-child(5) button');
    andThen(function() {
      assert.equal($('.message').text(),
        'Not enough money has been inserted.  The price for Sweet Corn Soda is $0.50.',
        'the machine displays a message with the price for the soda');
      assert.equal($('#vendingMachineDisplay>h4').text(),
        '$0.25 INSERTED',
        'the machine displays "$0.25 INSERTED"');
    });
  });

test('When selecting a soda that is sold out', function(assert) {
  click('#quarter');
  visit('/1/sodas');
  click('md-list-item:nth-child(7) button');
  andThen(function() {
    assert.equal($('.message').text(),
      'This soda is sold out.  Please select another soda.',
      'the machine displays a message stating that the soda is sold out.'
    );
    assert.equal($('#vendingMachineDisplay>h4').text(),
      '$0.25 INSERTED',
      'the machine displays "$0.25 INSERTED"');
  });
});

test('When selecting the last soda', function(assert) {
  click('#quarter');
  click('#quarter');
  visit('/2/sodas');
  click('md-list-item:nth-child(1) button');
  andThen(function() {
    assert.equal($('.ember-notify:nth-child(1) .md-list-item-text>span').text(),
      'Apple Pie Soda dispensed.  Thank you!',
      'the machine dispenses the product');
    assert.ok($('.ember-notify:nth-child(2)').length === 0, 'No change is returned');
    assert.equal($('md-list-item:nth-child(1) h4').text(),
      'SOLD OUT', 'the product now states that it is sold out');
  });
});
