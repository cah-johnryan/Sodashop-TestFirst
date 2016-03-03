import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['draggable'],
  draggable: 'true',
  dragStart(event) {
    let dataTransfer = event.originalEvent.dataTransfer;
    let coinName = this.get('coinName');
    dataTransfer.setData('text', coinName);
  },
  actions: {
    insertCoin() {
      let coinName = this.get('coinName');
      this.sendAction('insertCoin', coinName);
    }
  }
});
