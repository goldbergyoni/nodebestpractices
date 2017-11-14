var Writer = require(__dirname + '/../');

module.exports = function() {
  var writer = new Writer();
  writer.addInt32(-10000000000000);
  writer.addInt32(-1000);
  writer.addInt32(-1);
  writer.addInt32(0);
  writer.addInt32(1);
  writer.addInt32(1000);
  writer.addInt32(10000000000000);
};

if(!module.parent) {
  module.exports();
  console.log('benchmark ok');
}
