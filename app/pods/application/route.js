import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),
  ajax: Ember.inject.service(),

  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model() {
    var session = this.get('session');
    if (session.get('isAuthenticated')) {
      return null;
    } else {
      return {};
    }
  },

  actions: {
    loading(transition /*, originRoute*/ ) {
      let controller = this.controllerFor('application');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
        controller.set('currentlyLoading', false);
      });
    },
    reloadRoute: function() {
      this.refresh();
    }
  }
});
