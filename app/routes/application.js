import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  beforeModel() {
    if (this.get('router.url') === '/') {
      this.transitionTo('sodaBrands.sodaBrand.sodas', 1);
    }
  },
  model() {
    let authorizationCode = this.get('session.data.authenticated.authorizationCode');
    if (authorizationCode) {
      return {
        'authorizationCode': authorizationCode
      };
    } else {
      return {
        'authorizationCode': null
      };
    }
  }
});
