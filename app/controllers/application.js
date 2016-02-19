import Ember from 'ember';

export default Ember.Controller.extend({
  displayMessage: 'INSERT COIN',
  actions: {
    returnToHome: function() {
      this.transitionToRoute('/');
    },
    processCoinInsert: function(coinType) {
      console.log('Coin inserted: ' + coinType);
    },
    insertDime: function() {
      this.set('displayMessage', '0.10');
    },
    insertQuarter: function() {
      this.set('displayMessage', '0.25');
    }
  }
});
