require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['lambda'] = {};
AWS.Lambda = Service.defineService('lambda', ['2014-11-11', '2015-03-31']);
Object.defineProperty(apiLoader.services['lambda'], '2014-11-11', {
  get: function get() {
    var model = require('../apis/lambda-2014-11-11.min.json');
    model.paginators = require('../apis/lambda-2014-11-11.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(apiLoader.services['lambda'], '2015-03-31', {
  get: function get() {
    var model = require('../apis/lambda-2015-03-31.min.json');
    model.paginators = require('../apis/lambda-2015-03-31.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Lambda;
