require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['sns'] = {};
AWS.SNS = Service.defineService('sns', ['2010-03-31']);
Object.defineProperty(apiLoader.services['sns'], '2010-03-31', {
  get: function get() {
    var model = require('../apis/sns-2010-03-31.min.json');
    model.paginators = require('../apis/sns-2010-03-31.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.SNS;
