import Ember from 'ember';

export default Ember.Controller.extend({
  filter: null,
  listFilter: Ember.computed('model', function() {
    return this.get('model');
  }),
  filterObserver: Ember.observer('filter', function() {
    const filter = this.get('filter');
    const model = this.get('model');
    if (filter) {
      return model.filter(item => item.get('name').match(/filter/g));
    }
  })
});
