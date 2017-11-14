#DOMHandler [![Build Status](https://secure.travis-ci.org/fb55/DomHandler.png)](http://travis-ci.org/fb55/DomHandler)

The DOM handler (formally known as DefaultHandler) creates a tree containing all nodes of a page. The tree may be manipulated using the DOMUtils library.

##Usage
```javascript
var handler = new DomHandler([ <func> callback(err, dom), ] [ <obj> options ]);
// var parser = new Parser(handler[, options]);
```

##Example
```javascript
var htmlparser = require("htmlparser2");
var rawHtml = "Xyz <script language= javascript>var foo = '<<bar>>';< /  script><!--<!-- Waah! -- -->";
var handler = new htmlparser.DomHandler(function (error, dom) {
    if (error)
    	[...do something for errors...]
    else
    	[...parsing done, do something...]
        console.log(dom);
});
var parser = new htmlparser.Parser(handler);
parser.write(rawHtml);
parser.done();
```

Output:

```javascript
[{
    data: 'Xyz ',
    type: 'text'
}, {
    type: 'script',
    name: 'script',
    attribs: {
    	language: 'javascript'
    },
    children: [{
    	data: 'var foo = \'<bar>\';<',
    	type: 'text'
    }]
}, {
    data: '<!-- Waah! -- ',
    type: 'comment'
}]
```

##Option: ignoreWhitespace
Indicates whether the DOM should exclude text nodes that consists solely of whitespace. The default value is "false". 

The following HTML will be used:

```html
<font>
	<br>this is the text
<font>
```

###Example: true

```javascript
[{
    type: 'tag',
    name: 'font',
    children: [{
    	type: 'tag',
    	name: 'br'
    }, {
    	data: 'this is the text\n',
    	type: 'text'
    }, {
    	type: 'tag',
    	name: 'font'
    }]
}]
```

###Example: false

```javascript
[{
	type: 'tag',
    name: 'font',
    children: [{
    	data: '\n\t',
    	type: 'text'
    }, {
    	type: 'tag',
    	name: 'br'
    }, {
    	data: 'this is the text\n',
    	type: 'text'
    }, {
    	type: 'tag',
    	name: 'font'
    }]
}]
```