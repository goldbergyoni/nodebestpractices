'use strict';

var fs      = require('fs'),
    http    = require('http'),
    https   = require('https'),
    parse   = require('./parse'),
    util    = require('./util'),
    $Ref    = require('./ref'),
    Promise = require('./promise'),
    url     = require('url'),
    ono     = require('ono');

module.exports = read;

/**
 * Reads the specified file path or URL, possibly from cache.
 *
 * @param {string} path - This path MUST already be resolved, since `read` doesn't know the resolution context
 * @param {$Refs} $refs
 * @param {$RefParserOptions} options
 *
 * @returns {Promise}
 * The promise resolves with an object that contains a {@link $Ref}
 * and a flag indicating whether the {@link $Ref} came from cache or not.
 */
function read(path, $refs, options) {
  try {
    // Remove the URL fragment, if any
    path = util.path.stripHash(path);
    util.debug('Reading %s', path);

    // Return from cache, if possible
    var $ref = $refs._get$Ref(path);
    if ($ref && !$ref.isExpired()) {
      util.debug('    cached from %s', $ref.pathType);
      return Promise.resolve({
        $ref: $ref,
        cached: true
      });
    }

    // Add a placeholder $ref to the cache, so we don't read this URL multiple times
    $ref = new $Ref($refs, path);

    // Read and return the $ref
    return read$Ref($ref, options);
  }
  catch (e) {
    return Promise.reject(e);
  }
}

/**
 * Reads the specified file path or URL and updates the given {@link $Ref} accordingly.
 *
 * @param {$Ref} $ref - The {@link $Ref} to read and update
 * @param {$RefParserOptions} options
 *
 * @returns {Promise}
 * The promise resolves with the updated {@link $Ref} object (the same instance that was passed in)
 */
function read$Ref($ref, options) {
  try {
    var promise = options.$refs.external && (read$RefFile($ref, options) || read$RefUrl($ref, options));

    if (promise) {
      return promise
        .then(function(data) {
          // Update the $ref with the parsed file contents
          var value = parse(data, $ref.path, options);
          $ref.setValue(value, options);

          return {
            $ref: $ref,
            cached: false
          };
        });
    }
    else {
      return Promise.reject(ono.syntax('Unable to resolve $ref pointer "%s"', $ref.path));
    }
  }
  catch (e) {
    return Promise.reject(e);
  }
}

/**
 * If the given {@link $Ref#path} is a local file, then the file is read
 * and {@link $Ref#type} is set to "fs".
 *
 * @param {$Ref} $ref - The {@link $Ref} to read and update
 * @param {$RefParserOptions} options
 *
 * @returns {Promise|undefined}
 * Returns a promise if {@link $Ref#path} is a local file.
 * The promise resolves with the raw file contents.
 */
function read$RefFile($ref, options) {
  if (process.browser || util.path.isUrl($ref.path)) {
    return;
  }

  $ref.pathType = 'fs';
  return new Promise(function(resolve, reject) {
    var file;
    try {
      file = util.path.urlToLocalPath($ref.path);
    }
    catch (err) {
      reject(ono.uri(err, 'Malformed URI: %s', $ref.path));
    }

    util.debug('Opening file: %s', file);

    try {
      fs.readFile(file, function(err, data) {
        if (err) {
          reject(ono(err, 'Error opening file "%s"', $ref.path));
        }
        else {
          resolve(data);
        }
      });
    }
    catch (err) {
      reject(ono(err, 'Error opening file "%s"', file));
    }
  });
}

/**
 * If the given {@link $Ref#path} is a URL, then the file is downloaded
 * and {@link $Ref#type} is set to "http" or "https".
 *
 * @param {$Ref} $ref - The {@link $Ref} to read and update
 * @param {$RefParserOptions} options
 *
 * @returns {Promise|undefined}
 * Returns a promise if {@link $Ref#path} is a URL.
 * The promise resolves with the raw file contents.
 */
function read$RefUrl($ref, options) {
  var u = url.parse($ref.path);

  if (process.browser && !u.protocol) {
    // Use the protocol of the current page
    u.protocol = url.parse(location.href).protocol;
  }

  if (u.protocol === 'http:') {
    $ref.pathType = 'http';
    return download(http, u, options);
  }
  else if (u.protocol === 'https:') {
    $ref.pathType = 'https';
    return download(https, u, options);
  }
}

/**
 * Downloads the specified file.
 *
 * @param {http|https} protocol - Download via HTTP or HTTPS
 * @param {Url} u - A parsed {@link Url} object
 * @param {$RefParserOptions} options
 *
 * @returns {Promise}
 * The promise resolves with the raw downloaded data, or rejects if there is an HTTP error.
 */
function download(protocol, u, options) {
  return new Promise(function(resolve, reject) {
    try {
      util.debug('Downloading file: %s', u);

      var req = protocol.get(
          {
            hostname: u.hostname,
            port: u.port,
            path: u.path,
            auth: u.auth
          },
          onResponse
      );

      if (typeof req.setTimeout === 'function') {
        req.setTimeout(5000);
      }

      req.on('timeout', function() {
        req.abort();
      });

      req.on('error', function(err) {
        reject(ono(err, 'Error downloading file "%s"', u.href));
      });
    }
    catch (err) {
      reject(ono(err, 'Error downloading file "%s"', u.href));
    }

    /**
     * Handles the response
     *
     * @param {Response} res
     */
    function onResponse(res) {
      var body;

      res.on('data', function(data) {
        if (body) {
          body = Buffer.concat([new Buffer(body), new Buffer(data)]);
        }
        else {
          body = data;
        }
      });

      res.on('end', function() {
        if (res.statusCode >= 400) {
          reject(ono('GET %s \nHTTP ERROR %d \n%s', u.href, res.statusCode, body));
        }
        else if ((res.statusCode === 204 || !body || !body.length) && !options.allow.empty) {
          reject(ono('GET %s \nHTTP 204: No Content', u.href));
        }
        else {
          resolve(body || '');
        }
      });

      res.on('error', function(err) {
        reject(ono(err, 'Error downloading file "%s"', u.href));
      });
    }
  });
}
