var Writer = require(__dirname + '/../');

module.exports = function() {
  var writer = new Writer();
  writer.addInt16(-100000000);
  writer.addInt16(-1000);
  writer.addInt16(-1);
  writer.addInt16(0);
  writer.addInt16(1);
  writer.addInt16(1000);
  writer.addInt16(1000000000);
  writer.addInt16(-100000000);
  writer.addInt16(-100000000);
  writer.addInt16(-1000);
  writer.addInt16(-1);
  writer.addInt16(0);
  writer.addInt16(1);
  writer.addInt16(1000);
  writer.addInt16(1000000000);
  writer.addInt16(-1000);
  writer.addInt16(-1);
  writer.addInt16(0);
  writer.addInt16(1);
  writer.addInt16(1000);
  writer.addInt16(1000000000);
};

if(!module.parent) {
  module.exports();
  console.log('benchmark ok');
}
