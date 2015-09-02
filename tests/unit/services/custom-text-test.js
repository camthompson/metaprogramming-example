import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:custom-text');

function create() {
  return Ember.Object.create(...arguments);
}

test('It has default values', function(assert) {
  const service = this.subject();
  assert.equal(service.get('siteName'), 'My Cool Site');
  assert.equal(service.get('aboutMe'),  "I'm cool, and so is this site!");
  assert.equal(service.get('greeting'),  'Welcome!');
  assert.equal(service.get('contactMe'), 'Leave me alone, please');
});

test('Defaults can be overridden', function(assert) {
  const service = this.subject(create({
    customTexts: [
      create({ key: 'siteName', value: 'This Site Is Cooler' }),
      create({ key: 'aboutMe', value: "I'm not cool, but this site sure is" }),
      create({ key: 'greeting', value: 'Sup' }),
      create({ key: 'contactMe', value: 'Hit me up on my pager' })
    ]
  }));
  assert.equal(service.get('siteName'), 'This Site Is Cooler');
  assert.equal(service.get('aboutMe'),  "I'm not cool, but this site sure is");
  assert.equal(service.get('greeting'),  'Sup');
  assert.equal(service.get('contactMe'), 'Hit me up on my pager');
});
