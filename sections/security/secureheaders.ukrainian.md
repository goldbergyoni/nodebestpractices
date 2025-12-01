# Використання заголовків безпеки для захисту вашого додатку від поширених атак

<br/><br/>


### Пояснення за один абзац

Існують заголовки, пов'язані з безпекою, які використовуються для додаткового захисту вашого додатку. Найважливіші заголовки перелічені нижче. Ви також можете відвідати сайти, на які є посилання внизу цієї сторінки, щоб отримати більше інформації на цю тему. Ви можете легко встановити ці заголовки за допомогою модуля [Helmet](https://www.npmjs.com/package/helmet) для Express ([Helmet для koa](https://www.npmjs.com/package/koa-helmet)).

<br/><br/>

### Зміст
- [HTTP Strict Transport Security (HSTS)](#http-strict-transport-security-hsts)
- [Public Key Pinning for HTTP (HPKP)](#public-key-pinning-for-http-hpkp)
- [X-Frame-Options](#x-frame-options)
- [X-XSS-Protection](#x-xss-protection)
- [X-Content-Type-Options](#x-content-type-options)
- [Referrer-Policy](#referrer-policy)
- [Expect-CT](#expect-ct)
- [Content-Security-Policy](#content-security-policy)
- [Додаткові ресурси](#додаткові-ресурси)

<br/><br/>

### HTTP Strict Transport Security (HSTS)

HTTP Strict Transport Security (HSTS) — це механізм політики веб-безпеки для захисту веб-сайтів від [атак зниження протоколу](https://en.wikipedia.org/wiki/Downgrade_attack) та [викрадення cookies](https://www.owasp.org/index.php/Session_hijacking_attack). Він дозволяє веб-серверам оголосити, що веб-браузери (або інші відповідні користувацькі агенти) повинні взаємодіяти з ним лише через __безпечні HTTPS з'єднання__, і __ніколи__ через небезпечний протокол HTTP. Політика HSTS реалізується за допомогою заголовка `Strict-Transport-Security` через існуюче HTTPS з'єднання.

Заголовок Strict-Transport-Security приймає значення `max-age` у секундах, щоб сповістити браузер, як довго він повинен отримувати доступ до сайту лише через HTTPS, та значення `includeSubDomains` для застосування правила Strict Transport Security до всіх піддоменів сайту.

Приклад заголовка - Політика HSTS увімкнена на один тиждень, включаючи піддомени
```
Strict-Transport-Security: max-age=2592000; includeSubDomains
```

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hsts)

🔗 [Читати на MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

<br/><br/>

### Public Key Pinning for HTTP (HPKP)

HTTP Public Key Pinning (HPKP) — це механізм безпеки, що дозволяє HTTPS веб-сайтам протистояти імітації зловмисниками за допомогою помилково виданих або іншим чином шахрайських SSL/TLS сертифікатів.

HTTPS веб-сервер надає список хешів публічних ключів, і при наступних з'єднаннях клієнти очікують, що сервер використовуватиме один або кілька з цих публічних ключів у своєму ланцюжку сертифікатів. Обережно використовуючи цю функцію, ви можете значно зменшити ризик атак man-in-the-middle (MITM) та інших проблем з помилковою аутентифікацією для користувачів вашого додатку без надмірного ризику.

Перед впровадженням спочатку слід подивитися на заголовок `Expect-CT` через його покращену гнучкість для відновлення від неправильної конфігурації та інші [переваги](https://groups.google.com/a/chromium.org/forum/m/#!msg/blink-dev/he9tr7p3rZ8/eNMwKPmUBAAJ).

Заголовок Public-Key-Pins приймає 4 значення: значення `pin-sha256` для додавання публічного ключа сертифіката, хешованого алгоритмом SHA256, який може бути доданий кілька разів для різних публічних ключів, значення `max-age`, щоб вказати браузеру, як довго застосовувати правило, значення `includeSubDomains` для застосування цього правила до всіх піддоменів і значення `report-uri` для повідомлення про невдачі валідації pin на вказаний URL.

Приклад заголовка - Політика HPKP увімкнена на один тиждень, включаючи піддомени, повідомлення про помилки на приклад URL і дозвіл двох публічних ключів
```
Public-Key-Pins: pin-sha256="d6qzRu9zOECb90Uez27xWltNsj0e1Md7GkYYkVoZWmM="; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g="; report-uri="http://example.com/pkp-report"; max-age=2592000; includeSubDomains
```

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hpkp)

🔗 [Читати на MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)

<br/><br/>

### X-Frame-Options

Заголовок X-Frame-Options захищає додаток від атак [Clickjacking](https://www.owasp.org/index.php/Clickjacking), оголошуючи політику, чи може ваш додаток бути вбудований в інші (зовнішні) сторінки за допомогою фреймів.

X-Frame-Options дозволяє 3 параметри: параметр `deny` для заборони вбудовування ресурсу загалом, параметр `sameorigin` для дозволу вбудовування ресурсу на тому ж хості/походженні та параметр `allow-from` для вказівки хоста, де дозволено вбудовування ресурсу.

Приклад заголовка - Заборона вбудовування вашого додатку
```
X-Frame-Options: deny
```

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xfo)

🔗 [Читати на MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

<br/><br/>

### X-XSS-Protection

Цей заголовок увімкає фільтр [Cross-site scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)) у вашому браузері.

Він приймає 4 параметри: `0` для вимкнення фільтра, `1` для увімкнення фільтра та автоматичної санітизації сторінки, `mode=block` для увімкнення фільтра та запобігання рендерингу сторінки, якщо виявлено XSS атаку (цей параметр повинен бути доданий до `1` за допомогою крапки з комою), і `report=<domainToReport>` для повідомлення про порушення (цей параметр повинен бути доданий до `1`).

Приклад заголовка - Увімкнути XSS захист і повідомляти про порушення на приклад URL
```
X-XSS-Protection: 1; report=http://example.com/xss-report
```

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp)

🔗 [Читати на OWASP Secure Headers Project](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

<br/><br/>

### X-Content-Type-Options

Встановлення цього заголовка запобігає браузеру [інтерпретувати файли як щось інше](https://en.wikipedia.org/wiki/Content_sniffing), ніж оголошено типом вмісту в HTTP заголовках.

Приклад заголовка - Заборонити Content sniffing
```
X-Content-Type-Options: nosniff
```

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto)

🔗 [Читати на MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)


<br/><br/>

### Referrer-Policy

HTTP заголовок Referrer-Policy керує тим, яка інформація про реферера, надіслана в заголовку `Referer`, повинна бути включена до запитів.

Він дозволяє 8 параметрів: параметр `no-referrer` для повного видалення заголовка `Referer`, параметр `no-referrer-when-downgrade` для видалення заголовка `Referer` при зниженні рівня безпеки, наприклад HTTPS -> HTTP, параметр `origin` для надсилання походження хоста (кореня хоста) як реферера __тільки__, параметр `origin-when-cross-origin` для надсилання повного URL походження при перебуванні на тому ж походженні та надсилання тільки походження хоста __інакше__, параметр `same-origin` для надсилання інформації про реферера тільки для походжень одного сайту та опускання при cross-origin запитах, параметр `strict-origin` для збереження заголовка `Referer` тільки на тому ж рівні безпеки (HTTPS -> HTTPS) та опускання на менш безпечному призначенні, параметр `strict-origin-when-cross-origin` для надсилання повного URL реферера на призначення того ж походження, тільки походження на cross-origin призначення на __тому ж__ рівні безпеки та без реферера на менш безпечному cross-origin призначенні, та параметр `unsafe-url` для надсилання повного реферера на призначення того ж походження або cross-origin.

Приклад заголовка - Повністю видалити заголовок `Referer`
```
Referrer-Policy: no-referrer
```

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#rp)

🔗 [Читати на MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)


<br/><br/>

### Expect-CT

Заголовок Expect-CT використовується сервером для вказівки браузерам оцінювати з'єднання з хостом, що випускає заголовок, на відповідність [Certificate Transparency](https://www.certificate-transparency.org/).

Цей заголовок приймає 3 параметри: параметр `report-uri` для надання URL для повідомлення про невдачі Expect-CT, параметр `enforce` для сигналізування браузеру, що Certificate Transparency повинна бути примусово застосована (а не лише повідомлятися) та відмовляти майбутнім з'єднанням, що порушують Certificate Transparency, і параметр `max-age` для вказівки кількості секунд, протягом яких браузер вважатиме хост відомим хостом Expect-CT.

Приклад заголовка - Примусова Certificate Transparency на тиждень і повідомлення на приклад URL
```
Expect-CT: max-age=2592000, enforce, report-uri="https://example.com/report-cert-transparency"
```

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#ect)


<br/><br/>

### Content-Security-Policy

HTTP заголовок відповіді Content-Security-Policy дозволяє контролювати ресурси, які користувацький агент може завантажувати для даної сторінки. За деякими винятками, політики здебільшого включають вказівку походжень серверів та кінцевих точок скриптів. Це допомагає захиститися від [атак cross-site scripting (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)).

Приклад заголовка - Увімкнути CSP і виконувати скрипти лише з того ж походження
```
Content-Security-Policy: script-src 'self'
```

Існує багато політик, увімкнених за допомогою Content-Security-Policy, які можна знайти на сайтах, на які є посилання нижче.

🔗 [Читати на OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#csp)

🔗 [Читати на MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)


<br/><br/>

### Додаткові ресурси

🔗 [OWASP Secure Headers Project](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers)

🔗 [Node.js Security Checklist (RisingStack)](https://blog.risingstack.com/node-js-security-checklist/)


<br/><br/>

