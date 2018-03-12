import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  observeSession: function() {
    this.send("reloadRoute");
  }.observes("session.isAuthenticated"),

  actions: {
    logout() {
      this.get('session').invalidate().then(() => {
        this.transitionToRoute('login');
      });
    }
  }
});
