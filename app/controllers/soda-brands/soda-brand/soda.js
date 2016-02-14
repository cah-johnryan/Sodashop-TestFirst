import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateSoda: function() {
      let currentSoda = this.get('model.soda');
      let that = this;
      currentSoda.save().then(function() {
        that.transitionToRoute('sodaBrands.sodaBrand.sodas');
      });
    },
    cancelEditSoda: function() {
      this.transitionToRoute('sodaBrands.sodaBrand.sodas');
    },
    beginEditSoda: function() {
      this.transitionToRoute('sodaBrands.sodaBrand.soda', {
        queryParams: {
          edit: true
        }
      });
    }
  }
});
