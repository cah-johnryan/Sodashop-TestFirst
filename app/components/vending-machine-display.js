import Ember from 'ember';

export default Ember.Component.extend({
  displayMessage: Ember.computed('amountInserted', 'temporaryDisplayMessage', function() {
    let temporaryDisplayMessage = this.get('temporaryDisplayMessage');
    if (temporaryDisplayMessage.length === 0) {
      let amountInserted = this.get('amountInserted');
      return (!amountInserted || amountInserted === 0) ? 'INSERT COIN' :
        '$' + amountInserted.toFixed(2) + ' INSERTED';
    } else {
      return temporaryDisplayMessage;
    }
  }),
  temporaryDisplayMessage: '',
  actions: {
    insertCoin(coinName) {
        this.set('temporaryDisplayMessage', '');
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
            this.set('temporaryDisplayMessage', 'INVALID COIN');
            break;
          default:
        }
        let currentAmountInserted = this.get('amountInserted');
        currentAmountInserted += amount;
        this.set('amountInserted', currentAmountInserted);
      },
      insertPenny() {}
  }
});
