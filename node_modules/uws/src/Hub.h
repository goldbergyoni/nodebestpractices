#ifndef HUB_UWS_H
#define HUB_UWS_H

#include "Group.h"
#include "Node.h"
#include <string>
#include <zlib.h>
#include <mutex>
#include <map>

namespace uWS {

struct WIN32_EXPORT Hub : private uS::Node, public Group<SERVER>, public Group<CLIENT> {
protected:
    struct ConnectionData {
        std::string path;
        void *user;
        Group<CLIENT> *group;
    };

    z_stream inflationStream = {};
    char *inflationBuffer;
    char *inflate(char *data, size_t &length, size_t maxPayload);
    std::string dynamicInflationBuffer;
    static const int LARGE_BUFFER_SIZE = 300 * 1024;

    static void onServerAccept(uS::Socket *s);
    static void onClientConnection(uS::Socket *s, bool error);

public:
    template <bool isServer>
    Group<isServer> *createGroup(int extensionOptions = 0, unsigned int maxPayload = 16777216) {
        return new Group<isServer>(extensionOptions, maxPayload, this, nodeData);
    }

    template <bool isServer>
    Group<isServer> &getDefaultGroup() {
        return static_cast<Group<isServer> &>(*this);
    }

    bool listen(int port, uS::TLS::Context sslContext = nullptr, int options = 0, Group<SERVER> *eh = nullptr);
    bool listen(const char *host, int port, uS::TLS::Context sslContext = nullptr, int options = 0, Group<SERVER> *eh = nullptr);
    void connect(std::string uri, void *user = nullptr, std::map<std::string, std::string> extraHeaders = {}, int timeoutMs = 5000, Group<CLIENT> *eh = nullptr);
    void upgrade(uv_os_sock_t fd, const char *secKey, SSL *ssl, const char *extensions, size_t extensionsLength, const char *subprotocol, size_t subprotocolLength, Group<SERVER> *serverGroup = nullptr);

    Hub(int extensionOptions = 0, bool useDefaultLoop = false, unsigned int maxPayload = 16777216) : uS::Node(LARGE_BUFFER_SIZE, WebSocketProtocol<SERVER, WebSocket<SERVER>>::CONSUME_PRE_PADDING, WebSocketProtocol<SERVER, WebSocket<SERVER>>::CONSUME_POST_PADDING, useDefaultLoop),
                                             Group<SERVER>(extensionOptions, maxPayload, this, nodeData), Group<CLIENT>(0, maxPayload, this, nodeData) {
        inflateInit2(&inflationStream, -15);
        inflationBuffer = new char[LARGE_BUFFER_SIZE];

#ifdef UWS_THREADSAFE
        getLoop()->preCbData = nodeData;
        getLoop()->preCb = [](void *nodeData) {
            static_cast<uS::NodeData *>(nodeData)->asyncMutex->lock();
        };

        getLoop()->postCbData = nodeData;
        getLoop()->postCb = [](void *nodeData) {
            static_cast<uS::NodeData *>(nodeData)->asyncMutex->unlock();
        };
#endif
    }

    ~Hub() {
        inflateEnd(&inflationStream);
        delete [] inflationBuffer;
    }

    using uS::Node::run;
    using uS::Node::getLoop;
    using Group<SERVER>::onConnection;
    using Group<CLIENT>::onConnection;
    using Group<SERVER>::onTransfer;
    using Group<SERVER>::onMessage;
    using Group<CLIENT>::onMessage;
    using Group<SERVER>::onDisconnection;
    using Group<CLIENT>::onDisconnection;
    using Group<SERVER>::onPing;
    using Group<CLIENT>::onPing;
    using Group<SERVER>::onPong;
    using Group<CLIENT>::onPong;
    using Group<SERVER>::onError;
    using Group<CLIENT>::onError;
    using Group<SERVER>::onHttpRequest;
    using Group<SERVER>::onHttpData;
    using Group<SERVER>::onHttpConnection;
    using Group<SERVER>::onHttpDisconnection;
    using Group<SERVER>::onHttpUpgrade;
    using Group<SERVER>::onCancelledHttpRequest;

    friend struct WebSocket<SERVER>;
    friend struct WebSocket<CLIENT>;
};

}

#endif // HUB_UWS_H
