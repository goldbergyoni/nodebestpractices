# Prefer native JS methods over user-land utils like Lodash

<br/><br/>

### One Paragraph Explainer

Sometimes, using native methods is better than requiring `lodash` or `underscore` because the resulting program will have more dependencies and thus use more space and also not guarantee the best performance all-round.

<!-- comp here: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### Code Example – Benchmark test on `_.concat`/`Array.concat`

```javascript
const _ = require('lodash'),
  __ = require('underscore'),
  Suite = require('benchmark').Suite,
  chalk = require('chalk');

function onComplete() {
  let fastest = String(this.filter('fastest').map('name')),
    slowest = String(this.filter('slowest').map('name'));
  console.log(`\tBenchmark: ${chalk.cyan(this.name)}\nThe fastest is ${chalk.black.bgGreen(fastest)}\nThe slowest is ${chalk.black.bgRed(slowest)}\n`)
}
const onCycle = event => console.log(`${event.target}`);
const opts = {
  onComplete,
  onCycle
};

const concatSuite = new Suite('concat', opts);
const a0 = [1];

concatSuite
  .add('lodash', () => _.concat(a0, 2, [3], [
    [4]
  ]))
  .add('underscore', () => __.concat(a0, 2, [3], [
    [4]
  ]))
  .add('native', () => a0.concat(2, [3], [
    [4]
  ]))
  .run({ 'async': true });
```

Which returns this:
```bash
lodash x 1,896,368 ops/sec ±5.64% (89 runs sampled)
underscore:
native x 2,488,685 ops/sec ±6.46% (86 runs sampled)
	Benchmark: concat
The fastest is native
The slowest is lodash
```
You can find a bigger list of benchmarks [here](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt) or alternatively [run this](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js) which would show the same but with colours.

### "You don't (may not) need Lodash/Underscore"

From the [repo on this matter which focuses on Lodash and Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).

 > Lodash and Underscore are great modern JavaScript utility libraries, and they are widely used by Front-end developers. However, when you are targeting modern browsers, you may find out that there are many methods which are already supported natively thanks to ECMAScript5 [ES5] and ECMAScript2015 [ES6]. If you want your project to require fewer dependencies, and you know your target browser clearly, then you may not need Lodash/Underscore.

 There's also an [ESLint plugin](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore) which detects where you're using libraries but don't need to.

Here's an example of that plugin in use:
Consider a file called _lodashLove.js_ shown below
```js
const _ = require('lodash');

let arr = [0, 1, 2, 4, 8, 16];

console.log(_.map(arr, x => `d${x}`));

if (_.includes(arr, 0)) console.log('0 found');

console.log('compacted:', _.compact(arr));
```

Here's what ESLint would output when using the YDNLU plugin.
```bash
/home/maxie/GDrive/Other/Sandbox/YDNLU/lodashLove.js
  5:13  warning  Consider using the native Array.prototype.map()       you-dont-need-lodash-underscore/map
  7:5   warning  Consider using the native Array.prototype.includes()  you-dont-need-lodash-underscore/includes

✖ 2 problems (0 errors, 2 warnings)
```

Of course, the example above doesn't seem realistic considering to what actual codebases would have but you get the idea.
