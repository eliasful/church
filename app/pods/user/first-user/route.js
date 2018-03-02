import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model(params) {
    let user = this.store.createRecord('user');
    user.set('church', params.id);
    return user;
  }
});
