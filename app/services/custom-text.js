import Ember from 'ember';

const {
  Service
} = Ember;

export default Service.extend({
  siteName: 'My Cool Site',
  aboutMe: "I'm cool, and so is this site!",
  greeting: 'Welcome!',
  contactMe: 'Leave me alone, please'
});
