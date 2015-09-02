import Ember from 'ember';

const {
  Service
} = Ember;

const DEFAULTS = create({
  siteName: 'My Cool Site',
  aboutMe: "I'm cool, and so is this site!",
  greeting: 'Welcome!',
  contactMe: 'Leave me alone, please'
});

function create() {
  return Ember.Object.create(...arguments);
}

export default Service.extend({
  customTexts: [],

  unknownProperty(propertyName) {
    const custom = this.get('customTexts').findBy('key', propertyName);
    return custom ? custom.get('value') : DEFAULTS.get(propertyName);
  }
});
