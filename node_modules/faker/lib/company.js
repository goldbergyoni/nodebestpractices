/**
 *
 * @namespace faker.company
 */
var Company = function (faker) {
  
  var self = this;
  var f = faker.fake;
  
  /**
   * suffixes
   *
   * @method faker.company.suffixes
   */
  this.suffixes = function () {
    // Don't want the source array exposed to modification, so return a copy
    return faker.definitions.company.suffix.slice(0);
  }

  /**
   * companyName
   *
   * @method faker.company.companyName
   * @param {string} format
   */
  this.companyName = function (format) {

    var formats = [
      '{{name.lastName}} {{company.companySuffix}}',
      '{{name.lastName}} - {{name.lastName}}',
      '{{name.lastName}}, {{name.lastName}} and {{name.lastName}}'
    ];

    if (typeof format !== "number") {
      format = faker.random.number(formats.length - 1);
    }

    return f(formats[format]);
  }

  /**
   * companySuffix
   *
   * @method faker.company.companySuffix
   */
  this.companySuffix = function () {
      return faker.random.arrayElement(faker.company.suffixes());
  }

  /**
   * catchPhrase
   *
   * @method faker.company.catchPhrase
   */
  this.catchPhrase = function () {
    return f('{{company.catchPhraseAdjective}} {{company.catchPhraseDescriptor}} {{company.catchPhraseNoun}}')
  }

  /**
   * bs
   *
   * @method faker.company.bs
   */
  this.bs = function () {
    return f('{{company.bsAdjective}} {{company.bsBuzz}} {{company.bsNoun}}');
  }

  /**
   * catchPhraseAdjective
   *
   * @method faker.company.catchPhraseAdjective
   */
  this.catchPhraseAdjective = function () {
      return faker.random.arrayElement(faker.definitions.company.adjective);
  }

  /**
   * catchPhraseDescriptor
   *
   * @method faker.company.catchPhraseDescriptor
   */
  this.catchPhraseDescriptor = function () {
      return faker.random.arrayElement(faker.definitions.company.descriptor);
  }

  /**
   * catchPhraseNoun
   *
   * @method faker.company.catchPhraseNoun
   */
  this.catchPhraseNoun = function () {
      return faker.random.arrayElement(faker.definitions.company.noun);
  }

  /**
   * bsAdjective
   *
   * @method faker.company.bsAdjective
   */
  this.bsAdjective = function () {
      return faker.random.arrayElement(faker.definitions.company.bs_adjective);
  }

  /**
   * bsBuzz
   *
   * @method faker.company.bsBuzz
   */
  this.bsBuzz = function () {
      return faker.random.arrayElement(faker.definitions.company.bs_verb);
  }

  /**
   * bsNoun
   *
   * @method faker.company.bsNoun
   */
  this.bsNoun = function () {
      return faker.random.arrayElement(faker.definitions.company.bs_noun);
  }
  
}

module['exports'] = Company;