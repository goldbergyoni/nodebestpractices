/*istanbul ignore start*/'use strict';

exports.__esModule = true;
exports. /*istanbul ignore end*/applyPatch = applyPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/applyPatches = applyPatches;

var /*istanbul ignore start*/_parse = require('./parse') /*istanbul ignore end*/;

var /*istanbul ignore start*/_distanceIterator = require('../util/distance-iterator') /*istanbul ignore end*/;

/*istanbul ignore start*/var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*istanbul ignore end*/function applyPatch(source, uniDiff) {
  /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof uniDiff === 'string') {
    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
  }

  if (Array.isArray(uniDiff)) {
    if (uniDiff.length > 1) {
      throw new Error('applyPatch only works with a single input.');
    }

    uniDiff = uniDiff[0];
  }

  // Apply the diff to the input
  var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
      delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      hunks = uniDiff.hunks,
      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) /*istanbul ignore start*/{
    return (/*istanbul ignore end*/line === patchContent
    );
  },
      errorCount = 0,
      fuzzFactor = options.fuzzFactor || 0,
      minLine = 0,
      offset = 0,
      removeEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/,
      addEOFNL = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;

  /**
   * Checks if the hunk exactly fits on the provided location
   */
  function hunkFits(hunk, toPos) {
    for (var j = 0; j < hunk.lines.length; j++) {
      var line = hunk.lines[j],
          operation = line[0],
          content = line.substr(1);

      if (operation === ' ' || operation === '-') {
        // Context sanity check
        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
          errorCount++;

          if (errorCount > fuzzFactor) {
            return false;
          }
        }
        toPos++;
      }
    }

    return true;
  }

  // Search best fit offsets for each hunk based on the previous ones
  for (var i = 0; i < hunks.length; i++) {
    var hunk = hunks[i],
        maxLine = lines.length - hunk.oldLines,
        localOffset = 0,
        toPos = offset + hunk.oldStart - 1;

    var iterator = /*istanbul ignore start*/(0, _distanceIterator2['default']) /*istanbul ignore end*/(toPos, minLine, maxLine);

    for (; localOffset !== undefined; localOffset = iterator()) {
      if (hunkFits(hunk, toPos + localOffset)) {
        hunk.offset = offset += localOffset;
        break;
      }
    }

    if (localOffset === undefined) {
      return false;
    }

    // Set lower text limit to end of the current hunk, so next ones don't try
    // to fit over already patched text
    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
  }

  // Apply patch hunks
  var diffOffset = 0;
  for (var _i = 0; _i < hunks.length; _i++) {
    var _hunk = hunks[_i],
        _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
    diffOffset += _hunk.newLines - _hunk.oldLines;

    if (_toPos < 0) {
      // Creating a new file
      _toPos = 0;
    }

    for (var j = 0; j < _hunk.lines.length; j++) {
      var line = _hunk.lines[j],
          operation = line[0],
          content = line.substr(1),
          delimiter = _hunk.linedelimiters[j];

      if (operation === ' ') {
        _toPos++;
      } else if (operation === '-') {
        lines.splice(_toPos, 1);
        delimiters.splice(_toPos, 1);
        /* istanbul ignore else */
      } else if (operation === '+') {
        lines.splice(_toPos, 0, content);
        delimiters.splice(_toPos, 0, delimiter);
        _toPos++;
      } else if (operation === '\\') {
        var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
        if (previousOperation === '+') {
          removeEOFNL = true;
        } else if (previousOperation === '-') {
          addEOFNL = true;
        }
      }
    }
  }

  // Handle EOFNL insertion/removal
  if (removeEOFNL) {
    while (!lines[lines.length - 1]) {
      lines.pop();
      delimiters.pop();
    }
  } else if (addEOFNL) {
    lines.push('');
    delimiters.push('\n');
  }
  for (var _k = 0; _k < lines.length - 1; _k++) {
    lines[_k] = lines[_k] + delimiters[_k];
  }
  return lines.join('');
}

