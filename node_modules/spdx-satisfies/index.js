var parse = require('spdx-expression-parse')
var compare = require('spdx-compare')

module.exports = (function() {
  var rangesAreCompatible = function(first, second) {
    return (
      first.license === second.license ||
      ranges.some(function(range) {
        return (
          range.indexOf(first.license) > -1 &&
          range.indexOf(second.license) ) }) ) }

  var identifierInRange = function(identifier, range) {
    return (
      identifier.license === range.license ||
      compare.gt(identifier.license, range.license) ) }

  var licensesAreCompatible = function(first, second) {
    if (first.exception !== second.exception) {
      return false }
    else if (second.hasOwnProperty('license')) {
      if (second.hasOwnProperty('plus')) {
        if (first.hasOwnProperty('plus')) {
          // first+, second+
          return rangesAreCompatible(first, second) }
        else {
          // first, second+
          return identifierInRange(first, second) } }
      else {
        if (first.hasOwnProperty('plus')) {
          // first+, second
          return identifierInRange(second, first) }
        else {
          // first, second
          return first.license === second.license } } } }

  var recurseLeftAndRight = function(first, second) {
    var firstConjunction = first.conjunction
    if (firstConjunction === 'and') {
      return (
        recurse(first.left, second) &&
        recurse(first.right, second) ) }
    else if (firstConjunction === 'or') {
      return (
        recurse(first.left, second) ||
        recurse(first.right, second) ) } }

  var recurse = function(first, second) {
    if (first.hasOwnProperty('conjunction')) {
      return recurseLeftAndRight(first, second) }
    else if (second.hasOwnProperty('conjunction')) {
      return recurseLeftAndRight(second, first) }
    else {
      return licensesAreCompatible(first, second) } }

  return function(first, second) {
    return recurse(parse(first), parse(second)) } })()

