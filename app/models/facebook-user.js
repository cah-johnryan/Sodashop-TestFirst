import DS from 'ember-data';

export default DS.Model.extend({
  authorizationCode: DS.attr('string')
});
