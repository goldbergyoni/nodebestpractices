/**
 * Manager of connections to a node(s), capable of ensuring that connections are clear and living
 * before providing them to the application
 *
 * @class ConnectionPool
 * @constructor
 * @param {Object} config - The config object passed to the transport.
 */

module.exports = ConnectionPool;

var _ = require('./utils');
var Log = require('./log');

function ConnectionPool(config) {
  config = config || {};
  _.makeBoundMethods(this);

  if (!config.log) {
    this.log = new Log();
    config.log = this.log;
  } else {
    this.log = config.log;
  }

  // we will need this when we create connections down the road
  this._config = config;

  // get the selector config var
  this.selector = _.funcEnum(config, 'selector', ConnectionPool.selectors, ConnectionPool.defaultSelector);

  // get the connection class
  this.Connection = _.funcEnum(config, 'connectionClass', ConnectionPool.connectionClasses,
    ConnectionPool.defaultConnectionClass);

  // time that connections will wait before being revived
  this.deadTimeout = config.hasOwnProperty('deadTimeout') ? config.deadTimeout : 60000;
  this.maxDeadTimeout = config.hasOwnProperty('maxDeadTimeout') ? config.maxDeadTimeout : 18e5;
  this.calcDeadTimeout = _.funcEnum(config, 'calcDeadTimeout', ConnectionPool.calcDeadTimeoutOptions, 'exponential');

  // a map of connections to their "id" property, used when sniffing
  this.index = {};

  this._conns = {
    alive: [],
    dead: []
  };

  // information about timeouts for dead connections
  this._timeouts = [];
}

// selector options
ConnectionPool.selectors = require('./selectors');
ConnectionPool.defaultSelector = 'roundRobin';

// get the connection options
ConnectionPool.connectionClasses = require('./connectors');
ConnectionPool.defaultConnectionClass = ConnectionPool.connectionClasses._default;
delete ConnectionPool.connectionClasses._default;

// the function that calculates timeouts based on attempts
ConnectionPool.calcDeadTimeoutOptions = {
  flat: function (attempt, baseTimeout) {
    return baseTimeout;
  },
  exponential: function (attempt, baseTimeout) {
    return Math.min(baseTimeout * 2 * Math.pow(2, (attempt * 0.5 - 1)), this.maxDeadTimeout);
  }
};

/**
 * Selects a connection from the list using the this.selector
 * Features:
 *  - detects if the selector is async or not
 *  - sync selectors should still return asynchronously
 *  - catches errors in sync selectors
 *  - automatically selects the first dead connection when there no living connections
 *
 * @param  {Function} cb [description]
 * @return {[type]}      [description]
 */
ConnectionPool.prototype.select = function (cb) {
  if (this._conns.alive.length) {
    if (this.selector.length > 1) {
      this.selector(this._conns.alive, cb);
    } else {
      try {
        _.nextTick(cb, void 0, this.selector(this._conns.alive));
      } catch (e) {
        cb(e);
      }
    }
  } else if (this._timeouts.length) {
    this._selectDeadConnection(cb);
  } else {
    _.nextTick(cb, void 0);
  }
};

/**
 * Handler for the "set status" event emitted but the connections. It will move
 * the connection to it's proper connection list (unless it was closed).
 *
 * @param  {String} status - the connection's new status
 * @param  {String} oldStatus - the connection's old status
 * @param  {ConnectionAbstract} connection - the connection object itself
 */
ConnectionPool.prototype.onStatusSet = _.handler(function (status, oldStatus, connection) {
  var index;

  var died = (status === 'dead');
  var wasAlreadyDead = (died && oldStatus === 'dead');
  var revived = (!died && oldStatus === 'dead');
  var noChange = (oldStatus === status);
  var from = this._conns[oldStatus];
  var to = this._conns[status];

  if (noChange && !died) {
    return true;
  }

  if (from !== to) {
    if (_.isArray(from)) {
      index = from.indexOf(connection);
      if (index !== -1) {
        from.splice(index, 1);
      }
    }

    if (_.isArray(to)) {
      index = to.indexOf(connection);
      if (index === -1) {
        to.push(connection);
      }
    }
  }

  if (died) {
    this._onConnectionDied(connection, wasAlreadyDead);
  }

  if (revived) {
    this._onConnectionRevived(connection);
  }
});

/**
 * Handler used to clear the times created when a connection dies
 * @param  {ConnectionAbstract} connection
 */
ConnectionPool.prototype._onConnectionRevived = function (connection) {
  var timeout;
  for (var i = 0; i < this._timeouts.length; i++) {
    if (this._timeouts[i].conn === connection) {
      timeout = this._timeouts[i];
      if (timeout.id) {
        clearTimeout(timeout.id);
      }
      this._timeouts.splice(i, 1);
      break;
    }
  }
};

