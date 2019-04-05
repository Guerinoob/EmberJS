import Route from '@ember/routing/route';


export default Route.extend({
	model(){
		return {developers: this.store.findAll('developer'), copy: {}};
	}
	
});
