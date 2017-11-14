require './_prepare'

domConverter = mod 'domConverter'

describe "input types"

it "should work with objects", ->

	domConverter.objectToDom {}

it "should work with arrays", ->

	domConverter.objectToDom []

it "should not work with other types", ->

	(-> domConverter.objectToDom 'a').should.throw Error