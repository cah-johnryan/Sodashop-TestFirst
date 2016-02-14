import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandController: Ember.inject.controller('sodaBrands.sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  actions: {
    goToSoda: function(soda) {
      this.transitionToRoute('sodaBrands.sodaBrand.soda', soda.id);
    }
  }
});
