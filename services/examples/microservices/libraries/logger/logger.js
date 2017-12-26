'use strict';
const winston = require('winston'),
  fs = require('fs'),
  configurationManager = require('configurationManager'),
  logsDirectory = './logs';

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

process.stdout.write(`Logger is now starting in environment ${configurationManager.environment}, further logs should appear in a log file`);
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { 'timestamp': true });
let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: "debug",
      colorize: true,
      prettyPrint: true
    }),
    new (winston.transports.File)({
      filename: "./logs/logs.log",
      level: "debug",
      maxsize: 3145728//set to 3 megabytes
    })
  ]
});

logger = new Proxy(logger, {
  get(target, property) {
    if (typeof (target[property]) === "function")
      return function (...params) {
        if(params.length > 1 && params[1].constructor && params[1].constructor.name == "Date") {
          const elapsedTime = new Date() - params[1];
          params[0] += ` (${elapsedTime.toFixed(0)} ms)`;
          params.splice(1, 1);
        }

        return target[property](...params);
      };
    return target[property];
  }
});

module.exports = logger;