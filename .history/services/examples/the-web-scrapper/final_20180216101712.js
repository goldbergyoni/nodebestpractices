var Xray = require('x-ray');
var x = Xray();
 
x('https://google.com/search?q=node.js', {
  links: 'a@href'
})(())

xray('http://techcrunch.com', 'img.logo@src')(fn)