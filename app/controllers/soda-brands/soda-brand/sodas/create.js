import Ember from 'ember';

export default Ember.Controller.extend({
  sodaBrandController: Ember.inject.controller('sodaBrands.sodaBrand'),
  sodaBrandModel: Ember.computed.reads('sodaBrandController.model'),
  currentFileData: undefined,
  actions: {
    createSoda: function() {
      console.log("createSoda");
      let soda = this.store.createRecord('soda', {
        name: this.get('name'),
        cost: this.get('cost'),
        description: this.get('description'),
        image: this.get('currentFileData')
      });

      let that = this;
      let selectedSodaBrand = this.get('sodaBrandModel.sodaBrand');
      soda.set('sodaBrand', selectedSodaBrand);
      soda.save().then(function() {
        that.transitionToRoute('sodaBrands.sodaBrand.sodas');
      });
    },
    cancelCreateSodaBrand: function() {
      this.transitionToRoute('sodaBrands.sodaBrand.sodas');
    },
    fileLoaded: function(file) {
      this.set('currentFileData', file.data);
    }
  }
});
