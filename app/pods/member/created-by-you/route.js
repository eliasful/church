import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model(params) {
    return this.store.query('church', {
      hash: params.key
    }).then(church => {
      const member = this.store.createRecord('member');
      member.set('church', church.get('firstObject'));
      return member;
    }).catch((err) => {
      swal('Ops!', 'Não foi possível buscar a igreja', 'error');
    });
 },
 actions: {
   save(model) {
     model.save().then(() => {
       swal('Sucesso!', 'Obrigado por informar seus dados!', 'success');
       this.transitionTo('member.welcome-page');
     }).catch(() => {
       swal('Ops!', 'Não foi possível criar o registro', 'error');
     });
   }
 }
});
