# セッションミドルウェアの設定を変更する

<br/><br/>


### 一段落説明

多くの有名なセッションミドルウェアは、そのまま利用できるような、ベストプラクティス/セキュア Cookie 設定を適用していません。これらの設定をデフォルト値から調整することによって、セッションハイジャックやセッション識別のような攻撃の脅威を減らし、ユーザーとアプリケーションの両方により安全な保護を提供します。

デフォルト値のままになっている最も一般的な設定は、セッション名 `name` です - `express-session` では、`connect.sid` に値します。攻撃者はこの情報を利用して背後にある Web アプリケーションフレームワークや、モジュール固有の脆弱性を特定する可能性があります。この値を他の値に変更することで、どんなセッション機構が利用されているかの特定を難しくします。

また `express-session` では、`cookie.secure` オプションがデフォルトで false に指定されています。この値を true に変更することで、Cookie の送信を https のみに制限し、中間者攻撃からの保護を提供します。

<br/><br/>


### コード例: 安全な Cookie の設定を行う

```javascript
// express セッションミドルウェアを使用する
app.use(session({  
  secret: 'youruniquesecret', // cookie に格納されるセッション ID に署名するために利用されるシークレット文字列
  name: 'youruniquename', // デフォルトの connect.sid を取り除くために、ユニークな名前をセットする
  cookie: {
    httpOnly: true, // クライアントの cookie 読み取りを制限することで、XSS 攻撃のリスクを最小化する
    secure: true, // https でのみ cookie を送信する
    maxAge: 60000*60*24 // cookie の有効期限を ms で指定する
  }
}));
```

<br/><br/>

### 他のブロガーが言っていること

[NodeSource blog](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/) より: 
> ...Express にはデフォルトの cookie 設定がありますが、これはあまり安全ではありません。この設定は、アプリケーションとユーザーの両方にとってのセキュリティを強化するために、手動で厳しくすることができます。

<br/><br/>
