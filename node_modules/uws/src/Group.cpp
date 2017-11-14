#include "Group.h"
#include "Hub.h"

namespace uWS {

template <bool isServer>
void Group<isServer>::setUserData(void *user) {
    this->userData = user;
}

template <bool isServer>
void *Group<isServer>::getUserData() {
    return userData;
}

template <bool isServer>
void Group<isServer>::timerCallback(Timer *timer) {
    Group<isServer> *group = (Group<isServer> *) timer->getData();

    group->forEach([](uWS::WebSocket<isServer> *webSocket) {
        if (webSocket->hasOutstandingPong) {
            webSocket->terminate();
        } else {
            webSocket->hasOutstandingPong = true;
        }
    });

    if (group->userPingMessage.length()) {
        group->broadcast(group->userPingMessage.data(), group->userPingMessage.length(), OpCode::TEXT);
    } else {
        group->broadcast(nullptr, 0, OpCode::PING);
    }
}

template <bool isServer>
void Group<isServer>::startAutoPing(int intervalMs, std::string userMessage) {
    timer = new Timer(loop);
    timer->setData(this);
    timer->start(timerCallback, intervalMs, intervalMs);
    userPingMessage = userMessage;
}

template <bool isServer>
void Group<isServer>::addHttpSocket(HttpSocket<isServer> *httpSocket) {
    if (httpSocketHead) {
        httpSocketHead->prev = httpSocket;
        httpSocket->next = httpSocketHead;
    } else {
        httpSocket->next = nullptr;
        // start timer
        httpTimer = new Timer(hub->getLoop());
        httpTimer->setData(this);
        httpTimer->start([](Timer *httpTimer) {
            Group<isServer> *group = (Group<isServer> *) httpTimer->getData();
            group->forEachHttpSocket([](HttpSocket<isServer> *httpSocket) {
                if (httpSocket->missedDeadline) {
                    httpSocket->terminate();
                } else if (!httpSocket->outstandingResponsesHead) {
                    httpSocket->missedDeadline = true;
                }
            });
        }, 1000, 1000);
    }
    httpSocketHead = httpSocket;
    httpSocket->prev = nullptr;
}

template <bool isServer>
void Group<isServer>::removeHttpSocket(HttpSocket<isServer> *httpSocket) {
    if (iterators.size()) {
        iterators.top() = httpSocket->next;
    }
    if (httpSocket->prev == httpSocket->next) {
        httpSocketHead = nullptr;
        httpTimer->stop();
        httpTimer->close();
    } else {
        if (httpSocket->prev) {
            ((HttpSocket<isServer> *) httpSocket->prev)->next = httpSocket->next;
        } else {
            httpSocketHead = (HttpSocket<isServer> *) httpSocket->next;
        }
        if (httpSocket->next) {
            ((HttpSocket<isServer> *) httpSocket->next)->prev = httpSocket->prev;
        }
    }
}

template <bool isServer>
void Group<isServer>::addWebSocket(WebSocket<isServer> *webSocket) {
    if (webSocketHead) {
        webSocketHead->prev = webSocket;
        webSocket->next = webSocketHead;
    } else {
        webSocket->next = nullptr;
    }
    webSocketHead = webSocket;
    webSocket->prev = nullptr;
}

template <bool isServer>
void Group<isServer>::removeWebSocket(WebSocket<isServer> *webSocket) {
    if (iterators.size()) {
        iterators.top() = webSocket->next;
    }
    if (webSocket->prev == webSocket->next) {
        webSocketHead = nullptr;
    } else {
        if (webSocket->prev) {
            ((WebSocket<isServer> *) webSocket->prev)->next = webSocket->next;
        } else {
            webSocketHead = (WebSocket<isServer> *) webSocket->next;
        }
        if (webSocket->next) {
            ((WebSocket<isServer> *) webSocket->next)->prev = webSocket->prev;
        }
    }
}

template <bool isServer>
Group<isServer>::Group(int extensionOptions, unsigned int maxPayload, Hub *hub, uS::NodeData *nodeData) : uS::NodeData(*nodeData), maxPayload(maxPayload), hub(hub), extensionOptions(extensionOptions) {
    connectionHandler = [](WebSocket<isServer> *, HttpRequest) {};
    transferHandler = [](WebSocket<isServer> *) {};
    messageHandler = [](WebSocket<isServer> *, char *, size_t, OpCode) {};
    disconnectionHandler = [](WebSocket<isServer> *, int, char *, size_t) {};
    pingHandler = pongHandler = [](WebSocket<isServer> *, char *, size_t) {};
    errorHandler = [](errorType) {};
    httpRequestHandler = [](HttpResponse *, HttpRequest, char *, size_t, size_t) {};
    httpConnectionHandler = [](HttpSocket<isServer> *) {};
    httpDisconnectionHandler = [](HttpSocket<isServer> *) {};
    httpCancelledRequestHandler = [](HttpResponse *) {};
    httpDataHandler = [](HttpResponse *, char *, size_t, size_t) {};

    this->extensionOptions |= CLIENT_NO_CONTEXT_TAKEOVER | SERVER_NO_CONTEXT_TAKEOVER;
}

template <bool isServer>
void Group<isServer>::stopListening() {
    if (isServer) {
        if (user) {
            // todo: we should allow one group to listen to many ports!
            uS::ListenSocket *listenSocket = (uS::ListenSocket *) user;

            if (listenSocket->timer) {
                listenSocket->timer->stop();
                listenSocket->timer->close();
            }

            listenSocket->closeSocket<uS::ListenSocket>();

            // mark as stopped listening (extra care?)
            user = nullptr;
        }
    }

    if (async) {
        async->close();
    }
}

template <bool isServer>
void Group<isServer>::onConnection(std::function<void (WebSocket<isServer> *, HttpRequest)> handler) {
    connectionHandler = handler;
}

template <bool isServer>
void Group<isServer>::onTransfer(std::function<void (WebSocket<isServer> *)> handler) {
    transferHandler = handler;
}

template <bool isServer>
void Group<isServer>::onMessage(std::function<void (WebSocket<isServer> *, char *, size_t, OpCode)> handler) {
    messageHandler = handler;
}

template <bool isServer>
void Group<isServer>::onDisconnection(std::function<void (WebSocket<isServer> *, int, char *, size_t)> handler) {
    disconnectionHandler = handler;
}

template <bool isServer>
void Group<isServer>::onPing(std::function<void (WebSocket<isServer> *, char *, size_t)> handler) {
    pingHandler = handler;
}

template <bool isServer>
void Group<isServer>::onPong(std::function<void (WebSocket<isServer> *, char *, size_t)> handler) {
    pongHandler = handler;
}

template <bool isServer>
void Group<isServer>::onError(std::function<void (typename Group::errorType)> handler) {
    errorHandler = handler;
}

template <bool isServer>
void Group<isServer>::onHttpConnection(std::function<void (HttpSocket<isServer> *)> handler) {
    httpConnectionHandler = handler;
}

template <bool isServer>
void Group<isServer>::onHttpRequest(std::function<void (HttpResponse *, HttpRequest, char *, size_t, size_t)> handler) {
    httpRequestHandler = handler;
}

template <bool isServer>
void Group<isServer>::onHttpData(std::function<void(HttpResponse *, char *, size_t, size_t)> handler) {
    httpDataHandler = handler;
}

template <bool isServer>
void Group<isServer>::onHttpDisconnection(std::function<void (HttpSocket<isServer> *)> handler) {
    httpDisconnectionHandler = handler;
}

template <bool isServer>
void Group<isServer>::onCancelledHttpRequest(std::function<void (HttpResponse *)> handler) {
    httpCancelledRequestHandler = handler;
}

template <bool isServer>
void Group<isServer>::onHttpUpgrade(std::function<void(HttpSocket<isServer> *, HttpRequest)> handler) {
    httpUpgradeHandler = handler;
}

template <bool isServer>
void Group<isServer>::broadcast(const char *message, size_t length, OpCode opCode) {

#ifdef UWS_THREADSAFE
    std::lock_guard<std::recursive_mutex> lockGuard(*asyncMutex);
#endif

    typename WebSocket<isServer>::PreparedMessage *preparedMessage = WebSocket<isServer>::prepareMessage((char *) message, length, opCode, false);
    forEach([preparedMessage](uWS::WebSocket<isServer> *ws) {
        ws->sendPrepared(preparedMessage);
    });
    WebSocket<isServer>::finalizeMessage(preparedMessage);
}

template <bool isServer>
void Group<isServer>::terminate() {
    forEach([](uWS::WebSocket<isServer> *ws) {
        ws->terminate();
    });
    stopListening();
}

template <bool isServer>
void Group<isServer>::close(int code, char *message, size_t length) {
    forEach([code, message, length](uWS::WebSocket<isServer> *ws) {
        ws->close(code, message, length);
    });
    stopListening();
    if (timer) {
        timer->stop();
        timer->close();
    }
}

template struct Group<true>;
template struct Group<false>;

}
