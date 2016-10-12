import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  applicationController: Ember.inject.controller('application'),
  actions: {
    authenticate() {
      let {
        identification,
        password
      } = this.getProperties('identification', 'password');

      let that = this;
      this.get('session')
        .authenticate('authenticator:oauth2',
          identification, password)
        .then(authenticationSucceeded,
          authenticationRejected);

      function authenticationSucceeded() {
        that.set('identification', '');
        that.set('password', '');
        let sessionUserId = that.get('session.data.authenticated.userId');
        that.store.find('user', sessionUserId)
          .then(function(user) {
            that.get('applicationController')
              .set('model', user);
            that.transitionToRoute('sodaBrands.sodaBrand.sodas', 1);
          });
      }

      function authenticationRejected(reason) {
        that.set('errorMessage', reason.message || reason);
      }
    },

    authenticateWithFacebook() {
      var that = this;
      this.get('session').authenticate('authenticator:torii', 'facebook').then(function() {
        let facebookUser = that.store.createRecord('facebook-user', {
          authorizationCode: that.get('session.data.authenticated.authorizationCode'),
          email: '',
          firstName: '',
          lastName: ''
        });
        facebookUser.save();
      });
    }
  }
});
