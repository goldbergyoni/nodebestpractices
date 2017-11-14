#ifndef NODE_UWS_H
#define NODE_UWS_H

#include "Socket.h"
#include <vector>
#include <mutex>

namespace uS {

enum ListenOptions : int {
    REUSE_PORT = 1,
    ONLY_IPV4 = 2
};

class WIN32_EXPORT Node {
private:
    template <void C(Socket *p, bool error)>
    static void connect_cb(Poll *p, int status, int events) {
        C((Socket *) p, status < 0);
    }

    template <void A(Socket *s)>
    static void accept_poll_cb(Poll *p, int status, int events) {
        ListenSocket *listenData = (ListenSocket *) p;
        accept_cb<A, false>(listenData);
    }

    template <void A(Socket *s)>
    static void accept_timer_cb(Timer *p) {
        ListenSocket *listenData = (ListenSocket *) p->getData();
        accept_cb<A, true>(listenData);
    }

    template <void A(Socket *s), bool TIMER>
    static void accept_cb(ListenSocket *listenSocket) {
        uv_os_sock_t serverFd = listenSocket->getFd();
        Context *netContext = listenSocket->nodeData->netContext;
        uv_os_sock_t clientFd = netContext->acceptSocket(serverFd);
        if (clientFd == INVALID_SOCKET) {
            /*
            * If accept is failing, the pending connection won't be removed and the
            * polling will cause the server to spin, using 100% cpu. Switch to a timer
            * event instead to avoid this.
            */
            if (!TIMER && !netContext->wouldBlock()) {
                listenSocket->stop(listenSocket->nodeData->loop);

                listenSocket->timer = new Timer(listenSocket->nodeData->loop);
                listenSocket->timer->setData(listenSocket);
                listenSocket->timer->start(accept_timer_cb<A>, 1000, 1000);
            }
            return;
        } else if (TIMER) {
            listenSocket->timer->stop();
            listenSocket->timer->close();
            listenSocket->timer = nullptr;

            listenSocket->setCb(accept_poll_cb<A>);
            listenSocket->start(listenSocket->nodeData->loop, listenSocket, UV_READABLE);
        }
        do {
            SSL *ssl = nullptr;
            if (listenSocket->sslContext) {
                ssl = SSL_new(listenSocket->sslContext.getNativeContext());
                SSL_set_accept_state(ssl);
            }

            Socket *socket = new Socket(listenSocket->nodeData, listenSocket->nodeData->loop, clientFd, ssl);
            socket->setPoll(UV_READABLE);
            A(socket);
        } while ((clientFd = netContext->acceptSocket(serverFd)) != INVALID_SOCKET);
    }

protected:
    Loop *loop;
    NodeData *nodeData;
    std::recursive_mutex asyncMutex;

public:
    Node(int recvLength = 1024, int prePadding = 0, int postPadding = 0, bool useDefaultLoop = false);
    ~Node();
    void run();

    Loop *getLoop() {
        return loop;
    }

    template <uS::Socket *I(Socket *s), void C(Socket *p, bool error)>
    Socket *connect(const char *hostname, int port, bool secure, NodeData *nodeData) {
        Context *netContext = nodeData->netContext;

        addrinfo hints, *result;
        memset(&hints, 0, sizeof(addrinfo));
        hints.ai_family = AF_UNSPEC;
        hints.ai_socktype = SOCK_STREAM;
        if (getaddrinfo(hostname, std::to_string(port).c_str(), &hints, &result) != 0) {
            return nullptr;
        }

        uv_os_sock_t fd = netContext->createSocket(result->ai_family, result->ai_socktype, result->ai_protocol);
        if (fd == INVALID_SOCKET) {
            freeaddrinfo(result);
            return nullptr;
        }

        ::connect(fd, result->ai_addr, result->ai_addrlen);
        freeaddrinfo(result);

        SSL *ssl = nullptr;
        if (secure) {
            ssl = SSL_new(nodeData->clientContext);
            SSL_set_connect_state(ssl);
            SSL_set_tlsext_host_name(ssl, hostname);
        }

        Socket initialSocket(nodeData, getLoop(), fd, ssl);
        uS::Socket *socket = I(&initialSocket);

        socket->setCb(connect_cb<C>);
        socket->start(loop, socket, socket->setPoll(UV_WRITABLE));
        return socket;
    }

    // todo: hostname, backlog
    template <void A(Socket *s)>
    bool listen(const char *host, int port, uS::TLS::Context sslContext, int options, uS::NodeData *nodeData, void *user) {
        addrinfo hints, *result;
        memset(&hints, 0, sizeof(addrinfo));

        hints.ai_flags = AI_PASSIVE;
        hints.ai_family = AF_UNSPEC;
        hints.ai_socktype = SOCK_STREAM;

        Context *netContext = nodeData->netContext;

        if (getaddrinfo(host, std::to_string(port).c_str(), &hints, &result)) {
            return true;
        }

        uv_os_sock_t listenFd = SOCKET_ERROR;
        addrinfo *listenAddr;
        if ((options & uS::ONLY_IPV4) == 0) {
            for (addrinfo *a = result; a && listenFd == SOCKET_ERROR; a = a->ai_next) {
                if (a->ai_family == AF_INET6) {
                    listenFd = netContext->createSocket(a->ai_family, a->ai_socktype, a->ai_protocol);
                    listenAddr = a;
                }
            }
        }

        for (addrinfo *a = result; a && listenFd == SOCKET_ERROR; a = a->ai_next) {
            if (a->ai_family == AF_INET) {
                listenFd = netContext->createSocket(a->ai_family, a->ai_socktype, a->ai_protocol);
                listenAddr = a;
            }
        }

        if (listenFd == SOCKET_ERROR) {
            freeaddrinfo(result);
            return true;
        }

#ifdef __linux
#ifdef SO_REUSEPORT
        if (options & REUSE_PORT) {
            int optval = 1;
            setsockopt(listenFd, SOL_SOCKET, SO_REUSEPORT, &optval, sizeof(optval));
        }
#endif
#endif

        int enabled = true;
        setsockopt(listenFd, SOL_SOCKET, SO_REUSEADDR, &enabled, sizeof(enabled));

        if (bind(listenFd, listenAddr->ai_addr, listenAddr->ai_addrlen) || ::listen(listenFd, 512)) {
            netContext->closeSocket(listenFd);
            freeaddrinfo(result);
            return true;
        }

        ListenSocket *listenSocket = new ListenSocket(nodeData, loop, listenFd, nullptr);
        listenSocket->sslContext = sslContext;
        listenSocket->nodeData = nodeData;

        listenSocket->setCb(accept_poll_cb<A>);
        listenSocket->start(loop, listenSocket, UV_READABLE);

        // should be vector of listen data! one group can have many listeners!
        nodeData->user = listenSocket;

        freeaddrinfo(result);
        return false;
    }
};

}

#endif // NODE_UWS_H
