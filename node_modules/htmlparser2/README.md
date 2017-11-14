#htmlparser2 [![NPM version](https://badge.fury.io/js/htmlparser2.png)](https://npmjs.org/package/htmlparser2) [![Build Status](https://secure.travis-ci.org/fb55/htmlparser2.png)](http://travis-ci.org/fb55/htmlparser2) [![Dependency Status](https://david-dm.org/fb55/htmlparser2.png)](https://david-dm.org/fb55/htmlparser2)

A forgiving HTML/XML/RSS parser written in JS for NodeJS. The parser can handle streams (chunked data) and supports custom handlers for writing custom DOMs/output.

##Installing
	npm install htmlparser2
	
A live demo of htmlparser2 is available at http://demos.forbeslindesay.co.uk/htmlparser2/

##Usage

```javascript
var htmlparser = require("htmlparser2");
var parser = new htmlparser.Parser({
	onopentag: function(name, attribs){
		if(name === "script" && attribs.type === "text/javascript"){
			console.log("JS! Hooray!");
		}
	},
	ontext: function(text){
		console.log("-->", text);
	},
	onclosetag: function(tagname){
		if(tagname === "script"){
			console.log("That's it?!");
		}
	}
});
parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>");
parser.end();
```

Output (simplified):

```javascript
--> Xyz 
JS! Hooray!
--> var foo = '<<bar>>';
That's it?!
```

Read more about the parser in the [wiki](https://github.com/fb55/htmlparser2/wiki/Parser-options).

##Get a DOM
The `DomHandler` (known as `DefaultHandler` in the original `htmlparser` module) produces a DOM (document object model) that can be manipulated using the [`DomUtils`](https://github.com/fb55/DomUtils) helper.

The `DomHandler`, while still bundled with this module, was moved to its [own module](https://github.com/fb55/domhandler). Have a look at it for further information.

##Parsing RSS/RDF/Atom Feeds

```javascript
new htmlparser.FeedHandler(function(<error> error, <object> feed){
    ...
});
```

##Performance

After having some artificial benchmarks for some time, __@AndreasMadsen__ published his [`htmlparser-benchmark`](https://github.com/AndreasMadsen/htmlparser-benchmark), which benchmarks HTML parses based on real-world websites.

At the time of writing, the latest versions of all supported parsers show the following performance characteristics on [Travis CI](https://travis-ci.org/AndreasMadsen/htmlparser-benchmark/builds/10805007) (please note that Travis doesn't guarantee equal conditions for all tests):

```
gumbo-parser   : 34.9208 ms/file ± 21.4238
html-parser    : 24.8224 ms/file ± 15.8703
html5          : 419.597 ms/file ± 264.265
htmlparser     : 60.0722 ms/file ± 384.844
htmlparser2-dom: 12.0749 ms/file ± 6.49474
htmlparser2    : 7.49130 ms/file ± 5.74368
hubbub         : 30.4980 ms/file ± 16.4682
libxmljs       : 14.1338 ms/file ± 18.6541
parse5         : 22.0439 ms/file ± 15.3743
sax            : 49.6513 ms/file ± 26.6032
```

##How is this different from [node-htmlparser](https://github.com/tautologistics/node-htmlparser)?
This is a fork of the `htmlparser` module. The main difference is that this is intended to be used only with node (it runs on other platforms using [browserify](https://github.com/substack/node-browserify)). `htmlparser2` was rewritten multiple times and, while it maintains an API that's compatible with `htmlparser` in most cases, the projects don't share any code anymore.

The parser now provides a callback interface close to [sax.js](https://github.com/isaacs/sax-js) (originally targeted at [readabilitySAX](https://github.com/fb55/readabilitysax)). As a result, old handlers won't work anymore.

The `DefaultHandler` and the `RssHandler` were renamed to clarify their purpose (to `DomHandler` and `FeedHandler`). The old names are still available when requiring `htmlparser2`, so your code should work as expected.
