require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['waf'] = {};
AWS.WAF = Service.defineService('waf', ['2015-08-24']);
Object.defineProperty(apiLoader.services['waf'], '2015-08-24', {
  get: function get() {
    var model = require('../apis/waf-2015-08-24.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.WAF;
