# 핸들링 되지 않은 promise rejection 잡아내기(catch)

<br/><br/>

### 설명 단락

일반적으로 현대적인 Node.js/Express 어플리케이션 코드는 대부분 promise 내부의 .then 핸들러, 콜백 함수 또는 catch 블록 안에서 실행됩니다. 놀랍게도 개발자가 .catch 를 추가하지 않으면, promise 에서 발생한 오류는 uncaughtException 이벤트 핸들러로 처리되지 않고 사라집니다. 최신버전의 Node 에서는 핸들링되지 않은 reject가 있을때 경고 메시지가 추가됩니다. 이는 발생한 문제를 알아내는데 도움이 되지만, 분명히 에러를 처리하는데 적절한 방법은 아닙니다. 간단한 해결책은 각 promise 체인 호출내에 .catch 를 추가하는 것을 잊지 말고, 집중된 에러 처리기로 리디렉션하는 것입니다. 그러나 이런 개발자 규약으로만 에러 핸들링 전략을 만드는건 조금 취약합니다. 따라서 우아한 fallback 을 사용하고 `process.on(‘unhandledRejection’, callback)` 을 구독하는 것을 적극 추천합니다. 이것은 로컬에서 핸들링되지 않은 모든 promise 에러들의 처리를 보장합니다.

<br/><br/>

### 코드 예: 다음과 같은 에러들은 에러 핸들러에 걸리지 않습니다.(unhandledRejection 제외)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // 이 오류는 그냥 사라집니다.
  if(johnSnow.isAlive == false)
      throw new Error('ahhhh');
});

```

<br/><br/>

### 코드 예: resolve 되지 않거나 reject된 promise 잡아내기

```javascript
process.on('unhandledRejection', (reason, p) => {
  // 곧바로 핸들링 되지 않은 promise rejection을 잡았습니다, 이미 그에 대한 fallback 핸들러가 있기때문입니다. (아래 참고)
  // 그쪽에서 처리하게 넘겨주세요.
  throw reason;
});
process.on('uncaughtException', (error) => {
  // 핸들링되지 않은 에러를 받았습니다, 에러를 처리하고 재시작이 필요한지 결정해야합니다.
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```

<br/><br/>

### 블로그 인용: "당신이 실수할 수 있다면, 언젠간 하게 될겁니다." ("If you can make a mistake, at some point you will")

 블로그 James Nelson 에서

 > 당신의 이해력을 테스트해볼게요. 다음중 콘솔에 오류가 출력될 것으로 예상되는 항목은 무엇입니까?

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

> 당신은 어떨지 모르겠지만, 내 대답은 모두 다 에러가 출력될 것으로 예상됩니다. 그러나 실제로는 많은 모던 자바스크립트 환경에서 오류를 출력하지 않습니다. 인간으로서 가지고 있는 문제는 실수할 수 있다면, 언젠간 하게 된다는 겁니다. 이걸 항상 염두해두고, 분명히 우리는 실수로 인한 상처가 작게 설계해야합니다. 이는 에러처리를 그냥 없어지지 않도록 기본적으로 처리하는 걸 의미합니다.