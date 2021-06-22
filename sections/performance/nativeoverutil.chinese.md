# 优先使用原生 JS 方法，而不是像 Lodash 这样的用户端工具


<br/><br/>

### 一段解释
有时，使用原生方法比require _lodash_ 或 _underscore_ 更好，因为这些库会导致性能损失 或 占用更多的空间，
使用原生方法的性能导致 [总体 ~50% 增益](https://github.com/Berkmann18/NativeVsUtils/blob/master/analysis.xlsx)，其中包括以下方法：`Array.concat`、`Array .fill`、`Array.filter`、`Array.map`、`(Array|String).indexOf`、`Object.find`、...


<!-- comp here: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### 示例：基准比较 - Lodash 与 V8（原生）
下图显示了[各种 Lodash 方法的基准的平均值](https://github.com/Berkmann18/NativeVsUtils/blob/master/nativeVsLodash.ods)，这表明 Lodash 方法 与 V8 方法 相比完成相同的任务平均多占用 146.23% 的时间。

![meanDiag](../../assets/images/sampleMeanDiag.png)

### 代码示例 – 对 `_.concat`/`Array.concat` 的基准测试
```javascript
const _ = require('lodash');
const __ = require('underscore');
const Suite = require('benchmark').Suite;
const opts = require('./utils'); //cf. https://github.com/Berkmann18/NativeVsUtils/blob/master/utils.js

const concatSuite = new Suite('concat', opts);
const array = [0, 1, 2];

concatSuite.add('lodash', () => _.concat(array, 3, 4, 5))
  .add('underscore', () => __.concat(array, 3, 4, 5))
  .add('native', () => array.concat(3, 4, 5))
  .run({ 'async': true });
```

返回如下：

![output](../../assets/images/concat-benchmark.png)

您可以在 [此处看到结果](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt) 或 [运行该代码](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js) (区别在于：内容相同但带有颜色)。

### 引用博客：“您不需要（可能不需要）Lodash/Underscore”
来自 [仓库，聚焦 Lodash 和 Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).

 > Lodash 和 Underscore 是很棒的现代 JavaScript 实用程序库，它们被前端开发人员广泛使用。 但是，当您面向现代浏览器时，您可能会发现由于 ECMAScript5 [ES5] 和 ECMAScript2015 [ES6]，有许多方法已经被原生支持。 如果你希望你的项目需要更少的依赖，并且你清楚地知道你的目标浏览器，那么你可能不需要 Lodash/Underscore。

### 示例：用于非原生方法使用的 Linting
一个 [ESLint 插件](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore) 可以检测你在哪里使用库但不需要警告你 带有建议（参见下面的示例）。<br>
你设置它的方法是将 `eslint-plugin-you-dont-need-lodash-underscore` 插件添加到你的 ESLint 配置文件中：
```json
{
  "extends": [
    "plugin:you-dont-need-lodash-underscore/compatible"
  ]
}
```

###  示例：使用 linter 检测非 v8 util 使用情况
参见以下文件：
```js
const _ = require('lodash');
// ESLint will flag the line above with a suggestion
console.log(_.map([0, 1, 2, 4, 8, 16], x => `d${x}`));
```
这是使用 YDNLU 插件时 ESLint 将输出的内容。
![output](../../assets/images/ydnlu.png)

当然，上面的例子似乎并不现实，实际的代码库可能不存在，但能让你明白了我们的意思。