# Catch unhandled promise rejections

<br/><br/>

### One Paragraph Explainer

일반적으로 최근 Node.js/Express 프로그램 코드는 promises구조로 실행된다. 또는 .then이나 콜백함수나 catch블록으로 실행된다. 놀랍게도, 개발자가 .catch절을 추가하지 않는다면, 에러는 uncaughtException event-handler로 thrown되지 않고 사라져 버린다. 최근 노드 버전은 unhandled rejection pops에 대한 warning을 제공하면서 위험을 알려주고는 있지만, 이것은 적절한 handling방법이 아니다. 가장 명확한 방법은 각 promise 체인 호츨에 .catch구문을 까먹지 않고 중앙 에러 핸들러에 리다이렉트하는 것이다. 그러나, 우리의 에러 핸들링 전락은 다소 무너지기 쉬운 개발자들만의 규율일 뿐이다. 결과적으로 콜백함수와 `process.on(‘unhandledRejection’, callback)`를 사용하는 것이 좋다. 이 방법은 어떤 에러든 local상에서 핸들링되지 않은 promise에러든 대응을 할 수 있다고 보장할 수 있기 때문이다.

https://joshua1988.github.io/web-development/javascript/promise-for-beginners/


<br/><br/>

### Code example: these errors will not get caught by any error handler (except unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // this error will just vanish
  if(johnSnow.isAlive == false)
      throw new Error('ahhhh');
});

```

<br/><br/>

### Code example: Catching unresolved and rejected promises

```javascript
process.on('unhandledRejection', (reason, p) => {
  // I just caught an unhandled promise rejection을 잡을 수 있다. 왜냐하면 이미 (아래)unhandled error를 처리할 수 있게 했기 때문
  throw reason;
});
process.on('uncaughtException', (error) => {
  // 에러를 잡았다. 이제 프로세스를 다시 시작해야하는지 결정만 하면 된다.
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```

<br/><br/>

### Blog Quote: "If you can make a mistake, at some point you will"

 From the blog James Nelson

 > Let’s test your understanding. Which of the following would you expect to print an error to the console?

```javascript
Promise.resolve(‘promised value’).then(() => {
  throw new Error(‘error’);
});

Promise.reject(‘error value’).catch(() => {
  throw new Error(‘error’);
});

new Promise((resolve, reject) => {
  throw new Error(‘error’);
});
```

> 뭐라고 대답했을지는 모르겠지만, 나는 모든 에러가 출력되기를 바란다. 그러나 최신 자바스크립트 환경에서는 어떤 에러도 출력되지 않을 것이다. 사람들은 누구나 실수를 한다. 중요한건, 실수를 최대한 약하게 맞이할 방법을 디자인하는 것과 에러를 무시하지 않고 확실하게 관리하는 것이다.
