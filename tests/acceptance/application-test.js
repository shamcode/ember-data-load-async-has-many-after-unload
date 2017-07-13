import { test } from 'qunit';
import moduleForAcceptance from 'ember-data-async-has-many-after-unload-bug/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
