# 定期的に、そして自動的に脆弱性のある依存関係を検査する

### 一段落説明

Node.js アプリケーションの大部分は、開発の容易化とスピードアップを目的として、人気のあるパッケージレジストリである npm や Yarn に存在する多数のサードパーティモジュールに大きく依存しています。しかし、この利点の負の側面は、未知の脆弱性をアプリケーションに含めることによるセキュリティリスクです。このリスクは、OWSAP のクリティカルなウェブアプリケーションセキュリティリスクリストにおいて上位に位置するものです。

プロジェクトに脆弱性を注入してしまうリスクを軽減するために、コミュニティによって脆弱性があると識別された Node.js アプリケーションのサードパーティ製パッケージを特定することができるツールがいくつかあります。これらは CLI ツールから定期的に利用することができますし、アプリケーションのビルドプロセスの一部として含むこともできます。

### 目次

- [NPM audit](#npm-audit)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)

### NPM Audit

`npm audit` は NPM@6 において導入された新しい CLI ツールです。

`npm audit` を実行すると、影響を受けるパッケージ名、脆弱性の深刻度と概要、パス、そしてその他の情報を含むセキュリティ脆弱性のレポートが作成され、さらに、利用可能な場合には脆弱性を解決するためのパッチを適用するためのコマンドが表示されます。

![npm audit の例](../../assets/images/npm-audit.png)

🔗 [NPM blog で読む](https://docs.npmjs.com/getting-started/running-a-security-audit)

### Snyk

Snyk は機能豊富な CLI と GitHub インテグレーションを提供しています。Snyk はさらに、脆弱性を通知するだけでなく、既知の脆弱性に対するパッチがリリースされると、脆弱性を修正する新しいプルリクエストを自動的に作成します。

Snyk の機能豊富なウェブサイトでは、GitHub リポジトリや npm モジュールの URL を与えると、依存性のアドホックな評価を実行することもできます。また、脆弱性がある npm パッケージを直接検索することもできます。

Synk Github インテグレーションが自動的にプルリクエストを作成した際の出力結果例:
![synk GitHub example](../../assets/images/snyk.png)

🔗 [Snyk website で読む](https://snyk.io/)

🔗 [Synk online tool to check npm packages and GitHub modules で読む](https://snyk.io/test)

### Greenkeeper

Greenkeeper はリアルタイムに依存関係のアップデート情報を提供するサービスで、常に最新のパッチが適用された依存関係のバージョンを使用することで、アプリケーションの安全性を維持します。

Greenkeeper は、リポジトリの `package.json` ファイルで指定された npm 依存関係を監視し、依存関係のアップデートごとに作業ブランチを自動的に作成します。その後、リポジトリの CI が実行され、アプリケーション内でアップデートされた依存関係のバージョンの変更点を明らかにします。依存関係のアップデートが原因で CI が失敗した場合、現在のパッケージバージョンとアップデートされたパッケージバージョンの概要と、アップデートされたバージョンの情報とコミット履歴が記載された、明確で簡潔な issue がリポジトリに作成され、議論が交わされます。

Greenkeeper GitHub インテグレーションが自動的にプルリクエストを作成した際の出力結果例:

![synk github example](../../assets/images/greenkeeper.png)
🔗 [Greenkeeper website で読む](https://greenkeeper.io/)

### 追加資料

🔗 [Rising Stack Blog: Node.js dependency risks](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Improving npm security](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)
