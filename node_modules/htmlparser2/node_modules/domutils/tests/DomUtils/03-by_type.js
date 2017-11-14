var DomUtils = require("../..");

exports.name = "Get elements by type";
exports.getElements = function(dom){
	return DomUtils.getElements({tag_type:"script"}, dom, true);
};
exports.getByFunction = function(dom){
	return DomUtils.getElementsByTagType("script", dom, true);
};
exports.expected = [];
for(var i = 0; i < 20; i++) exports.expected.push(
  {
    "type": "script",
    "name": "script",
    "attribs": {},
    "children": [
      {
        "data": "text",
        "type": "text"
      }
    ]
  }
);