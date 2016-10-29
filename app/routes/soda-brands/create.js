import Ember from 'ember';
import AuthenticatedRouteMixin from
  'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  beforeModel() {
    let authorizationCode = this.get('session.data.authenticated.authorizationCode');
    if (!authorizationCode) {
      this.transitionTo('pageNotAvailable');
    }
  }
});
