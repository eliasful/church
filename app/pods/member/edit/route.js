import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('member', params.id);
  },
  actions: {
    transition() {
      this.transitionTo('member');
    },
    click() {
      $("#file").click();
    },
    change(evt) {
      let input = $("#file")[0];
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $('#image').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
        this.get('model.photo', input.files[0]);
      }
    }
  }
});
