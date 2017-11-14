require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['sms'] = {};
AWS.SMS = Service.defineService('sms', ['2016-10-24']);
Object.defineProperty(apiLoader.services['sms'], '2016-10-24', {
  get: function get() {
    var model = require('../apis/sms-2016-10-24.min.json');
    model.paginators = require('../apis/sms-2016-10-24.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.SMS;
