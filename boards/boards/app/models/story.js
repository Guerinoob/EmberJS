import DS from 'ember-data';

export default DS.Model.extend({

	code: DS.attr('string'),
	description: DS.attr('string'),
	developer: DS.belongsTo('developer'),
	tags: DS.hasMany('tag'),
	project: DS.belongsTo('project', {inverse: 'stories'})

});
