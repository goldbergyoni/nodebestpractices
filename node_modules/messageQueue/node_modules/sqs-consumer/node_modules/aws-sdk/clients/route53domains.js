require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['route53domains'] = {};
AWS.Route53Domains = Service.defineService('route53domains', ['2014-05-15']);
Object.defineProperty(apiLoader.services['route53domains'], '2014-05-15', {
  get: function get() {
    var model = require('../apis/route53domains-2014-05-15.min.json');
    model.paginators = require('../apis/route53domains-2014-05-15.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Route53Domains;
