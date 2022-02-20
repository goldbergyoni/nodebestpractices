# JWT 블랙리스트를 지원해라

### 한 문단 설명

JWTs(JSON 웹 토큰)은 완전 무결하게 설계되었기에 유효한 토큰이 발행자로부터 서명되기만 하면 토큰은 애플리케이션에 의해 진짜라고 증명될 것이다. 애플리케이션이 기대하는 값과 발행 시 제공되었던 서명이 일치하기만 한다면 서명이 유효성이 유지되기 때문에 유출된 토큰은 여전히 사용 가능하며 인증을 취소할 수 없는 보안 이슈로 이어지는 문제가 있다. 이것 때문에, JWT 인증(authentification)을 사용할 때, 애플리케이션은 토큰이 취소될 필요성이 있는 경우 유저 보안을 확보하기 위해 만료되었거나, 인가 취소된 토큰의 블랙리스트를 관리해야한다.

### `익스프레스-jwt-블랙리스트` 예시

`express-jwt-blacklist`를 `express-jwt`를 사용하여 Node.js프로젝트에서 실행하는 에시. 스토어 설정(`express-jwt-blacklist`의 인메모리 캐시) 기본값을 사용하지 않고 많은 노드 프로세스들 전역에 토큰의 인증 취소를 위해 레디스와 같은 외부 스토어를 사용하는 것은 중요하다.

```javascript
const jwt = require("express-jwt");
const blacklist = require("express-jwt-blacklist");

blacklist.configure({
  tokenId: "jti",
  strict: true,
  store: {}
    type: "memcached",
    host: "127.0.0.1",
    port: 11211,
    keyPrefix: "mywebapp:",
    options: {
      timeout: 1000,
    },
  },
});

app.use(
  jwt({
    secret: "my-secret",
    isRevoked: blacklist.isRevoked,
  })
);

app.get("/logout", (req, res) => {
  blacklist.revoke(req.user);
  res.sendStatus(200);
});
```

### 다른 블로거들이 말하길

다음의 블로그로 부터 [Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/):

> ...그것이 무결성의 소실을 의미한다 하더라도, JWT위에 revocation layer를 추가하여라.
