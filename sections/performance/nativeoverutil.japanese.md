# Lodash のようなユーザーランドのユーティリティよりも、ネイティブの JS メソッドを選ぶ


<br/><br/>

### 一段落説明
_lodash_ や _underscore_ を require するよりもネイティブメソッドを使う方が良い場合もあります。なぜなら、これらのライブラリは、パフォーマンスの低下や必要以上にスペースを占有する可能性があるからです。
以下のメソッドを含む、ネイティブメソッドを使用した場合のパフォーマンスは、 [全体的に ~50% 向上](https://github.com/Berkmann18/NativeVsUtils/blob/master/analysis.xlsx) になります: `Array.concat`, `Array.fill`, `Array.filter`, `Array.map`, `(Array|String).indexOf`, `Object.find`, ...


<!-- comp here: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### 例: ベンチマーク比較 - Lodash vs V8 (Native)
下のグラフは、[様々な Lodash メソッドのベンチマークの平均](https://github.com/Berkmann18/NativeVsUtils/blob/master/nativeVsLodash.ods) を示しています。このグラフから、Lodash メソッドは V8 メソッドと同じタスクを完了するのに平均146.23％も時間がかかることがわかります。

![meanDiag](../../assets/images/sampleMeanDiag.png)

### コード例 – `_.concat`/`Array.concat` のベンチマークテスト
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

これは以下のような結果になります:

![output](../../assets/images/concat-benchmark.png)

ベンチマークの大きなリストは[ここ](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt) にあります。あるいは、同じように色をつけて表示される [run this](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js) にもあります。

### ブログ引用: "You don't (may not) need Lodash/Underscore ( Lodash / Underscore は必要ありません（必要ないかもしれません）。)"

[repo on this matter which focuses on Lodash and Underscore(Lodash と Underscore を中心としたこの件についてのリポジトリ)](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore) より

 > Lodash や Underscore は素晴らしいモダンな JavaScript ユーティリティライブラリであり、フロントエンド開発者に広く利用されています。しかし、最新のブラウザをターゲットにしている場合、ECMAScript5 [ES5] や ECMAScript2015 [ES6] のおかげで、すでにネイティブでサポートされているメソッドがたくさんあることに気づくかもしれません。プロジェクトに必要な依存関係を少なくしたく、ターゲットブラウザを明確に理解している場合は、Lodash/Underscore は必要ないかもしれません。

### 例: 非ネイティブメソッドの使用法に対応した Lint
ライブラリを使っているが必要のない場所を検知して、提案付きで警告してくれる[ ESLint プラグイン](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore)というものがあります。(下の例を参照)<br/>
設定方法は、ESLint の設定ファイルに `eslint-plugin-you-dont-need-lodash-underscore` プラグインを追加することです:
```json
{
  "extends": [
    "plugin:you-dont-need-lodash-underscore/compatible"
  ]
}
```

### 例: linter を使用した非 v8 ユーティリティの使用状況の検出
以下のファイルのようにすることを検討してみてください:
```js
const _ = require('lodash');
// ESLint は上の行に提案のフラグを立てます。
console.log(_.map([0, 1, 2, 4, 8, 16], x => `d${x}`));
```
YDNLU プラグインを使った場合の ESLint の出力は以下の通りです。
![output](../../assets/images/ydnlu.png)

もちろん、上の例は、実際のコードベースがどのようなものであるかを考えると、現実的ではないように思えますが、アイデアを得ることはできます。
