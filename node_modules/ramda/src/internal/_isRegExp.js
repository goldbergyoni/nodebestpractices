module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};
