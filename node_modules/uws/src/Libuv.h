#ifndef LIBUV_H
#define LIBUV_H

#include <uv.h>
static_assert (UV_VERSION_MINOR >= 3, "µWebSockets requires libuv >=1.3.0");

struct Loop : uv_loop_t {
    static Loop *createLoop(bool defaultLoop = true) {
        if (defaultLoop) {
            return (Loop *) uv_default_loop();
        } else {
            return (Loop *) uv_loop_new();
        }
    }

    void destroy() {
        if (this != uv_default_loop()) {
            uv_loop_delete(this);
        }
    }

    void run() {
        uv_run(this, UV_RUN_DEFAULT);
    }
};

struct Async {
    uv_async_t uv_async;

    Async(Loop *loop) {
        uv_async.loop = loop;
    }

    void start(void (*cb)(Async *)) {
        uv_async_init(uv_async.loop, &uv_async, (uv_async_cb) cb);
    }

    void send() {
        uv_async_send(&uv_async);
    }

    void close() {
        uv_close((uv_handle_t *) &uv_async, [](uv_handle_t *a) {
            delete (Async *) a;
        });
    }

    void setData(void *data) {
        uv_async.data = data;
    }

    void *getData() {
        return uv_async.data;
    }
};

struct Timer {
    uv_timer_t uv_timer;

    Timer(Loop *loop) {
        uv_timer_init(loop, &uv_timer);
    }

    void start(void (*cb)(Timer *), int first, int repeat) {
        uv_timer_start(&uv_timer, (uv_timer_cb) cb, first, repeat);
    }

    void setData(void *data) {
        uv_timer.data = data;
    }

    void *getData() {
        return uv_timer.data;
    }

    void stop() {
        uv_timer_stop(&uv_timer);
    }

    void close() {
        uv_close((uv_handle_t *) &uv_timer, [](uv_handle_t *t) {
            delete (Timer *) t;
        });
    }

private:
    ~Timer() {

    }
};

struct Poll {
    uv_poll_t *uv_poll;
    void (*cb)(Poll *p, int status, int events);

    Poll(Loop *loop, uv_os_sock_t fd) {
        uv_poll = new uv_poll_t;
        uv_poll_init_socket(loop, uv_poll, fd);
    }

    Poll(Poll &&other) {
        uv_poll = other.uv_poll;
        cb = other.cb;
        other.uv_poll = nullptr;
    }

    Poll(const Poll &other) = delete;

    ~Poll() {
        delete uv_poll;
    }

    bool isClosed() {
        return uv_is_closing((uv_handle_t *) uv_poll);
    }

    uv_os_sock_t getFd() {
#ifdef _WIN32
        uv_os_sock_t fd;
        uv_fileno((uv_handle_t *) uv_poll, (uv_os_fd_t *) &fd);
        return fd;
#else
        return uv_poll->io_watcher.fd;
#endif
    }

    void setCb(void (*cb)(Poll *p, int status, int events)) {
        this->cb = cb;
    }

    void (*getCb())(Poll *, int, int) {
        return cb;
    }

    void reInit(Loop *loop, uv_os_sock_t fd) {
        delete uv_poll;
        uv_poll = new uv_poll_t;
        uv_poll_init_socket(loop, uv_poll, fd);
    }

    void start(Loop *, Poll *self, int events) {
        uv_poll->data = self;
        uv_poll_start(uv_poll, events, [](uv_poll_t *p, int status, int events) {
            Poll *self = (Poll *) p->data;
            self->cb(self, status, events);
        });
    }

    void change(Loop *, Poll *self, int events) {
        start(nullptr, self, events);
    }

    void stop(Loop *loop) {
        uv_poll_stop(uv_poll);
    }

    bool fastTransfer(Loop *loop, Loop *newLoop, int events) {
        return false;
    }

    bool threadSafeChange(Loop *, Poll *self, int events) {
        return false;
    }

    void close(Loop *loop, void (*cb)(Poll *)) {
        this->cb = (void(*)(Poll *, int, int)) cb;
        uv_close((uv_handle_t *) uv_poll, [](uv_handle_t *p) {
            Poll *poll = (Poll *) p->data;
            void (*cb)(Poll *) = (void(*)(Poll *)) poll->cb;
            cb(poll);
        });
    }
};

#endif // LIBUV_H
