import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('user')
  },
  actions: {
    willTransition() {
      //Se o usuário sair da rota, sem salvar, limpa o objeto
      //para não ficar como sujeira
      const record = this.modelFor('user.new');
      if (record.get('isNew')) {
        return record.destroyRecord();
      }
    }
  }
});
