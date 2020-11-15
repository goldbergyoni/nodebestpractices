# 依存関係をロックする

<br/><br/>

### 一段落説明

あなたのコードは多くの外部パッケージに依存しています。例えば、'require' して momentjs-2.1.4 を使用しているとします。デフォルトでは、本番環境にデプロイするときに npm が momentjs 2.1.5 をフェッチすることがありますが、これは残念ながらテーブルにいくつかの新しいバグをもたらすことになります。npm の設定ファイルと引数 ```-save-exact=true``` を使うことで、インストールされた*正確な*同じバージョンを参照するように npm に指示します。そのため、次に ```npm install``` を実行したとき（本番環境やテスト用に出荷する予定の Docker コンテナ内で）、同じ依存バージョンが取得されます。別のポピュラーな方法としては、`.shrinkwrap` ファイル ( npm を使って簡単に生成されます) を使って、どのパッケージとバージョンをインストールすべきかを正確に記述することで、環境が期待以上に新しいバージョンを取得したくなることがないようにする方法があります。

* **更新:** npm 5 の時点で、依存関係は .shrinkwrap を使って自動的にロックされます。新興のパッケージマネージャである Yarn も、デフォルトで依存関係をロックしています。

<br/><br/>

### コード例: 正確なバージョンを使用するように npm に指示する .npmrc ファイル

```npmrc
// これをプロジェクトディレクトリに .npmrc ファイルとして保存します
save-exact:true
```

<br/><br/>

### コード例: 依存関係ツリーを正確に蒸留した shrinkwrap.json ファイル

```json
{
    "name": "A",
    "dependencies": {
        "B": {
            "version": "0.0.1",
            "dependencies": {
                "C": {
                    "version": "0.1.0"
                }
            }
        }
    }
}
```

<br/><br/>

### コード例: npm 5 依存関係ロックファイル - package-lock.json

```json
{
    "name": "package-name",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "dependencies": {
        "cacache": {
            "version": "9.2.6",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
            "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
        },
        "duplexify": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
            "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
            "dependencies": {
                "end-of-stream": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
                    "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
                }
            }
        }
    }
}
```
