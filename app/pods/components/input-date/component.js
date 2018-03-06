import Ember from 'ember';
import Inputmask from "npm:inputmask";

export default Ember.Component.extend({
  didInsertElement() {
    this.set('value', moment(this.get('value')).format('DD/MM/YYYY'));
    const im = new Inputmask("99/99/9999");
    im.mask(this.$('input'));
  }
});
