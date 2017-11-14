
'use strict';

// local lib
var History = require('./History');

module.exports = OverviewHistory;

function OverviewHistory(data) {
  History.call(this, data);
}

OverviewHistory.prototype = Object.create(History.prototype);

OverviewHistory.prototype.addReport = function(report, date) {
  date = date || report.date || new Date().toUTCString();
  this.push({
    date : date,
    total : {
      sloc : report.summary.total.sloc,
      maintainability: report.summary.total.maintainability
    },
    average : {
      sloc : report.summary.average.sloc,
      maintainability: report.summary.average.maintainability
    }
  });
  return this;
};

