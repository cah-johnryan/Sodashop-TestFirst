import Ember from 'ember';

export default Ember.Controller.extend({
  currentFileData: undefined,
  actions: {
    createSodaBrand: function() {
      console.log("createSodaBrand");
      var sodaBrand = this.store.createRecord('soda-brand', {
        name: this.get('brandName'),
        image: this.get('currentFileData')
      });

      let that = this;
      sodaBrand.save();
    },
    fileLoaded: function(file) {
      this.set('currentFileData', file.data);
    }
  }
});
