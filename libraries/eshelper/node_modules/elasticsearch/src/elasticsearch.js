// In order to help people who were accidentally upgraded to this ES client,
// throw an error when they try to instanciate the exported function.
// previous "elasticsearch" module -> https://github.com/ncb000gt/node-es
function es() {
  throw new Error('Looks like you are expecting the previous "elasticsearch" module. ' +
    'It is now the "es" module. To create a client with this module use ' +
    '`new es.Client(params)`.');
}

es.Client = require('./lib/client');
es.ConnectionPool = require('./lib/connection_pool');
es.Transport = require('./lib/transport');
es.errors = require('./lib/errors');

module.exports = es;
