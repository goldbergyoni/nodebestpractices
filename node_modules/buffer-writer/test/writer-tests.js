var Writer = require(__dirname + "/../");

var assert = require('assert');
var util = require('util');

assert.equalBuffers = function(actual, expected) {
  var spit = function(actual, expected) {
    console.log("");
    console.log("actual " + util.inspect(actual));
    console.log("expect " + util.inspect(expected));
    console.log("");
  };
  if(actual.length != expected.length) {
    spit(actual, expected);
    assert.equal(actual.length, expected.length);
  }
  for(var i = 0; i < actual.length; i++) {
    if(actual[i] != expected[i]) {
      spit(actual, expected);
    }
    assert.equal(actual[i],expected[i]);
  }
};

suite('adding int32', function() {
  var testAddingInt32 = function(int, expectedBuffer) {
    test('writes ' + int, function() {
      var subject = new Writer();
      var result = subject.addInt32(int).join();
      assert.equalBuffers(result, expectedBuffer);
    });
  };

  testAddingInt32(0, [0, 0, 0, 0]);
  testAddingInt32(1, [0, 0, 0, 1]);
  testAddingInt32(256, [0, 0, 1, 0]);
  test('writes largest int32', function() {
    //todo need to find largest int32 when I have internet access
    return false;
  });

  test('writing multiple int32s', function() {
    var subject = new Writer();
    var result = subject.addInt32(1).addInt32(10).addInt32(0).join();
    assert.equalBuffers(result, [0, 0, 0, 1, 0, 0, 0, 0x0a, 0, 0, 0, 0]);
  });

  suite('having to resize the buffer', function() {
    test('after resize correct result returned', function() {
      var subject = new Writer(10);
      subject.addInt32(1).addInt32(1).addInt32(1);
      assert.equalBuffers(subject.join(), [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]);
    });
  });
});

suite('int16', function() {
  test('writes 0', function() {
    var subject = new Writer();
    var result = subject.addInt16(0).join();
    assert.equalBuffers(result, [0,0]);
  });

  test('writes 400', function() {
    var subject = new Writer();
    var result = subject.addInt16(400).join();
    assert.equalBuffers(result, [1, 0x90]);
  });

  test('writes many', function() {
    var subject = new Writer();
    var result = subject.addInt16(0).addInt16(1).addInt16(2).join();
    assert.equalBuffers(result, [0, 0, 0, 1, 0, 2]);
  });

  test('resizes if internal buffer fills up', function() {
    var subject = new Writer(3);
    var result = subject.addInt16(2).addInt16(3).join();
    assert.equalBuffers(result, [0, 2, 0, 3]);
  });

});

suite('cString', function() {
  test('writes empty cstring', function() {
    var subject = new Writer();
    var result = subject.addCString().join();
    assert.equalBuffers(result, [0]);
  });
  
  test('writes two empty cstrings', function() {
    var subject = new Writer();
    var result = subject.addCString("").addCString("").join();
    assert.equalBuffers(result, [0, 0]);
  });


  test('writes non-empty cstring', function() {
    var subject = new Writer();
    var result = subject.addCString("!!!").join();
    assert.equalBuffers(result, [33, 33, 33, 0]);
  });

  test('resizes if reached end', function() {
    var subject = new Writer(3);
    var result = subject.addCString("!!!").join();
    assert.equalBuffers(result, [33, 33, 33, 0]);
  });

  test('writes multiple cstrings', function() {
    var subject = new Writer();
    var result = subject.addCString("!").addCString("!").join();
    assert.equalBuffers(result, [33, 0, 33, 0]);
  });

});

test('writes char', function() {
  var subject = new Writer(2);
  var result = subject.addChar('a').addChar('b').addChar('c').join();
  assert.equalBuffers(result, [0x61, 0x62, 0x63]);
});

test('gets correct byte length', function() {
  var subject = new Writer(5);
  assert.equal(subject.getByteLength(), 0);
  subject.addInt32(0);
  assert.equal(subject.getByteLength(), 4);
  subject.addCString("!");
  assert.equal(subject.getByteLength(), 6);
});

test('can add arbitrary buffer to the end', function() {
  var subject = new Writer(4);
  subject.addCString("!!!")
  var result = subject.add(Buffer("@@@")).join();
  assert.equalBuffers(result, [33, 33, 33, 0, 0x40, 0x40, 0x40]);
});

suite('can write normal string', function() {
  var subject = new Writer(4);
  var result = subject.addString("!").join();
  assert.equalBuffers(result, [33]);
  test('can write cString too', function() {
    var result = subject.addCString("!").join();
    assert.equalBuffers(result, [33, 33, 0]);
  });
  test('can resize', function() {
    var result = subject.addString("!!").join();
    assert.equalBuffers(result, [33, 33, 0, 33, 33]);
  });
});


suite('clearing', function() {
  var subject = new Writer();
  subject.addCString("@!!#!#");
  subject.addInt32(10401);
  test('clears', function() {
    subject.clear();
    assert.equalBuffers(subject.join(), []);
  });
  test('writing more', function() {
    var joinedResult = subject.addCString("!").addInt32(9).addInt16(2).join();
    assert.equalBuffers(joinedResult, [33, 0, 0, 0, 0, 9, 0, 2]);
  });
  test('returns result', function() {
    var flushedResult = subject.flush();
    assert.equalBuffers(flushedResult, [33, 0, 0, 0, 0, 9, 0, 2])
  });
  test('clears the writer', function() {
    assert.equalBuffers(subject.join(), [])
    assert.equalBuffers(subject.flush(), [])
  });
});

test("resizing to much larger", function() {
  var subject = new Writer(2);
  var string = "!!!!!!!!";
  var result = subject.addCString(string).flush();
  assert.equalBuffers(result, [33, 33, 33, 33, 33, 33, 33, 33, 0]);
});

suite("flush", function() {
  test('added as a hex code to a full writer', function() {
    var subject = new Writer(2);
    var result = subject.addCString("!").flush(0x50);
    assert.equalBuffers(result, [0x50, 0, 0, 0, 6, 33, 0]);
  });

  test('added as a hex code to a non-full writer', function() {
    var subject = new Writer(10).addCString("!");
    var joinedResult = subject.join(0x50);
    var result = subject.flush(0x50);
    assert.equalBuffers(result, [0x50, 0, 0, 0, 6, 33, 0]);
  });

  test('added as a hex code to a buffer which requires resizing', function() {
    var result = new Writer(2).addCString("!!!!!!!!").flush(0x50);
    assert.equalBuffers(result, [0x50, 0, 0, 0, 0x0D, 33, 33, 33, 33, 33, 33, 33, 33, 0]);
  });
});

suite("header", function() {
  test('adding two packets with headers', function() {
    var subject = new Writer(10).addCString("!");
    subject.addHeader(0x50);
    subject.addCString("!!");
    subject.addHeader(0x40);
    subject.addCString("!");
    var result = subject.flush(0x10);
    assert.equalBuffers(result, [0x50, 0, 0, 0, 6, 33, 0, 0x40, 0, 0, 0, 7, 33, 33, 0, 0x10, 0, 0, 0, 6, 33, 0 ]);
  });
});




