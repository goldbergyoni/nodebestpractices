var AWS = require('../core');
var byteLength = AWS.util.string.byteLength;
var Buffer = AWS.util.Buffer;

/**
 * The managed uploader allows for easy and efficient uploading of buffers,
 * blobs, or streams, using a configurable amount of concurrency to perform
 * multipart uploads where possible. This abstraction also enables uploading
 * streams of unknown size due to the use of multipart uploads.
 *
 * To construct a managed upload object, see the {constructor} function.
 *
 * ## Tracking upload progress
 *
 * The managed upload object can also track progress by attaching an
 * 'httpUploadProgress' listener to the upload manager. This event is similar
 * to {AWS.Request~httpUploadProgress} but groups all concurrent upload progress
 * into a single event. See {AWS.S3.ManagedUpload~httpUploadProgress} for more
 * information.
 *
 * ## Handling Multipart Cleanup
 *
 * By default, this class will automatically clean up any multipart uploads
 * when an individual part upload fails. This behavior can be disabled in order
 * to manually handle failures by setting the `leavePartsOnError` configuration
 * option to `true` when initializing the upload object.
 *
 * @!event httpUploadProgress(progress)
 *   Triggered when the uploader has uploaded more data.
 *   @note The `total` property may not be set if the stream being uploaded has
 *     not yet finished chunking. In this case the `total` will be undefined
 *     until the total stream size is known.
 *   @note This event will not be emitted in Node.js 0.8.x.
 *   @param progress [map] An object containing the `loaded` and `total` bytes
 *     of the request and the `key` of the S3 object. Note that `total` may be undefined until the payload
 *     size is known.
 *   @context (see AWS.Request~send)
 */
