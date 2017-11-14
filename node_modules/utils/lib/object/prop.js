'use strict';

module.exports = function prop(name) {
  return function (obj) {
    return obj[name];
  };
};
