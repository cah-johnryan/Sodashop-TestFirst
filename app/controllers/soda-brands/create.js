import Ember from 'ember';

export default Ember.Controller.extend({
  currentFileData: undefined,
  actions: {
    createSodaBrand: function() {
      console.log("createSodaBrand");
      let sodaBrand = this.store.createRecord('soda-brand', {
        name: this.get('brandName'),
        image: this.get('currentFileData')
      });

      let that = this;
      sodaBrand.save().then(function() {
        that.transitionToRoute('/');
      });
    },
    fileLoaded: function(file) {
      this.set('currentFileData', file.data);
    }
  }
});
