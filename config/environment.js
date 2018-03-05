/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'church',
    podModulePrefix: 'church/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    contentSecurityPolicy: {
      'default-src': "'self' http://localhost:1337 ",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' ",
      'font-src': "'self' data: use.typekit.net fonts.gstatic.com ",
      'connect-src': "'self' http://localhost:1337 ",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' static.addtoany.com  use.typekit.net fonts.googleapis.com ",
      'frame-src': "static.addtoany.com www.google.com"
    },
    googleMap: {
      apiKey: 'AIzaSyDIiTwKIr5-_HGOXLA5fu2mgqvhthjWNH4',
      libraries: ['drawing']
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiBaseUrl = 'http://localhost:1337';
    ENV.appUrl = 'http://localhost:4200/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.authenticationURL = ENV.apiBaseUrl + '/login';
  ENV['ember-simple-auth'] = {
    authenticationRoute: 'home',
    authorizer: 'authorizer:token',
    routeAfterAuthentication: 'home',
    routeIfAlreadyAuthenticated: 'home',
    crossOriginWhitelist: [ENV.authenticationURL]
  };
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.authenticationURL,
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    refreshAccessTokens: false
  };

  return ENV;
};
