import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
	actions: {
		toggleActive(model, index){

			let service = model.get('services')[index];
			
			if(service.active)
				set(service, 'active', false);
			else
				set(service, 'active', true);
		}
	}
});
