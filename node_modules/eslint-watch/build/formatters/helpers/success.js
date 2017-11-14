'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = successHelper;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _characters = require('./characters');

var _characters2 = _interopRequireDefault(_characters);

var _logger = require('../../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('success-formatter');
logger.debug('loaded');

function successHelper(result) {
  logger.debug(result);
  return `${_chalk2.default.green(_characters2.default.check)} ${_chalk2.default.white(result.filePath)}`;
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtYXR0ZXJzL2hlbHBlcnMvc3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJzdWNjZXNzSGVscGVyIiwibG9nZ2VyIiwiZGVidWciLCJyZXN1bHQiLCJncmVlbiIsImNoZWNrIiwid2hpdGUiLCJmaWxlUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBUXdCQSxhOztBQVJ4Qjs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFNBQVMsc0JBQU8sbUJBQVAsQ0FBZjtBQUNBQSxPQUFPQyxLQUFQLENBQWEsUUFBYjs7QUFFZSxTQUFTRixhQUFULENBQXVCRyxNQUF2QixFQUErQjtBQUM1Q0YsU0FBT0MsS0FBUCxDQUFhQyxNQUFiO0FBQ0EsU0FBUSxHQUFFLGdCQUFNQyxLQUFOLENBQVkscUJBQUVDLEtBQWQsQ0FBcUIsSUFBRyxnQkFBTUMsS0FBTixDQUFZSCxPQUFPSSxRQUFuQixDQUE2QixFQUEvRDtBQUNEIiwiZmlsZSI6InN1Y2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5pbXBvcnQgYyBmcm9tICcuL2NoYXJhY3RlcnMnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi8uLi9sb2dnZXInO1xuXG5jb25zdCBsb2dnZXIgPSBMb2dnZXIoJ3N1Y2Nlc3MtZm9ybWF0dGVyJyk7XG5sb2dnZXIuZGVidWcoJ2xvYWRlZCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWNjZXNzSGVscGVyKHJlc3VsdCkge1xuICBsb2dnZXIuZGVidWcocmVzdWx0KTtcbiAgcmV0dXJuIGAke2NoYWxrLmdyZWVuKGMuY2hlY2spfSAke2NoYWxrLndoaXRlKHJlc3VsdC5maWxlUGF0aCl9YDtcbn07XG4iXX0=