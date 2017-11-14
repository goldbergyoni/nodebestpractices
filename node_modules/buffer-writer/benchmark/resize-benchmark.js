var Writer = require(__dirname + '/../');

var string = "";
for(var i = 0; i < 10; i++) {
  string += 'Once upon a time long ago there lived a little programming language named JavaScript';
}

module.exports = function() {
  var writer = new Writer(4);
  writer.addCString(string);
  writer.addCString(string);
  writer.addCString(string);
  writer.addCString(string);
  writer.addCString(string);
  writer.addCString(string);
  writer.addCString(string);
  writer.addCString(string);
};

if(!module.parent) {
  module.exports();
  console.log('benchmark ok');
}
