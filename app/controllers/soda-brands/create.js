import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createSodaBrand: function() {
      console.log("createSodaBrand");
      var sodaBrand = this.store.createRecord('soda-brand', {
        name: this.get('brandName')
      });
      sodaBrand.save();
    }
  }
});
