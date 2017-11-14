/*
 * Tests internal state of the parser.
 */
var mod_path = require('path');

var mod_sys = require('sys');
var mod_getopt = require('..');
var mod_assert = require('assert');

var test_cases = [ {
	optstr: '',
	silent: false,
	options: {},
	aliases: {},
}, {
	optstr: ':',
	silent: true,
	options: {},
	aliases: {},
}, {
	optstr: ':l',
	silent: true,
	options: { l: false },
	aliases: {},
}, {
	optstr: ':l:',
	silent: true,
	options: { l: true },
	aliases: {},
}, {
	optstr: ':las',
	silent: true,
	options: { l: false, a: false, s: false },
	aliases: {},
}, {
	optstr: ':l:a:s:',
	silent: true,
	options: { l: true, a: true, s: true },
	aliases: {},
}, {
	optstr: ':l(long)',
	silent: true,
	options: { l: false },
	aliases: { long: 'l' },
}, {
	optstr: ':l:(long)',
	silent: true,
	options: { l: true },
	aliases: { long: 'l' },
}, {
	optstr: 'l:(long)(longer)',
	silent: false,
	options: { l: true },
	aliases: { long: 'l', longer: 'l' },
}, {
	optstr: ':la:r(recurse)(recur)f:(file)(filename)q',
	silent: true,
	options: { l: false, a: true, r: false, f: true, q: false },
	aliases: { recurse: 'r', recur: 'r', file: 'f', filename: 'f' }
} ];

var parser, ii;
for (ii = 0; ii < test_cases.length; ii++) {
	console.log('test case %s: "%s"', ii + 1, test_cases[ii].optstr);
	parser = new mod_getopt.BasicParser(test_cases[ii].optstr, []);
	mod_assert.ok(test_cases[ii].silent === parser.gop_silent);
	mod_assert.deepEqual(test_cases[ii].options,
	    parser.gop_options);
	mod_assert.deepEqual(test_cases[ii].aliases,
	    parser.gop_aliases);
}

console.log('%s test cases passed', test_cases.length);
