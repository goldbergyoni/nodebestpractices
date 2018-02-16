var Xray = require('x-ray');
var x = Xray();
 
x('https://blog.ycombinator.com/', '.post', [{
  title: 'h1 a',
  link: '.article-title@href'
}])
  .paginate('.nav-previous a@href')
  .limit(3)
  .write('results.json')

xray('http://techcrunch.com', 'img.logo@src')(fn)