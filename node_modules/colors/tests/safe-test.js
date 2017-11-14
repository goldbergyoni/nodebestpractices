var assert = require('assert'),
    colors = require('../safe');

var s = 'string';

function a(s, code) {
  return '\x1B[' + code.toString() + 'm' + s + '\x1B[39m';
}

function aE(s, color, code) {
  assert.equal(colors[color](s), a(s, code));
  assert.equal(colors.strip(s), s);
}

function h(s, color) {
  return '<span style="color:' + color + ';">' + s + '</span>';
}

var stylesColors = ['white', 'black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];
var stylesAll = stylesColors.concat(['bold', 'italic', 'underline', 'inverse', 'rainbow']);

colors.mode = 'console';
assert.equal(colors.bold(s), '\x1B[1m' + s + '\x1B[22m');
assert.equal(colors.italic(s), '\x1B[3m' + s + '\x1B[23m');
assert.equal(colors.underline(s), '\x1B[4m' + s + '\x1B[24m');
assert.equal(colors.strikethrough(s), '\x1B[9m' + s + '\x1B[29m');
assert.equal(colors.inverse(s), '\x1B[7m' + s + '\x1B[27m');

assert.ok(colors.rainbow);

aE(s, 'white', 37);
aE(s, 'grey', 90);
aE(s, 'black', 30);
aE(s, 'blue', 34);
aE(s, 'cyan', 36);
aE(s, 'green', 32);
aE(s, 'magenta', 35);
aE(s, 'red', 31);
aE(s, 'yellow', 33);

assert.equal(s, 'string');
colors.setTheme({error:'red'});

assert.equal(typeof(colors.red("astring")), 'string');
assert.equal(typeof(colors.error("astring")), 'string');