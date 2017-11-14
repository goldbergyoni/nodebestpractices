'use strict'

exports.parse = function (source, transform) {
  return new ArrayParser(source, transform).parse()
}

function ArrayParser (source, transform) {
  this.source = source
  this.transform = transform || identity
  this.position = 0
  this.entries = []
  this.recorded = []
  this.dimension = 0
}

ArrayParser.prototype.isEof = function () {
  return this.position >= this.source.length
}

ArrayParser.prototype.nextCharacter = function () {
  var character = this.source[this.position++]
  if (character === '\\') {
    return {
      value: this.source[this.position++],
      escaped: true
    }
  }
  return {
    value: character,
    escaped: false
  }
}

ArrayParser.prototype.record = function (character) {
  this.recorded.push(character)
}

ArrayParser.prototype.newEntry = function (includeEmpty) {
  var entry
  if (this.recorded.length > 0 || includeEmpty) {
    entry = this.recorded.join('')
    if (entry === 'NULL' && !includeEmpty) {
      entry = null
    }
    if (entry !== null) entry = this.transform(entry)
    this.entries.push(entry)
    this.recorded = []
  }
}

ArrayParser.prototype.parse = function (nested) {
  var character, parser, quote
  while (!this.isEof()) {
    character = this.nextCharacter()
    if (character.value === '{' && !quote) {
      this.dimension++
      if (this.dimension > 1) {
        parser = new ArrayParser(this.source.substr(this.position - 1), this.transform)
        this.entries.push(parser.parse(true))
        this.position += parser.position - 2
      }
    } else if (character.value === '}' && !quote) {
      this.dimension--
      if (!this.dimension) {
        this.newEntry()
        if (nested) return this.entries
      }
    } else if (character.value === '"' && !character.escaped) {
      if (quote) this.newEntry(true)
      quote = !quote
    } else if (character.value === ',' && !quote) {
      this.newEntry()
    } else {
      this.record(character.value)
    }
  }
  if (this.dimension !== 0) {
    throw new Error('array dimension not balanced')
  }
  return this.entries
}

function identity (value) {
  return value
}
