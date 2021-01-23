# 認証に対するブルートフォース攻撃を阻止する

### 一段落説明

レートリミットを行わずに `/login` や `/admin` のような上位の特権ルートを公開したままにしておくと、アプリケーションをブルートフォースパスワード辞書攻撃のリスクに晒すことになります。このようなルートへのリクエストを制限する戦略を採用することで、IP のようなリクエストのプロパティや、ユーザ名/メールアドレスといった body パラメータに基づいて試行の許可回数を制限することとなり、攻撃の成功を防ぐことができます。

### コード例: ユーザー名と IP アドレスのペアによる連続認証失敗回数と、IP アドレスによる合計失敗回数をカウントする

[rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) という npm パッケージを利用する。

2 つのリミッターを作成します:
1. 1 つ目は、連続した認証失敗回数をカウントし、ユーザー名と IP アドレスのペアに対して最大 10 回まで許可する
2. 2 つ目は、1 日に 100 回試行に失敗した IP アドレスを 1 日ブロックする

```javascript
const maxWrongAttemptsByIPperDay = 100;
const maxConsecutiveFailsByUsernameAndIP = 10;

const limiterSlowBruteByIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_ip_per_day',
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // 1 日に 100 回失敗した場合、1 日間ブロックする
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_consecutive_username_and_ip',
  points: maxConsecutiveFailsByUsernameAndIP,
  duration: 60 * 60 * 24 * 90, // 最初の失敗から 90 日、間数字を保持する
  blockDuration: 60 * 60, // 1 時間ブロックする
});
```

[rate-limiter-flexible package's Wiki](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection) で完全な例を確認してください。

### 他のブロガーが言っていること

[Liran Tal](https://leanpub.com/nodejssecurity) による書籍 Essential Node.js Security より:
> ブルートフォース攻撃は、攻撃者が一連のユーザ名とパスワードのペアを REST エンドポイントに対して POST したり、開放しているその他の RESTful API に対してリクエストを送信する場合に採用されることがあります。このような辞書攻撃はとても簡単で実行しやすく、ログインとは関係なく、API やページルーティングの他の部分に対しても実行される可能性があります。
