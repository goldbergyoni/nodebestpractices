var request = require('..');
var https = require('https');
var fs = require('fs');
var path = require('path');
var should = require('should');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

describe('request(url)', function() {
  it('should be supported', function(done) {
    var app = express();
    var s;

    app.get('/', function(req, res) {
      res.send('hello');
    });

    s = app.listen(function() {
      var url = 'http://localhost:' + s.address().port;
      request(url)
      .get('/')
      .expect('hello', done);
    });
  });

  describe('.end(cb)', function() {
    it('should set `this` to the test object when calling cb', function(done) {
      var app = express();
      var s;

      app.get('/', function(req, res) {
        res.send('hello');
      });

      s = app.listen(function() {
        var url = 'http://localhost:' + s.address().port;
        var test = request(url).get('/');
        test.end(function(err, res) {
          this.should.eql(test);
          done();
        });
      });
    });
  });
});

describe('request(app)', function() {
  it('should fire up the app on an ephemeral port', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.send('hey');
    });

    request(app)
    .get('/')
    .end(function(err, res) {
      res.status.should.equal(200);
      res.text.should.equal('hey');
      done();
    });
  });

  it('should work with an active server', function(done) {
    var app = express();
    var server;

    app.get('/', function(req, res) {
      res.send('hey');
    });

    server = app.listen(4000, function() {
      request(server)
      .get('/')
      .end(function(err, res) {
        res.status.should.equal(200);
        res.text.should.equal('hey');
        done();
      });
    });
  });

  it('should work with remote server', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.send('hey');
    });

    app.listen(4001, function() {
      request('http://localhost:4001')
      .get('/')
      .end(function(err, res) {
        res.status.should.equal(200);
        res.text.should.equal('hey');
        done();
      });
    });
  });

  it('should work with a https server', function(done) {
    var app = express();
    var fixtures = path.join(__dirname, 'fixtures');
    var server = https.createServer({
      key: fs.readFileSync(path.join(fixtures, 'test_key.pem')),
      cert: fs.readFileSync(path.join(fixtures, 'test_cert.pem'))
    }, app);

    app.get('/', function(req, res) {
      res.send('hey');
    });

    request(server)
    .get('/')
    .end(function(err, res) {
      if (err) return done(err);
      res.status.should.equal(200);
      res.text.should.equal('hey');
      done();
    });
  });

  it('should work with .send() etc', function(done) {
    var app = express();

    app.use(bodyParser.json());

    app.post('/', function(req, res) {
      res.send(req.body.name);
    });

    request(app)
    .post('/')
    .send({ name: 'tobi' })
    .expect('tobi', done);
  });

  it('should work when unbuffered', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.end('Hello');
    });

    request(app)
    .get('/')
    .expect('Hello', done);
  });

  it('should default redirects to 0', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.redirect('/login');
    });

    request(app)
    .get('/')
    .expect(302, done);
  });

  it('should handle redirects', function(done) {
    var app = express();

    app.get('/login', function (req, res) {
      res.end('Login');
    });

    app.get('/', function(req, res) {
      res.redirect('/login');
    });

    request(app)
    .get('/')
    .redirects(1)
    .end(function (err, res) {
      should.exist(res);
      res.status.should.be.equal(200);
      res.text.should.be.equal('Login');
      done();
    });
  });

  it('should handle socket errors', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.destroy();
    });

    request(app)
    .get('/')
    .end(function(err) {
      should.exist(err);
      done();
    });
  });

  describe('.end(fn)', function() {
    it('should close server', function(done) {
      var app = express();
      var test;

      app.get('/', function(req, res) {
        res.send('supertest FTW!');
      });

      test = request(app)
      .get('/')
      .end(function() {});

      test._server.on('close', function() {
        done();
      });
    });

    it('should wait for server to close before invoking fn', function(done) {
      var app = express();
      var closed = false;
      var test;

      app.get('/', function(req, res) {
        res.send('supertest FTW!');
      });

      test = request(app)
      .get('/')
      .end(function() {
        closed.should.be.true;
        done();
      });

      test._server.on('close', function() {
        closed = true;
      });
    });

    it('should support nested requests', function(done) {
      var app = express();
      var test = request(app);

      app.get('/', function(req, res) {
        res.send('supertest FTW!');
      });

      test
      .get('/')
      .end(function() {
        test
        .get('/')
        .end(function(err, res) {
          (err === null).should.be.true;
          res.status.should.equal(200);
          res.text.should.equal('supertest FTW!');
          done();
        });
      });
    });

    it('should include the response in the error callback', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('whatever');
      });

      request(app)
      .get('/')
      .expect(function() {
        throw new Error('Some error');
      })
      .end(function(err, res) {
        should.exist(err);
        should.exist(res);
        // Duck-typing response, just in case.
        res.status.should.equal(200);
        done();
      });
    });

    it('should set `this` to the test object when calling the error callback', function(done) {
      var app = express();
      var test;

      app.get('/', function(req, res) {
        res.send('whatever');
      });

      test = request(app).get('/');
      test.expect(function() {
        throw new Error('Some error');
      }).end(function(err, res) {
        should.exist(err);
        this.should.eql(test);
        done();
      });
    });

    it('should handle an undefined Response', function (done) {
      var app = express();
      var server;

      app.get('/', function(req, res) {
        setTimeout(function () {
          res.end();
        }, 20);
      });

      server = app.listen(function() {
        var url = 'http://localhost:' + server.address().port;
        request(url)
        .get('/')
        .timeout(1)
        .expect(200, function (err) {
          err.should.be.an.instanceof(Error);
          return done();
        });
      });
    });

    it('should handle error returned when server goes down', function (done) {
      var app = express();
      var server;

      app.get('/', function(req, res) {
        res.end();
      });

      server = app.listen(function() {
        var url = 'http://localhost:' + server.address().port;
        server.close();
        request(url)
        .get('/')
        .expect(200, function (err) {
          err.should.be.an.instanceof(Error);
          return done();
        });
      });
    });
  });

  describe('.expect(status[, fn])', function() {
    it('should assert the response status', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('hey');
      });

      request(app)
      .get('/')
      .expect(404)
      .end(function(err, res) {
        err.message.should.equal('expected 404 "Not Found", got 200 "OK"');
        done();
      });
    });
  });

  describe('.expect(status)', function () {
    it('should handle connection error', function (done) {
      var req = request.agent('http://localhost:1234');

      req
          .get('/')
          .expect(200)
          .end(function (err, res) {
            err.message.should.equal('ECONNREFUSED: Connection refused');
            done();
          });
    });
  });

  describe('.expect(status)', function () {
    it('should assert only status', function (done) {
      var app = express();

      app.get('/', function (req, res) {
        res.send('hey');
      });

      request(app)
      .get('/')
      .expect(200)
      .end(done);
    });
  });

  describe('.expect(status, body[, fn])', function() {
    it('should assert the response body and status', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('foo');
      });

      request(app)
      .get('/')
      .expect(200, 'foo', done);
    });

    describe('when the body argument is an empty string', function() {
      it('should not quietly pass on failure', function(done) {
        var app = express();

        app.get('/', function(req, res) {
          res.send('foo');
        });

        request(app)
        .get('/')
        .expect(200, '')
        .end(function(err, res) {
          err.message.should.equal('expected \'\' response body, got \'foo\'');
          done();
        });
      });
    });
  });

  describe('.expect(body[, fn])', function() {
    it('should assert the response body', function(done) {
      var app = express();

      app.set('json spaces', 0);

      app.get('/', function(req, res) {
        res.send({ foo: 'bar' });
      });

      request(app)
      .get('/')
      .expect('hey')
      .end(function(err, res) {
        err.message.should.equal('expected \'hey\' response body, got \'{"foo":"bar"}\'');
        done();
      });
    });

    it('should assert the status before the body', function (done) {
      var app = express();

      app.set('json spaces', 0);

      app.get('/', function(req, res) {
        res.status(500).send({ message: 'something went wrong' });
      });

      request(app)
      .get('/')
      .expect(200)
      .expect('hey')
      .end(function(err, res) {
        err.message.should.equal('expected 200 "OK", got 500 "Internal Server Error"');
        done();
      });
    });

    it('should assert the response text', function(done) {
      var app = express();

      app.set('json spaces', 0);

      app.get('/', function(req, res) {
        res.send({ foo: 'bar' });
      });

      request(app)
      .get('/')
      .expect('{"foo":"bar"}', done);
    });

    it('should assert the parsed response body', function(done) {
      var app = express();

      app.set('json spaces', 0);

      app.get('/', function(req, res) {
        res.send({ foo: 'bar' });
      });

      request(app)
      .get('/')
      .expect({ foo: 'baz' })
      .end(function(err, res) {
        err.message.should.equal('expected { foo: \'baz\' } response body, got { foo: \'bar\' }');

        request(app)
        .get('/')
        .expect({ foo: 'bar' })
        .end(done);
      });
    });

    it('should support regular expressions', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('foobar');
      });

      request(app)
      .get('/')
      .expect(/^bar/)
      .end(function(err, res) {
        err.message.should.equal('expected body \'foobar\' to match /^bar/');
        done();
      });
    });

    it('should assert response body multiple times', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('hey tj');
      });

      request(app)
      .get('/')
      .expect(/tj/)
      .expect('hey')
      .expect('hey tj')
      .end(function (err, res) {
        err.message.should.equal("expected 'hey' response body, got 'hey tj'");
        done();
      });
    });

    it('should assert response body multiple times with no exception', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('hey tj');
      });

      request(app)
      .get('/')
      .expect(/tj/)
      .expect(/^hey/)
      .expect('hey tj', done);
    });
  });

  describe('.expect(field, value[, fn])', function() {
    it('should assert the header field presence', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send({ foo: 'bar' });
      });

      request(app)
      .get('/')
      .expect('Content-Foo', 'bar')
      .end(function(err, res) {
        err.message.should.equal('expected "Content-Foo" header field');
        done();
      });
    });

    it('should assert the header field value', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send({ foo: 'bar' });
      });

      request(app)
      .get('/')
      .expect('Content-Type', 'text/html')
      .end(function(err, res) {
        err.message.should.equal('expected "Content-Type" of "text/html", ' +
          'got "application/json; charset=utf-8"');
        done();
      });
    });

    it('should assert multiple fields', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('hey');
      });

      request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect('Content-Length', '3')
      .end(done);
    });

    it('should support regular expressions', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('hey');
      });

      request(app)
      .get('/')
      .expect('Content-Type', /^application/)
      .end(function(err) {
        err.message.should.equal('expected "Content-Type" matching /^application/, ' +
          'got "text/html; charset=utf-8"');
        done();
      });
    });

    it('should support numbers', function(done) {
      var app = express();

      app.get('/', function(req, res) {
        res.send('hey');
      });

      request(app)
      .get('/')
      .expect('Content-Length', 4)
      .end(function(err) {
        err.message.should.equal('expected "Content-Length" of "4", got "3"');
        done();
      });
    });

    describe('handling arbitrary expect functions', function() {
      var app;
      var get;

      before(function() {
        app = express();
        app.get('/', function(req, res) {
          res.send('hey');
        });
      });

      beforeEach(function() {
        get = request(app).get('/');
      });

      it('reports errors', function(done) {
        get
        .expect(function(res) {
          throw new Error('failed');
        })
        .end(function(err) {
          err.message.should.equal('failed');
          done();
        });
      });

      it('ensures truthy non-errors returned from asserts are not promoted to errors',
        function(done) {
          get
          .expect(function(res) {
            return 'some descriptive error';
          })
          .end(function(err) {
            should.not.exist(err);
            done();
          });
        });

      it('ensures truthy errors returned from asserts are throw to end', function(done) {
        get
        .expect(function(res) {
          return new Error('some descriptive error');
        })
        .end(function(err) {
          err.message.should.equal('some descriptive error');
          (err instanceof Error).should.be.true;
          done();
        });
      });

      it("doesn't create false negatives", function(done) {
        get
        .expect(function(res) {})
        .end(done);
      });

      it('handles multiple asserts', function(done) {
        var calls = [];
        get
        .expect(function(res) { calls[0] = 1; })
        .expect(function(res) { calls[1] = 1; })
        .expect(function(res) { calls[2] = 1; })
        .end(function() {
          var callCount = [0, 1, 2].reduce(function(count, i) {
            return count + calls[i];
          }, 0);
          callCount.should.equal(3, "didn't see all assertions run");
          done();
        });
      });

      it('plays well with normal assertions - no false positives', function(done) {
        get
        .expect(function(res) {})
        .expect('Content-Type', /json/)
        .end(function(err) {
          err.message.should.match(/Content-Type/);
          done();
        });
      });

      it('plays well with normal assertions - no false negatives', function(done) {
        get
        .expect(function(res) {})
        .expect('Content-Type', /html/)
        .expect(function(res) {})
        .expect('Content-Type', /text/)
        .end(done);
      });
    });

    describe('handling multiple assertions per field', function() {
      it('should work', function(done) {
        var app = express();
        app.get('/', function(req, res) {
          res.send('hey');
        });

        request(app)
        .get('/')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .end(done);
      });

      it('should return an error if the first one fails', function(done) {
        var app = express();
        app.get('/', function(req, res) {
          res.send('hey');
        });

        request(app)
        .get('/')
        .expect('Content-Type', /bloop/)
        .expect('Content-Type', /html/)
        .end(function(err) {
          err.message.should.equal('expected "Content-Type" matching /bloop/, ' +
            'got "text/html; charset=utf-8"');
          done();
        });
      });

      it('should return an error if a middle one fails', function(done) {
        var app = express();
        app.get('/', function(req, res) {
          res.send('hey');
        });

        request(app)
        .get('/')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /bloop/)
        .expect('Content-Type', /html/)
        .end(function(err) {
          err.message.should.equal('expected "Content-Type" matching /bloop/, ' +
            'got "text/html; charset=utf-8"');
          done();
        });
      });

      it('should return an error if the last one fails', function(done) {
        var app = express();
        app.get('/', function(req, res) {
          res.send('hey');
        });

        request(app)
        .get('/')
        .expect('Content-Type', /text/)
        .expect('Content-Type', /html/)
        .expect('Content-Type', /bloop/)
        .end(function(err) {
          err.message.should.equal('expected "Content-Type" matching /bloop/, ' +
            'got "text/html; charset=utf-8"');
          done();
        });
      });
    });
  });
});

