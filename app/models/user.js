import DS from 'ember-data';

export default DS.Model.extend({
  church: DS.belongsTo('church'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  address: DS.attr('string'),
  number: DS.attr('string'),
  neighborhood: DS.attr('string'),
  city: DS.attr('string'),
  zipcode: DS.attr('string')
});
