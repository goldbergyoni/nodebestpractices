'use strict';

var Lexer = exports.Lexer = function() {
  this.pos = 0;
  this.buf = null;
  this.buflen = 0;

  // Operator table, mapping operator -> token name
  this.optable = {
    '+':  'PLUS',
    '-':  'MINUS',
    '*':  'MULTIPLY',
    '.':  'PERIOD',
    '\\': 'BACKSLASH',
    ':':  'COLON',
    '%':  'PERCENT',
    '|':  'PIPE',
    '!':  'EXCLAMATION',
    '?':  'QUESTION',
    '#':  'POUND',
    '&':  'AMPERSAND',
    ';':  'SEMI',
    ',':  'COMMA',
    '(':  'L_PAREN',
    ')':  'R_PAREN',
    '<':  'L_ANG',
    '>':  'R_ANG',
    '{':  'L_BRACE',
    '}':  'R_BRACE',
    '[':  'L_BRACKET',
    ']':  'R_BRACKET',
    '=':  'EQUALS'
  };
}

// Initialize the Lexer's buffer. This resets the lexer's internal
// state and subsequent tokens will be returned starting with the
// beginning of the new buffer.
Lexer.prototype.input = function(buf) {
  this.pos = 0;
  this.buf = buf;
  this.buflen = buf.length;
}

// Get the next token from the current buffer. A token is an object with
// the following properties:
// - name: name of the pattern that this token matched (taken from rules).
// - value: actual string value of the token.
// - pos: offset in the current buffer where the token starts.
//
// If there are no more tokens in the buffer, returns null. In case of
// an error throws Error.
Lexer.prototype.token = function() {
  this._skipnontokens();
  if (this.pos >= this.buflen) {
    return null;
  }

  // The char at this.pos is part of a real token. Figure out which.
  var c = this.buf.charAt(this.pos);

  // '/' is treated specially, because it starts a comment if followed by
  // another '/'. If not followed by another '/', it's the DIVIDE
  // operator.
  if (c === '/') {
    var next_c = this.buf.charAt(this.pos + 1);
    if (next_c === '/') {
      return this._process_comment();
    } else {
      return {name: 'DIVIDE', value: '/', pos: this.pos++};
    }
  } else {
    // Look it up in the table of operators
    var op = this.optable[c];
    if (op !== undefined) {
      return {name: op, value: c, pos: this.pos++};
    } else {
      // Not an operator - so it's the beginning of another token.
      if (Lexer._isalpha(c)) {
        return this._process_identifier();
      } else if (Lexer._isdigit(c)) {
        return this._process_number();
      } else if (c === '"') {
        return this._process_quote();
      } else {
        throw Error('Token error at ' + this.pos);
      }
    }
  }
}

Lexer._isnewline = function(c) {
  return c === '\r' || c === '\n';
}

Lexer._isdigit = function(c) {
  return c >= '0' && c <= '9';
}

Lexer._isalpha = function(c) {
  return (c >= 'a' && c <= 'z') ||
         (c >= 'A' && c <= 'Z') ||
         c === '_' || c === '$';
}

Lexer._isalphanum = function(c) {
  return (c >= 'a' && c <= 'z') ||
         (c >= 'A' && c <= 'Z') ||
         (c >= '0' && c <= '9') ||
         c === '_' || c === '$';
}

Lexer.prototype._process_number = function() {
  var endpos = this.pos + 1;
  while (endpos < this.buflen &&
         Lexer._isdigit(this.buf.charAt(endpos))) {
    endpos++;
  }

  var tok = {
    name: 'NUMBER',
    value: this.buf.substring(this.pos, endpos),
    pos: this.pos
  };
  this.pos = endpos;
  return tok;
}

Lexer.prototype._process_comment = function() {
  var endpos = this.pos + 2;
  // Skip until the end of the line
  var c = this.buf.charAt(this.pos + 2);
  while (endpos < this.buflen &&
         !Lexer._isnewline(this.buf.charAt(endpos))) {
    endpos++;
  }

  var tok = {
    name: 'COMMENT',
    value: this.buf.substring(this.pos, endpos),
    pos: this.pos
  };
  this.pos = endpos + 1;
  return tok;
}

Lexer.prototype._process_identifier = function() {
  var endpos = this.pos + 1;
  while (endpos < this.buflen &&
         Lexer._isalphanum(this.buf.charAt(endpos))) {
    endpos++;
  }

  var tok = {
    name: 'IDENTIFIER',
    value: this.buf.substring(this.pos, endpos),
    pos: this.pos
  };
  this.pos = endpos;
  return tok;
}

Lexer.prototype._process_quote = function() {
  // this.pos points at the opening quote. Find the ending quote.
  var end_index = this.buf.indexOf('"', this.pos + 1);

  if (end_index === -1) {
    throw Error('Unterminated quote at ' + this.pos);
  } else {
    var tok = {
      name: 'QUOTE',
      value: this.buf.substring(this.pos, end_index + 1),
      pos: this.pos
    };
    this.pos = end_index + 1;
    return tok;
  }
}

Lexer.prototype._skipnontokens = function() {
  while (this.pos < this.buflen) {
    var c = this.buf.charAt(this.pos);
    if (c == ' ' || c == '\t' || c == '\r' || c == '\n') {
      this.pos++;
    } else {
      break;
    }
  }
}
