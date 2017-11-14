'use strict';

const Inquirer = require('inquirer');

const Command = require('../lib/command');
const Config = require('../lib/config');
const API = require('../lib/api');

exports.command = 'login';
exports.description = 'login to the node security project';

exports.builder = {
  email: {
    description: 'your email address',
    group: 'User info:'
  },
  password: {
    description: 'your password',
    group: 'User info:'
  }
};

exports.handler = Command.wrap('login', (args) => {

  // $lab:coverage:off$
  let input = Promise.resolve();
  if (process.stdout.isTTY) {
    if (!args.email) {
      input = input.then(() => {

        return Inquirer.prompt({
          name: 'email',
          message: 'Email address'
        }).then((answer) => {

          args.email = answer.email;
        });
      });
    }

    if (!args.password) {
      input = input.then(() => {

        return Inquirer.prompt({
          name: 'password',
          message: 'Password',
          type: 'password'
        }).then((answer) => {

          args.password = answer.password;
        });
      });
    }
  }
  else {
    if (!args.email ||
        !args.password) {

      return Promise.reject(new Error('Email and password required for non-interactive logins'));
    }
  }
  // $lab:coverage:on$

  return input.then(() => {

    const api = new API(args);
    return api.login({ email: args.email, password: args.password });
  }).then((res) => {

    return Config.update(res.data);
  }).then(() => {

    return {
      message: `logged in as ${args.email}`
    };
  });
});
