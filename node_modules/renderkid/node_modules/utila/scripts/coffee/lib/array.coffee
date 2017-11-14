module.exports = array =

	###
	Tries to turn anything into an array.
	###
	from: (r) ->

		Array::slice.call r

	###
	Clone of an array. Properties will be shallow copies.
	###
	simpleClone: (a) ->

		a.slice 0

	shallowEqual: (a1, a2) ->

		return no unless Array.isArray(a1) and Array.isArray(a2) and a1.length is a2.length

		for val, i in a1

			return no unless a2[i] is val

		yes

	pluck: (a, i) ->

		return a if a.length < 1


		for value, index in a

			if index > i

				a[index - 1] = a[index]

		a.length = a.length - 1

		a

	pluckItem: (a, item) ->

		return a if a.length < 1


		removed = 0

		for value, index in a

			if value is item

				removed++

				continue

			if removed isnt 0

				a[index - removed] = a[index]

		a.length = a.length - removed if removed > 0

		a

	pluckOneItem: (a, item) ->

		return a if a.length < 1

		reached = no

		for value, index in a

			if not reached

				if value is item

					reached = yes

					continue

			else

				a[index - 1] = a[index]

		a.length = a.length - 1 if reached

		a

	pluckByCallback: (a, cb) ->

		return a if a.length < 1

		removed = 0

		for value, index in a

			if cb value, index

				removed++

				continue

			if removed isnt 0

				a[index - removed] = a[index]

		if removed > 0

			a.length = a.length - removed

		a

	pluckMultiple: (array, indexesToRemove) ->

		return array if array.length < 1

		removedSoFar = 0

		indexesToRemove.sort()

		for i in indexesToRemove

			@pluck array, i - removedSoFar

			removedSoFar++

		array

	injectByCallback: (a, toInject, shouldInject) ->

		valA = null

		valB = null

		len = a.length

		if len < 1

			a.push toInject

			return a


		for val, i in a

			valA = valB

			valB = val

			if shouldInject valA, valB, toInject

				return a.splice i, 0, toInject

		a.push toInject

		a

	injectInIndex: (a, index, toInject) ->

		len = a.length

		i = index

		if len < 1

			a.push toInject

			return a

		toPut = toInject

		toPutNext = null

		`for(; i <= len; i++){

			toPutNext = a[i];

			a[i] = toPut;

			toPut = toPutNext;

		}`

		# a[i] = toPut

		null