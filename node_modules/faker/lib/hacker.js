/**
 *
 * @namespace faker.hacker
 */
var Hacker = function (faker) {
  var self = this;
  
  /**
   * abbreviation
   *
   * @method faker.hacker.abbreviation
   */
  self.abbreviation = function () {
    return faker.random.arrayElement(faker.definitions.hacker.abbreviation);
  };

  /**
   * adjective
   *
   * @method faker.hacker.adjective
   */
  self.adjective = function () {
    return faker.random.arrayElement(faker.definitions.hacker.adjective);
  };

  /**
   * noun
   *
   * @method faker.hacker.noun
   */
  self.noun = function () {
    return faker.random.arrayElement(faker.definitions.hacker.noun);
  };

  /**
   * verb
   *
   * @method faker.hacker.verb
   */
  self.verb = function () {
    return faker.random.arrayElement(faker.definitions.hacker.verb);
  };

  /**
   * ingverb
   *
   * @method faker.hacker.ingverb
   */
  self.ingverb = function () {
    return faker.random.arrayElement(faker.definitions.hacker.ingverb);
  };

  /**
   * phrase
   *
   * @method faker.hacker.phrase
   */
  self.phrase = function () {

    var data = {
      abbreviation: self.abbreviation,
      adjective: self.adjective,
      ingverb: self.ingverb,
      noun: self.noun,
      verb: self.verb
    };

    var phrase = faker.random.arrayElement([ "If we {{verb}} the {{noun}}, we can get to the {{abbreviation}} {{noun}} through the {{adjective}} {{abbreviation}} {{noun}}!",
      "We need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!",
      "Try to {{verb}} the {{abbreviation}} {{noun}}, maybe it will {{verb}} the {{adjective}} {{noun}}!",
      "You can't {{verb}} the {{noun}} without {{ingverb}} the {{adjective}} {{abbreviation}} {{noun}}!",
      "Use the {{adjective}} {{abbreviation}} {{noun}}, then you can {{verb}} the {{adjective}} {{noun}}!",
      "The {{abbreviation}} {{noun}} is down, {{verb}} the {{adjective}} {{noun}} so we can {{verb}} the {{abbreviation}} {{noun}}!",
      "{{ingverb}} the {{noun}} won't do anything, we need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!",
      "I'll {{verb}} the {{adjective}} {{abbreviation}} {{noun}}, that should {{noun}} the {{abbreviation}} {{noun}}!"
   ]);

   return faker.helpers.mustache(phrase, data);

  };
  
  return self;
};

module['exports'] = Hacker;