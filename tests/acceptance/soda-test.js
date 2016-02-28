import {
  test,
  skip
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda', {
  beforeEach() {
      server.loadFixtures();
      visit('/1/sodas');
    },
    afterEach() {}
});

skip('when creating a soda (mirage issue)',
  // This fails in mirage as for some reason the sodas model does not autoupdate on save.
  // manually verified that this feature function once I integrated firebase.
  function(assert) {
    assert.expect(1);

    click('#createSodaLink');
    andThen(function() {
      fillIn('#sodaNameInput input', 'My new soda');
      click('#createSoda');
      andThen(function() {
        assert.ok($('h3:contains("My new soda")').length > 0,
          'it displays "My new soda"');
      });
    });
  });

test('when viewing soda details', function(assert) {
  click('md-list-item:nth-child(1) a');
  andThen(function() {
    click('button[action="cancelEditSoda"]');
    andThen(function() {
      assert.equal(currentURL(), '/1/sodas',
        'the cancel button takes me back to the soda listing');
    });
  });
});

test('when creating a soda',
  function(assert) {
    assert.expect(1);
    click('#createSodaLink');
    andThen(function() {
      fillIn('#sodaNameInput input', 'My new soda');
      click('#createSoda');
      andThen(function() {
        click('md-toolbar button:nth-child(3) a');
        andThen(function() {
          click('md-toolbar button:nth-child(1) a');
          andThen(function() {
            assert.ok($('h3:contains("My new soda")').length >
              0,
              'it displays "My new soda"');
          });
        });
      });
    });
  });

test('when editing on a soda in the listing', function(assert) {
  assert.expect(7);
  click('md-list-item:nth-child(1) a');
  andThen(function() {
    click('button[action="beginEditSoda"]');
    assert.ok($('md-card h2').text(), 'Bacon Soda with Chocolate',
      'the name is displayed'
    );
    assert.equal($('#sodaCost').text(), '0.5',
      'the price is displayed'
    );
    assert.equal($('#sodaQuantity').text(), '2',
      'the quantity is displayed'
    );
    assert.equal($('md-card p').text().trim(),
      "Description: Taste's like bacon",
      'the description is displayed'
    );
    andThen(function() {
      fillIn('#sodaEditName input', 'New edited soda name');
      fillIn('#sodaEditCost input', '123.45');
      fillIn('#sodaEditQuantity input', '0');
      fillIn('#sodaEditDescription input',
        'New edited soda description');
      click('button[action="updateSoda"]');
      andThen(function() {
        assert.ok($('h3:contains("New edited soda name")').length >
          0,
          'the name changes properly to "New edited soda name"'
        );
        assert.equal($('md-list-item:nth-child(1) h4').text(),
          'SOLD OUT',
          'the product now states that it is sold out');
        assert.ok($('p:contains("New edited soda description")')
          .length >
          0,
          'the description changes properly to "New edited soda description"'
        );

      });
    });
  });
});
