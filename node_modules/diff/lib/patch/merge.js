/*istanbul ignore start*/'use strict';

exports.__esModule = true;
exports. /*istanbul ignore end*/calcLineCount = calcLineCount;
/*istanbul ignore start*/exports. /*istanbul ignore end*/merge = merge;

var /*istanbul ignore start*/_create = require('./create') /*istanbul ignore end*/;

var /*istanbul ignore start*/_parse = require('./parse') /*istanbul ignore end*/;

var /*istanbul ignore start*/_array = require('../util/array') /*istanbul ignore end*/;

/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*istanbul ignore end*/function calcLineCount(hunk) {
  var conflicted = false;

  hunk.oldLines = 0;
  hunk.newLines = 0;

  hunk.lines.forEach(function (line) {
    if (typeof line !== 'string') {
      conflicted = true;
      return;
    }

    if (line[0] === '+' || line[0] === ' ') {
      hunk.newLines++;
    }
    if (line[0] === '-' || line[0] === ' ') {
      hunk.oldLines++;
    }
  });

  if (conflicted) {
    delete hunk.oldLines;
    delete hunk.newLines;
  }
}

function merge(mine, theirs, base) {
  mine = loadPatch(mine, base);
  theirs = loadPatch(theirs, base);

  var ret = {};

  // For index we just let it pass through as it doesn't have any necessary meaning.
  // Leaving sanity checks on this to the API consumer that may know more about the
  // meaning in their own context.
  if (mine.index || theirs.index) {
    ret.index = mine.index || theirs.index;
  }

  if (mine.newFileName || theirs.newFileName) {
    if (!fileNameChanged(mine)) {
      // No header or no change in ours, use theirs (and ours if theirs does not exist)
      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
      ret.newFileName = theirs.newFileName || mine.newFileName;
      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
      ret.newHeader = theirs.newHeader || mine.newHeader;
    } else if (!fileNameChanged(theirs)) {
      // No header or no change in theirs, use ours
      ret.oldFileName = mine.oldFileName;
      ret.newFileName = mine.newFileName;
      ret.oldHeader = mine.oldHeader;
      ret.newHeader = mine.newHeader;
    } else {
      // Both changed... figure it out
      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
    }
  }

  ret.hunks = [];

  var mineIndex = 0,
      theirsIndex = 0,
      mineOffset = 0,
      theirsOffset = 0;

  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
    var mineCurrent = mine.hunks[mineIndex] || { oldStart: Infinity },
        theirsCurrent = theirs.hunks[theirsIndex] || { oldStart: Infinity };

    if (hunkBefore(mineCurrent, theirsCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
      mineIndex++;
      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
      theirsIndex++;
      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
    } else {
      // Overlap, merge as best we can
      var mergedHunk = {
        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
        oldLines: 0,
        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
        newLines: 0,
        lines: []
      };
      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
      theirsIndex++;
      mineIndex++;

      ret.hunks.push(mergedHunk);
    }
  }

  return ret;
}

function loadPatch(param, base) {
  if (typeof param === 'string') {
    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
      return (/*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(param)[0]
      );
    }

    if (!base) {
      throw new Error('Must provide a base reference or pass in a patch');
    }
    return (/*istanbul ignore start*/(0, _create.structuredPatch) /*istanbul ignore end*/(undefined, undefined, base, param)
    );
  }

  return param;
}

function fileNameChanged(patch) {
  return patch.newFileName && patch.newFileName !== patch.oldFileName;
}

function selectField(index, mine, theirs) {
  if (mine === theirs) {
    return mine;
  } else {
    index.conflict = true;
    return { mine: mine, theirs: theirs };
  }
}

function hunkBefore(test, check) {
  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
}

function cloneHunk(hunk, offset) {
  return {
    oldStart: hunk.oldStart, oldLines: hunk.oldLines,
    newStart: hunk.newStart + offset, newLines: hunk.newLines,
    lines: hunk.lines
  };
}

