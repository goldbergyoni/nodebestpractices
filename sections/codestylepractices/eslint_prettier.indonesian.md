# Menggunakan ESLint and Prettier

### Perbandingan ESLint and Prettier

Jika Anda memformat kode ini menggunakan ESLint, nanti nya akan ada peringatan bahwa ini terlalu besar (tergantung pengaturan `max-len` Anda). Prettier secara otomatis akan meformatnya untuk Anda.

```javascript
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne(),
  noWayYouGottaBeKiddingMe()
);
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

### Mengintegrasikan ESLint dan Prettier

ESLint dan Prettier saling tumpang tindih dalam permformatan kode, tapi akan dapat dengan mudah dikombinasikan dengan menggunakan paket lainnya seperti [prettier-eslint](https://github.com/prettier/prettier-eslint), [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), dan [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier). Untuk informasi lebih lanjut mengenai perbedaannya, Anda bisa mengunjunngi link berikut [here](https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint).
