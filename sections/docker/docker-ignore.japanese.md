# .dockerignore を使用してシークレット情報の漏洩を防ぐ

<br/><br/>

### 一段落説明

Docker ビルドコマンドは、仮想ネットワークを介してローカルファイルをビルドコンテキスト環境にコピーします。注意してください - 開発と CI のフォルダには、.npmrc、.aws、.envファイルなどの機密ファイルが含まれています。その結果、Docker イメージは秘密を保持し、危険な領域(Docker リポジトリやパートナーのサーバーなど)で公開される可能性があります。より良い世界では、Dockerfile は何がコピーされるのかを明確にすべきです。その上で、不要なフォルダや潜在的な秘密をフィルタリングする最後のセーフティネットとしての役割を果たす .dockerignore ファイルを含めてください。そうすることで、ビルド速度も向上します。- 本番では使わない一般的な開発フォルダ (例えば .git 、テスト結果、IDE の設定など) を省くことで、キャッシュをより有効に活用し、より良いパフォーマンスを得ることができます。

<br/><br/>

### コード例 – Node.js のための良いデフォルトの .dockerignore

<details>
<summary><strong>.dockerignore</strong></summary>

```
**/node_modules/
**/.git
**/README.md
**/LICENSE
**/.vscode
**/npm-debug.log
**/coverage
**/.env
**/.editorconfig
**/.aws
**/dist
```

</details>

<br/><br/>

### アンチパターン　コード例 – 全てのファイルの再帰的コピー

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
# 次の行はすべてをコピーします
COPY . .

# 残りはここに来ます

```

</details>
