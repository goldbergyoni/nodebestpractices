/*
 * examples/basic.js: basic example of using node-getopt
 *
 * This example parses options for an example command that takes options "a" and
 * "b" having no arguments, option "o" (with long alias "output") which takes a
 * mandatory value, and then one mandatory argument.  Example valid invocations:
 *
 *	cmd foo
 *      cmd -a foo
 *      cmd -ab foo
 *      cmd -a -o bar foo
 *      cmd -o bar foo
 *      cmd --output bar foo
 *      cmd --output=bar foo
 *      cmd --output= foo
 *      cmd -- -a		(note: "-a" option is NOT set in this case)
 *
 * Invalid invocations:
 *
 *      cmd		missing mandatory argument
 *      cmd -o		option "-o" requires an argument
 *      cmd -q		unknown option "-q"
 */

var mod_assert = require('assert');
var mod_getopt = require('..');

function main()
{
	var parser, option;

	parser = new mod_getopt.BasicParser('abo:(output)', process.argv);

	while ((option = parser.getopt()) !== undefined) {
		switch (option.option) {
		case 'a':
			console.log('option "a" is set');
			break;

		case 'b':
			console.log('option "b" is set');
			break;

		case 'o':
			console.error('option "o" has value "%s"',
			    option.optarg);
			break;

		default:
			/* error message already emitted by getopt */
			mod_assert.equal('?', option.option);
			break;
		}
	}

	if (parser.optind() >= process.argv.length)
		usage('missing required argument: "input"');

	console.log('input = %s', process.argv[parser.optind()]);
}

function usage(message)
{
	if (message)
		console.error('error: %s', message);

	console.error('usage: %s %s [-ab] [-o file] input',
	    process.argv[0], process.argv[1]);
	process.exit(2);
}

main();
