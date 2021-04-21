# npm レジストリへのシークレットの公開を避ける

### 一段落説明
誤ってシークレットをパブリック npm レジストリに公開してしまうリスクを回避するように、注意を払ってください。`.npmignore` ファイルを利用して、特定のファイルやフォルダをブラックリスト化したり、`package.json` 内の `files` 配列をホワイトリストとして利用することができます。

npm publish が実際にレジストリに何をパブリッシュするのかを確認するために、`--dry-run` フラグを npm publish コマンドに追加して、作成されたパッケージの詳細情報を表示させることができます。

プロジェクトが `.npmignore` と `.gitignore` ファイルの両方を利用している場合には、`.npmignore` 内に記載されていないものはすべてレジストリにパブリッシュされる（つまり、`.npmigore` ファイルは `.gitignore` ファイルを上書きする）ことに注意することが重要です。この制約は、よくある混乱の元凶であり、シークレットを漏洩することに繋がりうる問題です。開発者は最終的に `.gitignore` ファイルを更新するかもしれませんが、`.npmignore` を更新することを忘れ、潜在的に機密なファイルが、ソースコントロールにはプッシュされていないが、npm パッケージには依然含まれている、という状況になりえます。

### コード例
.npmignore file の例
```
# Tests
test
coverage

# Build tools
.travis.yml
.jenkins.yml

# Environment
.env
.config

```

package.json 内の files 配列の利用例

```json
{ 
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### 他のブロガーが言っていること

[Liran Tal & Juan Picado at Snyk](https://snyk.io/blog/ten-npm-security-best-practices/) のブログより:
> ... その他のグッドプラクティスは、package.json の files プロパティを利用することです。これは（ignore files はブラックリストとして機能する一方で）ホワイトリストとして機能し、作成されてインストールされるパッケージに含むファイルの配列を指定します。パッケージに含まれるべきファイルとそうでないファイルを決定するために、files プロパティと ignore files の両方を同時に利用することができます。両方を利用する際は、package.json の files プロパティが ignore ファイルよりも優先されます。

[npm blog](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish) より:
> ... npm publish を実行すると、npm はカレントディレクトリのファイルすべてをバンドル化します。どのファイルを含み、どのファイルを無視するかについて、いくつかの決定が必要です。この決定をするには、プロジェクトディレクトリ内のいくつかのファイルを利用します。その該当ファイルには、.gitignore や .npmignore、そして package.json 内の files 配列が含まれます。また、それは常に特定のファイルを含め、他のものを無視します。
