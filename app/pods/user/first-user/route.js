import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let user = this.store.createRecord('user');
    user.set('church', params.id);
    return user;
  }
});
