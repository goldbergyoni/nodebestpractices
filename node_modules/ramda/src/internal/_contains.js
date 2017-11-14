var _indexOf = require('./_indexOf');


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};
