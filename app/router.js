import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('home');

  this.route('church', function() {
    this.route('new');
  });

  this.route('user', function() {
    this.route('first-user', {
      path: '/primeiro-usuario/:id'
    });
    this.route('new');
  });
  this.route('member', function() {
    this.route('new');
    this.route('edit', {
      path: 'edit/:id'
    });
    this.route('created-by-you', {
      path: 'created-by-you/:key'
    });
    this.route('welcome-page');
  });
  this.route('configuration', function() {});
  this.route('group', function() {
    this.route('new');
    this.route('edit', {
      path: 'edit/:id'
    });
  });
});

export default Router;
