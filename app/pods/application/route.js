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

      var userId = session.get('session.content.authenticated.user.id');
      var company = session.get('session.content.authenticated.user.company');

      return Ember.RSVP.hash({
        user: this.store.findRecord('user', userId),
        companyConfiguration: this.store.findRecord('companyConfiguration', company),
        accessProfileUser: this.get('ajax').request('users/' + userId + '/accessProfiles').then((data) => {
          return data.accessprofile[0];
        })
      });

    } else {
      console.log("Application não autenticada");
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
