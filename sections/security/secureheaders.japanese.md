# セキュリティ関連のヘッダを使用して一般的な攻撃からアプリケーションを保護する

<br/><br/>


### 一段落説明

アプリケーションをさらにセキュアにするために使用される、セキュリティ関連のヘッダがあります。以下に、最も重要なヘッダを示します。また、ページの下部のサイトにアクセスして、このトピックに関する詳細な情報を確認することができます。これらのヘッダは、express 用の [Helmet](https://www.npmjs.com/package/helmet) モジュール（[koa Helmet](https://www.npmjs.com/package/koa-helmet)）を使って簡単に設定することができます。

<br/><br/>

### 目次
- [HTTP Strict Transport Security (HSTS)](#http-strict-transport-security-hsts)
- [Public Key Pinning for HTTP (HPKP)](#public-key-pinning-for-http-hpkp)
- [X-Frame-Options](#x-frame-options)
- [X-XSS-Protection](#x-xss-protection)
- [X-Content-Type-Options](#x-content-type-options)
- [Referrer-Policy](#referrer-policy)
- [Expect-CT](#expect-ct)
- [Content-Security-Policy](#content-security-policy)
- [Additional Resource](#additional-resources)

<br/><br/>

### HTTP Strict Transport Security (HSTS)

HTTP Strict Transport Security (HSTS) は、[プロトコルのダウングレード攻撃](https://en.wikipedia.org/wiki/Downgrade_attack)や[クッキーハイジャッキング](https://www.owasp.org/index.php/Session_hijacking_attack)からウェブサイトを保護するための、ウェブセキュリティポリシーの仕組みです。これにより、Web サーバは、Web ブラウザ（または他の準拠するユーザエージェント）が __安全な HTTPS 接続__ でのみ通信し、 安全でない HTTP プロトコルを経由して __決して__ 通信しないことを宣言することができます。HSTS ポリシーは、既存の HTTPS 接続上で `Strict-Transport-Security` ヘッダを使用して実装されています。

Strict-Transport-Security ヘッダには、どれくらいの期間 HTTPS のみを使用してサイトにアクセスするかをブラウザに通知するための秒単位の `max-age` 値と、サイトのすべてのサブドメインに Strict Transport Security ルールを適用するための `includeSubDomains` 値を指定します。

ヘッダ例 - 1 週間有効化された、サブドメインを含む HSTS ポリシー
```
Strict-Transport-Security: max-age=2592000; includeSubDomains
```

🔗 [OWASP Secure Headers Project で読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hsts)

🔗 [MDN web docs で読む](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

<br/><br/>

### Public Key Pinning for HTTP (HPKP)

HTTP Public Key Pinning (HPKP) は、HTTPS のウェブサイトを、誤って発行された、もしくは不正な SSL/TLS 証明書を使用した攻撃者によるなりすましに対抗できるようにするセキュリティメカニズムです。
（訳注：HPKP 自体は非推奨となっており、後述の `Expect-CT` ヘッダに置き換えられています）

HTTPS ウェブサーバーは公開鍵ハッシュのリストを提供し、後続の接続では、証明書チェインにおいてクライアントはサーバーがこれらの公開鍵のうちの 1 つ以上を使用することを期待します。この機能を注意して使用することで、アプリケーションのユーザが過度のリスクを負うことなく、中間者（MITM）攻撃やその他の誤認証の問題のリスクを大幅に減らすことができます。

実装する前に、設定ミスからのリカバリのための高度な柔軟性やその他の[利点](https://groups.google.com/a/chromium.org/forum/m/#!msg/blink-dev/he9tr7p3rZ8/eNMwKPmUBAAJ)のために、まず `Expect-CT` ヘッダを見ておくべきです。

Public-Key-Pins ヘッダは、4つの値を受け付けることができます。証明書の公開鍵を追加するための `pin-sha256` 値（SHA256 アルゴリズムを使用してハッシュ化されているため、異なる公開鍵に対して複数回追加することができる）、ルールを適用する期間をブラウザに伝えるための `max-age` 値、すべてのサブドメインに適用するための `includeSubDomains` 値、そしてピンの検証に失敗した際に、失敗した旨を報告する URL を指定する `report-uri` 値があります。

ヘッダ例 - 1 週間有効化され、サブドメインを含み、example URL に失敗を報告し、2 つの公開鍵を許可した HPKP ポリシー
```
Public-Key-Pins: pin-sha256="d6qzRu9zOECb90Uez27xWltNsj0e1Md7GkYYkVoZWmM="; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g="; report-uri="http://example.com/pkp-report"; max-age=2592000; includeSubDomains
```

🔗 [OWASP Secure Headers Project で読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hpkp)

🔗 [MDN web docs で読む](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)

<br/><br/>

### X-Frame-Options

X-Frame-Options ヘッダは、フレームを使用して他の（外部の）ページをアプリケーションを埋め込むことができるかどうかのポリシーを宣言することで、[クリックジャッキング](https://www.owasp.org/index.php/Clickjacking)攻撃からアプリケーションを保護します。

X-Frame-Options は 3 つのパラメータを許可します。リソースの埋め込みを一般的に許可しないための `deny` パラメータ、同じホスト/オリジンのリソースの埋め込みを許可する `sameorigin` パラメータ、そして特定のホストを許可するための `allow-from` パラメータです（訳注：`allow-from` は廃止されました）

ヘッダ例 - アプリケーションの埋め込みを拒否する
```
X-Frame-Options: deny
```

🔗 [OWASP Secure Headers Project を読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xfo)

🔗 [MDN web docs を読む](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

<br/><br/>

### X-XSS-Protection

このヘッダはブラウザの[クロスサイトスクリプティング](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))フィルタを有効化します。

これは 4 つのパラメータを受け付けます。フィルタを無効化する `0`、フィルタを有効化して、攻撃を検知した際にページの自動サニタイズを行う `1`、フィルタを有効化して、攻撃を検知した際にページのレンダリングを停止する `mode=block`（このパラメータは、`1` の後にセミコロンを足して追加する必要があります）、そして攻撃を検知した際に攻撃レポートを作成して送信する `report=<domainToReport>` です（同様に `1` の後に追加する必要があります）。

ヘッダ例 - XSS プロテクションを有効化し、攻撃を example URL に送信する
```
X-XSS-Protection: 1; report=http://example.com/xss-report
```

🔗 [OWASP Secure Headers Project で読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp)

🔗 [MDN web docs で読む](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

<br/><br/>

### X-Content-Type-Options

このヘッダを設定すると、ブラウザがファイルを HTTP ヘッダで宣言されたファイルタイプと[別のものとして解釈する](https://en.wikipedia.org/wiki/Content_sniffing)ことを防ぎます。

ヘッダ例 - コンテンツスニッフィングを無効化する
```
X-Content-Type-Options: nosniff
```

🔗 [OWASP Secure Headers Project で読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto)

🔗 [MDN web docs で読む](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)


<br/><br/>

### Referrer-Policy

Referrer-Policy HTTP ヘッダは、`Referer` ヘッダで送信される、リファラー情報をリクエストにどれだけ含めるかを制御します。

これは 8 つのパラメータを許可しています。`Referer` ヘッダを完全に省略する `no-referrer` パラメータ、（水準が）ダウングレードされた際（HTTPS → HTTP）に `Referer` ヘッダを省略する `no-referrer-when-downgrade` パラメータ、ホストオリジン __のみ__ をリファラーとして送信する `origin` パラメータ、同一オリジンの際はフルオリジン URL を送信し、その他の場合はホストオリジンのみを送信する `origin-when-cross-origin` パラメータ、同じオリジンにのみリファラー情報を送信しクロスオリジンのリクエストの場合は省略する `same-origin` パラメータ、同じセキュリティレベル（HTTPS → HTTPS）の場合にのみ `Referer` ヘッダーを保持しそれに劣る水準の場合は省略する `strict-origin` パラメータ、同一オリジンの場合はフルリファラー URL を送信し、クロスオリジンで __同じ__ セキュリティレベルの送信先の場合はオリジン __のみ__ を送信し、安全性の劣るクロスドメインの送信先にはリファラーを送信しない `strict-origin-when-cross-origin` パラメータ、同一オリジン、クロスオリジンに関わらずフルリファラーを送信する `unsafe-url` パラメータです。

ヘッダー例 - 完全に `Referer` ヘッダを取り除く
```
Referrer-Policy: no-referrer
```

🔗 [OWASP Secure Headers Project で読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#rp)

🔗 [MDN web docs で読む](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)


<br/><br/>

### Expect-CT

Expect-CT ヘッダは、[認証透過性](https://www.certificate-transparency.org/)の要件に準拠しているかどうか確認するために、ヘッダを発行するホストへの接続をブラウザが評価すべきということを示すことを目的として、サーバによって使用されます。

このヘッダは 3 つのパラメータを受け付けます。Expect-CT の失敗を報告する URI を指定する `report-uri`、（報告するだけでなく）認証透過性ポリシーに従い、認証透過性ポリシーに違反するコネクションを拒否するようにブラウザに指示する `enforce` パラメータ、ブラウザが既知の Expect-CT ホストとみなすべき時間を秒数で指定する `max-age` パラメータです。

ヘッダ例 - 1 週間、認証透過性ポリシーを強制、example URL に報告する
```
Expect-CT: max-age=2592000, enforce, report-uri="https://example.com/report-cert-transparency"
```

🔗 [OWASP Secure Headers Project で読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#ect)


<br/><br/>

### Content-Security-Policy

HTTP Content-Security-Policy レスポンスヘッダは、特定のページに対して、ユーザーエージェントが読み込みをすることができるリソースを制御することを可能にします。いくつかの例外を除いて、ほとんどの場合ポリシーはサーバオリジンとスクリプトのエンドポイントを指定します。これは、[クロスサイトスクリプティング攻撃（XSS）](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))対策に役立ちます。

ヘッダ例 - CSP を有効にして、同一オリジンからのスクリプトのみを実行する
```
Content-Security-Policy: script-src 'self'
```

以下のリンクで、Content-Security-Policy で有効になっている多くのポリシーを見ることができます。

🔗 [OWASP Secure Headers Project で読む](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#csp)

🔗 [MDN web docs で読む](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)


<br/><br/>

### Additional resources

🔗 [OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers)

🔗 [Node.js Security Checklist (RisingStack)](https://blog.risingstack.com/node-js-security-checklist/)


<br/><br/>
