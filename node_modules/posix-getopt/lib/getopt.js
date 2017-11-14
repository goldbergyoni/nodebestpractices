/*
 * getopt.js: node.js implementation of POSIX getopt() (and then some)
 *
 * Copyright 2011 David Pacheco. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var ASSERT = require('assert').ok;

function goError(msg)
{
	return (new Error('getopt: ' + msg));
}

/*
 * The BasicParser is our primary interface to the outside world.  The
 * documentation for this object and its public methods is contained in
 * the included README.md.
 */
function goBasicParser(optstring, argv, optind)
{
	var ii;

	ASSERT(optstring || optstring === '', 'optstring is required');
	ASSERT(optstring.constructor === String, 'optstring must be a string');
	ASSERT(argv, 'argv is required');
	ASSERT(argv.constructor === Array, 'argv must be an array');

	this.gop_argv = new Array(argv.length);
	this.gop_options = {};
	this.gop_aliases = {};
	this.gop_optind = optind !== undefined ? optind : 2;
	this.gop_subind = 0;

	for (ii = 0; ii < argv.length; ii++) {
		ASSERT(argv[ii].constructor === String,
		    'argv must be string array');
		this.gop_argv[ii] = argv[ii];
	}

	this.parseOptstr(optstring);
}

exports.BasicParser = goBasicParser;

/*
 * Parse the option string and update the following fields:
 *
 *	gop_silent	Whether to log errors to stderr.  Silent mode is
 *			indicated by a leading ':' in the option string.
 *
 *	gop_options	Maps valid single-letter-options to booleans indicating
 *			whether each option is required.
 *
 *	gop_aliases	Maps valid long options to the corresponding
 *			single-letter short option.
 */
goBasicParser.prototype.parseOptstr = function (optstr)
{
	var chr, cp, alias, arg, ii;

	ii = 0;
	if (optstr.length > 0 && optstr[0] == ':') {
		this.gop_silent = true;
		ii++;
	} else {
		this.gop_silent = false;
	}

	while (ii < optstr.length) {
		chr = optstr[ii];
		arg = false;

		if (!/^[\w\d\u1000-\u1100]$/.test(chr))
			throw (goError('invalid optstring: only alphanumeric ' +
			    'characters and unicode characters between ' +
			    '\\u1000-\\u1100 may be used as options: ' + chr));

		if (ii + 1 < optstr.length && optstr[ii + 1] == ':') {
			arg = true;
			ii++;
		}

		this.gop_options[chr] = arg;

		while (ii + 1 < optstr.length && optstr[ii + 1] == '(') {
			ii++;
			cp = optstr.indexOf(')', ii + 1);
			if (cp == -1)
				throw (goError('invalid optstring: missing ' +
				    '")" to match "(" at char ' + ii));

			alias = optstr.substring(ii + 1, cp);
			this.gop_aliases[alias] = chr;
			ii = cp;
		}

		ii++;
	}
};

goBasicParser.prototype.optind = function ()
{
	return (this.gop_optind);
};

/*
 * For documentation on what getopt() does, see README.md.  The following
 * implementation invariants are maintained by getopt() and its helper methods:
 *
 *	this.gop_optind		Refers to the element of gop_argv that contains
 *				the next argument to be processed.  This may
 *				exceed gop_argv, in which case the end of input
 *				has been reached.
 *
 *	this.gop_subind		Refers to the character inside
 *				this.gop_options[this.gop_optind] which begins
 *				the next option to be processed.  This may never
 *				exceed the length of gop_argv[gop_optind], so
 *				when incrementing this value we must always
 *				check if we should instead increment optind and
 *				reset subind to 0.
 *
 * That is, when any of these functions is entered, the above indices' values
 * are as described above.  getopt() itself and getoptArgument() may both be
 * called at the end of the input, so they check whether optind exceeds
 * argv.length.  getoptShort() and getoptLong() are called only when the indices
 * already point to a valid short or long option, respectively.
 *
 * getopt() processes the next option as follows:
 *
 *	o If gop_optind > gop_argv.length, then we already parsed all arguments.
 *
 *	o If gop_subind == 0, then we're looking at the start of an argument:
 *
 *	    o Check for special cases like '-', '--', and non-option arguments.
 *	      If present, update the indices and return the appropriate value.
 *
 *	    o Check for a long-form option (beginning with '--').  If present,
 *	      delegate to getoptLong() and return the result.
 *
 *	    o Otherwise, advance subind past the argument's leading '-' and
 *	      continue as though gop_subind != 0 (since that's now the case).
 *
 *	o Delegate to getoptShort() and return the result.
 */
