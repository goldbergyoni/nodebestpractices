var DEFAULT_MIDDLEWARE = [
  'dnsPrefetchControl',
  'frameguard',
  'hidePoweredBy',
  'hsts',
  'ieNoOpen',
  'noSniff',
  'xssFilter'
]

var middlewares
function helmet (options) {
  options = options || {}

  if (options.constructor.name === 'IncomingMessage') {
    throw new Error('It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.')
  }

  var stack = middlewares.reduce(function (result, middlewareName) {
    var middleware = helmet[middlewareName]
    var middlewareOptions = options[middlewareName]
    var isDefault = DEFAULT_MIDDLEWARE.indexOf(middlewareName) !== -1

    if (middlewareOptions === false) {
      return result
    } else if (middlewareOptions === true) {
      middlewareOptions = {}
    }

    if (middlewareOptions != null) {
      return result.concat(middleware(middlewareOptions))
    } else if (isDefault) {
      return result.concat(middleware({}))
    }
    return result
  }, [])

  return function (req, res, next) {
    var index = 0

    function internalNext () {
      if (arguments.length > 0) { return next.apply(null, arguments) }

      var middleware = stack[index]
      if (!middleware) { return next() }

      index++

      middleware(req, res, internalNext)
    }

    internalNext()
  }
}

helmet.contentSecurityPolicy = require('helmet-csp')
helmet.dnsPrefetchControl = require('dns-prefetch-control')
helmet.expectCt = require('expect-ct')
helmet.frameguard = require('frameguard')
helmet.hidePoweredBy = require('hide-powered-by')
helmet.hpkp = require('hpkp')
helmet.hsts = require('hsts')
helmet.ieNoOpen = require('ienoopen')
helmet.noCache = require('nocache')
helmet.noSniff = require('dont-sniff-mimetype')
helmet.referrerPolicy = require('referrer-policy')
helmet.xssFilter = require('x-xss-protection')
middlewares = Object.keys(helmet)

module.exports = helmet
