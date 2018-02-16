var google = require('google')
 
google.resultsPerPage = 25
var nextCounter = 0
 
google('node.js best practices', function (err, res){
  if (err) console.error(err)
 
  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    console.log(link.title + ' - ' + link.href)
  }
})