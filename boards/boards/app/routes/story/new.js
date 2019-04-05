import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
	model(params){
		return {
			developers: this.store.findAll('developer'), 
			copy: {project: params.project_id, tags: []},
			tag: {
				title: "",
				color: "",
			},
			colors: ['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative']
		};
	},
	actions:{
		addTag(model){
			let rec = this.store.createRecord('tag', model.tag);
			rec.save().then(()=>{
				model.copy.tags.pushObject(rec);
			});

			
		}
	}
});
