# 使用 ESLint 和 Prettier


### 比较 ESLint 和 Prettier

如果你使用ESLint格式化代码，它只是给你一个警告，比如这一行太宽（取决于你的`最大长度`设置）。Prettier会自动为你格式化。

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

Source: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### 整合 ESLint 和 Prettier

ESLint和Prettier在代码格式化功能上有重叠, 但它可以很容易通过其他的包来解决，比如 [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), 和 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)。有关他们的差异的更多信息，您可以查看链接 [这里](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
