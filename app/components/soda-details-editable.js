import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancelEditSoda() {
        this.get('returnToSodaListing')();
      },
      updateSoda() {
        let currentSoda = this.get('soda');
        let that = this;
        currentSoda.save().then(function() {
          that.get('returnToSodaListing')();
        });
      }
  }
});
