import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandsController: Ember.inject.controller('sodaBrands'),
  sodaBrandController: Ember.inject.controller('sodaBrands.sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  actions: {
    purchaseSoda(soda) {
        let sodaBrandsController = this.get('sodaBrandsController');
        let amountInserted = sodaBrandsController.get('amountInserted');
        let notify = sodaBrandsController.get('notify');
        let sodaCost = soda.get('cost');
        let sodaQuantity = soda.get('quantity');
        if (sodaQuantity > 0) {
          if (sodaCost > amountInserted) {
            notEnoughMoneyInserted();
          } else {
            dispenseSoda();
          }
        } else {
          soldOut();
        }

        function soldOut() {
          notify.error(
            'This soda is sold out.  Please select another soda.', {
              closeAfter: null
            });
        }

        function notEnoughMoneyInserted() {
          notify.warning('Not enough money has been inserted.  ' +
            'The price for ' + soda.get('name') + ' is ' +
            soda.get('formattedPriceDollars') + '.', {
              closeAfter: null
            });
        }

        function dispenseSoda() {
          amountInserted -= sodaCost;
          sodaBrandsController.set('amountInserted', amountInserted);
          soda.set('quantity', --sodaQuantity);
          soda.save();
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
