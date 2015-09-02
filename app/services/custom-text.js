import Ember from 'ember';

const {
  computed,
  defineProperty,
  on,
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

function customWithDefault() {
  return computed(function(propertyName) {
    const custom = this.get('customTexts').findBy('key', propertyName);
    return custom ? custom.get('value') : DEFAULTS.get(propertyName);
  });
}

export default Service.extend({
  customTexts: [],

  defineTexts: on('init', function() {
    Object.keys(DEFAULTS).forEach((key) => {
      defineProperty(this, key, customWithDefault());
    });
  })
});
