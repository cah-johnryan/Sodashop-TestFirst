import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandsController: Ember.inject.controller('sodaBrands'),
  sodaBrandController: Ember.inject.controller('sodaBrands.sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  actions: {
    purchaseSoda: function(soda) {
      let sodaBrandsController = this.get('sodaBrandsController');
      sodaBrandsController.set('amountInserted', 0);
      let notify = sodaBrandsController.get('notify');
      notify.success(
        soda.get('name') + ' dispensed.  Thank you!', {
          closeAfter: 5000
        });
    },
    goToSoda: function(soda) {
      this.transitionToRoute('sodaBrands.sodaBrand.soda', soda.id);
    }
  }
});
