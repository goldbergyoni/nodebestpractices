require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['route53'] = {};
AWS.Route53 = Service.defineService('route53', ['2013-04-01']);
require('../lib/services/route53');
Object.defineProperty(apiLoader.services['route53'], '2013-04-01', {
  get: function get() {
    var model = require('../apis/route53-2013-04-01.min.json');
    model.paginators = require('../apis/route53-2013-04-01.paginators.json').pagination;
    model.waiters = require('../apis/route53-2013-04-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Route53;
