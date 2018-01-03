/* global swal */
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password');
      this.get('session')
        .authenticate('authenticator:jwt', credentials)
        .then(() => {

          // console.log('exp: ', session.exp );

          // let now = new Date().getTime();

          // let expireIn = new Date(session.exp * 1).getTime()
          // console.log('expireIn', expireIn);

          // console.log("Test: ", session.exp, ' - ', now , ' = ', session.exp - now);
          // console.log("Test 2: ", expireIn, ' - ', now , ' = ', expireIn - now);
        })
        .catch(function(error) {
          swal('Acesso negado', error, 'error');
        });
    },
    setLocale(locale) {
      this.set('i18n.locale', locale);
    }
  }
});
