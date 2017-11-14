
# SuperAgent

SuperAgent is light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve after being frustrated with many of the existing request APIs. It also works with Node.js!

     request
       .post('/api/pet')
       .send({ name: 'Manny', species: 'cat' })
       .set('X-API-Key', 'foobar')
       .set('Accept', 'application/json')
       .end(function(err, res){
         if (err || !res.ok) {
           alert('Oh no! error');
         } else {
           alert('yay got ' + JSON.stringify(res.body));
         }
       });

## Test documentation

The following [test documentation](docs/test.html) was generated with [Mocha's](http://mochajs.org/) "doc" reporter, and directly reflects the test suite. This provides an additional source of documentation.

## Request basics

A request can be initiated by invoking the appropriate method on the `request` object, then calling `.end()` to send the request. For example a simple __GET__ request:

     request
       .get('/search')
       .end(function(err, res){

       });

A method string may also be passed:

    request('GET', '/search').end(callback);

ES6 promises are supported. *Instead* of `.end()` you can call `.then()`:

    request('GET', '/search').then(success, failure);

The __Node__ client may also provide absolute URLs. In browsers absolute URLs won't work unless the server implements [CORS](#cors).

     request
       .get('http://example.com/search')
       .end(function(err, res){

       });

The __Node__ client supports making requests to [Unix Domain Sockets](http://en.wikipedia.org/wiki/Unix_domain_socket):

     // pattern: https?+unix://SOCKET_PATH/REQUEST_PATH
     //          Use `%2F` as `/` in SOCKET_PATH
     request
       .get('http+unix://%2Fabsolute%2Fpath%2Fto%2Funix.sock/search')
       .end(function(err, res){

       });

__DELETE__, __HEAD__, __PATCH__, __POST__, and __PUT__ requests can also be used, simply change the method name:

    request
      .head('/favicon.ico')
      .end(function(err, res){

      });

__DELETE__ can be also called as `.del()` for compatibility with old IE where `delete` is a reserved word.

  The HTTP method defaults to __GET__, so if you wish, the following is valid:

     request('/search', function(err, res){

     });

## Setting header fields

Setting header fields is simple, invoke `.set()` with a field name and value:

     request
       .get('/search')
       .set('API-Key', 'foobar')
       .set('Accept', 'application/json')
       .end(callback);

You may also pass an object to set several fields in a single call:

     request
       .get('/search')
       .set({ 'API-Key': 'foobar', Accept: 'application/json' })
       .end(callback);

## `GET` requests

The `.query()` method accepts objects, which when used with the __GET__ method will form a query-string. The following will produce the path `/search?query=Manny&range=1..5&order=desc`.

     request
       .get('/search')
       .query({ query: 'Manny' })
       .query({ range: '1..5' })
       .query({ order: 'desc' })
       .end(function(err, res){

       });

Or as a single object:

    request
      .get('/search')
      .query({ query: 'Manny', range: '1..5', order: 'desc' })
      .end(function(err, res){

      });

The `.query()` method accepts strings as well:

      request
        .get('/querystring')
        .query('search=Manny&range=1..5')
        .end(function(err, res){

        });

Or joined:

      request
        .get('/querystring')
        .query('search=Manny')
        .query('range=1..5')
        .end(function(err, res){

        });

## `HEAD` requests

You can also use the `.query()` method for HEAD requests. The following will produce the path `/users?email=joe@smith.com`.

      request
        .head('/users')
        .query({ email: 'joe@smith.com' })
        .end(function(err, res){

        });

## `POST` / `PUT` requests

A typical JSON __POST__ request might look a little like the following, where we set the Content-Type header field appropriately, and "write" some data, in this case just a JSON string.

      request.post('/user')
        .set('Content-Type', 'application/json')
        .send('{"name":"tj","pet":"tobi"}')
        .end(callback)

Since JSON is undoubtedly the most common, it's the _default_! The following example is equivalent to the previous.

      request.post('/user')
        .send({ name: 'tj', pet: 'tobi' })
        .end(callback)

Or using multiple `.send()` calls:

      request.post('/user')
        .send({ name: 'tj' })
        .send({ pet: 'tobi' })
        .end(callback)

By default sending strings will set the `Content-Type` to `application/x-www-form-urlencoded`,
  multiple calls will be concatenated with `&`, here resulting in `name=tj&pet=tobi`:

      request.post('/user')
        .send('name=tj')
        .send('pet=tobi')
        .end(callback);

SuperAgent formats are extensible, however by default "json" and "form" are supported. To send the data as `application/x-www-form-urlencoded` simply invoke `.type()` with "form", where the default is "json". This request will __POST__ the body "name=tj&pet=tobi".

      request.post('/user')
        .type('form')
        .send({ name: 'tj' })
        .send({ pet: 'tobi' })
        .end(callback)

Sending a [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) object is also supported. The following example will __POST__ the content of the HTML form identified by id="myForm":

      request.post('/user')
        .send(new FormData(document.getElementById('myForm')))
        .end(callback)

## Setting the `Content-Type`

The obvious solution is to use the `.set()` method:

     request.post('/user')
       .set('Content-Type', 'application/json')

As a short-hand the `.type()` method is also available, accepting
the canonicalized MIME type name complete with type/subtype, or
simply the extension name such as "xml", "json", "png", etc:

     request.post('/user')
       .type('application/json')

     request.post('/user')
       .type('json')

     request.post('/user')
       .type('png')

## Serializing request body

SuperAgent will automatically serialize JSON and forms. If you want to send the payload in a custom format, you can replace the built-in serialization with `.serialize()` method.

## Retrying requests

When given the `.retry()` method, SuperAgent will automatically retry requests, if they fail in a way that is transient or could be due to a flaky Internet connection.

This method has two optional arguments: number of retries (default 3) and a callback. It calls `callback(err, res)` before each retry. The callback may return `true`/`false` to control whether the request sould be retried (but the maximum number of retries is always applied).

     request
       .get('http://example.com/search')
       .retry(2)
       .end(callback);

Use `.retry()` only with requests that are *idempotent* (i.e. multiple requests reaching the server won't cause undesirable side effects like duplicate purchases).

## Setting Accept

In a similar fashion to the `.type()` method it is also possible to set the `Accept` header via the short hand method `.accept()`. Which references `request.types` as well allowing you to specify either the full canonicalized MIME type name as `type/subtype`, or the extension suffix form as "xml", "json", "png", etc. for convenience:

     request.get('/user')
       .accept('application/json')

     request.get('/user')
       .accept('json')

     request.post('/user')
       .accept('png')

### Facebook and Accept JSON

If you are calling Facebook's API, be sure to send an `Accept: application/json` header in your request. If you don't do this, Facebook will respond with `Content-Type: text/javascript; charset=UTF-8`, which SuperAgent will not parse and thus `res.body` will be undefined. You can do this with either `req.accept('json')` or `req.header('Accept', 'application/json')`. See [issue 1078](https://github.com/visionmedia/superagent/issues/1078) for details.

## Query strings

  `req.query(obj)` is a method which may be used to build up a query-string. For example populating `?format=json&dest=/login` on a __POST__:

    request
      .post('/')
      .query({ format: 'json' })
      .query({ dest: '/login' })
      .send({ post: 'data', here: 'wahoo' })
      .end(callback);

By default the query string is not assembled in any particular order. An asciibetically-sorted query string can be enabled with `req.sortQuery()`. You may also provide a custom sorting comparison function with `req.sortQuery(myComparisonFn)`. The comparison function should take 2 arguments and return a negative/zero/positive integer.

```js
 // default order
 request.get('/user')
   .query('name=Nick')
   .query('search=Manny')
   .sortQuery()
   .end(callback)

 // customized sort function
 request.get('/user')
   .query('name=Nick')
   .query('search=Manny')
   .sortQuery(function(a, b){
     return a.length - b.length;
   })
   .end(callback)
```

## TLS options

In Node.js SuperAgent supports methods to configure HTTPS requests:

- `.ca()`: Set the CA certificate(s) to trust
- `.cert()`: Set the client certificate chain(s)
- `.key()`: Set the client private key(s)
- `.pfx()`: Set the client PFX or PKCS12 encoded private key and certificate chain

For more information, see Node.js [https.request docs](https://nodejs.org/api/https.html#https_https_request_options_callback).

```js
var key = fs.readFileSync('key.pem'),
    cert = fs.readFileSync('cert.pem');

request
  .post('/client-auth')
  .key(key)
  .cert(cert)
  .end(callback);
```

```js
var ca = fs.readFileSync('ca.cert.pem');

request
  .post('https://localhost/private-ca-server')
  .ca(ca)
  .end(callback);
```

## Parsing response bodies

SuperAgent will parse known response-body data for you, currently supporting `application/x-www-form-urlencoded`, `application/json`, and `multipart/form-data`.

You can set a custom parser (that takes precedence over built-in parsers) with the `.buffer(true).parse(fn)` method. If response buffering is not enabled (`.buffer(false)`) then the `response` event will be emitted without waiting for the body parser to finish, so `response.body` won't be available.

### JSON / Urlencoded

The property `res.body` is the parsed object, for example if a request responded with the JSON string '{"user":{"name":"tobi"}}', `res.body.user.name` would be "tobi". Likewise the x-www-form-urlencoded value of "user[name]=tobi" would yield the same result. Only one level of nesting is supported. If you need more complex data, send JSON instead.

Arrays are sent by repeating the key. `.send({color: ['red','blue']})` sends `color=red&color=blue`. If you want the array keys to contain `[]` in their name, you must add it yourself, as SuperAgent doesn't add it automatically.

### Multipart

The Node client supports _multipart/form-data_ via the [Formidable](https://github.com/felixge/node-formidable) module. When parsing multipart responses, the object `res.files` is also available to you. Suppose for example a request responds with the following multipart body:

    --whoop
    Content-Disposition: attachment; name="image"; filename="tobi.png"
    Content-Type: image/png

    ... data here ...
    --whoop
    Content-Disposition: form-data; name="name"
    Content-Type: text/plain

    Tobi
    --whoop--

You would have the values `res.body.name` provided as "Tobi", and `res.files.image` as a `File` object containing the path on disk, filename, and other properties.

### Binary

In browsers, you may use `.responseType('blob')` to request handling of binary response bodies. This API is unnecessary when running in node.js. The supported argument values for this method are

- `'blob'` passed through to the XmlHTTPRequest `responseType` property
- `'arraybuffer'` passed through to the XmlHTTPRequest `responseType` property

```js
req.get('/binary.data')
  .responseType('blob')
  .end(function (error, res) {
    // res.body will be a browser native Blob type here
  });
```

For more information, see the Mozilla Developer Network [xhr.responseType docs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType).

## Response properties

Many helpful flags and properties are set on the `Response` object, ranging from the response text, parsed response body, header fields, status flags and more.

### Response text

The `res.text` property contains the unparsed response body string. This property is always present for the client API, and only when the mime type matches "text/*", "*/json", or "x-www-form-urlencoded" by default for node. The reasoning is to conserve memory, as buffering text of large bodies such as multipart files or images is extremely inefficient. To force buffering see the "Buffering responses" section.

### Response body

Much like SuperAgent can auto-serialize request data, it can also automatically parse it. When a parser is defined for the Content-Type, it is parsed, which by default includes "application/json" and "application/x-www-form-urlencoded". The parsed object is then available via `res.body`.

### Response header fields

The `res.header` contains an object of parsed header fields, lowercasing field names much like node does. For example `res.header['content-length']`.

### Response Content-Type

The Content-Type response header is special-cased, providing `res.type`, which is void of the charset (if any). For example the Content-Type of "text/html; charset=utf8" will provide "text/html" as `res.type`, and the `res.charset` property would then contain "utf8".

### Response status

The response status flags help determine if the request was a success, among other useful information, making SuperAgent ideal for interacting with RESTful web services. These flags are currently defined as:

     var type = status / 100 | 0;

     // status / class
     res.status = status;
     res.statusType = type;

     // basics
     res.info = 1 == type;
     res.ok = 2 == type;
     res.clientError = 4 == type;
     res.serverError = 5 == type;
     res.error = 4 == type || 5 == type;

     // sugar
     res.accepted = 202 == status;
     res.noContent = 204 == status || 1223 == status;
     res.badRequest = 400 == status;
     res.unauthorized = 401 == status;
     res.notAcceptable = 406 == status;
     res.notFound = 404 == status;
     res.forbidden = 403 == status;

## Aborting requests

To abort requests simply invoke the `req.abort()` method.

## Timeouts

Sometimes networks and servers get "stuck" and never respond after accepting a request. Set timeouts to avoid requests waiting forever.

  * `req.timeout({deadline:ms})` or `req.timeout(ms)` (where `ms` is a number of milliseconds > 0) sets a deadline for the entire request (including all redirects) to complete. If the response isn't fully downloaded within that time, the request will be aborted.

  * `req.timeout({response:ms})` sets maximum time to wait for the first byte to arrive from the server, but it does not limit how long the entire download can take. Response timeout should be a few seconds longer than just the time it takes server to respond, because it also includes time to make DNS lookup, TCP/IP and TLS connections.

You should use both `deadline` and `response` timeouts. This way you can use a short response timeout to detect unresponsive networks quickly, and a long deadline to give time for downloads on slow, but reliable, networks.

    request
      .get('/big-file?network=slow')
      .timeout({
        response: 5000,  // Wait 5 seconds for the server to start sending,
        deadline: 60000, // but allow 1 minute for the file to finish loading.
      })
      .end(function(err, res){
        if (err.timeout) { /* timed out! */ }
      });

Timeout errors have a `.timeout` property.

## Authentication

In both Node and browsers auth available via the `.auth()` method:

    request
      .get('http://local')
      .auth('tobi', 'learnboost')
      .end(callback);


In the _Node_ client Basic auth can be in the URL as "user:pass":

    request.get('http://tobi:learnboost@local').end(callback);

By default only `Basic` auth is used. In browser you can add `{type:'auto'}` to enable all methods built-in in the browser (Digest, NTLM, etc.):

    request.auth('digest', 'secret', {type:'auto'})

## Following redirects

By default up to 5 redirects will be followed, however you may specify this with the `res.redirects(n)` method:

    request
      .get('/some.png')
      .redirects(2)
      .end(callback);

## Agents for global state

### Saving cookies

In Node SuperAgent does not save cookies by default, but you can use the `.agent()` method to create a copy of SuperAgent that saves cookies. Each copy has a separate cookie jar.

    const agent = request.agent();
    agent
      .post('/login')
      .then(() => {
        return agent.get('/cookied-page');
      });

In browsers cookies are managed automatically by the browser, so the `.agent()` does not isolate cookies.

### Default options for multiple requests

Regular request methods (`.use()`, `.set()`, `.auth()`) called on the agent will be used as defaults for all requests made by that agent.

    const agent = request.agent()
      .use(plugin)
      .auth(shared);

    await agent.get('/with-plugin-and-auth');
    await agent.get('/also-with-plugin-and-auth');

## Piping data

The Node client allows you to pipe data to and from the request. For example piping a file's contents as the request:

    const request = require('superagent');
    const fs = require('fs');

    const stream = fs.createReadStream('path/to/my.json');
    const req = request.post('/somewhere');
    req.type('json');
    stream.pipe(req);

Note that when you pipe to a request, superagent sends the piped data with [chunked transfer encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding), which isn't supported by all servers (for instance, Python WSGI servers).

Or piping the response to a file:

    const stream = fs.createWriteStream('path/to/my.json');
    const req = request.get('/some.json');
    req.pipe(stream);

## Multipart requests

SuperAgent is also great for _building_ multipart requests for which it provides methods `.attach()` and `.field()`.

When you use `.field()` or `.attach()` you can't use `.send()` and you *must not* set `Content-Type` (the correct type will be set for you).

### Attaching files

To send a file use `.attach(name, [file], [options])`. You can attach multiple files by calling `.attach` multiple times. The arguments are:

 * `name` — filed name in the form.
 * `file` — either string with file path or `Blob`/`Buffer` object.
 * `options` — (optional) either string with custom file name or `{filename: string}` object. In Node also `{contentType: 'mime/type'}` is supported. In browser create a `Blob` with an appropriate type instead.

<br>

    request
      .post('/upload')
      .attach('image1', 'path/to/felix.jpeg')
      .attach('image2', imageBuffer, 'luna.jpeg')
      .field('caption', 'My cats')
      .end(callback);

### Field values

Much like form fields in HTML, you can set field values with `.field(name, value)` and `.field({name: value})`. Suppose you want to upload a few images with your name and email, your request might look something like this:

     request
       .post('/upload')
       .field('user[name]', 'Tobi')
       .field('user[email]', 'tobi@learnboost.com')
       .field('friends[]', ['loki', 'jane'])
       .attach('image', 'path/to/tobi.png')
       .end(callback);

## Compression

The node client supports compressed responses, best of all, you don't have to do anything! It just works.

## Buffering responses

To force buffering of response bodies as `res.text` you may invoke `req.buffer()`. To undo the default of buffering for text responses such as "text/plain", "text/html" etc you may invoke `req.buffer(false)`.

When buffered the `res.buffered` flag is provided, you may use this to handle both buffered and unbuffered responses in the same callback.

## CORS

For security reasons, browsers will block cross-origin requests unless the server opts-in using CORS headers. Browsers will also make extra __OPTIONS__ requests to check what HTTP headers and methods are allowed by the server. [Read more about CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

The `.withCredentials()` method enables the ability to send cookies from the origin, however only when `Access-Control-Allow-Origin` is _not_ a wildcard ("*"), and `Access-Control-Allow-Credentials` is "true".

    request
      .get('http://api.example.com:4001/')
      .withCredentials()
      .then(function(res){
        assert.equal(200, res.status);
        assert.equal('tobi', res.text);
      })

## Error handling

Your callback function will always be passed two arguments: error and response. If no error occurred, the first argument will be null:

    request
     .post('/upload')
     .attach('image', 'path/to/tobi.png')
     .end(function(err, res){

     });

An "error" event is also emitted, with you can listen for:

    request
      .post('/upload')
      .attach('image', 'path/to/tobi.png')
      .on('error', handle)
      .end(function(err, res){

      });

Note that **superagent considers 4xx and 5xx responses (as well as unhandled 3xx responses) errors by default**. For example, if you get a `304 Not modified`, `403 Forbidden` or `500 Internal server error` response, this status information will be available via `err.status`. Errors from such responses also contain an `err.response` field with all of the properties mentioned in "[Response properties](#response-properties)". The library behaves in this way to handle the common case of wanting success responses and treating HTTP error status codes as errors while still allowing for custom logic around specific error conditions.

Network failures, timeouts, and other errors that produce no response will contain no `err.status` or `err.response` fields.

If you wish to handle 404 or other HTTP error responses, you can query the `err.status` property. When an HTTP error occurs (4xx or 5xx response) the `res.error` property is an `Error` object, this allows you to perform checks such as:

    if (err && err.status === 404) {
      alert('oh no ' + res.body.message);
    }
    else if (err) {
      // all other error types we handle generically
    }

Alternatively, you can use the `.ok(callback)` method to decide whether a response is an error or not. The callback to the `ok` function gets a response and returns `true` if the response should be interpreted as success.

    request.get('/404')
      .ok(res => res.status < 500)
      .then(response => {
        // reads 404 page as a successful response
      })

## Progress tracking

SuperAgent fires `progress` events on upload and download of large files.

    request.post(url)
      .attach('field_name', file)
      .on('progress', event => {
        /* the event is:
        {
          direction: "upload" or "download"
          percent: 0 to 100 // may be missing if file size is unknown
          total: // total file size, may be missing
          loaded: // bytes downloaded or uploaded so far
        } */
      })
      .end()

## Promise and Generator support

SuperAgent's request is a "thenable" object that's compatible with JavaScript promises and `async`/`await` syntax. Do not call `.end()` if you're using promises.

Libraries like [co](https://github.com/tj/co) or a web framework like [koa](https://github.com/koajs/koa) can `yield` on any SuperAgent method:

    const req = request
      .get('http://local')
      .auth('tobi', 'learnboost');
    const res = yield req;

Note that SuperAgent expects the global `Promise` object to be present. You'll need a polyfill to use promises in Internet Explorer or Node.js 0.10.

## Browser and node versions

SuperAgent has two implementations: one for web browsers (using XHR) and one for Node.JS (using core http module). By default Browserify and WebPack will pick the browser version.

If want to use WebPack to compile code for Node.JS, you *must* specify [node target](https://webpack.github.io/docs/configuration.html#target) in its configuration.

### Using browser version in electron

[Electron](http://electron.atom.io/) developers report if you would prefer to use the browser version of SuperAgent instead of the Node version, you can `require('superagent/superagent')`. Your requests will now show up in the Chrome developer tools Network tab. Note this environment is not covered by automated test suite and not officially supported.
