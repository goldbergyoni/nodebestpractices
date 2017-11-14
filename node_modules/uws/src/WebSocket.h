#ifndef WEBSOCKET_UWS_H
#define WEBSOCKET_UWS_H

#include "WebSocketProtocol.h"
#include "Socket.h"

namespace uWS {

template <bool isServer>
struct Group;

template <bool isServer>
struct HttpSocket;

template <const bool isServer>
struct WIN32_EXPORT WebSocket : uS::Socket, WebSocketState<isServer> {
protected:
    std::string fragmentBuffer;
    enum CompressionStatus : char {
        DISABLED,
        ENABLED,
        COMPRESSED_FRAME
    } compressionStatus;
    unsigned char controlTipLength = 0, hasOutstandingPong = false;

    WebSocket(bool perMessageDeflate, uS::Socket *socket) : uS::Socket(std::move(*socket)) {
        compressionStatus = perMessageDeflate ? CompressionStatus::ENABLED : CompressionStatus::DISABLED;
    }

    static uS::Socket *onData(uS::Socket *s, char *data, size_t length);
    static void onEnd(uS::Socket *s);
    using uS::Socket::closeSocket;

    static bool refusePayloadLength(uint64_t length, WebSocketState<isServer> *webSocketState) {
        WebSocket<isServer> *webSocket = static_cast<WebSocket<isServer> *>(webSocketState);
        return length > Group<isServer>::from(webSocket)->maxPayload;
    }

    static bool setCompressed(WebSocketState<isServer> *webSocketState) {
        WebSocket<isServer> *webSocket = static_cast<WebSocket<isServer> *>(webSocketState);

        if (webSocket->compressionStatus == WebSocket<isServer>::CompressionStatus::ENABLED) {
            webSocket->compressionStatus = WebSocket<isServer>::CompressionStatus::COMPRESSED_FRAME;
            return true;
        } else {
            return false;
        }
    }

    static void forceClose(WebSocketState<isServer> *webSocketState) {
        WebSocket<isServer> *webSocket = static_cast<WebSocket<isServer> *>(webSocketState);
        webSocket->terminate();
    }

    static bool handleFragment(char *data, size_t length, unsigned int remainingBytes, int opCode, bool fin, WebSocketState<isServer> *webSocketState);

public:
    struct PreparedMessage {
        char *buffer;
        size_t length;
        int references;
        void(*callback)(void *webSocket, void *data, bool cancelled, void *reserved);
    };

    // Not thread safe
    void sendPrepared(PreparedMessage *preparedMessage, void *callbackData = nullptr);
    static void finalizeMessage(PreparedMessage *preparedMessage);
    void close(int code = 1000, const char *message = nullptr, size_t length = 0);
    void transfer(Group<isServer> *group);

    // Thread safe
    void terminate();
    void ping(const char *message) {send(message, OpCode::PING);}
    void send(const char *message, OpCode opCode = OpCode::TEXT) {send(message, strlen(message), opCode);}
    void send(const char *message, size_t length, OpCode opCode, void(*callback)(WebSocket<isServer> *webSocket, void *data, bool cancelled, void *reserved) = nullptr, void *callbackData = nullptr);
    static PreparedMessage *prepareMessage(char *data, size_t length, OpCode opCode, bool compressed, void(*callback)(WebSocket<isServer> *webSocket, void *data, bool cancelled, void *reserved) = nullptr);
    static PreparedMessage *prepareMessageBatch(std::vector<std::string> &messages, std::vector<int> &excludedMessages,
                                                OpCode opCode, bool compressed, void(*callback)(WebSocket<isServer> *webSocket, void *data, bool cancelled, void *reserved) = nullptr);

    friend struct Hub;
    friend struct Group<isServer>;
    friend struct HttpSocket<isServer>;
    friend struct uS::Socket;
    friend class WebSocketProtocol<isServer, WebSocket<isServer>>;
};

}

#endif // WEBSOCKET_UWS_H
