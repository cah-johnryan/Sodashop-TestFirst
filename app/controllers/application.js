import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    returnToHome: function() {
      this.transitionToRoute('/');
    },
    processCoinInsert: function(coinType) {
      console.log('Coin inserted: ' + coinType);
    }
  }
});