/**
 * Handler used to update or create a timeout for the connection which has died
 * @param  {ConnectionAbstract} connection
 * @param  {Boolean} alreadyWasDead - If the connection was preivously dead this must be set to true
 */
ConnectionPool.prototype._onConnectionDied = function (connection, alreadyWasDead) {
  var timeout;
  if (alreadyWasDead) {
    for (var i = 0; i < this._timeouts.length; i++) {
      if (this._timeouts[i].conn === connection) {
        timeout = this._timeouts[i];
        break;
      }
    }
  } else {
    timeout = {
      conn: connection,
      attempt: 0,
      revive: function (cb) {
        timeout.attempt++;
        connection.ping(function (err) {
          connection.setStatus(err ? 'dead' : 'alive');
          if (cb && typeof cb === 'function') {
            cb(err);
          }
        });
      }
    };
    this._timeouts.push(timeout);
  }

  if (timeout.id) {
    clearTimeout(timeout.id);
  }

  var ms = this.calcDeadTimeout(timeout.attempt, this.deadTimeout);
  timeout.id = setTimeout(timeout.revive, ms);
  timeout.runAt = _.now() + ms;
};

ConnectionPool.prototype._selectDeadConnection = function (cb) {
  var orderedTimeouts = _.sortBy(this._timeouts, 'runAt');
  var log = this.log;

  process.nextTick(function next() {
    var timeout = orderedTimeouts.shift();
    if (!timeout) {
      cb(void 0);
      return;
    }

    if (!timeout.conn) {
      next();
      return;
    }

    if (timeout.conn.status === 'dead') {
      timeout.revive(function (err) {
        if (err) {
          log.warning('Unable to revive connection: ' + timeout.conn.id);
          process.nextTick(next);
        } else {
          cb(void 0, timeout.conn);
        }
      });
    } else {
      cb(void 0, timeout.conn);
    }
  });
};

/**
 * Returns a random list of nodes from the living connections up to the limit.
 * If there are no living connections it will fall back to the dead connections.
 * If there are no dead connections it will return nothing.
 *
 * This is used for testing (when we just want the one existing node)
 * and sniffing, where using the selector to get all of the living connections
 * is not reasonable.
 *
 * @param {string} [status] - optional status of the connection to fetch
 * @param {Number} [limit] - optional limit on the number of connections to return
 */
ConnectionPool.prototype.getConnections = function (status, limit) {
  var list;
  if (status) {
    list = this._conns[status];
  } else {
    list = this._conns[this._conns.alive.length ? 'alive' : 'dead'];
  }

  if (limit == null) {
    return list.slice(0);
  } else {
    return _.shuffle(list).slice(0, limit);
  }
};

/**
 * Add a single connection to the pool and change it's status to "alive".
 * The connection should inherit from ConnectionAbstract
 *
 * @param {ConnectionAbstract} connection - The connection to add
 */
ConnectionPool.prototype.addConnection = function (connection) {
  if (!connection.id) {
    connection.id = connection.host.toString();
  }

  if (!this.index[connection.id]) {
    this.log.info('Adding connection to', connection.id);
    this.index[connection.id] = connection;
    connection.on('status set', this.bound.onStatusSet);
    connection.setStatus('alive');
  }
};

/**
 * Remove a connection from the pool, and set it's status to "closed".
 *
 * @param  {ConnectionAbstract} connection - The connection to remove/close
 */
ConnectionPool.prototype.removeConnection = function (connection) {
  if (!connection.id) {
    connection.id = connection.host.toString();
  }

  if (this.index[connection.id]) {
    delete this.index[connection.id];
    connection.setStatus('closed');
    connection.removeListener('status set', this.bound.onStatusSet);
  }
};

/**
 * Override the internal node list. All connections that are not in the new host
 * list are closed and removed. Non-unique hosts are ignored.
 *
 * @param {Host[]} hosts - An array of Host instances.
 */
ConnectionPool.prototype.setHosts = function (hosts) {
  var connection;
  var i;
  var id;
  var host;
  var toRemove = _.clone(this.index);

  for (i = 0; i < hosts.length; i++) {
    host = hosts[i];
    id = host.toString();
    if (this.index[id]) {
      delete toRemove[id];
    } else {
      connection = new this.Connection(host, this._config);
      connection.id = id;
      this.addConnection(connection);
    }
  }

  var removeIds = _.keys(toRemove);
  for (i = 0; i < removeIds.length; i++) {
    this.removeConnection(this.index[removeIds[i]]);
  }
};

ConnectionPool.prototype.getAllHosts = function () {
  return _.values(this.index).map(function (connection) {
    return connection.host;
  });
};

/**
 * Close the conncetion pool, as well as all of it's connections
 */
ConnectionPool.prototype.close = function () {
  this.setHosts([]);
};
ConnectionPool.prototype.empty = ConnectionPool.prototype.close;
