# イメージタグ vs ダイジェストを理解し、`:latest` タグは注意深く利用する

### 一段落説明

本番環境で、セキュリティと安定性を重視するのであれば、「利便性」はベストな決定要因ではないかもしれません。`:latest` タグは Docker のデフォルトタグです。これが意味することは、明示的なタグを追加し忘れた開発者は誤って新しいバージョンのイメージを `latest` としてプッシュしてしまうかもしれないということです。`latest` タグが最新の本番環境のイメージとして利用されている場合には、意図しない結果を招く可能性があります。

### コード例:

```bash
$ docker build -t company/image_name:0.1 .
# :latest イメージはアップデートされない
$ docker build -t company/image_name
# :latest イメージはアップデートされる
$ docker build -t company/image_name:0.2 .
# :latest イメージはアップデートされない
$ docker build -t company/image_name:latest .
# :latest イメージはアップデートされる
```

### 他のブロガーが言っていること

[Vladislav Supalov](https://vsupalov.com/docker-latest-tag/) のブログより:
> 一部の人は、:latest タグは直近でプッシュされたバージョンのイメージを指していると思っています。しかし、そうではありません。

[Docker success center](https://success.docker.com/article/images-tagging-vs-digests)

<br/>
