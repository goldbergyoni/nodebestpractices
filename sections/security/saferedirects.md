# 안전하지 않은 리다이렉트를 막아라

### 한문단 설명

리다이렉트가 Node.js나 Express에서 실행될 때, 서버-사이드에서 입력(input) 유효성 검사를 하는 것이 중요하다. 공격자들이 사용자가 제공한 입력 같은 외부의 유효성 검사를 하지않는 것을 발견한다면, 그들은 포럼, 소셜 미디어와 다른 공공 장소에서 유저들이 클릭할 수 있도록 특수하게 조작된 링크를 게시해서 이 취약성을 이용할 수 있다.

예시: 사용자 입력을 사용한 안전하지 않은 express 리다이렉트
```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }

}); 
```

안전하지 않은 리다이렉트를 피하기 위해 제안된 해결책은 사용자 입력에 의존을 피하는 것이다. 사용자 입력이 사용되어야 한다면, 안전한 리다이렉트 whitelist들을 사용하여 취약성이 노출되는 것을 피할 수 있어야 한다.

예시: 안전한 리다이렉트 whitelist
```javascript
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // check if the url starts with a single slash 
  if (url.match(/^\/(?!\/)/)) { 
    // Prepend our domain to make sure 
    return 'https://example.com' + url; 
  } 
    // Otherwise check against a whitelist
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

}); 
```


### 다른 블로거의 말 

[NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db): 에서
> 다행히도 이 취약성에 대한 완화 방법은 꽤 쉽다. 리다이렉트 기준으로 검증되지 않은 사용자 입력을 사용하지 마라.
[Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/) 블로그에서
> 그러나 서버-사이드 리다이렉트 로직이 url파라미터에 입력하는 데이터 유효성을 검사하지 못한다면, 사용자들이 정확하게 같은 사이트(examp1e.com)에 접속할 수 있으며, 궁극적으로 범죄 해커들의 요구를 제공한다.
