import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  beforeModel() {
    if (this.get('router.url') === '/') {
      this.transitionTo('sodaBrands.sodaBrand.sodas', 1);
    }
  },
  model() {
    let sessionUserId = this.get('session.data.authenticated.userId');
    if (sessionUserId) {
      return this.store.find('user', sessionUserId);
    } else {
      return {};
    }
  }
});
