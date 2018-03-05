import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('member')
  },
  actions: {
    willTransition() {
      //Se o usuário sair da rota, sem salvar, limpa o objeto
      //para não ficar como sujeira
      const record = this.modelFor('member.new');
      if (record.get('isNew')) {
        return record.destroyRecord();
      }
    },
    transition() {
      this.transitionTo('member');
    }
  }
});
