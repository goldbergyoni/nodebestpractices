'use strict'
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var types = require('pg-types')
var escape = require('js-string-escape')

// result object returned from query
// in the 'end' event and also
// passed as second argument to provided callback
var Result = function (rowMode) {
  this.command = null
  this.rowCount = null
  this.oid = null
  this.rows = []
  this.fields = []
  this._parsers = []
  this.RowCtor = null
  this.rowAsArray = rowMode === 'array'
  if (this.rowAsArray) {
    this.parseRow = this._parseRowAsArray
  }
}

var matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/

// adds a command complete message
Result.prototype.addCommandComplete = function (msg) {
  var match
  if (msg.text) {
    // pure javascript
    match = matchRegexp.exec(msg.text)
  } else {
    // native bindings
    match = matchRegexp.exec(msg.command)
  }
  if (match) {
    this.command = match[1]
    if (match[3]) {
      // COMMMAND OID ROWS
      this.oid = parseInt(match[2], 10)
      this.rowCount = parseInt(match[3], 10)
    } else if (match[2]) {
      // COMMAND ROWS
      this.rowCount = parseInt(match[2], 10)
    }
  }
}

Result.prototype._parseRowAsArray = function (rowData) {
  var row = []
  for (var i = 0, len = rowData.length; i < len; i++) {
    var rawValue = rowData[i]
    if (rawValue !== null) {
      row.push(this._parsers[i](rawValue))
    } else {
      row.push(null)
    }
  }
  return row
}

// rowData is an array of text or binary values
// this turns the row into a JavaScript object
Result.prototype.parseRow = function (rowData) {
  return new this.RowCtor(this._parsers, rowData)
}

Result.prototype.addRow = function (row) {
  this.rows.push(row)
}

var inlineParser = function (fieldName, i) {
  return "\nthis['" +
    // fields containing single quotes will break
    // the evaluated javascript unless they are escaped
    // see https://github.com/brianc/node-postgres/issues/507
    // Addendum: However, we need to make sure to replace all
    // occurences of apostrophes, not just the first one.
    // See https://github.com/brianc/node-postgres/issues/934
    escape(fieldName) +
    "'] = " +
    'rowData[' + i + '] == null ? null : parsers[' + i + '](rowData[' + i + ']);'
}

Result.prototype.addFields = function (fieldDescriptions) {
  // clears field definitions
  // multiple query statements in 1 action can result in multiple sets
  // of rowDescriptions...eg: 'select NOW(); select 1::int;'
  // you need to reset the fields
  if (this.fields.length) {
    this.fields = []
    this._parsers = []
  }
  var ctorBody = ''
  for (var i = 0; i < fieldDescriptions.length; i++) {
    var desc = fieldDescriptions[i]
    this.fields.push(desc)
    var parser = this._getTypeParser(desc.dataTypeID, desc.format || 'text')
    this._parsers.push(parser)
    // this is some craziness to compile the row result parsing
    // results in ~60% speedup on large query result sets
    ctorBody += inlineParser(desc.name, i)
  }
  if (!this.rowAsArray) {
    this.RowCtor = Function('parsers', 'rowData', ctorBody)
  }
}

Result.prototype._getTypeParser = types.getTypeParser

module.exports = Result
