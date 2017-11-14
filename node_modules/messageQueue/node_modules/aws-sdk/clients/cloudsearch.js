require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudsearch'] = {};
AWS.CloudSearch = Service.defineService('cloudsearch', ['2011-02-01', '2013-01-01']);
Object.defineProperty(apiLoader.services['cloudsearch'], '2011-02-01', {
  get: function get() {
    var model = require('../apis/cloudsearch-2011-02-01.min.json');
    model.paginators = require('../apis/cloudsearch-2011-02-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(apiLoader.services['cloudsearch'], '2013-01-01', {
  get: function get() {
    var model = require('../apis/cloudsearch-2013-01-01.min.json');
    model.paginators = require('../apis/cloudsearch-2013-01-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudSearch;
