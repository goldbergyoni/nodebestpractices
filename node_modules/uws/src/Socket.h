#ifndef SOCKET_UWS_H
#define SOCKET_UWS_H

#include "Networking.h"

namespace uS {

struct TransferData {
    // Connection state
    uv_os_sock_t fd;
    SSL *ssl;

    // Poll state
    void (*pollCb)(Poll *, int, int);
    int pollEvents;

    // User state
    void *userData;

    // Destination
    NodeData *destination;
    void (*transferCb)(Poll *);
};

// perfectly 64 bytes (4 + 60)
struct WIN32_EXPORT Socket : Poll {
protected:
    struct {
        int poll : 4;
        int shuttingDown : 4;
    } state = {0, false};

    SSL *ssl;
    void *user = nullptr;
    NodeData *nodeData;

    // this is not needed by HttpSocket!
    struct Queue {
        struct Message {
            const char *data;
            size_t length;
            Message *nextMessage = nullptr;
            void (*callback)(void *socket, void *data, bool cancelled, void *reserved) = nullptr;
            void *callbackData = nullptr, *reserved = nullptr;
        };

        Message *head = nullptr, *tail = nullptr;
        void pop()
        {
            Message *nextMessage;
            if ((nextMessage = head->nextMessage)) {
                delete [] (char *) head;
                head = nextMessage;
            } else {
                delete [] (char *) head;
                head = tail = nullptr;
            }
        }

        bool empty() {return head == nullptr;}
        Message *front() {return head;}

        void push(Message *message)
        {
            message->nextMessage = nullptr;
            if (tail) {
                tail->nextMessage = message;
                tail = message;
            } else {
                head = message;
                tail = message;
            }
        }
    } messageQueue;

    int getPoll() {
        return state.poll;
    }

    int setPoll(int poll) {
        state.poll = poll;
        return poll;
    }

    void setShuttingDown(bool shuttingDown) {
        state.shuttingDown = shuttingDown;
    }

    void transfer(NodeData *nodeData, void (*cb)(Poll *)) {
        // userData is invalid from now on till onTransfer
        setUserData(new TransferData({getFd(), ssl, getCb(), getPoll(), getUserData(), nodeData, cb}));
        stop(this->nodeData->loop);
        close(this->nodeData->loop, [](Poll *p) {
            Socket *s = (Socket *) p;
            TransferData *transferData = (TransferData *) s->getUserData();

            transferData->destination->asyncMutex->lock();
            bool wasEmpty = transferData->destination->transferQueue.empty();
            transferData->destination->transferQueue.push_back(s);
            transferData->destination->asyncMutex->unlock();

            if (wasEmpty) {
                transferData->destination->async->send();
            }
        });
    }

    void changePoll(Socket *socket) {
        if (!threadSafeChange(nodeData->loop, this, socket->getPoll())) {
            if (socket->nodeData->tid != pthread_self()) {
                socket->nodeData->asyncMutex->lock();
                socket->nodeData->changePollQueue.push_back(socket);
                socket->nodeData->asyncMutex->unlock();
                socket->nodeData->async->send();
            } else {
                change(socket->nodeData->loop, socket, socket->getPoll());
            }
        }
    }

    // clears user data!
    template <void onTimeout(Socket *)>
    void startTimeout(int timeoutMs = 15000) {
        Timer *timer = new Timer(nodeData->loop);
        timer->setData(this);
        timer->start([](Timer *timer) {
            Socket *s = (Socket *) timer->getData();
            s->cancelTimeout();
            onTimeout(s);
        }, timeoutMs, 0);

        user = timer;
    }

    void cancelTimeout() {
        Timer *timer = (Timer *) getUserData();
        if (timer) {
            timer->stop();
            timer->close();
            user = nullptr;
        }
    }

