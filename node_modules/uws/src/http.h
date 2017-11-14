#include <iostream>

Persistent<Object> reqTemplate, resTemplate;
Persistent<Function> httpPersistent;

uWS::HttpRequest *currentReq = nullptr;

struct HttpServer {

    struct Request {
        static void on(const FunctionCallbackInfo<Value> &args) {
            NativeString eventName(args[0]);
            if (std::string(eventName.getData(), eventName.getLength()) == "data") {
                args.Holder()->SetInternalField(1, args[1]);
            } else if (std::string(eventName.getData(), eventName.getLength()) == "end") {
                args.Holder()->SetInternalField(2, args[1]);
            } else {
                std::cout << "Warning: req.on(" << std::string(eventName.getData(), eventName.getLength()) << ") is not implemented!" << std::endl;
            }
            args.GetReturnValue().Set(args.Holder());
        }

        static void headers(Local<String> property, const PropertyCallbackInfo<Value> &args) {
            uWS::HttpRequest *req = currentReq;
            if (!req) {
                std::cerr << "Warning: req.headers usage past request handler is not supported!" << std::endl;
            } else {
                NativeString nativeString(property);
                uWS::Header header = req->getHeader(nativeString.getData(), nativeString.getLength());
                if (header) {
                    args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) header.value, String::kNormalString, header.valueLength));
                }
            }
        }

        static void url(Local<String> property, const PropertyCallbackInfo<Value> &args) {
            args.GetReturnValue().Set(args.This()->GetInternalField(4));
        }

        static void method(Local<String> property, const PropertyCallbackInfo<Value> &args) {
            //std::cout << "method" << std::endl;
            long methodId = ((long) args.This()->GetAlignedPointerFromInternalField(3)) >> 1;
            switch (methodId) {
            case uWS::HttpMethod::METHOD_GET:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "GET", String::kNormalString, 3));
                break;
            case uWS::HttpMethod::METHOD_PUT:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "PUT", String::kNormalString, 3));
                break;
            case uWS::HttpMethod::METHOD_POST:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "POST", String::kNormalString, 4));
                break;
            case uWS::HttpMethod::METHOD_HEAD:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "HEAD", String::kNormalString, 4));
                break;
            case uWS::HttpMethod::METHOD_PATCH:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "PATCH", String::kNormalString, 5));
                break;
            case uWS::HttpMethod::METHOD_TRACE:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "TRACE", String::kNormalString, 5));
                break;
            case uWS::HttpMethod::METHOD_DELETE:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "DELETE", String::kNormalString, 6));
                break;
            case uWS::HttpMethod::METHOD_OPTIONS:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "OPTIONS", String::kNormalString, 7));
                break;
            case uWS::HttpMethod::METHOD_CONNECT:
                args.GetReturnValue().Set(String::NewFromOneByte(args.GetIsolate(), (uint8_t *) "CONNECT", String::kNormalString, 7));
                break;
            }
        }

        // placeholders
        static void unpipe(const FunctionCallbackInfo<Value> &args) {
            //std::cout << "req.unpipe called" << std::endl;
        }

        static void resume(const FunctionCallbackInfo<Value> &args) {
            //std::cout << "req.resume called" << std::endl;
        }

        static void socket(const FunctionCallbackInfo<Value> &args) {
            // return new empty object
            args.GetReturnValue().Set(Object::New(args.GetIsolate()));
        }

        static Local<Object> getTemplateObject(Isolate *isolate) {
            Local<FunctionTemplate> reqTemplateLocal = FunctionTemplate::New(isolate);
            reqTemplateLocal->SetClassName(String::NewFromUtf8(isolate, "uws.Request"));
            reqTemplateLocal->InstanceTemplate()->SetInternalFieldCount(5);
            reqTemplateLocal->PrototypeTemplate()->SetAccessor(String::NewFromUtf8(isolate, "url"), Request::url);
            reqTemplateLocal->PrototypeTemplate()->SetAccessor(String::NewFromUtf8(isolate, "method"), Request::method);
            reqTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "on"), FunctionTemplate::New(isolate, Request::on));
            reqTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "unpipe"), FunctionTemplate::New(isolate, Request::unpipe));
            reqTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "resume"), FunctionTemplate::New(isolate, Request::resume));
            reqTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "socket"), FunctionTemplate::New(isolate, Request::socket));

            Local<Object> reqObjectLocal = reqTemplateLocal->GetFunction()->NewInstance();

            Local<ObjectTemplate> headersTemplate = ObjectTemplate::New(isolate);
            headersTemplate->SetNamedPropertyHandler(Request::headers);

            reqObjectLocal->Set(String::NewFromUtf8(isolate, "headers"), headersTemplate->NewInstance());
            return reqObjectLocal;
        }
    };

    struct Response {
        static void on(const FunctionCallbackInfo<Value> &args) {
            NativeString eventName(args[0]);
            if (std::string(eventName.getData(), eventName.getLength()) == "close") {
                args.Holder()->SetInternalField(1, args[1]);
            } else {
                std::cout << "Warning: res.on(" << std::string(eventName.getData(), eventName.getLength()) << ") is not implemented!" << std::endl;
            }
            args.GetReturnValue().Set(args.Holder());
        }

        static void end(const FunctionCallbackInfo<Value> &args) {
            uWS::HttpResponse *res = (uWS::HttpResponse *) args.Holder()->GetAlignedPointerFromInternalField(0);
            if (res) {
                NativeString nativeString(args[0]);

                ((Persistent<Object> *) &res->userData)->Reset();
                ((Persistent<Object> *) &res->userData)->~Persistent<Object>();
                ((Persistent<Object> *) &res->extraUserData)->Reset();
                ((Persistent<Object> *) &res->extraUserData)->~Persistent<Object>();
                res->end(nativeString.getData(), nativeString.getLength());
            }
        }

        // todo: this is slow
        static void writeHead(const FunctionCallbackInfo<Value> &args) {
            uWS::HttpResponse *res = (uWS::HttpResponse *) args.Holder()->GetAlignedPointerFromInternalField(0);
            if (res) {
                std::string head = "HTTP/1.1 " + std::to_string(args[0]->IntegerValue()) + " ";

                if (args.Length() > 1 && args[1]->IsString()) {
                    NativeString statusMessage(args[1]);
                    head.append(statusMessage.getData(), statusMessage.getLength());
                } else {
                    head += "OK";
                }

                if (args[args.Length() - 1]->IsObject()) {
                    Local<Object> headersObject = args[args.Length() - 1]->ToObject();
                    Local<Array> headers = headersObject->GetOwnPropertyNames();
                    for (int i = 0; i < headers->Length(); i++) {
                        Local<Value> key = headers->Get(i);
                        Local<Value> value = headersObject->Get(key);

                        NativeString nativeKey(key);
                        NativeString nativeValue(value);

                        head += "\r\n";
                        head.append(nativeKey.getData(), nativeKey.getLength());
                        head += ": ";
                        head.append(nativeValue.getData(), nativeValue.getLength());
                    }
                }

                head += "\r\n\r\n";
                res->write(head.data(), head.length());
            }
        }

        // todo: if not writeHead called before then should write implicit headers
        static void write(const FunctionCallbackInfo<Value> &args) {
            uWS::HttpResponse *res = (uWS::HttpResponse *) args.Holder()->GetAlignedPointerFromInternalField(0);

            if (res) {
                NativeString nativeString(args[0]);
                res->write(nativeString.getData(), nativeString.getLength());
            }
        }

        static void setHeader(const FunctionCallbackInfo<Value> &args) {
            //std::cout << "res.setHeader called" << std::endl;
        }

        static void getHeader(const FunctionCallbackInfo<Value> &args) {
            //std::cout << "res.getHeader called" << std::endl;
        }

        static Local<Object> getTemplateObject(Isolate *isolate) {
            Local<FunctionTemplate> resTemplateLocal = FunctionTemplate::New(isolate);
            resTemplateLocal->SetClassName(String::NewFromUtf8(isolate, "uws.Response"));
            resTemplateLocal->InstanceTemplate()->SetInternalFieldCount(5);
            resTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "end"), FunctionTemplate::New(isolate, Response::end));
            resTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "writeHead"), FunctionTemplate::New(isolate, Response::writeHead));
            resTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "write"), FunctionTemplate::New(isolate, Response::write));
            resTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "on"), FunctionTemplate::New(isolate, Response::on));
            resTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "setHeader"), FunctionTemplate::New(isolate, Response::setHeader));
            resTemplateLocal->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "getHeader"), FunctionTemplate::New(isolate, Response::getHeader));
            return resTemplateLocal->GetFunction()->NewInstance();
        }
    };

    // todo: wrap everything up - most important function to get correct
    static void createServer(const FunctionCallbackInfo<Value> &args) {

        // todo: delete this on destructor
        uWS::Group<uWS::SERVER> *group = hub.createGroup<uWS::SERVER>();
        group->setUserData(new GroupData);
        GroupData *groupData = (GroupData *) group->getUserData();

        Isolate *isolate = args.GetIsolate();
        Persistent<Function> *httpRequestCallback = &groupData->httpRequestHandler;
        httpRequestCallback->Reset(isolate, Local<Function>::Cast(args[0]));
        group->onHttpRequest([isolate, httpRequestCallback](uWS::HttpResponse *res, uWS::HttpRequest req, char *data, size_t length, size_t remainingBytes) {
            HandleScope hs(isolate);

            currentReq = &req;

            Local<Object> reqObject = Local<Object>::New(isolate, reqTemplate)->Clone();
            reqObject->SetAlignedPointerInInternalField(0, &req);
            new (&res->extraUserData) Persistent<Object>(isolate, reqObject);

            Local<Object> resObject = Local<Object>::New(isolate, resTemplate)->Clone();
            resObject->SetAlignedPointerInInternalField(0, res);
            new (&res->userData) Persistent<Object>(isolate, resObject);

            // store url & method (needed by Koa and Express)
            long methodId = req.getMethod() << 1;
            reqObject->SetAlignedPointerInInternalField(3, (void *) methodId);
            reqObject->SetInternalField(4, String::NewFromOneByte(isolate, (uint8_t *) req.getUrl().value, String::kNormalString, req.getUrl().valueLength));

            Local<Value> argv[] = {reqObject, resObject};
            Local<Function>::New(isolate, *httpRequestCallback)->Call(isolate->GetCurrentContext()->Global(), 2, argv);

            if (length) {
                Local<Value> dataCallback = reqObject->GetInternalField(1);
                if (!dataCallback->IsUndefined()) {
                    Local<Value> argv[] = {ArrayBuffer::New(isolate, data, length)};
                    Local<Function>::Cast(dataCallback)->Call(isolate->GetCurrentContext()->Global(), 1, argv);
                }

                if (!remainingBytes) {
                    Local<Value> endCallback = reqObject->GetInternalField(2);
                    if (!endCallback->IsUndefined()) {
                        Local<Function>::Cast(endCallback)->Call(isolate->GetCurrentContext()->Global(), 0, nullptr);
                    }
                }
            }

            currentReq = nullptr;
            reqObject->SetAlignedPointerInInternalField(0, nullptr);
        });

        group->onCancelledHttpRequest([isolate](uWS::HttpResponse *res) {
            HandleScope hs(isolate);

            // mark res as invalid
            Local<Object> resObject = Local<Object>::New(isolate, *(Persistent<Object> *) &res->userData);
            resObject->SetAlignedPointerInInternalField(0, nullptr);

            // mark req as invalid
            Local<Object> reqObject = Local<Object>::New(isolate, *(Persistent<Object> *) &res->extraUserData);
            reqObject->SetAlignedPointerInInternalField(0, nullptr);

            // emit res 'close' on aborted response
            Local<Value> closeCallback = resObject->GetInternalField(1);
            if (!closeCallback->IsUndefined()) {
                Local<Function>::Cast(closeCallback)->Call(isolate->GetCurrentContext()->Global(), 0, nullptr);
            }

            ((Persistent<Object> *) &res->userData)->Reset();
            ((Persistent<Object> *) &res->userData)->~Persistent<Object>();
            ((Persistent<Object> *) &res->extraUserData)->Reset();
            ((Persistent<Object> *) &res->extraUserData)->~Persistent<Object>();
        });

        group->onHttpData([isolate](uWS::HttpResponse *res, char *data, size_t length, size_t remainingBytes) {
            Local<Object> reqObject = Local<Object>::New(isolate, *(Persistent<Object> *) res->extraUserData);

            Local<Value> dataCallback = reqObject->GetInternalField(1);
            if (!dataCallback->IsUndefined()) {
                Local<Value> argv[] = {ArrayBuffer::New(isolate, data, length)};
                Local<Function>::Cast(dataCallback)->Call(isolate->GetCurrentContext()->Global(), 1, argv);
            }

            if (!remainingBytes) {
                Local<Value> endCallback = reqObject->GetInternalField(2);
                if (!endCallback->IsUndefined()) {
                    Local<Function>::Cast(endCallback)->Call(isolate->GetCurrentContext()->Global(), 0, nullptr);
                }
            }
        });

        Local<Object> newInstance;
        if (!args.IsConstructCall()) {
            args.GetReturnValue().Set(newInstance = Local<Function>::New(args.GetIsolate(), httpPersistent)->NewInstance());
        } else {
            args.GetReturnValue().Set(newInstance = args.This());
        }

        newInstance->SetAlignedPointerInInternalField(0, group);
    }

    static void on(const FunctionCallbackInfo<Value> &args) {
        NativeString eventName(args[0]);
        std::cout << "Warning: server.on(" << std::string(eventName.getData(), eventName.getLength()) << ") is not implemented!" << std::endl;
    }

    static void listen(const FunctionCallbackInfo<Value> &args) {
        uWS::Group<uWS::SERVER> *group = (uWS::Group<uWS::SERVER> *) args.Holder()->GetAlignedPointerFromInternalField(0);
        std::cout << "listen: " << hub.listen(args[0]->IntegerValue(), nullptr, 0, group) << std::endl;

        if (args[args.Length() - 1]->IsFunction()) {
            Local<Function>::Cast(args[args.Length() - 1])->Call(args.GetIsolate()->GetCurrentContext()->Global(), 0, nullptr);
        }
    }

    // var app = getExpressApp(express)
    static void getExpressApp(const FunctionCallbackInfo<Value> &args) {
        Isolate *isolate = args.GetIsolate();
        if (args[0]->IsFunction()) {
            Local<Function> express = Local<Function>::Cast(args[0]);
            express->Get(String::NewFromUtf8(isolate, "request"))->ToObject()->SetPrototype(Local<Object>::New(args.GetIsolate(), reqTemplate)->GetPrototype());
            express->Get(String::NewFromUtf8(isolate, "response"))->ToObject()->SetPrototype(Local<Object>::New(args.GetIsolate(), resTemplate)->GetPrototype());

            // also change app.listen?

            // change prototypes back?

            args.GetReturnValue().Set(express->NewInstance());
        }
    }

    static void getResponsePrototype(const FunctionCallbackInfo<Value> &args) {
        args.GetReturnValue().Set(Local<Object>::New(args.GetIsolate(), resTemplate)->GetPrototype());
    }

    static void getRequestPrototype(const FunctionCallbackInfo<Value> &args) {
        args.GetReturnValue().Set(Local<Object>::New(args.GetIsolate(), reqTemplate)->GetPrototype());
    }

    static Local<Function> getHttpServer(Isolate *isolate) {
        Local<FunctionTemplate> httpServer = FunctionTemplate::New(isolate, HttpServer::createServer);
        httpServer->InstanceTemplate()->SetInternalFieldCount(1);

        httpServer->Set(String::NewFromUtf8(isolate, "createServer"), FunctionTemplate::New(isolate, HttpServer::createServer));
        httpServer->Set(String::NewFromUtf8(isolate, "getExpressApp"), FunctionTemplate::New(isolate, HttpServer::getExpressApp));
        httpServer->Set(String::NewFromUtf8(isolate, "getResponsePrototype"), FunctionTemplate::New(isolate, HttpServer::getResponsePrototype));
        httpServer->Set(String::NewFromUtf8(isolate, "getRequestPrototype"), FunctionTemplate::New(isolate, HttpServer::getRequestPrototype));
        httpServer->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "listen"), FunctionTemplate::New(isolate, HttpServer::listen));
        httpServer->PrototypeTemplate()->Set(String::NewFromUtf8(isolate, "on"), FunctionTemplate::New(isolate, HttpServer::on));

        reqTemplate.Reset(isolate, Request::getTemplateObject(isolate));
        resTemplate.Reset(isolate, Response::getTemplateObject(isolate));

        Local<Function> httpServerLocal = httpServer->GetFunction();
        httpPersistent.Reset(isolate, httpServerLocal);
        return httpServerLocal;
    }
};
