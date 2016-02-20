import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandsController: Ember.inject.controller('sodaBrands'),
  sodaBrandController: Ember.inject.controller('sodaBrands.sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  actions: {
    purchaseSoda: function(soda) {
      let sodaBrandsController = this.get('sodaBrandsController');
      let amountInserted = sodaBrandsController.get('amountInserted');
      let sodaCost = soda.get('cost');
      let notify = sodaBrandsController.get('notify');
      if (sodaCost > amountInserted) {
        notify.warning('Not enough money has been inserted.  ' +
          'The price for ' + soda.get('name') + ' is ' +
          soda.get('formattedPriceDollars') + '.', {
            closeAfter: null
          });
      } else {
        amountInserted -= sodaCost;
        sodaBrandsController.set('amountInserted', amountInserted);
        notify.success(
          soda.get('name') + ' dispensed.  Thank you!', {
            closeAfter: null
          });
      }
    },
    goToSoda: function(soda) {
      this.transitionToRoute('sodaBrands.sodaBrand.soda', soda.id);
    }
  }
});
