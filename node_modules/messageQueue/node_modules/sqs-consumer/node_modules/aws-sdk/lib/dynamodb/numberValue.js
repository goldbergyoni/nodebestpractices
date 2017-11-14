var util = require('../core').util;

/**
 * An object recognizable as a numeric value that stores the underlying number
 * as a string.
 *
 * Intended to be a deserialization target for the DynamoDB Document Client when
 * the `wrapNumbers` flag is set. This allows for numeric values that lose
 * precision when converted to JavaScript's `number` type.
 */
var DynamoDBNumberValue = util.inherit({
  constructor: function NumberValue(value) {
    this.value = value.toString();
  },

  /**
   * Render the underlying value as a number when converting to JSON.
   */
  toJSON: function () {
    return this.toNumber();
  },

  /**
   * Convert the underlying value to a JavaScript number.
   */
  toNumber: function () {
    return Number(this.value);
  },

  /**
   * Return a string representing the unaltered value provided to the
   * constructor.
   */
  toString: function () {
    return this.value;
  }
});

module.exports = DynamoDBNumberValue;