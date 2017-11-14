"use strict";

var TextEncoder = require("text-encoding").TextEncoder;

var configureLogError = require("../configure-logger");
var sinonEvent = require("../event");
var extend = require("just-extend");

function getWorkingXHR(globalScope) {
    var supportsXHR = typeof globalScope.XMLHttpRequest !== "undefined";
    if (supportsXHR) {
        return globalScope.XMLHttpRequest;
    }

    var supportsActiveX = typeof globalScope.ActiveXObject !== "undefined";
    if (supportsActiveX) {
        return function () {
            return new globalScope.ActiveXObject("MSXML2.XMLHTTP.3.0");
        };
    }

    return false;
}

var supportsProgress = typeof ProgressEvent !== "undefined";
var supportsCustomEvent = typeof CustomEvent !== "undefined";
var supportsFormData = typeof FormData !== "undefined";
var supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
var supportsBlob = require("./blob").isSupported;
var isReactNative = global.navigator && global.navigator.product === "ReactNative";
var sinonXhr = { XMLHttpRequest: global.XMLHttpRequest };
sinonXhr.GlobalXMLHttpRequest = global.XMLHttpRequest;
sinonXhr.GlobalActiveXObject = global.ActiveXObject;
sinonXhr.supportsActiveX = typeof sinonXhr.GlobalActiveXObject !== "undefined";
sinonXhr.supportsXHR = typeof sinonXhr.GlobalXMLHttpRequest !== "undefined";
sinonXhr.workingXHR = getWorkingXHR(global);
sinonXhr.supportsTimeout =
    (sinonXhr.supportsXHR && "timeout" in (new sinonXhr.GlobalXMLHttpRequest()));
sinonXhr.supportsCORS = isReactNative ||
    (sinonXhr.supportsXHR && "withCredentials" in (new sinonXhr.GlobalXMLHttpRequest()));

var unsafeHeaders = {
    "Accept-Charset": true,
    "Accept-Encoding": true,
    "Connection": true,
    "Content-Length": true,
    "Cookie": true,
    "Cookie2": true,
    "Content-Transfer-Encoding": true,
    "Date": true,
    "Expect": true,
    "Host": true,
    "Keep-Alive": true,
    "Referer": true,
    "TE": true,
    "Trailer": true,
    "Transfer-Encoding": true,
    "Upgrade": true,
    "User-Agent": true,
    "Via": true
};


function EventTargetHandler() {
    var self = this;
    var events = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];

    function addEventListener(eventName) {
        self.addEventListener(eventName, function (event) {
            var listener = self["on" + eventName];

            if (listener && typeof listener === "function") {
                listener.call(this, event);
            }
        });
    }

    events.forEach(addEventListener);
}

EventTargetHandler.prototype = sinonEvent.EventTarget;

// Note that for FakeXMLHttpRequest to work pre ES5
// we lose some of the alignment with the spec.
// To ensure as close a match as possible,
// set responseType before calling open, send or respond;
function FakeXMLHttpRequest(config) {
    EventTargetHandler.call(this);
    this.readyState = FakeXMLHttpRequest.UNSENT;
    this.requestHeaders = {};
    this.requestBody = null;
    this.status = 0;
    this.statusText = "";
    this.upload = new EventTargetHandler();
    this.responseType = "";
    this.response = "";
    this.logError = configureLogError(config);

    if (sinonXhr.supportsTimeout) {
        this.timeout = 0;
    }

    if (sinonXhr.supportsCORS) {
        this.withCredentials = false;
    }

    if (typeof FakeXMLHttpRequest.onCreate === "function") {
        FakeXMLHttpRequest.onCreate(this);
    }
}

function verifyState(xhr) {
    if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
        throw new Error("INVALID_STATE_ERR");
    }

    if (xhr.sendFlag) {
        throw new Error("INVALID_STATE_ERR");
    }
}

function getHeader(headers, header) {
    var foundHeader = Object.keys(headers).filter(function (h) {
        return h.toLowerCase() === header.toLowerCase();
    });

    return foundHeader[0] || null;
}

function excludeSetCookie2Header(header) {
    return !/^Set-Cookie2?$/i.test(header);
}

