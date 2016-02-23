import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | soda listing', {
  beforeEach: function() {
    server.loadFixtures();
  },
  afterEach: function() {}
});

test('visiting the soda listing for "Lesters Fixins"', function(assert) {
  assert.expect(9);
  visit('/1/sodas');

  andThen(function() {
    assert.equal($('md-list-item').length, 8,
      "exactly eight items are displayed");
    assert.equal($('md-list-item:nth-child(1) h3').text(),
      'Bacon Soda with Chocolate',
      "it displays Bacon Soda with Chocolate");
    assert.equal($('md-list-item:nth-child(2) h3').text(),
      'Buffalo Wing Soda',
      "it displays Buffalo Wing Soda");
    assert.equal($('md-list-item:nth-child(3) h3').text(),
      'Coffee Soda',
      "it displays Coffee Soda");
    assert.equal($('md-list-item:nth-child(4) h3').text(),
      'Peanut Butter & Jelly Soda',
      "it displays Peanut Butter & Jelly Soda");
    assert.equal($('md-list-item:nth-child(5) h3').text(),
      'Sweet Corn Soda',
      "it displays Sweet Corn Soda");
    assert.equal($('md-list-item:nth-child(6) h3').text(),
      'Ranch Dressing Soda',
      "it displays Ranch Dressing Soda");
    assert.equal($('md-list-item:nth-child(7) h3').text(),
      'Pumpkin Pie Soda',
      "it displays Pumpkin Pie Soda");
    assert.equal($('md-list-item:nth-child(8) h3').text(), 'Bacon Soda',
      "it displays Bacon Soda");



  });
});
