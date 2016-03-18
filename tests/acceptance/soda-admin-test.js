import {
  skip, test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda admin', {
  beforeEach() {
      server.loadFixtures();
      visit('/login');
      fillIn('#identification input', 'testAdmin');
      fillIn('#password input', 'testPassword');
      click('#authenticate');
      andThen(function() {
        visit('/1/sodas');
      });
    },
    afterEach() {}
});

test('when viewing soda details', function(assert) {
  click('md-list-item:nth-child(1) a');
  click('button[action="cancelViewDetails"]');
  andThen(function() {
    assert.equal(currentURL(), '/1/sodas',
      'the cancel button takes me back to the soda listing');
  });
});

skip('when creating a soda (mirage issue)',
  // This fails in mirage as for some reason the sodas model does not autoupdate on save.
  // manually verified that this feature function once I integrated firebase.
  function(assert) {
    assert.expect(1);
    click('#createSodaLink');
    fillIn('#sodaNameInput input', 'My new soda');
    click('#createSoda');
    andThen(function() {
      assert.ok($('h3:contains("My new soda")').length > 0,
        'it displays "My new soda"');
    });
  });

// TODO: !!! Mirage won't maintain the updated values on the redirect !!!
skip('when editing on a soda in the listing (mirage issue)', function(assert) {
  click('md-list-item:nth-child(1) a');
  click('button[action="beginEditSoda"]');
  andThen(function() {
    assert.ok($('#sodaEditName input').val(),
      'Bacon Soda with Chocolate',
      'the name is displayed'
    );
    assert.equal($('#sodaEditCost input').val(), '0.5',
      'the price is displayed'
    );
    assert.equal($('#sodaEditQuantity input').val(), '2',
      'the quantity is displayed'
    );
    assert.equal($('#sodaEditDescription input').val().trim(),
      "Taste's like bacon",
      'the description is displayed'
    );
    fillIn('#sodaEditName input', 'New edited soda name');
    fillIn('#sodaEditCost input', '123.45');
    fillIn('#sodaEditQuantity input', '0');
    fillIn('#sodaEditDescription input',
      'New edited soda description');
    click('button[action="updateSoda"]');
    andThen(function() {
      assert.ok($('h3:contains("New edited soda name")')
        .length >
        0,
        'the name changes properly to "New edited soda name"'
      );
      assert.equal($('md-list-item:nth-child(1) h4').text(),
        'SOLD OUT',
        'the product now states that it is sold out');
      assert.ok($(
          'p:contains("New edited soda description")'
        )
        .length >
        0,
        'the description changes properly to "New edited soda description"'
      );
    });
  });
});
