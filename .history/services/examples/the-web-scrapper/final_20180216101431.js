var Xray = require('x-ray');
var x = Xray();
 
x('https://google.com/search?q=node.js', '.post', [{
  title: 'h1 a',
  link: '.article-title@href'
}])
  .paginate('.nav-previous a@href')
  .limit(3)
  .write('results.json')

xray('http://techcrunch.com', 'img.logo@src')(fn)