goBasicParser.prototype.getopt = function ()
{
	if (this.gop_optind >= this.gop_argv.length)
		/* end of input */
		return (undefined);

	var arg = this.gop_argv[this.gop_optind];

	if (this.gop_subind === 0) {
		if (arg == '-' || arg === '' || arg[0] != '-')
			return (undefined);

		if (arg == '--') {
			this.gop_optind++;
			this.gop_subind = 0;
			return (undefined);
		}

		if (arg[1] == '-')
			return (this.getoptLong());

		this.gop_subind++;
		ASSERT(this.gop_subind < arg.length);
	}

	return (this.getoptShort());
};

/*
 * Implements getopt() for the case where optind/subind point to a short option.
 */
goBasicParser.prototype.getoptShort = function ()
{
	var arg, chr;

	ASSERT(this.gop_optind < this.gop_argv.length);
	arg = this.gop_argv[this.gop_optind];
	ASSERT(this.gop_subind < arg.length);
	chr = arg[this.gop_subind];

	if (++this.gop_subind >= arg.length) {
		this.gop_optind++;
		this.gop_subind = 0;
	}

	if (!(chr in this.gop_options))
		return (this.errInvalidOption(chr));

	if (!this.gop_options[chr])
		return ({ option: chr });

	return (this.getoptArgument(chr));
};

/*
 * Implements getopt() for the case where optind/subind point to a long option.
 */
goBasicParser.prototype.getoptLong = function ()
{
	var arg, alias, chr, eq;

	ASSERT(this.gop_subind === 0);
	ASSERT(this.gop_optind < this.gop_argv.length);
	arg = this.gop_argv[this.gop_optind];
	ASSERT(arg.length > 2 && arg[0] == '-' && arg[1] == '-');

	eq = arg.indexOf('=');
	alias = arg.substring(2, eq == -1 ? arg.length : eq);
	if (!(alias in this.gop_aliases))
		return (this.errInvalidOption(alias));

	chr = this.gop_aliases[alias];
	ASSERT(chr in this.gop_options);

	if (!this.gop_options[chr]) {
		if (eq != -1)
			return (this.errExtraArg(alias));

		this.gop_optind++; /* eat this argument */
		return ({ option: chr });
	}

	/*
	 * Advance optind/subind for the argument value and retrieve it.
	 */
	if (eq == -1)
		this.gop_optind++;
	else
		this.gop_subind = eq + 1;

	return (this.getoptArgument(chr));
};

/*
 * For the given option letter 'chr' that takes an argument, assumes that
 * optind/subind point to the argument (or denote the end of input) and return
 * the appropriate getopt() return value for this option and argument (or return
 * the appropriate error).
 */
goBasicParser.prototype.getoptArgument = function (chr)
{
	var arg;

	if (this.gop_optind >= this.gop_argv.length)
		return (this.errMissingArg(chr));

	arg = this.gop_argv[this.gop_optind].substring(this.gop_subind);
	this.gop_optind++;
	this.gop_subind = 0;
	return ({ option: chr, optarg: arg });
};

goBasicParser.prototype.errMissingArg = function (chr)
{
	if (this.gop_silent)
		return ({ option: ':', optopt: chr });

	process.stderr.write('option requires an argument -- ' + chr + '\n');
	return ({ option: '?', optopt: chr, error: true });
};

goBasicParser.prototype.errInvalidOption = function (chr)
{
	if (!this.gop_silent)
		process.stderr.write('illegal option -- ' + chr + '\n');

	return ({ option: '?', optopt: chr, error: true });
};

/*
 * This error is not specified by POSIX, but neither is the notion of specifying
 * long option arguments using "=" in the same argv-argument, but it's common
 * practice and pretty convenient.
 */
goBasicParser.prototype.errExtraArg = function (chr)
{
	if (!this.gop_silent)
		process.stderr.write('option expects no argument -- ' +
		    chr + '\n');

	return ({ option: '?', optopt: chr, error: true });
};