describe('request.agent(app)', function() {
  var app = express();
  var agent = request.agent(app);

  app.use(cookieParser());

  app.get('/', function(req, res) {
    res.cookie('cookie', 'hey');
    res.send();
  });

  app.get('/return', function(req, res) {
    if (req.cookies.cookie) res.send(req.cookies.cookie);
    else res.send(':(');
  });

  it('should save cookies', function(done) {
    agent
    .get('/')
    .expect('set-cookie', 'cookie=hey; Path=/', done);
  });

  it('should send cookies', function(done) {
    agent
    .get('/return')
    .expect('hey', done);
  });
});

describe('.<http verb> works as expected', function() {
  it('.delete should work', function (done) {
    var app = express();
    app.delete('/', function(req, res) {
      res.sendStatus(200);
    });

    request(app)
        .delete('/')
        .expect(200, done);
  });
  it('.del should work', function (done) {
    var app = express();
    app.delete('/', function(req, res) {
      res.sendStatus(200);
    });

    request(app)
        .del('/')
        .expect(200, done);
  });
  it('.get should work', function (done) {
    var app = express();
    app.get('/', function(req, res) {
      res.sendStatus(200);
    });

    request(app)
        .get('/')
        .expect(200, done);
  });
  it('.post should work', function (done) {
    var app = express();
    app.post('/', function(req, res) {
      res.sendStatus(200);
    });

    request(app)
        .post('/')
        .expect(200, done);
  });
  it('.put should work', function (done) {
    var app = express();
    app.put('/', function(req, res) {
      res.sendStatus(200);
    });

    request(app)
        .put('/')
        .expect(200, done);
  });
  it('.head should work', function (done) {
    var app = express();
    app.head('/', function(req, res) {
      res.statusCode = 200;
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Length', '1024');
      res.status(200);
      res.end();
    });

    request(app)
        .head('/')
        .set('accept-encoding', 'gzip, deflate')
        .end(function (err, res) {
          if (err) return done(err);
          res.should.have.property('statusCode', 200);
          res.headers.should.have.property('content-length', '1024');
          done();
        });
  });
});

