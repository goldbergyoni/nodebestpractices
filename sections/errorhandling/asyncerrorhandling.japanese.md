# 非同期エラーハンドリングに Async-Await または promises を使う

### 一段落説明

コールバックはあまりスケールしません。なぜなら、ほとんどのプログラマーはコールバックに馴染みがないからです。コールバックによって、エラーをくまなくチェックすることが強制され、厄介なコードの入れ子構造を扱うことになり、またコードのフローを推測することが困難になります。BlueBird や async、そして Q といった promise ライブラリは、RETURN や THROW を使ってプログラムのフローを制御している標準コードを包み込みます。特にそれらのライブラリは、みなの大好きな try-catch エラーハンドリングスタイルをサポートしており、それぞれの関数においてメインコードをエラー処理と分けて扱うことを可能にしています。

### コード例 – エラーの捕捉に promises を使う

```javascript
return functionA()
  .then(functionB)
  .then(functionC)
  .then(functionD)
  .catch((err) => logger.error(err))
  .then(alwaysExecuteThisFunction)
```


### コード例 - エラーの捕捉に async/await を使う

```javascript
async function executeAsyncTask () {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    return await functionD(valueC);
  }
  catch (err) {
    logger.error(err);
  } finally {
    await alwaysExecuteThisFunction();
  }
}
```

### アンチパターン – コールバックスタイルのエラーハンドリング

<details>
<summary><strong>Javascript</strong></summary>

```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // 渡されたコールバック関数を呼び出してエラーを渡す、といったことをします
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // 渡されたコールバック関数を呼び出してエラーを渡す、といったことをします
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // もうおわかりですよね？
                        }
                    })
                });
            }
        });
    }
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
getData(someParameter, function(err: Error | null, resultA: ResultA) {
  if(err !== null) {
    // 渡されたコールバック関数を呼び出してエラーを渡す、といったことをします
    getMoreData(resultA, function(err: Error | null, resultB: ResultB) {
      if(err !== null) {
        // 渡されたコールバック関数を呼び出してエラーを渡す、といったことをします
        getMoreData(resultB, function(resultC: ResultC) {
          getMoreData(resultC, function(err: Error | null, d: ResultD) {
            if(err !== null) {
              // もうおわかりですよね？
            }
          })
        });
      }
    });
  }
});
```
</details>

### ブログ引用: "We have a problem with promises" (promises には問題がある)

ブログ pouchdb.com より

 > ……そして実際、コールバックはさらに厄介なことをします: 私たちがプログラミング言語において存在して当たり前だと思っているスタックを奪うのです。スタックの無いプログラミングは、まるでブレーキの無い車を運転するようなものです: それがどれくらいあなたにとって必要なものなのか、無くなってみないとわからないでしょう。promises の大事なポイントは、私たちが非同期に足を踏み入れたときに失った言語の基本要素、return、throw、そしてスタックを私たちの元へ返してくれることです。ただし、それらの恩恵を受けるためにも、promises を正しく使う方法を知っておかなければなりません。

### ブログ引用: "The promises method is much more compact" (promises メソッドはよりコンパクトだ)

ブログ gosquared.com より

 > ………その promises メソッドはよりいっそうコンパクトで、明快で、素早く書けます。いかなるオペレーションの中でエラーや例外が起こったとしても、一つの .catch() ハンドラで扱うことができます。すべてのエラーを処理するために単一の場所を持つことは、各処理の段階でいちいちエラーチェックを行うコードを書く必要がないことを意味します。

### ブログ引用: "Promises are native ES6, can be used with generators" (promises はネイティブ ES6 であり、ジェネレーターと一緒に利用できる)

ブログ StrongLoop より

 > ….コールバックはお粗末なエラーハンドリングの層を持っています。プロミスの方が優れています。promises を用いた Express のビルトインエラーハンドリングと結びつき、捕捉されない例外の可能性を大きく下げて下さい。Promises はネイティブ ES6であり generators とともに活用でき、そしてバベルのようなコンパイラを通して async/await のような ES7 での提案となっています。

### ブログ引用: "All those regular flow control constructs you are used to are completely broken" (あなたが慣れ親しんでいる全ての通常のフロー制御構造は、完全に崩壊しています)

ブログ Benno’s より

 > ……非同期なコールバックベースのプログラミングについていえる最高のことのひとつは、基本的にあなたが慣れ親しんでいる全ての通常のフロー制御構造は、完全に崩壊しているということです。しかし、私が最も崩壊していると思った点は、例外の処理です。例外に対処するために、JavaScript はかなり一般的になった try...catch 構造を提供しています。例外の問題は、それらはコールスタック上でエラーをショートカットする素晴らしい方法を提供する一方で、異なるスタックでエラーが起こったときに全く役に立たずに終わるということです...
