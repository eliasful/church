import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      if (this.get('model.birthday')) {
        this.set('model.birthday', moment(this.get('model.birthday'), 'DD/MM/YYYY').toDate());
      }

      if (this.get('model.ordination')) {
        this.set('model.ordination', moment(this.get('model.ordination'), 'DD/MM/YYYY').toDate());
      }

      if (this.get('model.baptism')) {
        this.set('model.baptism', moment(this.get('model.baptism'), 'DD/MM/YYYY').toDate());
      }

      if (this.get('model.married')) {
        this.set('model.married', moment(this.get('model.married'), 'DD/MM/YYYY').toDate());
      }

      this.get('model').save().then(data => {
        swal('Sucesso', 'Membro cadastrado com sucesso!', 'success');
        this.sendAction('transition');
      }).catch(err => {
        err = err.errors.lenght > 0 ? err.errors["0"].title : err;
        swal('Ops!', `Não foi possível salvar o registro\n${err}`, 'error');
      });
    },
  }
});
