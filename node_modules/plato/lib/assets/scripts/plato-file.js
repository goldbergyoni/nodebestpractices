/*global $:false, _:false, Morris:false, CodeMirror:false, __report:false, __history:false */
/*jshint browser:true*/

$(function(){
  "use strict";

  // bootstrap popover
  $('[rel=popover]').popover();

  _.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };

  function focusFragment() {
    $('.plato-mark').removeClass('focus');
    var markId = window.location.hash.substr(1);
    if (markId) $('.' + markId).addClass('focus');
    return focusFragment;
  }

  window.onhashchange = focusFragment();

  var srcEl = document.getElementById('file-source');

  var options = {
    lineNumbers : true,
    gutters     : ['plato-gutter-jshint','plato-gutter-complexity'],
    readOnly    : 'nocursor'
  };

  var cm = CodeMirror.fromTextArea(srcEl, options);

  var byComplexity = [], bySloc = [];

  var popoverTemplate = _.template($('#complexity-popover-template').text());
  var gutterIcon = $('<a><i class="plato-gutter-icon icon-cog"></i></a>');

  var popovers = cm.operation(function(){
    var queuedPopovers = [];
    __report.complexity.methods.forEach(function(fn,i){
      byComplexity.push({
        label : fn.name,
        value : fn.cyclomatic
      });
      bySloc.push({
        label : fn.name,
        value : fn.sloc.physical,
        formatter: function (x) { return x + " lines"; }
      });

      var name = fn.name === '<anonymous>' ? 'function\\s*\\([^)]*\\)' : fn.name;
      var line = fn.lineStart - 1;
      var className = 'plato-mark-fn-' + i;
      var gutter = {
        gutterId : 'plato-gutter-complexity',
        el : gutterIcon.clone().attr('name',className)[0]
      };
      var popover = {
        type : 'popover',
        title : fn.name === '<anonymous>' ? '&lt;anonymous&gt;' : 'function ' + fn.name + '',
        content : popoverTemplate(fn)
      };
      queuedPopovers.push(cm.markPopoverText({line : line, ch:0}, name, className, gutter, popover));
    });
    return queuedPopovers;
  });

  popovers.forEach(function(fn){fn();});

  var scrollToLine = function(i) {
    var origScroll = [window.pageXOffset,window.pageYOffset];
    window.location.hash = '#plato-mark-fn-' + i;
    window.scrollTo(origScroll[0],origScroll[1]);
    var line = __report.complexity.methods[i].lineStart;
    var coords = cm.charCoords({line : line, ch : 0});
    $('body,html').animate({scrollTop : coords.top -50},250);
  };

  // yield to the browser
  setTimeout(function(){
    drawFunctionCharts([
      { element: 'fn-by-complexity', data: byComplexity },
      { element: 'fn-by-sloc', data: bySloc }
    ]);
    drawHistoricalCharts(__history);
  },0);

  cm.operation(function(){
    addLintMessages(__report);
  });


  function drawFunctionCharts(charts) {
    charts.forEach(function(chart){
      Morris.Donut(chart).on('click',scrollToLine);
    });
  }

  function drawHistoricalCharts(history) {
    $('.historical.chart').empty();
    var data = _.map(history,function(record){
      var date = new Date(record.date);
      return {
        date : date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
        maintainability : parseFloat(record.maintainability).toFixed(2),
        sloc : record.sloc
      };
    }).slice(-20);
    Morris.Line({
      element: 'chart_historical_sloc',
      data: data,
      xkey: 'date',
      ykeys: ['sloc'],
      labels: ['Lines of Code'],
      parseTime : false
    });
    Morris.Line({
      element: 'chart_historical_maint',
      data: data,
      xkey: 'date',
      ykeys: ['maintainability'],
      labels: ['Maintainability'],
      ymax: 100,
      parseTime : false
    });
  }

  function addLintMessages(report) {
    var lines = {};
    report.jshint.messages.forEach(function (message) {
      var text = 'Column: ' + message.column + ' "' + message.message + '"';
      if (_.isArray(message.line)) {
        message.line.forEach(function(line){
          if (!lines[line]) lines[line] = '';
          lines[line] += '<div class="plato-jshint-message text-'+message.severity+'">' + text + '</div>';
        });
      } else {
        if (!lines[message.line]) lines[message.line] = '';
        lines[message.line] += '<div class="plato-jshint-message text-'+message.severity+'">' + text + '</div>';
      }
    });
    var marker = document.createElement('a');
    marker.innerHTML = '<i class="plato-gutter-icon icon-eye-open"></i>';
    Object.keys(lines).forEach(function(line){
      var lineWidget = document.createElement('div');
      lineWidget.innerHTML = lines[line];
      cm.setGutterMarker(line - 1, 'plato-gutter-jshint', marker.cloneNode(true));
      cm.addLineWidget(line - 1, lineWidget);
    });
  }
});

