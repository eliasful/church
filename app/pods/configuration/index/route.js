import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      user: this.modelFor('application').user
    });
  },
  actions: {
    copy() {
      Ember.$("#url").select();
      document.execCommand("copy");
      swal("Copiado!");
    }
  }
});
