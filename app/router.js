import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sodaBrands', {
    path: '/'
  }, function() {
    this.route('sodaBrand', {
      path: '/:soda-brand_id'
    }, function() {
      this.route('sodas', function() {
        this.route('create');
      });
      this.route('soda', {
        path: '/soda/:soda_id'
      });
    });
    this.route('create');
  });
  this.route('pageNotAvailable');
});

export default Router;
