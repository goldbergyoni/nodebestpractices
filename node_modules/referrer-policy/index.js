var DEFAULT_POLICY = 'no-referrer'
var ALLOWED_POLICIES = [
  'no-referrer',
  'no-referrer-when-downgrade',
  'same-origin',
  'origin',
  'strict-origin',
  'origin-when-cross-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
  ''
]
var ALLOWED_POLICIES_ERROR_LIST = ALLOWED_POLICIES.map(function (policy) {
  if (policy.length) {
    return '"' + policy + '"'
  } else {
    return 'and the empty string'
  }
}).join(', ')

module.exports = function referrerPolicy (options) {
  options = options || {}

  var policy
  if ('policy' in options) {
    policy = options.policy
  } else {
    policy = DEFAULT_POLICY
  }

  if (ALLOWED_POLICIES.indexOf(policy) === -1) {
    throw new Error('"' + policy + '" is not a valid policy. Allowed policies: ' + ALLOWED_POLICIES_ERROR_LIST + '.')
  }

  return function referrerPolicy (req, res, next) {
    res.setHeader('Referrer-Policy', policy)
    next()
  }
}
