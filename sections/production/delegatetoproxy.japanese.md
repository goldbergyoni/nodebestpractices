# 可能な限りのこと全て(静的コンテンツや gzip など)をリバースプロキシに委譲する

<br/><br/>

### 一段落説明

Express を過剰に利用し、静的ファイルの提供、gzip エンコーディング、リクエストのスロットリング、SSL の終了などのネットワーク関連のタスクを提供してくれる、そのリッチなミドルウェアを使用することは非常に魅力的です。これは、CPU を長時間ビジー状態に保つシングルスレッドモデルのため、パフォーマンスを低下させます( Node の実行モデルは短いタスクや非同期 IO 関連のタスクに最適化されていることを覚えておいてください)。より良いアプローチは、ネットワーク作業の専門知識を持つツールを使用することです – 最も人気のあるのは nginx と HAproxy で、これらは最大手のクラウドベンダーも Node.js プロセスへの負荷を軽減するために使用しています。

<br/><br/>

### nginx 設定例 – nginx を使ってサーバのレスポンスを圧縮する

```nginx
# gzip 圧縮を設定する
gzip on;
gzip_comp_level 6;
gzip_vary on;

# アップストリームを設定する
upstream myApplication {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}

# ウェブサーバーを定義する
server {
    # サーバに ssl とエラーページを設定する
    listen 80;
    listen 443 ssl;
    ssl_certificate /some/location/sillyfacesociety.com.bundle.crt;
    error_page 502 /errors/502.html;

    # 静的コンテンツをハンドリングする
    location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
    root /usr/local/silly_face_society/node/public;
    access_log off;
    expires max;
}
```

<br/><br/>

### 他のブロガーが言っていること

* ブログ [Mubaloo](http://mubaloo.com/best-practices-deploying-node-js-applications) より:
> ...このトラップに陥るのは非常に簡単です - あなたは Express のようなパッケージを見て、「素晴らしい！さっそく始めよう」と思ってしまうのです。– あなたがコードを書くことで、あなたが望むアプリケーションを手に入れることができます。これは秀逸だし、正直言ってかなりの勝利を収めていますね。しかし、アプリをサーバーにアップロードして HTTP ポートでリッスンすると、戦争に負けることになります。なぜなら、あなたは非常に重要なことを忘れているからです: Node はウェブサーバーではありません。**トラフィックのボリュームがアプリケーションにヒットし始めると、すぐに物事がうまくいかなくなることに気づくでしょう: 接続が切断されたり、アセットが提供されなくなったり、最悪の場合はサーバーがクラッシュしたりします。あなたがやっていることは、実績のあるウェブサーバが本当によくやっている複雑なことのすべてを Node に処理させようとしていることです。なぜ車輪を再発明するのでしょうか？**
> **これは、1つの画像のため、1つのリクエストのためのものであり、アプリケーションがデータベースを読んだり複雑なロジックを処理したりするような重要なものに使用できるメモリであることを念頭に置いてください; なぜ都合のいいようにアプリを廃人にするのでしょうか？**

* ブログ [Argteam](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load) より:
> express.js にはいくつかの接続ミドルウェアを介した静的ファイル処理が組み込まれていますが、絶対に使ってはいけません。**Nginx は静的ファイルの処理をより良く行うことができ、動的ではないコンテンツへのリクエストがノードプロセスを詰まらせるのを防ぐことができます。**…
