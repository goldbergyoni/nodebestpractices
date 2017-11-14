{object} = require 'utila'

module.exports = self =

	sanitize: (val) ->

		self._toChildren val

	_toChildren: (val) ->

		if object.isBareObject val

			return self._objectToChildren val

		else if Array.isArray val

			return self._arrayToChildren val

		else if val is null or typeof val is 'undefined'

			return []

		else if typeof val in ['string', 'number']

			return [String val]

		else

			throw Error "not a valid child node: `#{val}"

	_objectToChildren: (o) ->

		a = []

		for own key, val of o

			cur = {}

			cur[key] = self.sanitize val

			a.push cur

		a

	_arrayToChildren: (a) ->

		ret = []

		for v in a

			ret.push self._toNode v

		ret

	_toNode: (o) ->

		if typeof o in ['string', 'number']

			return String o

		else if object.isBareObject o

			keys = Object.keys(o)

			if keys.length isnt 1

				throw Error "a node must only have one key as tag name"

			key = keys[0]

			obj = {}

			obj[key] = self._toChildren o[key]

			return obj

		else

			throw Error "not a valid node: `#{o}`"

