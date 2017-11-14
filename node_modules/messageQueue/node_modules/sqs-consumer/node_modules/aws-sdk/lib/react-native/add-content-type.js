function addContentType(req) {
  var httpRequest = req.httpRequest || {};
  var headers = httpRequest.headers;
  // We don't want to force a content type on presigned urls
  if (headers && !req.isPresigned()) {
    if (httpRequest.body && !headers['Content-Type']) {
      // React Native's android XHR requires Content-Type to be defined if there is a body
      headers['Content-Type'] = '';
    }
  }
}

module.exports = {
    addContentType: addContentType
};