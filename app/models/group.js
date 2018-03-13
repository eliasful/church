import DS from 'ember-data';

export default DS.Model.extend({
  church: DS.belongsTo('church'),
  name: DS.attr('string'),
  leader: DS.belongsTo('member', {
    inverse: null
  }),
  coleader: DS.belongsTo('member', {
    inverse: null
  }),
  addressLeader: DS.attr('boolean'),
  dayWeek: DS.attr('number', {
    defaultValue: '4'
  }),
  hour: DS.attr('string'),
  members: DS.hasMany('member', {
    inverse: null
  })
});
