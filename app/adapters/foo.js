import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  findHasMany() {
    return Ember.RSVP.resolve({
      data: [{
        id: 1,
        type: 'bar'
      }]
    });
  },

  _ajaxRequest( hash ) {
    setTimeout( () => {
      const jqXHR = {
        status: 200,
        getAllResponseHeaders() { return ''; }
      };
      Ember.run( hash, 'success', {
        data: {
          id: 1,
          type: 'foo',
          relationships: {
            bars: {
              links: {
                related: 'bars'
              }
            }
          }
        }
      }, 'OK', jqXHR);
    }, 0 );
  }
});
