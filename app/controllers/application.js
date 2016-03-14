import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    returnToHome() {
        this.transitionToRoute('/');
      },
      invalidateSession() {
        this.get('session').invalidate();
        this.transitionToRoute('sodaBrands');
      },
      login() {
        this.transitionToRoute('login');
      }
  }
});
