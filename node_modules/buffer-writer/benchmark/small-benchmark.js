var Writer = require(__dirname + '/../');

module.exports = function() {
  var writer = new Writer();
  writer.addInt32(10);
  writer.addInt16(5);
  writer.addCString('test');
  writer.flush('X');
};

if(!module.parent) {
  module.exports();
  console.log('benchmark ok');
}
