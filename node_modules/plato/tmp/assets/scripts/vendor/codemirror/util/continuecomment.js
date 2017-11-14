(function() {
  var modes = ["clike", "css", "javascript"];
  for (var i = 0; i < modes.length; ++i)
    CodeMirror.extendMode(modes[i], {blockCommentStart: "/*",
                                     blockCommentEnd: "*/",
                                     blockCommentContinue: " * "});

  CodeMirror.commands.newlineAndIndentContinueComment = function(cm) {
    var pos = cm.getCursor(), token = cm.getTokenAt(pos);
    var mode = CodeMirror.innerMode(cm.getMode(), token.state).mode;
    var space;

    if (token.type == "comment" && mode.blockCommentStart) {
      var end = token.string.indexOf(mode.blockCommentEnd);
      var full = cm.getRange({line: pos.line, ch: 0}, {line: pos.line, ch: token.end}), found;
      if (end != -1 && end == token.string.length - mode.blockCommentEnd.length) {
        // Comment ended, don't continue it
      } else if (token.string.indexOf(mode.blockCommentStart) == 0) {
        space = full.slice(0, token.start);
        if (!/^\s*$/.test(space)) {
          space = "";
          for (var i = 0; i < token.start; ++i) space += " ";
        }
      } else if ((found = full.indexOf(mode.blockCommentContinue)) != -1 &&
                 found + mode.blockCommentContinue.length > token.start &&
                 /^\s*$/.test(full.slice(0, found))) {
        space = full.slice(0, found);
      }
    }

    if (space != null)
      cm.replaceSelection("\n" + space + mode.blockCommentContinue, "end");
    else
      cm.execCommand("newlineAndIndent");
  };
})();
