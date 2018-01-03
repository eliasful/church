import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  observeSession: function() {
    console.log('session changed');
    this.send("reloadRoute");
  }.observes("session.isAuthenticated"),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
