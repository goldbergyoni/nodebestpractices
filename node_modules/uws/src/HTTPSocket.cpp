#include "HTTPSocket.h"
#include "Group.h"
#include "Extensions.h"
#include <cstdio>

#define MAX_HEADERS 100
#define MAX_HEADER_BUFFER_SIZE 4096
#define FORCE_SLOW_PATH false

namespace uWS {

// UNSAFETY NOTE: assumes *end == '\r' (might unref end pointer)
char *getHeaders(char *buffer, char *end, Header *headers, size_t maxHeaders) {
    for (unsigned int i = 0; i < maxHeaders; i++) {
        for (headers->key = buffer; (*buffer != ':') & (*buffer > 32); *(buffer++) |= 32);
        if (*buffer == '\r') {
            if ((buffer != end) & (buffer[1] == '\n') & (i > 0)) {
                headers->key = nullptr;
                return buffer + 2;
            } else {
                return nullptr;
            }
        } else {
            headers->keyLength = buffer - headers->key;
            for (buffer++; (*buffer == ':' || *buffer < 33) && *buffer != '\r'; buffer++);
            headers->value = buffer;
            buffer = (char *) memchr(buffer, '\r', end - buffer); //for (; *buffer != '\r'; buffer++);
            if (buffer /*!= end*/ && buffer[1] == '\n') {
                headers->valueLength = buffer - headers->value;
                buffer += 2;
                headers++;
            } else {
                return nullptr;
            }
        }
    }
    return nullptr;
}

// UNSAFETY NOTE: assumes 24 byte input length
static void base64(unsigned char *src, char *dst) {
    static const char *b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (int i = 0; i < 18; i += 3) {
        *dst++ = b64[(src[i] >> 2) & 63];
        *dst++ = b64[((src[i] & 3) << 4) | ((src[i + 1] & 240) >> 4)];
        *dst++ = b64[((src[i + 1] & 15) << 2) | ((src[i + 2] & 192) >> 6)];
        *dst++ = b64[src[i + 2] & 63];
    }
    *dst++ = b64[(src[18] >> 2) & 63];
    *dst++ = b64[((src[18] & 3) << 4) | ((src[19] & 240) >> 4)];
    *dst++ = b64[((src[19] & 15) << 2)];
    *dst++ = '=';
}

template <bool isServer>
uS::Socket *HttpSocket<isServer>::onData(uS::Socket *s, char *data, size_t length) {
    HttpSocket<isServer> *httpSocket = (HttpSocket<isServer> *) s;

    httpSocket->cork(true);

    if (httpSocket->contentLength) {
        httpSocket->missedDeadline = false;
        if (httpSocket->contentLength >= length) {
            Group<isServer>::from(httpSocket)->httpDataHandler(httpSocket->outstandingResponsesTail, data, length, httpSocket->contentLength -= length);
            return httpSocket;
        } else {
            Group<isServer>::from(httpSocket)->httpDataHandler(httpSocket->outstandingResponsesTail, data, httpSocket->contentLength, 0);
            data += httpSocket->contentLength;
            length -= httpSocket->contentLength;
            httpSocket->contentLength = 0;
        }
    }

    if (FORCE_SLOW_PATH || httpSocket->httpBuffer.length()) {
        if (httpSocket->httpBuffer.length() + length > MAX_HEADER_BUFFER_SIZE) {
            httpSocket->onEnd(httpSocket);
            return httpSocket;
        }

        httpSocket->httpBuffer.reserve(httpSocket->httpBuffer.length() + length + WebSocketProtocol<uWS::CLIENT, WebSocket<uWS::CLIENT>>::CONSUME_POST_PADDING);
        httpSocket->httpBuffer.append(data, length);
        data = (char *) httpSocket->httpBuffer.data();
        length = httpSocket->httpBuffer.length();
    }

    char *end = data + length;
    char *cursor = data;
    *end = '\r';
    Header headers[MAX_HEADERS];
    do {
        char *lastCursor = cursor;
        if ((cursor = getHeaders(cursor, end, headers, MAX_HEADERS))) {
            HttpRequest req(headers);

            if (isServer) {
                headers->valueLength = std::max<int>(0, headers->valueLength - 9);
                httpSocket->missedDeadline = false;
                if (req.getHeader("upgrade", 7)) {
                    if (Group<SERVER>::from(httpSocket)->httpUpgradeHandler) {
                        Group<SERVER>::from(httpSocket)->httpUpgradeHandler((HttpSocket<SERVER> *) httpSocket, req);
                    } else {
                        Header secKey = req.getHeader("sec-websocket-key", 17);
                        Header extensions = req.getHeader("sec-websocket-extensions", 24);
                        Header subprotocol = req.getHeader("sec-websocket-protocol", 22);
                        if (secKey.valueLength == 24) {
                            bool perMessageDeflate;
                            httpSocket->upgrade(secKey.value, extensions.value, extensions.valueLength,
                                               subprotocol.value, subprotocol.valueLength, &perMessageDeflate);
                            Group<isServer>::from(httpSocket)->removeHttpSocket(httpSocket);

                            // Warning: changes socket, needs to inform the stack of Poll address change!
                            WebSocket<isServer> *webSocket = new WebSocket<isServer>(perMessageDeflate, httpSocket);
                            webSocket->template setState<WebSocket<isServer>>();
                            webSocket->change(webSocket->nodeData->loop, webSocket, webSocket->setPoll(UV_READABLE));
                            Group<isServer>::from(webSocket)->addWebSocket(webSocket);

                            webSocket->cork(true);
                            Group<isServer>::from(webSocket)->connectionHandler(webSocket, req);
                            // todo: should not uncork if closed!
                            webSocket->cork(false);
                            delete httpSocket;

                            return webSocket;
                        } else {
                            httpSocket->onEnd(httpSocket);
                        }
                    }
                    return httpSocket;
                } else {
                    if (Group<SERVER>::from(httpSocket)->httpRequestHandler) {

                        HttpResponse *res = HttpResponse::allocateResponse(httpSocket);
                        if (httpSocket->outstandingResponsesTail) {
                            httpSocket->outstandingResponsesTail->next = res;
                        } else {
                            httpSocket->outstandingResponsesHead = res;
                        }
                        httpSocket->outstandingResponsesTail = res;

                        Header contentLength;
                        if (req.getMethod() != HttpMethod::METHOD_GET && (contentLength = req.getHeader("content-length", 14))) {
                            httpSocket->contentLength = atoi(contentLength.value);
                            size_t bytesToRead = std::min<int>(httpSocket->contentLength, end - cursor);
                            Group<SERVER>::from(httpSocket)->httpRequestHandler(res, req, cursor, bytesToRead, httpSocket->contentLength -= bytesToRead);
                            cursor += bytesToRead;
                        } else {
                            Group<SERVER>::from(httpSocket)->httpRequestHandler(res, req, nullptr, 0, 0);
                        }

                        if (httpSocket->isClosed() || httpSocket->isShuttingDown()) {
                            return httpSocket;
                        }
                    } else {
                        httpSocket->onEnd(httpSocket);
                        return httpSocket;
                    }
                }
            } else {
                if (req.getHeader("upgrade", 7)) {

                    // Warning: changes socket, needs to inform the stack of Poll address change!
                    WebSocket<isServer> *webSocket = new WebSocket<isServer>(false, httpSocket);
                    httpSocket->cancelTimeout();
                    webSocket->setUserData(httpSocket->httpUser);
                    webSocket->template setState<WebSocket<isServer>>();
                    webSocket->change(webSocket->nodeData->loop, webSocket, webSocket->setPoll(UV_READABLE));
                    Group<isServer>::from(webSocket)->addWebSocket(webSocket);

                    webSocket->cork(true);
                    Group<isServer>::from(webSocket)->connectionHandler(webSocket, req);
                    if (!(webSocket->isClosed() || webSocket->isShuttingDown())) {
                        WebSocketProtocol<isServer, WebSocket<isServer>>::consume(cursor, end - cursor, webSocket);
                    }
                    webSocket->cork(false);
                    delete httpSocket;

                    return webSocket;
                } else {
                    httpSocket->onEnd(httpSocket);
                }
                return httpSocket;
            }
        } else {
            if (!httpSocket->httpBuffer.length()) {
                if (length > MAX_HEADER_BUFFER_SIZE) {
                    httpSocket->onEnd(httpSocket);
                } else {
                    httpSocket->httpBuffer.append(lastCursor, end - lastCursor);
                }
            }
            return httpSocket;
        }
    } while(cursor != end);

    httpSocket->cork(false);
    httpSocket->httpBuffer.clear();

    return httpSocket;
}

// todo: make this into a transformer and make use of sendTransformed
template <bool isServer>
void HttpSocket<isServer>::upgrade(const char *secKey, const char *extensions, size_t extensionsLength,
                                   const char *subprotocol, size_t subprotocolLength, bool *perMessageDeflate) {

    Queue::Message *messagePtr;

    if (isServer) {
        *perMessageDeflate = false;
        std::string extensionsResponse;
        if (extensionsLength) {
            Group<isServer> *group = Group<isServer>::from(this);
            ExtensionsNegotiator<uWS::SERVER> extensionsNegotiator(group->extensionOptions);
            extensionsNegotiator.readOffer(std::string(extensions, extensionsLength));
            extensionsResponse = extensionsNegotiator.generateOffer();
            if (extensionsNegotiator.getNegotiatedOptions() & PERMESSAGE_DEFLATE) {
                *perMessageDeflate = true;
            }
        }

        unsigned char shaInput[] = "XXXXXXXXXXXXXXXXXXXXXXXX258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
        memcpy(shaInput, secKey, 24);
        unsigned char shaDigest[SHA_DIGEST_LENGTH];
        SHA1(shaInput, sizeof(shaInput) - 1, shaDigest);

        char upgradeBuffer[1024];
        memcpy(upgradeBuffer, "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ", 97);
        base64(shaDigest, upgradeBuffer + 97);
        memcpy(upgradeBuffer + 125, "\r\n", 2);
        size_t upgradeResponseLength = 127;
        if (extensionsResponse.length() && extensionsResponse.length() < 200) {
            memcpy(upgradeBuffer + upgradeResponseLength, "Sec-WebSocket-Extensions: ", 26);
            memcpy(upgradeBuffer + upgradeResponseLength + 26, extensionsResponse.data(), extensionsResponse.length());
            memcpy(upgradeBuffer + upgradeResponseLength + 26 + extensionsResponse.length(), "\r\n", 2);
            upgradeResponseLength += 26 + extensionsResponse.length() + 2;
        }
        if (subprotocolLength && subprotocolLength < 200) {
            memcpy(upgradeBuffer + upgradeResponseLength, "Sec-WebSocket-Protocol: ", 24);
            memcpy(upgradeBuffer + upgradeResponseLength + 24, subprotocol, subprotocolLength);
            memcpy(upgradeBuffer + upgradeResponseLength + 24 + subprotocolLength, "\r\n", 2);
            upgradeResponseLength += 24 + subprotocolLength + 2;
        }
        static char stamp[] = "Sec-WebSocket-Version: 13\r\nWebSocket-Server: uWebSockets\r\n\r\n";
        memcpy(upgradeBuffer + upgradeResponseLength, stamp, sizeof(stamp) - 1);
        upgradeResponseLength += sizeof(stamp) - 1;

        messagePtr = allocMessage(upgradeResponseLength, upgradeBuffer);
    } else {
        messagePtr = allocMessage(httpBuffer.length(), httpBuffer.data());
        httpBuffer.clear();
    }

    bool wasTransferred;
    if (write(messagePtr, wasTransferred)) {
        if (!wasTransferred) {
            freeMessage(messagePtr);
        } else {
            messagePtr->callback = nullptr;
        }
    } else {
        freeMessage(messagePtr);
    }
}

template <bool isServer>
void HttpSocket<isServer>::onEnd(uS::Socket *s) {
    HttpSocket<isServer> *httpSocket = (HttpSocket<isServer> *) s;

    if (!httpSocket->isShuttingDown()) {
        if (isServer) {
            Group<isServer>::from(httpSocket)->removeHttpSocket(httpSocket);
            Group<isServer>::from(httpSocket)->httpDisconnectionHandler(httpSocket);
        }
    } else {
        httpSocket->cancelTimeout();
    }

    httpSocket->template closeSocket<HttpSocket<isServer>>();

    while (!httpSocket->messageQueue.empty()) {
        Queue::Message *message = httpSocket->messageQueue.front();
        if (message->callback) {
            message->callback(nullptr, message->callbackData, true, nullptr);
        }
        httpSocket->messageQueue.pop();
    }

    while (httpSocket->outstandingResponsesHead) {
        Group<isServer>::from(httpSocket)->httpCancelledRequestHandler(httpSocket->outstandingResponsesHead);
        HttpResponse *next = httpSocket->outstandingResponsesHead->next;
        delete httpSocket->outstandingResponsesHead;
        httpSocket->outstandingResponsesHead = next;
    }

    if (httpSocket->preAllocatedResponse) {
        delete httpSocket->preAllocatedResponse;
    }

    httpSocket->nodeData->clearPendingPollChanges(httpSocket);

    if (!isServer) {
        httpSocket->cancelTimeout();
        Group<CLIENT>::from(httpSocket)->errorHandler(httpSocket->httpUser);
    }
}

template struct HttpSocket<SERVER>;
template struct HttpSocket<CLIENT>;

}
