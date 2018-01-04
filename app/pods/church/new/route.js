import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import swal from 'npm:sweetalert';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('church');
  },
  actions: {
    save(model) {
      model.save().then((data) => {
        swal('Sucesso!', 'Igreja criada com sucesso!\nConfira seu email para acessar o sistema.', 'success');
        this.transitionTo('user.first-user', data.id);
      }).catch((err) => {
        swal('Ops!', `Parece que tivemos um problema\n${err.errors[0].title}`, 'error');
      });
    }
  }
});
