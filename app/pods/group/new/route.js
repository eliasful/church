import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.createRecord('group')
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