function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
  // This will generally result in a conflicted hunk, but there are cases where the context
  // is the only overlap where we can successfully merge the content here.
  var mine = { offset: mineOffset, lines: mineLines, index: 0 },
      their = { offset: theirOffset, lines: theirLines, index: 0 };

  // Handle any leading content
  insertLeading(hunk, mine, their);
  insertLeading(hunk, their, mine);

  // Now in the overlap content. Scan through and select the best changes from each.
  while (mine.index < mine.lines.length && their.index < their.lines.length) {
    var mineCurrent = mine.lines[mine.index],
        theirCurrent = their.lines[their.index];

    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
      // Both modified ...
      mutualChange(hunk, mine, their);
    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
      /*istanbul ignore start*/var _hunk$lines;

      /*istanbul ignore end*/ // Mine inserted
      /*istanbul ignore start*/(_hunk$lines = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(mine)));
    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
      /*istanbul ignore start*/var _hunk$lines2;

      /*istanbul ignore end*/ // Theirs inserted
      /*istanbul ignore start*/(_hunk$lines2 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/collectChange(their)));
    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
      // Mine removed or edited
      removal(hunk, mine, their);
    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
      // Their removed or edited
      removal(hunk, their, mine, true);
    } else if (mineCurrent === theirCurrent) {
      // Context identity
      hunk.lines.push(mineCurrent);
      mine.index++;
      their.index++;
    } else {
      // Context mismatch
      conflict(hunk, collectChange(mine), collectChange(their));
    }
  }

  // Now push anything that may be remaining
  insertTrailing(hunk, mine);
  insertTrailing(hunk, their);

  calcLineCount(hunk);
}

function mutualChange(hunk, mine, their) {
  var myChanges = collectChange(mine),
      theirChanges = collectChange(their);

  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
    // Special case for remove changes that are supersets of one another
    if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
      /*istanbul ignore start*/var _hunk$lines3;

      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines3 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
      return;
    } else if ( /*istanbul ignore start*/(0, _array.arrayStartsWith) /*istanbul ignore end*/(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
      /*istanbul ignore start*/var _hunk$lines4;

      /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines4 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines4 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges));
      return;
    }
  } else if ( /*istanbul ignore start*/(0, _array.arrayEqual) /*istanbul ignore end*/(myChanges, theirChanges)) {
    /*istanbul ignore start*/var _hunk$lines5;

    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines5 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines5 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/myChanges));
    return;
  }

  conflict(hunk, myChanges, theirChanges);
}

function removal(hunk, mine, their, swap) {
  var myChanges = collectChange(mine),
      theirChanges = collectContext(their, myChanges);
  if (theirChanges.merged) {
    /*istanbul ignore start*/var _hunk$lines6;

    /*istanbul ignore end*/ /*istanbul ignore start*/(_hunk$lines6 = /*istanbul ignore end*/hunk.lines).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_hunk$lines6 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/theirChanges.merged));
  } else {
    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
  }
}

function conflict(hunk, mine, their) {
  hunk.conflict = true;
  hunk.lines.push({
    conflict: true,
    mine: mine,
    theirs: their
  });
}

function insertLeading(hunk, insert, their) {
  while (insert.offset < their.offset && insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
    insert.offset++;
  }
}
function insertTrailing(hunk, insert) {
  while (insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
  }
}

function collectChange(state) {
  var ret = [],
      operation = state.lines[state.index][0];
  while (state.index < state.lines.length) {
    var line = state.lines[state.index];

    // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
    if (operation === '-' && line[0] === '+') {
      operation = '+';
    }

    if (operation === line[0]) {
      ret.push(line);
      state.index++;
    } else {
      break;
    }
  }

  return ret;
}
function collectContext(state, matchChanges) {
  var changes = [],
      merged = [],
      matchIndex = 0,
      contextChanges = false,
      conflicted = false;
  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
    var change = state.lines[state.index],
        match = matchChanges[matchIndex];

    // Once we've hit our add, then we are done
    if (match[0] === '+') {
      break;
    }

    contextChanges = contextChanges || change[0] !== ' ';

    merged.push(match);
    matchIndex++;

    // Consume any additions in the other block as a conflict to attempt
    // to pull in the remaining context after this
    if (change[0] === '+') {
      conflicted = true;

      while (change[0] === '+') {
        changes.push(change);
        change = state.lines[++state.index];
      }
    }

    if (match.substr(1) === change.substr(1)) {
      changes.push(change);
      state.index++;
    } else {
      conflicted = true;
    }
  }

  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
    conflicted = true;
  }

  if (conflicted) {
    return changes;
  }

  while (matchIndex < matchChanges.length) {
    merged.push(matchChanges[matchIndex++]);
  }

  return {
    merged: merged,
    changes: changes
  };
}

