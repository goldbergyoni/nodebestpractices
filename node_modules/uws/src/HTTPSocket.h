#ifndef HTTPSOCKET_UWS_H
#define HTTPSOCKET_UWS_H

#include "Socket.h"
#include <string>
// #include <experimental/string_view>

namespace uWS {

struct Header {
    char *key, *value;
    unsigned int keyLength, valueLength;

    operator bool() {
        return key;
    }

    // slow without string_view!
    std::string toString() {
        return std::string(value, valueLength);
    }
};

enum HttpMethod {
    METHOD_GET,
    METHOD_POST,
    METHOD_PUT,
    METHOD_DELETE,
    METHOD_PATCH,
    METHOD_OPTIONS,
    METHOD_HEAD,
    METHOD_TRACE,
    METHOD_CONNECT,
    METHOD_INVALID
};

struct HttpRequest {
    Header *headers;
    Header getHeader(const char *key) {
        return getHeader(key, strlen(key));
    }

    HttpRequest(Header *headers = nullptr) : headers(headers) {}

    Header getHeader(const char *key, size_t length) {
        if (headers) {
            for (Header *h = headers; *++h; ) {
                if (h->keyLength == length && !strncmp(h->key, key, length)) {
                    return *h;
                }
            }
        }
        return {nullptr, nullptr, 0, 0};
    }

    Header getUrl() {
        if (headers->key) {
            return *headers;
        }
        return {nullptr, nullptr, 0, 0};
    }

    HttpMethod getMethod() {
        if (!headers->key) {
            return METHOD_INVALID;
        }
        switch (headers->keyLength) {
        case 3:
            if (!strncmp(headers->key, "get", 3)) {
                return METHOD_GET;
            } else if (!strncmp(headers->key, "put", 3)) {
                return METHOD_PUT;
            }
            break;
        case 4:
            if (!strncmp(headers->key, "post", 4)) {
                return METHOD_POST;
            } else if (!strncmp(headers->key, "head", 4)) {
                return METHOD_HEAD;
            }
            break;
        case 5:
            if (!strncmp(headers->key, "patch", 5)) {
                return METHOD_PATCH;
            } else if (!strncmp(headers->key, "trace", 5)) {
                return METHOD_TRACE;
            }
            break;
        case 6:
            if (!strncmp(headers->key, "delete", 6)) {
                return METHOD_DELETE;
            }
            break;
        case 7:
            if (!strncmp(headers->key, "options", 7)) {
                return METHOD_OPTIONS;
            } else if (!strncmp(headers->key, "connect", 7)) {
                return METHOD_CONNECT;
            }
            break;
        }
        return METHOD_INVALID;
    }
};

struct HttpResponse;

template <const bool isServer>
struct WIN32_EXPORT HttpSocket : uS::Socket {
    void *httpUser; // remove this later, setTimeout occupies user for now
    HttpResponse *outstandingResponsesHead = nullptr;
    HttpResponse *outstandingResponsesTail = nullptr;
    HttpResponse *preAllocatedResponse = nullptr;

    std::string httpBuffer;
    size_t contentLength = 0;
    bool missedDeadline = false;

    HttpSocket(uS::Socket *socket) : uS::Socket(std::move(*socket)) {}

    void terminate() {
        onEnd(this);
    }

    void upgrade(const char *secKey, const char *extensions,
                 size_t extensionsLength, const char *subprotocol,
                 size_t subprotocolLength, bool *perMessageDeflate);

private:
    friend struct uS::Socket;
    friend struct HttpResponse;
    friend struct Hub;
    static uS::Socket *onData(uS::Socket *s, char *data, size_t length);
    static void onEnd(uS::Socket *s);
};

struct HttpResponse {
    HttpSocket<true> *httpSocket;
    HttpResponse *next = nullptr;
    void *userData = nullptr;
    void *extraUserData = nullptr;
    HttpSocket<true>::Queue::Message *messageQueue = nullptr;
    bool hasEnded = false;
    bool hasHead = false;

    HttpResponse(HttpSocket<true> *httpSocket) : httpSocket(httpSocket) {

    }

