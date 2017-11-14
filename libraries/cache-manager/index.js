'use strict';
const configurationManager = require('configurationManager'),
  logger = require('logger'),
  commonErrors = require('errorManagement').commonErrors,
  redisCacheManager = require('./redis');

class CacheManager {

  constructor() {
    this.init();
  }

  init(){
    this.useCompression = configurationManager.redis.compress;
    let redisOptions = Object.assign({}, configurationManager.redis);
    this.cacheManager = redisCacheManager(redisOptions);
    this.cacheManager.events.on('fetchError', (err) => {
      logger.error(err);
    });
    this.noCache = "None";
    this.cacheType = configurationManager.redis.cacheType;
  }

  async set(key, value, ttl, absolute_expiry = false, compression = this.useCompression) {
    if (this.cacheType != this.noCache) {
      const options = {ttl: ttl, absolute_expiry: absolute_expiry, compression: compression};
      await this.cacheManager.set(key, value, options);
    }
  }

  async get(key) {
    if (this.cacheType != this.noCache)
      return await this.cacheManager.get(key);
    return null;
  }

  async del(key) {
    if (this.cacheType != this.noCache)
      return await this.cacheManager.del(key);
  }

  async wrap(key, fetchMethod, ttl, absolute_expiry = false, compression = this.useCompression) {
    if (this.cacheType == this.noCache)
      return await fetchMethod();

    try {
      const options = {ttl: ttl, absolute_expiry: absolute_expiry, compression: compression};
      return await this.cacheManager.wrap(key, fetchMethod, options);
    }
    catch (error) {
      return await fetchMethod();
    }
  }
}

module.exports = new CacheManager();
