import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    var im = new Inputmask(this.get('mask'));
    im.mask(this.$('label'));
  }
});
