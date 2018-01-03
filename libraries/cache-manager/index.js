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
      try {
        const options = {ttl: ttl, absolute_expiry: absolute_expiry, compression: compression};
        await this.cacheManager.set(key, value, options);
      }
      catch (error) {
        logger.error(`Error trying to set cache for ${key} with the following error: ${error}`);
      }
    }
  }

  async get(key) {
    if (this.cacheType != this.noCache) {
      try {
        return await this.cacheManager.get(key);
      }
      catch (error) {
        logger.error(`Error trying to get ${key} from the cache with the following error: ${error}`);
      }
    }
    return null;
  }

  async del(key) {
    if (this.cacheType != this.noCache){
      try {
        return await this.cacheManager.del(key);
      }
      catch (error) {
        logger.error(`Error trying to remove ${key} from the cache with the following error: ${error}`);
      }
    }
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

  async getKeys(pattern) {
    if (this.cacheType == this.noCache)
      return [];
    
    return await this.cacheManager.keys(pattern);
  }

}

module.exports = new CacheManager();
