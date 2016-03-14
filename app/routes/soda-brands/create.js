import Ember from 'ember';
import AuthenticatedRouteMixin from
  'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  beforeModel() {
    let sessionUserId = this.get('session.data.authenticated.userId');
    let that = this;
    if (sessionUserId) {
      this.store.find('user', sessionUserId).then(function(user) {
        if (!user.get('hasManagementPrivileges')) {
          that.transitionTo('login');
        }
      });
    } else {
      this.transitionTo('login');
    }
  }
});
