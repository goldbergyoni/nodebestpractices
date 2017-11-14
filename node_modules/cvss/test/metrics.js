var lab = exports.lab = require('lab').script();
var expect = require('code').expect;
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;

var metrics = require('../lib/metrics');

function wrapDone(fn) {
  return function (done) {
    fn();
    done();
  };
}

describe('metrics', function () {

  describe('#toScore', function () {
    describe('PR', function () {
      it('returns score dependent on value of "S" metric', wrapDone(function () {
        expect(metrics.toScore.PR.L({ S: 'C' })).to.equal(0.68);
        expect(metrics.toScore.PR.L({ S: 'U' })).to.equal(0.62);
        expect(metrics.toScore.PR.H({ S: 'C' })).to.equal(0.5);
        expect(metrics.toScore.PR.H({ S: 'U' })).to.equal(0.27);
      }));
    });

    describe('MAV', function () {
      it('"X" returns the score for "AV"', wrapDone(function () {
        expect(metrics.toScore.MAV.X(null, { AV: 1 })).to.equal(1);
        expect(metrics.toScore.MAV.X(null, { AV: 0 })).to.equal(0);
      }));
    });

    describe('MAC', function () {
      it('"X" returns the score for "AC"', wrapDone(function () {
        expect(metrics.toScore.MAC.X(null, { AC: 1 })).to.equal(1);
        expect(metrics.toScore.MAC.X(null, { AC: 0 })).to.equal(0);
      }));
    });

    describe('MPR', function () {
      it('"X" returns the score for "PR"', wrapDone(function () {
        expect(metrics.toScore.MPR.X(null, { PR: 1 })).to.equal(1);
        expect(metrics.toScore.MPR.X(null, { PR: 0 })).to.equal(0);
      }));
      it('returns score for value "L" dependent on value of "MS" falling back to "S" metric', wrapDone(function () {
        expect(metrics.toScore.MPR.L({ MS: 'U', S: 'C' })).to.equal(0.62);
        expect(metrics.toScore.MPR.L({ S: 'C' })).to.equal(0.68);
      }));
      it('returns score for value "H" dependent on value of "MS" falling back to "S" metric', wrapDone(function () {
        expect(metrics.toScore.MPR.H({ MS: 'U', S: 'C' })).to.equal(0.27);
        expect(metrics.toScore.MPR.H({ S: 'C' })).to.equal(0.5);
      }));
    });

    describe('MUI', function () {
      it('"X" returns the score for "UI"', wrapDone(function () {
        expect(metrics.toScore.MUI.X(null, { UI: 1 })).to.equal(1);
        expect(metrics.toScore.MUI.X(null, { UI: 0 })).to.equal(0);
      }));
    });

    describe('MS', function () {
      it('"X" returns the score for "S"', wrapDone(function () {
        expect(metrics.toScore.MS.X(null, { S: 1 })).to.equal(1);
        expect(metrics.toScore.MS.X(null, { S: 0 })).to.equal(0);
      }));
    });
    
    var impactValues = ['H', 'L'];
    var impactRequirements = ['L', 'M', 'H'];
    var impactMetrics = [ 'C', 'I', 'A'];

    impactMetrics.forEach(function (metric, im) {
      describe('M' + metric, function () {
        impactValues.forEach(function (value, iv) {
          it('"' + value + '" returns the "' + value + '" score from "' + metric + '" times the "' + metric + 'R" score', wrapDone(function () {
            var reqKey = metric + 'R';
            var scores = { };
            scores[reqKey] = metrics.toScore[reqKey][impactRequirements[iv]];
            var score = metrics.toScore['M' + metric][value];

            expect(typeof score === 'function' ? score(null, scores) : score).to.equal(metrics.toScore[metric][value] * scores[reqKey]);
            scores[reqKey] = metrics.toScore[reqKey][impactRequirements[(iv + 2) % impactRequirements.length]];
            expect(typeof score === 'function' ? score(null, scores) : score).to.equal(metrics.toScore[metric][value] * scores[reqKey]);
          }));
        });

        it('"X" returns the score from "' + metric + '" times the "' + metric + 'R" score', wrapDone(function () {
          var reqKey = metric + 'R';
          var scores = {};
          scores[metric] = metrics.toScore[metric][impactValues[im % impactValues.length]];
          scores[reqKey] = metrics.toScore[reqKey][impactRequirements[im]];
          expect(metrics.toScore['M' + metric].X(null, scores)).to.equal(Object.keys(scores).reduce(function (result, key) {
            var val = scores[key];
            return result * val;
          }, 1));
        }));
      });
    });
  });
});