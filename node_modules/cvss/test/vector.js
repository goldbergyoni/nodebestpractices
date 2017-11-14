var lab = exports.lab = require('lab').script();
var expect = require('code').expect;
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;

var vector = require('../lib/vector');

function wrapDone(fn) {
  return function (done) {
    fn();
    done();
  };
}

var internals = {};

internals.vectorString = 'CVSS:3.0/AV:P/AC:H/PR:N/UI:R/S:C/C:L/I:H/A:L';

describe('vector', function () {

  describe('#normalize', function () {
    it('ensures all keys in a vector have valid values', wrapDone(function () {
      var normalized = vector.normalize({ AV: 'Q', AB: 'L' });
      expect(normalized.AV).to.equal('P');
      expect(normalized.AB).to.not.exist();
    }));
  });

  describe('#parse', function () {
    it('converts a vector string to an object', wrapDone(function () {
      var parsed = vector.parse(internals.vectorString + '/');
      expect(parsed).to.be.an.object();
      expect(parsed).to.contain(internals.vectorString.split('/').slice(1).map(function (metric) { return metric.split(':').shift(); }));
    }));
  });

  describe('#toString', function () {
    it('serializes it\'s `this` to a CVSS3 vector string', wrapDone(function () {
      var parsed = vector.parse(internals.vectorString);
      expect(vector.toString.call(parsed)).to.equal(internals.vectorString);
      expect(vector.toString.call({ foo: 'bar' })).to.equal('');
    }));
  });

  describe('#validate', function () {
    // Errors
    it('returns an error if input is neither object nor string', wrapDone(function () {

      var error = vector.validate(null).error;
      expect(error).to.be.an.instanceOf(TypeError);
      expect(error.toString()).to.contain('must be an object or string');
    }));

    it('returns an error if input string is not a valid CVSS3 vector', wrapDone(function () {

      var error = vector.validate('foo:bar/what:hey').error;
      expect(error).to.be.an.instanceOf(Error);
      expect(error.toString()).to.contain('Invalid vector string');
    }));

    it('returns an error if vector is missing required metrics', wrapDone(function () {

      var error = vector.validate(internals.vectorString.replace(/AV[^\/]+\//, '')).error;
      expect(error).to.be.an.instanceOf(Error);
      expect(error.toString()).to.contain('missing required metric (AV)');
    }));

    // Operations
    it('normalizes object inputs', wrapDone(function () {
     var vectorObj = vector.parse(internals.vectorString);
     var oldNormalize = vector.normalize;
     var calls = [];
     vector.normalize = function () {
      calls.push(arguments);
      return oldNormalize.apply(null, arguments);
     };
     var validated = vector.validate(vectorObj);

     expect(calls.length).to.equal(1);
     expect(calls[0][0]).to.equal(vectorObj);
     expect(validated.hasTemporal).to.equal(false);
     expect(validated.hasEnvironmental).to.equal(false);

     vector.normalize = oldNormalize;
    }));

    it('parses and normalizes string inputs', wrapDone(function () {
     var oldNormalize = vector.normalize;
     var normalizeCalls = [];
     vector.normalize = function () {
      normalizeCalls.push(arguments);
      return oldNormalize.apply(null, arguments);
     };


     var oldParse = vector.parse;
     var parseCalls = [];
     vector.parse = function () {
      parseCalls.push(arguments);
      return oldParse.apply(null, arguments);
     };

     vector.validate(internals.vectorString);

     expect(parseCalls.length).to.equal(1);
     expect(parseCalls[0][0]).to.equal(internals.vectorString);
     expect(normalizeCalls.length).to.equal(1);

     vector.normalize = oldNormalize;
     vector.parse = oldParse;
    }));

    it('sets hasTemporal flag to true when temporal metrics are present', wrapDone(function () {
      
      var vectorString = internals.vectorString + '/E:F';
      var validated = vector.validate(vectorString);

      expect(validated.hasTemporal).to.equal(true);
    }));
    
    it('sets hasEnvironmental flag to true when environmental metrics are present', wrapDone(function () {
      var vectorString = internals.vectorString + '/CR:H';
      var validated = vector.validate(vectorString);

      expect(validated.hasEnvironmental).to.equal(true);
    }));

    it('adds toString to vector for re-serialization', wrapDone(function () {
      var validated = vector.validate(internals.vectorString);
      expect(validated.vector.toString).to.be.a.function();
      expect(validated.vector.toString()).to.equal(internals.vectorString);
    }));
  });
});