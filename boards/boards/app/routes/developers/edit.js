import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';

export default Route.extend({
	templateName:"developers/new",
	afterModel(model){
		let copy = EmberObject.create(model.toJSON());
		set(model, 'copy', copy);
	},
	actions:{
		save(model){
			
			model.setProperties(JSON.parse(JSON.stringify(model.copy)));

			model.save().then(()=>{
				this.transitionTo('developers');
			})
		}
	}
});
