var DomUtils = require("../..");

exports.name = "Get inner HTML";
exports.getElements = function(dom){
    return ' <script>text</script> <!-- comment --> <tag2> text </tag2>';
};
exports.getByFunction = function(dom){
    return DomUtils.getInnerHTML(DomUtils.getElementById("asdf", dom, true));
};
exports.expected = ' <script>text</script> <!-- comment --> <tag2> text </tag2>';
