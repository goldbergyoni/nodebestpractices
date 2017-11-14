require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elb'] = {};
AWS.ELB = Service.defineService('elb', ['2012-06-01']);
Object.defineProperty(apiLoader.services['elb'], '2012-06-01', {
  get: function get() {
    var model = require('../apis/elasticloadbalancing-2012-06-01.min.json');
    model.paginators = require('../apis/elasticloadbalancing-2012-06-01.paginators.json').pagination;
    model.waiters = require('../apis/elasticloadbalancing-2012-06-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ELB;
