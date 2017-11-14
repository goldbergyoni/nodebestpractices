#ifndef ASIO_H
#define ASIO_H

#include <boost/asio.hpp>

typedef boost::asio::ip::tcp::socket::native_type uv_os_sock_t;
static const int UV_READABLE = 1;
static const int UV_WRITABLE = 2;

struct Loop : boost::asio::io_service {

    static Loop *createLoop(bool defaultLoop = true) {
        return new Loop;
    }

    void destroy() {
        delete this;
    }

    void run() {
        boost::asio::io_service::run();
    }
};

struct Timer {
    boost::asio::deadline_timer asio_timer;
    void *data;

    Timer(Loop *loop) : asio_timer(*loop) {

    }

    void start(void (*cb)(Timer *), int first, int repeat) {
        asio_timer.expires_from_now(boost::posix_time::milliseconds(first));
        asio_timer.async_wait([this, cb, repeat](const boost::system::error_code &ec) {
            if (ec != boost::asio::error::operation_aborted) {
                if (repeat) {
                    start(cb, repeat, repeat);
                }
                cb(this);
            }
        });
    }

    void setData(void *data) {
        this->data = data;
    }

    void *getData() {
        return data;
    }

    // bug: cancel does not cancel expired timers!
    // it has to guarantee that the timer is not called after
    // stop is called! ffs boost!
    void stop() {
        asio_timer.cancel();
    }

    void close() {
        asio_timer.get_io_service().post([this]() {
            delete this;
        });
    }
};

struct Async {
    Loop *loop;
    void (*cb)(Async *);
    void *data;

    boost::asio::io_service::work asio_work;

    Async(Loop *loop) : loop(loop), asio_work(*loop) {
    }

    void start(void (*cb)(Async *)) {
        this->cb = cb;
    }

    void send() {
        loop->post([this]() {
            cb(this);
        });
    }

    void close() {
        loop->post([this]() {
            delete this;
        });
    }

    void setData(void *data) {
        this->data = data;
    }

    void *getData() {
        return data;
    }
};

struct Poll {
    boost::asio::posix::stream_descriptor *socket;
    void (*cb)(Poll *p, int status, int events);

    Poll(Loop *loop, uv_os_sock_t fd) {
        socket = new boost::asio::posix::stream_descriptor(*loop, fd);
        socket->non_blocking(true);
    }

    bool isClosed() {
        return !socket;
    }

    boost::asio::ip::tcp::socket::native_type getFd() {
        return socket ? socket->native_handle() : -1;
    }

    void setCb(void (*cb)(Poll *p, int status, int events)) {
        this->cb = cb;
    }

    void (*getCb())(Poll *, int, int) {
        return cb;
    }

    void reInit(Loop *loop, uv_os_sock_t fd) {
        delete socket;
        socket = new boost::asio::posix::stream_descriptor(*loop, fd);
        socket->non_blocking(true);
    }

    void start(Loop *, Poll *self, int events) {
        if (events & UV_READABLE) {
            socket->async_read_some(boost::asio::null_buffers(), [self](boost::system::error_code ec, std::size_t) {
                if (ec != boost::asio::error::operation_aborted) {
                    self->start(nullptr, self, UV_READABLE);
                    self->cb(self, ec ? -1 : 0, UV_READABLE);
                }
            });
        }

        if (events & UV_WRITABLE) {
            socket->async_write_some(boost::asio::null_buffers(), [self](boost::system::error_code ec, std::size_t) {
                if (ec != boost::asio::error::operation_aborted) {
                    self->start(nullptr, self, UV_WRITABLE);
                    self->cb(self, ec ? -1 : 0, UV_WRITABLE);
                }
            });
        }
    }

    void change(Loop *, Poll *self, int events) {
        socket->cancel();
        start(nullptr, self, events);
    }

    bool fastTransfer(Loop *loop, Loop *newLoop, int events) {
        return false;
    }

    // todo: asio is thread safe, use it!
    bool threadSafeChange(Loop *loop, Poll *self, int events) {
        return false;
    }

    void stop(Loop *) {
        socket->cancel();
    }

    // this is not correct, but it works for now
    // think about transfer - should allow one to not delete
    // but in this case it doesn't matter at all
    void close(Loop *loop, void (*cb)(Poll *)) {
        socket->release();
        socket->get_io_service().post([cb, this]() {
            cb(this);
        });
        delete socket;
        socket = nullptr;
    }
};

#endif // ASIO_H