describe('assert ordering by call order', function() {
  it('should assert the body before status', function(done) {
    var app = express();

    app.set('json spaces', 0);

    app.get('/', function(req, res) {
      res.status(500).json({ message: 'something went wrong' });
    });

    request(app)
      .get('/')
      .expect('hey')
      .expect(200)
      .end(function(err, res) {
        err.message.should.equal('expected \'hey\' response body, ' +
          'got \'{"message":"something went wrong"}\'');
        done();
      });
  });

  it('should assert the status before body', function(done) {
    var app = express();

    app.set('json spaces', 0);

    app.get('/', function(req, res) {
      res.status(500).json({ message: 'something went wrong' });
    });

    request(app)
      .get('/')
      .expect(200)
      .expect('hey')
      .end(function(err, res) {
        err.message.should.equal('expected 200 "OK", got 500 "Internal Server Error"');
        done();
      });
  });

  it('should assert the fields before body and status', function(done) {
    var app = express();

    app.set('json spaces', 0);

    app.get('/', function(req, res) {
      res.status(200).json({ hello: 'world' });
    });

    request(app)
      .get('/')
      .expect('content-type', /html/)
      .expect('hello')
      .end(function(err, res) {
        err.message.should.equal('expected "content-type" matching /html/, ' +
          'got "application/json; charset=utf-8"');
        done();
      });
  });

  it('should call the expect function in order', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.status(200).json({});
    });

    request(app)
      .get('/')
      .expect(function(res) {
        res.body.first = 1;
      })
      .expect(function(res) {
        (res.body.first === 1).should.be.true;
        res.body.second = 2;
      })
      .end(function(err, res) {
        if (err) return done(err);
        (res.body.first === 1).should.be.true;
        (res.body.second === 2).should.be.true;
        done();
      });
  });

  it('should call expect(fn) and expect(status, fn) in order', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.status(200).json({});
    });

    request(app)
      .get('/')
      .expect(function(res) {
        res.body.first = 1;
      })
      .expect(200, function(err, res) {
        (err === null).should.be.true;
        (res.body.first === 1).should.be.true;
        done();
      });
  });

  it('should call expect(fn) and expect(header,value) in order', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res
        .set('X-Some-Header', 'Some value')
        .send();
    });

    request(app)
      .get('/')
      .expect('X-Some-Header', 'Some value')
      .expect(function(res) {
        res.headers['x-some-header'] = '';
      })
      .expect('X-Some-Header', '')
      .end(done);
  });

  it('should call expect(fn) and expect(body) in order', function(done) {
    var app = express();

    app.get('/', function(req, res) {
      res.json({ somebody: 'some body value' });
    });

    request(app)
      .get('/')
      .expect(/some body value/)
      .expect(function(res) {
        res.body.somebody = 'nobody';
      })
      .expect(/some body value/)  // res.text should not be modified.
      .expect({ somebody: 'nobody' })
      .expect(function(res) {
        res.text = 'gone';
      })
      .expect('gone')
      .expect(/gone/)
      .expect({ somebody: 'nobody' })  // res.body should not be modified
      .expect('gone', done);
  });
});

