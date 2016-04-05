import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    returnToHome() {
        this.transitionToRoute('sodaBrands.sodaBrand.sodas', 1);
      },
      invalidateSession() {
        this.get('session').invalidate();
        this.set('model', null);
      },
      login() {
        this.transitionToRoute('login');
      }
  }
});
