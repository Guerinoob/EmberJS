import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';

export default Route.extend({
	templateName:"projects/new",
	afterModel(model){
		let copy = EmberObject.create(model.toJSON());
		let developers = this.store.findAll('developer');
		set(model, 'developers', developers);
		set(model, 'copy', copy);
		return model;
	}
});
