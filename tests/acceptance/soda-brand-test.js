import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda brand', {
  beforeEach() {
      server.loadFixtures();
      visit('/login');
      fillIn('#identification input', 'testUser');
      fillIn('#password input', 'testPassword');
      click('#login');
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

test('when a soda brand is selected', function(assert) {
  assert.expect(2);

  click('md-toolbar a[href="/1/sodas"]');
  andThen(function() {
    assert.ok($('.sodaImage').length > 0,
      'the image for the soda brand is shown');
    assert.equal($('#sodaBrandName').text(), "Lester's Fixins'",
      'it displays the name of the soda brand.');
  });
});

test('when clicking on the soda brand image', function(assert) {
  assert.expect(1);

  click('md-toolbar a[href="/1/sodas"]');
  andThen(function() {
    click('md-list-item:nth-child(1) button');
    andThen(function() {
      click('#sodaBrandImage');
      andThen(function() {
        assert.equal(currentURL(), '/1/sodas',
          'I was routed to the soda listing');
      });
    });
  });
});
