'use strict';

const http = require('http');
const EventEmitter = require('events');
const EE_ERROR = 'Registering more than one listener to a WebSocket is not supported.';
const DEFAULT_PAYLOAD_LIMIT = 16777216;

function noop() {}

function abortConnection(socket, code, name) {
    socket.end('HTTP/1.1 ' + code + ' ' + name + '\r\n\r\n');
}

function emitConnection(ws) {
    this.emit('connection', ws);
}

function onServerMessage(message, webSocket) {
    webSocket.internalOnMessage(message);
}

const native = (() => {
    try {
        try {
            return process.binding('uws_builtin');
        } catch (e) {
            return require(`./uws_${process.platform}_${process.versions.modules}`);
        }
    } catch (e) {
        const version = process.version.substring(1).split('.').map(function(n) {
            return parseInt(n);
        });
        const lessThanSixFour = version[0] < 6 || (version[0] === 6 && version[1] < 4);

        if (process.platform === 'win32' && lessThanSixFour) {
            throw new Error('µWebSockets requires Node.js 6.4.0 or greater on Windows.');
        } else {
            throw new Error('Compilation of µWebSockets has failed and there is no pre-compiled binary ' +
            'available for your system. Please install a supported C++11 compiler and reinstall the module \'uws\'.');
        }
    }
})();

native.setNoop(noop);

var _upgradeReq = null;

const clientGroup = native.client.group.create(0, DEFAULT_PAYLOAD_LIMIT);

native.client.group.onConnection(clientGroup, (external) => {
    const webSocket = native.getUserData(external);
    webSocket.external = external;
    webSocket.internalOnOpen();
});

native.client.group.onMessage(clientGroup, (message, webSocket) => {
    webSocket.internalOnMessage(message);
});

native.client.group.onDisconnection(clientGroup, (external, code, message, webSocket) => {
    webSocket.external = null;

    process.nextTick(() => {
        webSocket.internalOnClose(code, message);
    });

    native.clearUserData(external);
});

native.client.group.onPing(clientGroup, (message, webSocket) => {
    webSocket.onping(message);
});

native.client.group.onPong(clientGroup, (message, webSocket) => {
    webSocket.onpong(message);
});

native.client.group.onError(clientGroup, (webSocket) => {
    process.nextTick(() => {
        webSocket.internalOnError({
            message: 'uWs client connection error',
            stack: 'uWs client connection error'
        });
    });
});

class WebSocket {
    constructor(external) {
        this.external = external;
        this.internalOnMessage = noop;
        this.internalOnClose = noop;
        this.onping = noop;
        this.onpong = noop;
    }

    get upgradeReq() {
        return _upgradeReq;
    }

    set onmessage(f) {
        if (f) {
            this.internalOnMessage = (message) => {
                f({data: message});
            };
        } else {
            this.internalOnMessage = noop;
        }
    }

    set onopen(f) {
        if (f) {
            this.internalOnOpen = f;
        } else {
            this.internalOnOpen = noop;
        }
    }

    set onclose(f) {
        if (f) {
            this.internalOnClose = (code, message) => {
                f({code: code, reason: message});
            };
        } else {
            this.internalOnClose = noop;
        }
    }

    set onerror(f) {
        if (f && this instanceof WebSocketClient) {
            this.internalOnError = f;
        } else {
            this.internalOnError = noop;
        }
    }

    emit(eventName, arg1, arg2) {
        if (eventName === 'message') {
            this.internalOnMessage(arg1);
        } else if (eventName === 'close') {
            this.internalOnClose(arg1, arg2);
        } else if (eventName === 'ping') {
            this.onping(arg1);
        } else if (eventName === 'pong') {
            this.onpong(arg1);
        }
        return this;
    }

