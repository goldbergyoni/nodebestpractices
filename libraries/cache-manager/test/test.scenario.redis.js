const chai = require('chai'),
  chaiAsPromised = require("chai-as-promised"),
  expect = chai.expect,
  superTestRequest = require('supertest'),
  sinon = require('sinon'),
  config = require('configurationManager');

chai.use(chaiAsPromised);
config.redis.host = process.env.REDIS_HOST || "192.168.99.100";

const cacheManager = require('../index');

describe('Cache manager tests #hot #sanity #redis #scenario', () => {

  describe('Redis tests without compression', () => {

        let oldCompressionValue, oldCacheManager;
        before(async () => {
          oldCompressionValue = config.redis.compress;
          config.redis.compression = false;
          oldCacheManager = cacheManager.cacheManager;
          let redisOptions = Object.assign({}, config.redis);
          cacheManager.cacheManager = require('../redis')(redisOptions);
        });

        it('Scenario: Test cache store and delete from cache without compression', async () => {
          const cache_key = "test_cache_store_wo_compression";
          expect(config.redis.compression).to.be.equal(false);
          await cacheManager.del(cache_key);
          let object = await cacheManager.get(cache_key);
          expect(object).to.be.null;
          let objectToStore = {test: 1};
          await cacheManager.set(cache_key, objectToStore, 1, true);
          objectToStore.test++;
          expect(objectToStore).to.have.own.property("test").that.equal(2);
          object = await cacheManager.get(cache_key);
          expect(object).not.to.be.null;
          expect(object).to.have.own.property("test").that.equal(1);
          await cacheManager.del(cache_key);
          object = await cacheManager.get(cache_key);
          expect(object).to.be.null;
        });

        it('Scenario: Test cache store and delete from cache without compression - setting false does not affect test', async () => {
          const cache_key = "test_cache_store_wo_compression_and_flag";
          expect(config.redis.compression).to.be.equal(false);
          await cacheManager.del(cache_key);
          let object = await cacheManager.get(cache_key);
          expect(object).to.be.null;
          let objectToStore = {test: 1};
          await cacheManager.set(cache_key, objectToStore, 1, true, false);
          objectToStore.test++;
          expect(objectToStore).to.have.own.property("test").that.equal(2);
          object = await cacheManager.get(cache_key);
          expect(object).not.to.be.null;
          expect(object).to.have.own.property("test").that.equal(1);
          await cacheManager.del(cache_key);
          object = await cacheManager.get(cache_key);
          expect(object).to.be.null;
        });

        it('Scenario: Test cache store and delete from cache without compression - testing overide flag set to true', async () => {
          const cache_key = "test_cache_store_wo_compression_and_flag";
          expect(config.redis.compression).to.be.equal(false);
          await cacheManager.del(cache_key);
          let object = await cacheManager.get(cache_key);
          expect(object).to.be.null;
          let objectToStore = {test: 1};
          await cacheManager.set(cache_key, objectToStore, 1, true, true);
          objectToStore.test++;
          expect(objectToStore).to.have.own.property("test").that.equal(2);
          object = await cacheManager.get(cache_key);
          expect(object).not.to.be.null;
          expect(object).to.have.own.property("test").that.equal(1);
          await cacheManager.del(cache_key);
          object = await cacheManager.get(cache_key);
          expect(object).to.be.null;
        });

        after(async () => {
          config.redis.compress = oldCompressionValue;
          cacheManager.cacheManager = oldCacheManager;
        });
      });

    describe('Cache manager - no cache tests', () => {

      before(async () => {
        cacheManager.cacheType = cacheManager.noCache;
      });

      it('Scenario: Test get to return null', async () => {
        const cache_key = "test_cache_manager_no_cache";
        let object = await cacheManager.get(cache_key);
        expect(object).to.be.null;
        let objectToStore = {test: 1};
        await cacheManager.set(cache_key, objectToStore, 1, true);
        objectToStore.test++;
        expect(objectToStore).to.have.own.property("test").that.equal(2);
        object = await cacheManager.get(cache_key);
        expect(object).to.be.null;
        await cacheManager.del(cache_key);
        object = await cacheManager.get(cache_key);
        expect(object).to.be.null;
      });

      it('Scenario: Test wrap to return object', async () => {
        const cache_key = "test_wrapped_cache";
        await cacheManager.del(cache_key);
        const objectToStore = {test: 1};
        let storedObject = await cacheManager.get(cache_key);
        expect(storedObject).to.be.null;
        storedObject = await getOrCreate(objectToStore);
        expect(storedObject.test).to.be.equal(1);
        storedObject.test++;
        expect(storedObject).to.have.own.property("test").that.equal(2);
        await cacheManager.del(cache_key);
        storedObject = await cacheManager.get(cache_key);
        expect(storedObject).to.be.null;

        async function getOrCreate(returnObject) {
          return await cacheManager.wrap(cache_key, () => {
            return returnObject;
          }, 1, true);
        }
      });

      after(async () => {
        cacheManager.cacheType = config.cacheType;
      });
    });


  describe('Redis tests with compression', () => {

    before(function () {

    });

    afterEach(async function () {
      await cacheManager.cacheManager.reset();
    });

    it('Scenario: Test the cache is empty', async () => {
      const cache_key = "deleted_cache_key";
      let object = await cacheManager.get(cache_key);
      expect(object).to.be.null;
    });

    it('Scenario: Test flushdb', async () => {
      const cache_key = "flush_cache_key";
      let obj = {test: 1};
      await cacheManager.set(cache_key, obj);
      obj.test++;
      let object = await cacheManager.get(cache_key);
      expect(object).to.have.own.property("test").that.equal(1);
      await cacheManager.cacheManager.reset();
      object = await cacheManager.get(cache_key);
      expect(object).to.be.null;
    });

    it('Scenario: Test get all cache keys', async () => {
      const cache_key1 = "cache_key1";
      const cache_key2 = "cache_key2";
      let obj = {test: 1};
      await cacheManager.set(cache_key1, obj);
      obj.test++;
      await cacheManager.set(cache_key2, obj);
      let keys = await cacheManager.cacheManager.keys();
      expect(keys).to.have.own.property("length").that.equal(2);
      expect(keys).to.contain(cache_key2);
      expect(keys).to.contain(cache_key1);
    });

    it('Scenario: Test get specific cache key', async () => {
      const cache_key1 = "cache_key1";
      const cache_key2 = "cache_key2";
      let obj = {test: 1};
      await cacheManager.set(cache_key1, obj);
      obj.test++;
      await cacheManager.set(cache_key2, obj);
      let keys = await cacheManager.cacheManager.keys("*key1");
      expect(keys).to.have.own.property("length").that.equal(1);
      expect(keys[0]).to.be.equal(cache_key1);
    });

    it('Scenario: Test no keys available after flushdb', async () => {
      let keys = await cacheManager.cacheManager.keys();
      expect(keys).to.have.own.property("length").that.equal(0);
    });

    it('Scenario: Test cache store and delete from cache', async () => {
      const cache_key = "test_cache_store";
      await cacheManager.del(cache_key);
      let object = await cacheManager.get(cache_key);
      expect(object).to.be.null;
      let objectToStore = {test: 1};
      await cacheManager.set(cache_key, objectToStore, 1, true);
      objectToStore.test++;
      expect(objectToStore).to.have.own.property("test").that.equal(2);
      object = await cacheManager.get(cache_key);
      expect(object).not.to.be.null;
      expect(object).to.have.own.property("test").that.equal(1);
      await cacheManager.del(cache_key);
      object = await cacheManager.get(cache_key);
      expect(object).to.be.null;
    });

    it('Scenario: Test cache store and delete from cache without compression sent in the options', async () => {
      const cache_key = "test_cache_store";
      await cacheManager.del(cache_key);
      let object = await cacheManager.get(cache_key);
      expect(object).to.be.null;
      let objectToStore = {test: 1};
      await cacheManager.set(cache_key, objectToStore, 1, true, false);
      objectToStore.test++;
      expect(objectToStore).to.have.own.property("test").that.equal(2);
      object = await cacheManager.get(cache_key);
      expect(object).not.to.be.null;
      expect(object).to.have.own.property("test").that.equal(1);
      await cacheManager.del(cache_key);
      object = await cacheManager.get(cache_key);
      expect(object).to.be.null;

      // see that the same key can be used twice once with compression and once without
      await cacheManager.del(cache_key);
      object = await cacheManager.get(cache_key);
      expect(object).to.be.null;
      objectToStore = {test: 1};
      await cacheManager.set(cache_key, objectToStore, 1, true);
      objectToStore.test++;
      expect(objectToStore).to.have.own.property("test").that.equal(2);
      object = await cacheManager.get(cache_key);
      expect(object).not.to.be.null;
      expect(object).to.have.own.property("test").that.equal(1);
      await cacheManager.del(cache_key);
      object = await cacheManager.get(cache_key);
      expect(object).to.be.null;
    });

    it('Scenario: Test cache wrap method', async () => {
      const cache_key = "test_wrapped_cache";
      await cacheManager.del(cache_key);
      const objectToStore = {test: 1};
      let storedObject = await cacheManager.get(cache_key);
      expect(storedObject).to.be.null;
      storedObject = await getOrCreate(objectToStore);
      expect(storedObject.test).to.be.equal(1);
      storedObject.test++;
      expect(storedObject).to.have.own.property("test").that.equal(2);
      storedObject = await getOrCreate(null);
      expect(storedObject).not.to.be.null;
      expect(storedObject).to.have.own.property("test").that.equal(1);
      await cacheManager.del(cache_key);
      storedObject = await cacheManager.get(cache_key);
      expect(storedObject).to.be.null;

      async function getOrCreate(returnObject) {
        return await cacheManager.wrap(cache_key, () => {
          return returnObject;
        }, 1, true);
      }
    });

    async function testCache(cache_key) {
      const ttl = 1;
      let objectToStore = {test: 1};
      let storedObject = await cacheManager.get(cache_key);
      expect(storedObject).to.be.null;
      await cacheManager.set(cache_key, objectToStore, ttl);
      objectToStore.test++;
      await checkCacheExists(cache_key, (ttl*1000));
      await checkThatCacheDoesNotExist(cache_key, (ttl*1000 + 10));

      function checkCacheExists(cacheKey, timeout){
        let index = 1;
        return new Promise(function(fullfil, reject) {
          let interval = setInterval(async () => {
            let obj = await cacheManager.get(cache_key);
            //console.log(index + " " + obj);
            if (!obj || obj.test != 1) {
              clearInterval(interval);
              reject();
            }
            else if (!index) {
              clearInterval(interval);
              fullfil();
            }
            index--;
          }, 550);
        });
      }

      function checkThatCacheDoesNotExist(cacheKey, timeout){
        return new Promise(function(fullfil, reject) {
          setTimeout(async () => {
            let obj = await cacheManager.get(cache_key);
            if (!obj)
              fullfil();
            else
              reject();
          }, timeout);
        });
      }
    }

    it('Scenario: Add object to cache with absolute expiration of 10 seconds and see that it is returned', async () => {
      const cache_key = "test_ttl_cache";
      let objectToStore = {test: 1};
      let storedObject = await cacheManager.get(cache_key);
      expect(storedObject).to.be.null;
      await cacheManager.set(cache_key, objectToStore, 10, true);
      let ttl = await cacheManager.cacheManager.ttl(cache_key);
      expect(ttl).to.be.equal(10);
      await cacheManager.del(cache_key);
      ttl = await cacheManager.cacheManager.ttl(cache_key);
      expect(ttl).to.be.lessThan(0);
    });

    it('Scenario: Cache without ttl', async () => {
      const cache_key = "test_nottl_cache";
      let objectToStore = {test: 1};
      let storedObject = await cacheManager.get(cache_key);
      expect(storedObject).to.be.null;
      await cacheManager.set(cache_key, objectToStore, 0);
      let ttl = await cacheManager.cacheManager.ttl(cache_key);
      expect(ttl).to.be.equal(-1);
      await cacheManager.del(cache_key);
      ttl = await cacheManager.cacheManager.ttl(cache_key);
      expect(ttl).to.be.lessThan(0);
    });

    it('Scenario: Test store exception', async () => {
      const cache_key = "test_exception_cache";
      expect(cacheManager.set(cache_key, null)).to.eventually.be.rejectedWith('value cannot be ' + null);
    });

    it('Scenario: test getClient', async () => {
      const cache_key = "test_getclient_cache";
      await cacheManager.set(cache_key, {}, 10, true);
      const client = await cacheManager.cacheManager.getClient();
      expect(client).to.have.property("done");
      expect(client).to.have.property("client");
      client.client.keys("*", function(err, result){
        expect(err).to.be.null;
        expect(result).to.have.property("length").that.is.equal(1);
        expect(result).to.contain(cache_key);
        client.done(function(){
          // see that the callback is called
          expect(true).to.be.equal(true);
        });
      });
    });

    it('Scenario: Add object to cache with sliding expiration and see it exists for 1 second from last touch', async () => {
      await testCache("test_sliding_cache", false);
    }).timeout(2500);

    it('Scenario: Add object to cache with absolute expiration and see it exists for 1 second', async () => {

      const cache_key = "test_absolute_cache";
      const ttl = 1;
      let objectToStore = {test: 1};
      let storedObject = await cacheManager.get(cache_key);
      expect(storedObject).to.be.null;
      await cacheManager.set(cache_key, objectToStore, ttl, true);
      objectToStore.test++;
      await getPromise(cache_key, ttl*1000);

      function getPromise(cacheKey, timeout){
        let index = 4;
        return new Promise(function(fullfil, reject) {
          let interval = setInterval(async () => {
            let obj = await cacheManager.get(cache_key);
            //console.log(index + " " + obj);
            if (index) {
              if (!obj || obj.test != 1)
                reject();
              index--;
            }
            else {
              clearInterval(interval);
              if (!obj)
                fullfil();
              else
                reject();
            }
          }, timeout / (index +1));
        });
      }
    });

  });

});
