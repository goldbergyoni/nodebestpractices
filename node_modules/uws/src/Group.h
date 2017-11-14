#ifndef GROUP_UWS_H
#define GROUP_UWS_H

#include "WebSocket.h"
#include "HTTPSocket.h"
#include "Extensions.h"
#include <functional>
#include <stack>

namespace uWS {

enum ListenOptions {
    TRANSFERS
};

struct Hub;

template <bool isServer>
struct WIN32_EXPORT Group : private uS::NodeData {
protected:
    friend struct Hub;
    friend struct WebSocket<isServer>;
    friend struct HttpSocket<false>;
    friend struct HttpSocket<true>;

    std::function<void(WebSocket<isServer> *, HttpRequest)> connectionHandler;
    std::function<void(WebSocket<isServer> *)> transferHandler;
    std::function<void(WebSocket<isServer> *, char *message, size_t length, OpCode opCode)> messageHandler;
    std::function<void(WebSocket<isServer> *, int code, char *message, size_t length)> disconnectionHandler;
    std::function<void(WebSocket<isServer> *, char *, size_t)> pingHandler;
    std::function<void(WebSocket<isServer> *, char *, size_t)> pongHandler;
    std::function<void(HttpSocket<isServer> *)> httpConnectionHandler;
    std::function<void(HttpResponse *, HttpRequest, char *, size_t, size_t)> httpRequestHandler;
    std::function<void(HttpResponse *, char *, size_t, size_t)> httpDataHandler;
    std::function<void(HttpResponse *)> httpCancelledRequestHandler;
    std::function<void(HttpSocket<isServer> *)> httpDisconnectionHandler;
    std::function<void(HttpSocket<isServer> *, HttpRequest)> httpUpgradeHandler;

    using errorType = typename std::conditional<isServer, int, void *>::type;
    std::function<void(errorType)> errorHandler;

    unsigned int maxPayload;
    Hub *hub;
    int extensionOptions;
    Timer *timer = nullptr, *httpTimer = nullptr;
    std::string userPingMessage;
    std::stack<Poll *> iterators;

    // todo: cannot be named user, collides with parent!
    void *userData = nullptr;
    static void timerCallback(Timer *timer);

    WebSocket<isServer> *webSocketHead = nullptr;
    HttpSocket<isServer> *httpSocketHead = nullptr;

    void addWebSocket(WebSocket<isServer> *webSocket);
    void removeWebSocket(WebSocket<isServer> *webSocket);

    // todo: remove these, template
    void addHttpSocket(HttpSocket<isServer> *httpSocket);
    void removeHttpSocket(HttpSocket<isServer> *httpSocket);

    Group(int extensionOptions, unsigned int maxPayload, Hub *hub, uS::NodeData *nodeData);
    void stopListening();

public:
    void onConnection(std::function<void(WebSocket<isServer> *, HttpRequest)> handler);
    void onTransfer(std::function<void(WebSocket<isServer> *)> handler);
    void onMessage(std::function<void(WebSocket<isServer> *, char *, size_t, OpCode)> handler);
    void onDisconnection(std::function<void(WebSocket<isServer> *, int code, char *message, size_t length)> handler);
    void onPing(std::function<void(WebSocket<isServer> *, char *, size_t)> handler);
    void onPong(std::function<void(WebSocket<isServer> *, char *, size_t)> handler);
    void onError(std::function<void(errorType)> handler);
    void onHttpConnection(std::function<void(HttpSocket<isServer> *)> handler);
    void onHttpRequest(std::function<void(HttpResponse *, HttpRequest, char *data, size_t length, size_t remainingBytes)> handler);
    void onHttpData(std::function<void(HttpResponse *, char *data, size_t length, size_t remainingBytes)> handler);
    void onHttpDisconnection(std::function<void(HttpSocket<isServer> *)> handler);
    void onCancelledHttpRequest(std::function<void(HttpResponse *)> handler);
    void onHttpUpgrade(std::function<void(HttpSocket<isServer> *, HttpRequest)> handler);

    // Thread safe
    void broadcast(const char *message, size_t length, OpCode opCode);
    void setUserData(void *user);
    void *getUserData();

    // Not thread safe
    void terminate();
    void close(int code = 1000, char *message = nullptr, size_t length = 0);
    void startAutoPing(int intervalMs, std::string userMessage = "");

    // same as listen(TRANSFERS), backwards compatible API for now
    void addAsync() {
        if (!async) {
            NodeData::addAsync();
        }
    }

    void listen(ListenOptions listenOptions) {
        if (listenOptions == TRANSFERS && !async) {
            addAsync();
        }
    }

    template <class F>
    void forEach(const F &cb) {
        Poll *iterator = webSocketHead;
        iterators.push(iterator);
        while (iterator) {
            Poll *lastIterator = iterator;
            cb((WebSocket<isServer> *) iterator);
            iterator = iterators.top();
            if (lastIterator == iterator) {
                iterator = ((uS::Socket *) iterator)->next;
                iterators.top() = iterator;
            }
        }
        iterators.pop();
    }

    // duplicated code for now!
    template <class F>
    void forEachHttpSocket(const F &cb) {
        Poll *iterator = httpSocketHead;
        iterators.push(iterator);
        while (iterator) {
            Poll *lastIterator = iterator;
            cb((HttpSocket<isServer> *) iterator);
            iterator = iterators.top();
            if (lastIterator == iterator) {
                iterator = ((uS::Socket *) iterator)->next;
                iterators.top() = iterator;
            }
        }
        iterators.pop();
    }

    static Group<isServer> *from(uS::Socket *s) {
        return static_cast<Group<isServer> *>(s->getNodeData());
    }
};

}

#endif // GROUP_UWS_H
