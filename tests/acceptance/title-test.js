import {
  test
}
from 'qunit';
import moduleForAcceptance from
  'sodashop-test-first/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | title', {
  beforeEach() {
      server.loadFixtures();
    },
    afterEach() {}
});


test('the application should by default route to a listing of sodas when clicking on the title', function(assert) {
  visit('/2/sodas');
  click('.title');
  andThen(function() {
    assert.equal(currentURL(), '/1/sodas', 'routed to a listing for the 1st soda brand');
  });
});

test('the application should by default route to a listing of sodas', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/1/sodas', 'routed to a listing for the 1st soda brand');
  });
});

test('the title should state "Sodashop"', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal($('.title').text().split(" ")[0].trim(), 'Sodashop');
  });
});
