import Ember from 'ember';

export default Ember.Component.extend({
  submit(event) {
    event.target.classList.add('was-validated');

    if (event.target.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.sendAction(this.save, this.model);
    }

    return false;
  }
});
