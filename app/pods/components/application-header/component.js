import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    logoutSystem() {
      this.sendAction('logout');
    }
  }
});
