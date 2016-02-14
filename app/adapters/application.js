// // Emberfire adapter settings
// import Ember from 'ember';
// import FirebaseAdapter from 'emberfire/adapters/firebase';
//
// const {
//   inject
// } = Ember;
//
// export default FirebaseAdapter.extend({
//   firebase: inject.service(),
// });

// // Standard non-Emberfire, mirage friendly adapter settings
import DS from 'ember-data';

export default DS.RESTAdapter.extend({});
