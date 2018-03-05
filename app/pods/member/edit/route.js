import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('member', params.id);
  },
  actions: {
    transition() {
      this.transitionTo('member');
    }
  }
});
