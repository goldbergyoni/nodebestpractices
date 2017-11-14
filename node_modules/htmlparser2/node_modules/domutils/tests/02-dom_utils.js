//generate a dom
var handler = new (require("domhandler"))();

(new (require("htmlparser2").Parser)(handler)).parseComplete(
	Array(21).join("<?xml><tag1 id='asdf'> <script>text</script> <!-- comment --> <tag2> text </tag1>")
);

var dom = handler.dom;

exports.dir = "/DomUtils/";

exports.test = function(test, cb){
	cb(null, test.getElements(dom));
	cb(null, test.getByFunction(dom));
};