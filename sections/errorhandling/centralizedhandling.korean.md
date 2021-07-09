# 에러를 미들웨어에서 처리하지 말고 한군데에서 집중적으로 처리해라

### 한문단 설명

에러 처리를 위한 전용 객체가 없으면 잘못된 처리로 인해 중요한 에러가 숨어있을 가능성이 더 커진다. 예를 들어, 에러 처리 객체는 [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/), 또는 [Raygun](https://raygun.com/))와 같은 모니터링 프로그램에 이벤트를 보내 에러를 가시적으로 만드는 역할을 한다. [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers),와 같은 대부분의 웹 프레임워크는 미들웨어 메커니즘 에러처리를 제공한다. 일반적인 에러 처리 흐름은 다음과 같다: 일부 모듈이 에러를 던진다 -> API 라우터가 에러를 잡는다 -> 에러를 에러 검출을 담당하는 미들웨어(예: Express, KOA)에 전달한다 -> 중앙 에러 처리기가 호출된다 -> 미들웨어는 이 에러가 신뢰할 수 없는 에러인지(작동하지 않음) 알려 앱을 정상적으로 재시작 할 수 있다. Express 미들웨어 내에서 오류를 처리하는 것이 일반적이지만 잘못된 관습이다 – 이렇게 하면 웹 이외의 인터페이스에 발생하는 에러를 해결 할 수 없다.

### 코드 예시 – 일반적인 에러 흐름

```javascript
// DAL layer, we don't handle errors here
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error("Great error explanation comes here", other useful parameters)
});

// API route code, we catch both sync and async errors and forward to the middleware
try {
  customerService.addNew(req.body).then((result) => {
    res.status(200).json(result);
  }).catch((error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```

### 코드 예시 – 전용 객체에서 에러 처리

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async function(err) {
    await logger.logError(err);
    await sendMailToAdminIfCritical;
    await saveInOpsQueueIfCritical;
    await determineIfOperationalError;
  };
}
```

### 코드 예시 – 좋지않은 패턴: 미들웨어에서 에러 처리

```javascript
// middleware handling the error directly, who will handle Cron jobs and testing errors?
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occured', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```

### 블로그 인용: "때로 하위 레벨은 호출자에게 전달하는 것 외에 쓸모있는 일을 할 수 없다"

Joyent 블로그에서 "Node.js 에러 처리" 키워드 1위에 위치했다

> …스택의 여러 레벨에서 동일한 오류를 처리할 수 있다. 이는 하위 레벨 수준에서 에러를 호출자에게 전달하는 것 외에는 쓸모있는 작업을 수행 할 수 없을 때 발생한다. 종종, 최상위 레벨 호출자만이 적절한 응답, 작업을 재시도할지, 사용자에게 에러를 보고할지, 또는 다른 작업을 수행할지를 알 수 있다. 그러나 모든 에러를 최상위 레벨에 보고해야 한다는 의미는 아니다, 왜냐하면 콜백 자체는 어떤 맥락에서 에러가 발생했는지 알 수 없기 때문이다…

### 블로그 인용: "각 에러를 개별적으로 처리하면 엄청난 중복이 발생할 수 있다"

JS Recipes 블로그에서 "Node.js 에러 처리" 키워드 17위에 위치했다

> ……Hackathon Starter api.js 컨트롤러에서만 79개 이상의 오류 객체가 있다. 각 에러를 개별적으로 처리하면 엄청난 중복이 발생할 수 있다. 다음으로 가장 좋은 방법은 모든 에러 처리 로직을 Express 미들웨어에 위임하는 것이다…

### 블로그 인용: "HTTP 에러는 데이터베이스 코드에 포함되지 않는다"

Daily JS 블로그에서 "Node.js 에러 처리" 키워드 14위에 위치했다

> ……에러 객체에 유용한 속성을 설정해야 하지만, 이런 속성은 일관되게 사용해야 한다. 그리고, 스트림을 넘지 마라: HTTP 에러는 데이터베이스 코드에 포함되지 않는다. 또한 브라우저 개발자의 경우, Ajax 에러는 서버와 통신하는 코드가 있지만, 머스테치(Mustache) 템플릿을 처리하는 코드는 아니다…