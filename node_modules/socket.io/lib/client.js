
/**
 * Module dependencies.
 */

var parser = require('socket.io-parser');
var debug = require('debug')('socket.io:client');
var url = require('url');

/**
 * Module exports.
 */

module.exports = Client;

/**
 * Client constructor.
 *
 * @param {Server} server instance
 * @param {Socket} conn
 * @api private
 */

function Client(server, conn){
  this.server = server;
  this.conn = conn;
  this.encoder = server.encoder;
  this.decoder = new server.parser.Decoder();
  this.id = conn.id;
  this.request = conn.request;
  this.setup();
  this.sockets = {};
  this.nsps = {};
  this.connectBuffer = [];
}

/**
 * Sets up event listeners.
 *
 * @api private
 */

Client.prototype.setup = function(){
  this.onclose = this.onclose.bind(this);
  this.ondata = this.ondata.bind(this);
  this.onerror = this.onerror.bind(this);
  this.ondecoded = this.ondecoded.bind(this);

  this.decoder.on('decoded', this.ondecoded);
  this.conn.on('data', this.ondata);
  this.conn.on('error', this.onerror);
  this.conn.on('close', this.onclose);
};

/**
 * Connects a client to a namespace.
 *
 * @param {String} name namespace
 * @api private
 */

Client.prototype.connect = function(name, query){
  debug('connecting to namespace %s', name);
  var nsp = this.server.nsps[name];
  if (!nsp) {
    this.packet({ type: parser.ERROR, nsp: name, data : 'Invalid namespace'});
    return;
  }

  if ('/' != name && !this.nsps['/']) {
    this.connectBuffer.push(name);
    return;
  }

  var self = this;
  var socket = nsp.add(this, query, function(){
    self.sockets[socket.id] = socket;
    self.nsps[nsp.name] = socket;

    if ('/' == nsp.name && self.connectBuffer.length > 0) {
      self.connectBuffer.forEach(self.connect, self);
      self.connectBuffer = [];
    }
  });
};

/**
 * Disconnects from all namespaces and closes transport.
 *
 * @api private
 */

Client.prototype.disconnect = function(){
  for (var id in this.sockets) {
    if (this.sockets.hasOwnProperty(id)) {
      this.sockets[id].disconnect();
    }
  }
  this.sockets = {};
  this.close();
};

/**
 * Removes a socket. Called by each `Socket`.
 *
 * @api private
 */

Client.prototype.remove = function(socket){
  if (this.sockets.hasOwnProperty(socket.id)) {
    var nsp = this.sockets[socket.id].nsp.name;
    delete this.sockets[socket.id];
    delete this.nsps[nsp];
  } else {
    debug('ignoring remove for %s', socket.id);
  }
};

/**
 * Closes the underlying connection.
 *
 * @api private
 */

Client.prototype.close = function(){
  if ('open' == this.conn.readyState) {
    debug('forcing transport close');
    this.conn.close();
    this.onclose('forced server close');
  }
};

/**
 * Writes a packet to the transport.
 *
 * @param {Object} packet object
 * @param {Object} opts
 * @api private
 */

Client.prototype.packet = function(packet, opts){
  opts = opts || {};
  var self = this;

  // this writes to the actual connection
  function writeToEngine(encodedPackets) {
    if (opts.volatile && !self.conn.transport.writable) return;
    for (var i = 0; i < encodedPackets.length; i++) {
      self.conn.write(encodedPackets[i], { compress: opts.compress });
    }
  }

  if ('open' == this.conn.readyState) {
    debug('writing packet %j', packet);
    if (!opts.preEncoded) { // not broadcasting, need to encode
      this.encoder.encode(packet, writeToEngine); // encode, then write results to engine
    } else { // a broadcast pre-encodes a packet
      writeToEngine(packet);
    }
  } else {
    debug('ignoring packet write %j', packet);
  }
};

/**
 * Called with incoming transport data.
 *
 * @api private
 */

Client.prototype.ondata = function(data){
  // try/catch is needed for protocol violations (GH-1880)
  try {
    this.decoder.add(data);
  } catch(e) {
    this.onerror(e);
  }
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Client.prototype.ondecoded = function(packet) {
  if (parser.CONNECT == packet.type) {
    this.connect(url.parse(packet.nsp).pathname, url.parse(packet.nsp, true).query);
  } else {
    var socket = this.nsps[packet.nsp];
    if (socket) {
      process.nextTick(function() {
        socket.onpacket(packet);
      });
    } else {
      debug('no socket for namespace %s', packet.nsp);
    }
  }
};

/**
 * Handles an error.
 *
 * @param {Object} err object
 * @api private
 */

Client.prototype.onerror = function(err){
  for (var id in this.sockets) {
    if (this.sockets.hasOwnProperty(id)) {
      this.sockets[id].onerror(err);
    }
  }
  this.conn.close();
};

/**
 * Called upon transport close.
 *
 * @param {String} reason
 * @api private
 */

Client.prototype.onclose = function(reason){
  debug('client close with reason %s', reason);

  // ignore a potential subsequent `close` event
  this.destroy();

  // `nsps` and `sockets` are cleaned up seamlessly
  for (var id in this.sockets) {
    if (this.sockets.hasOwnProperty(id)) {
      this.sockets[id].onclose(reason);
    }
  }
  this.sockets = {};

  this.decoder.destroy(); // clean up decoder
};

/**
 * Cleans up event listeners.
 *
 * @api private
 */

Client.prototype.destroy = function(){
  this.conn.removeListener('data', this.ondata);
  this.conn.removeListener('error', this.onerror);
  this.conn.removeListener('close', this.onclose);
  this.decoder.removeListener('decoded', this.ondecoded);
};
