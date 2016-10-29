import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  authorizationCode: DS.attr('string')
});
