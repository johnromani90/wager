import DS from 'ember-data';
import Bet from './bet';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  amount: DS.attr('number'),
  outcome: DS.attr('boolean')
});
