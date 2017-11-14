var lab = exports.lab = require('lab').script();
var expect = require('code').expect;
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;

var main = require('../lib/main');
var vector = require('../lib/vector');
var scores = require('../lib/scores');

function wrapDone(fn) {
  return function (done) {
    fn();
    done();
  };
}

var internals = {};

internals.vectorString = 'CVSS:3.0/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:H/A:L';
internals.envString = 'CR:H/IR:M/AR:L/MAC:L/MS:C';
internals.temporalString = 'E:F/RL:T/RC:C';
internals.fullString = [internals.vectorString, internals.envString, internals.temporalString].join('/');

describe('main', function () {

  describe('#getScore', function () {

    it('calls vector.validate with its input', wrapDone(function () {
      var oldValidate = vector.validate;
      var validateCalls = [];
      vector.validate = function (input) {
        validateCalls.push({ input: input });
        return oldValidate(input);
      };

      main.getScore(internals.vectorString);

      expect(validateCalls.length).to.equal(1);
      expect(validateCalls[0].input).to.equal(internals.vectorString);

      vector.validate = oldValidate;
    }));

    it('throws if validation fails and option.throw is truthy', wrapDone(function () {
      expect(function () {
        main.getScore(internals.vectorString.slice(4), { throw: true });
      }).to.throw(Error, /Invalid vector string/);
    }));

    it('returns 0.0 if validation fails and option.throw is falsy', wrapDone(function () {
      expect(main.getScore(internals.vectorString.slice(4))).to.equal(0.0);
    }));

    it('ignores environmental & temporal metrics if options.baseOnly is truthy', wrapDone(function () {

      var baseOnly = main.getScore(internals.fullString, { baseOnly: true, env: true });
      var withEnv = main.getScore(internals.fullString, { env: true });

      expect(baseOnly).to.not.equal(withEnv);
    }));

    it('calls scores.getTemporal if options.temporal/options.env & has environmental metrics', wrapDone(function () {

      var oldGetTemporal = scores.getTemporal;
      var getTemporalCalls = [];
      scores.getTemporal = function (vector, score) {
        getTemporalCalls.push({ vector: vector, score: score });
        return oldGetTemporal(vector, score);
      };

      main.getScore(internals.fullString, { env: false, temporal: false });
      main.getScore(internals.fullString, { env: true });
      main.getScore(internals.fullString, { temporal: true });

      expect(getTemporalCalls.length).to.equal(2);
      scores.getTemporal = oldGetTemporal;
    }));
  });

  describe('#getBaseScore', function () {

    it('calls main.getScore with baseOnly option', wrapDone(function () {

      var oldGetScore = main.getScore;
      var getScoreCalls = [];
      main.getScore = function (input, options) {
        getScoreCalls.push({ input: input, options: options });
        return oldGetScore(input, options);
      };

      var one = main.getBaseScore(internals.vectorString);
      var two = main.getBaseScore(internals.fullString);

      expect(one).to.equal(two);
      expect(getScoreCalls[0].options).to.deep.equal({ baseOnly: true });
      expect(getScoreCalls[1].options).to.deep.equal({ baseOnly: true });
    }));
  });

  describe('#getRating', function () {

    it('returns None if normalized score is less than 0.1', wrapDone(function () {
      [void 0, null, 0, [1]].forEach(function (score) {
        expect(main.getRating(score)).to.equal('None');
      });
    }));
    it('returns Low if normalized score is >= 0.1 and < 4', wrapDone(function () {
      expect(main.getRating(0.10000000000001)).to.equal('Low');
      expect(main.getRating(4 - 0.0000000000001)).to.equal('Low');
    }));
    it('returns Medium if normalized score is >= 4 and < 7', wrapDone(function () {
      expect(main.getRating(4)).to.equal('Medium');
      expect(main.getRating(7 - 0.0000000000001)).to.equal('Medium');
    }));
    it('returns High if normalized score is >= 7 and < 9', wrapDone(function () {
      expect(main.getRating(7)).to.equal('High');
      expect(main.getRating(9 - 0.0000000000001)).to.equal('High');
    }));
    it('returns Critical if normalized score is >= 9', wrapDone(function () {
      expect(main.getRating(9)).to.equal('Critical');
      expect(main.getRating(1e5)).to.equal('Critical');
    }));
  });

  describe('#getAll', function () {

    it('returns base, temporal, and environmental scores', wrapDone(function () {

      var one = main.getAll(internals.vectorString);
      var two = main.getAll(internals.fullString);
      console.log(two)
      expect(one.base.score).to.equal(one.temporal.score).and.to.equal(one.environmental.score);
      expect(one.base.rating).to.equal(one.temporal.rating).and.to.equal(one.environmental.rating);
      expect(two.base.score).to.be.between(two.temporal.score, two.environmental.score);
      expect(two.base.rating).to.equal(two.temporal.rating).and.to.equal('Medium');
      expect(two.environmental.rating).to.equal('High');
    }));
  });
});