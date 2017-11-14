module.exports = classic = {}

# Little helper for mixins from CoffeeScript FAQ,
# courtesy of Sethaurus (http://github.com/sethaurus)
classic.implement = (mixins..., classReference) ->

	for mixin in mixins

		classProto = classReference::

		for member of mixin::

			unless Object.getOwnPropertyDescriptor classProto, member

				desc = Object.getOwnPropertyDescriptor mixin::, member

				Object.defineProperty classProto, member, desc

	classReference

classic.mix = (mixins..., classReference) ->

	classProto = classReference::

	classReference.__mixinCloners = []

	classReference.__applyClonersFor = (instance, args = null) ->

		for cloner in classReference.__mixinCloners

			cloner.apply instance, args

		return

	classReference.__mixinInitializers = []

	classReference.__initMixinsFor = (instance, args = null) ->

		for initializer in classReference.__mixinInitializers

			initializer.apply instance, args

		return

	classReference.__mixinQuitters = []

	classReference.__applyQuittersFor = (instance, args = null) ->

		for quitter in classReference.__mixinQuitters

			quitter.apply instance, args

		return

	for mixin in mixins

		unless mixin.constructor instanceof Function

			throw Error "Mixin should be a function"

		for member of mixin::

			if member.substr(0, 11) is '__initMixin'

				classReference.__mixinInitializers.push mixin::[member]

				continue

			else if member.substr(0, 11) is '__clonerFor'

				classReference.__mixinCloners.push mixin::[member]

				continue

			else if member.substr(0, 12) is '__quitterFor'

				classReference.__mixinQuitters.push mixin::[member]

				continue

			unless Object.getOwnPropertyDescriptor classProto, member

				desc = Object.getOwnPropertyDescriptor mixin::, member

				Object.defineProperty classProto, member, desc

	classReference