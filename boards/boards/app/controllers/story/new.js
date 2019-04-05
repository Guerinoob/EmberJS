import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		save(model){
			
			let story = model.copy;

			let store = this.store;

			let controller = this;

			store.findRecord('project', model.copy.project).then(function(proj){
				let obj = store.createRecord('story', story);

				proj.get('stories').pushObject(obj);

				obj.save();
				proj.save().then(()=>{
					controller.transitionToRoute('projects');
				});

			});
			
		}
	}
});
