'use strict';

const knex = require('knex');

let _internalDBConnection = null;

module.exports.getInstance = function (config, onQueryCallback, onQueryResponseCallback, onErrorCallback) {
    if (!_internalDBConnection) {
        _internalDBConnection = knex(config);
        _internalDBConnection
            .on('query', onQueryCallback)
            .on('query-response', onQueryResponseCallback)
            .on('query-error', onErrorCallback);
    }

    return _internalDBConnection;
};