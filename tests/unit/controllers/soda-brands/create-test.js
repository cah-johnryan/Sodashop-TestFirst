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
    mockSodaBrandObject.image = settings.image;
    return mockSodaBrandObject;
  }
};

moduleFor('controller:soda-brands/create',
  'Unit | Controller | soda brands/create', {
    beforeEach: function() {
      controller = this.subject();
      mockSodaBrandObject = {
        name: undefined,
        image: undefined,
        save: sinon.spy()
      };
      controller.store = mockStore;
      controller.transitionToRoute = sinon.spy();
    },
    afterEach: function() {}
  });

// Replace this with your real tests.
test('it exists', function(assert) {
  assert.expect(1);
  assert.ok(controller);
});

test('it saves a soda brand with the proper information', function(assert) {
  assert.expect(3);
  controller.set('brandName', 'foo');
  controller.set('currentFileData', 'mockBase64DataForImage');
  controller.send('createSodaBrand');

  assert.equal(mockSodaBrandObject.name, 'foo', 'the "name" field was set');

  assert.equal(mockSodaBrandObject.image, 'mockBase64DataForImage',
    'the "image" field was set');

  assert.ok(mockSodaBrandObject.save.called,
    'the soda brand was saved to the store');
});
