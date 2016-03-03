import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['draggable'],
  draggable: 'true',
  dragOver() {
    return false;
  },
  drop(event) {
    let coinName = event.originalEvent.dataTransfer.getData('text');
    this.sendAction('action', coinName);
  }
});
