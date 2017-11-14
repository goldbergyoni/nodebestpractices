var AWS = require('../core');

AWS.util.update(AWS.Glacier.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    if (Array.isArray(request._events.validate)) {
      request._events.validate.unshift(this.validateAccountId);
    } else {
      request.on('validate', this.validateAccountId);
    }
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.COMPUTE_SHA256);
    request.on('build', this.addGlacierApiVersion);
    request.on('build', this.addTreeHashHeaders);
  },

  /**
   * @api private
   */
  validateAccountId: function validateAccountId(request) {
    if (request.params.accountId !== undefined) return;
    request.params = AWS.util.copy(request.params);
    request.params.accountId = '-';
  },

  /**
   * @api private
   */
  addGlacierApiVersion: function addGlacierApiVersion(request) {
    var version = request.service.api.apiVersion;
    request.httpRequest.headers['x-amz-glacier-version'] = version;
  },

  /**
   * @api private
   */
  addTreeHashHeaders: function addTreeHashHeaders(request) {
    if (request.params.body === undefined) return;

    var hashes = request.service.computeChecksums(request.params.body);
    request.httpRequest.headers['X-Amz-Content-Sha256'] = hashes.linearHash;

    if (!request.httpRequest.headers['x-amz-sha256-tree-hash']) {
      request.httpRequest.headers['x-amz-sha256-tree-hash'] = hashes.treeHash;
    }
  },

  /**
   * @!group Computing Checksums
   */

  /**
   * Computes the SHA-256 linear and tree hash checksums for a given
   * block of Buffer data. Pass the tree hash of the computed checksums
   * as the checksum input to the {completeMultipartUpload} when performing
   * a multi-part upload.
   *
   * @example Calculate checksum of 5.5MB data chunk
   *   var glacier = new AWS.Glacier();
   *   var data = new Buffer(5.5 * 1024 * 1024);
   *   data.fill('0'); // fill with zeros
   *   var results = glacier.computeChecksums(data);
   *   // Result: { linearHash: '68aff0c5a9...', treeHash: '154e26c78f...' }
   * @param data [Buffer, String] data to calculate the checksum for
   * @return [map<linearHash:String,treeHash:String>] a map containing
   *   the linearHash and treeHash properties representing hex based digests
   *   of the respective checksums.
   * @see completeMultipartUpload
   */
  computeChecksums: function computeChecksums(data) {
    if (!AWS.util.Buffer.isBuffer(data)) data = new AWS.util.Buffer(data);

    var mb = 1024 * 1024;
    var hashes = [];
    var hash = AWS.util.crypto.createHash('sha256');

    // build leaf nodes in 1mb chunks
    for (var i = 0; i < data.length; i += mb) {
      var chunk = data.slice(i, Math.min(i + mb, data.length));
      hash.update(chunk);
      hashes.push(AWS.util.crypto.sha256(chunk));
    }

    return {
      linearHash: hash.digest('hex'),
      treeHash: this.buildHashTree(hashes)
    };
  },

  /**
   * @api private
   */
  buildHashTree: function buildHashTree(hashes) {
    // merge leaf nodes
    while (hashes.length > 1) {
      var tmpHashes = [];
      for (var i = 0; i < hashes.length; i += 2) {
        if (hashes[i + 1]) {
          var tmpHash = new AWS.util.Buffer(64);
          tmpHash.write(hashes[i], 0, 32, 'binary');
          tmpHash.write(hashes[i + 1], 32, 32, 'binary');
          tmpHashes.push(AWS.util.crypto.sha256(tmpHash));
        } else {
          tmpHashes.push(hashes[i]);
        }
      }
      hashes = tmpHashes;
    }

    return AWS.util.crypto.toHex(hashes[0]);
  }
});
