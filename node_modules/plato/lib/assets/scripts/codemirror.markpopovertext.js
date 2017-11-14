/*global CodeMirror:false, $:false*/

(function(){
  "use strict";

  function makeid(num){
    num = num || 5;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < num; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  CodeMirror.prototype.markPopoverText = function(lineObj, regex, className, gutter, message){
    var re = new RegExp('(' + regex + ')', 'g');
    var cursor = this.getSearchCursor(re, lineObj);

    var match, internalClass = 'plato-mark-' + makeid(10);
    while (match = cursor.findNext()) {
      if (cursor.to().line !== lineObj.line) break;
      this.markText(
        { line : lineObj.line, ch : cursor.from().ch },
        { line : lineObj.line, ch : cursor.to().ch },
        {
          className   : 'plato-mark ' + internalClass + ' ' + (className || ''),
          startStyle  : 'plato-mark-start',
          endStyle    : 'plato-mark-end'
        }
      );
    }

    if (gutter) {
      this.setGutterMarker(lineObj.line, gutter.gutterId, gutter.el);
    }

    // return a function to bind hover events, to be run after
    // the codemirror operations are executed
    return function(){
      var markStart = $('.plato-mark-start.' + internalClass);
      var markSpans = $('.' + internalClass);

      if (message.type === 'popover') {

        var triggered = false;
        markSpans.add(gutter.el)
          .on('mouseenter touchstart',function(e){
            e.preventDefault();
            triggered = true;
            markSpans.addClass('active');
            markStart.popover('show');
          })
          .on('mouseleave touchend',function(e){
            e.preventDefault();
            markSpans.removeClass('active');
            triggered = false;
            setTimeout(function(){
              if (!triggered) markStart.popover('hide');
            },200);
          });

        markStart.popover({
          trigger : 'manual',
          content : message.content,
          html : true,
          title : message.title,
          placement : 'top'
        });
      } else if (message.type === 'block') {
        this.addLineWidget(lineObj.line, $(message.content)[0]);
      }
    };
  };

})();
