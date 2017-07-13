import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store
      .findRecord('foo', 1).then((foo) => foo.get('bars'))
      .then(() => {
        this.store.unloadAll('foo'); // If comment this row, tests pass
        return this.store.findRecord('foo', 1).then((foo) => foo.get('bars'))
      });
  }
});
