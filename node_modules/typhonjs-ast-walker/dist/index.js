'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ASTWalker = require('./ASTWalker.js');

var _ASTWalker2 = _interopRequireDefault(_ASTWalker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Provides a default ASTWalker instance.
 */
exports.default = new _ASTWalker2.default();
module.exports = exports['default'];