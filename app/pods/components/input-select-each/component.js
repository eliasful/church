import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  data: [],
  didInsertElement() {
    this.set('data', this.get('store').findAll(this.get('model')));
  },
  change(evt) {
    const member = evt.target.value;
    if (member) {
      this.get('store').findRecord('member', member).then(data => {
        this.set('selected', data);
      });
    } else {
      this.set('selected', null);
    }
  }
});
