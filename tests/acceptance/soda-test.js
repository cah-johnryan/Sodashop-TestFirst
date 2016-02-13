import {
  test
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

test('when creating a soda',
  function(assert) {
    assert.expect(2);

    click('#createSodaLink');
    fillIn('#sodaNameInput input', 'My new soda');
    click('#createSoda');

    andThen(function() {
      assert.ok($('h3:contains("My new soda")').length > 0,
        'it displays "My new soda"');
    });
  });
