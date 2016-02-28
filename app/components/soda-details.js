import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancelViewDetails() {
        this.get('cancelViewDetails')();
      },
      beginEditSoda() {
        this.get('beginEditSoda')();
      }
  }
});
