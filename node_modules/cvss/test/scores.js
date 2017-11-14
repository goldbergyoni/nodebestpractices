var lab = exports.lab = require('lab').script();
var expect = require('code').expect;
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;

var scores = require('../lib/scores');
var keys = require('../lib/keys');
var metrics = require('../lib/metrics');
var parseVector = require('../lib/vector').parse;

function wrapDone(fn) {
  return function (done) {
    fn();
    done();
  };
}

var internals = {};

internals.vectorString = 'CVSS:3.0/AV:X/AC:H/PR:N/UI:R/S:C/C:L/I:H/A:L';

internals.envString = 'CR:H/IR:M/AR:L/MAC:L';

internals.temporalString = 'E:F/RL:T/RC:C';

describe('scores', function () {
  function scoreReducer(scores, key) {
    scores[key] = 0.5;
    return scores;
  }

  describe('#getExploitability', function () {

    it('reduces 8.22 with the combined product of exploitability scores', wrapDone(function () {
      var simpleScores = keys.exploitability.reduce(scoreReducer, {});
      expect(scores.getExploitability(simpleScores)).to.equal(8.22 / Math.pow(2, keys.exploitability.length))

      var envScores = keys.envExploitability.reduce(scoreReducer, {});
      expect(scores.getExploitability(envScores, { env: true })).to.equal(8.22 / Math.pow(2, keys.envExploitability.length));
    }));
  });

  describe('#getImpact', function () {
    
    it('returns different values depending on the "S" metrics value', wrapDone(function () {

      var simpleScores = keys.impact.reduce(scoreReducer, {});
      var simpleScopeUnchangedImpact = scores.getImpact(simpleScores, { S: 'U' });
      var simpleScopeChangedImpact = scores.getImpact(simpleScores, { S: 'C' });
      expect(simpleScopeUnchangedImpact).to.be.lessThan(simpleScopeChangedImpact);
      var envScores = keys.envImpact.reduce(scoreReducer, {});
      var envScopeUnchangedImpact = scores.getImpact(envScores, { MS: 'U' }, { env: true });
      var envScopeChangedImpact = scores.getImpact(envScores, { MS: 'C' }, { env: true });
      expect(envScopeUnchangedImpact).to.be.lessThan(envScopeChangedImpact);
    }));
  });

  describe('#getBase', function () {
    var vector;
    lab.beforeEach(wrapDone(function () {
      vector = parseVector(internals.vectorString);
    }));

    it('calls getImpact with generated scores, vector, and options', wrapDone(function () {
      var oldGetImpact = scores.getImpact;
      var impactCalls = [];
      scores.getImpact = function (scores, vector, options) {
        impactCalls.push({ scores: scores, vector: vector, options: options });
        return oldGetImpact.call(null, scores, vector, options);
      };

      scores.getBase(vector);
      var call0 = impactCalls[0];
      expect(call0.scores).to.include(keys.base);
      expect(call0.vector).to.equal(vector);
      expect(call0.options).to.not.exist();

      var envVector = parseVector(internals.vectorString + '/' + internals.envString);
      scores.getBase(envVector, { env: true });
      var call1 = impactCalls[1];
      expect(call1.scores).to.include(keys.base.concat(keys.environmental));
      expect(call1.vector).to.equal(envVector);
      expect(call1.options).to.exist().and.include('env');

      scores.getImpact = oldGetImpact;
    }));

    it('returns 0.0 when impact score is < 0.1', wrapDone(function () {

      expect(scores.getBase({ C: 'N', I: 'N', A: 'N' })).to.equal(0.0);
    }));

    it('calls getExploitability with generated scores and options', wrapDone(function () {
      var oldGetExploitability = scores.getExploitability;
      var exploitabilityCalls = [];
      scores.getExploitability = function (scores, options) {
        exploitabilityCalls.push({ scores: scores, options: options });
        return oldGetExploitability.call(null, scores, options);
      };

      scores.getBase(vector);
      var call0 = exploitabilityCalls[0];
      expect(call0.scores).to.include(keys.base);
      expect(call0.options).to.not.exist();

      var envVector = parseVector(internals.vectorString + '/' + internals.envString);
      scores.getBase(envVector, { env: true });
      var call1 = exploitabilityCalls[1];
      expect(call1.scores).to.include(keys.base.concat(keys.environmental));
      expect(call1.options).to.exist().and.include('env');

      scores.getExploitability = oldGetExploitability;
    }));
  });

  describe('#getTemporal', function () {

    it('reduces the base score with the combined product of temporal scores', wrapDone(function () {
      var score = 10;
      var vector = { E: 'F', RL: 'W' };

      var expected = Math.ceil((keys.temporal.reduce(function (result, key) {
        return metrics.toScore[key][vector[key] || 'X'] * result;
      }, score)) * 10.0) / 10.0;

      expect(scores.getTemporal(vector, score)).to.equal(expected);
    }));
  });
});