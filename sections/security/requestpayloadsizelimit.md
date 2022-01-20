# Limit payload size using a reverse-proxy or a middleware

### One Paragraph Explainer

JSON-encoded payload와 같이 리퀘스트 바디를 파싱하는 것은 성능적으로 상당히 무거운 작업이다. 특히 대용량 요청의 경우 심해진다. 우리의 웹 어플리케이션을 관리할 때, 관리할 수 있는 payload의 크기를 제한해야 한다. 제한 없이 들어오는 요청의 경우, 우리의 서비스의 성능을 낮추거나 부셔버릴 수도 있다. 디도스 공격뿐만이 아니라 의도치 않은 사용에도 발생할 수 있는 것이다. 리퀘스크 바디를 파싱하는 유명한 미드웨어 솔루션들 중에, 이미 express패키지에 포함된 `body-parser`같은 모듈은 리퀘스트 페이로드의 크기를 제한할 수 있는 기능이 있다.
또한 개발자는 리퀘스크 바디 크기를 제한하는 기능을 리버스 프록시나, 웹서버 소프트웨어에 추가할 수도 있다. 아래와 같은 예시들이 express나 nginx를 이용한 리퀘스트 크기를 제한하는 것들이다.

### Example code for `express`

```javascript
const express = require('express');

const app = express();

app.use(express.json({ limit: '300kb' })); // body-parser defaults to a body size limit of 100kb

// Request with json body
app.post('/json', (req, res) => {

    // Check if request payload content-type matches json, because body-parser does not check for content types
    if (!req.is('json')) {
        return res.sendStatus(415); // -> Unsupported media type if request doesn't have JSON body
    }

    res.send('Hooray, it worked!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

🔗 [**Express docs for express.json()**](http://expressjs.com/en/4x/api.html#express.json)

### Example configuration for `nginx`

```nginx
http {
    ...
    # Limit the body size for ALL incoming requests to 1 MB
    client_max_body_size 1m;
}

server {
    ...
    # Limit the body size for incoming requests to this specific server block to 1 MB
    client_max_body_size 1m;
}

location /upload {
    ...
    # Limit the body size for incoming requests to this route to 1 MB
    client_max_body_size 1m;
}
```

🔗 [**Nginx docs for client_max_body_size**](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)