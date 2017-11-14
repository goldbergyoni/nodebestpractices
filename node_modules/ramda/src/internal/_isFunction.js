module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};
