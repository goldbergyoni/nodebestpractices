require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['cloudfront'] = {};
AWS.CloudFront = Service.defineService('cloudfront', ['2013-05-12*', '2013-11-11*', '2014-05-31*', '2014-10-21*', '2014-11-06*', '2015-04-17*', '2015-07-27*', '2015-09-17*', '2016-01-13*', '2016-01-28*', '2016-08-01*', '2016-08-20*', '2016-09-07*', '2016-09-29']);
require('../lib/services/cloudfront');
Object.defineProperty(apiLoader.services['cloudfront'], '2016-09-29', {
  get: function get() {
    var model = require('../apis/cloudfront-2016-09-29.min.json');
    model.paginators = require('../apis/cloudfront-2016-09-29.paginators.json').pagination;
    model.waiters = require('../apis/cloudfront-2016-09-29.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CloudFront;
