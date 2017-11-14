'use strict';

const Wreck = require('wreck');

const internals = {};
internals.request = function (method, uri, options) {

  return new Promise((resolve, reject) => {

    Wreck[method](uri, options, (err, res, data) => {

      if (err) {
        const e = new Error(err.message);
        return reject(Object.assign(e, {
          statusCode: err.output.statusCode,
          headers: err.data ? err.data.headers : err.output.headers,
          data: err.data ? err.data.payload : err.output.payload,
          isServer: err.isServer
        }));
      }

      return resolve({
        meta: {
          statusCode: res.statusCode,
          headers: res.headers
        },
        data
      });
    });
  });
};

exports.delete = function (uri, options) {

  return internals.request('delete', uri, options);
};

exports.get = function (uri, options) {

  return internals.request('get', uri, options);
};

exports.post = function (uri, options) {

  return internals.request('post', uri, options);
};

exports.put = function (uri, options) {

  return internals.request('put', uri, options);
};
