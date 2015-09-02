import DS from 'ember-data';

const {
  attr,
  Model
} = DS;

export default Model.extend({
  make: attr('string'),
  model: attr('string')
});
