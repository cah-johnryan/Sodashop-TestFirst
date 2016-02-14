import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToSoda: function(soda) {
      this.transitionToRoute('sodaBrands.sodaBrand.soda', soda.id);
    }
  }
});
