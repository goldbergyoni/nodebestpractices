require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['ec2'] = {};
AWS.EC2 = Service.defineService('ec2', ['2013-06-15*', '2013-10-15*', '2014-02-01*', '2014-05-01*', '2014-06-15*', '2014-09-01*', '2014-10-01*', '2015-03-01*', '2015-04-15*', '2015-10-01*', '2016-04-01*', '2016-09-15']);
require('../lib/services/ec2');
Object.defineProperty(apiLoader.services['ec2'], '2016-09-15', {
  get: function get() {
    var model = require('../apis/ec2-2016-09-15.min.json');
    model.paginators = require('../apis/ec2-2016-09-15.paginators.json').pagination;
    model.waiters = require('../apis/ec2-2016-09-15.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.EC2;
