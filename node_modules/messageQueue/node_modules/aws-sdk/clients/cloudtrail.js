require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudtrail'] = {};
AWS.CloudTrail = Service.defineService('cloudtrail', ['2013-11-01']);
Object.defineProperty(apiLoader.services['cloudtrail'], '2013-11-01', {
  get: function get() {
    var model = require('../apis/cloudtrail-2013-11-01.min.json');
    model.paginators = require('../apis/cloudtrail-2013-11-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudTrail;
