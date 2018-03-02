import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import swal from 'npm:sweetalert';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),
  model() {
    return this.store.createRecord('church');
  },
  actions: {
    save(model) {
      model.save().then((data) => {
        swal('Sucesso!', 'Igreja criada com sucesso!\nConfira seu email para acessar o sistema.', 'success');

        const credentials = this.getProperties('identification', 'password');
        this.get('session')
          .authenticate('authenticator:jwt', {
            identification: data.get('email'),
            password: model.get('cpf')
          }).catch((error) => {
            swal('Ops!', `Não foi possível realizar o login\n${error.err}`, 'error')
              .then(() => {
                Ember.$("input").focus();
              });
          });
      }).catch((err) => {
        swal('Ops!', `Parece que tivemos um problema\n${err.errors[0].title}`, 'error');
      });
    }
  }
});
