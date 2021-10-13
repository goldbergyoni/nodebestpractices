[✔]: assets/images/checkbox-small-blue.png

# Node.js 最佳實踐

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices" />
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2082%20Best%20Practices-blue.svg" alt="82 items"/> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Jun%205%202019-green.svg" alt="Last update: June 5，2019"/> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2012.4.0%20LTS-brightgreen.svg" alt="Updated for Node 12.4.0 LTS"/>
</div>

<br/>

 [![nodepractices](./assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Follow us on Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)
 <br/>

# 歡迎! 首先您應該知道的三件事情:
**1. 您正在閱讀幾十篇最棒的 Node.js 文章 -** 這是對Node.js最佳實踐中排名最高的内容的總結和分享

**2. 這裡是最大的彙整站，且每周都在成長 -** 目前，呈現了超過80個最佳實踐，樣式指南，架構建議。每天都有新的issue和PR被新增，以使這本線上書籍不斷更新。我們很樂於見到您能在這裡做出貢獻，不管是修正一些原始碼的錯誤，或是提出絕佳的新想法。請查看我們的[writing guidelines here](./.operations/writing-guidelines.md)

**3. 大多的最佳實踐有額外資訊 -** 大部分的最佳實踐項目的旁邊，您將發現 **🔗閱讀更多** 連結，它將呈現给您原始碼範例，部落格引用和更多資訊

<br/><br/>

## [目錄](#table-of-contents)

1. [專案架構實踐 (5) ](#1-project-structure-practices)
2. [錯誤處理實踐 (12) ](#2-error-handling-practices)
3. [撰寫風格實踐 (12) ](#3-code-style-practices)
4. [測試和總體品質實踐 (13) ](#4-testing-and-overall-quality-practices)
5. [進入產品階段實踐 (19) ](#5-going-to-production-practices)
6. [安全性實踐(23)](#6-security-best-practices)
7. [效能實踐 (2) (進展中 ✍️)](#7-draft-performance-best-practices)
8. [Docker 實踐 (15)](#8-docker-best-practices)


<br/><br/>

# `1. 專案架構實踐`

## ![✔] 1.1 將解決方案元件化

 **TL;DR:** 大型專案中，最大的隱患就是要維護一個龐大的，含有幾百個相依套件的程式碼 - 當開發者準備加入一個新的功能時，這麼一個龐然大物勢必拖慢了開發效率。反之，把您的程式碼元件化，每一個元件有它自己的資料夾和專用函式庫，並且確保每一個元件小而簡單。查看正確的專案架構範例請造訪下面的「更多」連結。

**否則:** 當撰寫新功能的開發者逐步意識到他所調整後的影響，並擔心會破壞其他相依元件 - 部署會變得更慢，風險更大。當所有商業邏輯沒有被分開，這也會被認為很難擴充。

🔗 [**更多: 组件結構**](./sections/projectstructre/breakintcomponents.chinese.md)

<br/><br/>

## ![✔] 1.2 分層設計元件，將網路層保持在特定範圍內

**TL;DR:** 每個元件都應該包含"層級" - 一個用於網路、邏輯和存取數據的原始碼的專用物件。這不僅是對關注點的簡潔分離，而且也大大簡化了系統的模擬和測試。雖然這是一個非常常見的模式，但 API 開發者傾向於通過將 Web 層物件(例如Express req，res)傳遞給商業邏輯和數據層來混合各層 - 這使得你的應用程式依賴於特定的 Web 框架，並只能由他來存取。

**否則:** 混合了網路物件和其他層的應用程式無法被測試、CRON jobs、消息隊列的觸發器等。


🔗 [**更多: 應用分層**](./sections/projectstructre/createlayers.chinese.md)

<br/><br/>

## ![✔] 1.3 將通用函式庫包裝成 npm 套件

**TL;DR:** 在一個構成大型程式庫的大型應用中，跨領域的實用程式，如記錄器(logger)、加密(encryption)等，應該將其包裝起來，並作為私有的 npm 套件公開。這樣就可以在多個函式庫和專案中共享它們。

**否則:** 您將不得不重造和部署相依的輪子

🔗 [**更多: 透過需求來構建**](./sections/projectstructre/wraputilities.chinese.md)

<br/><br/>

## ![✔] 1.4 將 Express 'app' and 'server' 拆分

**TL;DR:** 避免定義整個 [Express](https://expressjs.com/) 應用程式在一個單獨的大文件裡，這是一個不好的習慣 - 拆分您的 'Express' 定義至少在兩個文件中： API 宣告(app.js) 和 網路相關(WWW)。對於更好的結構，是把你的 API 宣告放在元件中。

**否則:** 您的 API 將只能透過 HTTP 的呼叫進行測試(慢，並且很難產生測試覆蓋報告)。要維護一個上百行原始碼的文件也不是一件令人開心的事。

🔗 [**更多: 將 Express 'app' and 'server' 拆分**](./sections/projectstructre/separateexpress.chinese.md)

<br/><br/>

## ![✔] 1.5 使用易於設定環境變數，安全和分級的設定

**TL;DR:** 一個完美無瑕的配置設定應該確保 (a) 密鑰可以從文件和環境變數中讀取 (b) 秘密被保存在已提交的原始碼之外 (c) 配置是分層的，更容易找到。有一些套件包可以幫助勾選其中的大部分方框，如 [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config) 和 [convict](https://www.npmjs.com/package/convict)。


**否則:** 不能滿足任意配置的要求將會使開發，維運團隊，更甚兩者，易於陷入泥沼。

🔗 [**更多: 配置最佳實踐**](./sections/projectstructre/configguide.chinese.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `2. 錯誤處理實踐`

## ![✔] 2.1  使用 Async-Await 和 promises 用於異步錯誤處理

**TL;DR:** 使用 `callback` 的方式處理異步錯誤可能是導致災難的最快的方式(又稱 the pyramid of doom)。對您的程式碼来說，最好的禮物就是使用規範的 promise 函式庫或 async-await 来替代，這會使程式更加簡潔以及熟悉，就如 try-catch 一樣。

**否則:** Node.js `callback` 特性，function(err，response)，是導致不可維護程式的一個必然的方式。究其原因，是由於混合了隨意的錯誤處理代碼，臃腫的内嵌，鱉腳的設計模式。

🔗 [**更多: 避免 `callback` **](./sections/errorhandling/asyncerrorhandling.chinese.md)

<br/><br/>

## ![✔] 2.2 僅使用内建的錯誤物件

**TL;DR:** 很多人使用字串類型或一些自定義類型來拋出錯誤 - 這會導致錯誤處理邏輯和模組間的調用複雜化。是否您 reject 一個 promise，抛出異常或發出(emit)錯誤 - 使用内建的錯誤對象將會增加設計一致性，並防止資訊的遺失。有一個規則 `no-throw-literal`，會在`ESLint` 中進行嚴謹確認 (雖然在使用 `Typescript` 的時候他有一些可以透過設定 `@typescript-eslint/no-throw-literal` 被解決的[限制](https://eslint.org/docs/rules/no-throw-literal)存在)

**否則:** 調用某些元件時，將不確定會返回哪種錯誤類型 - 這使得正確的錯誤處理變得更加困難。更糟糕的情况是，使用自定義類型來描述錯誤，可能會導致重要的錯誤資訊遺失，比如 stack trace！

🔗 [**更多: 使用内建錯誤物件**](./sections/errorhandling/useonlythebuiltinerror.chinese.md)

<br/><br/>

## ![✔] 2.3 區分執行錯誤和程式設計錯誤

**TL;DR:** 執行錯誤 (例如，API接受到一個無效的輸入) 指的是一些已知情境下的錯誤，這類錯誤的影響已經完全被理解，並能被考慮周全地處理掉。同時，程式設計錯誤 (例如，嘗試讀取未定義的變數) 指的是未知的程式問題，影響到應用程式(application)的重新啟動。

**否則:** 當一個錯誤產生的時候，您總是得重新啟動應用程式(application)，但為什麼要讓 ~5000 個在線用戶，僅僅是因為一個細微的，可以預測的，執行時的錯誤，而不能使用呢？相反的方案，也不完美 – 當未知的問題 (程式問題) 產生的時後，使應用程式(application)依舊可以使用，可能導致不可預測的行為。區分兩者會使處理更有技巧，並在給定的上下文中找出適當的決策。

🔗 [**更多: 區分執行錯誤和程式設計錯誤**](./sections/errorhandling/operationalvsprogrammererror.chinese.md)

<br/><br/>

## ![✔] 2.4 集中處理錯誤，不要在Express中介層(middleware)中處理錯誤

**TL;DR:** 錯誤處理邏輯，例如給管理員的郵件和日誌，應該被封裝在一個專門的、集中的物件中，當有錯誤出現時，所有的端點 (例如: Express中介層(middleware)、cron jobs、單元測試) 都會調用這個物件。

**否則:** 錯誤處理的邏輯不放在一起將會導致程式碼重複和非常可能不妥當的錯誤處理。

🔗 [**更多: 集中处理錯誤**](./sections/errorhandling/centralizedhandling.chinese.md)

<br/><br/>

## ![✔] 2.5 對API錯誤使用 Swagger 或是 GraphQL 文件化

**TL;DR:** 讓你的API使用者知道會回傳哪種錯誤，這樣他们就能完全的處理這些錯誤，而不至於系統崩潰。對於 RESTful APIs 通常使用文件框架像是 Swagger 來完成。如果你是使用 GraphQL 你可以利用 schema 和 comments。

**否則:** 任何一個API客戶端可能會導致崩潰並重新啟動，只因為它收到了一個它無法處理的錯誤。注意：你的API的使用者可能是你 (這在微服務環境中非常典型)。

🔗 [**更多: 對API錯誤使用 Swagger 或是 GraphQL 文件化**](./sections/errorhandling/documentingusingswagger.chinese.md)

<br/><br/>

## ![✔] 2.6 當特殊情況發生時，優雅地關閉服務

**TL;DR:** 當一個未知的錯誤發生時 (開發者錯誤，見最佳實踐2.3) - 應用程式的健康性存在不確定性。通常的做法是，使用像 [Forever](https://www.npmjs.com/package/forever) 或是 [PM2](http://pm2.keymetrics.io/) 這樣的流程管理工具小心翼翼地重新啟動流程。

**否則:** 當一個不熟悉的異常發生時，一些物件可能處於故障狀態 (例如一個全局使用的事件觸發器，由於某些內部故障而不再觸發事件)，所有未來的請求都可能失敗或表現得很異常。

🔗 [**更多: 停掉服務**](./sections/errorhandling/shuttingtheprocess.chinese.md)

<br/><br/>

## ![✔] 2.7 使用一個成熟的日誌工具提高錯誤的可見性

**TL;DR:** 一系列成熟的日誌工具，比如 [Pino](https://github.com/pinojs/pino) 或是 [Log4js](https://www.npmjs.com/package/log4js)，會加速錯誤的發現和理解。放棄console.log吧。

**否則:** 在沒有查詢工具或像樣的日誌查看器的情況下，略過console.logs或手動查看混亂的文本文件可能會讓你在工作中忙到很晚。

🔗 [**更多: 使用好用的日誌工具**](./sections/errorhandling/usematurelogger.chinese.md)

<br/><br/>

## ![✔] 2.8 使用你最喜歡的測試框架測試錯誤流程

**TL;DR:** 無論是專業的自動化QA還是普通的手動開發者測試 - 確保你的程式碼不僅能滿足積極的情境，還能處理並回傳正確的錯誤。Mocha和Chai等測試框架可以輕鬆地處理這個問題 (見 "Gist popup" 中的程式範例)

**否則:** 如果沒有測試，無論是自動還是手動，你都不能依靠你的程式碼來返回正確的錯誤。沒有有意義的錯誤 - 等於沒做"錯誤處理"

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

## ![✔] 2.11 使用一個專門的套件驗證參數，並且及早報錯

**TL;DR:** Assert API 輸入藉此避免討厭的 bug，這些 bug 以後更難追蹤。驗證程式通常很繁瑣，除非你使用一個非常酷的套件，如 [ajv](https://www.npmjs.com/package/ajv) 和 [Joi](https://www.npmjs.com/package/joi)

**否則:** 想一下這個情況 - 你的函數期望一個數字參數 "Discount"，而調用者忘記了傳遞這個參數，後來，你的程式檢查是否Discount!=0 (允許的折扣金額大於0)，那麽它將允許用戶享受折扣。OMG，真是個討厭的錯誤。有fu了嗎？

🔗 [**更多: 快速查錯**](./sections/errorhandling/failfast.chinese.md)

<br/><br/>

## ![✔] 2.12 始終在回傳之前 await promise，以避免出現部分 stacktrace

**TL;DR:** 當回傳一個 `promise` 時，一定要做 `return await` ，以獲得完整的 `stacktrace` 。如果一個
函式回傳一個 `promise` ，該函式必須被聲明為 `async function` ，並在回傳前明確地
在回傳 `promise` 之前 `await promise`

**否則:** 回傳一個沒有 `await promise` 的函式不會出現在 `stacktrace` 中。
這種缺陷的框架可能會使對導致錯誤的流程的理解變得複雜。
特別是如果異常行為的原因是在有問題的函式中

🔗 [**閱讀更多: 回傳 promises**](./sections/errorhandling/returningpromises.md)

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `3. 撰寫風格實踐`

## ![✔] 3.1 使用ESLint

**TL;DR:** [ESLint](https://eslint.org) 是檢查可能的程式碼錯誤和修復撰寫風格的業界標準，不僅可以識別細微的間距問題，還可以檢測嚴重的反模式(anti-patterns)程式碼，如開發人員拋出的錯誤沒有分類。雖然ESLint可以自動修復撰寫風格，但其他工具如 [prettier](https://www.npmjs.com/package/prettier) 和 [beautify](https://www.npmjs.com/package/js-beautify) 在格式化修復方面更加強大，並與ESLint同時運作。

**否則:** 開發人員將專注於繁瑣的間距和行寬問題，時間可能被浪費在過度考慮各種撰寫風格上。

<br/><br/>

## ![✔] 3.2 Node.js特定的插件

**TL;DR:** 除了僅僅涉及 vanilla JS 的 ESLint 標準規則，加入 Node 相關的插件，比如[eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)，[eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

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

const items = [1，2，3]
items.forEach(console.log)

// Avoid — throws exception
const m = new Map()
const a = [1,2,3]
[...m.values()].forEach(console.log)
> [...m.values()].forEach(console.log)
>  ^^^
> SyntaxError: Unexpected token ...

// Avoid — throws exception
const count = 2 // it tries to run 2()，but 2 is not a function
(function doSomething() {
  // do something amazing
}())
// put a semicolon before the immediate invoked function，after the const definition，save the return value of the anonymous function to a variable or avoid IIFEs altogether
```

🔗 [**閱讀更多:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**閱讀更多:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

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

🔗 [**更多: JavaScript ES6+: var，let，or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 先require，而不是在函數内

**TL;DR:** 在每個文件的起始位置，在任何函數的前面和外部require模組(module)。這種簡單的最佳實踐，不僅能幫助您輕鬆快速地在文件頂部辨別出相依關係，而且避免了一些潛在的問題。

**否則:** 在Node.js中，require 是同步執行的。如果從函數中調用它們，它可能會阻塞其他請求，在更關鍵的時間得到處理。另外，如果所require的模組(module)或它自己的任何相依套件拋出錯誤並使伺服器崩潰，最好盡快查明它，如果該模組(module)在函數中require的，則可能不是這樣的情況。

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

## ![✔] 3.11 使用 Async Await，避免使用 callback

**TL;DR:** Node 8 LTS現已全面支援異步等待(async-await)。這是一種新的方式處理異步請求，取代 callbacks 和 promise 。Async-await 是非阻塞的，它使異步程式看起來像是同步的。您可以給你的程式的最好的禮物是用 async-await 提供了一個更緊湊的，熟悉的，類似 try catch 的語法。

**否則:** 使用 callbacks 的方式處理異步錯誤可能是陷入困境最快的方式 - 這種方式必須面對不停地檢測錯誤，處理彆扭的巢狀程式，難以推理程式流程。

🔗[**更多:** async await 1.0 指引](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 使用 (=>) 箭頭函式

**TL;DR:** 盡管使用 async-await 和避免方法作為參數是被推薦的，但當處理那些接受promise和 callbacks 的老的API的時候 - 箭頭函式使程式結構更加緊湊，並保持了根方法上的語義上下文 (例如 'this')。

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

**否則:** 一個部署剛剛失敗，一個名為 "新增產品 "的測試失敗。這樣你知道哪裡故障了？

🔗 [**閱讀更多: 在每個測試名稱中包含3個部分**](./sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 按AAA模式進行結構測試

**TL;DR:** 用3個分開的部分來組織你的測試。安排 (Arrange) ，行動 (Act) 和斷言 (Assert) **AAA**。第一部分包括測試設置，然後是被測單元的執行，最後是斷言階段。遵循這個結構可以保證讀者不花腦筋去理解測試計劃

**否則:** 你不僅會每天花很長的時間來理解主要程式，而且現在本應是一天中最簡單的部分 (測試) 也讓你的大腦捉襟見肘。

🔗 [**閱讀更多: 按AAA模式進行結構測試**](./sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 使用一個linter檢測程式碼問題

**TL;DR:** 使用程式碼linter檢查基本品質並及早檢測反模式(anti-patterns)。在任何測試之前執行它，並將其新增為提交前的git-hook，以最小化審查和更正任何問題所需的時間。也可在[Section 3](https://github.com/goldbergyoni/nodebestpractices#3-code-style-practices)中查閱撰寫風格實踐

**否則:** 您可能讓一些反模式(anti-patterns)和易受攻擊的程式碼傳遞到您的生產環境中。


<br/><br/>

## ![✔] 4.5 避免全域測試 fixtures 和 seeds ，按每個測試需求新增數據

**TL;DR:** 為了防止測試耦合和容易推理測試流程，每個測試都應該新增和作用於它自己的一組DB數據。每當一個測試需要拉動或假設一些DB數據的存在 - 它必須明確地新增該數據，避免任何突變影響其他記錄。

**否則:** 考慮這樣一種情況：由於測試失敗，部署被中止，團隊現在要花費寶貴的調查時間，最後得出一個可悲的結論：系統執行良好，但測試相互干擾，破壞了部署上線。

🔗 [**閱讀更多: 避免全域測試 fixtures**](./sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 经常检查易受攻击的依赖

**TL;DR:** 即使是那些最有名的依賴模塊，比如Express，也有已知的漏洞。使用社區和商業工具，比如 🔗 [npm audit](https://docs.npmjs.com/cli/audit) ，集成在您的CI平台上，在每一次構建的時候都會被調用，這樣可以很容易地解決漏洞問題。

**否則:** 在沒有專用工具的情況下，使程式碼清除漏洞，需要不斷地跟蹤有關新威脅的在線出版物，相當繁瑣。

<br/><br/>

## ![✔] 4.7 測試標籤化

**TL;DR:**  不同的測試必須執行在不同的情景：quick smoke，IO-less，當開發者保存或提交一個文件，測試應該啟動；完整的端到端的測試通常執行在一個新的pull request被提交之後，等等。這可以通過對測試用例設置標籤，比如關鍵字像#cold #api #sanity，來完成。這樣您可以對您的測試集進行grep，調用需要的子集合。例如，這就是您通過[Mocha](https://mochajs.org/)僅僅調用sanity測試集所需要做的：mocha --grep 'sanity'。

**否則:** 執行所有的測試，包括執行資料庫查詢的幾十個測試，任何時候開發者進行小的改動都可能很慢，這使得開發者不願意進行測試。

<br/><br/>

## ![✔] 4.8 檢查測試覆蓋率，它有助於識別錯誤的測試模式

**TL;DR:** 程式碼覆蓋工具比如 [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc)，很好用有3個原因：它是免費的(獲得這份報告不需要任何開銷)，它有助於確定測試覆蓋率降低的部分，以及最後但非最不重要的是它指出了測試中的不匹配：通過查看顏色標記的程式碼覆蓋報告您可以注意到，例如，從來不會被測到的程式碼片段像catch語句(即測試只是調用正確的路徑，而不調用應用程式發生錯誤時的行為)。如果覆蓋率低於某個閾值，則將其設置為失敗的構建。

**否則:** 當你的大部分程式碼沒有被測試覆蓋時，就不會有任何自動化的度量化數據告訴你了。

<br/><br/>

## ![✔] 4.9 檢查過期的依賴包

**TL;DR:** 使用您的首選工具 (例如 `npm outdated` or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) 來檢查已安裝的過期相依套件，將此檢查注入您的 CI 管道(pipeline)，甚至在嚴重的情況下使構建失敗。例如，當一個已安裝的相依套件落後5個版本時 (例如:本地版本是1.3.1 的，儲存庫(repository)版本是1.3.8 的)，或者它被其作者標記為已棄用，可能會出現嚴重的情況 - 停掉這次構建並防止部署此版本。

**否則:** 您的生產環境將執行已被其作者明確標記為有風險的相依套件

<br/><br/>

## ![✔] 4.10 對於e2e testing，使用docker-compose

**TL;DR:** 包括實時數據的端到端 (e2e) 測試曾經是CI過程中最薄弱的環節，因為它依賴於DB等多個重度服務。使用一個盡可能接近真實生產環境的環境，如a-continue (這里錯過了-continue，需要內容。從**否則**條款來看，這應該提到docker-compose)


**否則:** 沒有docker-compose，團隊必須維護一個測試數據庫在每一個測試環境上，包含開發機器，保持所有數據同步，這樣測試結果不會因環境不同而不同。

<br/><br/>

## ![✔] 4.11 使用靜態分析工具定期進行重構

**TL;DR:** 使用靜態分析工具有助於通過提供客觀的方法來提高程式碼品質，並保持你的程式碼可維護性。你可以將靜態分析工具新增到你的CI構建中，當它發現程式碼有異味時就會失效。與普通的提示相比，它的主要賣點是能夠在多個文件的背景下檢查品質 (如檢測重覆)，執行高級分析(如程式碼複雜性)，並追蹤程式碼問題的歷史和進展。你可以使用的兩個工具的例子是[Sonarqube](https://www.sonarqube.org/) (2,600+ [star](https://github.com/SonarSource/sonarqube))和[Code Climate](https://codeclimate.com/) (1,500+ [star](https://github.com/codeclimate/codeclimate)) 。

**否則:** 由於程式碼品質差，錯誤和性能將永遠是一個問題，任何閃亮的新套件或最先進的功能都無法解決這個問題。

🔗 [**閱讀更多: 重構!**](./sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 仔細挑選您的持續集成(CI)平台

**TL;DR:** 您的持續集成平台 (CICD) 將集成各種品質工具 (如測試、lint)，所以它應該是一個充滿活力的生態系統，包含各種插件。[jenkins](https://jenkins.io/)曾經是許多項目的默認選項，因為它有最大的社區，同時也是一個非常強大的平台，這樣的代價是要求一個陡峭的學習曲線。如今，使用SaaS工具，比如[CircleCI](https://circleci.com)及其他，安裝一套CI解決方案，相對是一件容易的事情。這些工具允許構建靈活的CI管道(pipeline)，而無需管理整個基礎設施。最終，這是在穩健性和速度之間的權衡 - 謹慎選擇你的一方

**否則:** 一旦您需要一些進一步的客製化，選擇一些細分市場供應商可能會讓您停滯不前。另一方面，伴隨著jenkins，可能會在基礎設施設置上浪費寶貴的時間。

🔗 [**更多: 挑選 CI 平台**](./sections/testingandquality/citools.chinese.md)

<br/><br/>

## ![✔] 4.13 隔離測試你的中間件

**TL;DR:** 當一個中間件擁有一些跨越許多請求的巨大邏輯時，值得在不喚醒整個Web框架的情況下對其進行隔離測試。這可以通過存根和監視 {req，res，next} 物件來輕鬆實現

**否則:** 在 Express middleware 有 bug === 大多數或者所有請求有 bug

🔗 [**閱讀更多: 隔離測試你的中間件**](./sections/testingandquality/test-middlewares.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `5. 進入產品階段實踐`

## ![✔] 5.1. 監控!

**TL;DR:** 監測是一個在客戶之前發現問題的遊戲 - 顯然這應該被賦予前所未有的重要性。市場上的產品琳瑯滿目，因此可以考慮從確定你必須遵循的基本指標開始 (我的建議在里面)，然後再去看其他花俏的功能，選擇符合所有條件的解決方案。點擊下面的 "The Gist" 以了解解決方案的概況。

**否則:** 錯誤 === 失望的客户。 非常簡單。


🔗 [**更多: 監控!**](./sections/production/monitoring.chinese.md)

<br/><br/>

## ![✔] 5.2. 使用智慧紀錄 (smart logging) 增加透明度

**TL;DR:** 紀錄(logs)可以是除錯語句的一個不能說話的倉庫，或者表述應用執行過程的一個漂亮儀表板的驅動。從第1天計劃您的紀錄平台(logging platform)：如何收集、儲存和分析紀錄，以確保所需資訊 (例如，錯誤率、通過服務和伺服器等完成整個交易(transaction)) 都能被提取出來。

**否則:** 您最終像是面對一個黑盒子，不知道發生了什麽事情，然後你只能開始重新寫 log 來新增額外的資訊。


🔗 [**更多: 使用智慧紀錄 (smart logging) 增加透明度**](./sections/production/smartlogging.chinese.md)

<br/><br/>

## ![✔] 5.3. 委托可能的一切 (例如：gzip，SSL) 給反向代理

**TL;DR:** Node 在處理 CPU 密集型任務上表現不好，如 gzipping, SSL termination 等。相反，使用一個 "真正" 的中介層服務像 Nginx, HAProxy 或者雲端供應商的服務。

**否則:** 可憐的單執行緒 Node 將不幸地忙於處理網路任務，而不是處理應用程式核心，性能會相對應地降低。


🔗 [**更多: 委托可能的一切 (例如：gzip，SSL) 給反向代理**](./sections/production/delegatetoproxy.chinese.md)

<br/><br/>

## ![✔] 5.4. 鎖住相依套件

**TL;DR:** 您的程式碼必須在所有的環境中是相同的，但是令人驚訝的是，NPM默認情況下會讓依賴在不同環境下發生偏移 - 當在不同的環境中安裝套件的時候，它試圖拿套件的最新版本。克服這種問題可以利用NPM配置文件， .npmrc，告訴每個環境保存準確的(不是最新的)包的版本。另外，對於更精細的控制，使用 `npm shrinkwrap`。\*更新：作為NPM5，依賴默認鎖定。新的包管理工具，Yarn，也默認鎖定。

**否則:** QA測試通過的程式碼和批準的版本，在生產環境中表現不一致。更糟糕的是，同一生產集群中的不同伺服器可能執行不同的程式碼。


🔗 [**更多: 鎖住相依套件**](./sections/production/lockdependencies.chinese.md)

<br/><br/>

## ![✔] 5.5. 使用正確的工具保護執行緒正常執行

**TL;DR:** 執行緒必須持續執行，並在失敗時重新啟動。對於簡單的情況下，"重啟"工具如PM2可能足夠，但在今天的"Dockerized"世界 – 集群管理工具也值得考慮

**否則:** 執行幾十個實體沒有明確的戰略和太多的工具(集群管理，docker，PM2)可能導致DevOps的混亂


🔗 [**更多: 使用正確的工具保護執行緒正常執行**](./sections/production/guardprocess.chinese.md)


<br/><br/>

## ![✔] 5.6. 利用CPU多核

**TL;DR:** 在基本形式上，node應用程式執行在單個CPU核心上，而其他都處於空閑狀態。複製node執行緒和利用多核，這是您的職責 – 對於中小應用，您可以使用Node Cluster和PM2. 對於一個大的應用，可以考慮使用一些Docker cluster(例如k8s，ECS)複製執行緒或基於Linux init system(例如systemd)的部署腳本

**否則:** 您的應用可能只是使用了其可用資源中的25% (!)，甚至更少。注意，一台典型的伺服器有4個或更多的CPU，默認的Node.js部署僅僅用了一個CPU(甚至使用PaaS服務，比如AWS beanstalk，也一樣)。


🔗 [**更多: 利用所有的CPU**](./sections/production/utilizecpu.chinese.md)

<br/><br/>

## ![✔] 5.7. 創建一個“維護端點”

**TL;DR:** 在一個安全的API中暴露一組系統相關的資訊，比如記憶體使用情況和REPL等等。盡管這裡強烈建議依賴標準和作戰測試 (battle-tested) 工具，但一些有價值的資訊和操作更容易使用程式碼完成。

**否則:** 您會發現，您正在執行許多“診斷部署” – 將程式碼發送到生產環境中，僅僅只為了診斷目的提取一些資訊。


🔗 [**更多: 創建一個“維護端點”**](./sections/production/createmaintenanceendpoint.chinese.md)

<br/><br/>

## ![✔] 5.8. 使用APM產品發現錯誤和當機時間

**TL;DR:** 監控和性能的產品(即APM)先前一步地評估程式碼和API，自動的超過傳統的監測，並測量在服務和層級上的整體用戶體驗。例如，一些APM產品可以突顯導致最終用戶負載過慢的事務，同時指出根本原因。

**否則:** 你可能會花大力氣測量API性能和停機時間，也許你永遠不會知道，真實場景下哪個是你最慢的程式碼部分，這些怎麽影響用戶體驗。


🔗 [**更多: 使用APM產品發現錯誤和當機時間**](./sections/production/apmproducts.chinese.md)


<br/><br/>


## ![✔] 5.9. 使您的程式碼保持生產環境就緒

**TL;DR:** 在意識中抱著最終上線的想法進行編碼，從第1天開始計劃上線。這聽起來有點模糊，所以我寫了一些與生產維護密切相關的開發技巧(點擊下面的要點)

**否則:** 一個世界冠軍級別的IT/運維人員也不能拯救一個編碼低劣的系統。


🔗 [**更多: 使您的程式碼保持生產環境就緒**](./sections/production/productioncode.chinese.md)

<br/><br/>

## ![✔] 5.10. 測量和保護記憶體使用

**TL;DR:** Node.js和記憶體有引起爭論的聯系：V8引擎對記憶體的使用有稍微的限制(1.4GB)，在node的程式碼里面有記憶體泄漏的很多途徑 – 因此監視node的進程記憶體是必須的。在小型應用程式中，你可以使用shell指令周期性地測量記憶體，但在中等規模的應用程式中，可以考慮把記憶體監控建成一個健壯的監控系統。

**否則:** 您的記憶體可能一天泄漏一百兆，就像曾發生在沃爾瑪的一樣。


🔗 [**更多: 測量和保護記憶體使用**](./sections/production/measurememory.chinese.md)

<br/><br/>


## ![✔] 5.11. Node外管理您的前端資源

**TL;DR:** 使用專門的中介軟體(nginx，S3，CDN)服務前端內容，這是因為在處理大量靜態文件的時候，由於node的單執行緒模型(model)，它的性能很受影響。

**否則:** 您的單個node執行緒將忙於傳輸成百上千的html/圖片/angular/react文件，而不是分配其所有的資源為了其擅長的任務 – 服務動態內容


🔗 [**更多: Node外管理您的前端資源**](./sections/production/frontendout.chinese.md)

<br/><br/>


## ![✔] 5.12. 保持無狀態，幾乎每天都要停下伺服器

**TL;DR:** 在外部數據儲存上，儲存任意類型數據(例如用戶會話，緩存，上傳文件)。考慮間隔地停掉您的伺服器或者使用 ‘serverless’ 平台(例如 AWS Lambda)，這是一個明確的強化無狀態的行為。

**否則:** 某個伺服器上的故障將導致應用程式宕機，而不僅僅是停用故障機器。此外，由於依賴特定伺服器，伸縮彈性會變得更具挑戰性。


🔗 [**更多: 保持無狀態，幾乎每天都要停下伺服器**](./sections/production/bestateless.chinese.md)


<br/><br/>


## ![✔] 5.13. 使用自動檢測漏洞的工具

**TL;DR:** 即使是最有信譽的依賴套件，比如Express，會有使系統處於危險境地的已知漏洞(隨著時間推移)。通過使用社群的或者商業工具，不時的檢查漏洞和警告(本地或者Github上)，這類問題很容易被抑制，有些問題甚至可以立即修補。

**否則:** 否則: 在沒有專用工具的情況下，使程式碼清除漏洞，需要不斷地跟蹤有關新威脅的在線出版物。相當繁瑣。


🔗 [**更多: 使用自動檢測漏洞的工具**](./sections/production/detectvulnerabilities.chinese.md)

<br/><br/>


## ![✔] 5.14. 在每一個log語句中指明 ‘TransactionId’

也被稱為 correlation id / transit id / tracing id / request id / request context / 等等

**TL;DR:** 在每一個請求的每一條log進入點，指定同一個識別碼，transaction-id: {某些值}。然後在檢查紀錄中的錯誤時，很容易總結出前後發生的事情。不幸的是，由於Node異步的天性自然，這是不容易辦到的，看下程式碼裡面的例子

**否則:** 在沒有上下文的情況下查看生產環境中錯誤紀錄，這會使問題變得更加困難和緩慢去解決。


🔗 [**更多: 在每一個log語句中指明 ‘TransactionId’**](./sections/production/assigntransactionid.chinese.md)

<br/><br/>


## ![✔] 5.15. 設置NODE_ENV=production

**TL;DR:** 設置環境變量 `NODE_ENV` 為‘production’ 或者 ‘development’，這是一個是否驅動上線環境最佳化的旗標(flag) - 很多NPM的套件透過它來判斷當前的環境，據此最佳化生產環境中的程式碼。

**否則:** 遺漏這個簡單的屬性可能大幅降低性能。例如，在使用Express作為服務端渲染頁面的時候，如果未設置NODE_ENV，性能將會減慢大概三分之一！


🔗 [**更多: 設置NODE_ENV=production**](./sections/production/setnodeenv.chinese.md)


<br/><br/>

## ![✔] 5.16. 設計自動化、原子化和零停機時間部署

**TL;DR:** 研究表明，執行許多部署的團隊降低了嚴重上線問題的可能性。不需要危險的手動步驟和服務停機時間的快速和自動化部署大大改善了部署過程。你應該達到使用Docker結合CI工具，使他們成為簡化部署的業界標準。

**否則:** 長時間部署 -> 線上當機 & 和人相關的錯誤 -> 團隊部署時不自信 -> 更少的部署和需求

<br/><br/>

## ![✔] 5.17. 使用長期支援版本的 Node.js

**TL;DR:** 確保你使用的是Node.js的LTS版本，以獲得關鍵的錯誤修復、安全更新和性能改進。

**否則:** 新發現的錯誤或漏洞可能被用來攻擊在生產環境中執行的應用程式，你的應用程式可能變得不受各種模組(modules)的支援，更難維護。

🔗 [**閱讀更多: 使用長期支援版本的 Node.js**](./sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. 不要在應用程式內決定紀錄(logs)的位置

**TL;DR:** 紀錄目的地不應該由開發人員在應用程式碼中寫死(hard-coded)，而應該由應用程序執行的執行環境來定義。開發者應該使用紀錄工具將紀錄寫入`stdout`，然後讓執行環境 (容器、服務器等) 將`stdout`導向適當的目的地 (即Splunk、Graylog、ElasticSearch等)。

**否則:** Application handling log routing === hard to scale，loss of logs，poor separation of concerns

🔗 [**閱讀更多: Log Routing**](./sections/production/logrouting.md)

<br/><br/>

## ![✔] 5.19. 透過 `npm ci` 安裝你的套件

**TL;DR:** 你必須確保生產環境下的程式碼使用你測試過的套件包的準確版本。執行`npm ci`，配合package.json和package-lock.json，來嚴格地對你的相依套件進行簡潔安裝(clean install)。建議在自動化環境中使用此指令，如持續集成管道(CI pipelines)。

**否則:** QA會徹底測試程式碼，並批准一個在生產環境中會有不同表現的版本。更糟糕的是，同一生產集群中的不同伺服器可能會執行著不同的程式碼。

🔗 [**閱讀更多: 使用 npm ci**](./sections/production/installpackageswithnpmci.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `6. 安全性實踐`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. 擁護linter安全準則

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** 使用安全相關的linter插件，比如[eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)，最好在開發階段盡早捕獲安全隱患或者問題。這能幫助察覺安全的問題，比如使用eval，調用子執行緒，或者根據字面含義(比如，用戶輸入)引入模組等等。點擊下面'更多'查看一個安全性linter可以檢測到的程式碼範例。

**否則:** 在開發過程中，可能一個直白的安全隱患，成為線上環境中一個嚴重問題。此外，專案可能沒有遵循一致的安全規範，而導致引入漏洞，或敏感資訊被提交到遠程倉庫(remote repositories)中。

🔗 [**更多: Lint 規範**](./sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. 使用中介層限制並發請求

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS攻擊非常流行而且相對容易處理。使用外部服務，比如cloud負載平衡(load balancers)，cloud防火墻，nginx，或者(對於小的，不是那麽重要的app)一個頻率限制中界層(比如[express-rate-limit](https://www.npmjs.com/package/express-rate-limit))，來實現頻率限制。

**否則:** 應用程式可能受到攻擊，導致拒絕服務，在這種情況下，真實用戶會遭受服務降級或不可用。

🔗 [**更多: 實施速率限制**](./sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 把敏感資訊從配置文件中抽離出來，或者使用套件對其加密

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** 不要在配置文件或原始碼中儲存純文本敏感資訊。相反，使用諸如Vault產品、Kubernetes/Docker Secrets或使用環境變數之類的安全管理系統。最後一個結果是，儲存在原始碼管理中的敏感資訊必須進行加密和管理 (滾動密鑰(rolling keys)、效期、審核等)。使用pre-commit/push hooks 防止意外提交敏感資訊。

**否則:** 原始碼管理，即使對於私有倉庫，也可能會被錯誤地公開，此時所有的秘密資訊都會被公開。外部組織的原始碼管理的訪問權限將無意中提供對相關系統 (資料庫、api、服務等) 的訪問。

🔗 [**更多: 安全管理**](./sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. 使用 ORM/ODM 函式庫防止查詢注入漏洞

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** 為了防止SQL/NoSQL注入和其他惡意攻擊，一定要使用一個 ORM/ODM 或 database 函式庫，該庫可以轉義數據或支援命名或索引的參數化查詢，並負責驗證用戶輸入的預期類型。不要僅僅使用 JavaScript 樣板字面值(template strings)或字符串連接來對查詢中注入數值，因為這將使你的應用程式面臨廣泛的漏洞。所有知名的 Node.js 資料庫訪問函式庫(例如[Sequelize](https://github.com/sequelize/sequelize)，[Knex](https://github.com/tgriesser/knex)，[mongoose](https://github.com/Automattic/mongoose))都有內置的保護功能，以防止注入攻擊。

**否則:** 未經驗證或未被過濾處理(unsanitized)的用戶輸入，可能會導致使用者在使用 MongoDB 進行 NoSQL 操作時進行注入，而不使用適當的過濾系統或 ORM 很容易導致 SQL 注入攻擊，從而造成巨大的漏洞。

🔗 [**更多:使用 ORM/ODM 函式庫防止查詢注入**](./sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. 通用安全最佳實踐集合

**TL;DR:** 這些是與 Node.js 不直接相關的安全建議的集合 - Node 的實現與任何其他語言沒有太大的不同。點擊 "閱讀更多" 瀏覽。

🔗 [**更多: 通用安全最佳實踐**](./sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. 調整 HTTP 響應頭以加強安全性

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 應用程式應該使用安全的 header 來防止攻擊者使用常見的攻擊方式，諸如跨站點腳本(XSS)、點擊劫持和其他惡意攻擊。可以使用模組，比如 [helmet](https://www.npmjs.com/package/helmet)輕鬆進行配置。

**否則:** 攻擊者可以對應用程式的用戶進行直接攻擊，導致巨大的安全漏洞

🔗 [**更多: 在應用程式中使用安全的header**](./sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. 經常自動檢查易受攻擊的依賴套件

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** 在 npm 的生態系統中，一個項目有許多依賴套件是很常見的。在找到新的漏洞時，應始終將相依專案保留在檢查中。使用工具，類似於[npm audit](https://docs.npmjs.com/cli/audit) 或者 [snyk](https://snyk.io/)追蹤、監視和修補易受攻擊的依賴套件。將這些工具與 CI 設置集成，以便在將其上線之前捕捉到易受攻擊的依賴套件。

**否則:** 攻擊者可以檢測到您的 web 框架並攻擊其所有已知的漏洞。

🔗 [**更多: 安全依賴**](./sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. 使用 bcrypt 或 scrypt 保護用戶的密碼/秘密 (Passwords/Secrets)

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 密碼或秘密（如API密鑰）應使用安全的 hash + salt 函數來儲存，如`bcrypt`,`scrypt`，或最壞的情況下`pbkdf2`。

**否則:** 在沒有使用安全功能的情況下儲存的密碼和秘密很容易受到窮舉攻擊和字典攻擊，最終會導致其泄露。

🔗 [**更多: 使用者密碼**](./sections/security/userpasswords.md)

<br/><br/>

## ![✔] 6.9. 轉義 HTML、JS 和 CSS 輸出

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** 發送給瀏覽器的不受信任數據可能會被執行，而不是顯示，這通常被稱為跨站點腳本(XSS)攻擊。使用專用套件將數據顯式標記為不應執行的純文本內容(例如:編碼、轉義)，可以減輕這種問題。

**否則:** 攻擊者可能會將惡意的 JavaScript 程式碼儲存在您的 DB 中，然後將其發送給可憐的客戶端。

🔗 [**更多: 轉義輸出**](./sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. 驗證傳入的JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** 驗證傳入請求的 body payload ，並確保其符合預期要求，如果沒有，則快速報錯。為了避免每個路由中繁瑣的撰寫驗證程式，您可以使用基於JSON的輕量級驗證架構，比如[jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**否則:** 您疏忽和寬鬆的方法大大增加了攻擊面，並鼓勵攻擊者嘗試許多輸入，直到他們找到一些組合，使應用程式崩潰。

🔗 [**更多: 驗證傳入的JSON schemas**](./sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. 支援黑名單的JWT

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** 當使用JSON Web Tokens(例如，通過[Passport.js](https://github.com/jaredhanson/passport))，預設情況下，沒有任何機制可以從發出的 token 中撤銷存取權限。一旦發現了一些惡意用戶活動，只要它們持有有效的 token，就無法阻止他們存取系統。透過實作一個不受信任 token 的黑名單，並在每個請求上驗證，來減輕此問題。

**否則:** 過期或錯誤的令牌可能被第三方惡意使用，以訪問應用程式，並模擬 token 的所有者。

🔗 [**更多: 為JSON Web Token新增黑名單**](./sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. 限制每個用戶允許的登錄請求

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR：** 一個簡單而強大的技術 - 使用兩個指標來限制授權嘗試。

1. 第一個是同一用戶的唯一ID/名稱和IP地址的連續失敗嘗試次數。
2. 第二種是在很長一段時間內從一個IP地址嘗試失敗的次數。例如，如果一個IP地址在一天內進行了100次失敗的嘗試，就可以阻止它。

**否則:** 攻擊者可以發出無限制的密碼匹配嘗試，以獲取對應用程式中特權用戶的存取權限。

🔗 [**更多: 限制登錄頻率**](./sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. 使用非 root 用戶執行 Node.js

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** Node.js 作為一個具有無限權限的 root 用戶執行，這是一種普遍的情況。例如，在 Docker 容器中，這是預設行為。建議創建一個非 root 用戶，並保存到 Docker image 中(下面給出了範例)，或者通過調用帶有 "-u username" 的容器來代表此用戶執行該執行緒。

**否則:** 在伺服器上執行腳本的攻擊者在本地機器上獲得無限制的權利 (例如，改變iptable，引流到他的伺服器上)

🔗 [**更多: 使用非 root 用戶執行 Node.js**](./sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. 使用反向代理或中界軟體限制負載(payload)大小

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 請求body有效載荷(payload)越大，Node.js的單執行緒就越難處理它。這是攻擊者在沒有大量請求(DOS/DDOS 攻擊)的情況下，就可以讓伺服器跪下的機會。在邊緣上(例如，防火墻，ELB)限制傳入請求的 body 大小，或者通過配置[express body parser](https://github.com/expressjs/body-parser)僅接收小的載荷(payload)，可以減輕這種問題。

**否則:** 您的應用程式將不得不處理大的請求，無法處理它必須完成的其他重要工作，從而導致對 DOS 攻擊的性能影響和脆弱性。

🔗 [**更多: 限制負載大小**](./sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. 避免 JavaScript 的 eval 語句

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` 是邪惡的，因為它允許在執行時執行自定義的 JavaScript 程式碼。這不僅是一個性能方面的問題，而且也是一個重要的安全問題，因為惡意的 JavaScript 程式碼可能源自於用戶輸入。應該避免的另一種語言功能是 `new Function` 構造函數。`setTimeout` 和 `setInterval` 也不應該傳入動態 JavaScript 程式碼。

**否則:** 惡意 JavaScript 程式碼查找傳入 `eval` 或其他實時判斷的 JavaScript 函數的文本的方法，並將獲得在該頁面上 JavaScript 權限的完全存取權。此漏洞通常為XSS攻擊。

🔗 [**更多: 避免JavaScript的eval声明**](./sections/security/avoideval.chinese.md)

<br/><br/>

## ![✔] 6.16. 防止惡意RegEx讓Node.js的單執行緒過載執行(overloading)

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 正則表達式，在方便的同時，對 JavaScript 應用構成了真正的威脅，特別是 Node.js 平台。匹配文本的用戶輸入需要大量的 CPU 周期來處理。在某種程度上，正則處理是效率低下的，比如驗證10個單詞的單個請求可能阻止整個 event loop 長達6秒，並讓 CPU 引火燒身。由於這個原因，偏向第三方的驗證包，比如 [validator.js](https://github.com/chriso/validator.js)，而不是採用正則，或者使用 [safe-regex](https://github.com/substack/safe-regex) 來檢測有問題的正則表達式。

**否則:** 寫得不好的正則表達式可能容易受到正則表達式DoS攻擊的影響，這將完全阻止 event loop 。例如，流行的`moment` 包在2017年的11月，被發現使用了錯誤的RegEx用法而易受攻擊。

🔗 [**更多: 防止惡意正則**](./sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. 避免使用變數加載模組

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 避免通過作為參數的路徑 requiring/importing 另一個文件，原因是它可能源自用戶輸入。此規則可擴展為存取一般文件(即:`fs.readFile()`)或使用來自用戶輸入的動態變數存取其他敏感資源。[Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter可以捕捉這樣的模式，並盡早提前警告。

**否則:** 惡意用戶輸入可以找到用於獲得篡改文件的參數，例如，文件系統上以前上傳的文件，或存取已有的系統文件。

🔗 [**更多: 安全地加載模塊**](./sections/security/safemoduleloading.chinese.md)

<br/><br/>

## ![✔] 6.18. 在沙盒(sandbox)中執行不安全的程式碼

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 當任務在執行時給出的外部程式碼時(例如，插件)，使用任何類型的`sandbox`執行環境保護主程式碼，並隔離開主程式碼和插件。這可以通過一個專用的過程來實現 (例如:cluster.fork())，無伺服器環境或充當沙盒的專用 npm 包。

**否則:** 插件可以通過無限循環、記憶體超載和對敏感執行緒環境變數的訪問等多種選項進行攻擊

🔗 [**更多: 在沙箱中執行不安全程式碼**](./sections/security/sandbox.chinese.md)

<br/><br/>

## ![✔] 6.19. 使用子執行緒時要格外小心

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** 盡可能地避免使用子執行緒，如果您仍必須這樣做，驗證和清理輸入以減輕 shell 注入攻擊。更喜歡使用 "child_process"。 execFile 的定義將只執行具有一組屬性的單個命令，並且不允許 shell 參數擴展。傾向於使用`child_process.execFile`，從定義上來說，它將僅僅執行具有一組屬性的單個指令，並且不允許 shell 參數擴充。

**否則:** 由於將惡意用戶輸入傳遞給未過濾(unsanitized)處理的系統指令，直接地使用子執行緒可能導致遠端指令執行或 shell 注入攻擊。

🔗 [**更多: 處理子執行緒時要格外小心**](./sections/security/childprocesses.chinese.md)

<br/><br/>

## ![✔] 6.20. 隱藏客戶端的錯誤詳細資訊

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 預設情況下，集成的 express 錯誤處理程式隱藏錯誤詳細資訊。但是，極有可能，您實現自己的錯誤處理邏輯與自定義錯誤對象(被許多人認為是最佳做法)。如果這樣做，請確保不將整個 Error 物件返回到客戶端(client)，這可能包含一些敏感的應用程式詳細資訊。

**否則:** 敏感應用程式詳細資訊(如伺服器文件路徑、使用中的第三方模組和可能被攻擊者利用的應用程式的其他內部工作流程)可能會從 stack trace 發現的資訊中泄露。

🔗 [**更多: 隱藏客戶端的錯誤詳細資訊**](./sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. 對npm或Yarn，配置2FA

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 開發過程中的任何步驟都應使用MFA(多重身份驗證)進行保護，npm/Yarn對於那些能夠掌握某些開發人員密碼的攻擊者來說是一個很好的機會。使用開發人員憑據(credentials)，攻擊者可以向跨專案和服務廣泛安裝的套件中注入惡意程式碼。甚至可能在網路上公開發布。在 npm 中啟用2因素身份驗證(2-factor-authentication)，攻擊者幾乎沒有機會改變您的套件程式碼。

**否則:** [你聽說過eslint的開發者的密碼被劫持的事情嗎？?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. 修改 session 中介層設置

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 每個 web 框架和技術都有其已知的弱點 - 告訴攻擊者我們使用的 web 框架幫了他們很大的忙。使用 session 中介層的預設設置，可以以類似於 `X-Powered-By` header 的方式向模組和框架特定的劫持攻擊公開您的應用。嘗試隱藏識別和揭露 tech stack 的任何內容(例如:Nonde.js，express)。

**否則:** 可以通過不安全的連接發送 cookie，攻擊者可能會使用會話識別(session identification)來特定初 web 應用程式的基礎框架以及特定於模組的漏洞。

🔗 [**更多: cookie 和 session 安全**](./sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. 透過明確設置執行緒崩潰的時間來避免 DOS 攻擊

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** 當錯誤未被處理時，Node 執行緒將崩潰。即使錯誤被捕獲並得到處理，許多最佳實踐甚至建議退出。例如，Express會在任何異步錯誤上崩潰 - 除非使用 catch 子句包裝路由。這將打開一個非常愜意的攻擊點，攻擊者識別哪些輸入會導致執行緒崩潰並重覆發送相同的請求。沒有即時補救辦法，但一些技術可以減輕苦楚: 每當執行緒因未處理的錯誤而崩潰，都會發出警報，驗證輸入並避免由於用戶輸入無效而導致執行緒崩潰，並使用 catch 將所有路由處理包裝起來，並在請求中出現錯誤時，考慮不要崩潰(與全局發生的情況相反)。

**否則:** 這只是一個起到教育意義的假設: 給定許多 Node.js 應用程式，如果我們嘗試傳遞一個空的 JSON 正文到所有 POST 請求 - 少數應用程式將崩潰。在這一點上，我們可以只是重覆發送相同的請求，就可以輕鬆地搞垮應用程式。

<br/><br/>

## ![✔] 6.24. 避免不安全的重新導向

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** 不驗證用戶輸入的重新導向可使攻擊者啟動網路釣魚詐騙，竊取用戶憑據，以及執行其他惡意操作。

**否則:** 當攻擊者發現你沒有校驗用戶提供的外部輸入時，他們會在論壇、社交媒體以和其他公共場合發布他們精心制作的連結來誘使用戶點擊，以此達到漏洞利用的目的。

🔗 [**閱讀更多: 避免不安全的重新導向**](./sections/security/saferedirects.chinese.md)

<br/><br/>

## ![✔] 6.25. 避免將機密資訊發布到NPM倉庫

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** 您應該採取預防措施來避免偶然地將機密資訊發布到 npm 倉庫的風險。 一個 `.npmignore` 文件可以被用作忽略掉特定的文件或目錄，或者一個在 `package.json` 中的 `files` 數組可以起到一個白名單的作用.

**否則:** 您專案的API密鑰、密碼或者其它機密資訊很容易被任何碰到的人濫用，這可能會導致經濟損失、身份冒充以及其它風險。

🔗 [**閱讀更多: 避免發布機密資訊**](./sections/security/avoid_publishing_secrets.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `7. 草稿: 效能實踐`

## 我們的貢獻者們正在努力完善這個章節。 [你想要加入嗎?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. 不要阻塞事件循環

**TL;DR:** 避免執行 CPU 密集型的任務，並將這些任務轉移到基於上下文的專用執行緒中，因為它們會阻塞大多數單執行緒事件循環。

**否則:** 由於事件循環被阻塞了，Node.js 將無法處理其它請求，從而導致同時請求的用戶的延遲。 **3000 位用戶正在等待回應，內容本身已經準備好了提供服務，但是一個單獨的請求阻止了伺服器將結果分發回去。**

🔗 [**閱讀更多: 不要阻塞事件循環**](./sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. 優先使用原生的JS方法，而不是像 Lodash 這樣的用戶空間級別的實用工具

**TL;DR:** 使用像 `lodash` 和 `underscore` 這樣的實用套件替代原生的 JS 方法，通常來說這麽做更不好，因為它導致了一些不必要的相依以及更差的性能表現。
請記住，隨著新的 V8 引擎以及新的 ES 標準的引入，原生方法得到了改進，它們現在會比這些實用工具套件高出大概 50% 的性能。

**否則:** 你將不得不維護一些性能更低的項目，在這些項目中，你本可以很簡單的使用那些已經可以用的東西，或者用幾行程式碼來取代掉幾個文件。

🔗 [**閱讀更多: 原生方法勝過實用工具**](./sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# `8. Docker Best Practices`

🏅 對於 [Bret Fisher](https://github.com/BretFisher) 非常感謝，透過他，我們學到很多最佳實踐。

<br/><br/>

## ![✔] 8.1 使用多階段構建以獲得更精簡、更安全的 Docker images

**TL;DR:** 使用多階段構建，只複製必要的生產工件(artifacts)。很多構建時的依賴和文件在執行你的應用程式時是不需要的。通過多階段構建，這些資源可以在構建期間使用，而執行時環境只包含必要的內容。多階段構建是擺脫超重和安全威脅的一個簡單方法。

**否則:** 較大的 image 將需要更長的時間來構建和運輸，僅有的構建工具可能包含漏洞，只用於構建階段的秘密可能會被泄露。

### 多階段構建的 Dockerfile 範例

```dockerfile
FROM node:14.4.0 AS build

COPY . .
RUN npm ci && npm run build


FROM node:slim-14.4.0

USER node
EXPOSE 8080

COPY --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/package-lock.json ./
RUN npm ci --production

CMD [ "node", "dist/app.js" ]
```

🔗 [**閱讀更多: 多階段構建**](./sections/docker/multi_stage_builds.md)

<br /><br /><br />

## ![✔] 8.2. 使用 `node` 啟動，避免使用 `npm start`

**TL;DR:** 使用 `CMD ['node','server.js']` 來啟動你的應用程式，避免使用不向程式碼傳遞操作系統信號的 npm 腳本。這可以防止子執行緒、信號處理、優雅關閉和僵屍執行緒的問題。

**否則:** 當沒有信號傳遞時，你的程式將永遠不會得到關閉的通知。沒有這一點，它將失去正確關閉的機會，可能會丟失當前的請求和/或數據。

[**閱讀更多: 使用 node 指令啟動容器，避免 npm start**](./sections/docker/bootstrap-using-node.md)

<br /><br /><br />

## ![✔] 8.3. 讓 Docker 執行時處理複製和正常執行時間

**TL;DR:** 當使用 Docker 執行時協調器 (如Kubernetes) 時，直接調用 Node.js 執行緒，不要使用中間執行緒管理器或複製執行緒的自定義編號（如PM2、Cluster模組）。執行時平台擁有最高的數據量和可視性，可以做出放置決策 - 它最清楚需要多少個執行緒，如何拆分它們，以及在崩潰的情況下該怎麽做

**否則:** 容器由於缺乏資源而不斷崩潰，會被執行緒管理器無限期地重新啟動。如果 Kubernetes 意識到這一點，它可以把它重新安置到一個不同的空間實例上

🔗 [**閱讀更多: 讓 Docker 協調器來重啟和複製執行緒**](./sections/docker/restart-and-replicate-processes.md)

<br/><br /><br />

## ![✔] 8.4. 使用 .dockerignore 來防止泄露秘密

**TL;DR**: 包括一個 `.dockerignore` 文件，過濾掉常見的秘密文件和開發工件(artifacts)。透過這樣做，你可以防止秘密泄漏到 image 中。作為一種獎勵，構建時間將大大減少。另外，確保不要遞歸地複製所有文件，而是明確地選擇哪些文件應該被複製到 Docker 上

**否則**: 普通的個人秘密文件，如`.env`、`.aws `和`.npmrc`，將與任何能夠存取 image 的人共享（例如Docker倉庫）。

🔗 [**閱讀更多: 使用 .dockerignore**](./sections/docker/docker-ignore.md)

<br /><br /><br />

## ![✔] 8.5. 正式上線前清理相依關係

**TL;DR:** 雖然在構建和測試的生命周期中有時需要開發依賴，但最終運往正式環境的 image 應該是最小的，沒有開發依賴的。這樣做可以保證只有必要的程式碼被運出，潛在的攻擊量(即攻擊面)被最小化。當使用多階段構建時(見專門章節)，可以通過先安裝所有的依賴項，最後運行`npm ci --production`來實現。

**否則:** 許多臭名昭著的 npm 安全漏洞是在開發套件中發現的。(e.g. [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes))

🔗 閱讀更多: [Remove development dependencies](./sections/docker/install-for-production.md)

<br /><br /><br />

## ![✔] 8.6. 聰明地、優雅地關機

**TL;DR:** 處理執行緒 SIGTERM 事件並清理所有現有的連接和資源。這應該在響應正在進行的請求的同時進行。在 Docker 化的執行系統中，關閉容器不是一個罕見的事件，而是作為日常工作的一部分經常發生的事情。要做到這一點，需要一些周到的程式碼來協調幾個移動部件(parts)。負載平衡器(load-balancer)、保持連接(keep-alive connections)、 HTTP 伺服器和其他資源。

**否則:** 立即死亡意味著不對成千上萬的失望的用戶作出回應

🔗 [**閱讀更多: 優雅地關機**](./sections/docker/graceful-shutdown.md)

<br /><br /><br />

## ![✔] 8.7. 同時使用 Docker 和 V8 設置記憶體限制

**TL;DR:** 始終使用 Docker 和 JavaScript 執行時旗標(flags)配置記憶體限制。Docker的限制是為了做出深思熟慮的容器放置決定，而 --v8 的旗標(flag) max-old-space 是為了及時啟動 GC ，防止記憶體利用不足。實際上，將 v8 的舊空間記憶體設置為略低於容器的限制

**否則:** docker 定義是需要的，以執行周到的擴展決策，並防止搶走其他容器的資源。如果不同時定義 v8 的限制，它就會對容器資源利用不足 - 如果沒有明確的指示，它在利用其主機資源的50-60%時就會崩潰。

🔗 [**閱讀更多: 僅使用Docker設置記憶體限制**](./sections/docker/memory-limit.md)

<br /><br /><br />

## ![✔] 8.8. 為高效的快取制定計劃

**TL;DR:** 如果操作正確，從快取中重建整個 docker image 幾乎是瞬間完成的。更新較少的指令應該放在 Docker 文件的頂部，而不斷變化的指令(如應用程式碼)應該放在底部。

**否則:** Docker 構建的時間會很長，即使是做微小的改動也會消耗大量的資源

🔗 [**閱讀更多: 利用快取來減少構建時間**](./sections/docker/use-cache-for-shorter-build-time.md)

<br /><br /><br />

## ![✔] 8.9. 使用明確的 image 參考，避免使用 `latest` 標籤

**TL;DR:** 指定一個明確的 image 摘要或版本標籤，永遠不要提到 `latest`。開發人員經常被引導相信，指定`latest`標籤將為他們提供版本庫中最新的圖像，但事實並非如此。使用摘要可以保證服務的每個實例都在執行完全相同的程式碼。

此外，引用一個 image 標籤代表著基本 image 可能會發生變化，因為 image 標籤不能被用於確定的安裝。反之，如果期望有一個確定的安裝，可以使用 SHA256 摘要來引用一個準確的圖像。

**否則:** 一個新版本的基本 image 可能會被部署到正式環境中，並帶來破壞性的變化，導致非預期的應用行為。

🔗 [**閱讀更多: 理解 image 標籤，謹慎使用 "latest" 標籤**](./sections/docker/image-tags.md)

<br /><br /><br />

## ![✔] 8.10. 傾向於更小的 Docker 基礎 image

**TL;DR:** 大型 image 會導致更高的漏洞暴露和更多的資源消耗。使用更精簡的 Docker image，如 Slim 和 Alpine Linux 變體，可以緩解這個問題。

**否則:** 構建(building)、推送(pushing)和拉動(pulling) image 將花費更長的時間，未知的攻擊載體可能會被惡意行為者使用，並且會消耗更多的資源。

🔗 [**閱讀更多: 傾向於更小的 image**](./sections/docker/smaller_base_images.md)

<br /><br /><br />

## ![✔] 8.11. 清除構建時的秘密，避免 args 中的秘密

**TL;DR:** 避免 Docker 構建環境中的秘密泄露。一個 Docker image通常在多個環境中共享，如 CI 和倉庫，而這些環境並不像正式環境那樣經過過濾。一個典型的例子是 npm token，它通常作為參數傳遞給 dockerfile 。這個 token 在需要它的時候還留在 image 中，並允許攻擊者無限期地存取一個私有的 npm 倉庫。這可以透過複製一個秘密文件如`.npmrc`來避免，然後使用多階段構建將其刪除(注意，構建歷史也應該被刪除)，或者使用 Docker build-kit 的秘密功能，這樣就不會留下任何痕跡。

**否則:** 每個能夠存取 CI 和 docker 倉庫的人還將獲得一些珍貴的組織秘密作為獎勵。

🔗 [**閱讀更多: 清除構建時的秘密**](./sections/docker/avoid-build-time-secrets.md)

<br /><br /><br />

## ![✔] 8.12. 掃描 image 的多層漏洞

**TL;DR:** 除了檢查程式碼的依賴性外，漏洞也會掃描被運送到正式環境中的最終 image。Docker image 掃描器不僅檢查程式碼的依賴性，還檢查操作系統的二進制文件。這種 E2E 安全掃描覆蓋了更多的領域，並驗證了在構建過程中沒有壞人注入壞東西。因此，建議在部署前的最後一步執行這個掃描。有一些免費和商業的掃描器也提供 CI/CD 插件

**否則:** 你的程式碼可能是完全沒有漏洞的。但是，由於應用程序通常使用的操作系統級二進制文件(如OpenSSL、TarBall)的脆弱版本，它仍然可能被黑客攻擊。

🔗 [**閱讀更多: 正式上線前掃描整個 image**](./sections/docker/scan-images.md)

<br /><br /><br />

## ![✔] 8.13 清除 NODE_MODULE 快取

**TL;DR:** 在容器中安裝完依賴套件後，刪除本地快取。為了今後更快地安裝，複製相依關係沒有任何意義，因為不會有任何進一步的安裝 - Docker image 是不可改變的。使用一行原始碼就可以減少幾十 MB(通常是 image 大小的10-50%)。

**否則:** 將被運往線上的 image 將由於永遠不會被使用的文件而多出30%的空間。

🔗 [**閱讀更多: 清除 NODE_MODULE 快取**](./sections/docker/clean-cache.md)

<br /><br /><br />

## ![✔] 8.14. 通用的 Docker 實踐

**TL;DR:** 這是一個與 Node.js 沒有直接關係的 Docker 建議集 - Node 的實現與其他語言沒有太大區別。點擊 閱讀更多 的內容來瀏覽。

🔗 [**閱讀更多: 通用的 Docker 實踐**](./sections/docker/generic-tips.md)

<br/><br /><br />

## ![✔] 8.15. 檢查(Lint)你的 Dockerfile

**TL;DR:** 對 Dockerfile 進行檢查是識別 Dockerfile 中與最佳實踐不同的問題的一個重要步驟。通過使用專門的 Docker linter 檢查潛在的缺陷，可以很容易地發現性能和安全方面的改進，從而節省無數的時間浪費或線上程式中的安全問題。

**否則:** Dockerfile 的作者錯誤地將 Root 作為線上用戶，而且還使用了一個來自未知資源庫的 image。這可以通過一個簡單的 linter 來避免。

🔗 [**閱讀更多: 檢查(Lint)你的 Dockerfile**](./sections/docker/lint-dockerfile.md)

<br/><br /><br />

<p align="right"><a href="#table-of-contents">⬆ 返回頂部</a></p>

# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/goldbergyoni/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![BR](./assets/flags/BR.png) [Brazilian Portuguese](./README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](./assets/flags/CN.png) [Chinese](./README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)
- ![RU](./assets/flags/RU.png) [Russian](./README.russian.md) - Courtesy of [Alex Ivanov](https://github.com/contributorpw)
- ![PL](./assets/flags/PL.png) [Polish](./README.polish.md) - Courtesy of [Michal Biesiada](https://github.com/mbiesiad)
- ![JA](./assets/flags/JA.png) [Japanese](./README.japanese.md) - Courtesy of [Yuki Ota](https://github.com/YukiOta), [Yuta Azumi](https://github.com/YA21)
- ![EU](./assets/flags/EU.png) [Basque](README.basque.md) - Courtesy of [Ane Diaz de Tuesta](https://github.com/anediaz) & Joxefe Diaz de Tuesta

### Translations in progress

- ![FR](./assets/flags/FR.png) [French](./README.french.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/129))
- ![HE](./assets/flags/HE.png) Hebrew ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/156))
- ![KR](./assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/94))
- ![ES](./assets/flags/ES.png) [Spanish](https://github.com/goldbergyoni/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/95))
- ![TR](./assets/flags/TR.png) Turkish ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [GitHub projects](https://github.com/goldbergyoni/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png"/>

[Yoni Goldberg](https://github.com/goldbergyoni)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in the USA, Europe, and Israel on building large-scale Node.js applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at [@goldbergyoni](https://github.com/goldbergyoni) or [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png"/>

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png"/>

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kevyn.png"/>

[Kevyn Bruyere](https://github.com/kevynb)
<a href="https://www.linkedin.com/in/kevynbruyere/"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Independent full-stack developer with a taste for Ops and automation.

<br/>

### Steering Committee Emeriti

<img align="left" width="100" height="100" src="assets/images/members/sagir.png"/>

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, TypeScript, GraphQL, MongoDB, pretty much anything that involves JS/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation.

<br/>

## Collaborators

Thank you to all our collaborators! 🙏

Our collaborators are members who are contributing to the repository on a regular basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](./.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"/></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"/></a> | <a href="https://github.com/rluvaton" target="_blank"><img src="assets/images/members/raz-luvaton.jpg" width="75" height="75" alt="Raz Luvaton" loading="lazy"/></a> | <a href="https://github.com/josh-hemphill" target="_blank"><img src="assets/images/members/jhemphill.jpg" width="75" height="75" alt="Josh Hemphill" loading="lazy"/></a> |
| :----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                    [Ido Richter (Founder)](https://github.com/idori)                                     |                                         [Keith Holliday](https://github.com/TheHollidayInn)                                         |                                                              [Raz Luvaton](https://github.com/rluvaton)                                                              |                                                             [Josh Hemphill](https://github.com/josh-hemphill)                                                             |

### Collaborator Emeriti

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"/></a> |
| :--------------------------------------------------------------------------------------------------------------------------: |
|                                        [Refael Ackermann](https://github.com/refack)                                         |

<br/>

## Contributing

If you've ever wanted to contribute to open source, now is your chance! See the [contributing docs](.operations/CONTRIBUTING.md) for more information.

## Contributors ✨

Thanks goes to these wonderful people who have contributed to this repository!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kevinrambaud"><img src="https://avatars1.githubusercontent.com/u/7501477?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Rambaud</b></sub></a><br /><a href="#content-kevinrambaud" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mfine15"><img src="https://avatars1.githubusercontent.com/u/1286554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Fine</b></sub></a><br /><a href="#content-mfine15" title="Content">🖋</a></td>
    <td align="center"><a href="http://squgeim.github.io"><img src="https://avatars0.githubusercontent.com/u/4996818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shreya Dahal</b></sub></a><br /><a href="#content-squgeim" title="Content">🖋</a></td>
    <td align="center"><a href="http://matheusrocha89.com"><img src="https://avatars1.githubusercontent.com/u/3718366?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matheus Cruz Rocha</b></sub></a><br /><a href="#content-matheusrocha89" title="Content">🖋</a></td>
    <td align="center"><a href="https://bityog.github.io/Portfolio/"><img src="https://avatars2.githubusercontent.com/u/28219178?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yog Mehta</b></sub></a><br /><a href="#content-BitYog" title="Content">🖋</a></td>
    <td align="center"><a href="http://kudapara.co.zw"><img src="https://avatars3.githubusercontent.com/u/13519184?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kudakwashe Paradzayi</b></sub></a><br /><a href="#content-kudapara" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.t1st3.com/"><img src="https://avatars1.githubusercontent.com/u/1469638?v=4?s=100" width="100px;" alt=""/><br /><sub><b>t1st3</b></sub></a><br /><a href="#content-t1st3" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/mulijordan1976"><img src="https://avatars0.githubusercontent.com/u/33382022?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mulijordan1976</b></sub></a><br /><a href="#content-mulijordan1976" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/matchai"><img src="https://avatars0.githubusercontent.com/u/4658208?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matan Kushner</b></sub></a><br /><a href="#content-matchai" title="Content">🖋</a></td>
    <td align="center"><a href="https://fabiothiroki.github.io"><img src="https://avatars2.githubusercontent.com/u/670057?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fabio Hiroki</b></sub></a><br /><a href="#content-fabiothiroki" title="Content">🖋</a></td>
    <td align="center"><a href="http://james.sumners.info/"><img src="https://avatars1.githubusercontent.com/u/321201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>James Sumners</b></sub></a><br /><a href="#content-jsumners" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/_DanGamble"><img src="https://avatars2.githubusercontent.com/u/7152041?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dan Gamble</b></sub></a><br /><a href="#content-dan-gamble" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/trainorpj"><img src="https://avatars3.githubusercontent.com/u/13276704?v=4?s=100" width="100px;" alt=""/><br /><sub><b>PJ Trainor</b></sub></a><br /><a href="#content-trainorpj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/reod"><img src="https://avatars0.githubusercontent.com/u/3164299?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Remek Ambroziak</b></sub></a><br /><a href="#content-reod" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://ca.non.co.il"><img src="https://avatars0.githubusercontent.com/u/1829789?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yoni Jah</b></sub></a><br /><a href="#content-yonjah" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/hazolsky"><img src="https://avatars1.githubusercontent.com/u/1270790?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Misha Khokhlov</b></sub></a><br /><a href="#content-hazolsky" title="Content">🖋</a></td>
    <td align="center"><a href="https://plus.google.com/+ЕвгенийОрехов/"><img src="https://avatars3.githubusercontent.com/u/8045060?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Evgeny Orekhov</b></sub></a><br /><a href="#content-EvgenyOrekhov" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/gediminasml"><img src="https://avatars3.githubusercontent.com/u/19854105?v=4?s=100" width="100px;" alt=""/><br /><sub><b>-</b></sub></a><br /><a href="#content-gediminasml" title="Content">🖋</a></td>
    <td align="center"><a href="http://hisaac.net"><img src="https://avatars3.githubusercontent.com/u/923876?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Isaac Halvorson</b></sub></a><br /><a href="#content-hisaac" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.vedrankaracic.com"><img src="https://avatars3.githubusercontent.com/u/2808092?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vedran Karačić</b></sub></a><br /><a href="#content-vkaracic" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/lallenlowe"><img src="https://avatars3.githubusercontent.com/u/10761165?v=4?s=100" width="100px;" alt=""/><br /><sub><b>lallenlowe</b></sub></a><br /><a href="#content-lallenlowe" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nwwells"><img src="https://avatars2.githubusercontent.com/u/1039473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nathan Wells</b></sub></a><br /><a href="#content-nwwells" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/paulovitin"><img src="https://avatars0.githubusercontent.com/u/125503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paulo Reis</b></sub></a><br /><a href="#content-paulovitin" title="Content">🖋</a></td>
    <td align="center"><a href="https://snap.simpego.ch"><img src="https://avatars2.githubusercontent.com/u/1989646?v=4?s=100" width="100px;" alt=""/><br /><sub><b>syzer</b></sub></a><br /><a href="#content-syzer" title="Content">🖋</a></td>
    <td align="center"><a href="http://sancho.dev"><img src="https://avatars0.githubusercontent.com/u/3763599?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Sancho</b></sub></a><br /><a href="#content-davesnx" title="Content">🖋</a></td>
    <td align="center"><a href="https://apiforge.it"><img src="https://avatars0.githubusercontent.com/u/4929965?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robert Manolea</b></sub></a><br /><a href="#content-pupix" title="Content">🖋</a></td>
    <td align="center"><a href="https://jumptoglide.com"><img src="https://avatars2.githubusercontent.com/u/708395?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xavier Ho</b></sub></a><br /><a href="#content-spaxe" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.ocular-rhythm.io"><img src="https://avatars0.githubusercontent.com/u/2738518?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aaron</b></sub></a><br /><a href="#content-ocularrhythm" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://septa97.me"><img src="https://avatars2.githubusercontent.com/u/13742634?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Charles Maghirang Adona</b></sub></a><br /><a href="#content-septa97" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.cakeresume.com/allenfang"><img src="https://avatars2.githubusercontent.com/u/5351390?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Allen</b></sub></a><br /><a href="#content-AllenFang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leonardovillela"><img src="https://avatars3.githubusercontent.com/u/8650543?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leonardo Villela</b></sub></a><br /><a href="#content-leonardovillela" title="Content">🖋</a></td>
    <td align="center"><a href="https://michalzalecki.com"><img src="https://avatars1.githubusercontent.com/u/3136577?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michał Załęcki</b></sub></a><br /><a href="#content-MichalZalecki" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.wealthbar.com"><img src="https://avatars1.githubusercontent.com/u/156449?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Nicola</b></sub></a><br /><a href="#content-chrisnicola" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/aecorredor"><img src="https://avatars3.githubusercontent.com/u/9114987?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro Corredor</b></sub></a><br /><a href="#content-aecorredor" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/cwar"><img src="https://avatars3.githubusercontent.com/u/272843?v=4?s=100" width="100px;" alt=""/><br /><sub><b>cwar</b></sub></a><br /><a href="#content-cwar" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/keyfoxth"><img src="https://avatars3.githubusercontent.com/u/10647132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yuwei</b></sub></a><br /><a href="#content-keyfoxth" title="Content">🖋</a></td>
    <td align="center"><a href="https://bigcodenerd.org"><img src="https://avatars3.githubusercontent.com/u/10895594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Utkarsh Bhatt</b></sub></a><br /><a href="#content-utkarshbhatt12" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/duartemendes"><img src="https://avatars2.githubusercontent.com/u/12852058?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Duarte Mendes</b></sub></a><br /><a href="#content-duartemendes" title="Content">🖋</a></td>
    <td align="center"><a href="http://jasonkim.ca"><img src="https://avatars2.githubusercontent.com/u/103456?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jason Kim</b></sub></a><br /><a href="#content-serv" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Max101"><img src="https://avatars2.githubusercontent.com/u/2124249?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mitja O.</b></sub></a><br /><a href="#content-Max101" title="Content">🖋</a></td>
    <td align="center"><a href="http://sandromiguel.com"><img src="https://avatars0.githubusercontent.com/u/6423157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sandro Miguel Marques</b></sub></a><br /><a href="#content-SandroMiguel" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/GabeKuslansky"><img src="https://avatars3.githubusercontent.com/u/9855482?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabe</b></sub></a><br /><a href="#content-GabeKuslansky" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://ripper234.com/"><img src="https://avatars1.githubusercontent.com/u/172282?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ron Gross</b></sub></a><br /><a href="#content-ripper234" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.thecodebarbarian.com"><img src="https://avatars2.githubusercontent.com/u/1620265?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Valeri Karpov</b></sub></a><br /><a href="#content-vkarpov15" title="Content">🖋</a></td>
    <td align="center"><a href="https://sergiobernal.com"><img src="https://avatars3.githubusercontent.com/u/20087388?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergio Bernal</b></sub></a><br /><a href="#content-imsergiobernal" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ntelkedzhiev"><img src="https://avatars2.githubusercontent.com/u/7332371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nikola Telkedzhiev</b></sub></a><br /><a href="#content-ntelkedzhiev" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/vitordagamagodoy"><img src="https://avatars0.githubusercontent.com/u/26370059?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vitor Godoy</b></sub></a><br /><a href="#content-vitordagamagodoy" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.manishsaraan.com/"><img src="https://avatars2.githubusercontent.com/u/19797340?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Manish Saraan</b></sub></a><br /><a href="#content-manishsaraan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sangbeom Han</b></sub></a><br /><a href="#content-uronly14me" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://blackmatch.github.io"><img src="https://avatars3.githubusercontent.com/u/12443954?v=4?s=100" width="100px;" alt=""/><br /><sub><b>blackmatch</b></sub></a><br /><a href="#content-blackmatch" title="Content">🖋</a></td>
    <td align="center"><a href="https://simmsreeve.com"><img src="https://avatars3.githubusercontent.com/u/5173131?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joe Reeve</b></sub></a><br /><a href="#content-ISNIT0" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/BusbyActual"><img src="https://avatars2.githubusercontent.com/u/14985016?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Busby</b></sub></a><br /><a href="#content-BusbyActual" title="Content">🖋</a></td>
    <td align="center"><a href="http://jsdecorator.com"><img src="https://avatars3.githubusercontent.com/u/4482199?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Iman Mohamadi</b></sub></a><br /><a href="#content-ImanMh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/HeeL"><img src="https://avatars1.githubusercontent.com/u/287769?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergii Paryzhskyi</b></sub></a><br /><a href="#content-HeeL" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kapilepatel"><img src="https://avatars3.githubusercontent.com/u/25738473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kapil Patel</b></sub></a><br /><a href="#content-kapilepatel" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/justjavac"><img src="https://avatars1.githubusercontent.com/u/359395?v=4?s=100" width="100px;" alt=""/><br /><sub><b>迷渡</b></sub></a><br /><a href="#content-justjavac" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/hozefaj"><img src="https://avatars1.githubusercontent.com/u/2084833?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hozefa</b></sub></a><br /><a href="#content-hozefaj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/el-ethan"><img src="https://avatars3.githubusercontent.com/u/10249884?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ethan</b></sub></a><br /><a href="#content-el-ethan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/milkdeliver"><img src="https://avatars2.githubusercontent.com/u/3108407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam</b></sub></a><br /><a href="#content-milkdeliver" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ArlindXh"><img src="https://avatars0.githubusercontent.com/u/19508764?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arlind</b></sub></a><br /><a href="#content-ArlindXh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ttous"><img src="https://avatars0.githubusercontent.com/u/19815440?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Teddy Toussaint</b></sub></a><br /><a href="#content-ttous" title="Content">🖋</a></td>
    <td align="center"><a href="http://ardern.io"><img src="https://avatars2.githubusercontent.com/u/2419690?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lewis</b></sub></a><br /><a href="#content-LewisArdern" title="Content">🖋</a></td>
    <td align="center"><a href="https://gabriellidenor.com/"><img src="https://avatars2.githubusercontent.com/u/765963?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Lidenor </b></sub></a><br /><a href="#content-GabrielLidenor" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/animir"><img src="https://avatars3.githubusercontent.com/u/4623196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Roman</b></sub></a><br /><a href="#content-animir" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Francozeira"><img src="https://avatars1.githubusercontent.com/u/47419763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francozeira</b></sub></a><br /><a href="#content-Francozeira" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/invvard"><img src="https://avatars0.githubusercontent.com/u/7305493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Invvard</b></sub></a><br /><a href="#content-Invvard" title="Content">🖋</a></td>
    <td align="center"><a href="https://romulogarofalo.github.io/"><img src="https://avatars1.githubusercontent.com/u/18492592?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rômulo Garofalo</b></sub></a><br /><a href="#content-romulogarofalo" title="Content">🖋</a></td>
    <td align="center"><a href="http://thoqbk.github.io/"><img src="https://avatars0.githubusercontent.com/u/1491103?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tho Q Luong</b></sub></a><br /><a href="#content-thoqbk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Qeneke"><img src="https://avatars2.githubusercontent.com/u/20271568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Burak Shen</b></sub></a><br /><a href="#content-Qeneke" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.happy-css.com"><img src="https://avatars0.githubusercontent.com/u/2950505?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Muzatko</b></sub></a><br /><a href="#content-MartinMuzatko" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/autoboxer"><img src="https://avatars3.githubusercontent.com/u/2757601?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jared Collier</b></sub></a><br /><a href="#content-autoboxer" title="Content">🖋</a></td>
    <td align="center"><a href="http://hiltonmeyer.com"><img src="https://avatars3.githubusercontent.com/u/4545860?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hilton Meyer</b></sub></a><br /><a href="#content-bikingbadger" title="Content">🖋</a></td>
    <td align="center"><a href="http://kr.vuejs.org"><img src="https://avatars0.githubusercontent.com/u/1451365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ChangJoo Park(박창주)</b></sub></a><br /><a href="#content-ChangJoo-Park" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/MasahiroSakaguchi"><img src="https://avatars0.githubusercontent.com/u/16427431?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Masahiro Sakaguchi</b></sub></a><br /><a href="#content-MasahiroSakaguchi" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/TheHollidayInn"><img src="https://avatars1.githubusercontent.com/u/1253400?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Keith Holliday</b></sub></a><br /><a href="#content-TheHollidayInn" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.coreycleary.me"><img src="https://avatars3.githubusercontent.com/u/1485356?v=4?s=100" width="100px;" alt=""/><br /><sub><b>coreyc</b></sub></a><br /><a href="#content-coreyc" title="Content">🖋</a></td>
    <td align="center"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maximilian Berkmann</b></sub></a><br /><a href="#content-Berkmann18" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/DouglasMV"><img src="https://avatars3.githubusercontent.com/u/32845487?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Douglas Mariano Valero</b></sub></a><br /><a href="#content-DouglasMV" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/marcelosdm"><img src="https://avatars0.githubusercontent.com/u/18266600?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcelo Melo</b></sub></a><br /><a href="#content-marcelosdm" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/mperk_"><img src="https://avatars0.githubusercontent.com/u/3465794?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mehmet Perk</b></sub></a><br /><a href="#content-mperk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ryanouyang"><img src="https://avatars2.githubusercontent.com/u/360426?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryan ouyang</b></sub></a><br /><a href="#content-ryanouyang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/shabeer-mdy"><img src="https://avatars0.githubusercontent.com/u/26842535?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shabeer</b></sub></a><br /><a href="#content-shabeer-mdy" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/halfzebra"><img src="https://avatars1.githubusercontent.com/u/3983879?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eduard Kyvenko</b></sub></a><br /><a href="#content-halfzebra" title="Content">🖋</a></td>
    <td align="center"><a href="http://deyvisonrocha.com"><img src="https://avatars2.githubusercontent.com/u/686067?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Deyvison Rocha</b></sub></a><br /><a href="#content-deyvisonrocha" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://twitter.com/georgemamer"><img src="https://avatars1.githubusercontent.com/u/20108934?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Mamer</b></sub></a><br /><a href="#content-georgem3" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leimonio"><img src="https://avatars0.githubusercontent.com/u/1969742?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Konstantinos Leimonis</b></sub></a><br /><a href="#content-leimonio" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Zybax"><img src="https://avatars3.githubusercontent.com/u/22094453?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Oliver Lluberes</b></sub></a><br /><a href="#translation-Zybax" title="Translation">🌍</a></td>
    <td align="center"><a href="https://stackoverflow.com/story/tiendq"><img src="https://avatars2.githubusercontent.com/u/815910?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tien Do</b></sub></a><br /><a href="#content-tiendq" title="Content">🖋</a></td>
    <td align="center"><a href="http://singh1114.github.io/"><img src="https://avatars0.githubusercontent.com/u/11356398?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ranvir Singh</b></sub></a><br /><a href="#content-singh1114" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/collierrgbsitisfise"><img src="https://avatars3.githubusercontent.com/u/13496126?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vadim Nicolaev</b></sub></a><br /><a href="#content-collierrgbsitisfise" title="Content">🖋</a> <a href="#translation-collierrgbsitisfise" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/germangamboa95"><img src="https://avatars3.githubusercontent.com/u/28633849?v=4?s=100" width="100px;" alt=""/><br /><sub><b>German Gamboa Gonzalez</b></sub></a><br /><a href="#content-germangamboa95" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/AbdelrahmanHafez"><img src="https://avatars3.githubusercontent.com/u/19984935?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hafez</b></sub></a><br /><a href="#content-AbdelrahmanHafez" title="Content">🖋</a></td>
    <td align="center"><a href="http://linkedin.com/in/chandiran-dmc"><img src="https://avatars3.githubusercontent.com/u/42678579?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chandiran</b></sub></a><br /><a href="#content-chandiran-dmc" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/VinayaSathyanarayana"><img src="https://avatars2.githubusercontent.com/u/16976677?v=4?s=100" width="100px;" alt=""/><br /><sub><b>VinayaSathyanarayana</b></sub></a><br /><a href="#content-VinayaSathyanarayana" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.kimkern.de"><img src="https://avatars1.githubusercontent.com/u/2671139?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kim Kern</b></sub></a><br /><a href="#content-kiwikern" title="Content">🖋</a></td>
    <td align="center"><a href="https://kennethfreitas.github.io/"><img src="https://avatars2.githubusercontent.com/u/55669043?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kenneth Freitas</b></sub></a><br /><a href="#content-kennethfreitas" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/songe"><img src="https://avatars2.githubusercontent.com/u/1531561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>songe</b></sub></a><br /><a href="#content-songe" title="Content">🖋</a></td>
    <td align="center"><a href="http://ksed.dev"><img src="https://avatars1.githubusercontent.com/u/30693707?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kirill Shekhovtsov</b></sub></a><br /><a href="#content-Ksedline" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/SerzN1"><img src="https://avatars0.githubusercontent.com/u/2534649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Serge</b></sub></a><br /><a href="#content-SerzN1" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/keyrwinz"><img src="https://avatars3.githubusercontent.com/u/21241761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>keyrwinz</b></sub></a><br /><a href="#content-keyrwinz" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/nDmitry"><img src="https://avatars0.githubusercontent.com/u/2134568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dmitry Nikitenko</b></sub></a><br /><a href="#content-nDmitry" title="Content">🖋</a></td>
    <td align="center"><a href="https://bushuai.cc"><img src="https://avatars0.githubusercontent.com/u/1875256?v=4?s=100" width="100px;" alt=""/><br /><sub><b>bushuai</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Abushuai" title="Reviewed Pull Requests">👀</a> <a href="#content-bushuai" title="Content">🖋</a></td>
    <td align="center"><a href="https://stackoverflow.com/users/1348195/benjamin-gruenbaum"><img src="https://avatars2.githubusercontent.com/u/1315533?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin Gruenbaum</b></sub></a><br /><a href="#content-benjamingr" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/byeze"><img src="https://avatars1.githubusercontent.com/u/7424138?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ezequiel</b></sub></a><br /><a href="#translation-byeze" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/juaoose"><img src="https://avatars3.githubusercontent.com/u/994594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juan José Rodríguez</b></sub></a><br /><a href="#translation-juaoose" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/OrBin"><img src="https://avatars1.githubusercontent.com/u/6897234?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Or Bin</b></sub></a><br /><a href="#content-OrBin" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/andreoav07"><img src="https://avatars2.githubusercontent.com/u/508827?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andreo Vieira</b></sub></a><br /><a href="#content-andreoav" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mikicho"><img src="https://avatars1.githubusercontent.com/u/11459632?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Solomon</b></sub></a><br /><a href="#content-mikicho" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jimmycallin"><img src="https://avatars0.githubusercontent.com/u/2225828?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jimmy Callin</b></sub></a><br /><a href="#content-jimmycallin" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/siddharthofficial/"><img src="https://avatars2.githubusercontent.com/u/26025955?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siddharth</b></sub></a><br /><a href="#content-w01fS" title="Content">🖋</a></td>
    <td align="center"><a href="https://ryansmith.tech/"><img src="https://avatars0.githubusercontent.com/u/1578766?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Smith</b></sub></a><br /><a href="#content-ryan3E0" title="Content">🖋</a></td>
    <td align="center"><a href="https://de.linkedin.com/in/tom-boettger"><img src="https://avatars2.githubusercontent.com/u/49961674?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tom Boettger</b></sub></a><br /><a href="#content-bttger" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jormaechea"><img src="https://avatars3.githubusercontent.com/u/5612500?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joaquín Ormaechea</b></sub></a><br /><a href="#translation-jormaechea" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/dfrzuz"><img src="https://avatars3.githubusercontent.com/u/71859096?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dfrzuz</b></sub></a><br /><a href="#translation-dfrzuz" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/victor-homyakov"><img src="https://avatars1.githubusercontent.com/u/121449?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Victor Homyakov</b></sub></a><br /><a href="#content-victor-homyakov" title="Content">🖋</a></td>
    <td align="center"><a href="http://joshuahemphill.com"><img src="https://avatars3.githubusercontent.com/u/46608115?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh</b></sub></a><br /><a href="#content-josh-hemphill" title="Content">🖋</a> <a href="#security-josh-hemphill" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/alec-francis"><img src="https://avatars2.githubusercontent.com/u/32949882?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alec Francis</b></sub></a><br /><a href="#content-alec-francis" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/arjun6610"><img src="https://avatars1.githubusercontent.com/u/61268891?v=4?s=100" width="100px;" alt=""/><br /><sub><b>arjun6610</b></sub></a><br /><a href="#content-arjun6610" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jan-osch"><img src="https://avatars2.githubusercontent.com/u/11651780?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Osch</b></sub></a><br /><a href="#content-jan-osch" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/thiagotrs"><img src="https://avatars2.githubusercontent.com/u/32005779?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thiago Rotondo Sampaio</b></sub></a><br /><a href="#translation-thiagotrs" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Alexsey"><img src="https://avatars0.githubusercontent.com/u/6392013?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexsey</b></sub></a><br /><a href="#content-Alexsey" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/13luismb"><img src="https://avatars1.githubusercontent.com/u/32210483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luis A. Acurero</b></sub></a><br /><a href="#translation-13luismb" title="Translation">🌍</a></td>
    <td align="center"><a href="https://lromano97.github.io/"><img src="https://avatars1.githubusercontent.com/u/22394847?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucas Romano</b></sub></a><br /><a href="#translation-lromano97" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/denisecase"><img src="https://avatars0.githubusercontent.com/u/13016516?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denise Case</b></sub></a><br /><a href="#content-denisecase" title="Content">🖋</a></td>
    <td align="center"><a href="http://stackoverflow.com/story/elektronik"><img src="https://avatars3.githubusercontent.com/u/1078554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nick Ribal</b></sub></a><br /><a href="#content-elektronik2k5" title="Content">🖋</a> <a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Aelektronik2k5" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/0xflotus"><img src="https://avatars3.githubusercontent.com/u/26602940?v=4?s=100" width="100px;" alt=""/><br /><sub><b>0xflotus</b></sub></a><br /><a href="#content-0xflotus" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.dijonkitchen.org/"><img src="https://avatars3.githubusercontent.com/u/11434205?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Chen</b></sub></a><br /><a href="#content-dijonkitchen" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/dilansri"><img src="https://avatars2.githubusercontent.com/u/5089728?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dilan Srilal</b></sub></a><br /><a href="#content-dilansri" title="Content">🖋</a></td>
    <td align="center"><a href="https://vectree.ru"><img src="https://avatars3.githubusercontent.com/u/4215285?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vladthelittleone</b></sub></a><br /><a href="#translation-vladthelittleone" title="Translation">🌍</a></td>
    <td align="center"><a href="https://www.nikolaso.com"><img src="https://avatars0.githubusercontent.com/u/60047271?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nik Osvalds</b></sub></a><br /><a href="#content-nosvalds" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kdaniel21"><img src="https://avatars0.githubusercontent.com/u/39854385?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Kiss</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=kdaniel21" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/forresst17"><img src="https://avatars2.githubusercontent.com/u/163352?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Forresst</b></sub></a><br /><a href="#content-forresst" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/svenheden"><img src="https://avatars1.githubusercontent.com/u/76098?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Svenheden</b></sub></a><br /><a href="#content-svenheden" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/AustrisC"><img src="https://avatars2.githubusercontent.com/u/12381652?v=4?s=100" width="100px;" alt=""/><br /><sub><b>AustrisC</b></sub></a><br /><a href="#content-AustrisC" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/cisco0808"><img src="https://avatars0.githubusercontent.com/u/60251188?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kyeongtae kim</b></sub></a><br /><a href="#translation-cisco0808" title="Translation">🌍</a></td>
    <td align="center"><a href="https://keybase.io/651z9pz968v2accj"><img src="https://avatars.githubusercontent.com/u/65741741?v=4?s=100" width="100px;" alt=""/><br /><sub><b>007</b></sub></a><br /><a href="#content-6gx7iycn53ioq2e8apk1j1ypwov4giui" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.anediaz.com"><img src="https://avatars.githubusercontent.com/u/17216937?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ane Diaz de Tuesta</b></sub></a><br /><a href="#translation-anediaz" title="Translation">🌍</a> <a href="#content-anediaz" title="Content">🖋</a></td>
    <td align="center"><a href="http://yukioh.net"><img src="https://avatars.githubusercontent.com/u/23182489?v=4?s=100" width="100px;" alt=""/><br /><sub><b>YukiOta</b></sub></a><br /><a href="#translation-YukiOta" title="Translation">🌍</a></td>
    <td align="center"><a href="https://www.yeovilhospital.co.uk/"><img src="https://avatars.githubusercontent.com/u/43814140?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Frazer Smith</b></sub></a><br /><a href="#content-Fdawgs" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/rluvaton"><img src="https://avatars.githubusercontent.com/u/16746759?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Raz Luvaton</b></sub></a><br /><a href="#content-rluvaton" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/YA21"><img src="https://avatars.githubusercontent.com/u/37298463?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yuta Azumi</b></sub></a><br /><a href="#content-YA21" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/andrewjbarbour"><img src="https://avatars.githubusercontent.com/u/77080074?v=4?s=100" width="100px;" alt=""/><br /><sub><b>andrewjbarbour</b></sub></a><br /><a href="#content-andrewjbarbour" title="Content">🖋</a></td>
    <td align="center"><a href="https://MasujimaRyohei.jp"><img src="https://avatars.githubusercontent.com/u/17163541?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mr</b></sub></a><br /><a href="#content-MasujimaRyohei" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kubanac95"><img src="https://avatars.githubusercontent.com/u/16191931?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aleksandar</b></sub></a><br /><a href="#content-kubanac95" title="Content">🖋</a></td>
    <td align="center"><a href="http://vincentjonathan.com"><img src="https://avatars.githubusercontent.com/u/32597776?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Owl</b></sub></a><br /><a href="#content-SuspiciousLookingOwl" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/yedidyas"><img src="https://avatars.githubusercontent.com/u/36074789?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yedidya Schwartz</b></sub></a><br /><a href="#content-yedidyas" title="Content">🖋</a> <a href="#example-yedidyas" title="Examples">💡</a></td>
    <td align="center"><a href="https://github.com/ariel-diaz"><img src="https://avatars.githubusercontent.com/u/20423540?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ari</b></sub></a><br /><a href="#content-ariel-diaz" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.koenigthomas.de/"><img src="https://avatars.githubusercontent.com/u/7080389?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas König</b></sub></a><br /><a href="#content-Vispercept" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/coocos"><img src="https://avatars.githubusercontent.com/u/1397804?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kalle Lämsä</b></sub></a><br /><a href="#content-coocos" title="Content">🖋</a></td>
    <td align="center"><a href="http://math.cat"><img src="https://avatars.githubusercontent.com/u/10328430?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wyatt</b></sub></a><br /><a href="#content-ZhyMC" title="Content">🖋</a></td>
    <td align="center"><a href="http://libkhadir.fr"><img src="https://avatars.githubusercontent.com/u/45130488?v=4?s=100" width="100px;" alt=""/><br /><sub><b>KHADIR Tayeb</b></sub></a><br /><a href="#content-tkhadir" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/shankarregmi"><img src="https://avatars.githubusercontent.com/u/7703345?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shankar Regmi</b></sub></a><br /><a href="#content-shankarregmi" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/codebyshubham"><img src="https://avatars.githubusercontent.com/u/10389723?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shubham</b></sub></a><br /><a href="#content-codebyshubham" title="Content">🖋</a></td>
    <td align="center"><a href="http://lucalves.me/"><img src="https://avatars.githubusercontent.com/u/17712401?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucas Alves</b></sub></a><br /><a href="#content-lucalves" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/benjaminudoh10"><img src="https://avatars.githubusercontent.com/u/9018331?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin</b></sub></a><br /><a href="#content-benjaminudoh10" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.yjoer.com"><img src="https://avatars.githubusercontent.com/u/47742486?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yeoh Joer</b></sub></a><br /><a href="#content-yjoer" title="Content">🖋</a></td>
    <td align="center"><a href="https://blog.miigon.net"><img src="https://avatars.githubusercontent.com/u/16161991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Miigon</b></sub></a><br /><a href="#content-Miigon" title="Content">🖋</a></td>
    <td align="center"><a href="http://brainstorage.me/Egregor2011"><img src="https://avatars.githubusercontent.com/u/3630318?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rostislav Bogorad</b></sub></a><br /><a href="#content-Egregor2011" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Flouse"><img src="https://avatars.githubusercontent.com/u/1297478?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Flouse</b></sub></a><br /><a href="#content-Flouse" title="Content">🖋</a></td>
    <td align="center"><a href="http://taranttini.com"><img src="https://avatars.githubusercontent.com/u/6922125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tarantini Pereira</b></sub></a><br /><a href="#content-taranttini" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kzmat"><img src="https://avatars.githubusercontent.com/u/34614358?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kazuki Matsuo</b></sub></a><br /><a href="#content-kzmat" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/burkybang"><img src="https://avatars.githubusercontent.com/u/927886?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Smith</b></sub></a><br /><a href="#content-burkybang" title="Content">🖋</a></td>
    <td align="center"><a href="https://codekodo.tistory.com"><img src="https://avatars.githubusercontent.com/u/33795856?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dohyeon Ko</b></sub></a><br /><a href="#content-k906506" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/vlad99902"><img src="https://avatars.githubusercontent.com/u/67615003?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vladislav Legkov</b></sub></a><br /><a href="#content-vlad99902" title="Content">🖋</a></td>
    <td align="center"><a href="http://kerolloz.github.io"><img src="https://avatars.githubusercontent.com/u/36763164?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kerollos Magdy</b></sub></a><br /><a href="#content-kerolloz" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/erez-lieberman-b90b7219/"><img src="https://avatars.githubusercontent.com/u/3277260?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Erez Lieberman</b></sub></a><br /><a href="#content-erezLieberman" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/breno-macedo-ernani-de-s%C3%A1-110223158/"><img src="https://avatars.githubusercontent.com/u/48841329?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Breno Macedo</b></sub></a><br /><a href="#content-breno404" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/JFernando122"><img src="https://avatars.githubusercontent.com/u/40414805?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fernando Flores</b></sub></a><br /><a href="#translation-JFernando122" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/rafaelconcept/"><img src="https://avatars.githubusercontent.com/u/43880669?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rafael Brito</b></sub></a><br /><a href="#translation-rafaelconcept" title="Translation">🌍</a></td>
    <td align="center"><a href="https://emiliano-peralta-portfolio.vercel.app/"><img src="https://avatars.githubusercontent.com/u/63617637?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emiliano Peralta</b></sub></a><br /><a href="#translation-emiperalta" title="Translation">🌍</a></td>
    <td align="center"><a href="https://lannex.github.io"><img src="https://avatars.githubusercontent.com/u/7369541?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shin, SJ</b></sub></a><br /><a href="#content-lannex" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
