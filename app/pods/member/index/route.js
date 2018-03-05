import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('member');
  },
  actions: {
    remove(model) {
      swal({
        title: "Você deseja mesmo remover esse registro?",
        text: "Se prosseguir, não será possível reverter esse procedimento!",
        icon: "warning",
        buttons: ["Não, cancelar!", "Sim, Remover!"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          model.destroyRecord().then(() => {
            swal('Sucesso!', 'Registro removido com sucesso!', 'success');
          }).catch(() => {
            swal('Ops!', 'Não foi possível remover o registro', 'error');
          })
        }
      });
    }
  }
});
