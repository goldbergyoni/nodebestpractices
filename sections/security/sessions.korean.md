# 세션 미들웨어 설정 기본값을 수정하라

<br/><br/>


### 한문단 설명

대부분 인기있는 세션 미들웨어는 별도의 설치없이 사용할 수 있는 모범 사례/안전한 쿠키 설정을 적용하지 않는다. 기본값으로부터 이 설정을 수정하는 것은 세션 하이잭킹과 세션 식별 같은 공격의 위협을 줄임으로써 유저나 애플리케이션에게 더 좋은 보호 기능을 제공한다. 

기본값으로 남은 가장 일반적인 설정은 세션 `name`이다. `express-session`에서 `connect.sid`이다. 공격자는 특정 모듈 취약성과 웹 애플리케이션의 기본 프레임워크를 식별하기 위해 이 정보를 사용할 수 있다.

또한 `express-session`에서, `cookie.secure` 옵션은 기본값을 false로 설정한다. 이것을 true로 변경하는 것은 man-in-the-middle 타입 공격들로부터 안정성을 제공하는 https로만 쿠키 전송이 제한될 것이다.

<br/><br/>


### 코드 예시: 안전한 쿠키 설정 세팅하기

```javascript
// using the express session middleware
app.use(session({  
  secret: 'youruniquesecret', // secret string used in the signing of the session ID that is stored in the cookie
  name: 'youruniquename', // set a unique name to remove the default connect.sid
  cookie: {
    httpOnly: true, // minimize risk of XSS attacks by restricting the client from reading the cookie
    secure: true, // only send cookie over https
    maxAge: 60000*60*24 // set cookie expiry length in ms
  }
}));
```

<br/><br/>


### 다른 블로거의 말

[NodeSource blog](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/): 에서
> Express는 매우 안전하지 않은 기본 쿠키 설정을 가진다. 그것들은 응용프로그램과 사용자 모두에 대해 안정성을 높이기 위해 수동으로 강화할 수 있다.*
