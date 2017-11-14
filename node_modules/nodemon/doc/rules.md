# Rules

Given a nodemon.json file that contains:

```json
{
  "ignore": ["*.coffee"],
  "watch": ["server/*.coffee", "test/"]
}
```

Then nodemon detects changes, but what causes nodemon to restart? The ignored files or the watched files? Which wins?

```js
var files = ['server/foo.coffee', 'server/app.js'];

// afterIgnore = ['server/app.js'] now since foo.coffee matches *.coffee
var afterIgnore = files.filter(applyIgnore);

// watch = ['server/foo.coffee'] as it's under the watch
var watched = files.filter(applyWatch);
```

What about:

```js
var files = ['test/app.js', 'test/app.coffee'];

// afterIgnore = ['test/app.js'] now since test/app.coffee matches *.coffee
var afterIgnore = files.filter(applyIgnore);

// watch.length = 2 as watch implies test/*.*
var watched = files.filter(applyWatch);
```
