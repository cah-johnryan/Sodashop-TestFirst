import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancelEditSoda() {
        this.get('cancelEditSoda')();
      },
      beginEditSoda() {
        this.get('beginEditSoda')();
      }
  }
});
