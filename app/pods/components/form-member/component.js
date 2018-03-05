import Ember from 'ember';
import swal from 'npm:sweetalert';

export default Ember.Component.extend({
  actions: {
    save() {
      this.get('model').save().then(data => {
        swal('Sucesso', 'Membro cadastrado com sucesso!', 'success');
        this.sendAction('transition');
      }).catch(err => {
        err = err.errors.lenght > 0 ? err.errors["0"].title : err;
        swal('Ops!', `Não foi possível salvar o registro\n${err}`, 'error');
      });
    }
  }
});
