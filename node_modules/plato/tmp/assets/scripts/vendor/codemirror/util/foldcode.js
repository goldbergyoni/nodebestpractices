// the tagRangeFinder function is
//   Copyright (C) 2011 by Daniel Glazman <daniel@glazman.org>
// released under the MIT license (../../LICENSE) like the rest of CodeMirror
CodeMirror.tagRangeFinder = function(cm, start) {
  var nameStartChar = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
  var nameChar = nameStartChar + "\-\:\.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
  var xmlNAMERegExp = new RegExp("^[" + nameStartChar + "][" + nameChar + "]*");

  var lineText = cm.getLine(start.line);
  var found = false;
  var tag = null;
  var pos = start.ch;
  while (!found) {
    pos = lineText.indexOf("<", pos);
    if (-1 == pos) // no tag on line
      return;
    if (pos + 1 < lineText.length && lineText[pos + 1] == "/") { // closing tag
      pos++;
      continue;
    }
    // ok we seem to have a start tag
    if (!lineText.substr(pos + 1).match(xmlNAMERegExp)) { // not a tag name...
      pos++;
      continue;
    }
    var gtPos = lineText.indexOf(">", pos + 1);
    if (-1 == gtPos) { // end of start tag not in line
      var l = start.line + 1;
      var foundGt = false;
      var lastLine = cm.lineCount();
      while (l < lastLine && !foundGt) {
        var lt = cm.getLine(l);
        gtPos = lt.indexOf(">");
        if (-1 != gtPos) { // found a >
          foundGt = true;
          var slash = lt.lastIndexOf("/", gtPos);
          if (-1 != slash && slash < gtPos) {
            var str = lineText.substr(slash, gtPos - slash + 1);
            if (!str.match( /\/\s*\>/ )) // yep, that's the end of empty tag
              return;
          }
        }
        l++;
      }
      found = true;
    }
    else {
      var slashPos = lineText.lastIndexOf("/", gtPos);
      if (-1 == slashPos) { // cannot be empty tag
        found = true;
        // don't continue
      }
      else { // empty tag?
        // check if really empty tag
        var str = lineText.substr(slashPos, gtPos - slashPos + 1);
        if (!str.match( /\/\s*\>/ )) { // finally not empty
          found = true;
          // don't continue
        }
      }
    }
    if (found) {
      var subLine = lineText.substr(pos + 1);
      tag = subLine.match(xmlNAMERegExp);
      if (tag) {
        // we have an element name, wooohooo !
        tag = tag[0];
        // do we have the close tag on same line ???
        if (-1 != lineText.indexOf("</" + tag + ">", pos)) // yep
        {
          found = false;
        }
        // we don't, so we have a candidate...
      }
      else
        found = false;
    }
    if (!found)
      pos++;
  }

  if (found) {
    var startTag = "(\\<\\/" + tag + "\\>)|(\\<" + tag + "\\>)|(\\<" + tag + "\\s)|(\\<" + tag + "$)";
    var startTagRegExp = new RegExp(startTag);
    var endTag = "</" + tag + ">";
    var depth = 1;
    var l = start.line + 1;
    var lastLine = cm.lineCount();
    while (l < lastLine) {
      lineText = cm.getLine(l);
      var match = lineText.match(startTagRegExp);
      if (match) {
        for (var i = 0; i < match.length; i++) {
          if (match[i] == endTag)
            depth--;
          else
            depth++;
          if (!depth) return {from: {line: start.line, ch: gtPos + 1},
                              to: {line: l, ch: match.index}};
        }
      }
      l++;
    }
    return;
  }
};

CodeMirror.braceRangeFinder = function(cm, start) {
  var line = start.line, lineText = cm.getLine(line);
  var at = lineText.length, startChar, tokenType;
  for (;;) {
    var found = lineText.lastIndexOf("{", at);
    if (found < start.ch) break;
    tokenType = cm.getTokenAt({line: line, ch: found}).type;
    if (!/^(comment|string)/.test(tokenType)) { startChar = found; break; }
    at = found - 1;
  }
  if (startChar == null || lineText.lastIndexOf("}") > startChar) return;
  var count = 1, lastLine = cm.lineCount(), end, endCh;
  outer: for (var i = line + 1; i < lastLine; ++i) {
    var text = cm.getLine(i), pos = 0;
    for (;;) {
      var nextOpen = text.indexOf("{", pos), nextClose = text.indexOf("}", pos);
      if (nextOpen < 0) nextOpen = text.length;
      if (nextClose < 0) nextClose = text.length;
      pos = Math.min(nextOpen, nextClose);
      if (pos == text.length) break;
      if (cm.getTokenAt({line: i, ch: pos + 1}).type == tokenType) {
        if (pos == nextOpen) ++count;
        else if (!--count) { end = i; endCh = pos; break outer; }
      }
      ++pos;
    }
  }
  if (end == null || end == line + 1) return;
  return {from: {line: line, ch: startChar + 1},
          to: {line: end, ch: endCh}};
};

CodeMirror.indentRangeFinder = function(cm, start) {
  var tabSize = cm.getOption("tabSize"), firstLine = cm.getLine(start.line);
  var myIndent = CodeMirror.countColumn(firstLine, null, tabSize);
  for (var i = start.line + 1, end = cm.lineCount(); i < end; ++i) {
    var curLine = cm.getLine(i);
    if (CodeMirror.countColumn(curLine, null, tabSize) < myIndent)
      return {from: {line: start.line, ch: firstLine.length},
              to: {line: i, ch: curLine.length}};
  }
};

CodeMirror.newFoldFunction = function(rangeFinder, widget) {
  if (widget == null) widget = "\u2194";
  if (typeof widget == "string") {
    var text = document.createTextNode(widget);
    widget = document.createElement("span");
    widget.appendChild(text);
    widget.className = "CodeMirror-foldmarker";
  }

  return function(cm, pos) {
    if (typeof pos == "number") pos = {line: pos, ch: 0};
    var range = rangeFinder(cm, pos);
    if (!range) return;

    var present = cm.findMarksAt(range.from), cleared = 0;
    for (var i = 0; i < present.length; ++i) {
      if (present[i].__isFold) {
        ++cleared;
        present[i].clear();
      }
    }
    if (cleared) return;

    var myWidget = widget.cloneNode(true);
    CodeMirror.on(myWidget, "mousedown", function() {myRange.clear();});
    var myRange = cm.markText(range.from, range.to, {
      replacedWith: myWidget,
      clearOnEnter: true,
      __isFold: true
    });
  };
};
