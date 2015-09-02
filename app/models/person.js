import DS from 'ember-data';
import Ember from 'ember';

const {
  attr,
  Model
} = DS;

const {
  on,
  defineProperty
} = Ember;

export default Model.extend({
  defineAttrs: on('init', function() {
    defineProperty(this, 'firstName', attr('string'));
    defineProperty(this, 'lastName', attr('string'));
  })
});
