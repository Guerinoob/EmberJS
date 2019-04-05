import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit', {path: 'edit/:developer_id'});
  });
  this.route('projects', function() {
    this.route('new');
  });

  this.route('project', {path: 'project/:project_id'});

  this.route('story', function() {
    this.route('new', {path: 'story/new/:project_id'});
  });
});

export default Router;
