require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['autoscaling'] = {};
AWS.AutoScaling = Service.defineService('autoscaling', ['2011-01-01']);
Object.defineProperty(apiLoader.services['autoscaling'], '2011-01-01', {
  get: function get() {
    var model = require('../apis/autoscaling-2011-01-01.min.json');
    model.paginators = require('../apis/autoscaling-2011-01-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.AutoScaling;
