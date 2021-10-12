[✔]: assets/images/checkbox-small-blue.png

# Node.js 最佳實踐

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices" />
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2082%20Best%20Practices-blue.svg" alt="82 items"/> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Jun%205%202019-green.svg" alt="Last update: June 5, 2019"/> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2012.4.0%20LTS-brightgreen.svg" alt="Updated for Node 12.4.0 LTS"/>
</div>

<br/>

 [![nodepractices](./assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Follow us on Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)
 <br/>

# 歡迎! 首先您應該知道的三件事情:
**1. 當您讀到這裡，實際上您讀了很多關於Node.js的優秀文章 -** 這是對Node.js最佳實踐中排名最高的内容的總結和分享

**2. 這裡是最大的彙整，且每周都在成長 -** 目前，呈現了超過80個最佳實踐，樣式指南，架構建議。每天都有新的issue和PR被新增，以使這本線上書籍不斷更新。我們很樂於見到您能在這裡做出貢獻，不管是修正一些原始碼的錯誤，或是提出絕佳的新想法。請查看我們的[writing guidelines here](./.operations/writing-guidelines.md)

**3. 大多的最佳實踐有額外資訊 -** 大部分的最佳實踐項目的旁邊，您將發現 **🔗Read More** 連結，它將呈現给您原始碼範例，部落格引用和更多資訊

<br/><br/>

## [目錄](#table-of-contents)

1. [專案架構實踐 (5) ](#1-project-structure-practices)
2. [錯誤處理實踐 (11) ](#2-error-handling-practices)
3. [撰寫風格實踐 (12) ](#3-code-style-practices)
4. [測試和總體品質實踐 (8) ](#4-testing-and-overall-quality-practices)
5. [進入產品階段實踐 (16) ](#5-going-to-production-practices)
6. [安全性實踐(23)](#6-security-best-practices)
7. [效能實踐 (2) (進展中 ✍️)](#7-draft-performance-best-practices)
8. [Docker 實踐 (15)](#8-docker-best-practices)


<br/><br/>

# `1. 專案架構實踐`

## ![✔] 1.1 將解決方案元件化

 **TL;DR:** 大型專案中，最大的隱患就是要維護一個龐大的，含有幾百個相依套件 - 當開發者準備加入一個新的功能時，這麼一個龐然大物勢必拖慢了開發效率。反之，把您的程式碼元件化，每一個元件有它自己的資料架和專用函式庫，並且確保每一個元件小而簡單。查看正確的專案架構範例請造訪下面的「更多」連結。

**否則:** 當撰寫新功能的開發者逐步意識到他所調整後的影響，並擔心會破壞其他相依元件 - 部署會變得更慢，風險更大。當所有商業邏輯沒有被分開，這也會被認為很難擴充。

🔗 [**更多: 组件结构**](./sections/projectstructre/breakintcomponents.chinese.md)

<br/><br/>

## ![✔] 1.2 分層設計元件，將網路層保持在特定範圍內

**TL;DR:** 每個元件都應該包含"層級" - 網路、邏輯和存取數據的原始碼的專用對象。這不僅是對關注點的簡潔分離，而且也大大簡化了系統的模擬和測試。雖然這是一個非常常見的模式，但API開發者傾向於通過將Web層對象（例如Express req, res）傳遞給商業邏輯和數據層來混合各層 - 這使得你的應用程序依賴於特定的Web框架，並只能由其訪問。

**否則:** 混合了網路對象和其他層的應用程式無法被測試、CRON jobs、消息隊列的觸發器等。


🔗 [**更多: 應用分層**](./sections/projectstructre/createlayers.chinese.md)

<br/><br/>

## ![✔] 1.3 將通用函式庫包裝成 npm 套件

**TL;DR:** 在一個構成大型代碼庫的大型應用中，跨領域的實用程式，如記錄器、加密等，應該將其包裝起來，並作為私有的npm包公開。這樣就可以在多個函式庫和專案中共享它們。

**否則:** 您將不得不重造部署和相異的輪子

🔗 [**更多: 透過需求來構建**](./sections/projectstructre/wraputilities.chinese.md)

<br/><br/>

## ![✔] 1.4 將 Express 'app' and 'server' 拆分

**TL;DR:** 避免定義整個[Express](https://expressjs.com/)應用程式在一個單獨的大文件裡， 這是一個不好的習慣 - 拆分您的 'Express' 定義至少在兩個文件中： API宣告(app.js) 和 網路相關(WWW)。對於更好的結構，是把你的API宣告放在元件中。

**否則:** 您的API將只能透過HTTP的呼叫進行測試（慢，並且很難產生測試覆蓋報告）。維護一個有著上百行原始碼的文件也不是一件令人開心的事情。

🔗 [**更多: 將 Express 'app' and 'server' 拆分**](./sections/projectstructre/separateexpress.chinese.md)

<br/><br/>

## ![✔] 1.5 使用易於設定環境變數，安全和分級的設定

**TL;DR:** 一個完美無瑕的配置設定應該確保（a）密鑰可以從文件和環境變量中讀取（b）秘密被保存在已提交的原始碼之外（c）配置是分層的，更容易找到。有一些套件包可以幫助勾選其中的大部分方框，如[rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), and [convict](https://www.npmjs.com/package/convict)。


**否則:** 不能滿足任意的配置要求將會使開發，維運團隊，或者兩者，易於陷入泥沼。

🔗 [**更多: 配置最佳實踐**](./sections/projectstructre/configguide.chinese.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `2. 錯誤處理實踐`

## ![✔] 2.1  使用 Async-Await 和 promises 用於異步錯誤處理

**TL;DR:** 使用 `callback` 的方式處理異步錯誤可能是導致災難的最快的方式(a.k.a the pyramid of doom)。對您的程式碼来說，最好的禮物就是使用規範的promise函式庫或async-await来替代，這會使程式更加簡潔以及熟悉，就如try-catch一樣。

**否則:** Node.js `callback` 特性, function(err, response), 是導致不可維護程式的一個必然的方式。究其原因，是由於混合了隨意的錯誤處理代碼，臃腫的内嵌，鱉腳的設計模式。

🔗 [**更多: 避免 `callback` **](./sections/errorhandling/asyncerrorhandling.chinese.md)

<br/><br/>

## ![✔] 2.2 僅使用内建的錯誤物件

**TL;DR:** 很多人使用字串類型或一些自定義類型來拋出錯誤 - 這會導致錯誤處理邏輯和模組間的調用複雜化。是否您reject一個promise，抛出異常或發出(emit)錯誤 - 使用内建的錯誤對象將會增加設計一致性，並防止資訊的遺失。有一個規則 `no-throw-literal`，會在`ESLint` 中進行嚴謹確認 (雖然在使用 `Typescript` 的時候他有一些可以透過設定 `@typescript-eslint/no-throw-literal` 被解決的[限制](https://eslint.org/docs/rules/no-throw-literal)存在)

**否則:** 調用某些元件時，將不確定會返回哪種錯誤類型 - 這使得正確的錯誤處理變得更加困難。更糟糕的情况是，使用自定義类型來描述錯誤，可能會導致重要的錯誤資訊遺失，比如stack trace！

🔗 [**更多: 使用内建錯誤物件**](./sections/errorhandling/useonlythebuiltinerror.chinese.md)

<br/><br/>

## ![✔] 2.3 區分執行錯誤和程式設計錯誤

**TL;DR:** 執行錯誤 (例如, API接受到一個無效的輸入) 指的是一些已知情境下的錯誤，這類錯誤的影響已經完全被理解，並能被考慮周全地處理掉。同時，程式設計錯誤 (例如，嘗試讀取未定義的變數) 指的是未知的程式問題，影響到應用程式(application)的重新啟動。

**否則:** 當一個錯誤產生的時候，您總是得重新啟動應用程式(application)，但為什麼要讓 ~5000 個在線用戶，僅僅是因為一個細微的，可以預測的，運行時的錯誤，而不能使用呢？相反的方案，也不完美 – 當未知的問題 (程式問題) 產生的時後，使應用程式(application)依舊可以使用，可能導致不可預測的行為。區分兩者會使處理更有技巧，並在給定的上下文中找出適當的決策。

🔗 [**更多: 區分執行錯誤和程式設計錯誤**](./sections/errorhandling/operationalvsprogrammererror.chinese.md)

<br/><br/>

## ![✔] 2.4 集中處理錯誤，不要在Express中介層(middleware)中處理錯誤

**TL;DR:** 錯誤處理邏輯，例如給管理員的郵件和日志，應該被封裝在一個專門的、集中的物件中，當有錯誤出現時，所有的端點 (例如: Express中介層(middleware)、cron jobs、單元測試) 都會調用這個物件。

**否則:** 錯誤處理的邏輯不放在一起將會導致程式碼重物和非常可能不妥當的錯誤處理。

🔗 [**更多: 集中处理錯誤**](./sections/errorhandling/centralizedhandling.chinese.md)

<br/><br/>

## ![✔] 2.5 對API錯誤使用 Swagger 或是 GraphQL 文件化

**TL;DR:** 讓你的API使用者知道會回傳哪種錯誤，這樣他们就能完全的處理這些錯誤，而不至於系統崩潰。對於 RESTful APIs 通常使用文件框架像是 Swagger 來完成。如果你是使用 GraphQL 你可以利用 schema 和 comments。

**否則:** 任何一個API客戶端可能會導致崩潰並重新啟動，只因為它收到了一個它無法處理的錯誤。注意：你的API的使用者可能是你 (這在微服務環境中非常典型)。

🔗 [**更多: 對API錯誤使用 Swagger 或是 GraphQL 文件化**](./sections/errorhandling/documentingusingswagger.chinese.md)

<br/><br/>

## ![✔] 2.6 當特殊情況發生時，優雅地關閉服務

**TL;DR:** 當一個未知的錯誤發生時 (開發者錯誤，見最佳實踐2.3) - 應用程序的健康性存在不確定性。通常的做法是，使用像 [Forever](https://www.npmjs.com/package/forever) 或是 [PM2](http://pm2.keymetrics.io/) 這樣的流程管理工具小心翼翼地重新啟動流程。

**否則:** 當一個不熟悉的異常發生時，一些物件可能處於故障狀態 (例如一個全局使用的事件觸發器，由於某些內部故障而不再觸發事件)，所有未來的請求都可能失敗或表現得很異常。

🔗 [**更多: 停掉服務**](./sections/errorhandling/shuttingtheprocess.chinese.md)

<br/><br/>

## ![✔] 2.7 使用一個成熟的日誌工具提高錯誤的可見性

**TL;DR:** 一系列成熟的日誌工具，比如 [Pino](https://github.com/pinojs/pino) 或是 [Log4js](https://www.npmjs.com/package/log4js)，會加速錯誤的發現和理解。放棄console.log吧。

**否則:** 在沒有查詢工具或像樣的日志查看器的情況下，略過console.logs或手動查看混亂的文本文件可能會讓你在工作中忙到很晚。

🔗 [**更多: 使用好用的日誌工具**](./sections/errorhandling/usematurelogger.chinese.md)

<br/><br/>

## ![✔] 2.8 使用你最喜歡的測試框架測試錯誤流程

**TL;DR:** 無論是專業的自動化QA還是普通的手動開發者測試 - 確保你的程式碼不僅能滿足積極的情境，還能處理並回傳正確的錯誤。Mocha和Chai等測試框架可以輕松地處理這個問題 (見 "Gist popup" 中的程式範例)

**否則:** 如果沒有測試，無論是自動還是手動，你都不能依靠你的代碼來返回正確的錯誤。沒有有意義的錯誤 - 等於沒做"錯誤處理"

🔗 [**更多: 測試錯誤流程**](./sections/errorhandling/testingerrorflows.chinese.md)

<br/><br/>

## ![✔] 2.9 使用APM產品發現錯誤和當機時間

**TL;DR:** 監測和性能產品 (又稱APM) 主動測量你的程式庫或API，因此它們可以自動凸顯出你所忽略的錯誤、崩潰和緩慢部分。

**否則:** 你可能會花很大的精力去測量API的性能和停機時間，但你可能永遠不會知道在真實場景(real-world)的情況下，哪些程式是你最慢的部分，以及這些是如何影響用戶體驗的。

🔗 [**更多: 使用APM產品**](./sections/errorhandling/apmproducts.chinese.md)

<br/><br/>

## ![✔] 2.10 捕捉未處理的promise rejections

**TL;DR:** 任何在 promise 中拋出的異常都會被吞噬和丟棄，除非開發者沒有忘記且明確地處理它。即使你的程式已經訂閱了(subscribed) `process.uncaughtException` ! 通過注冊到事件 `process.unhandledRejection` 來克服這個問題。

**否則:** 您的錯誤將被回收，無跡可尋。毫無懸念。

🔗 [**更多: 捕捉未處理的promise rejection**](./sections/errorhandling/catchunhandledpromiserejection.chinese.md)

<br/><br/>

## ![✔] 2.11 快速查錯，驗證參數使用一個專門的套件

**TL;DR:** Assert API 輸入藉此避免討厭的bug，這些bug以後更難追蹤。驗證程式通常很繁瑣，除非你使用一個非常酷的套件，如 [ajv](https://www.npmjs.com/package/ajv) 和 [Joi](https://www.npmjs.com/package/joi)

**否則:** 想一下這個情況 - 你的函數期望一個數字參數 "Discount"，而調用者忘記了傳遞這個參數，後來，你的程式檢查是否Discount!=0 (允許的折扣金額大於0)，那麽它將允許用戶享受折扣。OMG，真是個討厭的錯誤。有fu了嗎？

🔗 [**更多: 快速查錯**](./sections/errorhandling/failfast.chinese.md)

<br/><br/>

## ![✔] 2.12 始終在回傳之前 await promise，以避免出現部分 stacktrace

**TL;DR:** 當回傳一個 `promise` 時，一定要做 `return await` ，以獲得完整的 `stacktrace` 。如果一個
函式回傳一個 `promise` ，該函式必須被聲明為 `async function` ，並在回傳前明確地
在回傳 `promise` 之前 `await promise`

**Otherwise:** 回傳一個沒有 `await promise` 的函式不會出現在 `stacktrace` 中。
這種缺失的框架可能會使對導致錯誤的流程的理解變得複雜。
特別是如果異常行為的原因是在有問題的函式中

🔗 [**Read More: 回傳 promises**](./sections/errorhandling/returningpromises.md)

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `3. 撰寫風格實踐`

## ![✔] 3.1 使用ESLint

**TL;DR:** [ESLint](https://eslint.org)是檢查可能的代碼錯誤和修復撰寫風格的業界標準，不僅可以識別細微的間距問題，還可以檢測嚴重的反模式(anti-patterns)程式碼，如開發人員拋出的錯誤沒有分類。雖然ESLint可以自動修復撰寫風格，但其他工具如 [prettier](https://www.npmjs.com/package/prettier) 和 [beautify](https://www.npmjs.com/package/js-beautify) 在格式化修復方面更加強大，並與ESLint同時運作。

**否則:** 開發人員將專注於繁瑣的間距和行寬問題，時間可能被浪費在過度考慮各種撰寫風格上。

<br/><br/>

## ![✔] 3.2 Node.js特定的插件

**TL;DR:** 除了僅僅涉及 vanilla JS 的 ESLint 標準規則，加入 Node 相關的插件，比如[eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**否則:** 許多錯誤的Node.js設計模式可能在檢測下逃生。例如，開發人員可能需要某些文件，把一個變數作為路徑名 (variableAsPath) ，這會導致攻擊者可以執行任何JS程式。Node.JS linters可以檢測這類模式，並提早預警。

<br/><br/>

## ![✔] 3.3 在同一行上開始一個區塊(Codeblock)的大括號

**TL;DR:** 區塊(Codeblock)的開頭大括號應與開頭語句在同一行中

### 範例程式
```javascript
  // 建議
  function someFunction() {
    // code block
  }

  // 避免
  function someFunction()
  {
    // code block
  }
```

**否則:** 不遵守這項最佳實踐可能導致意外的结果，在Stackoverflow的討論中可以看到，如下：

🔗 [**更多:** "Why does a results vary based on curly brace placement?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 不要忘記分號

無論你是否使用分號來分隔你的語句，了解不適當的斷行或自動分號插入的常見陷阱，將有助於你消除基本的語法錯誤。

**TL;DR:** 使用ESLint來獲得對分離問題的認識。[Prettier](https://prettier.io/) 或 [Standardjs](https://standardjs.com/)可以自動解決這些問題。

**否則:** 正如在上一節中所看到的，JavaScript的解釋器會在沒有分號的情況下自動在語句的末尾加上分號，或者認為語句在應該結束的地方沒有結束，這可能會導致一些不想要的結果。你可以使用賦值，避免使用立即調用的函數表達式，以防止大多數意外的錯誤。

### Code example

```javascript
// Do
function doThing() {
    // ...
}

doThing()

// Do

const items = [1, 2, 3]
items.forEach(console.log)

// Avoid — throws exception
const m = new Map()
const a = [1,2,3]
[...m.values()].forEach(console.log)
> [...m.values()].forEach(console.log)
>  ^^^
> SyntaxError: Unexpected token ...

// Avoid — throws exception
const count = 2 // it tries to run 2(), but 2 is not a function
(function doSomething() {
  // do something amazing
}())
// put a semicolon before the immediate invoked function, after the const definition, save the return value of the anonymous function to a variable or avoid IIFEs altogether
```

🔗 [**Read more:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**Read more:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 命名您的函數

**TL;DR:** 命名所有的函數，包括閉包(closures)和回調(callbacks)。避免使用匿名函數。這在對 Node 應用程式進行分析時特別有用。命名所有的函數將允許你在檢查記憶體快照時輕鬆地了解你在看什麽。

**否則:** 使用 core dump (記憶體快照) 調試產品(production)的問題可能會變得具有挑戰性，因為你注意到匿名函數消耗大量的記憶體

<br/><br/>

## ![✔] 3.6 使用變數、常數、函數和class的命名慣例

**TL;DR:** 在命名常數、變數和函數時使用**_lowerCamelCase_**，在命名class時使用**_UpperCamelCase_** (也是大寫的第一個字母)。這將幫助你輕鬆區分普通變數/函數和需要實例化的class。使用描述性的名字，但盡量保持簡短

**否則:** JavaScript是世界上唯一一種允許直接調用構造函數 ("Class") 而不需要先將其實例化的語言。因此，"Class" 和函數建構子(function-constructors)是以UpperCamelCase開頭來區分的。

### 3.6 範例程式

```javascript
// class 我們使用 UpperCamelCase 命名
class SomeClassExample {}

// 針對常數我們使用 lowerCamelCase 命名
const config = {
  key: "value",
};

// 針對變數和函數我們使用 lowerCamelCase 命名
let someVariableExample = "value";
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 使用const優於let，廢棄var

**TL;DR:** 使用 "const" 代表著一旦變數被賦值，它就不能被重新賦值。傾向於使用`const`將幫助你不被誘惑於將同一個變數用於不同的用途，並使你的程式碼更加清晰。如果一個變數需要被重新賦值，例如在for循環中，使用`let`來宣告它。`let`的另一個重要方面是，用它宣告的變數只在定義它的範圍內可用。`var`是函數作用域，不是塊作用域，而且[不應該在ES6中使用](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70)，現在你有`const`和`let`可以使用了。

**否則:** 當變數經常變換的時候，除錯變得更加困難

🔗 [**更多: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 先require, 而不是在函數内

**TL;DR:** 在每個文件的起始位置，在任何函數的前面和外部require模組(module)。這種簡單的最佳實踐，不僅能幫助您輕鬆快速地在文件頂部辨別出相依關係，而且避免了一些潛在的問題。

**否則:** 在Node.js中，require 是同步運行的。如果從函數中調用它們，它可能會阻塞其他請求，在更關鍵的時間得到處理。另外，如果所require的模組(module)或它自己的任何相依套件拋出錯誤並使伺服器崩潰，最好盡快查明它，如果該模組(module)在函數中require的，則可能不是這樣的情況。

<br/><br/>

## ![✔] 3.9 require 資料夾，而不是文件

**TL;DR:** 當在一個資料夾中開發一個模組(module)/函式庫(library)時，放置一個index.js文件，暴露模塊的內部結構，這樣每個消費者都會通過它。這可以作為你的模組(module)的 "接口"，並在不破壞合同的情況下減輕未來的變化。

**否則:** 改變文件的內部結構或檔名可能會破壞與客戶的接口。

### 3.9 範例程式
```javascript
// 建議
module.exports.SMSProvider = require('./SMSProvider');
module.exports.SMSNumberResolver = require('./SMSNumberResolver');

// 避免
module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>


## ![✔] 3.10 使用 `===` 運算子

**TL;DR:** 對比弱等於 `==`，優先使用嚴格的全等於 `===` 。`==`將在它們轉換為普通類型後比叫兩個變數。在 `===` 中沒有類型轉換，並且兩個變數必須是相同的類型。

**否則:** 與 `==` 操作符比較，不相等的變數可能會返回true。

### 3.10 範例程式
```javascript
"" == "0"; // false
0 == ""; // true
0 == "0"; // true

false == "false"; // false
false == "0"; // true

false == undefined; // false
false == null; // false
null == undefined; // true

" \t\r\n " == 0; // true
```

如果使用`===`， 上面所有判斷都將回傳 false。

<br/><br/>

## ![✔] 3.11 使用 Async Await, 避免使用 callback

**TL;DR:** Node 8 LTS現已全面支援異步等待(async-await)。這是一種新的方式處理異步請求，取代 callbacks 和 promise 。Async-await 是非阻塞的，它使異步程式看起來像是同步的。您可以給你的程式的最好的禮物是用 async-await 提供了一個更緊湊的，熟悉的，類似 try catch 的代碼語法。

**否則:** 使用 callbacks 的方式處理異步錯誤可能是陷入困境最快的方式 - 這種方式必須面對不停地檢測錯誤，處理彆扭的巢狀程式，難以推理程式流程。

🔗[**更多:** async await 1.0 指引](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 使用 (=>) 箭頭函式

**TL;DR:** 盡管使用 async-await 和避免方法作為參數是被推薦的, 但當處理那些接受promise和 callbacks 的老的API的時候 - 箭頭函式使程式結構更加緊湊，並保持了根方法上的語義上下文 (例如 'this')。

**否則:** 更長的程式碼 (在ES5方法中) 更易於產生缺陷，並且讀起來很是笨重。

🔗 [**更多: 這是擁抱箭頭函式的時刻**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>


# `4. 測試和總體品質實踐`

## ![✔] 4.1 至少，寫個API (元件 (component)) 測試

**TL;DR:** 大多數專案只是因為時程太短而沒有進行任何自動化測試，或者「測試專案」失控而正被遺棄。因此，優先從API測試開始，這是最簡單的撰寫和提供比單元測試更多覆蓋率的事情(你甚至可能不需要撰寫任何程式而進行API測試，像[Postman](https://www.getpostman.com/))。之後，如果您有更多的資源和時間，繼續使用高級測試類型，如單元測試、DB測試、性能測試等。

**否則:** 您可能需要花很長時間編寫單元測試，才發現只有20%的系統覆蓋率。

<br/><br/>

## ![✔] 4.2 在每個測試名稱中包含3個部分

**TL;DR:** 讓測試在需求層面上說話，這樣對不熟悉程式內部的QA工程師和開發人員來說也是不言自明的。在測試名稱中說明：什麽是被測試的 (被測單元)、在什麽情況下、預期結果是什麽。

**Otherwise:** 一個部署剛剛失敗，一個名為 "添加產品 "的測試失敗。這樣你知道哪裡故障了？

🔗 [**Read More: 在每個測試名稱中包含3個部分**](./sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 按AAA模式進行結構測試

**TL;DR:** 用3個分開的部分來組織你的測試。安排 (Arrange) ，行動 (Act) 和斷言 (Assert) **AAA**。第一部分包括測試設置，然後是被測單元的執行，最後是斷言階段。遵循這個結構可以保證讀者不花腦筋去理解測試計劃

**Otherwise:** 你不僅會每天花很長的時間來理解主要程式，而且現在本應是一天中最簡單的部分 (測試) 也讓你的大腦捉襟見肘。

🔗 [**Read More: 按AAA模式進行結構測試**](./sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 使用一個linter檢測程式碼問題

**TL;DR:** 使用程式碼linter檢查基本品質並及早檢測反模式(anti-patterns)。在任何測試之前執行它, 並將其添加為提交前的git-hook, 以最小化審查和更正任何問題所需的時間。也可在[Section 3](https://github.com/goldbergyoni/nodebestpractices#3-code-style-practices)中查閱撰寫風格實踐

**否則:** 您可能讓一些反模式(anti-patterns)和易受攻擊的程式碼傳遞到您的生產環境中。


<br/><br/>

## ![✔] 4.5 避免全域測試 fixtures 和 seeds ，按每個測試需求添加數據

**TL;DR:** 為了防止測試耦合和容易推理測試流程，每個測試都應該添加和作用於它自己的一組DB數據。每當一個測試需要拉動或假設一些DB數據的存在 - 它必須明確地添加該數據，避免任何突變影響其他記錄。

**Otherwise:** 考慮這樣一種情況：由於測試失敗，部署被中止，團隊現在要花費寶貴的調查時間，最後得出一個可悲的結論：系統運行良好，但測試相互干擾，破壞了部署上線。

🔗 [**Read More: 避免全域測試 fixtures**](./sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 经常检查易受攻击的依赖

**TL;DR:** 即使是那些最有名的依賴模塊，比如Express，也有已知的漏洞。使用社區和商業工具，比如 🔗 [npm audit](https://docs.npmjs.com/cli/audit) ，集成在您的CI平台上，在每一次構建的時候都會被調用，這樣可以很容易地解決漏洞問題。

**否則:** 在沒有專用工具的情況下，使程式碼清除漏洞，需要不斷地跟蹤有關新威脅的在線出版物，相當繁瑣。

<br/><br/>

## ![✔] 4.7 測試標簽化

**TL;DR:**  不同的測試必須運行在不同的情景：quick smoke，IO-less，當開發者保存或提交一個文件，測試應該啟動；完整的端到端的測試通常運行在一個新的pull request被提交之後，等等。這可以通過對測試用例設置標簽，比如關鍵字像#cold #api #sanity，來完成。這樣您可以對您的測試集進行grep，調用需要的子集合。例如，這就是您通過[Mocha](https://mochajs.org/)僅僅調用sanity測試集所需要做的：mocha --grep 'sanity'。

**否則:** 執行所有的測試，包括執行資料庫查詢的幾十個測試，任何時候開發者進行小的改動都可能很慢，這使得開發者不願意進行測試。

<br/><br/>

## ![✔] 4.8 檢查測試覆蓋率，它有助於識別錯誤的測試模式

**TL;DR:** 代碼覆蓋工具比如 [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc)，很好用有3個原因：它是免費的(獲得這份報告不需要任何開銷)，它有助於確定測試覆蓋率降低的部分，以及最後但非最不重要的是它指出了測試中的不匹配：通過查看顏色標記的程式碼覆蓋報告您可以注意到，例如，從來不會被測到的程式碼片段像catch語句(即測試只是調用正確的路徑，而不調用應用程式發生錯誤時的行為)。如果覆蓋率低於某個閾值，則將其設置為失敗的構建。

**否則:** 當你的大部分代碼沒有被測試覆蓋時，就不會有任何自動化的度量化數據告訴你了。

<br/><br/>

## ![✔] 4.9 檢查過期的依賴包

**TL;DR:** 使用您的首選工具 (例如 `npm outdated` or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) 來檢查已安裝的過期相依套件，將此檢查注入您的 CI 管道(pipeline)，甚至在嚴重的情況下使構建失敗。例如，當一個已安裝的相依套件落後5個版本時 (例如:本地版本是1.3.1 的, 存儲庫(repository)版本是1.3.8 的)，或者它被其作者標記為已棄用，可能會出現嚴重的情況 - 停掉這次構建並防止部署此版本。

**否則:** 您的生產環境將執行已被其作者明確標記為有風險的相依套件

<br/><br/>

## ![✔] 4.10 對於e2e testing，使用docker-compose

**TL;DR:** 包括實時數據的端到端 (e2e) 測試曾經是CI過程中最薄弱的環節，因為它依賴於DB等多個重度服務。使用一個盡可能接近真實生產環境的環境，如a-continue (這里錯過了-continue，需要內容。從**否則**條款來看，這應該提到docker-compose)


**否則:** 沒有docker-compose，團隊必須維護一個測試數據庫在每一個測試環境上，包含開發機器，保持所有數據同步，這樣測試結果不會因環境不同而不同。

<br/><br/>

## ![✔] 4.11 使用靜態分析工具定期進行重構

**TL;DR:** 使用靜態分析工具有助於通過提供客觀的方法來提高程式碼品質，並保持你的程式碼可維護性。你可以將靜態分析工具添加到你的CI構建中，當它發現程式碼有異味時就會失效。與普通的提示相比，它的主要賣點是能夠在多個文件的背景下檢查品質 (如檢測重覆)，執行高級分析(如程式碼複雜性)，並追蹤程式碼問題的歷史和進展。你可以使用的兩個工具的例子是[Sonarqube](https://www.sonarqube.org/) (2,600+ [star](https://github.com/SonarSource/sonarqube))和[Code Climate](https://codeclimate.com/) (1,500+ [star](https://github.com/codeclimate/codeclimate)) 。

**Otherwise:** 由於程式碼品質差，錯誤和性能將永遠是一個問題，任何閃亮的新套件或最先進的功能都無法解決這個問題。

🔗 [**Read More: 重構!**](./sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 仔細挑選您的持續集成（CI）平台

**TL;DR:** 您的持續集成平台 (CICD) 將集成各種品質工具 (如測試、lint)，所以它應該是一個充滿活力的生態系統，包含各種插件。[jenkins](https://jenkins.io/)曾經是許多項目的默認選項，因為它有最大的社區，同時也是一個非常強大的平台，這樣的代價是要求一個陡峭的學習曲線。如今，使用SaaS工具，比如[CircleCI](https://circleci.com)及其他，安裝一套CI解決方案，相對是一件容易的事情。這些工具允許構建靈活的CI管道(pipeline)，而無需管理整個基礎設施。最終，這是在穩健性和速度之間的權衡 - 謹慎選擇你的一方

**否則:** 一旦您需要一些進一步的客製化，選擇一些細分市場供應商可能會讓您停滯不前。另一方面，伴隨著jenkins，可能會在基礎設施設置上浪費寶貴的時間。

🔗 [**更多: 挑選 CI 平台**](./sections/testingandquality/citools.chinese.md)

<br/><br/>

## ![✔] 4.13 隔離測試你的中間件

**TL;DR:** 當一個中間件擁有一些跨越許多請求的巨大邏輯時，值得在不喚醒整個Web框架的情況下對其進行隔離測試。這可以通過存根和監視 {req, res, next} 物件來輕鬆實現

**否則:** 在 Express middleware 有 bug === 大多數或者所有請求有 bug

🔗 [**Read More: 隔離測試你的中間件**](./sections/testingandquality/test-middlewares.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `5. 進入產品階段實踐`

## ![✔] 5.1. 监控!

**TL;DR:** 监控是一种在顾客之前發現问题的游戏 – 显然这应该被赋予前所未有的重要性。考虑从定义你必须遵循的基本度量标准开始（我的建议在里面），到检查附加的花哨特性并选择解决所有问题的解决方案。市场已经淹没其中。点击下面的 ‘The Gist’ ，了解解决方案的概述。

**否則:** 錯誤 === 失望的客户. 非常简单.


🔗 [**更多: 监控!**](./sections/production/monitoring.chinese.md)

<br/><br/>

## ![✔] 5.2. 使用智能日志增加透明度

**TL;DR:** 日志可以是调试语句的一个不能说话的仓库，或者表述应用运行过程的一个漂亮仪表板的驱动。从第1天计划您的日志平台：如何收集、存储和分析日志，以确保所需信息（例如，錯誤率、通过服务和服务器等完成整个事务）都能被提取出来。

**否則:** 您最终像是面对一个黑盒，不知道发生了什么事情，然后你开始重新写日志语句添加额外的信息。


🔗 [**更多: 使用智能日志增加透明度**](./sections/production/smartlogging.chinese.md)

<br/><br/>

## ![✔] 5.3. 委托可能的一切（例如：gzip，SSL）给反向代理

**TL;DR:** Node处理CPU密集型任务，如gzipping，SSL termination等，表现糟糕。相反，使用一个 ‘真正’ 的中间件服务像Nginx，HAProxy或者云供应商的服务。

**否則:** 可怜的单线程Node将不幸地忙于处理网络任务，而不是处理应用程序核心，性能会相应降低。


🔗 [**更多: 委托可能的一切（例如：gzip，SSL）给反向代理**](./sections/production/delegatetoproxy.chinese.md)

<br/><br/>

## ![✔] 5.4. 锁住依赖

**TL;DR:** 您的代码必须在所有的环境中是相同的，但是令人惊讶的是，NPM默认情况下会让依赖在不同环境下发生偏移 – 当在不同的环境中安装包的时候，它试图拿包的最新版本。克服这种问题可以利用NPM配置文件， .npmrc，告诉每个环境保存准确的（不是最新的）包的版本。另外，对于更精细的控制，使用NPM “shrinkwrap”。*更新：作为NPM5，依赖默认锁定。新的包管理工具，Yarn，也默认锁定。

**否則:** QA测试通过的代码和批准的版本，在生产中表现不一致。更糟糕的是，同一生产集群中的不同服务器可能运行不同的代码。


🔗 [**更多: 锁住依赖**](./sections/production/lockdependencies.chinese.md)

<br/><br/>

## ![✔] 5.5. 使用正确的工具保护进程正常运行

**TL;DR:** 进程必须继续运行，并在失败时重新启动。对于简单的情况下，“重启”工具如PM2可能足够，但在今天的“Dockerized”世界 – 集群管理工具也值得考虑

**否則:** 运行几十个实例没有明确的战略和太多的工具（集群管理，docker，PM2）可能导致一个DevOps混乱


🔗 [**更多: 使用正确的工具保护进程正常运行**](./sections/production/guardprocess.chinese.md)


<br/><br/>

## ![✔] 5.6. 利用CPU多核

**TL;DR:** 在基本形式上，node应用程序运行在单个CPU核心上，而其他都处于空闲状态。复制node进程和利用多核，这是您的职责 – 对于中小应用，您可以使用Node Cluster和PM2. 对于一个大的应用，可以考虑使用一些Docker cluster（例如k8s，ECS）复制进程或基于Linux init system（例如systemd）的部署脚本

**否則:** 您的应用可能只是使用了其可用资源中的25% (!)，甚至更少。注意，一台典型的服务器有4个或更多的CPU，默认的Node.js部署仅仅用了一个CPU（甚至使用PaaS服务，比如AWS beanstalk，也一样）。


🔗 [**更多: 利用所有的CPU**](./sections/production/utilizecpu.chinese.md)

<br/><br/>

## ![✔] 5.7. 创建一个“维护端点”

**TL;DR:** 在一个安全的API中暴露一组系统相关的信息，比如内存使用情况和REPL等等。尽管这里强烈建议依赖标准和作战测试工具，但一些有价值的信息和操作更容易使用代码完成。

**否則:** 您会發現，您正在执行许多“诊断部署” – 将代码发送到生产中，仅仅只为了诊断目的提取一些信息。


🔗 [**更多: 创建一个 '维护端点'**](./sections/production/createmaintenanceendpoint.chinese.md)

<br/><br/>

## ![✔] 5.8. 使用APM产品發現錯誤和宕机时间

**TL;DR:** 监控和性能的产品（即APM）先前一步地评估代码库和API，自动的超过传统的监测，并测量在服务和层级上的整体用户体验。例如，一些APM产品可以突显导致最终用户负载过慢的事务，同时指出根本原因。

**否則:** 你可能会花大力气测量API性能和停机时间，也许你永远不会知道，真实场景下哪个是你最慢的代码部分，这些怎么影响用户体验。


🔗 [**更多: 使用APM产品發現錯誤和宕机时间**](./sections/production/apmproducts.chinese.md)


<br/><br/>


## ![✔] 5.9. 使您的代码保持生产环境就绪

**TL;DR:** 在意识中抱着最终上线的想法进行编码，从第1天开始计划上线。这听起来有点模糊，所以我编写了一些与生产维护密切相关的开发技巧（点击下面的要点）

**否則:** 一个世界冠军级别的IT/运维人员也不能拯救一个编码低劣的系统。


🔗 [**更多: 使您的代码保持生产环境就绪**](./sections/production/productioncode.chinese.md)

<br/><br/>

## ![✔] 5.10. 测量和保护内存使用

**TL;DR:** Node.js和内存有引起争论的联系：V8引擎对内存的使用有稍微的限制（1.4GB），在node的代码里面有内存泄漏的很多途径 – 因此监视node的进程内存是必须的。在小应用程序中，你可以使用shell命令周期性地测量内存，但在中等规模的应用程序中，考虑把内存监控建成一个健壮的监控系统。

**否則:** 您的内存可能一天泄漏一百兆，就像曾发生在沃尔玛的一样。


🔗 [**更多: 测量和保护内存使用**](./sections/production/measurememory.chinese.md)

<br/><br/>


## ![✔] 5.11. Node外管理您的前端资源

**TL;DR:** 使用专门的中间件（nginx，S3，CDN）服务前端内容，这是因为在处理大量静态文件的时候，由于node的单线程模型，它的性能很受影响。

**否則:** 您的单个node线程将忙于传输成百上千的html/图片/angular/react文件，而不是分配其所有的资源为了其擅长的任务 – 服务动态内容


🔗 [**更多: Node外管理您的前端资源**](./sections/production/frontendout.chinese.md)

<br/><br/>


## ![✔] 5.12. 保持无状态，几乎每天都要停下服务器

**TL;DR:** 在外部数据存储上，存储任意类型数据（例如用户会话，缓存，上传文件）。考虑间隔地停掉您的服务器或者使用 ‘serverless’ 平台（例如 AWS Lambda），这是一个明确的强化无状态的行为。

**否則:** 某个服务器上的故障将导致应用程序宕机，而不仅仅是停用故障机器。此外，由于依赖特定服务器，伸缩弹性会变得更具挑战性。


🔗 [**更多: 保持无状态，几乎每天都要停下服务器**](./sections/production/bestateless.chinese.md)


<br/><br/>


## ![✔] 5.13. 使用自动检测漏洞的工具

**TL;DR:** 即使是最有信誉的依赖项，比如Express，会有使系统处于危险境地的已知漏洞（随着时间推移）。通过使用社区的或者商业工具，不时的检查漏洞和警告（本地或者Github上），这类问题很容易被抑制，有些问题甚至可以立即修补。

**否則:** 否則: 在没有专用工具的情况下，使代码清除漏洞，需要不断地跟踪有关新威胁的在线出版物。相当繁琐。


🔗 [**更多: 使用自动检测漏洞的工具**](./sections/production/detectvulnerabilities.chinese.md)

<br/><br/>


## ![✔] 5.14. 在每一个log语句中指明 ‘TransactionId’

**TL;DR:** 在每一个请求的每一条log入口，指明同一个标识符，transaction-id: {某些值}。然后在检查日志中的錯誤时，很容易总结出前后发生的事情。不幸的是，由于Node异步的天性自然，这是不容易办到的，看下代码里面的例子

**否則:** 在没有上下文的情况下查看生产錯誤日志，这会使问题变得更加困难和缓慢去解决。


🔗 [**更多: 在每一个log语句中指明 ‘TransactionId’**](./sections/production/assigntransactionid.chinese.md)

<br/><br/>


## ![✔] 5.15. 设置NODE_ENV=production

**TL;DR:** 设置环境变量NODE_ENV为‘production’ 或者 ‘development’，这是一个是否激活上线优化的标志 - 很多NPM的包通过它来判断当前的环境，据此优化生产环境代码。

**否則:** 遗漏这个简单的属性可能大幅减弱性能。例如，在使用Express作为服务端渲染页面的时候，如果未设置NODE_ENV，性能将会减慢大概三分之一！


🔗 [**更多: 设置NODE_ENV=production**](./sections/production/setnodeenv.chinese.md)


<br/><br/>


## ![✔] 5.16. 设计自动化、原子化和零停机时间部署

**TL;DR:** 研究表明，执行许多部署的团队降低了严重上线问题的可能性。不需要危险的手动步骤和服务停机时间的快速和自动化部署大大改善了部署过程。你应该达到使用Docker结合CI工具，使他们成为简化部署的行业标准。

**否則:** 长时间部署 -> 线上宕机 & 和人相关的錯誤 -> 团队部署时不自信 -> 更少的部署和需求

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

<h1 id="6-security-best-practices"><code>6. 安全最佳實踐</code></h1>

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="53 items"/>
</div>

## ![✔] 6.1. 拥护linter安全准则

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** 使用安全相关的linter插件，比如[eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)，尽早捕获安全隐患或者问题，最好在编码阶段。这能帮助察觉安全的问题，比如使用eval，调用子进程，或者根据字面含义（比如，用户输入）引入模块等等。点击下面‘更多’获得一个安全linter可以检测到的代码示例。

**Otherwise:** 在开发过程中, 可能一个直白的安全隐患, 成为生产环境中一个严重问题。此外, 项目可能没有遵循一致的安全规范, 而导致引入漏洞, 或敏感信息被提交到远程仓库中。

🔗 [**更多: Lint 规范**](./sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. 使用中间件限制并发请求

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS攻击非常流行而且相对容易处理。使用外部服务，比如cloud负载均衡, cloud防火墙, nginx, 或者（对于小的，不是那么重要的app）一个速率限制中间件(比如[express-rate-limit](https://www.npmjs.com/package/express-rate-limit))，来实现速率限制。

**否則:** 应用程序可能受到攻击, 导致拒绝服务, 在这种情况下, 真实用户会遭受服务降级或不可用。

🔗 [**更多: 实施速率限制**](./sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 把机密信息从配置文件中抽离出来，或者使用包对其加密

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** 不要在配置文件或源代码中存储纯文本机密信息。相反, 使用诸如Vault产品、Kubernetes/Docker Secrets或使用环境变量之类的安全管理系统。最后一个结果是, 存储在源代码管理中的机密信息必须进行加密和管理 (滚动密钥(rolling keys)、过期时间、审核等)。使用pre-commit/push钩子防止意外提交机密信息。

**否則:** 源代码管理, 即使对于私有仓库, 也可能会被錯誤地公开, 此时所有的秘密信息都会被公开。外部组织的源代码管理的访问权限将无意中提供对相关系统 (数据库、api、服务等) 的访问。

🔗 [**更多: 安全管理**](./sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. 使用 ORM/ODM 库防止查询注入漏洞

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** 要防止 SQL/NoSQL 注入和其他恶意攻击, 请始终使用 ORM/ODM 或database库来转义数据或支持命名的或索引的参数化查询, 并注意验证用户输入的预期类型。不要只使用JavaScript模板字符串或字符串串联将值插入到查询语句中, 因为这会将应用程序置于广泛的漏洞中。所有知名的Node.js数据访问库(例如[Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose))包含对注入漏洞的内置包含措施。

**否則:** 未经验证或未脱敏处理的用户输入，可能会导致操作员在使用MongoDB进行NoSQL操作时进行注入, 而不使用适当的过滤系统或ORM很容易导致SQL注入攻击, 从而造成巨大的漏洞。

🔗 [**更多: 使用 ORM/ODM 库防止查询注入**](./sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. 通用安全最佳實踐集合

**TL;DR:** 这些是与Node.js不直接相关的安全建议的集合-Node的实现与任何其他语言没有太大的不同。单击 "阅读更多" 浏览。

🔗 [**更多: 通用安全最佳實踐**](./sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. 调整 HTTP 响应头以加强安全性

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 应用程序应该使用安全的header来防止攻击者使用常见的攻击方式，诸如跨站点脚本(XSS)、点击劫持和其他恶意攻击。可以使用模块，比如 [helmet](https://www.npmjs.com/package/helmet)轻松进行配置。

**否則:** 攻击者可以对应用程序的用户进行直接攻击, 导致巨大的安全漏洞

🔗 [**更多: 在应用程序中使用安全的header**](./sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. 经常自动检查易受攻击的依赖库

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** 在npm的生态系统中, 一个项目有许多依赖是很常见的。在找到新的漏洞时, 应始终将依赖项保留在检查中。使用工具，类似于[npm audit](https://docs.npmjs.com/cli/audit) 或者 [snyk](https://snyk.io/)跟踪、监视和修补易受攻击的依赖项。将这些工具与 CI 设置集成, 以便在将其上线之前捕捉到易受攻击的依赖库。

**否則:** 攻击者可以检测到您的web框架并攻击其所有已知的漏洞。

🔗 [**更多: 安全依赖**](./sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. 避免使用Node.js的crypto库处理密码，使用Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 密码或机密信息(API密钥)应该使用安全的哈希+salt函数(如 "bcrypt")来存储, 因为性能和安全原因, 这应该是其JavaScript实现的首选。

**否則:** 在不使用安全功能的情况下，保存的密码或秘密信息容易受到暴力破解和字典攻击, 最终会导致他们的泄露。

🔗 [**更多: 使用Bcrypt**](./sections/security/bcryptpasswords.chinese.md)

<br/><br/>

## ![✔] 6.9. 转义 HTML、JS 和 CSS 输出

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** 发送给浏览器的不受信任数据可能会被执行, 而不是显示, 这通常被称为跨站点脚本(XSS)攻击。使用专用库将数据显式标记为不应执行的纯文本内容(例如:编码、转义)，可以减轻这种问题。

**否則:** 攻击者可能会将恶意的JavaScript代码存储在您的DB中, 然后将其发送给可怜的客户端。

🔗 [**更多: 转义输出**](./sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. 验证传入的JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** 验证传入请求的body payload，并确保其符合预期要求, 如果没有, 则快速报错。为了避免每个路由中繁琐的验证编码, 您可以使用基于JSON的轻量级验证架构，比如[jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**否則:** 您疏忽和宽松的方法大大增加了攻击面, 并鼓励攻击者尝试许多输入, 直到他们找到一些组合, 使应用程序崩溃。

🔗 [**更多: 验证传入的JSON schemas**](./sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. 支持黑名单的JWT

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 当使用JSON Web Tokens(例如, 通过[Passport.js](https://github.com/jaredhanson/passport)), 默认情况下, 没有任何机制可以从发出的令牌中撤消访问权限。一旦發現了一些恶意用户活动, 只要它们持有有效的标记, 就无法阻止他们访问系统。通过实现一个不受信任令牌的黑名单，并在每个请求上验证，来减轻此问题。

**否則:** 过期或錯誤的令牌可能被第三方恶意使用，以访问应用程序，并模拟令牌的所有者。

🔗 [**更多: 为JSON Web Token添加黑名单**](./sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. 限制每个用户允许的登录请求

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 一类保护暴力破解的中间件，比如[express-brute](https://www.npmjs.com/package/express-brute)，应该被用在express的应用中，来防止暴力/字典攻击；这类攻击主要应用于一些敏感路由，比如/admin 或者 /login，基于某些请求属性, 如用户名, 或其他标识符, 如正文参数等。

**否則:** 攻击者可以发出无限制的密码匹配尝试, 以获取对应用程序中特权帐户的访问权限。

🔗 [**更多: 限制登录频率**](./sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. 使用非root用户运行Node.js

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** Node.js作为一个具有无限权限的root用户运行，这是一种普遍的情景。例如，在Docker容器中，这是默认行为。建议创建一个非root用户，并保存到Docker镜像中（下面给出了示例），或者通过调用带有"-u username" 的容器来代表此用户运行该进程。

**否則:** 在服务器上运行脚本的攻击者在本地计算机上获得无限制的权利 (例如，改变iptable，引流到他的服务器上)

🔗 [**更多: 使用非root用户运行Node.js**](./sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. 使用反向代理或中间件限制负载大小

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 请求body有效载荷越大, Node.js的单线程就越难处理它。这是攻击者在没有大量请求(DOS/DDOS 攻击)的情况下，就可以让服务器跪下的机会。在边缘上（例如，防火墙，ELB）限制传入请求的body大小，或者通过配置[express body parser](https://github.com/expressjs/body-parser)仅接收小的载荷，可以减轻这种问题。

**否則:** 您的应用程序将不得不处理大的请求, 无法处理它必须完成的其他重要工作, 从而导致对DOS攻击的性能影响和脆弱性。

🔗 [**更多: 限制负载大小**](./sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. 避免JavaScript的eval声明

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` 是邪恶的, 因为它允许在运行时执行自定义的JavaScript代码。这不仅是一个性能方面的问题, 而且也是一个重要的安全问题, 因为恶意的JavaScript代码可能来源于用户输入。应该避免的另一种语言功能是 `new Function` 构造函数。`setTimeout` 和 `setInterval` 也不应该传入动态JavaScript代码。

**否則:** 恶意JavaScript代码查找传入 `eval` 或其他实时判断的JavaScript函数的文本的方法, 并将获得在该页面上javascript权限的完全访问权。此漏洞通常表现为XSS攻击。

🔗 [**更多: 避免JavaScript的eval声明**](./sections/security/avoideval.chinese.md)

<br/><br/>

## ![✔] 6.16. 防止恶意RegEx让Node.js的单线程过载执行

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 正则表达式，在方便的同时，对JavaScript应用构成了真正的威胁，特别是Node.js平台。匹配文本的用户输入需要大量的CPU周期来处理。在某种程度上，正则处理是效率低下的，比如验证10个单词的单个请求可能阻止整个event loop长达6秒，并让CPU引火烧身。由于这个原因，偏向第三方的验证包，比如[validator.js](https://github.com/chriso/validator.js)，而不是采用正则，或者使用[safe-regex](https://github.com/substack/safe-regex)来检测有问题的正则表达式。

**否則:** 写得不好的正则表达式可能容易受到正则表达式DoS攻击的影响, 这将完全阻止event loop。例如，流行的`moment`包在2017年的11月，被發現使用了錯誤的RegEx用法而易受攻击。

🔗 [**更多: 防止恶意正则**](./sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. 使用变量避免模块加载

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 避免通过作为参数的路径requiring/importing另一个文件, 原因是它可能源自用户输入。此规则可扩展为访问一般文件(即:`fs.readFile()`)或使用来自用户输入的动态变量访问其他敏感资源。[Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter可以捕捉这样的模式, 并尽早提前警告。

**否則:** 恶意用户输入可以找到用于获得篡改文件的参数, 例如, 文件系统上以前上载的文件, 或访问已有的系统文件。

🔗 [**更多: 安全地加载模块**](./sections/security/safemoduleloading.chinese.md)

<br/><br/>

## ![✔] 6.18. 在沙箱中运行不安全代码

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 当任务执行在运行时给出的外部代码时(例如, 插件), 使用任何类型的`沙盒`执行环境保护主代码，并隔离开主代码和插件。这可以通过一个专用的过程来实现 (例如:cluster.fork()), 无服务器环境或充当沙盒的专用npm包。

**否則:** 插件可以通过无限循环、内存超载和对敏感进程环境变量的访问等多种选项进行攻击

🔗 [**更多: 在沙箱中运行不安全代码**](./sections/security/sandbox.chinese.md)

<br/><br/>

## ![✔] 6.19. 使用子进程时要格外小心

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 尽可能地避免使用子进程，如果您仍然必须这样做，验证和清理输入以减轻shell注入攻击。更喜欢使用 "child_process"。execFile 的定义将只执行具有一组属性的单个命令, 并且不允许 shell 参数扩展。倾向于使用`child_process.execFile`，从定义上来说，它将仅仅执行具有一组属性的单个命令，并且不允许shell参数扩展。

**否則:** 由于将恶意用户输入传递给未脱敏处理的系统命令, 直接地使用子进程可能导致远程命令执行或shell注入攻击。

🔗 [**更多: 处理子进程时要格外小心**](./sections/security/childprocesses.chinese.md)

<br/><br/>

## ![✔] 6.20. 隐藏客户端的錯誤详细信息

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 默认情况下, 集成的express錯誤处理程序隐藏錯誤详细信息。但是, 极有可能, 您实现自己的錯誤处理邏輯与自定义錯誤对象(被许多人认为是最佳做法)。如果这样做, 请确保不将整个Error对象返回到客户端, 这可能包含一些敏感的应用程序详细信息。

**否則:** 敏感应用程序详细信息(如服务器文件路径、使用中的第三方模块和可能被攻击者利用的应用程序的其他内部工作流)可能会从stack trace發現的信息中泄露。

🔗 [**更多: 隐藏客户端的錯誤详细信息**](./sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. 对npm或Yarn，配置2FA

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 开发链中的任何步骤都应使用MFA(多重身份验证)进行保护, npm/Yarn对于那些能够掌握某些开发人员密码的攻击者来说是一个很好的机会。使用开发人员凭据, 攻击者可以向跨项目和服务广泛安装的库中注入恶意代码。甚至可能在网络上公开发布。在npm中启用2因素身份验证（2-factor-authentication）, 攻击者几乎没有机会改变您的软件包代码。

**否則:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. 修改session中间件设置

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 每个web框架和技术都有其已知的弱点-告诉攻击者我们使用的web框架对他们来说是很大的帮助。使用session中间件的默认设置, 可以以类似于`X-Powered-By`header的方式向模块和框架特定的劫持攻击公开您的应用。尝试隐藏识别和揭露技术栈的任何内容(例如:Nonde.js, express)。

**否則:** 可以通过不安全的连接发送cookie, 攻击者可能会使用会话标识来标识web应用程序的基础框架以及特定于模块的漏洞。

🔗 [**更多: cookie和session安全**](./sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. 通过显式设置进程应崩溃的情况，以避免DOS攻击

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 当錯誤未被处理时, Node进程将崩溃。即使錯誤被捕获并得到处理，许多最佳實踐甚至建议退出。例如, Express会在任何异步錯誤上崩溃 - 除非使用catch子句包装路由。这将打开一个非常惬意的攻击点, 攻击者识别哪些输入会导致进程崩溃并重复发送相同的请求。没有即时补救办法, 但一些技术可以减轻苦楚: 每当进程因未处理的錯誤而崩溃，都会发出警报，验证输入并避免由于用户输入无效而导致进程崩溃，并使用catch将所有路由处理包装起来，并在请求中出现錯誤时, 考虑不要崩溃(与全局发生的情况相反)。

**否則:** 这只是一个起到教育意义的假设: 给定许多Node.js应用程序, 如果我们尝试传递一个空的JSON正文到所有POST请求 - 少数应用程序将崩溃。在这一点上, 我们可以只是重复发送相同的请求, 就可以轻松地搞垮应用程序。

<br/><br/><br/>

## ![✔] 6.24. 避免不安全的重定向

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** 不验证用户输入的重定向可使攻击者启动网络钓鱼诈骗，窃取用户凭据，以及执行其他恶意操作。

**否則:** 当攻击者發現你没有校验用户提供的外部输入时，他们会在论坛、社交媒体以和其他公共场合发布他们精心制作的链接来诱使用户点击，以此达到漏洞利用的目的。

🔗 [**阅读更多: 避免不安全的重定向**](./sections/security/saferedirects.chinese.md)

<br/><br/><br/>

## ![✔] 6.25. 避免将机密信息发布到NPM仓库

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 您应该采取预防措施来避免偶然地将机密信息发布到npm仓库的风险。 一个 `.npmignore` 文件可以被用作忽略掉特定的文件或目录, 或者一个在 `package.json` 中的 `files` 数组可以起到一个白名单的作用.

**否則:** 您项目的API密钥、密码或者其它机密信息很容易被任何碰到的人滥用，这可能会导致经济损失、身份冒充以及其它风险。

🔗 [**阅读更多: 避免发布机密信息**](./sections/security/avoid_publishing_secrets.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `7. 草稿: 有关性能的最佳實踐`

## 我们的贡献者们正在努力完善这个章节。 [你想要加入吗?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. 不要阻塞事件循环

**TL;DR:** 避免执行CPU密集型的任务，并将这些任务转移到基于上下文的专用线程中，因为它们会阻塞大多数单线程事件循环。

**否則:** 由于事件循环被阻塞了，Node.js 将无法处理其它请求，从而导致同时请求的用户的延迟。 **3000 位用户正在等待响应，内容本身已经准备好了提供服务， 但是一个单独的请求阻止了服务器将结果分发回去。**

🔗 [**阅读更多: 不要阻塞事件循环**](./sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. 优先使用原生的JS方法，而不是像 Lodash 这样的用户空间级别的实用工具

**TL;DR:** 使用像 `lodash` 和 `underscore` 这样的实用库替代原生的JS方法，通常来说这么做更不好，因为它导致了一些不必要的依赖项以及更差的性能表现。
请记住，随着新的V8引擎以及新的ES标准的引入，原生方法得到了改进，它们现在会比这些实用工具库高出大概 50% 的性能。

**否則:** 你将不得不维护一些性能更低的项目，在这些项目中，你本可以很简单的使用那些已经可以用的东西，或者用几行代码来取代掉几个文件。

🔗 [**阅读更多: 原生方法胜过实用工具**](./sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `API Practices`

## Our contributors are working on this section. Would you like to join?

<br/><br/><br/>

# Milestones
To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/goldbergyoni/nodebestpractices/milestones) and join the working groups if you want to contribute to this project.

<br/><br/>

# Contributors
## `Yoni Goldberg`
Independent Node.js consultant who works with customers at USA, Europe and Israel on building large-scale scalable Node applications. Many of the best practices above were first published on his blog post at [http://www.goldbergyoni.com](http://www.goldbergyoni.com). Reach Yoni at @goldbergyoni or me@goldbergyoni.com

## `Ido Richter`
👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast.

## `Refael Ackermann` [@refack](https://github.com/refack) &lt;refack@gmail.com&gt; (he/him)
Node.js Core Collaborator, been noding since 0.4, and have noded in multiple production sites. Founded `node4good` home of [`lodash-contrib`](https://github.com/node4good/lodash-contrib), [`formage`](https://github.com/node4good/formage), and [`asynctrace`](https://github.com/node4good/asynctrace).
`refack` on freenode, Twitter, GitHub, GMail, and many other platforms. DMs are open, happy to help.

## `Bruno Scheufler`
💻 full-stack web developer and Node.js enthusiast.

## `Kyle Martin` [@js-kyle](https://github.com/js-kyle)
Full Stack Developer based in New Zealand, interested in architecting and building Node.js applications to perform at global scale. Keen contributor to open source software, including Node.js Core.


<br/><br/>

## Thank You Notes

We appreciate any contribution, from a single word fix to a new best practice. View our contributors and [contributing documentation here!](./README.md#contributors-)

<br/><br/><br/>

