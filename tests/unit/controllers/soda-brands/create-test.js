import {
  moduleFor, test
}
from 'ember-qunit';
import sinon from 'sinon';

let controller;
let mockSodaBrandObject;
let mockStore = {
  createRecord: function(objectName, settings) {
    mockSodaBrandObject.name = settings.name;
    return mockSodaBrandObject;
  }
};

moduleFor('controller:soda-brands/create',
  'Unit | Controller | soda brands/create', {
    beforeEach: function() {
      controller = this.subject();
      mockSodaBrandObject = {
        name: undefined,
        save: sinon.spy()
      };
      controller.store = mockStore;
    },
    afterEach: function() {}
  });

// Replace this with your real tests.
test('it exists', function(assert) {
  assert.expect(1);
  assert.ok(controller);
});

test('it saves a soda brand with the proper information', function(assert) {
  assert.expect(2);
  controller.set('brandName','foo');
  controller.send('createSodaBrand');
  assert.equal(mockSodaBrandObject.name, 'foo', '"name" was set');
  assert.ok(mockSodaBrandObject.save.called, 'the soda brand was saved to the store');
});
