# 変数を利用してモジュールを読み込むことを避ける

### 一段落説明

ユーザー入力が起因となって問題が生じる恐れがあるため、パラメータとして与えられたパスを用いて他のファイルを require/import しないようにしてください。この原則は、ユーザー入力に基づいた動的な変数を用いた、一般的なファイルアクセス（`fs.readFile()` など）やその他のセンシティブなリソースアクセスにも拡張することができます。

### コード例

```javascript
// セキュアでない例（変数 helperPath がユーザー入力によって変更される可能性がある）
const badWayToRequireUploadHelpers = require(helperPath);

// セキュアな例
const uploadHelpers = require("./helpers/upload");
```
