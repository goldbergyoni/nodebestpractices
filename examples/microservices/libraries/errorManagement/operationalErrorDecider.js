'use strict';

const logger = require('logger');

module.exports = new operationalErrorDecider();

//this object is responsible to run various rules on an error object and decide whether it's familiar and probably operational
//many packages throw non-classified errors though it's hard to determine whether the error is safe/operational - this place allow to run those decision rules
function operationalErrorDecider() {
  this.isOperationalError = function (error) {
    for (let rule of this.getAllRules()) {
      if (rule(error)) {
        {
          logger.info(`While deciding whether an error is operational, this error found to be operational: ${error.name}: ${error.message}`);
          return true;
        }
      }
    }

    return false;
  };

  this.getAllRules = function () {
    const allRules = [];

    //if isOperational is stated explictly - then its obvious
    allRules.push((error) => {
      return error.isOperational === true;
    });

    //probably coming from some middleware that serves a single request
    allRules.push((error) => {
      return !isNaN(error.httpCode);
    });

    //probably coming from postgresql driver
    allRules.push((error) => {
      return error.hasOwnProperty('table') && error.hasOwnProperty('internalQuery') && error.hasOwnProperty('position');
    });

    return allRules;
  };
}
