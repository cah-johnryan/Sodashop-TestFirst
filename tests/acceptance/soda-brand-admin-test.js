import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda brand admin', {
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

test('when creating a soda brand',
  function(assert) {
    assert.expect(2);
    click('#createSodaBrandLink');
    fillIn('#brandNameInput input', 'My new soda brand');
    click('#createSodaBrand');
    andThen(function() {
      let result = $('.md-toolbar-tools span').filter(function() {
        return $(this).text() === 'My new soda brand';
      });
      assert.ok(result.length > 0, 'the toolbar shows the new soda brand');
      assert.ok($('.sodaImage').length > 0,
        'the image for the soda brand is shown');
    });
  }
);
