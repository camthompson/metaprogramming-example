import Ember from 'ember';

const {
  computed,
  Service
} = Ember;

function customWithDefault(propertyName, defaultValue) {
  return computed(function() {
    const custom = this.get('customTexts').findBy('key', propertyName);
    return custom ? custom.get('value') : defaultValue;
  });
}

export default Service.extend({
  customTexts: [],

  siteName: customWithDefault('siteName', 'My Cool Site'),

  aboutMe: customWithDefault('aboutMe', "I'm cool, and so is this site!"),

  greeting: customWithDefault('greeting', 'Welcome!'),

  contactMe: customWithDefault('contactMe', 'Leave me alone, please')
});
