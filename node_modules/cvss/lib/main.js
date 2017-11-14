var keys = require('./keys');
var metrics = require('./metrics');
var vector = require('./vector');
var scores = require('./scores');

function getScore(input, opts) {
  var options = opts || {};

  var validated = vector.validate(input);
  if (validated.error) {
    if (options.throw) throw validated.error;
    return 0.0;
  }

  var isEnv = !(options.baseOnly || !validated.hasEnvironmental) && options.env;
  var score = scores.getBase(validated.vector, isEnv ? { env: true } : undefined);

  if (!options.baseOnly && validated.hasTemporal && (options.env || options.temporal)) {
    score = scores.getTemporal(validated.vector, score);
  }

  return score;
}
exports.getScore = getScore;

function getBaseScore(input, options) {
  return exports.getScore(input, Object.assign({}, options, { baseOnly: true }));
}
exports.getBaseScore = getBaseScore;

function getTemporalScore(input, options) {
  return exports.getScore(input, Object.assign({}, options, { temporal: true }));
}
exports.getTemporalScore = getTemporalScore;

function getEnvironmentalScore(input, options) {
  return exports.getScore(input, Object.assign({}, options, { env: true }));
}
exports.getEnvironmentalScore = getEnvironmentalScore;

function getRating(raw) {
  var type = typeof raw;
  var score = (type === 'number' || type === 'string') ? Number(raw) : 0;
  var rating;
  if (score < 0.1) {
    rating = 'None';
  } else if (score < 4) {
    rating = 'Low';
  } else if (score < 7) {
    rating = 'Medium';
  } else if (score < 9) {
    rating = 'High';
  } else {
    rating = 'Critical';
  }
  return rating;
}
exports.getRating = getRating;

function getBase(input, options) {
  var payload = { score: exports.getBaseScore(input, options) };
  payload.rating = exports.getRating(payload.score);
  return payload;
}
exports.getBase = getBase;

function getEnvironmental(input, options) {
  var payload = { score: exports.getEnvironmentalScore(input, options) };
  payload.rating = exports.getRating(payload.score);
  return payload;
}
exports.getEnvironmental = getEnvironmental;

function getTemporal(input, options) {
  var payload = { score: exports.getTemporalScore(input, options) };
  payload.rating = exports.getRating(payload.score);
  return payload;
}
exports.getTemporal = getTemporal;

function getAll(input) {
  return {
    base: getBase(input),
    temporal: getTemporal(input),
    environmental: getEnvironmental(input)
  };
}
exports.getAll = getAll;