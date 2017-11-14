module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};