    on(eventName, f) {
        if (eventName === 'message') {
            if (this.internalOnMessage !== noop) {
                throw Error(EE_ERROR);
            }
            this.internalOnMessage = f;
        } else if (eventName === 'close') {
            if (this.internalOnClose !== noop) {
                throw Error(EE_ERROR);
            }
            this.internalOnClose = f;
        } else if (eventName === 'ping') {
            if (this.onping !== noop) {
                throw Error(EE_ERROR);
            }
            this.onping = f;
        } else if (eventName === 'pong') {
            if (this.onpong !== noop) {
                throw Error(EE_ERROR);
            }
            this.onpong = f;
        } else if (eventName === 'open') {
            if (this.internalOnOpen !== noop) {
                throw Error(EE_ERROR);
            }
            this.internalOnOpen = f;
        } else if (eventName === 'error' && this instanceof WebSocketClient) {
            if (this.internalOnError !== noop) {
                throw Error(EE_ERROR);
            }
            this.internalOnError = f;
        }
        return this;
    }

    once(eventName, f) {
        if (eventName === 'message') {
            if (this.internalOnMessage !== noop) {
                throw Error(EE_ERROR);
            }
            this.internalOnMessage = (message) => {
                this.internalOnMessage = noop;
                f(message);
            };
        } else if (eventName === 'close') {
            if (this.internalOnClose !== noop) {
                throw Error(EE_ERROR);
            }
            this.internalOnClose = (code, message) => {
                this.internalOnClose = noop;
                f(code, message);
            };
        } else if (eventName === 'ping') {
            if (this.onping !== noop) {
                throw Error(EE_ERROR);
            }
            this.onping = () => {
                this.onping = noop;
                f();
            };
        } else if (eventName === 'pong') {
            if (this.onpong !== noop) {
                throw Error(EE_ERROR);
            }
            this.onpong = () => {
                this.onpong = noop;
                f();
            };
        }
        return this;
    }

    removeAllListeners(eventName) {
        if (!eventName || eventName === 'message') {
            this.internalOnMessage = noop;
        }
        if (!eventName || eventName === 'close') {
            this.internalOnClose = noop;
        }
        if (!eventName || eventName === 'ping') {
            this.onping = noop;
        }
        if (!eventName || eventName === 'pong') {
            this.onpong = noop;
        }
        return this;
    }

    removeListener(eventName, cb) {
        if (eventName === 'message' && this.internalOnMessage === cb) {
            this.internalOnMessage = noop;
        } else if (eventName === 'close' && this.internalOnClose === cb) {
            this.internalOnClose = noop;
        } else if (eventName === 'ping' && this.onping === cb) {
            this.onping = noop;
        } else if (eventName === 'pong' && this.onpong === cb) {
            this.onpong = noop;
        }
        return this;
    }

    get OPEN() {
        return WebSocketClient.OPEN;
    }

    get CLOSED() {
        return WebSocketClient.CLOSED;
    }

    get readyState() {
        return this.external ? WebSocketClient.OPEN : WebSocketClient.CLOSED;
    }

    get _socket() {
        const address = this.external ? native.getAddress(this.external) : new Array(3);
        return {
            remotePort: address[0],
            remoteAddress: address[1],
            remoteFamily: address[2]
        };
    }

    // from here down, functions are not common between client and server

    ping(message, options, dontFailWhenClosed) {
        if (this.external) {
            native.server.send(this.external, message, WebSocketClient.OPCODE_PING);
        }
    }

    terminate() {
        if (this.external) {
            native.server.terminate(this.external);
            this.external = null;
        }
    }

    send(message, options, cb) {
        if (this.external) {
            if (typeof options === 'function') {
                cb = options;
                options = null;
            }

            const binary = options && options.binary || typeof message !== 'string';

            native.server.send(this.external, message, binary ? WebSocketClient.OPCODE_BINARY : WebSocketClient.OPCODE_TEXT, cb ? (() => {
                process.nextTick(cb);
            }) : undefined);
        } else if (cb) {
            cb(new Error('not opened'));
        }
    }

