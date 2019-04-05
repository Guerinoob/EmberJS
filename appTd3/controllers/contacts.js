import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		supprimer(contact){
			contact.deleteRecord();
		},
		undelete(deleteds){
			deleteds.forEach((item) => {item.rollbackAttributes();});
		},
		confirmDelete(deleteds){
			deleteds.forEach((item) => {item.save();});
		}
	}
});
