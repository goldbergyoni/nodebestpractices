_common = require './_common'

module.exports = object =

	isBareObject: _common.isBareObject.bind _common

	###
	if object is an instance of a class
	###
	isInstance: (what) ->

		not @isBareObject what

	###
	Alias to _common.typeOf
	###
	typeOf: _common.typeOf.bind _common

	###
	Alias to _common.clone
	###
	clone: _common.clone.bind _common

	###
	Empties an object of its properties.
	###
	empty: (o) ->

		for prop of o

			delete o[prop] if o.hasOwnProperty prop

		o

	###
	Empties an object. Doesn't check for hasOwnProperty, so it's a tiny
	bit faster. Use it for plain objects.
	###
	fastEmpty: (o) ->

		delete o[property] for property of o

		o

	###
	Overrides values fomr `newValues` on `base`, as long as they
	already exist in base.
	###
	overrideOnto: (base, newValues) ->

		return base if not @isBareObject(newValues) or not @isBareObject(base)

		for key, oldVal of base

			newVal = newValues[key]

			continue if newVal is undefined

			if typeof newVal isnt 'object' or @isInstance newVal

				base[key] = @clone newVal

			# newVal is a plain object
			else

				if typeof oldVal isnt 'object' or @isInstance oldVal

					base[key] = @clone newVal

				else

					@overrideOnto oldVal, newVal
		base

	###
	Takes a clone of 'base' and runs #overrideOnto on it
	###
	override: (base, newValues) ->

		@overrideOnto @clone(base), newValues

	append: (base, toAppend) ->

		@appendOnto @clone(base), toAppend

	# Deep appends values from `toAppend` to `base`
	appendOnto: (base, toAppend) ->

		return base if not @isBareObject(toAppend) or not @isBareObject(base)

		for own key, newVal of toAppend

			continue unless newVal isnt undefined

			if typeof newVal isnt 'object' or @isInstance newVal

				base[key] = newVal

			else

				# newVal is a bare object

				oldVal = base[key]

				if typeof oldVal isnt 'object' or @isInstance oldVal

					base[key] = @clone newVal

				else

					@appendOnto oldVal, newVal

		base

	# Groups
	groupProps: (obj, groups) ->

		grouped = {}

		for name, defs of groups

			grouped[name] = {}

		grouped['rest'] = {}

		`top: //`
		for key, val of obj

			shouldAdd = no

			for name, defs of groups

				unless Array.isArray defs

					defs = [defs]

				for def in defs

					if typeof def is 'string'

						if key is def

							shouldAdd = yes

					else if def instanceof RegExp

						if def.test key

							shouldAdd = yes

					else if def instanceof Function

						if def key

							shouldAdd = yes

					else

						throw Error 'Group definitions must either
						be strings, regexes, or functions.'

					if shouldAdd

						grouped[name][key] = val

						`continue top`

			grouped['rest'][key] = val

		grouped