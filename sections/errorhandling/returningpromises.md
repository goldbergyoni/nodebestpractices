# Returning promises

<br/>

### One Paragraph Explainer

When an error occurs, whether from a synchronous or asynchronous flow, it's imperative to have a full stacktrace of the error flow. Surprisingly, if an async function returns a promise (e.g. calls other async function) without awaiting, should an error occur then the caller function won't appear in the stacktrace. This will leave the person who diagnoses the error with partial information - All the more if the error cause lies within that caller function. There is a v8 feature called "zero-cost async stacktraces" that allows stacktraces to not be cut on the most recent `await`. But due to non-trivial implementation details, it will not work if the return value of a function (sync or async) is a promise. So, to avoid holes in stacktraces when returned promises would be rejected, we must always explicitly resolve promises with `await` before returning them from functions

<br/>

### Code example Anti-Pattern: Calling async function without awaiting

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync(msg) {
  await null // need to await at least something to be truly async (see note #2)
  throw Error(msg)
}

async function returnWithoutAwait () {
  return throwAsync('missing returnWithoutAwait in the stacktrace')
}

// 👎 will NOT have returnWithoutAwait in the stacktrace
returnWithoutAwait().catch(console.log)
```

would log

```
Error: missing returnWithoutAwait in the stacktrace
    at throwAsync ([...])
```
</p>
</details>

### Code example: Calling and awaiting as appropriate

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync(msg) {
  await null // need to await at least something to be truly async (see note #2)
  throw Error(msg)
}

async function returnWithAwait() {
  return await throwAsync('with all frames present')
}

// 👍 will have returnWithAwait in the stacktrace
returnWithAwait().catch(console.log)
```

would log

```
Error: with all frames present
    at throwAsync ([...])
    at async returnWithAwait ([...])
```

</p>
</details>

<br/>

### Code example Anti-Pattern: Returning a promise without tagging the function as async

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync () {
  await null // need to await at least something to be truly async (see note #2)
  throw Error('missing syncFn in the stacktrace')
}

function syncFn () {
  return throwAsync()
}

async function asyncFn () {
  return await syncFn()
}

// 👎 syncFn would be missing in the stacktrace because it returns a promise while being sync
asyncFn().catch(console.log)
```

would log

```
Error: missing syncFn in the stacktrace
    at throwAsync ([...])
    at async asyncFn ([...])
```

</p>
</details>

### Code example: Tagging the function that returns a promise as async

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync () {
  await null // need to await at least something to be truly async (see note #2)
  throw Error('with all frames present')
}

async function changedFromSyncToAsyncFn () {
  return await throwAsync()
}

async function asyncFn () {
  return await changedFromSyncToAsyncFn()
}

// 👍 now changedFromSyncToAsyncFn would present in the stacktrace
asyncFn().catch(console.log)
```

would log

```
Error: with all frames present
    at throwAsync ([...])
    at changedFromSyncToAsyncFn ([...])
    at async asyncFn ([...])
```

</p>
</details>

<br/>

### Code Example Anti-pattern #3: direct usage of async callback where sync callback is expected

<details><summary>Javascript</summary>
<p>

```javascript
async function getUser (id) {
  await null
  if (!id) throw Error('stacktrace is missing the place where getUser has been called')
  return {id}
}

const userIds = [1, 2, 0, 3]

// 👎 the stacktrace would include getUser function but would give no clue on where it has been called
Promise.all(userIds.map(getUser)).catch(console.log)
```

would log

```
Error: stacktrace is missing the place where getUser has been called
    at getUser ([...])
    at async Promise.all (index 2)
```

