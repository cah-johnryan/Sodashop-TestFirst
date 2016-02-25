import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  cost: DS.attr('number'),
  quantity: DS.attr('number'),
  description: DS.attr('string'),
  sodaBrand: DS.belongsTo('soda-brand'),
  formattedPriceDollars: function() {
    var price = this.get('cost'),
      formatted = parseFloat(price, 10).toFixed(2);
    return '$' + formatted;
  }.property('cost'),
  isSoldOut: Ember.computed('quantity', function() {
    return this.get('quantity') > 0 ? false : true;
  })
});
