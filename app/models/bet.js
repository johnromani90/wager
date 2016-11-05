import Bet from './bet';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  amount: DS.attr('decimal'),
  outcome: DS.attr('boolean')
});
