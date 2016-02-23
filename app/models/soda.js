import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  cost: DS.attr(),
  quantity: DS.attr(),
  description: DS.attr(),
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
