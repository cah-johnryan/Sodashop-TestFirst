import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateSoda: function() {

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
