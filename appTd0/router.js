import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user');
  this.route('client', function() {
    this.route('details');
  });
  this.route('clients');
  this.route('client-d', { path: 'client/:numero'});
});

export default Router;
