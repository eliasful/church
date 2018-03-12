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
      return this.store.query('member', {
        or: [{
          name: {
            like: `%${filter}%`
          }
        }, {
          celPhone: {
            like: `%${filter}%`
          }
        }, {
          address: {
            like: `%${filter}%`
          }
        }, {
          neighborhood: {
            like: `%${filter}%`
          }
        }, {
          city: {
            like: `%${filter}%`
          }
        }]
      }).then(data => {
        this.set('listFilter', data);
      });
    } else {
      this.set('listFilter', this.get('model'));
    }
  })
});
