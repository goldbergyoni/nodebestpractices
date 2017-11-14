/**
 *
 * @namespace faker.phone
 */
var Phone = function (faker) {
  var self = this;

  /**
   * phoneNumber
   *
   * @method faker.phone.phoneNumber
   * @param {string} format
   */
  self.phoneNumber = function (format) {
      format = format || faker.phone.phoneFormats();
      return faker.helpers.replaceSymbolWithNumber(format);
  };

  // FIXME: this is strange passing in an array index.
  /**
   * phoneNumberFormat
   *
   * @method faker.phone.phoneFormatsArrayIndex
   * @param phoneFormatsArrayIndex
   */
  self.phoneNumberFormat = function (phoneFormatsArrayIndex) {
      phoneFormatsArrayIndex = phoneFormatsArrayIndex || 0;
      return faker.helpers.replaceSymbolWithNumber(faker.definitions.phone_number.formats[phoneFormatsArrayIndex]);
  };

  /**
   * phoneFormats
   *
   * @method faker.phone.phoneFormats
   */
  self.phoneFormats = function () {
    return faker.random.arrayElement(faker.definitions.phone_number.formats);
  };
  
  return self;

};

module['exports'] = Phone;