import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';


const Services = EmberObject.extend({

	codeActive : false,
	codeEntre : '',
	codes: '',
	remise: 0,

	countActive: computed('services.@each.active', function(){
		var cpt = 0;

		this.services.forEach(function(item){
			if(item.active)
				cpt++;
		});

		return cpt;
	}),

	sumActive: computed('services.@each.active', 'codeActive', 'codeEntre', function(){
		let serv = this.services.filterBy('active', true);
		var prix = 0;

		serv.forEach(function(item){
			prix += item.price;
		});

		if(this.codeActive && this.codes[this.codeEntre] != undefined){
			this.set('remise', Math.round(prix * this.codes[this.codeEntre]));
		}
		else{
			this.set('remise', 0);
		}

		return Math.round(prix, 2);
	}),

	total: computed('sumActive', 'remise', function(){
		var prix = 0;

		let serv = this.services.filterBy('active', true);
		serv.forEach(function(item){
			prix += item.price;
		});

		return Math.round(prix - this.remise, 2);
	})

});

export default Route.extend({
	model(){
		return Services.create({services: [
			{
				"name": "Web Development",
				"price": 300,
				"active":true
			},{
				"name": "Design",
				"price": 400,
				"active":true
			},{
				"name": "Integration",
				"price": 250,
				"active":false
			},{
				"name": "Formation",
				"price": 220,
				"active":false
			}
			],
			codes: {
				"B22": 0.05,
				"AZ": 0.01,
				"UBOAT": 0.02
			}});
	}
});