    template <class STATE>
    static void sslIoHandler(Poll *p, int status, int events) {
        Socket *socket = (Socket *) p;

        if (status < 0) {
            STATE::onEnd((Socket *) p);
            return;
        }

        if (!socket->messageQueue.empty() && ((events & UV_WRITABLE) || SSL_want(socket->ssl) == SSL_READING)) {
            socket->cork(true);
            while (true) {
                Queue::Message *messagePtr = socket->messageQueue.front();
                int sent = SSL_write(socket->ssl, messagePtr->data, messagePtr->length);
                if (sent == (ssize_t) messagePtr->length) {
                    if (messagePtr->callback) {
                        messagePtr->callback(p, messagePtr->callbackData, false, messagePtr->reserved);
                    }
                    socket->messageQueue.pop();
                    if (socket->messageQueue.empty()) {
                        if ((socket->state.poll & UV_WRITABLE) && SSL_want(socket->ssl) != SSL_WRITING) {
                            socket->change(socket->nodeData->loop, socket, socket->setPoll(UV_READABLE));
                        }
                        break;
                    }
                } else if (sent <= 0) {
                    switch (SSL_get_error(socket->ssl, sent)) {
                    case SSL_ERROR_WANT_READ:
                        break;
                    case SSL_ERROR_WANT_WRITE:
                        if ((socket->getPoll() & UV_WRITABLE) == 0) {
                            socket->change(socket->nodeData->loop, socket, socket->setPoll(socket->getPoll() | UV_WRITABLE));
                        }
                        break;
                    default:
                        STATE::onEnd((Socket *) p);
                        return;
                    }
                    break;
                }
            }
            socket->cork(false);
        }

        if (events & UV_READABLE) {
            do {
                int length = SSL_read(socket->ssl, socket->nodeData->recvBuffer, socket->nodeData->recvLength);
                if (length <= 0) {
                    switch (SSL_get_error(socket->ssl, length)) {
                    case SSL_ERROR_WANT_READ:
                        break;
                    case SSL_ERROR_WANT_WRITE:
                        if ((socket->getPoll() & UV_WRITABLE) == 0) {
                            socket->change(socket->nodeData->loop, socket, socket->setPoll(socket->getPoll() | UV_WRITABLE));
                        }
                        break;
                    default:
                        STATE::onEnd((Socket *) p);
                        return;
                    }
                    break;
                } else {
                    // Warning: onData can delete the socket! Happens when HttpSocket upgrades
                    socket = STATE::onData((Socket *) p, socket->nodeData->recvBuffer, length);
                    if (socket->isClosed() || socket->isShuttingDown()) {
                        return;
                    }
                }
            } while (SSL_pending(socket->ssl));
        }
    }

    template <class STATE>
    static void ioHandler(Poll *p, int status, int events) {
        Socket *socket = (Socket *) p;
        NodeData *nodeData = socket->nodeData;
        Context *netContext = nodeData->netContext;

        if (status < 0) {
            STATE::onEnd((Socket *) p);
            return;
        }

        if (events & UV_WRITABLE) {
            if (!socket->messageQueue.empty() && (events & UV_WRITABLE)) {
                socket->cork(true);
                while (true) {
                    Queue::Message *messagePtr = socket->messageQueue.front();
                    ssize_t sent = ::send(socket->getFd(), messagePtr->data, messagePtr->length, MSG_NOSIGNAL);
                    if (sent == (ssize_t) messagePtr->length) {
                        if (messagePtr->callback) {
                            messagePtr->callback(p, messagePtr->callbackData, false, messagePtr->reserved);
                        }
                        socket->messageQueue.pop();
                        if (socket->messageQueue.empty()) {
                            // todo, remove bit, don't set directly
                            socket->change(socket->nodeData->loop, socket, socket->setPoll(UV_READABLE));
                            break;
                        }
                    } else if (sent == SOCKET_ERROR) {
                        if (!netContext->wouldBlock()) {
                            STATE::onEnd((Socket *) p);
                            return;
                        }
                        break;
                    } else {
                        messagePtr->length -= sent;
                        messagePtr->data += sent;
                        break;
                    }
                }
                socket->cork(false);
            }
        }

        if (events & UV_READABLE) {
            int length = recv(socket->getFd(), nodeData->recvBuffer, nodeData->recvLength, 0);
            if (length > 0) {
                STATE::onData((Socket *) p, nodeData->recvBuffer, length);
            } else if (length <= 0 || (length == SOCKET_ERROR && !netContext->wouldBlock())) {
                STATE::onEnd((Socket *) p);
            }
        }

    }

