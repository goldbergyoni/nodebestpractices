'use strict';

var Consumer = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('Consumer', function () {
  var consumer;
  var handleMessage;
  var sqs;
  var response = {
    Messages: [{
      ReceiptHandle: 'receipt-handle',
      MessageId: '123',
      Body: 'body'
    }]
  };

  beforeEach(function () {
    handleMessage = sinon.stub().yieldsAsync(null);
    sqs = sinon.mock();
    sqs.receiveMessage = sinon.stub().yieldsAsync(null, response);
    sqs.receiveMessage.onSecondCall().returns();
    sqs.deleteMessage = sinon.stub().yieldsAsync(null);
    sqs._deleteMessage = sinon.stub().yieldsAsync(null);
    sqs.changeMessageVisibility = sinon.stub().yieldsAsync(null);

    consumer = new Consumer({
      queueUrl: 'some-queue-url',
      region: 'some-region',
      handleMessage: handleMessage,
      sqs: sqs,
      authenticationErrorTimeout: 20
    });
  });

  it('requires a queueUrl to be set', function () {
    assert.throws(function () {
      new Consumer({
        region: 'some-region',
        handleMessage: handleMessage
      });
    });
  });

  it('requires a handleMessage function to be set', function () {
    assert.throws(function () {
      new Consumer({
        region: 'some-region',
        queueUrl: 'some-queue-url'
      });
    });
  });

  it('requires the batchSize option to be no greater than 10', function () {
    assert.throws(function () {
      new Consumer({
        region: 'some-region',
        queueUrl: 'some-queue-url',
        handleMessage: handleMessage,
        batchSize: 11
      });
    });
  });

  it('requires the batchSize option to be greater than 0', function () {
    assert.throws(function () {
      new Consumer({
        region: 'some-region',
        queueUrl: 'some-queue-url',
        handleMessage: handleMessage,
        batchSize: -1
      });
    });
  });

  describe('.create', function () {
    it('creates a new instance of a Consumer object', function () {
      var consumer = Consumer.create({
        region: 'some-region',
        queueUrl: 'some-queue-url',
        batchSize: 1,
        visibilityTimeout: 10,
        waitTimeSeconds: 10,
        handleMessage: handleMessage
      });

      assert(consumer instanceof Consumer);
    });
  });

  describe('.start', function () {
    it('fires an error event when an error occurs receiving a message', function (done) {
      var receiveErr = new Error('Receive error');

      sqs.receiveMessage.yields(receiveErr);

      consumer.on('error', function (err) {
        assert.ok(err);
        assert.equal(err.message, 'SQS receive message failed: Receive error');
        done();
      });

      consumer.start();
    });

    it('handles unexpected exceptions thrown by the handler function', function (done) {
      consumer = new Consumer({
        queueUrl: 'some-queue-url',
        region: 'some-region',
        handleMessage: function () {
          throw new Error('unexpected parsing error');
        },
        sqs: sqs,
        authenticationErrorTimeout: 20
      });

      consumer.on('processing_error', function (err) {
        assert.ok(err);
        assert.equal(err.message, 'Unexpected message handler failure: unexpected parsing error');
        done();
      });

      consumer.start();
    });

    it('fires an error event when an error occurs deleting a message', function (done) {
      var deleteErr = new Error('Delete error');

      handleMessage.yields(null);
      sqs.deleteMessage.yields(deleteErr);

      consumer.on('error', function (err) {
        assert.ok(err);
        assert.equal(err.message, 'SQS delete message failed: Delete error');
        done();
      });

      consumer.start();
    });

    it('fires a `processing_error` event when a non-`SQSError` error occurs processing a message', function (done) {
      var processingErr = new Error('Processing error');

      handleMessage.yields(processingErr);

      consumer.on('processing_error', function (err, message) {
        assert.equal(err, processingErr);
        assert.equal(message.MessageId, '123');
        done();
      });

      consumer.start();
    });

    it('fires an `error` event when an `SQSError` occurs processing a message', function (done) {
      var sqsError = new Error('Processing error');
      sqsError.name = 'SQSError';

      handleMessage.yields(sqsError);

      consumer.on('error', function (err, message) {
        assert.equal(err, sqsError);
        assert.equal(message.MessageId, '123');
        done();
      });

      consumer.start();
    });

    it('waits before repolling when a credentials error occurs', function (done) {
      var credentialsErr = {
        code: 'CredentialsError',
        message: 'Missing credentials in config'
      };

      sqs.receiveMessage.yields(credentialsErr);

      consumer.on('error', function () {
        setTimeout(function () {
          sinon.assert.calledOnce(sqs.receiveMessage);
        }, 10);
        setTimeout(function () {
          sinon.assert.calledTwice(sqs.receiveMessage);
          done();
        }, 30);
      });

      consumer.start();
    });

    it('waits before repolling when a 403 error occurs', function (done) {
      var invalidSignatureErr = {
        statusCode: 403,
        message: 'The security token included in the request is invalid'
      };

      sqs.receiveMessage.yields(invalidSignatureErr);

      consumer.on('error', function () {
        setTimeout(function () {
          sinon.assert.calledOnce(sqs.receiveMessage);
        }, 10);
        setTimeout(function () {
          sinon.assert.calledTwice(sqs.receiveMessage);
          done();
        }, 30);
      });

      consumer.start();
    });

    it('fires a message_received event when a message is received', function (done) {
      consumer.on('message_received', function (message) {
        assert.equal(message, response.Messages[0]);
        done();
      });

      consumer.start();
    });

    it('fires a message_processed event when a message is successfully deleted', function (done) {
      handleMessage.yields(null);

      consumer.on('message_processed', function (message) {
        assert.equal(message, response.Messages[0]);
        done();
      });

      consumer.start();
    });

    it('calls the handleMessage function when a message is received', function (done) {
      consumer.start();

      consumer.on('message_processed', function () {
        sinon.assert.calledWith(handleMessage, response.Messages[0]);
        done();
      });
    });

    it('deletes the message when the handleMessage callback is called', function (done) {
      handleMessage.yields(null);

      consumer.start();

      consumer.on('message_processed', function () {
        sinon.assert.calledWith(sqs.deleteMessage, {
          QueueUrl: 'some-queue-url',
          ReceiptHandle: 'receipt-handle'
        });
        done();
      });
    });

    it('doesn\'t delete the message when a processing error is reported', function () {
      handleMessage.yields(new Error('Processing error'));

      consumer.on('processing_error', function () {
        // ignore the error
      });

      consumer.start();

      sinon.assert.notCalled(sqs.deleteMessage);
    });

    it('consumes another message once one is processed', function (done) {
      sqs.receiveMessage.onSecondCall().yields(null, response);
      sqs.receiveMessage.onThirdCall().returns();

      consumer.start();
      setTimeout(function () {
        sinon.assert.calledTwice(handleMessage);
        done();
      }, 10);
    });

    it('doesn\'t consume more messages when called multiple times', function () {
      sqs.receiveMessage = sinon.stub().returns();
      consumer.start();
      consumer.start();
      consumer.start();
      consumer.start();
      consumer.start();

      sinon.assert.calledOnce(sqs.receiveMessage);
    });

    it('consumes multiple messages when the batchSize is greater than 1', function (done) {
      sqs.receiveMessage.yieldsAsync(null, {
        Messages: [
          {
            ReceiptHandle: 'receipt-handle-1',
            MessageId: '1',
            Body: 'body-1'
          },
          {
            ReceiptHandle: 'receipt-handle-2',
            MessageId: '2',
            Body: 'body-2'
          },
          {
            ReceiptHandle: 'receipt-handle-3',
            MessageId: '3',
            Body: 'body-3'
          }
        ]
      });

      consumer = new Consumer({
        queueUrl: 'some-queue-url',
        messageAttributeNames: ['attribute-1', 'attribute-2'],
        region: 'some-region',
        handleMessage: handleMessage,
        batchSize: 3,
        sqs: sqs
      });

      consumer.start();

      setTimeout(function () {
        sinon.assert.calledWith(sqs.receiveMessage, {
          QueueUrl: 'some-queue-url',
          AttributeNames: [],
          MessageAttributeNames: ['attribute-1', 'attribute-2'],
          MaxNumberOfMessages: 3,
          WaitTimeSeconds: 20,
          VisibilityTimeout: undefined
        });
        sinon.assert.callCount(handleMessage, 3);
        done();
      }, 10);
    });

    it('consumes messages with message attibute \'ApproximateReceiveCount\'', function (done) {

      var messageWithAttr = {
        ReceiptHandle: 'receipt-handle-1',
        MessageId: '1',
        Body: 'body-1',
        Attributes: {
          ApproximateReceiveCount: 1
        }
      };

      sqs.receiveMessage.yieldsAsync(null, {
        Messages: [messageWithAttr]
      });

      consumer = new Consumer({
        queueUrl: 'some-queue-url',
        attributeNames: ['ApproximateReceiveCount'],
        region: 'some-region',
        handleMessage: handleMessage,
        sqs: sqs
      });

      consumer.on('message_received', function (message) {
        sinon.assert.calledWith(sqs.receiveMessage, {
          QueueUrl: 'some-queue-url',
          AttributeNames: ['ApproximateReceiveCount'],
          MessageAttributeNames: [],
          MaxNumberOfMessages: 1,
          WaitTimeSeconds: 20,
          VisibilityTimeout: undefined
        });
        assert.equal(message, messageWithAttr);
        done();
      });

      consumer.start();
    });

    it('fires a emptyQueue event when all messages have been consumed', function (done) {
      sqs.receiveMessage.yieldsAsync(null, {});

      consumer.on('empty', function () {
        done();
      });

      consumer.start();
    });

    it('terminate message visibility timeout on processing error', function (done) {
      handleMessage.yields(new Error('Processing error'));

      consumer.terminateVisibilityTimeout = true;
      consumer.on('processing_error', function () {
        setImmediate(function () {
          sinon.assert.calledWith(sqs.changeMessageVisibility, {
            QueueUrl: 'some-queue-url',
            ReceiptHandle: 'receipt-handle',
            VisibilityTimeout: 0
          });
          done();
        });
      });

      consumer.start();
    });

    it('does not terminate visibility timeout when `terminateVisibilityTimeout` option is false', function (done) {
      handleMessage.yields(new Error('Processing error'));

      consumer.terminateVisibilityTimeout = false;
      consumer.on('processing_error', function () {
        setImmediate(function () {
          sinon.assert.notCalled(sqs.changeMessageVisibility);
          done();
        });
      });

      consumer.start();
    });

    it('fires error event when failed to terminate visibility timeout on processing error', function (done) {
      handleMessage.yields(new Error('Processing error'));

      var sqsError = new Error('Processing error');
      sqsError.name = 'SQSError';
      sqs.changeMessageVisibility.yields(sqsError);

      consumer.terminateVisibilityTimeout = true;
      consumer.on('error', function () {
        setImmediate(function () {
          sinon.assert.calledWith(sqs.changeMessageVisibility, {
            QueueUrl: 'some-queue-url',
            ReceiptHandle: 'receipt-handle',
            VisibilityTimeout: 0
          });
          done();
        });
      });

      consumer.start();
    });

    it('fires response_processed event for each batch', function (done) {
      sqs.receiveMessage.yieldsAsync(null, {
        Messages: [
          {
            ReceiptHandle: 'receipt-handle-1',
            MessageId: '1',
            Body: 'body-1'
          },
          {
            ReceiptHandle: 'receipt-handle-2',
            MessageId: '2',
            Body: 'body-2'
          }
        ]
      });
      handleMessage.yields(null);

      consumer = new Consumer({
        queueUrl: 'some-queue-url',
        messageAttributeNames: ['attribute-1', 'attribute-2'],
        region: 'some-region',
        handleMessage: handleMessage,
        batchSize: 2,
        sqs: sqs
      });

      consumer.on('response_processed', done);
      consumer.start();

    });
  });

  describe('.stop', function () {
    beforeEach(function () {
      sqs.receiveMessage.onSecondCall().yieldsAsync(null, response);
      sqs.receiveMessage.onThirdCall().returns();
    });

    it('stops the consumer polling for messages', function (done) {
      consumer.start();
      consumer.stop();

      setTimeout(function () {
        sinon.assert.calledOnce(handleMessage);
        done();
      }, 10);
    });

    it('fires a stopped event when last poll occurs after stopping', function (done) {
      var handleStop = sinon.stub().returns();

      consumer.on('stopped', handleStop);

      consumer.start();
      consumer.stop();

      setTimeout(function () {
        sinon.assert.calledOnce(handleStop);
        done();
      }, 10);
    });

    it('fires a stopped event only once when stopped multiple times', function (done) {
      var handleStop = sinon.stub().returns();

      consumer.on('stopped', handleStop);

      consumer.start();
      consumer.stop();
      consumer.stop();
      consumer.stop();

      setTimeout(function () {
        sinon.assert.calledOnce(handleStop);
        done();
      }, 10);
    });

    it('fires a stopped event a second time if started and stopped twice', function (done) {
      var handleStop = sinon.stub().returns();

      consumer.on('stopped', handleStop);

      consumer.start();
      consumer.stop();
      consumer.start();
      consumer.stop();

      setTimeout(function () {
        sinon.assert.calledTwice(handleStop);
        done();
      }, 10);
    });
  });
});
