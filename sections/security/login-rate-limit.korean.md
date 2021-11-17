# 권한부여 무차별 대입공격을 예방해라

### 한 문단 설명

`/login` 혹은 `/admin` 등 우선순위가 높은 루트들을 레이트 제한 없이 내버려 두면 애플리케이션은 무차별 대입 암호사전 공격에 노출될 수 있다. 요청 제한 전략을 사용함으로써 ip나 유저이름, 혹은 이메일과 같은 body의 파라미터 요청속성들을 기반으로 시도 허용 횟수를 제한하여 해당하는 루트로의 성공적 접근을 방지할 수 있다.

### 코드 예시: 유저이름과 IP 짝, 그리고 같은 IP주소로 총 실패 횟수를 통해 연속적인 승인시도 실패 횟수를 세어보아라.

[rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) npm 패키지를 사용하라.

두 가지 제한사항을 두어라:

1. 첫 번째, 연속적인 실패 시도 횟수를 세어보고 유저이름과 IP쌍을 통해 최대 허용횟수를 10번으로 제한하여라.

2. 두 번째, 하루 100회 실패한 IP 주소를 차단하여라

```javascript
const maxWrongAttemptsByIPperDay = 100;
const maxConsecutiveFailsByUsernameAndIP = 10;

const limiterSlowBruteByIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "login_fail_ip_per_day",
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // 하루 100회의 올바르지 않은 시도 발견 시 하루동안 차단하여라
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "login_fail_consecutive_username_and_ip",
  points: maxConsecutiveFailsByUsernameAndIP,
  duration: 60 * 60 * 24 * 90, // 첫 실패 발생일로부터 90일 간 해당 번호를 저장하여라
  blockDuration: 60 * 60, // 한 시간동안 차단하여라
});
```

다음에서 완전한 예시를 확인하여라 [rate-limiter-flexible package's Wiki](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection).

### 다른 블로거들이 말하길

[Liran Tal](https://leanpub.com/nodejssecurity)이 쓴 핵심적인 Node.js 보안 저서로 부터:

> 무차별 대입공격은 공격자들이 REST의 POST api 엔드포인트 혹은 너가 실행하고자 열어둔 다른 레스트풀한 API들에 유저이름/패스워드 쌍 시리즈를 보내기 위해 차용될 것이다. 이와 같은 사전공격은 직관적이며 쉽게 실행할 수 있다. 그리고 로그인과 관련없는 어떠한 API나 페이지 파트에서 수행될 수 있다.
