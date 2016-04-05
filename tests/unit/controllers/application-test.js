import {
  moduleFor, test
}
from 'ember-qunit';
import sinon from 'sinon';

let controller;

moduleFor('controller:application', 'Unit | Controller | application', {
  beforeEach() {
      controller = this.subject();
      controller.transitionToRoute = sinon.spy();
    },
    afterEach() {}
});

test('trying to return home (to the root of the application)', function(assert) {
  assert.expect(1);
  controller.send('returnToHome');

  assert.ok(controller.transitionToRoute.calledWith('sodaBrands.sodaBrand.sodas', 1),
    'transitions back to the root of the application'
  );
});
