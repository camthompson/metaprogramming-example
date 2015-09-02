import { moduleFor, test } from 'ember-qunit';

moduleFor('service:custom-text');

test('It has default values', function(assert) {
  const service = this.subject();
  assert.equal(service.get('siteName'), 'My Cool Site');
  assert.equal(service.get('aboutMe'),  "I'm cool, and so is this site!");
  assert.equal(service.get('greeting'),  'Welcome!');
  assert.equal(service.get('contactMe'), 'Leave me alone, please');
});
