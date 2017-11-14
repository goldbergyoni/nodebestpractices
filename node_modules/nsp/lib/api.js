'use strict';

const Pkg = require('../package.json');
const ProxyAgent = require('https-proxy-agent');
const Wreck = require('./wreck');

class API {
  constructor(options) {

    this._options = {
      baseUrl: options.baseUrl,
      json: true,
      headers: {
        'X-NSP-VERSION': Pkg.version
      }
    };

    if (options.proxy) {
      this._options.agent = new ProxyAgent(options.proxy);
    }

    if (options.token) {
      this.authed = true;
      this._options.headers.authorization = options.token;
    }
  }

  check(params, payload) {

    let pre = Promise.resolve();
    if (params.org &&
        params.integration) {

      pre = pre.then(() => {

        return this.getIntegration(params);
      }).then((integration) => {

        payload.exceptions = integration.data.settings.exceptions;
        return Promise.resolve();
      });
    }

    return pre.then(() => {

      return Wreck.post('/check', Object.assign({}, this._options, { payload }));
    });
  }

  getIntegration(params) {

    return Wreck.get(`/integrations/${params.org}/github/${params.integration}`, this._options);
  }

  login(payload) {

    return Wreck.post('/user/login', Object.assign({}, this._options, { payload }));
  }
}

module.exports = API;
