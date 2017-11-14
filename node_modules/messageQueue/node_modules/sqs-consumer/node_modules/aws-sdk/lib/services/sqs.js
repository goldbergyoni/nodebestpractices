var AWS = require('../core');

AWS.util.update(AWS.SQS.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.buildEndpoint);

    if (request.service.config.computeChecksums) {
      if (request.operation === 'sendMessage') {
        request.addListener('extractData', this.verifySendMessageChecksum);
      } else if (request.operation === 'sendMessageBatch') {
        request.addListener('extractData', this.verifySendMessageBatchChecksum);
      } else if (request.operation === 'receiveMessage') {
        request.addListener('extractData', this.verifyReceiveMessageChecksum);
      }
    }
  },

  /**
   * @api private
   */
  verifySendMessageChecksum: function verifySendMessageChecksum(response) {
    if (!response.data) return;

    var md5 = response.data.MD5OfMessageBody;
    var body = this.params.MessageBody;
    var calculatedMd5 = this.service.calculateChecksum(body);
    if (calculatedMd5 !== md5) {
      var msg = 'Got "' + response.data.MD5OfMessageBody +
        '", expecting "' + calculatedMd5 + '".';
      this.service.throwInvalidChecksumError(response,
        [response.data.MessageId], msg);
    }
  },

  /**
   * @api private
   */
  verifySendMessageBatchChecksum: function verifySendMessageBatchChecksum(response) {
    if (!response.data) return;

    var service = this.service;
    var entries = {};
    var errors = [];
    var messageIds = [];
    AWS.util.arrayEach(response.data.Successful, function (entry) {
      entries[entry.Id] = entry;
    });
    AWS.util.arrayEach(this.params.Entries, function (entry) {
      if (entries[entry.Id]) {
        var md5 = entries[entry.Id].MD5OfMessageBody;
        var body = entry.MessageBody;
        if (!service.isChecksumValid(md5, body)) {
          errors.push(entry.Id);
          messageIds.push(entries[entry.Id].MessageId);
        }
      }
    });

    if (errors.length > 0) {
      service.throwInvalidChecksumError(response, messageIds,
        'Invalid messages: ' + errors.join(', '));
    }
  },

  /**
   * @api private
   */
  verifyReceiveMessageChecksum: function verifyReceiveMessageChecksum(response) {
    if (!response.data) return;

    var service = this.service;
    var messageIds = [];
    AWS.util.arrayEach(response.data.Messages, function(message) {
      var md5 = message.MD5OfBody;
      var body = message.Body;
      if (!service.isChecksumValid(md5, body)) {
        messageIds.push(message.MessageId);
      }
    });

    if (messageIds.length > 0) {
      service.throwInvalidChecksumError(response, messageIds,
        'Invalid messages: ' + messageIds.join(', '));
    }
  },

  /**
   * @api private
   */
  throwInvalidChecksumError: function throwInvalidChecksumError(response, ids, message) {
    response.error = AWS.util.error(new Error(), {
      retryable: true,
      code: 'InvalidChecksum',
      messageIds: ids,
      message: response.request.operation +
               ' returned an invalid MD5 response. ' + message
    });
  },

  /**
   * @api private
   */
  isChecksumValid: function isChecksumValid(checksum, data) {
    return this.calculateChecksum(data) === checksum;
  },

  /**
   * @api private
   */
  calculateChecksum: function calculateChecksum(data) {
    return AWS.util.crypto.md5(data, 'hex');
  },

  /**
   * @api private
   */
  buildEndpoint: function buildEndpoint(request) {
    var url = request.httpRequest.params.QueueUrl;
    if (url) {
      request.httpRequest.endpoint = new AWS.Endpoint(url);

      // signature version 4 requires the region name to be set,
      // sqs queue urls contain the region name
      var matches = request.httpRequest.endpoint.host.match(/^sqs\.(.+?)\./);
      if (matches) request.httpRequest.region = matches[1];
    }
  }
});
