# Dockerfile を lint する

### 一段落説明

コアアプリケーションのコードをベストプラクティスに従わせ、問題になる前にイシューやバグを取り除くために lint を利用するように、Dockerfile も同様に linting されるべきです。Dockerfile を linting することは、非常に軽い労力でプロダクションの問題をオンタイムで捕らえることができる可能性を高めることを意味します。例えば、存在しないステージからコピーを試みたり、不明なオンラインリポジトリからコピーしてきたり、パワーユーザー（SUDO）でアプリケーションを実行したりなど、Dockerfile に記述されたロジックや命令に構造的な問題が無いことを確認することができます。オープンソースの Dockerfile linter である [Hadolint](https://github.com/hadolint/hadolint) は、手動または CI プロセスの一部として利用することができます。Hadolint は、[Docker ベストプラクティス](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) に従うことを目的とした Dockerfile 専用の linter です。


<br/>

### コード例: hadolint を使用して Dockerfile を検査する

```bash 
hadolint production.Dockerfile
hadolint --ignore DL3003 --ignore DL3006 <Dockerfile> # 特定のルールを除外する
hadolint --trusted-registry my-company.com:500 <Dockerfile> # 信頼されていない FROM イメージを利用している場合に警告を出す
```

### 他のブロガーが言っていること

[Josh Reichardt](https://thepracticalsysadmin.com/lint-your-dockerfiles-with-hadolint/) のブログより:
> もしまだ Dockerfile を linting する習慣を取り入れていないのであれば、いますぐ取り入れるべきです。コードの linting はソフトウェア開発における一般的な慣習であり、問題となる前にイシューやバグを特定し、排除するのに役立ちます。コードを linting することの主な利点の1つは、問題が発生する前に、厄介な些細なバグを特定し排除する手助けをしてくれることです。

[Jamie Phillips](https://www.phillipsj.net/posts/hadolint-linting-your-dockerfile/) のブログより:
> Linter は、開発チームがプログラム的なエラーやスタイルエラーを検出しやすくするために、開発現場では一般的に利用されています。Hadolint は Haskell で Dockerfile のために実装された linter です。このツールは、Docker によって示されたベストプラクティスに照らし合わせて検証し、チェックするべき Dockerfile をパースするために、きちんとしたアプローチを取ります。これはすべての主要なプラットフォームをサポートしており、このチュートリアルではコンテナを利用してサンプル Dockerfile 上で linting を行います。
<br/>