    close(code, data) {
        if (this.external) {
            native.server.close(this.external, code, data);
            this.external = null;
        }
    }
}

class WebSocketClient extends WebSocket {
    constructor(uri) {
        super(null);
        this.internalOnOpen = noop;
        this.internalOnError = noop;
        native.connect(clientGroup, uri, this);
    }

    ping(message, options, dontFailWhenClosed) {
        if (this.external) {
            native.client.send(this.external, message, WebSocketClient.OPCODE_PING);
        }
    }

    terminate() {
        if (this.external) {
            native.client.terminate(this.external);
            this.external = null;
        }
    }

    send(message, options, cb) {
        if (this.external) {
            if (typeof options === 'function') {
                cb = options;
                options = null;
            }

            const binary = options && options.binary || typeof message !== 'string';

            native.client.send(this.external, message, binary ? WebSocketClient.OPCODE_BINARY : WebSocketClient.OPCODE_TEXT, cb ? (() => {
                process.nextTick(cb);
            }) : undefined);
        } else if (cb) {
            cb(new Error('not opened'));
        }
    }

    close(code, data) {
        if (this.external) {
            native.client.close(this.external, code, data);
            this.external = null;
        }
    }
}

class Server extends EventEmitter {
    constructor(options, callback) {
        super();

        if (!options) {
            throw new TypeError('missing options');
        }

        if (options.port === undefined && !options.server && !options.noServer) {
            throw new TypeError('invalid options');
        }

        var nativeOptions = WebSocketClient.PERMESSAGE_DEFLATE;

        if (options.perMessageDeflate !== undefined) {
            if (options.perMessageDeflate === false) {
                nativeOptions = 0;
            }
        }

        this.serverGroup = native.server.group.create(nativeOptions, options.maxPayload === undefined ? DEFAULT_PAYLOAD_LIMIT : options.maxPayload);

        // can these be made private?
        this._upgradeCallback = noop;
        this._upgradeListener = null;
        this._noDelay = options.noDelay === undefined ? true : options.noDelay;
        this._lastUpgradeListener = true;
        this._passedHttpServer = options.server;

        if (!options.noServer) {
            this.httpServer = options.server ? options.server : http.createServer((request, response) => {
                // todo: default HTTP response
                response.end();
            });

            if (options.path && (!options.path.length || options.path[0] !== '/')) {
                options.path = '/' + options.path;
            }

            this.httpServer.on('upgrade', this._upgradeListener = ((request, socket, head) => {
                if (!options.path || options.path == request.url.split('?')[0].split('#')[0]) {
                    if (options.verifyClient) {
                        const info = {
                            origin: request.headers.origin,
                            secure: request.connection.authorized !== undefined || request.connection.encrypted !== undefined,
                            req: request
                        };

                        if (options.verifyClient.length === 2) {
                            options.verifyClient(info, (result, code, name) => {
                                if (result) {
                                    this.handleUpgrade(request, socket, head, emitConnection);
                                } else {
                                    abortConnection(socket, code, name);
                                }
                            });
                        } else {
                            if (options.verifyClient(info)) {
                                this.handleUpgrade(request, socket, head, emitConnection);
                            } else {
                                abortConnection(socket, 400, 'Client verification failed');
                            }
                        }
                    } else {
                        this.handleUpgrade(request, socket, head, emitConnection);
                    }
                } else {
                    if (this._lastUpgradeListener) {
                        abortConnection(socket, 400, 'URL not supported');
                    }
                }
            }));

            this.httpServer.on('newListener', (eventName, listener) => {
                if (eventName === 'upgrade') {
                    this._lastUpgradeListener = false;
                }
            });

            this.httpServer.on('error', (err) => {
                this.emit('error', err);
            });
        }

        native.server.group.onDisconnection(this.serverGroup, (external, code, message, webSocket) => {
            webSocket.external = null;

            process.nextTick(() => {
                webSocket.internalOnClose(code, message);
            });

            native.clearUserData(external);
        });

        native.server.group.onMessage(this.serverGroup, onServerMessage);

        native.server.group.onPing(this.serverGroup, (message, webSocket) => {
            webSocket.onping(message);
        });

        native.server.group.onPong(this.serverGroup, (message, webSocket) => {
            webSocket.onpong(message);
        });

        native.server.group.onConnection(this.serverGroup, (external) => {
            const webSocket = new WebSocket(external);

            native.setUserData(external, webSocket);
            this._upgradeCallback(webSocket);
            _upgradeReq = null;
        });

        if (options.port !== undefined) {
            if (options.host) {
                this.httpServer.listen(options.port, options.host, () => {
                    this.emit('listening');
                    callback && callback();
                });
            } else {
                this.httpServer.listen(options.port, () => {
                    this.emit('listening');
                    callback && callback();
                });
            }
        }
    }

