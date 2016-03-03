import Ember from 'ember';

export default Ember.Component.extend({
  displayMessage: Ember.computed('amountInserted', function() {
    let amountInserted = this.get('amountInserted');
    return (!amountInserted || amountInserted === 0) ? 'INSERT COIN' :
      '$' + amountInserted.toFixed(2) + ' INSERTED';
  }),
  actions: {
    insertCoin(coinName) {
        let amount = 0;
        switch (coinName) {
          case 'quarter':
            amount = 0.25;
            break;
          case 'dime':
            amount = 0.10;
            break;
          case 'nickel':
            amount = 0.05;
            break;
          case 'penny':
            this.send('insertPenny');
            break;
          default:
        }
        let currentAmountInserted = this.get('amountInserted');
        currentAmountInserted += amount;
        this.set('amountInserted', currentAmountInserted);
      },
      insertPenny() {
        this.get('generateNotification')('error',
          'This soda machine is not able to accept pennies');
      }
  }
});
