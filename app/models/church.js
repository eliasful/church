import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  number: DS.attr('string'),
  city: DS.attr('string'),
  phone: DS.attr('string')
});
