# Zapobieganie atakom brute-force na autoryzację

### Wyjaśnienie jednym akapitem

Pozostawienie wyżej uprzywilejowanych tras, takich jak `/ login` lub` / admin`, ujawnione bez ograniczenia wyjść, naraża aplikację na ataki słownikowe z użyciem siły brute force. Użycie strategii w celu ograniczenia żądań do takich tras może zapobiec powodzeniu, ograniczając liczbę prób zezwolenia na podstawie właściwości żądania, takiej jak ip, lub parametru treści, takiego jak nazwa użytkownika / adres e-mail.

### Przykład kodu: zliczaj kolejne nieudane próby autoryzacji według nazwy użytkownika i pary IP, i całkowite fails według adresu IP.

Używanie pakietu [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) npm.

Utwórz dwa ograniczniki:
1. Pierwszy zlicza liczbę kolejnych nieudanych prób i dopuszcza maksymalnie 10 według nazwy użytkownika i pary IP.
2. Drugi blokuje adres IP na dzień przy 100 nieudanych próbach dziennie.

```javascript
const maxWrongAttemptsByIPperDay = 100;
const maxConsecutiveFailsByUsernameAndIP = 10;

const limiterSlowBruteByIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_ip_per_day',
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // Block for 1 day, if 100 wrong attempts per day
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_consecutive_username_and_ip',
  points: maxConsecutiveFailsByUsernameAndIP,
  duration: 60 * 60 * 24 * 90, // Store number for 90 days since first fail
  blockDuration: 60 * 60, // Block for 1 hour
});
```

Zobacz pełny przykład na [rate-limiter-flexible package's Wiki](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection).

### Co inni blogerzy mówią

Z książki Essential Node.js Security od [Liran Tal](https://leanpub.com/nodejssecurity):
> Brute-force attacks may be employed by an attacker to send a series of username/password pairs to your REST end-points over POST or another RESTful API that you have opened to implement them. Such a dictionary attack is very straight-forward and easy to execute and may be performed on any other parts of your API or page routing, unrelated to logins.
