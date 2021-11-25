# 일반적인 공격들로부터 어플리케이션을 보호하기 위한 보안 관련 헤더 사용

<br/><br/>


### 한 문단 요약

어플리케이션을 추가적으로 보안하기 위해 사용되는 보안 관련 헤더들이 존재한다. 가장 중요한 헤더들에 대한 내용을 아래에 목록화 해놓았다. 해당 페이지 아래에 링크되어있는 사이트들을 방문하면, 이 주제에 대한 정보를 더 얻을 수 있다. express를 위한 [Helmet](https://www.npmjs.com/package/helmet) 모듈을 사용해 쉽게 헤더들을 설정 가능하다. ([Helmet for koa](https://www.npmjs.com/package/koa-helmet)).

<br/><br/>

### 목차
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

HTTP Strict Transport Security (HSTS)는 웹 사이트를 [protocol downgrade attacks](https://en.wikipedia.org/wiki/Downgrade_attack)와 [cookie hijacking](https://www.owasp.org/index.php/Session_hijacking_attack)으로부터 지키기 위한 웹 보안 정책 메커니즘이다. 이는 웹 서버로 하여금 웹 브라우저(또는 다른 준수 사용자 에이전트들)가 반드시 __보안 HTTP 연결들__을 사용해 상호 작용하고, __절대__ 비보안 HTTP 프로토콜을 통해서는 상호 작용하지 않아야 한다고 선언하는 것을 허락한다. HSTS 정책은 기존에 존재하던 HTTPS 연결을 통해 'Strict-Transport-Security' 헤더를 사용하여 구현된다.

'Strict-Transport-Security' 헤더는 HTTPS만을 사용하여 사이트에 접근해야만 하는 기간에 대해 브라우저에 알리기 위해서 초 단위의 'max-age' 값을 허용하며, 모든 사이트들의 서브도메인에 'Strict-Transport-Security' 규칙을 적용하기 위해서 `includeSubDomains` 값을 허용한다.

헤더 예제 - 서브 도메인들을 포함해 일주일 간 허용되는 HSTS 정책
```
Strict-Transport-Security: max-age=2592000; includeSubDomains
```

🔗 [OWASP Secure Headers Project에서 읽어보기](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hsts)

🔗 [MDN web docs에서 읽어보기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

<br/><br/>

### Public Key Pinning for HTTP (HPKP)

'HTTP Public Key Pinning'(HPKP)는 HTTPS 웹사이트들이 공격자들이 잘못 발급되거나 또는 사기성이 짙은 SSL/TLS 인증서를 이용해 사칭하여 공격하는 것을 막기 위한 보안 메커니즘이다.

HTTPS 웹 서버는 공개 키 목록을 제공하며, 이어지는 연결들에서 클라이언트들은 해당 서버가 인증서 체인에서 공개 키 목록에 존재하는 키중 하나 이상을 사용할 것으로 기대한다. 당신이 이 기능을 주의 깊게 사용한다면, 과도한 위험을 초래하는 일 없이 어플리케이션 사용자에 대해 중간자 공격(man in the middle attack, MITM: 네트워크 통신을 조작하여 통신 내용을 도청하거나 조작하는 공격 기법) 및 다른 인증 실패 문제를 크게 줄일 수 있을 것이다.

해당 기능을 구현해보기 전, 잘못된 구성 또는 다른 [장점](https://groups.google.com/a/chromium.org/forum/m/#!msg/blink-dev/he9tr7p3rZ8/eNMwKPmUBAAJ)으로부터 복구할 수 있는 고급 적용성 때문에 당신은 반드시 'Expect-CT'를 먼저 살펴보아야 한다.

Public-Key-Pins 헤더는 인증서 공개 키를 추가하기 위해서, SHA256 알고리즘에 의해 해시되며 다른 공개 키들에 대해 여러번 추가될 수 있는 'pin-sha256' 값, 브라우저가 규칙을 적용해야 하는 기간에 대해 알려주는 'max-age' 값, 해당 규칙을 모든 서브도메인들에 적용하기 위한 'includeSubDomains' 값, 주어진 URL에 핀의 유효성 검사 실패를 보고하기 위한 'report-uri' 값까지 총 4개의 값을 허용한다.

헤더 예제 - 서브도메인을 포함하여 일주일 동안 적용되며, 예제 URL에 대한 실패를 보고하고, 두 개의 공개 키들을 허용하는 HPKP 정책
```
Public-Key-Pins: pin-sha256="d6qzRu9zOECb90Uez27xWltNsj0e1Md7GkYYkVoZWmM="; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g="; report-uri="http://example.com/pkp-report"; max-age=2592000; includeSubDomains
```

🔗 [OWASP Secure Headers Project에서 읽어보기](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hpkp)

🔗 [MDN web docs에서 읽어보기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)

<br/><br/>

### X-Frame-Options

'X-Frame-Options' 헤더는 당신의 어플리케이션이 프레임들을 사용하는 다른 (외부)페이지에 포함될지 아닐지에 대해 정의하는 정책을 선언하여 [Clickjacking](https://www.owasp.org/index.php/Clickjacking) 공격들로부터 어플리케이션을 보호한다.

'X-Frame-Options'는 일반적인 경우에 리소스의 포함을 허용하지 않게 하는 'deny', 동일한 host/origin에 자원을 포함할 수 있도록 허용하는 'sameorigin', 그리고 리소스가 포함이 허용되는 host를 지정하는 'allow-from'까지 총 3개의 파라미터를 가진다.

헤더 예제 - 어플리케이션 포함 거부
```
X-Frame-Options: deny
```

🔗 [OWASP Secure Headers Project에서 읽어보기](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xfo)

🔗 [MDN web docs에서 읽어보기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

<br/><br/>

### X-XSS-Protection

해당 헤더는 [Cross-site scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)) 필터를 활성화시킨다.

이 헤더에서는 필터를 비활성화하기 위한 '0', 필터를 활성화 시키고 페이지의 자동 삭제를 활성화시키는 '1', 필터를 활성화하고 만약 XSS 공격이 감지되었을 경우에는 페이지가 런데링 되는 것을 방지하는 'mode=block' 등의 4가지 파라미터를 허용한다. ('mode=block' 파라미터는 세미콜론을 사용해서 '1'에 추가되어야 하며, 위반에 대해서 보고해야할 때는 'report=<domainToReport>'를 사용해야 한다.)

헤더 예제 - XSS 보호 활성화 및 예제 URL에 대한 위반 보고
```
X-XSS-Protection: 1; report=http://example.com/xss-report
```

🔗 [OWASP Secure Headers Project에서 읽어보기](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp)

🔗 [OWASP Secure Headers Project에서 읽어보기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

<br/><br/>

### X-Content-Type-Options

해당 헤더를 설정함으로써 브라우저는 파일을 HTTP 헤더에서 선언된 컨텐츠 유형과 다른 것으로 해석하지 못하게 된다.

헤더 예제 - 컨텐츠 스니핑 금지 
(cf. 스니핑: 해킹 기법 중 하나로, 일반적으로 네트워크 상에서 자신이 아닌 다른 상대방들의 패킷 교환을 엿듣는 것을 이야기한다.)
```
X-Content-Type-Options: nosniff
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)


<br/><br/>

### Referrer-Policy

'Referrer-Policy' HTTP 헤더 'Referer' 헤더에 전송된 referrer 정보가 요청에 포함되어야 하는지를 결정한다

해당 헤더에서는 'Referer' 헤더를 완전히 제거하기 위한 'no-referrer', HTTPS에서 HTTP와 같이 다운그레이드될 때 'Referer' 헤더를 제거하기 위한 'no-referrer-when-downgraded', host 출처(host root)를 __오직 referrer로만 보내기 위한__ 'origin', 동일한 출처에 머무를 경우에는 전체 origin URL을 보내고 그렇지 않은 경우에는 __오직 host 출처만 보내는__ `origin-when-cross-origin`, 동일한 사이트 출처들에 대해서만 referrer 정보를 보내고 교차 출처 요청에서는 생략하도록 하는 'same-origin', `Referer` 헤더를 동일한 보안 수준(HTTPS -> HTTPS)에서만 유지하고 상대적으로 덜 안전한 대상에서는 생략하도록 하는 `strict-origin`,전체 referrer URL을 동일한 출처 대상(동일한 보안 수준의 교차 출처 대상으로만 향하며, 덜 안전한 교차 출처 목적지에는 참조자가 없다.)으로 보내기 위한 'strict-origin-when-cross-origin', 그리고 전체 referrer를 동일한 출처 또는 교차 출처 대상들에게 보내기 위한 'unsafe-url' 등 총 8개의 파라미터를 허용한다.
 
헤더 예제 - 'Referer' 헤더를 완전히 제거
```
Referrer-Policy: no-referrer
```

🔗 [Read on OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#rp)

🔗 [Read on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)


<br/><br/>

### Expect-CT

'Expect-CT' 헤더는 브라우저가 [Certificate Transparency](https://www.certificate-transparency.org/) 준수를 위해 헤더를 내보내는 호스트에 대해 반드시 평가해야 하는 것을 나타내기 위해서 사용된다.

이 헤더에서는 Expect-CT 실패 보고에 대한 URL을 제공하는 'report-uri', 브라우저에 인증서 투명성이 반드시 시행되어야 함을 알릴 뿐만 아니라 이후 연결까지 거부하도록 하는 'enforce', 그리고 브라우저가 host를 알려진 Expect-CT host로 간주하는 데에 걸리는 시간(초)를 지정하는 'max-age'까지 총 3개의 파라미터들을 허용한다.

헤더 예제 - 일주일 간 인증서 투명성에 대한 필수 시행 및 예제 URL에 대한 보고를 지정
```
Expect-CT: max-age=2592000, enforce, report-uri="https://example.com/report-cert-transparency"
```

🔗 [OWASP Secure Headers Project에서 읽어보기](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#ect)


<br/><br/>

### Content-Security-Policy

HTTP 'Content-Security-Policy' 응답 헤더는 사용자가 주어진 페이지에 대해 로드할 수 있도록 허락된 리소스들에 대해 제어할 수 있도록 허락한다. 일부 예외를 제외하고는, 대부분의 서버 출처 및 스크립트 엔드포인트들을 포함한다. 이는 [cross-site scripting attacks (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))으로부터 보호하는 데에 도움이 된다.

헤더 예제 - CSP를 활성화하고 동일한 출처의 스크립트들만을 실행
```
Content-Security-Policy: script-src 'self'
```
아래 링크들에서 Content-Security-Policy와 함께 활성화된 많은 정책들에 대해 확인할 수 있다.

🔗 [OWASP Secure Headers Project에서 읽어보기](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#csp)

🔗 [MDN web docs에서 읽어보기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)


<br/><br/>

### Additional resources

🔗 [OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers)

🔗 [Node.js Security Checklist (RisingStack)](https://blog.risingstack.com/node-js-security-checklist/)


<br/><br/>
