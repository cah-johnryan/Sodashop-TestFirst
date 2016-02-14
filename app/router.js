import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
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
        path: '/:soda_id'
      });
    });
    this.route('create');
  });

});

export default Router;
