array = require './array'

module.exports = class Emitter

	constructor: ->

		@_listeners = {}

		@_listenersForAnyEvent = []

		@_disabledEmitters = {}

	on: (eventName, listener) ->

		unless @_listeners[eventName]?

			@_listeners[eventName] = []

		@_listeners[eventName].push listener

		@

	once: (eventName, listener) ->

		ran = no

		cb = =>

			return if ran

			ran = yes

			do listener

			setTimeout =>

				@removeEvent eventName, cb

			, 0

		@on eventName, cb

		@

	onAnyEvent: (listener) ->

		@_listenersForAnyEvent.push listener

		@

	removeEvent: (eventName, listener) ->

		return @ unless @_listeners[eventName]?

		array.pluckOneItem @_listeners[eventName], listener

		@

	removeListeners: (eventName) ->

		return @ unless @_listeners[eventName]?

		@_listeners[eventName].length = 0

		@

	removeAllListeners: ->

		for name, listeners of @_listeners

			listeners.length = 0

		@

	_emit: (eventName, data) ->

		for listener in @_listenersForAnyEvent

			listener.call @, data, eventName

		return unless @_listeners[eventName]?

		for listener in @_listeners[eventName]

			listener.call @, data

		return

	# this makes sure that all the calls to this class's method 'fnName'
	# are throttled
	_throttleEmitterMethod: (fnName, time = 1000) ->

		originalFn = @[fnName]

		if typeof originalFn isnt 'function'

			throw Error "this class does not have a method called '#{fnName}'"

		lastCallArgs = null
		pending = no
		timer = null

		@[fnName] = =>

			lastCallArgs = arguments

			do pend

		pend = =>

			if pending

				clearTimeout timer

			timer = setTimeout runIt, time

			pending = yes

		runIt = =>

			pending = no

			originalFn.apply @, lastCallArgs

	_disableEmitter: (fnName) ->

		if @_disabledEmitters[fnName]?

			throw Error "#{fnName} is already a disabled emitter"

		@_disabledEmitters[fnName] = @[fnName]

		@[fnName] = ->

	_enableEmitter: (fnName) ->

		fn = @_disabledEmitters[fnName]

		unless fn?

			throw Error "#{fnName} is not a disabled emitter"

		@[fnName] = fn

		delete @_disabledEmitters[fnName]