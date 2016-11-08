import DS from 'ember-data';
import User from './user';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  bets: hasMany('bet'),
  name: DS.attr('string'),
  email: DS.attr('string')
});
