import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),
  beforeModel() {
    this.transitionTo('home');
  },
  model() {
    const session = this.get('session');
    if (!session.get('isAuthenticated')) {
      return null;
    } else {
      const user = session.get('session.content.authenticated.user.id');
      return Ember.RSVP.hash({
        user: this.store.findRecord('user', user)
      });
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
