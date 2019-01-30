import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service('session'),
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
