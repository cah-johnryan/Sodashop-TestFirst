import Ember from 'ember';
import {
  moduleForModel, test
}
from 'ember-qunit';

moduleForModel('soda', 'Unit | Model | soda', {
  // Specify the other units that are required for this test.
  needs: ['model:soda-brand']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('should belong to a soda-brand', function(assert) {
  assert.expect(2);
  const soda = this.store().modelFor('soda');
  const relationship = Ember.get(soda, 'relationshipsByName').get(
    'sodaBrand');

  assert.equal(relationship.key, 'sodaBrand',
    'has relationship with sodaBrand');
  assert.equal(relationship.kind, 'belongsTo',
    'kind of relationship is belongsTo');
});
