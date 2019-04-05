import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return[
			{nom:'Sulian',
            details:'Il mène une vie parfaitement normale',
			age:19},
			{nom:'Thibault',
            details:'Son père est mort',
			age:19},
			{nom:'Michel',
            details:'Il a été adopté',
			age:19}
		];
	}
});