AWS.S3.ManagedUpload = AWS.util.inherit({
  /**
   * Creates a managed upload object with a set of configuration options.
   *
   * @note A "Body" parameter is required to be set prior to calling {send}.
   * @option options params [map] a map of parameters to pass to the upload
   *   requests. The "Body" parameter is required to be specified either on
   *   the service or in the params option.
   * @note ContentMD5 should not be provided when using the managed upload object.
   *   Instead, setting "computeChecksums" to true will enable automatic ContentMD5 generation
   *   by the managed upload object.
   * @option options queueSize [Number] (4) the size of the concurrent queue
   *   manager to upload parts in parallel. Set to 1 for synchronous uploading
   *   of parts. Note that the uploader will buffer at most queueSize * partSize
   *   bytes into memory at any given time.
   * @option options partSize [Number] (5mb) the size in bytes for each
   *   individual part to be uploaded. Adjust the part size to ensure the number
   *   of parts does not exceed {maxTotalParts}. See {minPartSize} for the
   *   minimum allowed part size.
   * @option options leavePartsOnError [Boolean] (false) whether to abort the
   *   multipart upload if an error occurs. Set to true if you want to handle
   *   failures manually.
   * @option options service [AWS.S3] an optional S3 service object to use for
   *   requests. This object might have bound parameters used by the uploader.
   * @option options tags [Array<map>] The tags to apply to the uploaded object.
   *   Each tag should have a `Key` and `Value` keys.
   * @example Creating a default uploader for a stream object
   *   var upload = new AWS.S3.ManagedUpload({
   *     params: {Bucket: 'bucket', Key: 'key', Body: stream}
   *   });
   * @example Creating an uploader with concurrency of 1 and partSize of 10mb
   *   var upload = new AWS.S3.ManagedUpload({
   *     partSize: 10 * 1024 * 1024, queueSize: 1,
   *     params: {Bucket: 'bucket', Key: 'key', Body: stream}
   *   });
   * @example Creating an uploader with tags
   *   var upload = new AWS.S3.ManagedUpload({
   *     params: {Bucket: 'bucket', Key: 'key', Body: stream},
   *     tags: [{Key: 'tag1', Value: 'value1'}, {Key: 'tag2', Value: 'value2'}]
   *   });
   * @see send
   */
  constructor: function ManagedUpload(options) {
    var self = this;
    AWS.SequentialExecutor.call(self);
    self.body = null;
    self.sliceFn = null;
    self.callback = null;
    self.parts = {};
    self.completeInfo = [];
    self.fillQueue = function() {
      self.callback(new Error('Unsupported body payload ' + typeof self.body));
    };

    self.configure(options);
  },

  /**
   * @api private
   */
  configure: function configure(options) {
    options = options || {};
    this.partSize = this.minPartSize;

    if (options.queueSize) this.queueSize = options.queueSize;
    if (options.partSize) this.partSize = options.partSize;
    if (options.leavePartsOnError) this.leavePartsOnError = true;
    if (options.tags) {
      if (!Array.isArray(options.tags)) {
        throw new Error('Tags must be specified as an array; ' +
          typeof options.tags + ' provided.');
      }
      this.tags = options.tags;
    }

    if (this.partSize < this.minPartSize) {
      throw new Error('partSize must be greater than ' +
                      this.minPartSize);
    }

    this.service = options.service;
    this.bindServiceObject(options.params);
    this.validateBody();
    this.adjustTotalBytes();
  },

  /**
   * @api private
   */
  leavePartsOnError: false,

  /**
   * @api private
   */
  queueSize: 4,

  /**
   * @api private
   */
  partSize: null,

  /**
   * @readonly
   * @return [Number] the minimum number of bytes for an individual part
   *   upload.
   */
  minPartSize: 1024 * 1024 * 5,

  /**
   * @readonly
   * @return [Number] the maximum allowed number of parts in a multipart upload.
   */
  maxTotalParts: 10000,

  /**
   * Initiates the managed upload for the payload.
   *
   * @callback callback function(err, data)
   *   @param err [Error] an error or null if no error occurred.
   *   @param data [map] The response data from the successful upload:
   *     * `Location` (String) the URL of the uploaded object
   *     * `ETag` (String) the ETag of the uploaded object
   *     * `Bucket` (String) the bucket to which the object was uploaded
   *     * `Key` (String) the key to which the object was uploaded
   * @example Sending a managed upload object
   *   var params = {Bucket: 'bucket', Key: 'key', Body: stream};
   *   var upload = new AWS.S3.ManagedUpload({params: params});
   *   upload.send(function(err, data) {
   *     console.log(err, data);
   *   });
   */
  send: function(callback) {
    var self = this;
    self.failed = false;
    self.callback = callback || function(err) { if (err) throw err; };

    var runFill = true;
    if (self.sliceFn) {
      self.fillQueue = self.fillBuffer;
    } else if (AWS.util.isNode()) {
      var Stream = AWS.util.stream.Stream;
      if (self.body instanceof Stream) {
        runFill = false;
        self.fillQueue = self.fillStream;
        self.partBuffers = [];
        self.body.
          on('error', function(err) { self.cleanup(err); }).
          on('readable', function() { self.fillQueue(); }).
          on('end', function() {
            self.isDoneChunking = true;
            self.numParts = self.totalPartNumbers;
            self.fillQueue.call(self);

            if (self.isDoneChunking && self.totalPartNumbers >= 1 && self.doneParts === self.numParts) {
              self.finishMultiPart();
            }
          });
      }
    }

    if (runFill) self.fillQueue.call(self);
  },

  /**
   * @!method  promise()
   *   Returns a 'thenable' promise.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function(data)
   *     Called if the promise is fulfilled.
   *     @param data [map] The response data from the successful upload:
   *       `Location` (String) the URL of the uploaded object
   *       `ETag` (String) the ETag of the uploaded object
   *       `Bucket` (String) the bucket to which the object was uploaded
   *       `Key` (String) the key to which the object was uploaded
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] an error or null if no error occurred.
   *   @return [Promise] A promise that represents the state of the upload request.
   *   @example Sending an upload request using promises.
   *     var upload = s3.upload({Bucket: 'bucket', Key: 'key', Body: stream});
   *     var promise = upload.promise();
   *     promise.then(function(data) { ... }, function(err) { ... });
   */

  /**
   * Aborts a managed upload, including all concurrent upload requests.
   * @note By default, calling this function will cleanup a multipart upload
   *   if one was created. To leave the multipart upload around after aborting
   *   a request, configure `leavePartsOnError` to `true` in the {constructor}.
   * @note Calling {abort} in the browser environment will not abort any requests
   *   that are already in flight. If a multipart upload was created, any parts
   *   not yet uploaded will not be sent, and the multipart upload will be cleaned up.
   * @example Aborting an upload
   *   var params = {
   *     Bucket: 'bucket', Key: 'key',
   *     Body: new Buffer(1024 * 1024 * 25) // 25MB payload
   *   };
   *   var upload = s3.upload(params);
   *   upload.send(function (err, data) {
   *     if (err) console.log("Error:", err.code, err.message);
   *     else console.log(data);
   *   });
   *
   *   // abort request in 1 second
   *   setTimeout(upload.abort.bind(upload), 1000);
   */
  abort: function() {
    this.cleanup(AWS.util.error(new Error('Request aborted by user'), {
      code: 'RequestAbortedError', retryable: false
    }));
  },

  /**
   * @api private
   */
  validateBody: function validateBody() {
    var self = this;
    self.body = self.service.config.params.Body;
    if (typeof self.body === 'string') {
      self.body = new AWS.util.Buffer(self.body);
    } else if (!self.body) {
      throw new Error('params.Body is required');
    }
    self.sliceFn = AWS.util.arraySliceFn(self.body);
  },

  /**
   * @api private
   */
  bindServiceObject: function bindServiceObject(params) {
    params = params || {};
    var self = this;
    // bind parameters to new service object
    if (!self.service) {
      self.service = new AWS.S3({params: params});
    } else {
      var service = self.service;
      var config = AWS.util.copy(service.config);
      config.signatureVersion = service.getSignatureVersion();
      self.service = new service.constructor.__super__(config);
      self.service.config.params =
        AWS.util.merge(self.service.config.params || {}, params);
    }
  },

  /**
   * @api private
   */
  adjustTotalBytes: function adjustTotalBytes() {
    var self = this;
    try { // try to get totalBytes
      self.totalBytes = byteLength(self.body);
    } catch (e) { }

    // try to adjust partSize if we know payload length
    if (self.totalBytes) {
      var newPartSize = Math.ceil(self.totalBytes / self.maxTotalParts);
      if (newPartSize > self.partSize) self.partSize = newPartSize;
    } else {
      self.totalBytes = undefined;
    }
  },

  /**
   * @api private
   */
  isDoneChunking: false,

  /**
   * @api private
   */
  partPos: 0,

  /**
   * @api private
   */
  totalChunkedBytes: 0,

  /**
   * @api private
   */
  totalUploadedBytes: 0,

  /**
   * @api private
   */
  totalBytes: undefined,

  /**
   * @api private
   */
  numParts: 0,

  /**
   * @api private
   */
  totalPartNumbers: 0,

  /**
   * @api private
   */
  activeParts: 0,

  /**
   * @api private
   */
  doneParts: 0,

  /**
   * @api private
   */
  parts: null,

  /**
   * @api private
   */
  completeInfo: null,

  /**
   * @api private
   */
  failed: false,

  /**
   * @api private
   */
  multipartReq: null,

  /**
   * @api private
   */
  partBuffers: null,

  /**
   * @api private
   */
  partBufferLength: 0,

  /**
   * @api private
   */
  fillBuffer: function fillBuffer() {
    var self = this;
    var bodyLen = byteLength(self.body);

    if (bodyLen === 0) {
      self.isDoneChunking = true;
      self.numParts = 1;
      self.nextChunk(self.body);
      return;
    }

    while (self.activeParts < self.queueSize && self.partPos < bodyLen) {
      var endPos = Math.min(self.partPos + self.partSize, bodyLen);
      var buf = self.sliceFn.call(self.body, self.partPos, endPos);
      self.partPos += self.partSize;

      if (byteLength(buf) < self.partSize || self.partPos === bodyLen) {
        self.isDoneChunking = true;
        self.numParts = self.totalPartNumbers + 1;
      }
      self.nextChunk(buf);
    }
  },

  /**
   * @api private
   */
  fillStream: function fillStream() {
    var self = this;
    if (self.activeParts >= self.queueSize) return;

    var buf = self.body.read(self.partSize - self.partBufferLength) ||
              self.body.read();
    if (buf) {
      self.partBuffers.push(buf);
      self.partBufferLength += buf.length;
      self.totalChunkedBytes += buf.length;
    }

    if (self.partBufferLength >= self.partSize) {
      // if we have single buffer we avoid copyfull concat
      var pbuf = self.partBuffers.length === 1 ?
        self.partBuffers[0] : Buffer.concat(self.partBuffers);
      self.partBuffers = [];
      self.partBufferLength = 0;

      // if we have more than partSize, push the rest back on the queue
      if (pbuf.length > self.partSize) {
        var rest = pbuf.slice(self.partSize);
        self.partBuffers.push(rest);
        self.partBufferLength += rest.length;
        pbuf = pbuf.slice(0, self.partSize);
      }

      self.nextChunk(pbuf);
    }

    if (self.isDoneChunking && !self.isDoneSending) {
      // if we have single buffer we avoid copyfull concat
      pbuf = self.partBuffers.length === 1 ?
          self.partBuffers[0] : Buffer.concat(self.partBuffers);
      self.partBuffers = [];
      self.partBufferLength = 0;
      self.totalBytes = self.totalChunkedBytes;
      self.isDoneSending = true;

      if (self.numParts === 0 || pbuf.length > 0) {
        self.numParts++;
        self.nextChunk(pbuf);
      }
    }

    self.body.read(0);
  },

  /**
   * @api private
   */
  nextChunk: function nextChunk(chunk) {
    var self = this;
    if (self.failed) return null;

    var partNumber = ++self.totalPartNumbers;
    if (self.isDoneChunking && partNumber === 1) {
      var params = {Body: chunk};
      if (this.tags) {
        params.Tagging = this.getTaggingHeader();
      }
      var req = self.service.putObject(params);
      req._managedUpload = self;
      req.on('httpUploadProgress', self.progress).send(self.finishSinglePart);
      return null;
    } else if (self.service.config.params.ContentMD5) {
      var err = AWS.util.error(new Error('The Content-MD5 you specified is invalid for multi-part uploads.'), {
        code: 'InvalidDigest', retryable: false
      });

      self.cleanup(err);
      return null;
    }

    if (self.completeInfo[partNumber] && self.completeInfo[partNumber].ETag !== null) {
      return null; // Already uploaded this part.
    }

    self.activeParts++;
    if (!self.service.config.params.UploadId) {

      if (!self.multipartReq) { // create multipart
        self.multipartReq = self.service.createMultipartUpload();
        self.multipartReq.on('success', function(resp) {
          self.service.config.params.UploadId = resp.data.UploadId;
          self.multipartReq = null;
        });
        self.queueChunks(chunk, partNumber);
        self.multipartReq.on('error', function(err) {
          self.cleanup(err);
        });
        self.multipartReq.send();
      } else {
        self.queueChunks(chunk, partNumber);
      }
    } else { // multipart is created, just send
      self.uploadPart(chunk, partNumber);
    }
  },

  /**
   * @api private
   */
  getTaggingHeader: function getTaggingHeader() {
    var kvPairStrings = [];
    for (var i = 0; i < this.tags.length; i++) {
      kvPairStrings.push(AWS.util.uriEscape(this.tags[i].Key) + '=' +
        AWS.util.uriEscape(this.tags[i].Value));
    }

    return kvPairStrings.join('&');
  },

  /**
   * @api private
   */
  uploadPart: function uploadPart(chunk, partNumber) {
    var self = this;

    var partParams = {
      Body: chunk,
      ContentLength: AWS.util.string.byteLength(chunk),
      PartNumber: partNumber
    };

    var partInfo = {ETag: null, PartNumber: partNumber};
    self.completeInfo[partNumber] = partInfo;

    var req = self.service.uploadPart(partParams);
    self.parts[partNumber] = req;
    req._lastUploadedBytes = 0;
    req._managedUpload = self;
    req.on('httpUploadProgress', self.progress);
    req.send(function(err, data) {
      delete self.parts[partParams.PartNumber];
      self.activeParts--;

      if (!err && (!data || !data.ETag)) {
        var message = 'No access to ETag property on response.';
        if (AWS.util.isBrowser()) {
          message += ' Check CORS configuration to expose ETag header.';
        }

        err = AWS.util.error(new Error(message), {
          code: 'ETagMissing', retryable: false
        });
      }
      if (err) return self.cleanup(err);

      partInfo.ETag = data.ETag;
      self.doneParts++;
      if (self.isDoneChunking && self.doneParts === self.numParts) {
        self.finishMultiPart();
      } else {
        self.fillQueue.call(self);
      }
    });
  },

  /**
   * @api private
   */
  queueChunks: function queueChunks(chunk, partNumber) {
    var self = this;
    self.multipartReq.on('success', function() {
      self.uploadPart(chunk, partNumber);
    });
  },

  /**
   * @api private
   */
  cleanup: function cleanup(err) {
    var self = this;
    if (self.failed) return;

    // clean up stream
    if (typeof self.body.removeAllListeners === 'function' &&
        typeof self.body.resume === 'function') {
      self.body.removeAllListeners('readable');
      self.body.removeAllListeners('end');
      self.body.resume();
    }

    // cleanup multipartReq listeners
    if (self.multipartReq) {
      self.multipartReq.removeAllListeners('success');
      self.multipartReq.removeAllListeners('error');
      self.multipartReq.removeAllListeners('complete');
      delete self.multipartReq;
    }

    if (self.service.config.params.UploadId && !self.leavePartsOnError) {
      self.service.abortMultipartUpload().send();
    } else if (self.leavePartsOnError) {
      self.isDoneChunking = false;
    }

    AWS.util.each(self.parts, function(partNumber, part) {
      part.removeAllListeners('complete');
      part.abort();
    });

    self.activeParts = 0;
    self.partPos = 0;
    self.numParts = 0;
    self.totalPartNumbers = 0;
    self.parts = {};
    self.failed = true;
    self.callback(err);
  },

  /**
   * @api private
   */
  finishMultiPart: function finishMultiPart() {
    var self = this;
    var completeParams = { MultipartUpload: { Parts: self.completeInfo.slice(1) } };
    self.service.completeMultipartUpload(completeParams, function(err, data) {
      if (err) {
        return self.cleanup(err);
      }

      if (data && typeof data.Location === 'string') {
        data.Location = data.Location.replace(/%2F/g, '/');
      }

      if (Array.isArray(self.tags)) {
        self.service.putObjectTagging(
          {Tagging: {TagSet: self.tags}},
          function(e, d) {
            if (e) {
              self.callback(e);
            } else {
              self.callback(e, data);
            }
          }
        );
      } else {
        self.callback(err, data);
      }
    });
  },

  /**
   * @api private
   */
  finishSinglePart: function finishSinglePart(err, data) {
    var upload = this.request._managedUpload;
    var httpReq = this.request.httpRequest;
    var endpoint = httpReq.endpoint;
    if (err) return upload.callback(err);
    data.Location =
      [endpoint.protocol, '//', endpoint.host, httpReq.path].join('');
    data.key = this.request.params.Key; // will stay undocumented
    data.Key = this.request.params.Key;
    data.Bucket = this.request.params.Bucket;
    upload.callback(err, data);
  },

  /**
   * @api private
   */
  progress: function progress(info) {
    var upload = this._managedUpload;
    if (this.operation === 'putObject') {
      info.part = 1;
      info.key = this.params.Key;
    } else {
      upload.totalUploadedBytes += info.loaded - this._lastUploadedBytes;
      this._lastUploadedBytes = info.loaded;
      info = {
        loaded: upload.totalUploadedBytes,
        total: upload.totalBytes,
        part: this.params.PartNumber,
        key: this.params.Key
      };
    }
    upload.emit('httpUploadProgress', [info]);
  }
});

AWS.util.mixin(AWS.S3.ManagedUpload, AWS.SequentialExecutor);

/**
 * @api private
 */
AWS.S3.ManagedUpload.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.promise = AWS.util.promisifyMethod('send', PromiseDependency);
};

/**
 * @api private
 */
AWS.S3.ManagedUpload.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.promise;
};

AWS.util.addPromises(AWS.S3.ManagedUpload);

module.exports = AWS.S3.ManagedUpload;
