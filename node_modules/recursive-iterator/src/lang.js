'use strict';
/**
 * @param {*} any
 * @returns {Boolean}
 */
export function isObject(any) {
  return any !== null && typeof any === 'object';
}
/**
 * @param {*} any
 * @returns {Boolean}
 */
export const {isArray} = Array;
/**
 * @param {*} any
 * @returns {Boolean}
 */
export function isArrayLike(any) {
  if (!isObject(any)) return false;
  if(!('length' in any)) return false;
  var length = any.length;
  if (!isNumber(length)) return false;
  if (length > 0) {
    return (length - 1) in any;
  } else {
    for(var key in any) {
      return false;
    }
  }
}
/**
 * @param {*} any
 * @returns {Boolean}
 */
export function isNumber(any) {
  return typeof any === 'number'
}
/**
 * @param {Object|Array} object
 * @returns {Array<String>}
 */
export function getKeys(object) {
  var keys_ = Object.keys(object);
  if (isArray(object)) {
    // skip sort
  } else if (isArrayLike(object)) {
    var index = keys_.indexOf('length');
    if (index > -1) {
      keys_.splice(index, 1);
    }
    // skip sort
  } else { 
    // sort
    keys_ = keys_.sort();
  }
  return keys_;
}