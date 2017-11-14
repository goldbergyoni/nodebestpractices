/*
 * Tests getopt() itself.
 */
var mod_getopt = require('..');
var mod_assert = require('assert');

var test_cases = [ {
	optstr: '',
	argv: [],
	result: []
}, {
	optstr: ':',
	argv: [],
	result: []
}, {
	optstr: ':l',
	argv: [],
	result: []
}, {
	optstr: ':l:',
	argv: [],
	result: []
}, {
	optstr: ':las',
	argv: [],
	result: []
}, {
	optstr: ':l:a:s:',
	argv: [],
	result: []
}, {
	optstr: ':l(long)',
	argv: [],
	result: []
}, {
	optstr: ':l:(long)',
	argv: ['cmd', 'script', '-l', 'arg1', '--long=q', 'b', '--long', 'foo'],
	result: [
	    { option: 'l', optarg: 'arg1' },
	    { option: 'l', optarg: 'q' }
	]
}, {
	optstr: 'l:(long)(longer)',
	argv: [],
	result: []
}, {
	optstr: ':la:r(recurse)(recur)f:(file)(filename)q',
	argv: [],
	result: []
}, {
	optstr: '\u1000(help)\u1001(version)',
	argv: ['cmd', 'script', '--help' ],
	result: [
	   { option: '\u1000' },
	]
}, {
	optstr: '\u1000(help)\u1001(version)',
	argv: ['cmd', 'script', '--version' ],
	result: [
	   { option: '\u1001' },
	]
}, {
	optstr: '\u1000:(parallel)',
	argv: ['cmd', 'script', '--parallel=100' ],
	result: [
	   { option: '\u1000', optarg: 100 },
	]
}, {
	optstr: 'h',
	argv: ['-h'],
	result: [
	   { option: 'h' },
	],
        optind: 0
}, {
	optstr: 'hv',
	argv: ['foo', '-h', '-v' ],
	result: [
	   { option: 'h' },
	   { option: 'v' },
	],
        optind: 1
}];

var parser, ii, arg, result;
for (ii = 0; ii < test_cases.length; ii++) {
	console.log('test case %s: "%s" with argv = "%s"', ii + 1,
	    test_cases[ii].optstr, test_cases[ii].argv);
	parser = new mod_getopt.BasicParser(test_cases[ii].optstr,
	    test_cases[ii].argv, test_cases[ii].optind);
	console.log(parser.gop_tokens);

	result = [];
	while ((arg = parser.getopt()) !== undefined)
		result.push(arg);

	mod_assert.deepEqual(test_cases[ii].result, result);
}

console.log('%s test cases passed', test_cases.length);