    template<class STATE>
    void setState() {
        if (ssl) {
            setCb(sslIoHandler<STATE>);
        } else {
            setCb(ioHandler<STATE>);
        }
    }

    bool hasEmptyQueue() {
        return messageQueue.empty();
    }

    void enqueue(Queue::Message *message) {
        messageQueue.push(message);
    }

    Queue::Message *allocMessage(size_t length, const char *data = 0) {
        Queue::Message *messagePtr = (Queue::Message *) new char[sizeof(Queue::Message) + length];
        messagePtr->length = length;
        messagePtr->data = ((char *) messagePtr) + sizeof(Queue::Message);
        messagePtr->nextMessage = nullptr;

        if (data) {
            memcpy((char *) messagePtr->data, data, messagePtr->length);
        }

        return messagePtr;
    }

    void freeMessage(Queue::Message *message) {
        delete [] (char *) message;
    }

    bool write(Queue::Message *message, bool &wasTransferred) {
        ssize_t sent = 0;
        if (messageQueue.empty()) {

            if (ssl) {
                sent = SSL_write(ssl, message->data, message->length);
                if (sent == (ssize_t) message->length) {
                    wasTransferred = false;
                    return true;
                } else if (sent < 0) {
                    switch (SSL_get_error(ssl, sent)) {
                    case SSL_ERROR_WANT_READ:
                        break;
                    case SSL_ERROR_WANT_WRITE:
                        if ((getPoll() & UV_WRITABLE) == 0) {
                            setPoll(getPoll() | UV_WRITABLE);
                            changePoll(this);
                        }
                        break;
                    default:
                        return false;
                    }
                }
            } else {
                sent = ::send(getFd(), message->data, message->length, MSG_NOSIGNAL);
                if (sent == (ssize_t) message->length) {
                    wasTransferred = false;
                    return true;
                } else if (sent == SOCKET_ERROR) {
                    if (!nodeData->netContext->wouldBlock()) {
                        return false;
                    }
                } else {
                    message->length -= sent;
                    message->data += sent;
                }

                if ((getPoll() & UV_WRITABLE) == 0) {
                    setPoll(getPoll() | UV_WRITABLE);
                    changePoll(this);
                }
            }
        }
        messageQueue.push(message);
        wasTransferred = true;
        return true;
    }