// largest arity in XHR is 5 - XHR#open
var apply = function (obj, method, args) {
    switch (args.length) {
        case 0: return obj[method]();
        case 1: return obj[method](args[0]);
        case 2: return obj[method](args[0], args[1]);
        case 3: return obj[method](args[0], args[1], args[2]);
        case 4: return obj[method](args[0], args[1], args[2], args[3]);
        case 5: return obj[method](args[0], args[1], args[2], args[3], args[4]);
        default: throw new Error("Unhandled case");
    }
};

FakeXMLHttpRequest.filters = [];
FakeXMLHttpRequest.addFilter = function addFilter(fn) {
    this.filters.push(fn);
};
FakeXMLHttpRequest.defake = function defake(fakeXhr, xhrArgs) {
    var xhr = new sinonXhr.workingXHR(); // eslint-disable-line new-cap

    [
        "open",
        "setRequestHeader",
        "send",
        "abort",
        "getResponseHeader",
        "getAllResponseHeaders",
        "addEventListener",
        "overrideMimeType",
        "removeEventListener"
    ].forEach(function (method) {
        fakeXhr[method] = function () {
            return apply(xhr, method, arguments);
        };
    });

    var copyAttrs = function (args) {
        args.forEach(function (attr) {
            fakeXhr[attr] = xhr[attr];
        });
    };

    var stateChange = function stateChange() {
        fakeXhr.readyState = xhr.readyState;
        if (xhr.readyState >= FakeXMLHttpRequest.HEADERS_RECEIVED) {
            copyAttrs(["status", "statusText"]);
        }
        if (xhr.readyState >= FakeXMLHttpRequest.LOADING) {
            copyAttrs(["responseText", "response"]);
        }
        if (xhr.readyState === FakeXMLHttpRequest.DONE) {
            copyAttrs(["responseXML"]);
        }
        if (fakeXhr.onreadystatechange) {
            fakeXhr.onreadystatechange.call(fakeXhr, { target: fakeXhr });
        }
    };

    if (xhr.addEventListener) {
        Object.keys(fakeXhr.eventListeners).forEach(function (event) {
            /*eslint-disable no-loop-func*/
            fakeXhr.eventListeners[event].forEach(function (handler) {
                xhr.addEventListener(event, handler);
            });
            /*eslint-enable no-loop-func*/
        });

        xhr.addEventListener("readystatechange", stateChange);
    } else {
        xhr.onreadystatechange = stateChange;
    }
    apply(xhr, "open", xhrArgs);
};
FakeXMLHttpRequest.useFilters = false;

function verifyRequestOpened(xhr) {
    if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
        throw new Error("INVALID_STATE_ERR - " + xhr.readyState);
    }
}

function verifyRequestSent(xhr) {
    if (xhr.readyState === FakeXMLHttpRequest.DONE) {
        throw new Error("Request done");
    }
}

function verifyHeadersReceived(xhr) {
    if (xhr.async && xhr.readyState !== FakeXMLHttpRequest.HEADERS_RECEIVED) {
        throw new Error("No headers received");
    }
}

function verifyResponseBodyType(body, responseType) {
    var error = null;
    var isString = typeof body === "string";

    if (responseType === "arraybuffer") {

        if (!isString && !(body instanceof ArrayBuffer)) {
            error = new Error("Attempted to respond to fake XMLHttpRequest with " +
                               body + ", which is not a string or ArrayBuffer.");
            error.name = "InvalidBodyException";
        }
    }
    else if (!isString) {
        error = new Error("Attempted to respond to fake XMLHttpRequest with " +
                           body + ", which is not a string.");
        error.name = "InvalidBodyException";
    }

    if (error) {
        throw error;
    }
}

function convertToArrayBuffer(body, encoding) {
    if (body instanceof ArrayBuffer) {
        return body;
    }

    return new TextEncoder(encoding || "utf-8").encode(body).buffer;
}

function isXmlContentType(contentType) {
    return !contentType || /(text\/xml)|(application\/xml)|(\+xml)/.test(contentType);
}

