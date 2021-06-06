# ESLint と Prettier を使う


### ESLint と Prettier の比較

以下のコードを ESLint でフォーマットすると、幅が広すぎるという警告が表示されます( `max-len` の設定によります) 。Prettier はそれを自動的にフォーマットしてくれます。

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

ソース: [https://github.com/prettier/prettier-eslint/issues/101](https://github.com/prettier/prettier-eslint/issues/101)

### ESLint と Prettier の統合

ESLint と Prettier はコードフォーマット機能で重複していますが、[prettier-eslint](https://github.com/prettier/prettier-eslint) や [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)、[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) のような他のパッケージを使うことで簡単に組み合わせることができます。それぞれの違いについての詳細は、リンク先の[こちら](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint)をご覧ください。
