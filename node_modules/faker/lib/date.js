/**
 *
 * @namespace faker.date
 */
var _Date = function (faker) {
  var self = this;
  /**
   * past
   *
   * @method faker.date.past
   * @param {number} years
   * @param {date} refDate
   */
  self.past = function (years, refDate) {
      var date = (refDate) ? new Date(Date.parse(refDate)) : new Date();
      var range = {
        min: 1000,
        max: (years || 1) * 365 * 24 * 3600 * 1000
      };

      var past = date.getTime();
      past -= faker.random.number(range); // some time from now to N years ago, in milliseconds
      date.setTime(past);

      return date;
  };

  /**
   * future
   *
   * @method faker.date.future
   * @param {number} years
   * @param {date} refDate
   */
  self.future = function (years, refDate) {
      var date = (refDate) ? new Date(Date.parse(refDate)) : new Date();
      var range = {
        min: 1000,
        max: (years || 1) * 365 * 24 * 3600 * 1000
      };

      var future = date.getTime();
      future += faker.random.number(range); // some time from now to N years later, in milliseconds
      date.setTime(future);

      return date;
  };

  /**
   * between
   *
   * @method faker.date.between
   * @param {date} from
   * @param {date} to
   */
  self.between = function (from, to) {
      var fromMilli = Date.parse(from);
      var dateOffset = faker.random.number(Date.parse(to) - fromMilli);

      var newDate = new Date(fromMilli + dateOffset);

      return newDate;
  };

  /**
   * recent
   *
   * @method faker.date.recent
   * @param {number} days
   */
  self.recent = function (days) {
      var date = new Date();
      var range = {
        min: 1000,
        max: (days || 1) * 24 * 3600 * 1000
      };

      var future = date.getTime();
      future -= faker.random.number(range); // some time from now to N days ago, in milliseconds
      date.setTime(future);

      return date;
  };

  /**
   * month
   *
   * @method faker.date.month
   * @param {object} options
   */
  self.month = function (options) {
      options = options || {};

      var type = 'wide';
      if (options.abbr) {
          type = 'abbr';
      }
      if (options.context && typeof faker.definitions.date.month[type + '_context'] !== 'undefined') {
          type += '_context';
      }

      var source = faker.definitions.date.month[type];

      return faker.random.arrayElement(source);
  };

  /**
   * weekday
   *
   * @param {object} options
   * @method faker.date.weekday
   */
  self.weekday = function (options) {
      options = options || {};

      var type = 'wide';
      if (options.abbr) {
          type = 'abbr';
      }
      if (options.context && typeof faker.definitions.date.weekday[type + '_context'] !== 'undefined') {
          type += '_context';
      }

      var source = faker.definitions.date.weekday[type];

      return faker.random.arrayElement(source);
  };
  
  return self;
  
};

module['exports'] = _Date;