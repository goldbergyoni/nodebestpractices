/**
 * @namespace faker.finance
 */
var Finance = function (faker) {
  var ibanLib = require("./iban");
  var Helpers = faker.helpers,
      self = this;

  /**
   * account
   *
   * @method faker.finance.account
   * @param {number} length
   */
  self.account = function (length) {

      length = length || 8;

      var template = '';

      for (var i = 0; i < length; i++) {
          template = template + '#';
      }
      length = null;
      return Helpers.replaceSymbolWithNumber(template);
  };

  /**
   * accountName
   *
   * @method faker.finance.accountName
   */
  self.accountName = function () {

      return [Helpers.randomize(faker.definitions.finance.account_type), 'Account'].join(' ');
  };

  /**
   * mask
   *
   * @method faker.finance.mask
   * @param {number} length
   * @param {boolean} parens
   * @param {boolean} ellipsis
   */
  self.mask = function (length, parens, ellipsis) {

      //set defaults
      length = (length == 0 || !length || typeof length == 'undefined') ? 4 : length;
      parens = (parens === null) ? true : parens;
      ellipsis = (ellipsis === null) ? true : ellipsis;

      //create a template for length
      var template = '';

      for (var i = 0; i < length; i++) {
          template = template + '#';
      }

      //prefix with ellipsis
      template = (ellipsis) ? ['...', template].join('') : template;

      template = (parens) ? ['(', template, ')'].join('') : template;

      //generate random numbers
      template = Helpers.replaceSymbolWithNumber(template);

      return template;
  };

  //min and max take in minimum and maximum amounts, dec is the decimal place you want rounded to, symbol is $, €, £, etc
  //NOTE: this returns a string representation of the value, if you want a number use parseFloat and no symbol

  /**
   * amount
   *
   * @method faker.finance.amount
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   */
  self.amount = function (min, max, dec, symbol) {

      min = min || 0;
      max = max || 1000;
      dec = dec === undefined ? 2 : dec;
      symbol = symbol || '';
      var randValue = faker.random.number({ max: max, min: min, precision: Math.pow(10, -dec) });

      return symbol + randValue.toFixed(dec);
  };

  /**
   * transactionType
   *
   * @method faker.finance.transactionType
   */
  self.transactionType = function () {
      return Helpers.randomize(faker.definitions.finance.transaction_type);
  };

  /**
   * currencyCode
   *
   * @method faker.finance.currencyCode
   */
  self.currencyCode = function () {
      return faker.random.objectElement(faker.definitions.finance.currency)['code'];
  };

  /**
   * currencyName
   *
   * @method faker.finance.currencyName
   */
  self.currencyName = function () {
      return faker.random.objectElement(faker.definitions.finance.currency, 'key');
  };

  /**
   * currencySymbol
   *
   * @method faker.finance.currencySymbol
   */
  self.currencySymbol = function () {
      var symbol;

      while (!symbol) {
          symbol = faker.random.objectElement(faker.definitions.finance.currency)['symbol'];
      }
      return symbol;
  };

  /**
   * bitcoinAddress
   *
   * @method  faker.finance.bitcoinAddress
   */
  self.bitcoinAddress = function () {
    var addressLength = faker.random.number({ min: 27, max: 34 });

    var address = faker.random.arrayElement(['1', '3']);

    for (var i = 0; i < addressLength - 1; i++)
      address += faker.random.alphaNumeric().toUpperCase();

    return address;
  };

  /**
   * iban
   *
   * @method  faker.finance.iban
   */
  self.iban = function (formatted) {
      var ibanFormat = faker.random.arrayElement(ibanLib.formats);
      var s = "";
      var count = 0;
      for (var b = 0; b < ibanFormat.bban.length; b++) {
          var bban = ibanFormat.bban[b];
          var c = bban.count;
          count += bban.count;
          while (c > 0) {
              if (bban.type == "a") {
                  s += faker.random.arrayElement(ibanLib.alpha);
              } else if (bban.type == "c") {
                  if (faker.random.number(100) < 80) {
                      s += faker.random.number(9);
                  } else {
                      s += faker.random.arrayElement(ibanLib.alpha);
                  }
              } else {
                  if (c >= 3 && faker.random.number(100) < 30) {
                      if (faker.random.boolean()) {
                          s += faker.random.arrayElement(ibanLib.pattern100);
                          c -= 2;
                      } else {
                          s += faker.random.arrayElement(ibanLib.pattern10);
                          c--;
                      }
                  } else {
                      s += faker.random.number(9);
                  }
              }
              c--;
          }
          s = s.substring(0, count);
      }
      var checksum = 98 - ibanLib.mod97(ibanLib.toDigitString(s + ibanFormat.country + "00"));
      if (checksum < 10) {
          checksum = "0" + checksum;
      }
      var iban = ibanFormat.country + checksum + s;
      return formatted ? iban.match(/.{1,4}/g).join(" ") : iban;
  };

  /**
   * bic
   *
   * @method  faker.finance.bic
   */
  self.bic = function () {
      var vowels = ["A", "E", "I", "O", "U"];
      var prob = faker.random.number(100);
      return Helpers.replaceSymbols("???") +
          faker.random.arrayElement(vowels) +
          faker.random.arrayElement(ibanLib.iso3166) +
          Helpers.replaceSymbols("?") + "1" +
          (prob < 10 ?
              Helpers.replaceSymbols("?" + faker.random.arrayElement(vowels) + "?") :
          prob < 40 ?
              Helpers.replaceSymbols("###") : "");
  };
};

module['exports'] = Finance;
