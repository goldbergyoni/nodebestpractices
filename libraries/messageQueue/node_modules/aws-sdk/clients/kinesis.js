require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['kinesis'] = {};
AWS.Kinesis = Service.defineService('kinesis', ['2013-12-02']);
Object.defineProperty(apiLoader.services['kinesis'], '2013-12-02', {
  get: function get() {
    var model = require('../apis/kinesis-2013-12-02.min.json');
    model.paginators = require('../apis/kinesis-2013-12-02.paginators.json').pagination;
    model.waiters = require('../apis/kinesis-2013-12-02.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Kinesis;
