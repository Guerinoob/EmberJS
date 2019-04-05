import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		save(note){
			note.set('info', 'Note sauvegardée : '+note.content);
		},
		clear(note){
			note.set('content', '');
			note.set('info', '');
		}
	}
});
