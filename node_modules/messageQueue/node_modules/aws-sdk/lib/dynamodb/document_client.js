var AWS = require('../core');
var Translator = require('./translator');
var DynamoDBSet = require('./set');

/**
 * The document client simplifies working with items in Amazon DynamoDB
 * by abstracting away the notion of attribute values. This abstraction
 * annotates native JavaScript types supplied as input parameters, as well
 * as converts annotated response data to native JavaScript types.
 *
 * ## Marshalling Input and Unmarshalling Response Data
 *
 * The document client affords developers the use of native JavaScript types
 * instead of `AttributeValue`s to simplify the JavaScript development
 * experience with Amazon DynamoDB. JavaScript objects passed in as parameters
 * are marshalled into `AttributeValue` shapes required by Amazon DynamoDB.
 * Responses from DynamoDB are unmarshalled into plain JavaScript objects
 * by the `DocumentClient`. The `DocumentClient`, does not accept
 * `AttributeValue`s in favor of native JavaScript types.
 *
 * |                             JavaScript Type                            | DynamoDB AttributeValue |
 * |:----------------------------------------------------------------------:|-------------------------|
 * | String                                                                 | S                       |
 * | Number                                                                 | N                       |
 * | Boolean                                                                | BOOL                    |
 * | null                                                                   | NULL                    |
 * | Array                                                                  | L                       |
 * | Object                                                                 | M                       |
 * | Buffer, File, Blob, ArrayBuffer, DataView, and JavaScript typed arrays | B                       |
 *
 * ## Support for Sets
 *
 * The `DocumentClient` offers a convenient way to create sets from
 * JavaScript Arrays. The type of set is inferred from the first element
 * in the array. DynamoDB supports string, number, and binary sets. To
 * learn more about supported types see the
 * [Amazon DynamoDB Data Model Documentation](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html)
 * For more information see {AWS.DynamoDB.DocumentClient.createSet}
 *
 */
