import DS from 'ember-data';

export default DS.Model.extend({
  church: DS.belongsTo('church'),
  name: DS.attr('string')
});
