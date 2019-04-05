import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		changeOwner(dev){
			
			this.get('model').copy.developer = dev;
			
		},
		save(model){
			let project = model.copy;
			project = this.store.createRecord('project', project);

			project.save().then(()=>{
				this.transitionTo('projects');
			});
		}
	}
});
