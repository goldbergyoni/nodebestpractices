"use strict";
var fs_1 = require("fs");
var path_1 = require("path");
var clients = require('../clients/all');
var metadata = require('../apis/metadata');
var api_loader = require('../lib/api_loader');
fs_1.writeFileSync(path_1.resolve(__dirname, '..', 'SERVICES.md'), Object.keys(clients).reduce(function (serviceTable, clientId) {
    var cid = clientId.toLowerCase();
    return serviceTable + Object.keys(api_loader.services[cid]).reverse()
        .map(function (version) {
        var model = api_loader(cid, version);
        return model.metadata.serviceFullName + " | AWS." + clientId + " | " + version + " | " + (metadata[cid].cors === true ? ':tada:' : '') + " |";
    }).join("\n") + "\n";
}, "The SDK currently supports the following services:\n\n<p class=\"note\"><strong>Note</strong>:\nAlthough all services are supported in the browser version of the SDK,\nnot all of the services are available in the default hosted build (using the\nscript tag provided above). Instructions on how to build a\ncustom version of the SDK with individual services are provided\nin the \"<a href=\"http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/building-sdk-for-browsers.html\">Building the SDK for Browsers</a>\" section of the SDK Developer Guide.\n</p>\n\nService Name | Class Name | API Version | Allows CORS |\n------------ | ---------- | ----------- | ----------- |\n"));
