/* global document, casper */

'use strict';


casper.on("page.error", function(msg) {
    this.echo("Uncaught Page Error: " + msg, "ERROR");
    casper.exit(1);
});


casper.start('./tmp/index.html');

casper.then(function() {

    this.test.assertExists('button#button-complexity');
    this.test.assertExists('button#button-sloc');
    this.test.assertExists('button#button-lint');
    this.test.assertExists('button#button-bugs');
});


casper.then(function() {

    this.test.assertEvalEquals(function() {
        return document.querySelectorAll('.file-list li').length;
    }, 2, 'Has appropriate number list items in the file list');


    this.test.assertEvalEquals(function() {
        return document.querySelectorAll('a.file-link')[0].text;
    }, "a.js", 'a.js is first file in list');


    this.test.assertEvalEquals(function() {
        return document.querySelectorAll('a.file-link')[1].text;
    }, "b.js", 'b.js is second file in list');
});


// click button
casper.then(function() {
    this.click('#button-sloc');
});


// click button
casper.then(function() {

    this.waitForSelector('a.file-link', function() {

        this.test.assertEvalEquals(function() {
            return document.querySelectorAll('a.file-link')[0].text;
        }, "b.js", 'b.js is first file in list');

        this.test.assertEvalEquals(function() {
            return document.querySelectorAll('a.file-link')[1].text;
        }, "a.js", 'b.js is second file in list');

        this.test.done();
    });
});


casper.run(function() {
    casper.exit(0);
});