describe('request.get(url).query(vals) works as expected', function() {
  it('normal single query string value works', function(done) {
    var app = express();
    app.get('/', function(req, res) {
      res.status(200).send(req.query.val);
    });

    request(app)
    .get('/')
    .query({ val: 'Test1' })
    .expect(200, function(err, res) {
      res.text.should.be.equal('Test1');
      done();
    });
  });

  it('array query string value works', function(done) {
    var app = express();
    app.get('/', function(req, res) {
      res.status(200).send(Array.isArray(req.query.val));
    });

    request(app)
    .get('/')
    .query({ 'val[]': ['Test1', 'Test2'] })
    .expect(200, function(err, res) {
      res.req.path.should.be.equal('/?val%5B%5D=Test1&val%5B%5D=Test2');
      res.text.should.be.equal('true');
      done();
    });
  });

  it('array query string value work even with single value', function(done) {
    var app = express();
    app.get('/', function(req, res) {
      res.status(200).send(Array.isArray(req.query.val));
    });

    request(app)
    .get('/')
    .query({ 'val[]': ['Test1'] })
    .expect(200, function(err, res) {
      res.req.path.should.be.equal('/?val%5B%5D=Test1');
      res.text.should.be.equal('true');
      done();
    });
  });

  it('object query string value works', function(done) {
    var app = express();
    app.get('/', function(req, res) {
      res.status(200).send(req.query.val.test);
    });

    request(app)
    .get('/')
    .query({ val: { test: 'Test1' } })
    .expect(200, function(err, res) {
      res.text.should.be.equal('Test1');
      done();
    });
  });
});
