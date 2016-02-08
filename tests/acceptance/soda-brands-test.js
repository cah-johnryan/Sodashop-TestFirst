import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda brands', {
  beforeEach: function() {
    server.loadFixtures();
    visit('/create');
  },
  afterEach: function() {}
});

test('when creating a soda brand',
  function(assert) {
    assert.expect(1);

    fillIn('#brandNameInput input', 'My new soda brand');
    click('#createSodaBrand');

    andThen(function() {
      let result = $('.md-toolbar-tools span').filter(function() {
        return $(this).text() === 'My new soda brand';
      });
      assert.ok(result.length > 0, "the toolbar shows the new soda brand");
    });
  });
