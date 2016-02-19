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
    insertCoin: function() {
      this.set('displayMessage', '0.25');
    }
  }
});
