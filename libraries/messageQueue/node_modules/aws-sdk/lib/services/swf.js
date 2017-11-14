var AWS = require('../core');

AWS.util.hideProperties(AWS, ['SimpleWorkflow']);

/**
 * @constant
 * @readonly
 * Backwards compatibility for access to the {AWS.SWF} service class.
 */
AWS.SimpleWorkflow = AWS.SWF;