    template <class T, class D>
    void sendTransformed(const char *message, size_t length, void(*callback)(void *socket, void *data, bool cancelled, void *reserved), void *callbackData, D transformData) {
        size_t estimatedLength = T::estimate(message, length) + sizeof(Queue::Message);

        if (hasEmptyQueue()) {
            if (estimatedLength <= uS::NodeData::preAllocMaxSize) {
                int memoryLength = estimatedLength;
                int memoryIndex = nodeData->getMemoryBlockIndex(memoryLength);

                Queue::Message *messagePtr = (Queue::Message *) nodeData->getSmallMemoryBlock(memoryIndex);
                messagePtr->data = ((char *) messagePtr) + sizeof(Queue::Message);
                messagePtr->length = T::transform(message, (char *) messagePtr->data, length, transformData);

                bool wasTransferred;
                if (write(messagePtr, wasTransferred)) {
                    if (!wasTransferred) {
                        nodeData->freeSmallMemoryBlock((char *) messagePtr, memoryIndex);
                        if (callback) {
                            callback(this, callbackData, false, nullptr);
                        }
                    } else {
                        messagePtr->callback = callback;
                        messagePtr->callbackData = callbackData;
                    }
                } else {
                    nodeData->freeSmallMemoryBlock((char *) messagePtr, memoryIndex);
                    if (callback) {
                        callback(this, callbackData, true, nullptr);
                    }
                }
            } else {
                Queue::Message *messagePtr = allocMessage(estimatedLength - sizeof(Queue::Message));
                messagePtr->length = T::transform(message, (char *) messagePtr->data, length, transformData);

                bool wasTransferred;
                if (write(messagePtr, wasTransferred)) {
                    if (!wasTransferred) {
                        freeMessage(messagePtr);
                        if (callback) {
                            callback(this, callbackData, false, nullptr);
                        }
                    } else {
                        messagePtr->callback = callback;
                        messagePtr->callbackData = callbackData;
                    }
                } else {
                    freeMessage(messagePtr);
                    if (callback) {
                        callback(this, callbackData, true, nullptr);
                    }
                }
            }
        } else {
            Queue::Message *messagePtr = allocMessage(estimatedLength - sizeof(Queue::Message));
            messagePtr->length = T::transform(message, (char *) messagePtr->data, length, transformData);
            messagePtr->callback = callback;
            messagePtr->callbackData = callbackData;
            enqueue(messagePtr);
        }
    }

public:
    Socket(NodeData *nodeData, Loop *loop, uv_os_sock_t fd, SSL *ssl) : Poll(loop, fd), ssl(ssl), nodeData(nodeData) {
        if (ssl) {
            // OpenSSL treats SOCKETs as int
            SSL_set_fd(ssl, (int) fd);
            SSL_set_mode(ssl, SSL_MODE_RELEASE_BUFFERS);
        }
    }

    NodeData *getNodeData() {
        return nodeData;
    }

    Poll *next = nullptr, *prev = nullptr;

    void *getUserData() {
        return user;
    }

    void setUserData(void *user) {
        this->user = user;
    }

    struct Address {
        unsigned int port;
        const char *address;
        const char *family;
    };

    Address getAddress();

    void setNoDelay(int enable) {
        setsockopt(getFd(), IPPROTO_TCP, TCP_NODELAY, &enable, sizeof(int));
    }

    void cork(int enable) {
#if defined(TCP_CORK)
        // Linux & SmartOS have proper TCP_CORK
        setsockopt(getFd(), IPPROTO_TCP, TCP_CORK, &enable, sizeof(int));
#elif defined(TCP_NOPUSH)
        // Mac OS X & FreeBSD have TCP_NOPUSH
        setsockopt(getFd(), IPPROTO_TCP, TCP_NOPUSH, &enable, sizeof(int));
        if (!enable) {
            // Tested on OS X, FreeBSD situation is unclear
            ::send(getFd(), "", 0, MSG_NOSIGNAL);
        }
#endif
    }

    void shutdown() {
        if (ssl) {
            //todo: poll in/out - have the io_cb recall shutdown if failed
            SSL_shutdown(ssl);
        } else {
            ::shutdown(getFd(), SHUT_WR);
        }
    }

    template <class T>
    void closeSocket() {
        uv_os_sock_t fd = getFd();
        Context *netContext = nodeData->netContext;
        stop(nodeData->loop);
        netContext->closeSocket(fd);

        if (ssl) {
            SSL_free(ssl);
        }

        Poll::close(nodeData->loop, [](Poll *p) {
            delete (T *) p;
        });
    }

    bool isShuttingDown() {
        return state.shuttingDown;
    }

    friend class Node;
    friend struct NodeData;
};

struct ListenSocket : Socket {

    ListenSocket(NodeData *nodeData, Loop *loop, uv_os_sock_t fd, SSL *ssl) : Socket(nodeData, loop, fd, ssl) {

    }

    Timer *timer = nullptr;
    uS::TLS::Context sslContext;
};

}

#endif // SOCKET_UWS_H
