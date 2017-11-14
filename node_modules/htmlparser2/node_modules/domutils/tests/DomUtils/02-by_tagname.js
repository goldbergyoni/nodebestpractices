var DomUtils = require("../..");

exports.name = "Get elements by tagName";
exports.getElements = function(dom){
	return DomUtils.getElements({tag_name:"tag2"}, dom, true);
};
exports.getByFunction = function(dom){
	return DomUtils.getElementsByTagName("tag2", dom, true);
};
exports.expected = [];
for(var i = 0; i < 20; i++) exports.expected.push(
  {
    "type": "tag",
    "name": "tag2",
    "attribs": {},
    "children": [
      {
        "data": " text ",
        "type": "text"
      }
    ]
  }
);