    template <bool isServer>
    static HttpResponse *allocateResponse(HttpSocket<isServer> *httpSocket) {
        if (httpSocket->preAllocatedResponse) {
            HttpResponse *ret = httpSocket->preAllocatedResponse;
            httpSocket->preAllocatedResponse = nullptr;
            return ret;
        } else {
            return new HttpResponse((HttpSocket<true> *) httpSocket);
        }
    }

    //template <bool isServer>
    void freeResponse(HttpSocket<true> *httpData) {
        if (httpData->preAllocatedResponse) {
            delete this;
        } else {
            httpData->preAllocatedResponse = this;
        }
    }

    void write(const char *message, size_t length = 0,
               void(*callback)(void *httpSocket, void *data, bool cancelled, void *reserved) = nullptr,
               void *callbackData = nullptr) {

        struct NoopTransformer {
            static size_t estimate(const char *data, size_t length) {
                return length;
            }

            static size_t transform(const char *src, char *dst, size_t length, int transformData) {
                memcpy(dst, src, length);
                return length;
            }
        };

        httpSocket->sendTransformed<NoopTransformer>(message, length, callback, callbackData, 0);
        hasHead = true;
    }

    // todo: maybe this function should have a fast path for 0 length?
    void end(const char *message = nullptr, size_t length = 0,
             void(*callback)(void *httpResponse, void *data, bool cancelled, void *reserved) = nullptr,
             void *callbackData = nullptr) {

        struct TransformData {
            bool hasHead;
        } transformData = {hasHead};

        struct HttpTransformer {

            // todo: this should get TransformData!
            static size_t estimate(const char *data, size_t length) {
                return length + 128;
            }

            static size_t transform(const char *src, char *dst, size_t length, TransformData transformData) {
                // todo: sprintf is extremely slow
                int offset = transformData.hasHead ? 0 : std::sprintf(dst, "HTTP/1.1 200 OK\r\nContent-Length: %u\r\n\r\n", (unsigned int) length);
                memcpy(dst + offset, src, length);
                return length + offset;
            }
        };

        if (httpSocket->outstandingResponsesHead != this) {
            HttpSocket<true>::Queue::Message *messagePtr = httpSocket->allocMessage(HttpTransformer::estimate(message, length));
            messagePtr->length = HttpTransformer::transform(message, (char *) messagePtr->data, length, transformData);
            messagePtr->callback = callback;
            messagePtr->callbackData = callbackData;
            messagePtr->nextMessage = messageQueue;
            messageQueue = messagePtr;
            hasEnded = true;
        } else {
            httpSocket->sendTransformed<HttpTransformer>(message, length, callback, callbackData, transformData);
            // move head as far as possible
            HttpResponse *head = next;
            while (head) {
                // empty message queue
                HttpSocket<true>::Queue::Message *messagePtr = head->messageQueue;
                while (messagePtr) {
                    HttpSocket<true>::Queue::Message *nextMessage = messagePtr->nextMessage;

                    bool wasTransferred;
                    if (httpSocket->write(messagePtr, wasTransferred)) {
                        if (!wasTransferred) {
                            httpSocket->freeMessage(messagePtr);
                            if (callback) {
                                callback(this, callbackData, false, nullptr);
                            }
                        } else {
                            messagePtr->callback = callback;
                            messagePtr->callbackData = callbackData;
                        }
                    } else {
                        httpSocket->freeMessage(messagePtr);
                        if (callback) {
                            callback(this, callbackData, true, nullptr);
                        }
                        goto updateHead;
                    }
                    messagePtr = nextMessage;
                }
                // cannot go beyond unfinished responses
                if (!head->hasEnded) {
                    break;
                } else {
                    HttpResponse *next = head->next;
                    head->freeResponse(httpSocket);
                    head = next;
                }
            }
            updateHead:
            httpSocket->outstandingResponsesHead = head;
            if (!head) {
                httpSocket->outstandingResponsesTail = nullptr;
            }

            freeResponse(httpSocket);
        }
    }

    void setUserData(void *userData) {
        this->userData = userData;
    }

    void *getUserData() {
        return userData;
    }

    HttpSocket<true> *getHttpSocket() {
        return httpSocket;
    }
};

}

#endif // HTTPSOCKET_UWS_H
