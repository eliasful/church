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
  });
});

export default Router;
