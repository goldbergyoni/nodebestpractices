var parse = require('spdx-expression-parse')

var ranges = require('spdx-ranges')

var notALicenseIdentifier = ' is not a simple license identifier';

var rangeComparison = function(comparison) {
  return function(first, second) {
    var firstAST = parse(first);
    if (!firstAST.hasOwnProperty('license')) {
      throw new Error('"' + first + '"' + notALicenseIdentifier) }
    var secondAST = parse(second);
    if (!secondAST.hasOwnProperty('license')) {
      throw new Error('"' + second + '"' + notALicenseIdentifier) }
    return ranges.some(function(range) {
      var indexOfFirst = range.indexOf(firstAST.license);
      if (indexOfFirst < 0) {
        return false; }
      var indexOfSecond = range.indexOf(secondAST.license);
      if (indexOfSecond < 0) {
        return false }
      return comparison(indexOfFirst, indexOfSecond) }) } }

exports.gt = rangeComparison(function(first, second) {
  return first > second })

exports.lt = rangeComparison(function(first, second) {
  return first < second })

