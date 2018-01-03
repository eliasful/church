import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password');
      this.get('session')
        .authenticate('authenticator:jwt', credentials)
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
