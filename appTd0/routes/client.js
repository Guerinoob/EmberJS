import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {nom:'Smith',
            details:'Des détails sur Smith...',
			age:20}
  }
});
