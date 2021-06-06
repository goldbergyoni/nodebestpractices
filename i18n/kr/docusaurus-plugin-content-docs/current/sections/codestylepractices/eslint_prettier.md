# ESLint와 Prettier 사용하기

### ESLint와 Prettier 비교하기

만약 당신이 ESLint를 사용해서 이 코드를 포맷한다면, 당신에게 너무 넓다는 경고만 줄 것이다 (당신의 `mas-len` 설정에 의존해). Prettier는 자동적으로 당신을 위해 그것을 포맷할 것이다.

```javascript
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne(), noWayYouGottaBeKiddingMe());
```

```javascript
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne(),
  noWayYouGottaBeKiddingMe()
);
```

출처: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### ESLint와 Prettier 통합시키기

ESLint와 Prettier는 코드 포맷팅 기능에서 겹치지만 [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), 그리고 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)와 같은 다른 패키지들을 사용해 쉽게 결합시킬 수 있다. 그들의 차이점에 대해 더 많은 내용을 보려면, 당신은 [here](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint) 링크를 볼 수 있다.
