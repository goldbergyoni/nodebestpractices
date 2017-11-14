#include "Hub.h"
#include "HTTPSocket.h"
#include <openssl/sha.h>

namespace uWS {

char *Hub::inflate(char *data, size_t &length, size_t maxPayload) {
    dynamicInflationBuffer.clear();

    inflationStream.next_in = (Bytef *) data;
    inflationStream.avail_in = length;

    int err;
    do {
        inflationStream.next_out = (Bytef *) inflationBuffer;
        inflationStream.avail_out = LARGE_BUFFER_SIZE;
        err = ::inflate(&inflationStream, Z_FINISH);
        if (!inflationStream.avail_in) {
            break;
        }

        dynamicInflationBuffer.append(inflationBuffer, LARGE_BUFFER_SIZE - inflationStream.avail_out);
    } while (err == Z_BUF_ERROR && dynamicInflationBuffer.length() <= maxPayload);

    inflateReset(&inflationStream);

    if ((err != Z_BUF_ERROR && err != Z_OK) || dynamicInflationBuffer.length() > maxPayload) {
        length = 0;
        return nullptr;
    }

    if (dynamicInflationBuffer.length()) {
        dynamicInflationBuffer.append(inflationBuffer, LARGE_BUFFER_SIZE - inflationStream.avail_out);

        length = dynamicInflationBuffer.length();
        return (char *) dynamicInflationBuffer.data();
    }

    length = LARGE_BUFFER_SIZE - inflationStream.avail_out;
    return inflationBuffer;
}

void Hub::onServerAccept(uS::Socket *s) {
    HttpSocket<SERVER> *httpSocket = new HttpSocket<SERVER>(s);
    delete s;

    httpSocket->setState<HttpSocket<SERVER>>();
    httpSocket->start(httpSocket->nodeData->loop, httpSocket, httpSocket->setPoll(UV_READABLE));
    httpSocket->setNoDelay(true);
    Group<SERVER>::from(httpSocket)->addHttpSocket(httpSocket);
    Group<SERVER>::from(httpSocket)->httpConnectionHandler(httpSocket);
}

void Hub::onClientConnection(uS::Socket *s, bool error) {
    HttpSocket<CLIENT> *httpSocket = (HttpSocket<CLIENT> *) s;

    if (error) {
        httpSocket->onEnd(httpSocket);
    } else {
        httpSocket->setState<HttpSocket<CLIENT>>();
        httpSocket->change(httpSocket->nodeData->loop, httpSocket, httpSocket->setPoll(UV_READABLE));
        httpSocket->setNoDelay(true);
        httpSocket->upgrade(nullptr, nullptr, 0, nullptr, 0, nullptr);
    }
}

bool Hub::listen(const char *host, int port, uS::TLS::Context sslContext, int options, Group<SERVER> *eh) {
    if (!eh) {
        eh = (Group<SERVER> *) this;
    }

    if (uS::Node::listen<onServerAccept>(host, port, sslContext, options, (uS::NodeData *) eh, nullptr)) {
        eh->errorHandler(port);
        return false;
    }
    return true;
}

bool Hub::listen(int port, uS::TLS::Context sslContext, int options, Group<SERVER> *eh) {
    return listen(nullptr, port, sslContext, options, eh);
}

uS::Socket *allocateHttpSocket(uS::Socket *s) {
    return (uS::Socket *) new HttpSocket<CLIENT>(s);
}

void Hub::connect(std::string uri, void *user, std::map<std::string, std::string> extraHeaders, int timeoutMs, Group<CLIENT> *eh) {
    if (!eh) {
        eh = (Group<CLIENT> *) this;
    }

    size_t offset = 0;
    std::string protocol = uri.substr(offset, uri.find("://")), hostname, portStr, path;
    if ((offset += protocol.length() + 3) < uri.length()) {
        hostname = uri.substr(offset, uri.find_first_of(":/", offset) - offset);

        offset += hostname.length();
        if (uri[offset] == ':') {
            offset++;
            portStr = uri.substr(offset, uri.find("/", offset) - offset);
        }

        offset += portStr.length();
        if (uri[offset] == '/') {
            path = uri.substr(++offset);
        }
    }

    if (hostname.length()) {
        int port = 80;
        bool secure = false;
        if (protocol == "wss") {
            port = 443;
            secure = true;
        } else if (protocol != "ws") {
            eh->errorHandler(user);
        }

        if (portStr.length()) {
            port = stoi(portStr);
        }

        HttpSocket<CLIENT> *httpSocket = (HttpSocket<CLIENT> *) uS::Node::connect<allocateHttpSocket, onClientConnection>(hostname.c_str(), port, secure, eh);
        if (httpSocket) {
            // startTimeout occupies the user
            httpSocket->startTimeout<HttpSocket<CLIENT>::onEnd>(timeoutMs);
            httpSocket->httpUser = user;

            std::string randomKey = "x3JJHMbDL1EzLkh9GBhXDw==";
//            for (int i = 0; i < 22; i++) {
//                randomKey[i] = rand() %
//            }

            httpSocket->httpBuffer = "GET /" + path + " HTTP/1.1\r\n"
                                     "Upgrade: websocket\r\n"
                                     "Connection: Upgrade\r\n"
                                     "Sec-WebSocket-Key: " + randomKey + "\r\n"
                                     "Host: " + hostname + "\r\n" +
                                     "Sec-WebSocket-Version: 13\r\n";

            for (std::pair<std::string, std::string> header : extraHeaders) {
                httpSocket->httpBuffer += header.first + ": " + header.second + "\r\n";
            }

            httpSocket->httpBuffer += "\r\n";
        } else {
            eh->errorHandler(user);
        }
    } else {
        eh->errorHandler(user);
    }
}

void Hub::upgrade(uv_os_sock_t fd, const char *secKey, SSL *ssl, const char *extensions, size_t extensionsLength, const char *subprotocol, size_t subprotocolLength, Group<SERVER> *serverGroup) {
    if (!serverGroup) {
        serverGroup = &getDefaultGroup<SERVER>();
    }

    uS::Socket s((uS::NodeData *) serverGroup, serverGroup->loop, fd, ssl);
    s.setNoDelay(true);

    // todo: skip httpSocket -> it cannot fail anyways!
    HttpSocket<SERVER> *httpSocket = new HttpSocket<SERVER>(&s);
    httpSocket->setState<HttpSocket<SERVER>>();
    httpSocket->change(httpSocket->nodeData->loop, httpSocket, httpSocket->setPoll(UV_READABLE));
    bool perMessageDeflate;
    httpSocket->upgrade(secKey, extensions, extensionsLength, subprotocol, subprotocolLength, &perMessageDeflate);

    WebSocket<SERVER> *webSocket = new WebSocket<SERVER>(perMessageDeflate, httpSocket);
    delete httpSocket;
    webSocket->setState<WebSocket<SERVER>>();
    webSocket->change(webSocket->nodeData->loop, webSocket, webSocket->setPoll(UV_READABLE));
    serverGroup->addWebSocket(webSocket);
    serverGroup->connectionHandler(webSocket, {});
}

}
