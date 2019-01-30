import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      sodaBrand: this.store.find('soda-brand', params['soda-brand_id']),
      selectedSodaBrand: params['soda-brand_id']
    });
  }
});