AWS.DynamoDB.DocumentClient = AWS.util.inherit({

  /**
   * @api private
   */
  operations: {
    batchGetItem: 'batchGet',
    batchWriteItem: 'batchWrite',
    putItem: 'put',
    getItem: 'get',
    deleteItem: 'delete',
    updateItem: 'update',
    scan: 'scan',
    query: 'query'
  },

  /**
   * Creates a DynamoDB document client with a set of configuration options.
   *
   * @option options params [map] An optional map of parameters to bind to every
   *   request sent by this service object.
   * @option options service [AWS.DynamoDB] An optional pre-configured instance
   *  of the AWS.DynamoDB service object to use for requests. The object may
   *  bound parameters used by the document client.
   * @see AWS.DynamoDB.constructor
   *
   */
  constructor: function DocumentClient(options) {
    var self = this;
    self.options = options || {};
    self.configure(self.options);
  },

  /**
   * @api private
   */
  configure: function configure(options) {
    var self = this;
    self.service = options.service;
    self.bindServiceObject(options);
    self.attrValue =
      self.service.api.operations.putItem.input.members.Item.value.shape;
  },

  /**
   * @api private
   */
  bindServiceObject: function bindServiceObject(options) {
    var self = this;
    options = options || {};

    if (!self.service) {
      self.service = new AWS.DynamoDB(options);
    } else {
      var config = AWS.util.copy(self.service.config);
      self.service = new self.service.constructor.__super__(config);
      self.service.config.params =
        AWS.util.merge(self.service.config.params || {}, options.params);
    }
  },

  /**
   * Returns the attributes of one or more items from one or more tables
   * by delegating to `AWS.DynamoDB.batchGetItem()`.
   *
   * Supply the same parameters as {AWS.DynamoDB.batchGetItem} with
   * `AttributeValue`s substituted by native JavaScript types.
   *
   * @see AWS.DynamoDB.batchGetItem
   * @example Get items from multiple tables
   *  var params = {
   *    RequestItems: {
   *      'Table-1': {
   *        Keys: [
   *          {
   *             HashKey: 'haskey',
   *             NumberRangeKey: 1
   *          }
   *        ]
   *      },
   *      'Table-2': {
   *        Keys: [
   *          { foo: 'bar' },
   *        ]
   *      }
   *    }
   *  };
   *
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  docClient.batchGet(params, function(err, data) {
   *    if (err) console.log(err);
   *    else console.log(data);
   *  });
   *
   */
  batchGet: function(params, callback) {
    var self = this;
    var request = self.service.batchGetItem(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  /**
   * Puts or deletes multiple items in one or more tables by delegating
   * to `AWS.DynamoDB.batchWriteItem()`.
   *
   * Supply the same parameters as {AWS.DynamoDB.batchWriteItem} with
   * `AttributeValue`s substituted by native JavaScript types.
   *
   * @see AWS.DynamoDB.batchWriteItem
   * @example Write to and delete from a table
   *  var params = {
   *    RequestItems: {
   *      'Table-1': [
   *        {
   *          DeleteRequest: {
   *            Key: { HashKey: 'someKey' }
   *          }
   *        },
   *        {
   *          PutRequest: {
   *            Item: {
   *              HashKey: 'anotherKey',
   *              NumAttribute: 1,
   *              BoolAttribute: true,
   *              ListAttribute: [1, 'two', false],
   *              MapAttribute: { foo: 'bar' }
   *            }
   *          }
   *        }
   *      ]
   *    }
   *  };
   *
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  docClient.batchWrite(params, function(err, data) {
   *    if (err) console.log(err);
   *    else console.log(data);
   *  });
   *
   */
  batchWrite: function(params, callback) {
    var self = this;
    var request = self.service.batchWriteItem(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  /**
   * Deletes a single item in a table by primary key by delegating to
   * `AWS.DynamoDB.deleteItem()`
   *
   * Supply the same parameters as {AWS.DynamoDB.deleteItem} with
   * `AttributeValue`s substituted by native JavaScript types.
   *
   * @see AWS.DynamoDB.deleteItem
   * @example Delete an item from a table
   *  var params = {
   *    TableName : 'Table',
   *    Key: {
   *      HashKey: 'hashkey',
   *      NumberRangeKey: 1
   *    }
   *  };
   *
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  docClient.delete(params, function(err, data) {
   *    if (err) console.log(err);
   *    else console.log(data);
   *  });
   *
   */
  delete: function(params, callback) {
    var self = this;
    var request = self.service.deleteItem(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  /**
   * Returns a set of attributes for the item with the given primary key
   * by delegating to `AWS.DynamoDB.getItem()`.
   *
   * Supply the same parameters as {AWS.DynamoDB.getItem} with
   * `AttributeValue`s substituted by native JavaScript types.
   *
   * @see AWS.DynamoDB.getItem
   * @example Get an item from a table
   *  var params = {
   *    TableName : 'Table',
   *    Key: {
   *      HashKey: 'hashkey'
   *    }
   *  };
   *
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  docClient.get(params, function(err, data) {
   *    if (err) console.log(err);
   *    else console.log(data);
   *  });
   *
   */
  get: function(params, callback) {
    var self = this;
    var request = self.service.getItem(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  /**
   * Creates a new item, or replaces an old item with a new item by
   * delegating to `AWS.DynamoDB.putItem()`.
   *
   * Supply the same parameters as {AWS.DynamoDB.putItem} with
   * `AttributeValue`s substituted by native JavaScript types.
   *
   * @see AWS.DynamoDB.putItem
   * @example Create a new item in a table
   *  var params = {
   *    TableName : 'Table',
   *    Item: {
   *       HashKey: 'haskey',
   *       NumAttribute: 1,
   *       BoolAttribute: true,
   *       ListAttribute: [1, 'two', false],
   *       MapAttribute: { foo: 'bar'},
   *       NullAttribute: null
   *    }
   *  };
   *
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  docClient.put(params, function(err, data) {
   *    if (err) console.log(err);
   *    else console.log(data);
   *  });
   *
   */
  put: function put(params, callback) {
    var self = this;
    var request = self.service.putItem(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  /**
   * Edits an existing item's attributes, or adds a new item to the table if
   * it does not already exist by delegating to `AWS.DynamoDB.updateItem()`.
   *
   * Supply the same parameters as {AWS.DynamoDB.updateItem} with
   * `AttributeValue`s substituted by native JavaScript types.
   *
   * @see AWS.DynamoDB.updateItem
   * @example Update an item with expressions
   *  var params = {
   *    TableName: 'Table',
   *    Key: { HashKey : 'hashkey' },
   *    UpdateExpression: 'set #a = :x + :y',
   *    ConditionExpression: '#a < :MAX',
   *    ExpressionAttributeNames: {'#a' : 'Sum'},
   *    ExpressionAttributeValues: {
   *      ':x' : 20,
   *      ':y' : 45,
   *      ':MAX' : 100,
   *    }
   *  };
   *
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  docClient.update(params, function(err, data) {
   *     if (err) console.log(err);
   *     else console.log(data);
   *  });
   *
   */
  update: function(params, callback) {
    var self = this;
    var request = self.service.updateItem(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  /**
   * Returns one or more items and item attributes by accessing every item
   * in a table or a secondary index.
   *
   * Supply the same parameters as {AWS.DynamoDB.scan} with
   * `AttributeValue`s substituted by native JavaScript types.
   *
   * @see AWS.DynamoDB.scan
   * @example Scan the table with a filter expression
   *  var params = {
   *    TableName : 'Table',
   *    FilterExpression : 'Year = :this_year',
   *    ExpressionAttributeValues : {':this_year' : 2015}
   *  };
   *
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  docClient.scan(params, function(err, data) {
   *     if (err) console.log(err);
   *     else console.log(data);
   *  });
   *
   */
  scan: function(params, callback) {
    var self = this;
    var request = self.service.scan(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

   /**
    * Directly access items from a table by primary key or a secondary index.
    *
    * Supply the same parameters as {AWS.DynamoDB.query} with
    * `AttributeValue`s substituted by native JavaScript types.
    *
    * @see AWS.DynamoDB.query
    * @example Query an index
    *  var params = {
    *    TableName: 'Table',
    *    IndexName: 'Index',
    *    KeyConditionExpression: 'HashKey = :hkey and RangeKey > :rkey',
    *    ExpressionAttributeValues: {
    *      ':hkey': 'key',
    *      ':rkey': 2015
    *    }
    *  };
    *
    *  var docClient = new AWS.DynamoDB.DocumentClient();
    *
    *  docClient.query(params, function(err, data) {
    *     if (err) console.log(err);
    *     else console.log(data);
    *  });
    *
    */
  query: function(params, callback) {
    var self = this;
    var request = self.service.query(params);
    self.setupRequest(request);
    self.setupResponse(request);
    if (typeof callback === 'function') {
      request.send(callback);
    }
    return request;
  },

  /**
   * Creates a set of elements inferring the type of set from
   * the type of the first element. Amazon DynamoDB currently supports
   * the number sets, string sets, and binary sets. For more information
   * about DynamoDB data types see the documentation on the
   * [Amazon DynamoDB Data Model](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModel.DataTypes).
   *
   * @param list [Array] Collection to represent your DynamoDB Set
   * @param options [map]
   *  * **validate** [Boolean] set to true if you want to validate the type
   *    of each element in the set. Defaults to `false`.
   * @example Creating a number set
   *  var docClient = new AWS.DynamoDB.DocumentClient();
   *
   *  var params = {
   *    Item: {
   *      hashkey: 'hashkey'
   *      numbers: docClient.createSet([1, 2, 3]);
   *    }
   *  };
   *
   *  docClient.put(params, function(err, data) {
   *    if (err) console.log(err);
   *    else console.log(data);
   *  });
   *
   */
  createSet: function(list, options) {
    options = options || {};
    return new DynamoDBSet(list, options);
  },

  /**
   * @api private
   */
  getTranslator: function() {
    return new Translator({attrValue: this.attrValue});
  },

  /**
   * @api private
   */
  setupRequest: function setupRequest(request) {
    var self = this;
    var translator = self.getTranslator();
    var operation = request.operation;
    var inputShape = request.service.api.operations[operation].input;
    request._events.validate.unshift(function(req) {
      req.rawParams = AWS.util.copy(req.params);
      req.params = translator.translateInput(req.rawParams, inputShape);
    });
  },

  /**
   * @api private
   */
  setupResponse: function setupResponse(request) {
    var self = this;
    var translator = self.getTranslator();
    var outputShape = self.service.api.operations[request.operation].output;
    request.on('extractData', function(response) {
      response.data = translator.translateOutput(response.data, outputShape);
    });

    var response = request.response;
    response.nextPage = function(cb) {
      var resp = this;
      var req = resp.request;
      var config;
      var service = req.service;
      var operation = req.operation;
      try {
        config = service.paginationConfig(operation, true);
      } catch (e) { resp.error = e; }

      if (!resp.hasNextPage()) {
        if (cb) cb(resp.error, null);
        else if (resp.error) throw resp.error;
        return null;
      }

      var params = AWS.util.copy(req.rawParams);
      if (!resp.nextPageTokens) {
        return cb ? cb(null, null) : null;
      } else {
        var inputTokens = config.inputToken;
        if (typeof inputTokens === 'string') inputTokens = [inputTokens];
        for (var i = 0; i < inputTokens.length; i++) {
          params[inputTokens[i]] = resp.nextPageTokens[i];
        }
        return self[operation](params, cb);
      }
    };
  }

});

module.exports = AWS.DynamoDB.DocumentClient;
