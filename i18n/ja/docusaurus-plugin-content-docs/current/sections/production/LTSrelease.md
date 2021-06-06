# Node.js の LTS リリースをプロダクションで使用する

### 一段落説明

重要なバグ修正、セキュリティアップデート、パフォーマンスの改善を受けるために、本番環境で Node.js の LTS(Long Term Support) バージョンを使用していることを確認してください。

Node.js の LTS バージョンは少なくとも18ヶ月間サポートされており、偶数のバージョン番号(例えば4, 6, 8)で示されています。LTS のリリースラインは安定性とセキュリティに焦点を当てているので、運用には最適ですが、「Current」 のリリースラインは寿命が短く、コードの更新がより頻繁に行われます。LTS のバージョンへの変更は、安定性のためのバグ修正、セキュリティ更新、可能な npm の更新、ドキュメントの更新、既存のアプリケーションを壊さないことが証明できる特定のパフォーマンスの改善に限定されます。

<br/><br/>

### 続きを読む

🔗 [Node.js のリリース定義](https://nodejs.org/en/about/releases/)

🔗 [Node.js リリーススケジュール](https://github.com/nodejs/Release)

🔗 [Essential Steps: Long Term Support for Node.js by Rod Vagg (必須ステップ: Node.js の長期サポート by Rod Vagg)](https://medium.com/@nodesource/essential-steps-long-term-support-for-node-js-8ecf7514dbd)
> ...これらの中での増分リリースのスケジュールは、バグ修正、セキュリティ修正、その他の小さいが重要な変更の有無によって決定されます。安定性に重点が置かれますが、安定性には既知のバグの数を最小限に抑え、セキュリティ上の懸念事項が発生した場合には、それを常に把握しておくことも含まれます。

<br/><br/>
