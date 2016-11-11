import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', {path: '/user/:author_id'});
  this.route('bets', {path: '/'});
});

export default Router;
