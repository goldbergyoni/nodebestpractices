# striptags [![Build Status](https://travis-ci.org/ericnorris/striptags.svg)](https://travis-ci.org/ericnorris/striptags)
An implementation of PHP's [strip_tags](http://www.php.net/manual/en/function.strip-tags.php) in Node.js.

## Features
- Fast
- Zero dependencies
- 100% test code coverage
- No unsafe regular expressions!

## Installing
```
npm install striptags
```

## Usage
```javascript
striptags(html, allowedTags, tagReplacement);
```

### Example
```javascript
var striptags = require('striptags');

var html =
    '<a href="https://example.com">' +
        'lorem ipsum <strong>dolor</strong> <em>sit</em> amet' +
    '</a>';

striptags(html);
striptags(html, '<a><strong>');
striptags(html, ['a']);
striptags(html, [], '\n');
```

Outputs:
```
'lorem ipsum dolor sit amet'
```

```
'<a href="https://example.com">lorem ipsum <strong>dolor</strong> sit amet</a>'
```

```
'<a href="https://example.com">lorem ipsum dolor sit amet</a>'
```

```

lorem ipsum
dolor
 sit amet
```


## Tests
You can run tests (powered by [mocha](http://mochajs.org/)) locally via:
```
npm test
```

Generate test coverage (powered by [blanket.js](http://blanketjs.org/)) via :
```
npm run test-coverage
```

## Differences between PHP strip_tags and striptags
In this version, not much! This now closely resembles a 'port' from PHP 5.5's internal implementation of strip_tags, [php_strip_tags_ex](http://lxr.php.net/xref/PHP_5_5/ext/standard/string.c#php_strip_tags_ex).

One major difference is that this JS version does not strip PHP-style tags; it seemed out of place in a node.js project. Let me know if this is important enough to consider including.

## Doesn't use regular expressions
striptags does not use any regular expressions for stripping HTML tags ([these](src/striptags.js#L7-L8) are used for detecting whitespace and parsing the allowedTags parameter, not finding HTML).

Regular expressions are not capable of preventing all possible scripting attacks (see [this](http://stackoverflow.com/a/535022)). Here is a [great StackOverflow answer](http://stackoverflow.com/a/5793453) regarding how strip_tags (**when used without specifying allowableTags**) is not vulnerable to scripting attacks.
