import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    transitionToSodaBrand(sodaBrand) {
      this.sendAction('transitionToSodaBrandController', sodaBrand);
    }
  }
});
