'use strict';

module.exports = {
  "LogFilePath": ".\\logs\\log.log",
  "LogLevel": "debug",
  "AMQPAddress": "amqp",
  "JWTtokenSecret": "InFlowz1secretP@$$202a",
  "baseUrl": "http://localhost:8080",
  "environment": process.env.NODE_ENV || "development",
  "settings": {
    "useSSL": process.env.useSSL || true,
    "port": process.env.PORT || '8080',
    "sslport": process.env.SSLPORT || '8443',
    "allowedOrigins": process.env.ALLOW_ORIGIN
  },
  "testing": {
    "API": {
      "processMode": process.env.APITestProcessMode || "inProcess", //inProcess or externalProcess,
      "APIUnderTestURL": process.env.APITestURL || "http://localhost:8080" //inProcess or externalProcess,
    }
  },
  "app": {
    "logger": {
      "logFile": "logs.log",
      "logRequests": true,
      "logLevel": 1
    },
  },
  "messageQueue": {
    "MQBaseURL": process.env.aws || "https://sqs.eu-west-1.amazonaws.com/828815370132/", //https://sqs.eu-west-1.amazonaws.com/828815370132/, //http://localhost:4576
    "queueNamePrefix": "dev",
    "MQPort": 80, //4576,
  },
  "AWSGlobal": {
    "secret": "",
    "key": "",
    "region": "eu-west-1"
  }
};