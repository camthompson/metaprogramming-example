import Ember from 'ember';

function create() {
  return Ember.Object.create(...arguments);
}

const {
  inject,
  Route
} = Ember;

export default Route.extend({
  customText: inject.service(),

  afterModel() {
    this.get('customText').set('customTexts', [
      create({ key: 'siteName', value: "Cam's Cool Site"})
    ]);
  }
});
