'use strict';

const redisPool = require('sol-redis-pool'),
  eventsEmitter = require('events').EventEmitter,
  zlib = require('zlib');

function RedisCacheManager(redisOptions = {}) {

  const slidingCacheKeys = {};
  const compressionCacheKeys = {};
  const events = new eventsEmitter();

  redisOptions.host = redisOptions.host || '127.0.0.1';
  redisOptions.port = redisOptions.port || 6379;
  redisOptions.db = redisOptions.db || 0;
  redisOptions.ttl = redisOptions.ttl || 600; // 10 minutes
  // Set a redis client option.
  redisOptions.enable_offline_queue = true;
  redisOptions.no_ready_check = true;
  redisOptions.absolute_expiry = false;
  redisOptions.retry_strategy = redisOptions.retry_strategy || function (options) {
      return undefined;
  };

  // default compression config
  redisOptions.detect_buffers = true;
  const defaultCompression = {
    type: 'gzip',
    params: {
      level: zlib.Z_BEST_SPEED
    }
  };

  redisOptions.compression = redisOptions.compression === true ? defaultCompression : redisOptions.compression || false;

  let poolSettings = {
    // Set the max milliseconds a resource can go unused before it should be destroyed.
    idleTimeoutMillis: 5000,
    max: 5
  };

  const pool = new redisPool(redisOptions, poolSettings);

  pool.on('error', function(err) {
    events.emit('redisError', err);
  });

  pool.on('connected', function(){
    events.emit('redisConnected');
  });

  async function connect() {
    return new Promise(function(resolve, reject) {
      pool.acquireDb(function(err, conn){
        if (err)
          reject(err);
        else
          resolve(conn);
      }, redisOptions.db);
    });
  }

  function handleResponse(conn, cb, options) {
    options = options || {};
    return function(err, result) {

      if (!err && options.parse && options.expire_ttl > 0)
        conn.expire(options.key, options.expire_ttl);

      pool.release(conn);

      if (err) {
        return cb && cb(err);
      }

      if (options.parse) {
        if (result && options.compression) {
          return zlib.gunzip(result, options.compression.params || {}, function (gzErr, gzResult) {
            if (gzErr) {
              return cb && cb(gzErr);
            }
            try {
              gzResult = JSON.parse(gzResult);
            } catch (e) {
              return cb && cb(e);
            }

            return cb && cb(null, gzResult);
          });
        }

        try {
          result = JSON.parse(result);
        } catch (e) {
          return cb && cb(e);
        }
      }
      return cb && cb(null, result);
    };
  }

  function getCompression(options) {
    let compression = (options.compression || options.compression === false) ? options.compression : redisOptions.compression;
    if (compression === true)
      return defaultCompression;
    return compression;
  }

  async function get(key) {
    let options = Object.assign({}, redisOptions, {key: key, expire_ttl: slidingCacheKeys[key]});
    return await getInternal(key, options);
  }

  async function getInternal(key, options = {}) {
    return new Promise(async function(resolve, reject) {
      options.parse = true;
      options.compression = compressionCacheKeys.hasOwnProperty(key) ? compressionCacheKeys[key] : getCompression(options);
      if (options.compression)
        key = new Buffer(key);
      let cb = (err, result) => err ? reject(err) : resolve(result);
      let conn = await connect();
      conn.get(key, handleResponse(conn, cb, options));
    });
  }

  async function set(key, value, options = {}) {
    return new Promise(async function(resolve, reject) {

      let cb = (err, result) => err ? reject(err) : resolve(result);

      if (!isCacheableValue(value)) {
        return cb(new Error('value cannot be ' + value));
      }

      let ttl = (options.ttl || options.ttl === 0) ? options.ttl : redisOptions.ttl;
      let absolute_expiry = (options.absolute_expiry || options.absolute_expiry === false) ? options.absolute_expiry : redisOptions.absolute_expiry;
      let compression = getCompression(options);

      if (!absolute_expiry)
        slidingCacheKeys[key] = ttl;
      else
        delete slidingCacheKeys[key];

      // Not default compression
      if (compression != redisOptions.compression)
        compressionCacheKeys[key] = compression;
      else
        delete compressionCacheKeys[key];

      let conn = await connect();
      let val = JSON.stringify(value) || '"undefined"';

        // Refactored to remove duplicate code.
      function persist(pErr, pVal) {
        if (pErr) {
          return cb(pErr);
        }

        if (ttl) {
          conn.setex(key, ttl, pVal, handleResponse(conn, cb, options));
        } else {
          conn.set(key, pVal, handleResponse(conn, cb, options));
        }
      }

      if (compression) {
        zlib.gzip(val, compression.params || {}, persist);
      } else {
        persist(null, val);
      }
    });
  }

  async function wrap(key, fetchMethod, options) {
    let value = await get(key);
    if (!value) {
      try {
        value = await fetchMethod();
        await set(key, value, options);
      }
      catch (err) {
        events.emit('fetchError', err);
      }
    }
    return value;
  }

  async function del(key) {
    return new Promise(async function(resolve, reject) {
      let cb = (err, result) => err ? reject(err) : resolve(result);
      delete slidingCacheKeys[key];
      delete compressionCacheKeys[key];
      let conn = await connect();
      conn.del(key, handleResponse(conn, cb));
    });
  }

  async function reset() {
    return new Promise(async function(resolve, reject) {
      let cb = (err, result) => err ? reject(err) : resolve(result);
      let conn = await connect();
      conn.flushdb(handleResponse(conn, cb));
    });
  }

  async function ttl(key) {
    return new Promise(async function(resolve, reject) {
      let cb = (err, result) => err ? reject(err) : resolve(result);
      let conn = await connect();
      conn.ttl(key, handleResponse(conn, cb));
    });
  }

  async function keys(pattern) {
    return new Promise(async function(resolve, reject) {

      pattern = pattern || "*";

      let cb = (err, result) => err ? reject(err) : resolve(result);

      let conn = await connect();
      conn.keys(pattern, handleResponse(conn, cb));
    });
  }

  function isCacheableValue(value) {
    return value !== undefined && value !== null;
  }

  async function getClient() {
    let conn = await connect();
    return {
      client: conn,
      done: function(done) {
        let args = Array.prototype.slice.call(arguments, 1);
        pool.release(conn);

        if (done && typeof done === 'function') {
          done.apply(null, args);
        }
      }
    };
  }

  return {
    wrap,
    get,
    set,
    del,
    ttl,
    keys,
    reset,
    getClient,
    pool,
    isCacheableValue,
    events
  };
}

module.exports = RedisCacheManager;
