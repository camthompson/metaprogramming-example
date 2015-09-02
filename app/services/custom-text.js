import Ember from 'ember';

const {
  computed,
  Service
} = Ember;

export default Service.extend({
  customTexts: [],

  siteName: computed(function() {
    const custom = this.get('customTexts').findBy('key', 'siteName');
    return custom ? custom.get('value') : 'My Cool Site';
  }),

  aboutMe: computed(function() {
    const custom = this.get('customTexts').findBy('key', 'aboutMe');
    return custom ? custom.get('value') : "I'm cool, and so is this site!";
  }),

  greeting: computed(function() {
    const custom = this.get('customTexts').findBy('key', 'greeting');
    return custom ? custom.get('value') : 'Welcome!';
  }),

  contactMe: computed(function() {
    const custom = this.get('customTexts').findBy('key', 'contactMe');
    return custom ? custom.get('value') : 'Leave me alone, please';
  })
});
