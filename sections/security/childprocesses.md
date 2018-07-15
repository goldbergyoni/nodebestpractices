# Be cautious when working with child processes

### One Paragraph Explainer

To be added

### Code example: Dangers of unsanitized child process executions

``` javascript
const { exec } = require('child_process');

...

// as an example, take a script that takes two arguments, one of them is unsanitized user input
exec('"/path/to/test file/test.sh" arg1 ' + input);

// -> imagine what could happen if the user simply enters something like '&& rm -rf --no-preserve-root /'
// you'd be in for an unwanted surprise
```

### Additional resources

From the Node.js child process [documentation](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback):
> Never pass unsanitized user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution.