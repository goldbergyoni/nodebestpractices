#include "../src/uWS.h"
#include "addon.h"
#include "http.h"

void Main(Local<Object> exports) {
    Isolate *isolate = exports->GetIsolate();

    exports->Set(String::NewFromUtf8(isolate, "server"), Namespace<uWS::SERVER>(isolate).object);
    exports->Set(String::NewFromUtf8(isolate, "client"), Namespace<uWS::CLIENT>(isolate).object);
    exports->Set(String::NewFromUtf8(isolate, "httpServer"), HttpServer::getHttpServer(isolate));

    NODE_SET_METHOD(exports, "setUserData", setUserData<uWS::SERVER>);
    NODE_SET_METHOD(exports, "getUserData", getUserData<uWS::SERVER>);
    NODE_SET_METHOD(exports, "clearUserData", clearUserData<uWS::SERVER>);
    NODE_SET_METHOD(exports, "getAddress", getAddress<uWS::SERVER>);

    NODE_SET_METHOD(exports, "transfer", transfer);
    NODE_SET_METHOD(exports, "upgrade", upgrade);
    NODE_SET_METHOD(exports, "connect", connect);
    NODE_SET_METHOD(exports, "setNoop", setNoop);
    registerCheck(isolate);
}

NODE_MODULE(uws, Main)
