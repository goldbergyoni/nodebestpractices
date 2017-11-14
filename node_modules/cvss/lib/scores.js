var keys = require('./keys');
var metrics = require('./metrics');

function formatScore(score) {
  return Math.ceil(Math.min(score, 10) * 10.0) / 10.0;
}
exports.formatScore = formatScore;

function getExploitability(scores, options) {
  var exploitabilityKeys = options && options.env ? keys.envExploitability : keys.exploitability;
  return exploitabilityKeys.reduce(function (result, key) {
    return result * scores[key];
  }, 8.22);
}
exports.getExploitability = getExploitability;

function getImpact(scores, vector, options) {
  var impactKeys = (options && options.env) ? keys.envImpact : keys.impact;
  var baseImpact = 1 - Math.abs(impactKeys.reduce(function (result, key) {
    return result * (1 - scores[key]);
  }, 1));

  var scope = options && options.env ? vector.MS : vector.S;
  if (scope !== 'C') {
    return (6.42 * baseImpact);
  }

  return ((7.52 * Math.abs(baseImpact - 0.029)) - (3.25 * Math.pow(Math.abs(baseImpact - 0.02), 15)));
}
exports.getImpact = getImpact;

function getBase(vector, options) {
  var scoreKeys = (options && options.env) ? keys.base.concat(keys.environmental) : keys.base;
  var scoreObj = scoreKeys.reduce(function scoreReducer(result, key) {
    var score = metrics.toScore[key][vector[key] || metrics.defaults[key]];
    result[key] = (typeof score === 'function') ? score(vector, result) : score;
    return result;
  }, {});
  var impact = exports.getImpact(scoreObj, vector, options);

  if (impact < 0.1) {
    return 0.0;
  }

  var exploitability = exports.getExploitability(scoreObj, options);

  var scope = (options && options.env) ? (vector.MS || vector.S) : vector.S;
  var modifier = (scope === 'C') ? 1.08 : 1;

  return exports.formatScore(modifier * (impact + exploitability));
}
exports.getBase = getBase;

function getTemporal(vector, score) {
  return exports.formatScore(keys.temporal.reduce(function (score, key) {
    return metrics.toScore[key][vector[key] || metrics.defaults[key]] * score;
  }, score));
}
exports.getTemporal = getTemporal;
