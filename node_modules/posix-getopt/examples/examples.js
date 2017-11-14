var mod_getopt = require('..');
var parser, option;

console.error('Example 1: simple short options');
parser = new mod_getopt.BasicParser('la',
    ['node', 'script', '-l', '-a', 'stuff']);
while ((option = parser.getopt()) !== undefined && !option.error)
	console.error(option);

console.error('Example 2: invalid option specified');
parser = new mod_getopt.BasicParser('la',
    ['node', 'script', '-l', '-b', 'stuff']);
while ((option = parser.getopt()) !== undefined && !option.error)
	console.error(option);
console.error(option);

console.error('Example 3: long options');
parser = new mod_getopt.BasicParser('lar(recurse)',
    ['node', 'script', '-l', '--recurse', 'stuff']);
while ((option = parser.getopt()) !== undefined && !option.error)
	console.error(option);

console.error('Example 4: options with arguments');
parser = new mod_getopt.BasicParser('f:lad:',
    ['node', 'script', '-l', '-f', 'filename', '-dtype', 'stuff']);
while ((option = parser.getopt()) !== undefined && !option.error)
	console.error(option);

console.error('Example 5: options with missing arguments');
parser = new mod_getopt.BasicParser('f:la',
    ['node', 'script', '-l', '-a', '-f']);
while ((option = parser.getopt()) !== undefined && !option.error)
	console.error(option);
console.error(option);

console.error('Example 6: options specified multiple times');
parser = new mod_getopt.BasicParser('la',
    ['node', 'script', '-l', '-a', '-l']);
while ((option = parser.getopt()) !== undefined && !option.error)
	console.error(option);