    handleUpgrade(request, socket, upgradeHead, callback) {
        if (socket._isNative) {
            if (this.serverGroup) {
                _upgradeReq = request;
                this._upgradeCallback = callback ? callback : noop;
                native.upgrade(this.serverGroup, socket.external, secKey, request.headers['sec-websocket-extensions'], request.headers['sec-websocket-protocol']);
            }
        } else {
            const secKey = request.headers['sec-websocket-key'];
            const socketHandle = socket.ssl ? socket._parent._handle : socket._handle;
            const sslState = socket.ssl ? socket.ssl._external : null;
            if (socketHandle && secKey && secKey.length == 24) {
                socket.setNoDelay(this._noDelay);
                const ticket = native.transfer(socketHandle.fd === -1 ? socketHandle : socketHandle.fd, sslState);
                socket.on('close', (error) => {
                    if (this.serverGroup) {
                        _upgradeReq = request;
                        this._upgradeCallback = callback ? callback : noop;
                        native.upgrade(this.serverGroup, ticket, secKey, request.headers['sec-websocket-extensions'], request.headers['sec-websocket-protocol']);
                    }
                });
            }
            socket.destroy();
        }
    }

    broadcast(message, options) {
        if (this.serverGroup) {
            native.server.group.broadcast(this.serverGroup, message, options && options.binary || false);
        }
    }

    startAutoPing(interval, userMessage) {
        if (this.serverGroup) {
            native.server.group.startAutoPing(this.serverGroup, interval, userMessage);
        }
    }

    close(cb) {
        if (this._upgradeListener && this.httpServer) {
            this.httpServer.removeListener('upgrade', this._upgradeListener);

            if (!this._passedHttpServer) {
                this.httpServer.close();
            }
        }

        if (this.serverGroup) {
            native.server.group.close(this.serverGroup);
            this.serverGroup = null;
        }

        if (typeof cb === 'function') {
            // compatibility hack, 15 seconds timeout
            setTimeout(cb, 20000);
        }
    }

    get clients() {
        if (this.serverGroup) {
            return {
                length: native.server.group.getSize(this.serverGroup),
                forEach: ((cb) => {native.server.group.forEach(this.serverGroup, cb)})
            };
        }
    }
}

WebSocketClient.PERMESSAGE_DEFLATE = 1;
WebSocketClient.SERVER_NO_CONTEXT_TAKEOVER = 2;
WebSocketClient.CLIENT_NO_CONTEXT_TAKEOVER = 4;
WebSocketClient.OPCODE_TEXT = 1;
WebSocketClient.OPCODE_BINARY = 2;
WebSocketClient.OPCODE_PING = 9;
WebSocketClient.OPEN = 1;
WebSocketClient.CLOSED = 0;
WebSocketClient.Server = Server;
WebSocketClient.http = native.httpServer;
WebSocketClient.native = native;
module.exports = WebSocketClient;
