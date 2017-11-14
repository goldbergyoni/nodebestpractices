var _objectAssign = require('./_objectAssign');

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;
