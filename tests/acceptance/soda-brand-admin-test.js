import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda brand admin', {
  beforeEach() {
    server.loadFixtures();
    andThen(function() {
      if (($('#login').length !== 0)) {
        click('#login');
      }
      visit('/');
    });
  },
  afterEach() {}
});

test('the create soda brands icon is present', function(assert) {
  visit('/1/sodas');
  andThen(function() {
    assert.ok($('#createSodaBrandLink').is(":visible"),
      'the icon is present');
  });
});

test('when creating a soda brand',
  function(assert) {
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
