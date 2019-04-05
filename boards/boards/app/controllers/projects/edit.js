import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		save(model){

			model.setProperties(model.copy);

      		model.save().then(this.transitionToRoute('projects'));

		}
	}
});
