module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};
