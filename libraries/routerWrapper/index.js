'use strict';

const express = require('express');
// Added all to the methods, since it should be supported by the express router
const methods = require('methods');

function getReposeByMethod(method) {
  switch (method)
  {
    case "get":
      return 200;
    case "put":
      return 201;
    default:
      return 200;
  }
}

let RouterProxy = () => new Proxy(express.Router(), {
	get(target, property) {
    if (typeof(target[property]) === "function" && methods.indexOf(property) >= 0) {
      return function(path, func, ...params) {
          target[property](path, async function(req, res, next, ...params){
            try {
              const response = await func(req, res, next, ...params);
              if (res.headerSent)
                next();
              else
                res.status(getReposeByMethod(property)).json(response);
            }
            catch (error) {
              next(error);
            }
        });
      };
    }
    return target[property];
	}
});

module.exports = RouterProxy;
