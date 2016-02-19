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
    insertPenny: function() {
      this.set('displayMessage', 'INSERT COIN');
    },
    insertNickel: function() {
      this.set('displayMessage', '0.05');
    },
    insertDime: function() {
      this.set('displayMessage', '0.10');
    },
    insertQuarter: function() {
      this.set('displayMessage', '0.25');
    }
  }
});
