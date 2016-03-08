import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandsController: Ember.inject.controller('sodaBrands'),
  sodaBrandController: Ember.inject.controller('sodaBrands.sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  actions: {
    purchaseSoda(soda) {
        let sodaBrandsController = this.get('sodaBrandsController');
        let amountInserted = sodaBrandsController.get('amountInserted');
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
          sodaBrandsController.send('generateNotification', 'error',
            'This soda is sold out.  Please select another soda.');
        }

        function notEnoughMoneyInserted() {
          sodaBrandsController.send('generateNotification', 'warning',
            'Not enough money has been inserted.  ' +
            'The price for ' + soda.get('name') + ' is ' +
            soda.get('formattedPriceDollars') + '.');
        }

        function dispenseSoda() {
          amountInserted -= sodaCost;
          sodaBrandsController.set('amountInserted', amountInserted);
          soda.set('quantity', --sodaQuantity);
          soda.save();
          generateProductPurchasedNotification(soda.get('image'), soda.get(
            'name'));
        }

        function generateProductPurchasedNotification(productImage,
          productName) {
          let message = '<md-list-item>' +
            '  <div class="md-list-item-inner">' +
            '    <img alt="meh" class="md-avatar" src="' + productImage +
            '"/>' +
            '    <div class="md-list-item-text">' +
            '      <span>' + productName + ' dispensed.  Thank you!</span>' +
            '    </div>' +
            '  </div>' +
            '</md-list-item>';
          sodaBrandsController.send('generateNotification', 'raw', message);
        }
      },
      goToSoda(soda) {
        this.transitionToRoute('sodaBrands.sodaBrand.soda', soda.id);
      }
  }

});
