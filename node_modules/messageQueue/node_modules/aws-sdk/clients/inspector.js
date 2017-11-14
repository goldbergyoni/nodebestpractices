require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['inspector'] = {};
AWS.Inspector = Service.defineService('inspector', ['2015-08-18*', '2016-02-16']);
Object.defineProperty(apiLoader.services['inspector'], '2016-02-16', {
  get: function get() {
    var model = require('../apis/inspector-2016-02-16.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Inspector;
