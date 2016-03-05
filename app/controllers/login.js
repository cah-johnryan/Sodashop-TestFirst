import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticate() {
      let {
        identification, password
      } = this.getProperties('identification', 'password');

      let that = this;
      this.get('session').authenticate('authenticator:oauth2',
        identification, password).then(authenticationSucceeded,
        authenticationRejected);

      function authenticationSucceeded() {
        that.set('identification', '');
        that.set('password', '');
        that.transitionToRoute('sodaBrands');
      }

      function authenticationRejected(reason) {
        that.set('errorMessage', reason.message || reason);
      }
    }
  }
});
