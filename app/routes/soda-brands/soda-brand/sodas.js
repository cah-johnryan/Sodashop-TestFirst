import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    var brandParams = transition.params['sodaBrands.sodaBrand'];
    return this.store.query('soda', {
      orderBy: 'sodaBrand',
      equalTo: brandParams['soda-brand_id']
    });
  }
});
