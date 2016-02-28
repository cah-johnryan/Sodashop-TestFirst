import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateSoda() {
        let currentSoda = this.get('model.soda');
        let that = this;
        currentSoda.save().then(function() {
          that.transitionToRoute('sodaBrands.sodaBrand.sodas');
        });
      },
      cancelEditSoda() {
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
