import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    edit: {
      refreshModel: true
    }
  },
  model(params) {
    params.edit = params.edit === 'true' ? true : false;
    return Ember.RSVP.hash({
      soda: this.store.find('soda', params.soda_id),
      edit: params.edit
    });
  }
});
