require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['rds'] = {};
AWS.RDS = Service.defineService('rds', ['2013-01-10', '2013-02-12', '2013-09-09', '2014-09-01*', '2014-10-31']);
Object.defineProperty(apiLoader.services['rds'], '2013-01-10', {
  get: function get() {
    var model = require('../apis/rds-2013-01-10.min.json');
    model.paginators = require('../apis/rds-2013-01-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(apiLoader.services['rds'], '2013-02-12', {
  get: function get() {
    var model = require('../apis/rds-2013-02-12.min.json');
    model.paginators = require('../apis/rds-2013-02-12.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(apiLoader.services['rds'], '2013-09-09', {
  get: function get() {
    var model = require('../apis/rds-2013-09-09.min.json');
    model.paginators = require('../apis/rds-2013-09-09.paginators.json').pagination;
    model.waiters = require('../apis/rds-2013-09-09.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(apiLoader.services['rds'], '2014-10-31', {
  get: function get() {
    var model = require('../apis/rds-2014-10-31.min.json');
    model.paginators = require('../apis/rds-2014-10-31.paginators.json').pagination;
    model.waiters = require('../apis/rds-2014-10-31.waiters2.json').waiters;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.RDS;
