import {
  moduleFor, test
}
from 'ember-qunit';
import sinon from 'sinon';

let controller;

moduleFor('controller:application', 'Unit | Controller | application', {
  beforeEach: function() {
    controller = this.subject();
    controller.transitionToRoute = sinon.spy();
  },
  afterEach: function() {}
});

test('trying to return home (to the root of the application)', function(assert) {
  assert.expect(1);
  controller.send('returnToHome');

  assert.ok(controller.transitionToRoute.calledWith('/'),
    'transitions back to the root of the application'
  );
});
