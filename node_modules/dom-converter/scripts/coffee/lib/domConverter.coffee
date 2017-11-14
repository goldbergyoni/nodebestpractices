objectToSaneObject = require './objectToSaneObject'
saneObjectToDom = require './saneObjectToDom'
domToMarkup = require './domToMarkup'
{object} = require 'utila'

module.exports = self =

	objectToDom: (o) ->

		o = self._object2SaneObject o

		saneObjectToDom.convert o

	object2markup: (o) ->

		dom = self.toDom o

		domToMarkup.convert dom

	domToMarkup: (dom) ->

		domToMarkup.convert dom

	_object2SaneObject: (o) ->

		unless Array.isArray o

			unless object.isBareObject o

				throw Error "toDom() only accepts arrays and bare objects as input"

		objectToSaneObject.sanitize o