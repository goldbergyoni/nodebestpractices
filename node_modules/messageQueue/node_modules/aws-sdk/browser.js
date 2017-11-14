require('./lib/browser_loader');

var AWS = require('./lib/core');
if (typeof window !== 'undefined') window.AWS = AWS;
if (typeof module !== 'undefined') module.exports = AWS;
if (typeof self !== 'undefined') self.AWS = AWS;