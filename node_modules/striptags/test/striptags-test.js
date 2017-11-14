'use strict';

var assert = require('assert'),
    striptags = require('../');

/* global describe, it */
describe('striptags', function() {
    it('should not modify plain text', function() {
        var text = 'lorem ipsum < a>';

        assert.equal(striptags(text), text);
    });

    it('should remove simple HTML tags', function() {
        var html = '<a href="">lorem <strong>ipsum</strong></a>',
            text = 'lorem ipsum';

        assert.equal(striptags(html), text);
    });

    it('should leave HTML tags if specified', function() {
        var html = '<strong>lorem ipsum</strong>',
            allowedTags = '<strong>';

        assert.equal(striptags(html, allowedTags), html);
    });

    it('should leave attributes when allowing HTML', function() {
        var html = '<a href="https://example.com">lorem ipsum</a>',
            allowedTags = '<a>';

        assert.equal(striptags(html, allowedTags), html);
    });

    it('should leave nested HTML tags if specified', function() {
        var html = '<div>lorem <strong>ipsum</strong></div>',
            strippedHtml = 'lorem <strong>ipsum</strong>',
            allowedTags = '<strong>';

        assert.equal(striptags(html, allowedTags), strippedHtml);
    });

    it('should leave outer HTML tags if specified', function() {
        var html = '<div>lorem <strong>ipsum</strong></div>',
            strippedHtml = '<div>lorem ipsum</div>',
            allowedTags = '<div>';

        assert.equal(striptags(html, allowedTags), strippedHtml);
    });

    it('should remove DOCTYPE declaration', function() {
        var html = '<!DOCTYPE html> lorem ipsum',
            text = ' lorem ipsum';

        assert.equal(striptags(html), text);
    });

    it('should remove comments', function() {
        var html = '<!-- lorem ipsum --> dolor sit amet',
            text = ' dolor sit amet';

        assert.equal(striptags(html), text);
    });

    it('should strip <> within quotes', function() {
        var html = '<a href="<script>">lorem ipsum</a>',
            strippedHtml = '<a href="script">lorem ipsum</a>',
            allowedTags = '<a>';

        assert.equal(striptags(html, allowedTags), strippedHtml);
    });

    it('should strip extra < within tags', function() {
        var html = '<div<>>lorem ipsum</div>',
            strippedHtml = '<div>lorem ipsum</div>',
            allowedTags = '<div>';

        assert.equal(striptags(html, allowedTags), strippedHtml);
    });

    it('should strip tags within comments', function() {
        var html = '<!-- <strong>lorem ipsum</strong> --> dolor sit',
            text = ' dolor sit';

        assert.equal(striptags(html), text);
    });

    it('should strip comment-like tags', function() {
        var html = '<! lorem ipsum> dolor sit',
            text = ' dolor sit';

        assert.equal(striptags(html), text);
    });

    it('should leave normal exclamation points alone', function() {
        var text = 'lorem ipsum! dolor sit amet';

        assert.equal(striptags(text), text);
    });

    it('should allow an array parameter for allowable tags', function() {
        var html = '<strong>lorem <em>ipsum</em></strong>',
            allowedTags = ['strong', 'em'];

        assert.equal(striptags(html, allowedTags), html);
    });

    it('should strip tags when an empty array is provided', function() {
        var html = '<article>lorem <a href="#">ipsum</a></article>',
            allowedTags = [],
            text = 'lorem ipsum';

        assert.equal(striptags(html, allowedTags), text);
    });

    it('should not fail with nested quotes', function() {
        var html = '<article attr="foo \'bar\'">lorem</article> ipsum',
            allowedTags = [],
            text = 'lorem ipsum';

        assert.equal(striptags(html, allowedTags), text);
    });

    it('should strip the tag\'s properties and attributes', function() {
        var html = '<a href="http://google.com" title="foo" data-id="0">Click here</a>',
            allowedTags = [],
            text = 'Click here';

        assert.equal(striptags(html, allowedTags), text);
    });

    it('should replace with the tagReplacement parameter', function() {
        var html = 'Line One<br>Line Two',
            allowedTags = [],
            tagReplacement = '\n',
            text = 'Line One\nLine Two';

        assert.equal(striptags(html, allowedTags, tagReplacement), text);
    });
});
