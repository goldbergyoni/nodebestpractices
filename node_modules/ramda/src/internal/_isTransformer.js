module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};
