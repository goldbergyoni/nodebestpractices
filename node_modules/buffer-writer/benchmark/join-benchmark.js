var Writer = require(__dirname + '/../');

var writer = new Writer();
writer.addCString('hello');
writer.addCString('something else, really');
writer.addInt32(38013);
writer.addCString('and that\'s all she wrote, folks\n...\n...not really');

module.exports = function() {
  writer.join(0x50);
};

if(!module.parent) {
  module.exports();
  console.log('benchmark ok');
}
