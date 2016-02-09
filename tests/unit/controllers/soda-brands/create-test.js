import {
  moduleFor, test
}
from 'ember-qunit';
import sinon from 'sinon';

let controller;
let mockSodaBrandObject, mockSodaBrandObjectSaveCalled;
let mockStore;

moduleFor('controller:soda-brands/create',
  'Unit | Controller | soda brands/create', {
    beforeEach: function() {
      controller = this.subject();
      mockSodaBrandObjectSaveCalled = false;
      mockSodaBrandObject = {
        name: undefined,
        image: undefined,
        save: function() {
          mockSodaBrandObjectSaveCalled = true;
          return {
            then: function(callback) {
              if (callback) callback();
            }
          };
        }
      };
      mockStore = {
        createRecord: function(objectName, settings) {
          mockSodaBrandObject.name = settings.name;
          mockSodaBrandObject.image = settings.image;
          return mockSodaBrandObject;
        }
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
  assert.expect(4);
  controller.set('brandName', 'foo');
  controller.set('currentFileData', 'mockBase64DataForImage');
  controller.send('createSodaBrand');

  assert.equal(mockSodaBrandObject.name, 'foo', 'the "name" field was set');

  assert.equal(mockSodaBrandObject.image, 'mockBase64DataForImage',
    'the "image" field was set');

  assert.ok(mockSodaBrandObjectSaveCalled,
    'the soda brand was saved to the store');

  assert.ok(controller.transitionToRoute.calledWith('/'),
    'transitions back to the root of the application once the save completes'
  )
});
