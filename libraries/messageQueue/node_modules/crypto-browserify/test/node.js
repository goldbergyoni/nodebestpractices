var test = require('tape');

var crypto = require('crypto');
var cryptoB = require('../');
var fs = require('fs');

function assertSame(name, fn) {
    test(name, function (t) {
        t.plan(1);
        fn(crypto, function (err, expected) {
            fn(cryptoB, function (err, actual) {
                t.equal(actual, expected);
                t.end();
            });
        });
    });
}

var algorithms = ['sha1', 'sha256', 'md5'];
var encodings = ['binary', 'hex', 'base64'];


algorithms.forEach(function (algorithm) {
    encodings.forEach(function (encoding) {
        assertSame(algorithm + ' hash using ' + encoding, function (crypto, cb) {
            cb(null, crypto.createHash(algorithm).update('hellø', 'utf-8').digest(encoding));
        })

        assertSame(algorithm + ' hmac using ' + encoding, function (crypto, cb) {
            cb(null, crypto.createHmac(algorithm, 'secret').update('hellø', 'utf-8').digest(encoding))
        })
    });

    assertSame(algorithm + ' with raw binary', function (crypto, cb) {
        var seed = 'hellø';
        for (var i = 0; i < 1000; i++) {
            seed = crypto.createHash(algorithm).update(new Buffer(seed)).digest('binary');
        }
        cb(null, crypto.createHash(algorithm).update(new Buffer(seed)).digest('hex'));
    });

    assertSame(algorithm + ' empty string', function (crypto, cb) {
        cb(null, crypto.createHash(algorithm).update('').digest('hex'));
    });
});

function pad(n, w) {
  n = n + ''; return new Array(w - n.length + 1).join('0') + n;
}

var vectors = fs.readdirSync(__dirname + '/vectors').sort().
    filter(function (t) { return t.match(/\.dat$/); }).
    map(function (t) { return fs.readFileSync(__dirname + '/vectors/' + t); });

['md5', 'sha1', 'sha256'].forEach(function (algorithm) {
    test(algorithm, function (t) {
        function hash(data) { return cryptoB.createHash(algorithm).update(data).digest('hex'); }

        var hashes = fs.readFileSync(__dirname + '/vectors/byte-hashes.' + algorithm).toString().split(/\r?\n/);
        t.plan(vectors.length);
        for (var i = 0; i < vectors.length; i++) {
            t.equal(hash(vectors[i]), hashes[i], 'byte' + pad(i, 4) + '.dat');
        }
    });
});

test('randomBytes', function (t) {
    t.plan(5);
    t.equal(cryptoB.randomBytes(10).length, 10);
    t.ok(cryptoB.randomBytes(10) instanceof Buffer);
    cryptoB.randomBytes(10, function(ex, bytes) {
        t.error(ex);
        t.equal(bytes.length, 10);
        t.ok(bytes instanceof Buffer);
        t.end();
  });
});
