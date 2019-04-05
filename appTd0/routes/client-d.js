import Route from '@ember/routing/route';

export default Route.extend({
	model(arg) {
		let model = this.modelFor("clients");
		return model[arg.numero];
	},
	actions:{
		fermer(){
			this.transitionTo("clients");
		}
	}
});
