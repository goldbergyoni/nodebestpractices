# Be cautious when working with child processes

### One Paragraph Explainer

As great as child processes are, they should be used with caution. Passing in user input must be sanitized, if not avoided at all.
The dangers of unsanitized input executing system-level logic are unlimited, reaching from remote code execution to the exposure of
sensitive system data and even data loss. A check list of preparations could look like this

- avoid user input in every case, otherwise validate and sanitize it
- limit the privileges of the parent and child processes using user/group identities
- run your process inside of an isolated environment to prevent unwanted side-effects if the other preparations fail

### Code example: Dangers of unsanitized child process executions

```javascript
const { exec } = require('child_process');

...

// as an example, take a script that takes two arguments, one of them is unsanitized user input
exec('"/path/to/test file/someScript.sh" --someOption ' + input);

// -> imagine what could happen if the user simply enters something like '&& rm -rf --no-preserve-root /'
// you'd be in for an unwanted surprise
```

### Additional resources

From the Node.js child process [documentation](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback):

> Never pass unsanitized user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution.
