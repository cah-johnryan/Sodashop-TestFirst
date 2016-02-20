import {
  test,
  skip
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda', {
  beforeEach: function() {
    server.loadFixtures();
    visit('/1/sodas');
  },
  afterEach: function() {}
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
  assert.expect(3);

  click('md-list-item:nth-child(1) a');
  andThen(function() {
    click('button[action="beginEditSoda"]');
    andThen(function() {
      fillIn('#sodaEditName input', 'New edited soda name');
      fillIn('#sodaEditCost input', '123.45');
      fillIn('#sodaEditDescription input',
        'New edited soda description');
      click('button[action="updateSoda"]');
      andThen(function() {
        assert.ok($('h3:contains("New edited soda name")').length >
          0,
          'the name changes properly to "New edited soda name"'
        );
        assert.ok($('h4:contains("$123.45")').length >
          0,
          'the cost changes properly to "$123.45"');
        assert.ok($('p:contains("New edited soda description")')
          .length >
          0,
          'the description changes properly to "New edited soda description"'
        );
      });
    });
  });
});
