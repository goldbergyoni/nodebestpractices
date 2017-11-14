'use strict'
const EventEmitter = require('events').EventEmitter

const NOOP = function () { }

const removeWhere = (list, predicate) => {
  const i = list.findIndex(predicate)

  return i === -1
    ? undefined
    : list.splice(i, 1)[0]
}

class IdleItem {
  constructor (client, timeoutId) {
    this.client = client
    this.timeoutId = timeoutId
  }
}

function throwOnRelease () {
  throw new Error('Release called on client which has already been released to the pool.')
}

function release (client, err) {
  client.release = throwOnRelease
  if (err || this.ending) {
    this._remove(client)
    this._pulseQueue()
    return
  }

  // idle timeout
  let tid
  if (this.options.idleTimeoutMillis) {
    tid = setTimeout(() => {
      this.log('remove idle client')
      this._remove(client)
    }, this.options.idleTimeoutMillis)
  }

  this._idle.push(new IdleItem(client, tid))
  this._pulseQueue()
}

function promisify (Promise, callback) {
  if (callback) {
    return { callback: callback, result: undefined }
  }
  let rej
  let res
  const cb = function (err, client) {
    err ? rej(err) : res(client)
  }
  const result = new Promise(function (resolve, reject) {
    res = resolve
    rej = reject
  })
  return { callback: cb, result: result }
}

class Pool extends EventEmitter {
  constructor (options, Client) {
    super()
    this.options = Object.assign({}, options)
    this.options.max = this.options.max || this.options.poolSize || 10
    this.log = this.options.log || function () { }
    this.Client = this.options.Client || Client || require('pg').Client
    this.Promise = this.options.Promise || global.Promise

    if (typeof this.options.idleTimeoutMillis === 'undefined') {
      this.options.idleTimeoutMillis = 10000
    }

    this._clients = []
    this._idle = []
    this._pendingQueue = []
    this._endCallback = undefined
    this.ending = false
  }

  _isFull () {
    return this._clients.length >= this.options.max
  }

  _pulseQueue () {
    this.log('pulse queue')
    if (this.ending) {
      this.log('pulse queue on ending')
      if (this._idle.length) {
        this._idle.slice().map(item => {
          this._remove(item.client)
        })
      }
      if (!this._clients.length) {
        this._endCallback()
      }
      return
    }
    // if we don't have any waiting, do nothing
    if (!this._pendingQueue.length) {
      this.log('no queued requests')
      return
    }
    // if we don't have any idle clients and we have no more room do nothing
    if (!this._idle.length && this._isFull()) {
      return
    }
    const waiter = this._pendingQueue.shift()
    if (this._idle.length) {
      const idleItem = this._idle.pop()
      clearTimeout(idleItem.timeoutId)
      const client = idleItem.client
      client.release = release.bind(this, client)
      this.emit('acquire', client)
      return waiter(undefined, client, client.release)
    }
    if (!this._isFull()) {
      return this.connect(waiter)
    }
    throw new Error('unexpected condition')
  }

  _remove (client) {
    const removed = removeWhere(
      this._idle,
      item => item.client === client
    )

    if (removed !== undefined) {
      clearTimeout(removed.timeoutId)
    }

    this._clients = this._clients.filter(c => c !== client)
    client.end()
    this.emit('remove', client)
  }

  connect (cb) {
    if (this.ending) {
      const err = new Error('Cannot use a pool after calling end on the pool')
      return cb ? cb(err) : this.Promise.reject(err)
    }

    // if we don't have to connect a new client, don't do so
    if (this._clients.length >= this.options.max || this._idle.length) {
      const response = promisify(this.Promise, cb)
      const result = response.result

      // if we have idle clients schedule a pulse immediately
      if (this._idle.length) {
        process.nextTick(() => this._pulseQueue())
      }

      if (!this.options.connectionTimeoutMillis) {
        this._pendingQueue.push(response.callback)
        return result
      }

      // set connection timeout on checking out an existing client
      const tid = setTimeout(() => {
        // remove the callback from pending waiters because
        // we're going to call it with a timeout error
        this._pendingQueue = this._pendingQueue.filter(cb => cb === response.callback)
        response.callback(new Error('timeout exceeded when trying to connect'))
      }, this.options.connectionTimeoutMillis)

      this._pendingQueue.push(function (err, res, done) {
        clearTimeout(tid)
        response.callback(err, res, done)
      })
      return result
    }

    const client = new this.Client(this.options)
    this._clients.push(client)
    const idleListener = (err) => {
      err.client = client
      client.removeListener('error', idleListener)
      client.on('error', () => {
        this.log('additional client error after disconnection due to error', err)
      })
      this._remove(client)
      // TODO - document that once the pool emits an error
      // the client has already been closed & purged and is unusable
      this.emit('error', err, client)
    }

    this.log('connecting new client')

    // connection timeout logic
    let tid
    let timeoutHit = false
    if (this.options.connectionTimeoutMillis) {
      tid = setTimeout(() => {
        this.log('ending client due to timeout')
        timeoutHit = true
        // force kill the node driver, and let libpq do its teardown
        client.connection ? client.connection.stream.destroy() : client.end()
      }, this.options.connectionTimeoutMillis)
    }

    const response = promisify(this.Promise, cb)
    cb = response.callback

    this.log('connecting new client')
    client.connect((err) => {
      this.log('new client connected')
      if (tid) {
        clearTimeout(tid)
      }
      client.on('error', idleListener)
      if (err) {
        // remove the dead client from our list of clients
        this._clients = this._clients.filter(c => c !== client)
        if (timeoutHit) {
          err.message = 'Connection terminiated due to connection timeout'
        }
        cb(err, undefined, NOOP)
      } else {
        client.release = release.bind(this, client)
        this.emit('connect', client)
        this.emit('acquire', client)
        if (this.options.verify) {
          this.options.verify(client, cb)
        } else {
          cb(undefined, client, client.release)
        }
      }
    })
    return response.result
  }

  query (text, values, cb) {
    // guard clause against passing a function as the first parameter
    if (typeof text === 'function') {
      const response = promisify(this.Promise, text)
      setImmediate(function () {
        return response.callback(new Error('Passing a function as the first parameter to pool.query is not supported'))
      })
      return response.result
    }

    // allow plain text query without values
    if (typeof values === 'function') {
      cb = values
      values = undefined
    }
    const response = promisify(this.Promise, cb)
    cb = response.callback
    this.connect((err, client) => {
      if (err) {
        return cb(err)
      }
      this.log('dispatching query')
      client.query(text, values, (err, res) => {
        this.log('query dispatched')
        client.release(err)
        if (err) {
          return cb(err)
        } else {
          return cb(undefined, res)
        }
      })
    })
    return response.result
  }

  end (cb) {
    this.log('ending')
    if (this.ending) {
      const err = new Error('Called end on pool more than once')
      return cb ? cb(err) : this.Promise.reject(err)
    }
    this.ending = true
    const promised = promisify(this.Promise, cb)
    this._endCallback = promised.callback
    this._pulseQueue()
    return promised.result
  }

  get waitingCount () {
    return this._pendingQueue.length
  }

  get idleCount () {
    return this._idle.length
  }

  get totalCount () {
    return this._clients.length
  }
}
module.exports = Pool
