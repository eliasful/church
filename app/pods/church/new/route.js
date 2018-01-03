import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('church');
  },
  actions: {
    save(model) {
      model.save().then((data) => {
        this.transitionTo('user.first-user', data.id);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
});
