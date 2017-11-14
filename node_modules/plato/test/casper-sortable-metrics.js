/* global document */

'use strict';

var url = './tmp/index.html';

var casper = require('casper').create({
    direct: true,
    exitOnError: true,
    verbose: false,
    logLevel: 'info'
});

casper.on("page.error", function(msg) {
    this.echo("Uncaught Page Error: " + msg, "ERROR");
    casper.exit(1);
});

casper.on("error", function(msg) {
    this.log("Uncaught Error: " + msg, 'error');
});


casper.test.begin('Metrics are sorted by name', 4, function suite() {

    casper.start(url);

    casper.then(function() {

        casper.waitForSelector('span.js-file-chart', function() {

            casper.test.assertEvalEquals(function() {
                return document.querySelectorAll('.js-file-chart label')[0].innerText;
            }, "complexity", '"complexity" is first entry in "metrics" list');

            casper.test.assertEvalEquals(function() {
                return document.querySelectorAll('.js-file-chart label')[1].innerText;
            }, "sloc", '"sloc" is second entry in "metrics" list');

        });
    });


    // click button to sort by "sloc"
    casper.then(function() {
        casper.click('#button-sloc');
    });


    casper.then(function() {

        casper.waitForSelector('span.js-file-chart', function() {

            casper.test.assertEvalEquals(function() {
                return document.querySelectorAll('.js-file-chart label')[0].innerText;
            }, "sloc", '"sloc" is first entry in "metrics" list');

            casper.test.assertEvalEquals(function() {
                return document.querySelectorAll('.js-file-chart label')[1].innerText;
            }, "complexity", '"complexity" is second entry in "metrics" list');

            casper.test.done();
        });
    });

});


casper.run(function() {
    casper.exit();
});
