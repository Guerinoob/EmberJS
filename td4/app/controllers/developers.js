import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		askDeleteConfirm(dev){
			this.get('model').set('del', dev);
		},
		deleteDev(dev){
			dev.deleteRecord();
			dev.save();
			this.get('model').set('del', null);
		},
		cancelDelete(){
			this.get('model').set('del', null);
		}
	}
});
