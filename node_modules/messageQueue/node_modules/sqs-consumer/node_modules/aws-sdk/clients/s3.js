require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['s3'] = {};
AWS.S3 = Service.defineService('s3', ['2006-03-01']);
require('../lib/services/s3');
Object.defineProperty(apiLoader.services['s3'], '2006-03-01', {
  get: function get() {
    var model = require('../apis/s3-2006-03-01.min.json');
    model.paginators = require('../apis/s3-2006-03-01.paginators.json').pagination;
    model.waiters = require('../apis/s3-2006-03-01.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.S3;
