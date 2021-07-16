# Изменяйте настройки промежуточного программного обеспечения сеанса по умолчанию

<br/><br/>


### Объяснение в один абзац

Многие популярные промежуточные программы для сессий не применяют оптимальные настройки/безопасные настройки файлов cookie из коробки. Изменение этих настроек по умолчанию обеспечивает большую защиту как для пользователя, так и для приложения, уменьшая угрозу таких атак, как перехват сеансов и идентификация сеансов.

Самым распространенным параметром, оставляемым по умолчанию, является `name` сессии - в `express-session` это `connect.sid`. Злоумышленник может использовать эту информацию для определения базовой структуры веб-приложения, а также специфических уязвимостей модуля. Изменение этого значения на значение, отличное от значения по умолчанию, затруднит определение используемого механизма сеанса.

Также в `express-session` опция `cookie.secure` установлена ​​в значение false по умолчанию. Изменение этого параметра на true ограничит передачу файла cookie только по протоколу https, что обеспечивает безопасность от атак типа "человек посередине".

<br/><br/>


### Пример кода: настройка параметров безопасных cookie

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


### Что говорят другие блоггеры

Из [NodeSource блога](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/): 
> ... Express имеет настройки файлов cookie по умолчанию, которые не очень безопасны. Они могут быть затянуты вручную для повышения безопасности - как для приложения, так и для пользователя.*

<br/><br/>
