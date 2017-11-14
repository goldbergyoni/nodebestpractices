require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['waf'] = {};
AWS.WAF = Service.defineService('waf', ['2015-08-24']);
Object.defineProperty(apiLoader.services['waf'], '2015-08-24', {
  get: function get() {
    var model = require('../apis/waf-2015-08-24.min.json');
    model.paginators = require('../apis/waf-2015-08-24.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.WAF;
