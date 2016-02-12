import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda brands', {
  beforeEach: function() {
    server.loadFixtures();
    visit('/');
  },
  afterEach: function() {}
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
      assert.ok($('.sodaBrandImage').length > 0,
        'the image for the soda brand is shown');
    });
  });

test('when a soda brand is selected', function(assert) {
  assert.expect(2);

  click('md-toolbar a[href="/1/sodas"]');

  andThen(function() {
    assert.ok($('.sodaBrandImage').length > 0,
      'the image for the soda brand is shown');
    assert.equal($('#sodaBrandName').text(), "Lester's Fixins'",
      'it displays the name of the soda brand.');
  });
});
