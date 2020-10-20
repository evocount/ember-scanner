import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | code scanning', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting home page and immediately tearing down does not trigger set on destroyed error', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
