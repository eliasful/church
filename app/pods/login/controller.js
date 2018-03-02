import Ember from 'ember';
import swal from 'npm:sweetalert';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      this.get('session')
        .authenticate('authenticator:jwt', credentials)
        .catch((error) => {
          swal('Ops!', `Não foi possível realizar o login\n${error.err}`, 'error')
            .then(() => {
              Ember.$("input").focus();
            });
        });
    }
  }
});
