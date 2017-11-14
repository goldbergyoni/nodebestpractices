require './_prepare'

objectToSaneObject = mod 'objectToSaneObject'

describe "sanitize()"

test "case: 'text'", ->

	input = 'text'

	expectation = ['text']

	ret = objectToSaneObject.sanitize input

	ret.should.be.like expectation

test "case: ['text']", ->

	input = ['text']

	expectation = ['text']

	ret = objectToSaneObject.sanitize input

	ret.should.be.like expectation

test "case: {a:b}", ->

	input = a: 'b'

	expectation = [{a: ['b']}]

	ret = objectToSaneObject.sanitize input

	ret.should.be.like expectation

test "case: {a:[b: 'c']}", ->

	input = a: [b: 'c']

	expectation = [{a: [{b: ['c']}]}]

	ret = objectToSaneObject.sanitize input

	ret.should.be.like expectation

test "case: {a:b: 'c'}", ->

	input = a: b: 'c'

	expectation = [{
		a: [{
			b: ['c']
		}]
	}]

	ret = objectToSaneObject.sanitize input

	ret.should.be.like expectation

test "case: {a:b: ['c', d: 'e']}", ->

	input = a: b: ['c', d: 'e']

	expectation = [{
		a: [{
			b: ['c', {d: ['e']}]
		}]
	}]

	ret = objectToSaneObject.sanitize input

	ret.should.be.like expectation