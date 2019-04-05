import Route from '@ember/routing/route';
import EmberObject, {set, computed, get} from '@ember/object';
import { match } from '@ember/object/computed';

const Copy = EmberObject.extend({
	nom: "",
	prenom: "",
	mail: "",
	invalide: computed('nom', 'mail', function(){
		let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      	let mailValide = emailPattern.test(this.get('mail'));
		return this.get('nom') == "" || !mailValide;
	})
})

export default Route.extend({
	model(){
		return EmberObject.create({copy:
			Copy.create()
		});
	},
	actions: {
		addContact(contact){
			contact = this.store.createRecord('contact', contact.copy)
			contact.save().then(()=>{
				this.transitionTo('contacts');
			})
			
		}
	}
});
