import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  number: DS.attr('string'),
  city: DS.attr('string'),
  phone: DS.attr('string'),
  responsible: DS.attr('string'),
  email: DS.attr('string'),
  cpf: DS.attr('string'),
  hash: DS.attr('string')
});
