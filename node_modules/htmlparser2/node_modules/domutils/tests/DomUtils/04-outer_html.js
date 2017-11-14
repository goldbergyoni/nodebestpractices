var DomUtils = require("../..");

exports.name = "Get outer HTML";
exports.getElements = function(dom){
    return '<tag1 id="asdf"> <script>text</script> <!-- comment --> <tag2> text </tag2></tag1>';
};
exports.getByFunction = function(dom){
    return DomUtils.getOuterHTML(DomUtils.getElementById("asdf", dom, true));
};
exports.expected = '<tag1 id="asdf"> <script>text</script> <!-- comment --> <tag2> text </tag2></tag1>';
