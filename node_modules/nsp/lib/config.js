'use strict';

const Fs = require('fs');
const Os = require('os');
const Path = require('path');

exports.update = function (settings) {

  const path = Path.join(Os.homedir(), '.nsprc');
  let current;
  try {
    current = JSON.parse(Fs.readFileSync(path));
  }
  catch (err) {
    current = {};
  }

  const updated = Object.assign(current, settings);
  for (const key in updated) {
    if (updated[key] === undefined) {
      delete updated[key];
    }
  }

  try {
    Fs.writeFileSync(path, JSON.stringify(updated, null, 2));
  }
  catch (err) {}
};
