/**
 * Selects a connection randomly
 *
 * @module selectors
 * @type {Function}
 * @param {Array} connection - The list of connections to choose from
 * @return {Connection} - The selected connection
 */
module.exports = function RandomSelector(connections) {
  return connections[Math.floor(Math.random() * connections.length)];
};
