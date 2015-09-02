import Ember from 'ember';

const {
  computed,
  Service
} = Ember;

function customWithDefault(defaultValue) {
  return computed(function(propertyName) {
    const custom = this.get('customTexts').findBy('key', propertyName);
    return custom ? custom.get('value') : defaultValue;
  });
}

export default Service.extend({
  customTexts: [],

  siteName: customWithDefault('My Cool Site'),

  aboutMe: customWithDefault("I'm cool, and so is this site!"),

  greeting: customWithDefault('Welcome!'),

  contactMe: customWithDefault('Leave me alone, please')
});
