import Route from '@ember/routing/route';
import EmberObject, {set} from '@ember/object';


export default Route.extend({
	model(){
		return {developers: this.store.findAll('developer'), copy: {}};
	}
	
	
});
