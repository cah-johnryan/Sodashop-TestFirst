import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

// Standard non-Emberfire, mirage friendly adapter settings

import DS from 'ember-data';
export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2'
});


// Emberfire adapter settings
// import Ember from 'ember';
// import FirebaseAdapter from 'emberfire/adapters/firebase';
//
// const {
//   inject
// } = Ember;
//
// export default FirebaseAdapter.extend(DataAdapterMixin, {
//   firebase: inject.service(),
//   authorizer: 'authorizer:oauth2'
// });
