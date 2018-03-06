import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    const value = this.selected != null ? this.selected : '';
    this.$("select").val(value);
    this.set('selected', value);

    this.$("select").on('change', (evt) => {
      this.set('selected', evt.target.value);
    });
  },
  didRender() {
    const value = this.selected != null ? this.selected : '';
    this.$("select").val(value);
    this.set('selected', value);
  }
});
