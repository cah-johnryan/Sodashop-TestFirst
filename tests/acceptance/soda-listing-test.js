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
    assert.ok($('h3:contains("Bacon Soda")').length > 0,
      "it displays Bacon Soda");
    assert.ok($('h3:contains("Coffee Soda")').length > 0,
      "it displays Coffee Soda");
    assert.ok($('h3:contains("Buffalo Wing Soda")').length > 0,
      "it displays Buffalo Wing Soda");
    assert.ok($('h3:contains("Bacon Soda with Chocolate")').length > 0,
      "it displays Bacon Soda with Chocolate");
    assert.ok($('h3:contains("Peanut Butter & Jelly Soda")').length > 0,
      "it displays Peanut Butter & Jelly Soda");
    assert.ok($('h3:contains("Sweet Corn Soda")').length > 0,
      "it displays Sweet Corn Soda");
    assert.ok($('h3:contains("Ranch Dressing Soda")').length > 0,
      "it displays Ranch Dressing Soda");
    assert.ok($('h3:contains("Pumpkin Pie Soda")').length > 0,
      "it displays Pumpkin Pie Soda");
  });
});
