# 本番環境に npm ci を使ってパッケージをインストールする

<br/><br/>

### 一段落説明

[**依存関係をロックする**](./lockdependencies.japanese.md) に従って依存関係をロックしましたが、本番環境で使用されているパッケージのバージョンが正確であることを確認する必要があります。

パッケージのインストールに `npm ci` を使うと、まさにそれ以上のことができます。
* `package.json` と `package-lock.json` が一致していない (一致しているはずの) 場合や、ロックファイルがない場合は失敗します。
* もし `node_modules` フォルダが存在する場合は、インストールする前に自動的に削除される
* より速くなります!  [リリースブログ記事](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable) によると、2倍近く速くなっています。

### これはどんな時に役立つのでしょうか？
CI 環境や QA が、後に本番環境に送るものと全く同じパッケージバージョンでソフトウェアをテストすることが保証されています。
また、何らかの理由で cli コマンドではなく、直接 package.json を編集して手動で package.json を変更した場合、package.json と package-lock.json の間にギャップが生じてエラーが発生します。

### npm が言っていること

[npm ci ドキュメント](https://docs.npmjs.com/cli/ci.html) より
> このコマンドは npm-install と似ていますが、テストプラットフォームや継続的インテグレーション、デプロイメントなどの自動化された環境や、依存関係をクリーンインストールしていることを確認したい状況で使用することを目的としています。

[ `ci` コマンドのリリースを発表しているブログポスト](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
>  このコマンドは、継続的インテグレーション/継続的デプロイメントプロセスのためのビルドのパフォーマンスと信頼性を大幅に改善し、ワークフローで CI/CD を使用している開発者に一貫性のある高速な体験を提供します。

[npmjs: dependencies と devDepencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
>    "dependencies": 本番環境のアプリケーションに必要なパッケージ
>    "devDependencies": ローカルでの開発やテストにのみ必要なパッケージ

<br/><br/>
