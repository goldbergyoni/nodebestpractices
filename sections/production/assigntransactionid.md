# 각 로그 문에 '트랜잭션 id'를 할당하라.

<br/><br/>

### 한문단 설명

일반적인 로그는 모든 구성 요소 및 요청의 항목 창고이다. 일부 의심스러운 줄이나 에러가 감지되면, 동일한 특정 흐름에 속하는 다른 줄을 매치하기 어려워진다. (예: 유저 'John'이 무언가를 사려고 시도 했다.) 이는 요청/트랜잭션이 여러 컴퓨터에 걸쳐 있을 수 있는 마이크로서비스 환경에서 더 중요해지고 어려워지게 된다. 동일한 요청으로부터 모든 항목에 고유한 트랜잭션 식별자가 값을 할당해서 문제를 해결하여 한 줄을 감지할 때 id를 복사하고 유사한 트랜잭션 id를 가진 모든 줄을 검색할 수 있다. 그러나, 노드에서 이를 달성하는 것은 모든 요청을 처리하는데 사용되기 때문에 쉽지 않다. 요청 레벨에서 데이터를 그룹화할 수 있는 라이브러리를 사용하는 것을 고려해라. 다음 슬라이드 코드 예시를 참조해라. 다른 마이크로서비스를 호출할 때, 동일한 컨텍스트를 유지하기 위해 "x-transaction-id"와 같은 HTTP 헤더를 사용해서 트랜잭션 ID를 전달한다.

<br/><br/>

### 코드 예시: 일반적인 Express 구성

```javascript
// when receiving a new request, start a new isolated context and set a transaction id. The following example is using the npm library continuation-local-storage to isolate requests

const { createNamespace } = require('continuation-local-storage');
const session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by id');
});

// Now any other service or components can have access to the contextual, per-request, data
class someService {
    getById(id) {
        logger.info('Starting to get something by id');
        // other logic comes here
    }
}

// The logger can now append the transaction id to each entry so that entries from the same request will have the same value
class logger {
    info (message) {
        console.log(`${message} ${session.get('transactionId')}`);
    }
}
```