function convertResponseBody(responseType, contentType, body) {
    if (responseType === "" || responseType === "text") {
        return body;
    } else if (supportsArrayBuffer && responseType === "arraybuffer") {
        return convertToArrayBuffer(body);
    } else if (responseType === "json") {
        try {
            return JSON.parse(body);
        } catch (e) {
            // Return parsing failure as null
            return null;
        }
    } else if (supportsBlob && responseType === "blob") {
        var blobOptions = {};
        if (contentType) {
            blobOptions.type = contentType;
        }
        return new Blob([convertToArrayBuffer(body)], blobOptions);
    } else if (responseType === "document") {
        if (isXmlContentType(contentType)) {
            return FakeXMLHttpRequest.parseXML(body);
        }
        return null;
    }
    throw new Error("Invalid responseType " + responseType);
}

function clearResponse(xhr) {
    if (xhr.responseType === "" || xhr.responseType === "text") {
        xhr.response = xhr.responseText = "";
    } else {
        xhr.response = xhr.responseText = null;
    }
    xhr.responseXML = null;
}

/**
 * Steps to follow when there is an error, according to:
 * https://xhr.spec.whatwg.org/#request-error-steps
 */
function requestErrorSteps(xhr) {
    clearResponse(xhr);
    xhr.errorFlag = true;
    xhr.requestHeaders = {};
    xhr.responseHeaders = {};

    if (xhr.readyState !== FakeXMLHttpRequest.UNSENT && xhr.sendFlag
        && xhr.readyState !== FakeXMLHttpRequest.DONE) {
        xhr.readyStateChange(FakeXMLHttpRequest.DONE);
        xhr.sendFlag = false;
    }
}

FakeXMLHttpRequest.parseXML = function parseXML(text) {
    // Treat empty string as parsing failure
    if (text !== "") {
        try {
            if (typeof DOMParser !== "undefined") {
                var parser = new DOMParser();
                return parser.parseFromString(text, "text/xml");
            }
            var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML(text);
            return xmlDoc;
        } catch (e) {
            // Unable to parse XML - no biggie
        }
    }

    return null;
};

FakeXMLHttpRequest.statusCodes = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    300: "Multiple Choice",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    422: "Unprocessable Entity",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported"
};

