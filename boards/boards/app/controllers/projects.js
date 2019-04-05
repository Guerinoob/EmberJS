import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		askDeleteConfirm(proj){
			this.get('model').set('del', proj);
		},
		deleteProject(proj){
			proj.deleteRecord();
			proj.save();
			this.get('model').set('del', null);
		},
		cancelDelete(){
			this.get('model').set('del', null);
		}
	}
});
