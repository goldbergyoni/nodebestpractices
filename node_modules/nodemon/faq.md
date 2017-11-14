# FAQ

This is being added to as common issues occur on the [issues](http://github.com/remy/nodemon/issues), and where appropriate the answers will be added here.

This is a working document, and if it makes sense, I'll take pull requests to help make it better.

## nodemon doesn't work with my REPL

Create an nodemon.json file with the setting:

```js
{
  "restartable": false
}
```

This will leave the STDIN to your application rather than listening for the `rs` command to restart.

# My script arguments are being taken by nodemon

Use the `--` switch to tell nodemon to ignore all arguments after this point. So to pass `-L` to your script instead of nodemon, use:

```
$ nodemon app.js -- -L -opt2 -opt3
```

nodemon will ignore all script arguments after `--` and pass them to your script.

# Can't install nodemon: permission issue

You may need to install nodemon using `sudo` (which isn't recommended, but I understand it's unavoidable in some environemnts). If the install fails with this appearing in the npm error log, then you need the following workaround.

```
gyp WARN EACCES user "root" does not have permission to access the dev dir "<some-local-dir>"
```

Try to re-install adding `--unsafe-perm` to the arguments:

```
sudo npm install -g nodemon --unsafe-perm
```

Ref [#713](https://github.com/remy/nodemon/issues/713)

# Help! My changes aren't being detected!

nodemon (from 1.4.2 onwards) uses [Chokidar](https://www.npmjs.com/package/chokidar) as its underlying watch system.

If you find your files aren't being monitored, either nodemon isn't restarting, or it reports that zero files are being watched, then you may need the polling mode.

To enable polling use the the legacy flag either via the terminal:

```shell
$ nodemon --legacy-watch
$ nodemon -L # short alias
```

Or via the `nodemon.json`:

```json
{
  "legacyWatch": true
}
```

## nodemon tries to run two scripts

If you see nodemon trying to run two scripts, like:

```
9 Dec 23:52:58 - [nodemon] starting `node ./app.js fixtures/sigint.js`
```

This is because the main script argument (`fixtures/sigint.js` in this case) wasn't found, and a `package.json`'s main file *was* found. ie. to solve, double check the path to your script is correct.

## What has precedence, ignore or watch?

Everything under the ignore rule has the final word. So if you ignore the `node_modules` directory, but watch `node_modules/*.js`, then all changed files will be ignored, because any changed .js file in the `node_modules` are ignored.

However, there are defaults in the ignore rules that your rules will be merged with, and not override. To override the ignore rules see [overriding the underlying default ignore rules](#overriding-the-underlying-default-ignore-rules).

## Overriding the underlying default ignore rules

The way the ignore rules work is that your rules are merged with the `ignoreRoot` rules, which contain `['.git', 'node_modules', ...]`. So if you ignore `public`, the ignore rule results in `['.git', 'node_modules', ..., 'public']`.

Say you did want to watch the `node_modules` directory. You have to override the `ignoreRoot`. If you wanted this on a per project basis, add the config to you local `nodemon.json`. If you want it for all projects, add it to `$HOME/nodemon.json`:

```json
{
  "ignoreRoot": [".git"]
}
```

Now when ignoring `public`, the ignore rule results in `['.git', 'public']`, and nodemon will restart on `node_modules` changes.

## nodemon doesn't work with fedora

Fedora is looking for `nodejs` rather than `node` which is the binary that nodemon kicks off.

The solution is a simple workaround, Linux 101:

```bash
sudo ln -s /usr/bin/nodejs /usr/local/bin/node
```

Fedora and Ubuntu pakage node as nodejs, because node.dpkg is

> Description-en: Amateur Packet Radio Node program
 The node program accepts TCP/IP and packet radio network connections and
 presents users with an interface that allows them to make gateway connections
 to remote hosts using a variety of amateur radio protocols.
They make the binary is nodejs, rather than node. So long as you're not using that Packet Radio Node Program mentioned above the workaround will work.

Thank you [@EvanCarroll](https://github.com/remy/nodemon/issues/68#issuecomment-13672509)

## Using nodemon with forever

If you're using nodemon with [forever](https://github.com/foreverjs/forever) (perhaps in a production environment), you can combine the two together. This way if the script crashes, forever restarts the script, and if there are file changes, nodemon restarts your script. For more detail, see [issue 30](https://github.com/remy/nodemon/issues/30).

To achieve this you need to add the following on the call to `forever`:

* Use forever's `-c nodemon` option to tell forever to run `nodemon` instead of `node`.
* Include the nodemon `--exitcrash` flag to ensure nodemon exits if the script crashes (or exits unexpectedly).
* Tell forever to use `SIGTERM` instead of `SIGKILL` when requesting nodemon to stop. This ensures that nodemon can stop the watched node process cleanly.
* Optionally add the `--uid` parameter, adding a unique name for your process. In the example, the uid is set to `foo`.

```bash
forever start --uid foo --killSignal=SIGTERM -c nodemon --exitcrash server.js
```

To test this, you can kill the server.js process and forever will restart it. If you `touch server.js` nodemon will restart it.

To stop the process monitored by forever and nodemon, simply call the following, using the `uid` we assigned above (`foo`):

```bash
forever stop foo
```

This will stop both nodemon and the node process it was monitoring.

Note that I *would not* recommend using nodemon in a production environment - but that's because I wouldn't want it restart without my explicit instruction.

## What does "verbose" give me?

The `--verbose` (or `-V`) puts nodemon in verbose mode which adds some detail to starting and restarting.

Additional restart information:

- Which nodemon configs are loaded (local and global if found)
- Which ignore rules are being applied
- Which file extensions are being watch
- The process ID of your application (the `child pid`)

For example:

```text
14 Apr 15:24:58 - [nodemon] v1.0.17
14 Apr 15:24:58 - [nodemon] reading config /Users/remy/Sites/jsbin-private/nodemon.json
14 Apr 15:24:58 - [nodemon] to restart at any time, enter `rs`
14 Apr 15:24:58 - [nodemon] ignoring: /Users/remy/Sites/jsbin-private/.git/**/* node_modules/**/node_modules
14 Apr 15:24:58 - [nodemon] watching: /Users/remy/Sites/jsbin/views/**/* /Users/remy/Sites/jsbin/lib/**/* ../json/*.json config.dev.json
14 Apr 15:24:58 - [nodemon] watching extensions: json,js,html
14 Apr 15:24:58 - [nodemon] starting `node run.js`
14 Apr 15:24:58 - [nodemon] child pid: 9292
```

When nodemon detects a change, the following addition information is shown:

- Which file(s) triggered the check
- Which (if any) rules the file matched to cause a subsequent restart
- How many rules were matched and out of those rules, how many cause a restart
- A list of all the files that *successfully* caused a restart

For example, on `lib/app.js` being changed:

```text
14 Apr 15:25:56 - [nodemon] files triggering change check: ../jsbin/lib/app.js
14 Apr 15:25:56 - [nodemon] matched rule: **/Users/remy/Sites/jsbin/lib/**/*
14 Apr 15:25:56 - [nodemon] changes after filters (before/after): 1/1
14 Apr 15:25:56 - [nodemon] restarting due to changes...
14 Apr 15:25:56 - [nodemon] ../jsbin/lib/app.js

14 Apr 15:25:56 - [nodemon] starting `node run.js`
14 Apr 15:25:56 - [nodemon] child pid: 9556
```

## My .nodemonignore is being ignored

The new `nodemon.json` superceeds the `.nodemonignore` file, so if you have both, the `.nodemonignore` is not used at all.

Note that if you have a `nodemon.json` in your `$HOME` path, then this will also supersede the old ignore file.

## nodemon does nothing

On Ubuntu globally installed node applications have been found to have no output when they're run. This *seems* to be an issue with node not being correctly installed (possibly linked to the binary having to be called `nodejs`).

The solution (that's worked in the past) is to install [nvm](https://github.com/creationix/nvm) first and using it to install node, *rather* than using `apt-get` (or similar tools) to install node directly.

## If nodemon is facing the watch errors (mac)

Try the following command on terminal:

```bash
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