extend(FakeXMLHttpRequest.prototype, sinonEvent.EventTarget, {
    async: true,

    open: function open(method, url, async, username, password) {
        this.method = method;
        this.url = url;
        this.async = typeof async === "boolean" ? async : true;
        this.username = username;
        this.password = password;
        clearResponse(this);
        this.requestHeaders = {};
        this.sendFlag = false;

        if (FakeXMLHttpRequest.useFilters === true) {
            var xhrArgs = arguments;
            var defake = FakeXMLHttpRequest.filters.some(function (filter) {
                return filter.apply(this, xhrArgs);
            });
            if (defake) {
                FakeXMLHttpRequest.defake(this, arguments);
                return;
            }
        }
        this.readyStateChange(FakeXMLHttpRequest.OPENED);
    },

    readyStateChange: function readyStateChange(state) {
        this.readyState = state;

        var readyStateChangeEvent = new sinonEvent.Event("readystatechange", false, false, this);
        var event, progress;

        if (typeof this.onreadystatechange === "function") {
            try {
                this.onreadystatechange(readyStateChangeEvent);
            } catch (e) {
                this.logError("Fake XHR onreadystatechange handler", e);
            }
        }

        if (this.readyState === FakeXMLHttpRequest.DONE) {
            if (this.timedOut || this.aborted || this.status === 0) {
                progress = {loaded: 0, total: 0};
                event = (this.timedOut && "timeout") || (this.aborted && "abort") || "error";
            } else {
                progress = {loaded: 100, total: 100};
                event = "load";
            }

            if (supportsProgress) {
                this.upload.dispatchEvent(new sinonEvent.ProgressEvent("progress", progress, this));
                this.upload.dispatchEvent(new sinonEvent.ProgressEvent(event, progress, this));
                this.upload.dispatchEvent(new sinonEvent.ProgressEvent("loadend", progress, this));
            }

            this.dispatchEvent(new sinonEvent.ProgressEvent("progress", progress, this));
            this.dispatchEvent(new sinonEvent.ProgressEvent(event, progress, this));
            this.dispatchEvent(new sinonEvent.ProgressEvent("loadend", progress, this));
        }

        this.dispatchEvent(readyStateChangeEvent);
    },

    setRequestHeader: function setRequestHeader(header, value) {
        verifyState(this);

        var checkUnsafeHeaders = true;
        if (typeof this.unsafeHeadersEnabled === "function") {
            checkUnsafeHeaders = this.unsafeHeadersEnabled();
        }

        if (checkUnsafeHeaders && (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header))) {
            throw new Error("Refused to set unsafe header \"" + header + "\"");
        }

        if (this.requestHeaders[header]) {
            this.requestHeaders[header] += "," + value;
        } else {
            this.requestHeaders[header] = value;
        }
    },

    setStatus: function setStatus(status) {
        var sanitizedStatus = typeof status === "number" ? status : 200;

        verifyRequestOpened(this);
        this.status = sanitizedStatus;
        this.statusText = FakeXMLHttpRequest.statusCodes[sanitizedStatus];
    },

    // Helps testing
    setResponseHeaders: function setResponseHeaders(headers) {
        verifyRequestOpened(this);

        var responseHeaders = this.responseHeaders = {};

        Object.keys(headers).forEach(function (header) {
            responseHeaders[header] = headers[header];
        });

        if (this.async) {
            this.readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
        } else {
            this.readyState = FakeXMLHttpRequest.HEADERS_RECEIVED;
        }
    },

    // Currently treats ALL data as a DOMString (i.e. no Document)
    send: function send(data) {
        verifyState(this);

        if (!/^(head)$/i.test(this.method)) {
            var contentType = getHeader(this.requestHeaders, "Content-Type");
            if (this.requestHeaders[contentType]) {
                var value = this.requestHeaders[contentType].split(";");
                this.requestHeaders[contentType] = value[0] + ";charset=utf-8";
            } else if (supportsFormData && !(data instanceof FormData)) {
                this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8";
            }

            this.requestBody = data;
        }

        this.errorFlag = false;
        this.sendFlag = this.async;
        clearResponse(this);
        this.readyStateChange(FakeXMLHttpRequest.OPENED);

        if (typeof this.onSend === "function") {
            this.onSend(this);
        }

        // Only listen if setInterval and Date are a stubbed.
        if (sinonXhr.supportsTimeout && typeof setInterval.clock === "object" && typeof Date.clock === "object") {
            var initiatedTime = Date.now();
            var self = this;

            // Listen to any possible tick by fake timers and check to see if timeout has
            // been exceeded. It's important to note that timeout can be changed while a request
            // is in flight, so we must check anytime the end user forces a clock tick to make
            // sure timeout hasn't changed.
            // https://xhr.spec.whatwg.org/#dfnReturnLink-2
            var clearIntervalId = setInterval(function () {
                // Check if the readyState has been reset or is done. If this is the case, there
                // should be no timeout. This will also prevent aborted requests and
                // fakeServerWithClock from triggering unnecessary responses.
                if (self.readyState === FakeXMLHttpRequest.UNSENT
                  || self.readyState === FakeXMLHttpRequest.DONE) {
                    clearInterval(clearIntervalId);
                } else if (typeof self.timeout === "number" && self.timeout > 0) {
                    if (Date.now() >= (initiatedTime + self.timeout)) {
                        self.triggerTimeout();
                        clearInterval(clearIntervalId);
                    }
                }
            }, 1);
        }

        this.dispatchEvent(new sinonEvent.Event("loadstart", false, false, this));
    },

    abort: function abort() {
        this.aborted = true;
        requestErrorSteps(this);
        this.readyState = FakeXMLHttpRequest.UNSENT;
    },

    error: function () {
        clearResponse(this);
        this.errorFlag = true;
        this.requestHeaders = {};
        this.responseHeaders = {};

        this.readyStateChange(FakeXMLHttpRequest.DONE);
    },

    triggerTimeout: function triggerTimeout() {
        if (sinonXhr.supportsTimeout) {
            this.timedOut = true;
            requestErrorSteps(this);
        }
    },

    getResponseHeader: function getResponseHeader(header) {
        if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
            return null;
        }

        if (/^Set-Cookie2?$/i.test(header)) {
            return null;
        }

        header = getHeader(this.responseHeaders, header);

        return this.responseHeaders[header] || null;
    },

    getAllResponseHeaders: function getAllResponseHeaders() {
        if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
            return "";
        }

        var responseHeaders = this.responseHeaders;
        var headers = Object.keys(responseHeaders)
            .filter(excludeSetCookie2Header)
            .reduce(function (prev, header) {
                var value = responseHeaders[header];

                return prev + (header + ": " + value + "\r\n");
            }, "");

        return headers;
    },

    setResponseBody: function setResponseBody(body) {
        verifyRequestSent(this);
        verifyHeadersReceived(this);
        verifyResponseBodyType(body, this.responseType);
        var contentType = this.overriddenMimeType || this.getResponseHeader("Content-Type");

        var isTextResponse = this.responseType === "" || this.responseType === "text";
        clearResponse(this);
        if (this.async) {
            var chunkSize = this.chunkSize || 10;
            var index = 0;

            do {
                this.readyStateChange(FakeXMLHttpRequest.LOADING);

                if (isTextResponse) {
                    this.responseText = this.response += body.substring(index, index + chunkSize);
                }
                index += chunkSize;
            } while (index < body.length);
        }

        this.response = convertResponseBody(this.responseType, contentType, body);
        if (isTextResponse) {
            this.responseText = this.response;
        }

        if (this.responseType === "document") {
            this.responseXML = this.response;
        } else if (this.responseType === "" && isXmlContentType(contentType)) {
            this.responseXML = FakeXMLHttpRequest.parseXML(this.responseText);
        }
        this.readyStateChange(FakeXMLHttpRequest.DONE);
    },

    respond: function respond(status, headers, body) {
        this.setStatus(status);
        this.setResponseHeaders(headers || {});
        this.setResponseBody(body || "");
    },

    uploadProgress: function uploadProgress(progressEventRaw) {
        if (supportsProgress) {
            this.upload.dispatchEvent(new sinonEvent.ProgressEvent("progress", progressEventRaw));
        }
    },

    downloadProgress: function downloadProgress(progressEventRaw) {
        if (supportsProgress) {
            this.dispatchEvent(new sinonEvent.ProgressEvent("progress", progressEventRaw));
        }
    },

    uploadError: function uploadError(error) {
        if (supportsCustomEvent) {
            this.upload.dispatchEvent(new sinonEvent.CustomEvent("error", {detail: error}));
        }
    },

    overrideMimeType: function overrideMimeType(type) {
        if (this.readyState >= FakeXMLHttpRequest.LOADING) {
            throw new Error("INVALID_STATE_ERR");
        }
        this.overriddenMimeType = type;
    }
});

