import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    returnToSodaBrand: function() {
      this.transitionToRoute('sodaBrands.sodaBrand.sodas');
    }
  }
});