*Side-note*: it may look like `Promise.all (index 2)` can help understanding the place where `getUser` has been called,
but due to a [completely different bug in v8](https://bugs.chromium.org/p/v8/issues/detail?id=9023), `(index 2)` is
a line from internals of v8

</p>
</details>

### Code example: wrap async callback in a dummy async function before passing it as a sync callback

<details><summary>Javascript</summary>
<p>

*Note 1*: if you control the code of the function that would call the callback - just change that function to
`async` and add `await` before the callback call. Below I assume that you are not in charge of the code that is calling
the callback (or its change is unacceptable for example because of backward compatibility)

*Note 2*: quite often usage of async callback in places where sync one is expected would not work at all. This is not about
how to fix the code that is not working - it's about how to fix stacktrace in case if code is already working as
expected

```javascript
async function getUser (id) {
  await null
  if (!id) throw Error('with all frames present')
  return {id}
}

const userIds = [1, 2, 0, 3]

// 👍 now the line below is in the stacktrace
Promise.all(userIds.map(async id => await getUser(id))).catch(console.log)
```

would log

```
Error: with all frames present
    at getUser ([...])
    at async ([...])
    at async Promise.all (index 2)
```

where thanks to explicit `await` in `map`, the end of the line `at async ([...])` would point to the exact place where
`getUser` has been called

*Side-note*: if async function that wrap `getUser` lacks `await` before return (anti-pattern #1 + anti-pattern #3)
then only one frame would be left in the stacktrace:

```javascript
[...]

// 👎 anti-pattern 1 + anti-pattern 3 - only one frame left in stacktrace
Promise.all(userIds.map(async id => getUser(id))).catch(console.log)
```

would log

```
Error: [...]
    at getUser ([...])
```

</p>
</details>

<br/>

## Advanced explanation

The mechanisms behind sync functions stacktraces and async functions stacktraces in v8 implementation are quite different:
sync stacktrace is based on **stack** provided by the operating system Node.js is running on (just like in most programming
languages). When an async function is executing, the **stack** of the operating system is popping it out as soon as the
function gets to its first `await`. So async stacktrace is a mix of operating system **stack** and a rejected
**promise resolution chain**. Zero-cost async stacktraces implementation extends the **promise resolution chain**
only when the promise is getting `awaited` <span>[¹](#1)</span>. Because only `async` functions may `await`,
sync function would always be missing from async stacktrace if any async operation has been performed after the function
has been called <span>[²](#2)</span>

### The tradeoff

Every `await` creates a new microtask in the event loop, so adding more `await`s to the code would
introduce some performance penalty. Nevertheless, the performance penalty introduced by network or
database is [tremendously larger](https://colin-scott.github.io/personal_website/research/interactive_latency.html)
so additional `await`s penalty is not something that should be considered during web servers or CLI
development unless for a very hot code per request or command. So removing `await`s in
`return await`s should be one of the last places to search for noticeable performance boost and
definitely should never be done up-front


### Why return await was considered as anti-pattern in the past

There is a number of [excellent articles](https://jakearchibald.com/2017/await-vs-return-vs-return-await/) explaining
why `return await` should never be used outside of `try` block and even an
[ESLint rule](https://eslint.org/docs/rules/no-return-await) that disallows it. The reason for that is the fact that
since async/await become available with transpilers in Node.js 0.10 (and got native support in Node.js 7.6) and until
"zero-cost async stacktraces" was introduced in Node.js 10 and unflagged in Node.js 12, `return await` was absolutely
equivalent to `return` for any code outside of `try` block. It may still be the same for some other ES engines. This
is why resolving promises before returning them is the best practice for Node.js and not for ECMAScript in general

### Notes:

1. One other reason why async stacktrace has such tricky implementation is the limitation that stacktrace
must always be built synchronously, on the same tick of event loop <span id="a1">[¹](#1)</span>
2. Without `await` in `throwAsync` the code would be executed in the same phase of event loop. This is a
degenerated case when OS **stack** would not get empty and stacktrace be full even without explicitly
awaiting the function result. Common usage of promises includes some async operations and so parts of
the stacktrace would get lost
3. Zero-cost async stacktraces still would not work for complicated promise usages e.g. single promise
awaited many times in different places

### References:
  <span id="1">1. </span>[Blog post on zero-cost async stacktraces in v8](https://v8.dev/blog/fast-async)
  <br/>

  <span id="2">2. </span>[Document on zero-cost async stacktraces with mentioned here implementation details](
    https://docs.google.com/document/d/13Sy_kBIJGP0XT34V1CV3nkWya4TwYx9L3Yv45LdGB6Q/edit
  )
  <br/>
