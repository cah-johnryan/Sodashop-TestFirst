import Ember from 'ember';

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller('application'),
  applicationModel: Ember.computed.reads('applicationController.model'),
  actions: {
    returnToSodaListing() {
        this.transitionToRoute('sodaBrands.sodaBrand.sodas');
      },
      beginEditSoda() {
        this.transitionToRoute('sodaBrands.sodaBrand.soda', {
          queryParams: {
            edit: true
          }
        });
      }
  }
});
