import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  displayMessage: Ember.computed('amountInserted', function() {
    let amountInserted = this.get('amountInserted');
    return (!amountInserted || amountInserted === 0) ? 'INSERT COIN' :
      '$' + amountInserted.toFixed(2) + ' INSERTED';
  }),
  amountInserted: 0,

  actions: {
    returnToHome: function() {
      this.transitionToRoute('/');
    },
    insertCoin: function(amount) {
      let currentAmountInserted = this.get('amountInserted');
      currentAmountInserted += amount;
      this.set('amountInserted', currentAmountInserted);
    },
    insertPenny: function() {
      let notify = this.get('notify');
      notify.error(
        'This soda machine is not able to accept pennies', {
          closeAfter: 5000
        });
    },
    insertNickel: function() {
      this.send('insertCoin', 0.05);
    },
    insertDime: function() {
      this.send('insertCoin', 0.10);
    },
    insertQuarter: function() {
      this.send('insertCoin', 0.25);
    }
  }
});
