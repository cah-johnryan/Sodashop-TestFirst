import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      sodaBrand: this.store.find('soda-brand', params['soda-brand_id']),
      selectedSodaBrand: params['soda-brand_id']
    });
  }
});
