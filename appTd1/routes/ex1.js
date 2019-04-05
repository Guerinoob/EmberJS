import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
	content : '',
	MAX : 100,
	info : '',

	size: computed('content', function(){
		this.set('info', '');
		return this.MAX - this.content.length;
	}),

	alertVisible: computed('info', function(){
		return info.length > 0 ? true : false;
	}),

	style: computed('content', function(){
		if(this.MAX - this.content.length <= 20) return 'alert alert-danger';

		if(this.MAX - this.content.length <= 50) return 'alert alert-warning';

		return 'alert alert-info';
	})
});

export default Route.extend({
	model(){
		return Note.create();
	}
});
