'use strict';

function undefsafe(obj, path) {
  var parts = path.split('.');
  var key = null;
  var type = typeof obj;

  // we're dealing with a primative
  if (type !== 'object' && type !== 'function') {
    return obj;
  } else if (path.trim() === '') {
    return obj;
  }

  while ((key = parts.shift())) {
    obj = obj[key];
    if (obj === undefined || obj === null) {
      break;
    }
  }

  // if we have a null object, make sure it's the one the user was after,
  // if it's not (i.e. parts has a length) then give undefined back.
  if (obj === null && parts.length !== 0) {
    obj = undefined;
  }

  return obj;
}

if (typeof module !== 'undefined') {
  module.exports = undefsafe;
}