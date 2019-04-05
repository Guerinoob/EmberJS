import DS from 'ember-data';

export default DS.Model.extend({
  nom: DS.attr('string'),
  prenom: DS.attr('string'),
  mail: DS.attr('string')
});