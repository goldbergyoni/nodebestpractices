require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['elbv2'] = {};
AWS.ELBv2 = Service.defineService('elbv2', ['2015-12-01']);
Object.defineProperty(apiLoader.services['elbv2'], '2015-12-01', {
  get: function get() {
    var model = require('../apis/elasticloadbalancingv2-2015-12-01.min.json');
    model.paginators = require('../apis/elasticloadbalancingv2-2015-12-01.paginators.json').pagination;
    model.waiters = require('../apis/elasticloadbalancingv2-2015-12-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ELBv2;
