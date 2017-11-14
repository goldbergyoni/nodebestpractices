/*global document, casper */

'use strict';


casper.on("page.error", function(msg) {
  this.echo("Uncaught Page Error: " + msg, "ERROR");
  casper.exit(1);
});

casper.start('./tmp/index.html', function() {
  this.test.assertSelectorHasText('.jumbotron h1', 'test report');
  this.test.assertEvalEquals(function() {
    return document.querySelectorAll('.file-list li').length;
  }, 4, 'Has appropriate number list items in the file list');
  this.test.assertEval(function() {
    return document.querySelectorAll('.chart').length === document.querySelectorAll('.chart svg').length;
  }, 'Every summary chart has an svg drawn');
  this.test.assertEval(function() {
    return document.querySelectorAll('.plato-file-chart').length === document.querySelectorAll('.plato-file-chart svg').length;
  }, 'Every file chart has an svg drawn');
});

casper.then(function () {
  var chart = this.getElementInfo('#chart_sloc svg');
  this.mouse.click(chart.x + 1, chart.y + 1);
});

casper.waitForSelectorTextChange('.jumbotron h1', function() {
  this.test.comment('Text of .jumbotron h1 has changed.');
  this.test.assertSelectorHasText('.jumbotron h1', 'a.js');
});

casper.run(function() {
  // echo results in some pretty fashion
  casper.exit(0);
});
