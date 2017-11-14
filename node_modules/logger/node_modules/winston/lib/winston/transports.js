/*
 * transports.js: Set of all transports Winston knows about
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

Object.defineProperty(exports, 'Console', {
  configurable: true,
  enumerable: true,
  get: function () {
    return require('./transports/console').Console;
  }
});
Object.defineProperty(exports, 'File', {
  configurable: true,
  enumerable: true,
  get: function () {
    return require('./transports/file').File;
  }
});
Object.defineProperty(exports, 'Http', {
  configurable: true,
  enumerable: true,
  get: function () {
    return require('./transports/http').Http;
  }
});
Object.defineProperty(exports, 'Memory', {
  configurable: true,
  enumerable: true,
  get: function () {
    return require('./transports/memory').Memory;
  }
});
