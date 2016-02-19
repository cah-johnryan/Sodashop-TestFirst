import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['draggable'],
  draggable: 'true',
  dragStart(event) {
    let dataTransfer = event.originalEvent.dataTransfer;
    dataTransfer.setData('text', event.target.id);
  }
});
