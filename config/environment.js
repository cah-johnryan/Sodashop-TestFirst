/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sodashop-test-first',
    environment: environment,
    firebase: 'https://sodashopjohnryan.firebaseio.com/',
    contentSecurityPolicy: {
      'img-src': "'self' data:",
      'style-src': "'self' 'unsafe-inline'",
      'font-src': "'self' https://fonts.gstatic.com"
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    ENV.notificationCloseAfter = 2500;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    ENV.notificationCloseAfter = null;
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    ENV.notificationCloseAfter = 2500;
  }

  return ENV;
};
