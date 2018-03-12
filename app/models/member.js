import DS from 'ember-data';

export default DS.Model.extend({
  church: DS.belongsTo('church'),
  name: DS.attr('string'),
  age: DS.attr('number'),
  gender: DS.attr('string'),
  celPhone: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  cep: DS.attr('string'),
  address: DS.attr('string'),
  number: DS.attr('string'),
  complement: DS.attr('string'),
  neighborhood: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  birthday: DS.attr('date'),
  civilStatus: DS.attr('string'),
  schooling: DS.attr('string'),
  rg: DS.attr('string'),
  cpf: DS.attr('string'),
  natural: DS.attr('string'),
  charge: DS.attr('string'),
  ordination: DS.attr('date'),
  baptism: DS.attr('date'),
  hisWife: DS.belongsTo('member', {
    inverse: null
  }),
  married: DS.attr('date'),
  father: DS.belongsTo('member', {
    inverse: null
  }),
  mother: DS.belongsTo('member', {
    inverse: null
  }),
  children: DS.attr('string'),
  lat: DS.attr('string'),
  lng: DS.attr('string'),
  photo: DS.attr('string')
});
