/**
 * Selects a connection the simplest way possible, Round Robin
 *
 * @module selectors
 * @type {Function}
 * @param {Array} connections - The list of connections that this selector needs to choose from
 * @return {Connection} - The selected connection
 */
module.exports = function (connections) {
  var connection = connections[0];
  connections.push(connections.shift());
  return connection;
};
