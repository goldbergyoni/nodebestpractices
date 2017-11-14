module.exports = common =

	###
	Checks to see if o is an object, and it isn't an instance
	of some class.
	###
	isBareObject: (o) ->

		if o? and o.constructor is Object

			return true

		false

	###
	Returns type of an object, including:
	undefined, null, string, number, array,
	arguments, element, textnode, whitespace, and object
	###
	typeOf: (item) ->

		return 'null' if item is null

		return typeof item if typeof item isnt 'object'

		return 'array' if Array.isArray item

		# From MooTools
		# - do we even need this?
		if item.nodeName

			if item.nodeType is 1 then return 'element'
			if item.nodeType is 3 then return (/\S/).test(item.nodeValue) ? 'textnode' : 'whitespace'

		else if typeof item.length is 'number'

			if item.callee then return 'arguments'

		return typeof item

	# Deep clone of any variable.
	# From MooTools
	clone: (item, includePrototype = false) ->

		switch common.typeOf item

			when 'array' then return common._cloneArray item, includePrototype

			when 'object' then return common._cloneObject item, includePrototype

			else return item

	###
	Deep clone of an object.
	From MooTools
	###
	_cloneObject: (o, includePrototype = false) ->

		if common.isBareObject o

			clone = {}

			for key of o

				clone[key] = common.clone o[key], includePrototype

			return clone

		else

			return o unless includePrototype

			return o if o instanceof Function

			clone = Object.create o.constructor.prototype

			for key of o

				if o.hasOwnProperty key

					clone[key] = common.clone o[key], includePrototype

			clone

	###
	Deep clone of an array.
	From MooTools
	###
	_cloneArray: (a, includePrototype = false) ->

		i = a.length

		clone = new Array i

		while i--

			clone[i] = common.clone a[i], includePrototype

		clone