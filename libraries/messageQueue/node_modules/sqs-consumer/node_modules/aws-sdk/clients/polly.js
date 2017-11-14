require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['polly'] = {};
AWS.Polly = Service.defineService('polly', ['2016-06-10']);
require('../lib/services/polly');
Object.defineProperty(apiLoader.services['polly'], '2016-06-10', {
  get: function get() {
    var model = require('../apis/polly-2016-06-10.min.json');
    model.paginators = require('../apis/polly-2016-06-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Polly;
