# linter のセキュリティルールを受け入れる

### 一段落説明

[eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) や [tslint-config-security](https://www.npmjs.com/package/tslint-config-security) といった ESLint や TSLint 用のセキュリティプラグインは、安全でない正規表現や安全でない `eval()` の使用、そしてアプリケーション内のファイルシステムにアクセスする際にリテラルでないファイル名を使用するといった、多くの既知の脆弱性に基づいたコードセキュリティチェックを提供しています。[pre-git](https://github.com/bahmutov/pre-git) のような Git hooks の利用することで、リモートに配布される前に、シークレットがコードに含まれていないかチェックするなど、ソースコントロール上にさらなるルールを強制することができます。

### `eslint-plugin-security` の例

`eslint-plugin-security` によって検出される安全でないプラクティスの例:

`detect-pseudoRandomBytes`

```javascript
const insecure = crypto.pseudoRandomBytes(5);
```

`detect-non-literal-fs-filename`

```javascript
const path = req.body.userinput;
fs.readFile(path);
```

`detect-eval-with-expression`

```javascript
const userinput = req.body.userinput;
eval(userinput);
```

`detect-non-literal-regexp`

```javascript
const unsafe = new RegExp('/(x+x+)+y/)');
```

上記の安全でないコード例を含んだ Node.js プロジェクトにおける `eslint-plugin-security` の実行例:

![nsp check example](/assets/images/eslint-plugin-security.png)

### 他のブロガーが言っていること

[Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/) のブログより:
> Linting は、空白やセミコロン、eval 文などの細かいルールを強制するだけのツールではありません。ESLint は、コード内の様々な潜在的に危険なパターン（正規表現、入力値の検証など）を取り除くための強力なフレームワークを提供します。それはセキュリティを意識する JavaScript デベロッパーにとって検討に値する強力なツールを提供してくれると思います。
