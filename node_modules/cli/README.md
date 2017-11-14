**cli is a toolkit for rapidly building command line apps - it includes:**

- Full featured opts/args parser
- Plugin support for adding common options and switches
- Helper methods for working with input/output and spawning child processes
- Output colored/styled messages, [progress bars](https://github.com/chriso/cli/blob/master/examples/progress.js) or [spinners](https://github.com/chriso/cli/blob/master/examples/spinner.js)
- Command [auto-completion](https://github.com/chriso/cli/blob/master/examples/command.js) and [glob support](https://github.com/chriso/cli/blob/master/examples/glob.js)

Install using `npm install cli` or just bundle [cli.js](https://github.com/chriso/cli/raw/master/cli.js) with your app.

## Example apps

### sort.js

```javascript
#!/usr/bin/env node
require('cli').withStdinLines(function(lines, newline) {
    this.output(lines.sort().join(newline));
});
```

Try it out

```bash
$ ./sort.js < input.txt
```

Let's add support for an `-n` switch to use a numeric sort, and a `-r` switch to reverse output - only 5 extra lines of code (!)

```javascript
var cli = require('cli'), options = cli.parse();

cli.withStdinLines(function(lines, newline) {
    lines.sort(!options.n ? null : function(a, b) {
        return parseInt(a) > parseInt(b);
    });
    if (options.r) lines.reverse();
    this.output(lines.join(newline));
});
```

## Command Line Arguments Parser

cli takes an object as a map for the arguments you wish to parse.  
Each property/key in the object is the long version of the argument i.e. --file  
The array associated with it is the options to apply to that argument.  

### Example
```javascript
cli.parse({
	file: [ 'f', 'A file to process', 'file', temp.log ],          // -f, --file FILE   A file to process
	time: [ 't', 'An access time', 'time', false],                 // -t, --time TIME   An access time
	work: [ false, 'What kind of work to do', 'string', 'sleep' ]  //     --work STRING What kind of work to do
});
```
### Explanation of array options

1.	A short name, single letter i.e. -f, or false if no short name is supported for this option  
2.	A description of the option  
3.	The type of object the argument should map too.  
	Below is a list of the return types followed by a description and a list of  
	valid values you can use for this option to get desired type of Object back.
	- **as-is:** What you enter, is what you get
          - 'string', 1,  true
   - **int:** Is converted to an Integer wrapped in a Number Object
          - 'int', 'number', 'num',
          - 'time', 'seconds', 'secs', 'minutes', 'mins'
          - 'x', 'n'
   - **date:** Is converted to a Date Object
          - 'date', 'datetime', 'date_time'
	- **float:** Is converted to a Float wrapped in a Number Object
          - 'float', 'decimal'
	- **file:** Is converted to a String Object if it is a valid path
          - 'path', 'file', 'directory', 'dir'
	- **email:** Converted to a String Object if it is a valid email format
          - 'email'
	- **url:** Converted to a String Object if it is a valid URL format
          - 'url', 'uri', 'domain', 'host'
   - **ip:** Converted to a String Object if it is a valid IP Address format
          - 'ip'
   - **true:** Converted to true if argument is present on command line
          - 'bool', 'boolean', 'on'
	- **false:** Converted to false if argument is present on command line
          - 'false', 'off', false, 0
4.	A default value for this option if one is not given on the command line

## Helper methods

cli has methods that collect stdin (newline is auto-detected as \n or \r\n)

```javascript
cli.withStdin(callback);        //callback receives stdin as a string
cli.withStdinLines(callback);   //callback receives stdin split into an array of lines (lines, newline)
```

cli also has a lower level method for working with input line by line (see [./examples/cat.js](https://github.com/chriso/cli/blob/master/examples/cat.js) for an example).

```javascript
cli.withInput(file, function (line, newline, eof) {
    if (!eof) {
        this.output(line + newline);
    }
});
```
*Note: `file` can be omitted if you want to work with stdin*

```javascript
//cli.toType(object);         If a Built-in type, returns the name of the type as a lower cased String
cli.toType([]);               // 'array'
cli.toType(new Date());       // 'date'
cli.toType(1);                // 'integer'
cli.toType(1.1);              // 'float'
cli.toType(Math);             // 'math'
cli.toType(/a/);              // 'regex'
cli.toType(JSON);             // 'json'
```

To output a progress bar, call

```javascript
cli.progress(progress); //Where 0 <= progress <= 1
```

To spawn a child process, use

```javascript
cli.exec(cmd, callback); //callback receives the output of the process (split into lines)
```

cli also comes bundled with kof's [node-natives](https://github.com/kof/node-natives) (access with cli.native) and creationix' [stack](https://github.com/creationix/stack) (access with cli.createServer)

## Plugins

Plugins are a way of adding common opts and can be enabled using

```javascript
cli.enable(plugin1, [plugin2, ...]);  //To disable, use the equivalent disable() method
```

**help** - *enabled by default*

Adds `-h,--help` to output auto-generated usage information

**version**

Adds `-v,--version` to output version information for the app. cli will attempt to locate and parse a nearby *package.json*

To set your own app name and version, use `cli.setApp(app_name, version)`

**status**

Adds options to show/hide the stylized status messages that are output to the console when using one of these methods

```javascript
cli.debug(msg);  //Only shown when using --debug
cli.error(msg);
cli.fatal(msg);  //Exits the process after outputting msg
cli.info(msg);
cli.ok(msg);
```

`-k,--no-color` will omit ANSI color escapes from the output

**glob**  - *requires* `npm install glob`

Enables glob matching of arguments

**timeout**

Adds `-t,--timeout N` to exit the process after N seconds with an error

**catchall**

Adds `-c,--catch` to catch and output uncaughtExceptions and resume execution

*Note: Plugins are automatically disabled if an option or switch of the same name is already defined*

## LICENSE

(MIT license)

Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