var states = {
    UNSENT: 0,
    OPENED: 1,
    HEADERS_RECEIVED: 2,
    LOADING: 3,
    DONE: 4
};

extend(FakeXMLHttpRequest, states);
extend(FakeXMLHttpRequest.prototype, states);

function useFakeXMLHttpRequest() {
    FakeXMLHttpRequest.restore = function restore(keepOnCreate) {
        if (sinonXhr.supportsXHR) {
            global.XMLHttpRequest = sinonXhr.GlobalXMLHttpRequest;
        }

        if (sinonXhr.supportsActiveX) {
            global.ActiveXObject = sinonXhr.GlobalActiveXObject;
        }

        delete FakeXMLHttpRequest.restore;

        if (keepOnCreate !== true) {
            delete FakeXMLHttpRequest.onCreate;
        }
    };
    if (sinonXhr.supportsXHR) {
        global.XMLHttpRequest = FakeXMLHttpRequest;
    }

    if (sinonXhr.supportsActiveX) {
        global.ActiveXObject = function ActiveXObject(objId) {
            if (objId === "Microsoft.XMLHTTP" || /^Msxml2\.XMLHTTP/i.test(objId)) {

                return new FakeXMLHttpRequest();
            }

            return new sinonXhr.GlobalActiveXObject(objId);
        };
    }

    return FakeXMLHttpRequest;
}

module.exports = {
    xhr: sinonXhr,
    FakeXMLHttpRequest: FakeXMLHttpRequest,
    useFakeXMLHttpRequest: useFakeXMLHttpRequest
};
