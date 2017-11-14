require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['acm'] = {};
AWS.ACM = Service.defineService('acm', ['2015-12-08']);
Object.defineProperty(apiLoader.services['acm'], '2015-12-08', {
  get: function get() {
    var model = require('../apis/acm-2015-12-08.min.json');
    model.paginators = require('../apis/acm-2015-12-08.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ACM;
