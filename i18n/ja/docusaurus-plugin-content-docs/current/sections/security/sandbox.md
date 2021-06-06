# サンドボックス内で安全でないコードを実行する

### 一段落説明

経験則として、すべての人は自分自身が管理する JavaScript ファイルのみを実行するべきです。セオリーはさておき、現実世界では実行時に動的に渡される JavaScript ファイルを実行する必要があります。例えば、webpack のような、ビルド時にカスタムローダーを動的に実行する動的なフレームワークを考えてみましょう。悪意のあるプラグインが存在する場合、被害を最小限に抑え、フローを正常に終了させたいと願うでしょう - これを実現するには、そういったプラグインを、リソース、クラッシュ、共有する情報の観点において、完全に隔離されたサンドボックス環境で実行する必要があります。この隔離を実現するには、以下の3つの主要なオプションがあります。

- 専用の子プロセス - これは迅速な情報の隔離を提供しますが、子プロセスを管理し、実行時間を制限し、そしてエラーから復帰させる必要があります
- クラウドのサーバーレス環境は、サンドボックスの要件をすべて満たしていますが、デプロイと FaaS 機能の動的な呼び出しは簡単ではありません
- [sandbox](https://www.npmjs.com/package/sandbox) や [vm2](https://www.npmjs.com/package/vm2) といったいくつかの npm ライブラリは、たった1行で隔離されたコード実行を可能にします。このオプションはシンプルさにおいては優位ですが、保護範囲が限られています。

### コード例 - 独立した状態でコードを実行するために sandbox ライブラリを使用する

```javascript
const Sandbox = require('sandbox');
const s = new Sandbox();

s.run('lol)hai', (output) => {
  console.log(output);
  //output='Syntax error'
});

// 例 4 - 制限されたコード
s.run('process.platform', (output) => {
  console.log(output);
  //output=Null
});

// 例 5 - 無限ループ
s.run('while (true) {}', (output) => {
  console.log(output);
  //output='Timeout'
});
```
