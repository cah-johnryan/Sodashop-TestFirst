import Route from '@ember/routing/route';

export default Route.extend({
  model(params, transition) {
    let brandParams = transition.params['sodaBrands.sodaBrand'];
    return this.store.query('soda', {
      orderBy: 'sodaBrand',
      equalTo: brandParams['soda-brand_id']
    });
  }
});
