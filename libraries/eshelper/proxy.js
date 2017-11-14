'use strict';

const esHandler = require('./handler'),
  proxiedMethods = ['find', 'insert', 'refresh', 'bulkInsert'];

module.exports = function(indexName, type) {
  return new Proxy(esHandler, {
    get(target, property) {
      if (typeof(target[property]) === "function" && proxiedMethods.indexOf(property) >= 0)
        return function(...params) {
          return target[property](indexName, type, ...params);
      };
      return target[property];
    }
  });
};
