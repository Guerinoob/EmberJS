import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		dblClick(selected, id){
			alert('hohioh');
			let model = this.get('model');

			if(model.get('dispoItems').includes(selected)){
				model.get('includedItems').pushObject(selected);
				model.get('dispoItems').removeObject(selected);
			}
			else{
				model.get('dispoItems').pushObject(selected);
				model.get('includedItems').removeObject(selected);
			}
		},

		addToIncluded(dispoItems_, model){

			dispoItems_.forEach(function(id){
				model.get('includedItems').pushObject(id);
				model.get('dispoItems').removeObject(id);
			});

			model.set('dispoItemsIds_', []);
		},

		addAllToIncluded(model){
			model.get('dispoItems').forEach(function(el){
				model.get('includedItems').pushObject(el);
			});

			model.set('dispoItems', []);
		},

		removeFromIncluded(includedItems_, model){
			includedItems_.forEach(function(id){
				model.get('dispoItems').pushObject(id);
				model.get('includedItems').removeObject(id);
			});

			model.set('includedItemsIds_', []);

		},

		removeAllFromIncluded(model){
			model.get('includedItems').forEach(function(el){
				model.get('dispoItems').pushObject(el);
			});

			model.set('includedItems', []);
		}
	}
});
