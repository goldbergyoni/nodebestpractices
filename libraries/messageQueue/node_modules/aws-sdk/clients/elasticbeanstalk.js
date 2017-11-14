require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['elasticbeanstalk'] = {};
AWS.ElasticBeanstalk = Service.defineService('elasticbeanstalk', ['2010-12-01']);
Object.defineProperty(apiLoader.services['elasticbeanstalk'], '2010-12-01', {
  get: function get() {
    var model = require('../apis/elasticbeanstalk-2010-12-01.min.json');
    model.paginators = require('../apis/elasticbeanstalk-2010-12-01.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ElasticBeanstalk;
