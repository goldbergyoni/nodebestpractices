require('./node_loader');

var AWS = require('./core');

// Load all service classes
require('../clients/all');
module.exports = AWS;
