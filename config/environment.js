/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sodashop-test-first',
    environment: environment,
    firebase: {
      apiKey: "AIzaSyAzxn5YGbEjVNwGQSNg-hrO7ReZnqXKLMs",
      authDomain: "sodashop-nenaner-9d100.firebaseapp.com",
      databaseURL: "https://sodashop-nenaner-9d100.firebaseio.com",
      storageBucket: "sodashop-nenaner-9d100.appspot.com",
      messagingSenderId: "845392190197"
    },
    contentSecurityPolicy: {
      'img-src': "'self' 'unsafe-eval' apis.google.com",
      'style-src': "'self' 'unsafe-inline'",
      'font-src': "'self' https://fonts.gstatic.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
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

  ENV.s3 = {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    bucket: process.env.AWS_BUCKET,
    region: process.env.AWS_REGION,
    filePattern: "*"
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

    ENV.torii = {
      providers: {
        'facebook-oauth2': {
          apiKey: '183157865405026',
          redirectUri: 'http://localhost:4300'
        }
      }
    };
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

    ENV.torii = {
      providers: {
        'facebook-oauth2': {
          apiKey: '183098028744343',
          redirectUri: 'http://localhost:4300'
        }
      }
    };
  }

  return ENV;
};