// Wrapper that supports multiple file patches via callbacks.
function applyPatches(uniDiff, options) {
  if (typeof uniDiff === 'string') {
    uniDiff = /*istanbul ignore start*/(0, _parse.parsePatch) /*istanbul ignore end*/(uniDiff);
  }

  var currentIndex = 0;
  function processIndex() {
    var index = uniDiff[currentIndex++];
    if (!index) {
      return options.complete();
    }

    options.loadFile(index, function (err, data) {
      if (err) {
        return options.complete(err);
      }

      var updatedContent = applyPatch(data, index, options);
      options.patched(index, updatedContent, function (err) {
        if (err) {
          return options.complete(err);
        }

        processIndex();
      });
    });
  }
  processIndex();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwiYXBwbHlQYXRjaGVzIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJFcnJvciIsImxpbmVzIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJodW5rcyIsImNvbXBhcmVMaW5lIiwibGluZU51bWJlciIsImxpbmUiLCJvcGVyYXRpb24iLCJwYXRjaENvbnRlbnQiLCJlcnJvckNvdW50IiwiZnV6ekZhY3RvciIsIm1pbkxpbmUiLCJvZmZzZXQiLCJyZW1vdmVFT0ZOTCIsImFkZEVPRk5MIiwiaHVua0ZpdHMiLCJodW5rIiwidG9Qb3MiLCJqIiwiY29udGVudCIsInN1YnN0ciIsImkiLCJtYXhMaW5lIiwib2xkTGluZXMiLCJsb2NhbE9mZnNldCIsIm9sZFN0YXJ0IiwiaXRlcmF0b3IiLCJ1bmRlZmluZWQiLCJkaWZmT2Zmc2V0IiwibmV3TGluZXMiLCJkZWxpbWl0ZXIiLCJsaW5lZGVsaW1pdGVycyIsInNwbGljZSIsInByZXZpb3VzT3BlcmF0aW9uIiwicG9wIiwicHVzaCIsIl9rIiwiam9pbiIsImN1cnJlbnRJbmRleCIsInByb2Nlc3NJbmRleCIsImluZGV4IiwiY29tcGxldGUiLCJsb2FkRmlsZSIsImVyciIsImRhdGEiLCJ1cGRhdGVkQ29udGVudCIsInBhdGNoZWQiXSwibWFwcGluZ3MiOiI7OztnQ0FHZ0JBLFUsR0FBQUEsVTt5REFvSUFDLFksR0FBQUEsWTs7QUF2SWhCOztBQUNBOzs7Ozs7dUJBRU8sU0FBU0QsVUFBVCxDQUFvQkUsTUFBcEIsRUFBNEJDLE9BQTVCLEVBQW1EO0FBQUEsc0RBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDeEQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CQSxjQUFVLHdFQUFXQSxPQUFYLENBQVY7QUFDRDs7QUFFRCxNQUFJRSxNQUFNQyxP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QUFQO0FBQ0Q7O0FBRUQsVUFBSUUsaUJBQWlCdkQsV0FBV3NELElBQVgsRUFBaUJKLEtBQWpCLEVBQXdCOUMsT0FBeEIsQ0FBckI7QUFDQUEsY0FBUW9ELE9BQVIsQ0FBZ0JOLEtBQWhCLEVBQXVCSyxjQUF2QixFQUF1QyxVQUFTRixHQUFULEVBQWM7QUFDbkQsWUFBSUEsR0FBSixFQUFTO0FBQ1AsaUJBQU9qRCxRQUFRK0MsUUFBUixDQUFpQkUsR0FBakIsQ0FBUDtBQUNEOztBQUVESjtBQUNELE9BTkQ7QUFPRCxLQWJEO0FBY0Q7QUFDREE7QUFDRCIsImZpbGUiOiJhcHBseS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgZGlzdGFuY2VJdGVyYXRvciBmcm9tICcuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cblxuICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIG1heExpbmUgPSBsaW5lcy5sZW5ndGggLSBodW5rLm9sZExpbmVzLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG5cbiAgICBsZXQgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgbG93ZXIgdGV4dCBsaW1pdCB0byBlbmQgb2YgdGhlIGN1cnJlbnQgaHVuaywgc28gbmV4dCBvbmVzIGRvbid0IHRyeVxuICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG4gICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICAvLyBBcHBseSBwYXRjaCBodW5rc1xuICBsZXQgZGlmZk9mZnNldCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaHVuayA9IGh1bmtzW2ldLFxuICAgICAgICB0b1BvcyA9IGh1bmsub2xkU3RhcnQgKyBodW5rLm9mZnNldCArIGRpZmZPZmZzZXQgLSAxO1xuICAgIGRpZmZPZmZzZXQgKz0gaHVuay5uZXdMaW5lcyAtIGh1bmsub2xkTGluZXM7XG5cbiAgICBpZiAodG9Qb3MgPCAwKSB7IC8vIENyZWF0aW5nIGEgbmV3IGZpbGVcbiAgICAgIHRvUG9zID0gMDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lWzBdLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLnN1YnN0cigxKSxcbiAgICAgICAgICBkZWxpbWl0ZXIgPSBodW5rLmxpbmVkZWxpbWl0ZXJzW2pdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgdG9Qb3MrKztcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAxKTtcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UodG9Qb3MsIDEpO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKHRvUG9zLCAwLCBjb250ZW50KTtcbiAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UodG9Qb3MsIDAsIGRlbGltaXRlcik7XG4gICAgICAgIHRvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGxldCBwcmV2aW91c09wZXJhdGlvbiA9IGh1bmsubGluZXNbaiAtIDFdID8gaHVuay5saW5lc1tqIC0gMV1bMF0gOiBudWxsO1xuICAgICAgICBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIHJlbW92ZUVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgYWRkRU9GTkwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIEVPRk5MIGluc2VydGlvbi9yZW1vdmFsXG4gIGlmIChyZW1vdmVFT0ZOTCkge1xuICAgIHdoaWxlICghbGluZXNbbGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxpbmVzLnBvcCgpO1xuICAgICAgZGVsaW1pdGVycy5wb3AoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWRkRU9GTkwpIHtcbiAgICBsaW5lcy5wdXNoKCcnKTtcbiAgICBkZWxpbWl0ZXJzLnB1c2goJ1xcbicpO1xuICB9XG4gIGZvciAobGV0IF9rID0gMDsgX2sgPCBsaW5lcy5sZW5ndGggLSAxOyBfaysrKSB7XG4gICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XG4gIH1cbiAgcmV0dXJuIGxpbmVzLmpvaW4oJycpO1xufVxuXG4vLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB1bmlEaWZmW2N1cnJlbnRJbmRleCsrXTtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXBkYXRlZENvbnRlbnQgPSBhcHBseVBhdGNoKGRhdGEsIGluZGV4LCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMucGF0Y2hlZChpbmRleCwgdXBkYXRlZENvbnRlbnQsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2Nlc3NJbmRleCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHJvY2Vzc0luZGV4KCk7XG59XG4iXX0=
