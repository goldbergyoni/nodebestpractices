'use strict';

const config = require('configurationManager');
const elasticsearch = require('elasticsearch');
const logger = require('logger');

let esConfig = config.elasticsearch;
//esConfig.hosts = ["localhost:9200"];

const client = new elasticsearch.Client({
  host: esConfig.hosts//,
  //	log: 'trace'
});

module.exports.create = function (indexName) {
  return new Promise(function (fulfill, reject) {
    module.exports.createIndex(indexName).then((resp, status) => {
      fulfill();
    }).catch((err, status) => {
      reject(err, status);
    });
  });
};

module.exports.createIndex = function (indexName) {
  return new Promise(function (fulfill, reject) {
    client.indices.create({
      index: indexName
    }, function (err, resp, status) {
      if (err) {
        //logger.error("Failed to create index.");
        //logger.error(err);
        reject(err, status);
      }
      else {
        //logger.info("Index created. index name: " + indexName + ",  status: " + status);
        fulfill(resp, status);
      }
    });
  });
};

module.exports.createTemplate = async (template) => {
  return new Promise(function (fulfill, reject) {
    client.indices.putTemplate(template, function (err, resp, status) {
      if (err) {
        //logger.error("Failed to create template.");
        //logger.error(err);
        reject(err, status);
      }
      else {
        //logger.info("Template created. template name: " + esTemplates.template_1.name + ",  status: " + status);
        fulfill(resp, status);
      }
    });
  });
};

module.exports.deleteTemplate = async (template) => {
  return new Promise(function (fulfill, reject) {
    client.indices.deleteTemplate(template, function (err, resp, status) {
      if (err) {
        //logger.error("Failed to create template.");
        //logger.error(err);
        reject(err, status);
      }
      else {
        //logger.info("Template created. template name: " + esTemplates.template_1.name + ",  status: " + status);
        fulfill(resp, status);
      }
    });
  });
};

module.exports.overrideTemplate = async (template) => {
  await module.exports.deleteTemplate(template);
  await module.exports.createTemplate(template);
};

module.exports.deleteIndexIfExist = async (indexName) => {
  let isExist = await module.exports.isIndexExist(indexName);
  if(isExist)
    await client.indices.delete({ index: indexName });
};

module.exports.deleteIndex = async (indexName) => {
  return await client.indices.delete({ index: indexName });
};

module.exports.insert = async (indexName, type, body) => {
  return await client.index({ index: indexName, type: type, body: body });
};

module.exports.bulkInsert = async (indexName, type, items) => {
  try {
    if (items && items.length) {
      let body = [];
      for (let i = 0; i < items.length; i++) {
        body.push({ index: { _index: indexName, _type: type } });
        body.push(items[i]);
      }

      return await client.bulk({ index: indexName, type: type, body: body });
    }
  } catch (error) {
    logger.error(error);
  }
};

module.exports.find = function (indexName, type, query, sort, size) {
  return module.exports.query(indexName, type, query, sort, size);
};

module.exports.query = function (indexName, type, query, sort, size, scroll) {
  let attr = {index: indexName, type:type, body: query};
  if(sort) attr.sort = sort;
  if(size) attr.size = size;
  if(scroll) attr.scroll = scroll;  // e.g "1m" keep search for 1 minute

  return new Promise(function (fulfill, reject) {
    client.search(attr).then(function (resp, status) {
      resp.total = resp.hits.total;
      resp.max_score = resp.hits.max_score;
      resp.hits = resp.hits.hits;
      resp.scrollId = resp._scroll_id;
      fulfill(resp, status);
    }, function (error, status) {
      reject(error, status);
    });
  });
};

module.exports.queryMore = async (scroll, scrollId) => {
  let res = await client.scroll({ scroll: scroll, scroll_id: scrollId });
  res.scrollId = res._scroll_id;
  res.hits = res.hits.hits;
  return res;
};



module.exports.refresh = async (indexName) => {
  return await client.indices.refresh({ index: indexName });
};

module.exports.setEntityMapping = async (indexName, type, properties) => {
  return await client.indices.putMapping({
    index: indexName,
    type: type,
    updateAllTypes: false,
    body: {
      properties: properties
    }
  });
};

module.exports.getEntityMapping = async (indexName, type) => {
  return await client.indices.getMapping({ index: indexName, type: type });
};

module.exports.isIndexExist = async (indexName) => {
  return await client.indices.exists({ index: indexName });
};


/*
  return new Promise(function (fulfill, reject) {
		client.search({
			index: indexName,
			body: query,
			sort: sort,
			size: size
		}, function (err, resp, status) {
			if (err) {
				//logger.error("Failed to insert log.");
				//logger.error(err);
				reject(err, status);
			}
			else {
				//logger.info("Log inserted.");
				fulfill(resp, status);
			}
		});
  });
  */

/*
module.exports.find = async (indexName, type, query, sort, size) => {

	return await client.search({
			index: indexName,
			body: query,
			sort: sort,
			size: size
  });

};
*/
