require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['redshift'] = {};
AWS.Redshift = Service.defineService('redshift', ['2012-12-01']);
Object.defineProperty(apiLoader.services['redshift'], '2012-12-01', {
  get: function get() {
    var model = require('../apis/redshift-2012-12-01.min.json');
    model.paginators = require('../apis/redshift-2012-12-01.paginators.json').pagination;
    model.waiters = require('../apis/redshift-2012-12-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Redshift;
