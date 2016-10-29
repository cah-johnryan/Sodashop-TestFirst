import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    returnToHome() {
      this.transitionToRoute('sodaBrands.sodaBrand.sodas', 1);
    },
    authenticateWithFacebook() {
      var that = this;
      if (config.environment === 'test') {
        this.set('model', {
          'authorizationCode': 'dummyValue'
        });
      } else {
        this.get('session').authenticate('authenticator:torii', 'facebook').then(function() {
          let authorizationCode = that.get('session.data.authenticated.authorizationCode');
          that.set('model', {
            'authorizationCode': authorizationCode
          });
        });
      }
    },
    invalidateSession() {
      this.get('session').invalidate();
      this.set('model', {
        'authorizationCode': null
      });
    }
  }
});
