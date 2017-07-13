/*jshint node:true*/

module.exports = function() {
  return {
    scenarios: [
      {
        name: 'ember-data 2.15.0-beta.2',
        npm: {
          devDependencies: {
            'ember-data': '2.15.0-beta.2'
          }
        }
      },
      {
        name: 'ember-data 2.14.4',
        npm: {
          devDependencies: {
            'ember-data': '2.14.4'
          }
        }
      },
      {
        name: 'ember-data 2.13.2',
        npm: {
          devDependencies: {
            'ember-data': '2.13.2'
          }
        }
      },
      {
        name: 'ember-data 2.12.2',
        npm: {
          devDependencies: {
            'ember-data': '2.12.2'
          }
        }
      }
    ]
  };
};
