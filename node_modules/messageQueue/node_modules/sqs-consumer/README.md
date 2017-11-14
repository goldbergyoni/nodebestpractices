# sqs-consumer

[![Build Status](https://travis-ci.org/bbc/sqs-consumer.svg)](https://travis-ci.org/bbc/sqs-consumer) [![Code Climate](https://codeclimate.com/github/BBC/sqs-consumer/badges/gpa.svg)](https://codeclimate.com/github/BBC/sqs-consumer) [![Test Coverage](https://codeclimate.com/github/BBC/sqs-consumer/badges/coverage.svg)](https://codeclimate.com/github/BBC/sqs-consumer)

Build SQS-based applications without the boilerplate. Just define a function that receives an SQS message and call a callback when the message has been processed.

## Installation

```bash
npm install sqs-consumer --save
```

## Usage

```js
const Consumer = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
  handleMessage: (message, done) => {
    // do some work with `message`
    done();
  }
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();
```

* The queue is polled continuously for messages using [long polling](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html).
* Messages are deleted from the queue once `done()` is called.
* Calling `done(err)` with an error object will cause the message to be left on the queue. An [SQS redrive policy](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html) can be used to move messages that cannot be processed to a dead letter queue.
* By default messages are processed one at a time – a new message won't be received until the first one has been processed. To process messages in parallel, use the `batchSize` option [detailed below](#options).

### Credentials

By default the consumer will look for AWS credentials in the places [specified by the AWS SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Setting_AWS_Credentials). The simplest option is to export your credentials as environment variables:

```bash
export AWS_SECRET_ACCESS_KEY=...
export AWS_ACCESS_KEY_ID=...
```

If you need to specify your credentials manually, you can use a pre-configured instance of the [AWS SQS](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html) client:


```js
const Consumer = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: '...',
  secretAccessKey: '...'
});

const app = Consumer.create({
  queueUrl: 'https://sqs.eu-west-1.amazonaws.com/account-id/queue-name',
  handleMessage: (message, done) => {
    // ...
    done();
  },
  sqs: new AWS.SQS()
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();
```

## API

### `Consumer.create(options)`

Creates a new SQS consumer.

#### Options

* `queueUrl` - _String_ - The SQS queue URL
* `region` - _String_ - The AWS region (default `eu-west-1`)
* `handleMessage` - _Function_ - A function to be called whenever a message is received. Receives an SQS message object as its first argument and a function to call when the message has been handled as its second argument (i.e. `handleMessage(message, done)`).
* `attributeNames` - _Array_ - List of queue attributes to retrieve (i.e. `['All', 'ApproximateFirstReceiveTimestamp', 'ApproximateReceiveCount']`).
* `messageAttributeNames` - _Array_ - List of message attributes to retrieve (i.e. `['name', 'address']`).
* `batchSize` - _Number_ - The number of messages to request from SQS when polling (default `1`). This cannot be higher than the AWS limit of 10.
* `visibilityTimeout` - _Number_ - The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.
* `terminateVisibilityTimeout` - _Boolean_ - If true, sets the message visibility timeout to 0 after a `processing_error` (defaults to `false`).
* `waitTimeSeconds` - _Number_ - The duration (in seconds) for which the call will wait for a message to arrive in the queue before returning.
* `authenticationErrorTimeout` - _Number_ - The duration (in milliseconds) to wait before retrying after an authentication error (defaults to `10000`).
* `sqs` - _Object_ - An optional [AWS SQS](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html) object to use if you need to configure the client manually

### `consumer.start()`

Start polling the queue for messages.

### `consumer.stop()`

Stop polling the queue for messages.

### Events

Each consumer is an [`EventEmitter`](http://nodejs.org/api/events.html) and emits the following events:

|Event|Params|Description|
|-----|------|-----------|
|`error`|`err`, `[message]`|Fired when an error occurs interacting with the queue. If the error correlates to a message, that error is included in Params|
|`processing_error`|`err`, `message`|Fired when an error occurs processing the message.|
|`message_received`|`message`|Fired when a message is received.|
|`message_processed`|`message`|Fired when a message is successfully processed and removed from the queue.|
|`response_processed`|None|Fired after one batch of items (up to `batchSize`) has been successfully processed.|
|`stopped`|None|Fired when the consumer finally stops its work.|
|`empty`|None|Fired when the queue is empty (All messages have been consumed).|

### AWS IAM Permissions

Consumer will receive and delete messages from the SQS queue. Ensure `sqs:ReceiveMessage` and `sqs:DeleteMessage` access is granted on the queue being consumed.
