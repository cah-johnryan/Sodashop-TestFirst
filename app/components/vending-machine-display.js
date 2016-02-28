import Ember from 'ember';

export default Ember.Component.extend({
  displayMessage: Ember.computed('amountInserted', function() {
    let amountInserted = this.get('amountInserted');
    return (!amountInserted || amountInserted === 0) ? 'INSERT COIN' :
      '$' + amountInserted.toFixed(2) + ' INSERTED';
  }),
  actions: {
    insertCoin(amount) {
        let currentAmountInserted = this.get('amountInserted');
        currentAmountInserted += amount;
        this.set('amountInserted', currentAmountInserted);
      },
      insertPenny() {
        this.get('generateNotification')('error',
          'This soda machine is not able to accept pennies');
      },
      insertNickel() {
        this.send('insertCoin', 0.05);
      },
      insertDime() {
        this.send('insertCoin', 0.10);
      },
      insertQuarter() {
        this.send('insertCoin', 0.25);
      }
  }
});
