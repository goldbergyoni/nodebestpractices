/*!
 * ws: a node.js websocket client
 * Copyright(c) 2011 Einar Otto Stangvik <einaros@gmail.com>
 * MIT Licensed
 */

'use strict';

const WebSocket = require('./lib/WebSocket');

WebSocket.Server = require('./lib/WebSocketServer');
WebSocket.Receiver = require('./lib/Receiver');
WebSocket.Sender = require('./lib/Sender');

module.exports = WebSocket;