function allRemoves(changes) {
  return changes.reduce(function (prev, change) {
    return prev && change[0] === '-';
  }, true);
}
function skipRemoveSuperset(state, removeChanges, delta) {
  for (var i = 0; i < delta; i++) {
    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
    if (state.lines[state.index + i] !== ' ' + changeContent) {
      return false;
    }
  }

  state.index += delta;
  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwibWVyZ2UiLCJodW5rIiwiY29uZmxpY3RlZCIsIm9sZExpbmVzIiwibmV3TGluZXMiLCJsaW5lcyIsImZvckVhY2giLCJsaW5lIiwibWluZSIsInRoZWlycyIsImJhc2UiLCJsb2FkUGF0Y2giLCJyZXQiLCJpbmRleCIsIm5ld0ZpbGVOYW1lIiwiZmlsZU5hbWVDaGFuZ2VkIiwib2xkRmlsZU5hbWUiLCJvbGRIZWFkZXIiLCJuZXdIZWFkZXIiLCJzZWxlY3RGaWVsZCIsImh1bmtzIiwibWluZUluZGV4IiwidGhlaXJzSW5kZXgiLCJtaW5lT2Zmc2V0IiwidGhlaXJzT2Zmc2V0IiwibGVuZ3RoIiwibWluZUN1cnJlbnQiLCJvbGRTdGFydCIsIkluZmluaXR5IiwidGhlaXJzQ3VycmVudCIsImh1bmtCZWZvcmUiLCJwdXNoIiwiY2xvbmVIdW5rIiwibWVyZ2VkSHVuayIsIk1hdGgiLCJtaW4iLCJuZXdTdGFydCIsIm1lcmdlTGluZXMiLCJwYXJhbSIsInRlc3QiLCJFcnJvciIsInVuZGVmaW5lZCIsInBhdGNoIiwiY29uZmxpY3QiLCJjaGVjayIsIm9mZnNldCIsIm1pbmVMaW5lcyIsInRoZWlyT2Zmc2V0IiwidGhlaXJMaW5lcyIsInRoZWlyIiwiaW5zZXJ0TGVhZGluZyIsInRoZWlyQ3VycmVudCIsIm11dHVhbENoYW5nZSIsImNvbGxlY3RDaGFuZ2UiLCJyZW1vdmFsIiwiaW5zZXJ0VHJhaWxpbmciLCJteUNoYW5nZXMiLCJ0aGVpckNoYW5nZXMiLCJhbGxSZW1vdmVzIiwic2tpcFJlbW92ZVN1cGVyc2V0Iiwic3dhcCIsImNvbGxlY3RDb250ZXh0IiwibWVyZ2VkIiwiaW5zZXJ0Iiwic3RhdGUiLCJvcGVyYXRpb24iLCJtYXRjaENoYW5nZXMiLCJjaGFuZ2VzIiwibWF0Y2hJbmRleCIsImNvbnRleHRDaGFuZ2VzIiwiY2hhbmdlIiwibWF0Y2giLCJzdWJzdHIi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L0IsSUFBUCxDQUFZbUMsYUFBYUUsWUFBYixDQUFaO0FBQ0Q7O0FBRUQsU0FBTztBQUNMTixrQkFESztBQUVMSztBQUZLLEdBQVA7QUFJRDs7QUFFRCxTQUFTVCxVQUFULENBQW9CUyxPQUFwQixFQUE2QjtBQUMzQixTQUFPQSxRQUFRTSxNQUFSLENBQWUsVUFBU0MsSUFBVCxFQUFlSixNQUFmLEVBQXVCO0FBQzNDLFdBQU9JLFFBQVFKLE9BQU8sQ0FBUCxNQUFjLEdBQTdCO0FBQ0QsR0FGTSxFQUVKLElBRkksQ0FBUDtBQUdEO0FBQ0QsU0FBU1gsa0JBQVQsQ0FBNEJLLEtBQTVCLEVBQW1DVyxhQUFuQyxFQUFrREMsS0FBbEQsRUFBeUQ7QUFDdkQsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELEtBQXBCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QixRQUFJQyxnQkFBZ0JILGNBQWNBLGNBQWNsRCxNQUFkLEdBQXVCbUQsS0FBdkIsR0FBK0JDLENBQTdDLEVBQWdETCxNQUFoRCxDQUF1RCxDQUF2RCxDQUFwQjtBQUNBLFFBQUlSLE1BQU0zRCxLQUFOLENBQVkyRCxNQUFNbkQsS0FBTixHQUFjZ0UsQ0FBMUIsTUFBaUMsTUFBTUMsYUFBM0MsRUFBMEQ7QUFDeEQsYUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRGQsUUFBTW5ELEtBQU4sSUFBZStELEtBQWY7QUFDQSxTQUFPLElBQVA7QUFDRCIsImZpbGUiOiJtZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3RydWN0dXJlZFBhdGNofSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQge3BhcnNlUGF0Y2h9IGZyb20gJy4vcGFyc2UnO1xuXG5pbXBvcnQge2FycmF5RXF1YWwsIGFycmF5U3RhcnRzV2l0aH0gZnJvbSAnLi4vdXRpbC9hcnJheSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjTGluZUNvdW50KGh1bmspIHtcbiAgbGV0IGNvbmZsaWN0ZWQgPSBmYWxzZTtcblxuICBodW5rLm9sZExpbmVzID0gMDtcbiAgaHVuay5uZXdMaW5lcyA9IDA7XG5cbiAgaHVuay5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBpZiAodHlwZW9mIGxpbmUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykge1xuICAgICAgaHVuay5uZXdMaW5lcysrO1xuICAgIH1cbiAgICBpZiAobGluZVswXSA9PT0gJy0nIHx8IGxpbmVbMF0gPT09ICcgJykge1xuICAgICAgaHVuay5vbGRMaW5lcysrO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGNvbmZsaWN0ZWQpIHtcbiAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcbiAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XG4gIHRoZWlycyA9IGxvYWRQYXRjaCh0aGVpcnMsIGJhc2UpO1xuXG4gIGxldCByZXQgPSB7fTtcblxuICAvLyBGb3IgaW5kZXggd2UganVzdCBsZXQgaXQgcGFzcyB0aHJvdWdoIGFzIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgbmVjZXNzYXJ5IG1lYW5pbmcuXG4gIC8vIExlYXZpbmcgc2FuaXR5IGNoZWNrcyBvbiB0aGlzIHRvIHRoZSBBUEkgY29uc3VtZXIgdGhhdCBtYXkga25vdyBtb3JlIGFib3V0IHRoZVxuICAvLyBtZWFuaW5nIGluIHRoZWlyIG93biBjb250ZXh0LlxuICBpZiAobWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXgpIHtcbiAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgfVxuXG4gIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIG91cnMsIHVzZSB0aGVpcnMgKGFuZCBvdXJzIGlmIHRoZWlycyBkb2VzIG5vdCBleGlzdClcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gdGhlaXJzLm9sZEhlYWRlciB8fCBtaW5lLm9sZEhlYWRlcjtcbiAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIHRoZWlycywgdXNlIG91cnNcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3RoIGNoYW5nZWQuLi4gZmlndXJlIGl0IG91dFxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRIZWFkZXIsIHRoZWlycy5vbGRIZWFkZXIpO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldC5odW5rcyA9IFtdO1xuXG4gIGxldCBtaW5lSW5kZXggPSAwLFxuICAgICAgdGhlaXJzSW5kZXggPSAwLFxuICAgICAgbWluZU9mZnNldCA9IDAsXG4gICAgICB0aGVpcnNPZmZzZXQgPSAwO1xuXG4gIHdoaWxlIChtaW5lSW5kZXggPCBtaW5lLmh1bmtzLmxlbmd0aCB8fCB0aGVpcnNJbmRleCA8IHRoZWlycy5odW5rcy5sZW5ndGgpIHtcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmh1bmtzW21pbmVJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX0sXG4gICAgICAgIHRoZWlyc0N1cnJlbnQgPSB0aGVpcnMuaHVua3NbdGhlaXJzSW5kZXhdIHx8IHtvbGRTdGFydDogSW5maW5pdHl9O1xuXG4gICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKG1pbmVDdXJyZW50LCBtaW5lT2Zmc2V0KSk7XG4gICAgICBtaW5lSW5kZXgrKztcbiAgICAgIHRoZWlyc09mZnNldCArPSBtaW5lQ3VycmVudC5uZXdMaW5lcyAtIG1pbmVDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSBpZiAoaHVua0JlZm9yZSh0aGVpcnNDdXJyZW50LCBtaW5lQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsodGhlaXJzQ3VycmVudCwgdGhlaXJzT2Zmc2V0KSk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3ZlcmxhcCwgbWVyZ2UgYXMgYmVzdCB3ZSBjYW5cbiAgICAgIGxldCBtZXJnZWRIdW5rID0ge1xuICAgICAgICBvbGRTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQpLFxuICAgICAgICBvbGRMaW5lczogMCxcbiAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgIG5ld0xpbmVzOiAwLFxuICAgICAgICBsaW5lczogW11cbiAgICAgIH07XG4gICAgICBtZXJnZUxpbmVzKG1lcmdlZEh1bmssIG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCBtaW5lQ3VycmVudC5saW5lcywgdGhlaXJzQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5saW5lcyk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZUluZGV4Kys7XG5cbiAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xuICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgIGlmICgvXkBAL20udGVzdChwYXJhbSkgfHwgKC9eSW5kZXg6L20udGVzdChwYXJhbSkpKSB7XG4gICAgICByZXR1cm4gcGFyc2VQYXRjaChwYXJhbSlbMF07XG4gICAgfVxuXG4gICAgaWYgKCFiYXNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBhIGJhc2UgcmVmZXJlbmNlIG9yIHBhc3MgaW4gYSBwYXRjaCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3RydWN0dXJlZFBhdGNoKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBiYXNlLCBwYXJhbSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW07XG59XG5cbmZ1bmN0aW9uIGZpbGVOYW1lQ2hhbmdlZChwYXRjaCkge1xuICByZXR1cm4gcGF0Y2gubmV3RmlsZU5hbWUgJiYgcGF0Y2gubmV3RmlsZU5hbWUgIT09IHBhdGNoLm9sZEZpbGVOYW1lO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RGaWVsZChpbmRleCwgbWluZSwgdGhlaXJzKSB7XG4gIGlmIChtaW5lID09PSB0aGVpcnMpIHtcbiAgICByZXR1cm4gbWluZTtcbiAgfSBlbHNlIHtcbiAgICBpbmRleC5jb25mbGljdCA9IHRydWU7XG4gICAgcmV0dXJuIHttaW5lLCB0aGVpcnN9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGh1bmtCZWZvcmUodGVzdCwgY2hlY2spIHtcbiAgcmV0dXJuIHRlc3Qub2xkU3RhcnQgPCBjaGVjay5vbGRTdGFydFxuICAgICYmICh0ZXN0Lm9sZFN0YXJ0ICsgdGVzdC5vbGRMaW5lcykgPCBjaGVjay5vbGRTdGFydDtcbn1cblxuZnVuY3Rpb24gY2xvbmVIdW5rKGh1bmssIG9mZnNldCkge1xuICByZXR1cm4ge1xuICAgIG9sZFN0YXJ0OiBodW5rLm9sZFN0YXJ0LCBvbGRMaW5lczogaHVuay5vbGRMaW5lcyxcbiAgICBuZXdTdGFydDogaHVuay5uZXdTdGFydCArIG9mZnNldCwgbmV3TGluZXM6IGh1bmsubmV3TGluZXMsXG4gICAgbGluZXM6IGh1bmsubGluZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VMaW5lcyhodW5rLCBtaW5lT2Zmc2V0LCBtaW5lTGluZXMsIHRoZWlyT2Zmc2V0LCB0aGVpckxpbmVzKSB7XG4gIC8vIFRoaXMgd2lsbCBnZW5lcmFsbHkgcmVzdWx0IGluIGEgY29uZmxpY3RlZCBodW5rLCBidXQgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoZSBjb250ZXh0XG4gIC8vIGlzIHRoZSBvbmx5IG92ZXJsYXAgd2hlcmUgd2UgY2FuIHN1Y2Nlc3NmdWxseSBtZXJnZSB0aGUgY29udGVudCBoZXJlLlxuICBsZXQgbWluZSA9IHtvZmZzZXQ6IG1pbmVPZmZzZXQsIGxpbmVzOiBtaW5lTGluZXMsIGluZGV4OiAwfSxcbiAgICAgIHRoZWlyID0ge29mZnNldDogdGhlaXJPZmZzZXQsIGxpbmVzOiB0aGVpckxpbmVzLCBpbmRleDogMH07XG5cbiAgLy8gSGFuZGxlIGFueSBsZWFkaW5nIGNvbnRlbnRcbiAgaW5zZXJ0TGVhZGluZyhodW5rLCBtaW5lLCB0aGVpcik7XG4gIGluc2VydExlYWRpbmcoaHVuaywgdGhlaXIsIG1pbmUpO1xuXG4gIC8vIE5vdyBpbiB0aGUgb3ZlcmxhcCBjb250ZW50LiBTY2FuIHRocm91Z2ggYW5kIHNlbGVjdCB0aGUgYmVzdCBjaGFuZ2VzIGZyb20gZWFjaC5cbiAgd2hpbGUgKG1pbmUuaW5kZXggPCBtaW5lLmxpbmVzLmxlbmd0aCAmJiB0aGVpci5pbmRleCA8IHRoZWlyLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBtaW5lQ3VycmVudCA9IG1pbmUubGluZXNbbWluZS5pbmRleF0sXG4gICAgICAgIHRoZWlyQ3VycmVudCA9IHRoZWlyLmxpbmVzW3RoZWlyLmluZGV4XTtcblxuICAgIGlmICgobWluZUN1cnJlbnRbMF0gPT09ICctJyB8fCBtaW5lQ3VycmVudFswXSA9PT0gJysnKVxuICAgICAgICAmJiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgfHwgdGhlaXJDdXJyZW50WzBdID09PSAnKycpKSB7XG4gICAgICAvLyBCb3RoIG1vZGlmaWVkIC4uLlxuICAgICAgbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnKycgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIE1pbmUgaW5zZXJ0ZWRcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gY29sbGVjdENoYW5nZShtaW5lKSk7XG4gICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICcrJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBUaGVpcnMgaW5zZXJ0ZWRcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gY29sbGVjdENoYW5nZSh0aGVpcikpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICctJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gTWluZSByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBUaGVpciByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgcmVtb3ZhbChodW5rLCB0aGVpciwgbWluZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudCA9PT0gdGhlaXJDdXJyZW50KSB7XG4gICAgICAvLyBDb250ZXh0IGlkZW50aXR5XG4gICAgICBodW5rLmxpbmVzLnB1c2gobWluZUN1cnJlbnQpO1xuICAgICAgbWluZS5pbmRleCsrO1xuICAgICAgdGhlaXIuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29udGV4dCBtaXNtYXRjaFxuICAgICAgY29uZmxpY3QoaHVuaywgY29sbGVjdENoYW5nZShtaW5lKSwgY29sbGVjdENoYW5nZSh0aGVpcikpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vdyBwdXNoIGFueXRoaW5nIHRoYXQgbWF5IGJlIHJlbWFpbmluZ1xuICBpbnNlcnRUcmFpbGluZyhodW5rLCBtaW5lKTtcbiAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgdGhlaXIpO1xuXG4gIGNhbGNMaW5lQ291bnQoaHVuayk7XG59XG5cbmZ1bmN0aW9uIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcikge1xuICBsZXQgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UodGhlaXIpO1xuXG4gIGlmIChhbGxSZW1vdmVzKG15Q2hhbmdlcykgJiYgYWxsUmVtb3Zlcyh0aGVpckNoYW5nZXMpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciByZW1vdmUgY2hhbmdlcyB0aGF0IGFyZSBzdXBlcnNldHMgb2Ygb25lIGFub3RoZXJcbiAgICBpZiAoYXJyYXlTdGFydHNXaXRoKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKVxuICAgICAgICAmJiBza2lwUmVtb3ZlU3VwZXJzZXQodGhlaXIsIG15Q2hhbmdlcywgbXlDaGFuZ2VzLmxlbmd0aCAtIHRoZWlyQ2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIG15Q2hhbmdlcyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChhcnJheVN0YXJ0c1dpdGgodGhlaXJDaGFuZ2VzLCBteUNoYW5nZXMpXG4gICAgICAgICYmIHNraXBSZW1vdmVTdXBlcnNldChtaW5lLCB0aGVpckNoYW5nZXMsIHRoZWlyQ2hhbmdlcy5sZW5ndGggLSBteUNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiB0aGVpckNoYW5nZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChhcnJheUVxdWFsKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSkge1xuICAgIGh1bmsubGluZXMucHVzaCguLi4gbXlDaGFuZ2VzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25mbGljdChodW5rLCBteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIsIHN3YXApIHtcbiAgbGV0IG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q29udGV4dCh0aGVpciwgbXlDaGFuZ2VzKTtcbiAgaWYgKHRoZWlyQ2hhbmdlcy5tZXJnZWQpIHtcbiAgICBodW5rLmxpbmVzLnB1c2goLi4uIHRoZWlyQ2hhbmdlcy5tZXJnZWQpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZsaWN0KGh1bmssIHN3YXAgPyB0aGVpckNoYW5nZXMgOiBteUNoYW5nZXMsIHN3YXAgPyBteUNoYW5nZXMgOiB0aGVpckNoYW5nZXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZsaWN0KGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gIGh1bmsuY29uZmxpY3QgPSB0cnVlO1xuICBodW5rLmxpbmVzLnB1c2goe1xuICAgIGNvbmZsaWN0OiB0cnVlLFxuICAgIG1pbmU6IG1pbmUsXG4gICAgdGhlaXJzOiB0aGVpclxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0TGVhZGluZyhodW5rLCBpbnNlcnQsIHRoZWlyKSB7XG4gIHdoaWxlIChpbnNlcnQub2Zmc2V0IDwgdGhlaXIub2Zmc2V0ICYmIGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICAgIGluc2VydC5vZmZzZXQrKztcbiAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0VHJhaWxpbmcoaHVuaywgaW5zZXJ0KSB7XG4gIHdoaWxlIChpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0Q2hhbmdlKHN0YXRlKSB7XG4gIGxldCByZXQgPSBbXSxcbiAgICAgIG9wZXJhdGlvbiA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XVswXTtcbiAgd2hpbGUgKHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGxpbmUgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF07XG5cbiAgICAvLyBHcm91cCBhZGRpdGlvbnMgdGhhdCBhcmUgaW1tZWRpYXRlbHkgYWZ0ZXIgc3VidHJhY3Rpb25zIGFuZCB0cmVhdCB0aGVtIGFzIG9uZSBcImF0b21pY1wiIG1vZGlmeSBjaGFuZ2UuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gJy0nICYmIGxpbmVbMF0gPT09ICcrJykge1xuICAgICAgb3BlcmF0aW9uID0gJysnO1xuICAgIH1cblxuICAgIGlmIChvcGVyYXRpb24gPT09IGxpbmVbMF0pIHtcbiAgICAgIHJldC5wdXNoKGxpbmUpO1xuICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIGNvbGxlY3RDb250ZXh0KHN0YXRlLCBtYXRjaENoYW5nZXMpIHtcbiAgbGV0IGNoYW5nZXMgPSBbXSxcbiAgICAgIG1lcmdlZCA9IFtdLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICBjb250ZXh0Q2hhbmdlcyA9IGZhbHNlLFxuICAgICAgY29uZmxpY3RlZCA9IGZhbHNlO1xuICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGhcbiAgICAgICAgJiYgc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgY2hhbmdlID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdLFxuICAgICAgICBtYXRjaCA9IG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XTtcblxuICAgIC8vIE9uY2Ugd2UndmUgaGl0IG91ciBhZGQsIHRoZW4gd2UgYXJlIGRvbmVcbiAgICBpZiAobWF0Y2hbMF0gPT09ICcrJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29udGV4dENoYW5nZXMgPSBjb250ZXh0Q2hhbmdlcyB8fCBjaGFuZ2VbMF0gIT09ICcgJztcblxuICAgIG1lcmdlZC5wdXNoKG1hdGNoKTtcbiAgICBtYXRjaEluZGV4Kys7XG5cbiAgICAvLyBDb25zdW1lIGFueSBhZGRpdGlvbnMgaW4gdGhlIG90aGVyIGJsb2NrIGFzIGEgY29uZmxpY3QgdG8gYXR0ZW1wdFxuICAgIC8vIHRvIHB1bGwgaW4gdGhlIHJlbWFpbmluZyBjb250ZXh0IGFmdGVyIHRoaXNcbiAgICBpZiAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuXG4gICAgICB3aGlsZSAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgIGNoYW5nZSA9IHN0YXRlLmxpbmVzWysrc3RhdGUuaW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaC5zdWJzdHIoMSkgPT09IGNoYW5nZS5zdWJzdHIoMSkpIHtcbiAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF0gfHwgJycpWzBdID09PSAnKydcbiAgICAgICYmIGNvbnRleHRDaGFuZ2VzKSB7XG4gICAgY29uZmxpY3RlZCA9IHRydWU7XG4gIH1cblxuICBpZiAoY29uZmxpY3RlZCkge1xuICAgIHJldHVybiBjaGFuZ2VzO1xuICB9XG5cbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoKSB7XG4gICAgbWVyZ2VkLnB1c2gobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXgrK10pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtZXJnZWQsXG4gICAgY2hhbmdlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBhbGxSZW1vdmVzKGNoYW5nZXMpIHtcbiAgcmV0dXJuIGNoYW5nZXMucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGNoYW5nZSkge1xuICAgIHJldHVybiBwcmV2ICYmIGNoYW5nZVswXSA9PT0gJy0nO1xuICB9LCB0cnVlKTtcbn1cbmZ1bmN0aW9uIHNraXBSZW1vdmVTdXBlcnNldChzdGF0ZSwgcmVtb3ZlQ2hhbmdlcywgZGVsdGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWx0YTsgaSsrKSB7XG4gICAgbGV0IGNoYW5nZUNvbnRlbnQgPSByZW1vdmVDaGFuZ2VzW3JlbW92ZUNoYW5nZXMubGVuZ3RoIC0gZGVsdGEgKyBpXS5zdWJzdHIoMSk7XG4gICAgaWYgKHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4ICsgaV0gIT09ICcgJyArIGNoYW5nZUNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5pbmRleCArPSBkZWx0YTtcbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=
