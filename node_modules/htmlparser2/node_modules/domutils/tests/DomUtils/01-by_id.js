var DomUtils = require("../..");

exports.name = "Get element by id";
exports.getElements = function(dom){
	return DomUtils.getElements({id:"asdf"}, dom, true, 1)[0];
};
exports.getByFunction = function(dom){
	return DomUtils.getElementById("asdf", dom, true);
};
exports.expected = {
  "type": "tag",
  "name": "tag1",
  "attribs": {
    "id": "asdf"
  },
  "children": [
    {
      "data": " ",
      "type": "text"
    },
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
    },
    {
      "data": " ",
      "type": "text"
    },
    {
      "data": " comment ",
      "type": "comment"
    },
    {
      "data": " ",
      "type": "text"
    },
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
  ]
};