import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    returnToHome() {
      this.transitionToRoute('sodaBrands.sodaBrand.sodas', 1);
    },
    authenticateWithFacebook() {
      var that = this;
      this.get('session').authenticate('authenticator:torii', 'facebook').then(function() {
        let authorizationCode = that.get('session.data.authenticated.authorizationCode');
        that.set('model', {
          'authorizationCode': authorizationCode
        });
      });
    },
    invalidateSession() {
      this.get('session').invalidate();
      this.set('model', {
        'authorizationCode': null
      });
    }
  }
});
