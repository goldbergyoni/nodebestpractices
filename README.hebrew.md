[✔]: assets/images/checkbox-small-blue.png

# שיטות עבודה מומלצות ב Node.js

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices"/>
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 items"/> <img id="last-update-badge" src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20April%2019%2C%202023-green.svg" alt="Last update: April 19, 2023" /> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2014.0.0-brightgreen.svg" alt="Updated for Node 14.0.0"/>
</div>

<br/>

[<img src="assets/images/twitter.svg" width="16" height="16" alt="" />](https://twitter.com/nodepractices/) **עיקבו אחרינו בטוויטר!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

לקריאה בשפות נוספות: [![CN](./assets/flags/CN.png)**סינית**](./README.chinese.md), [![FR](./assets/flags/FR.png)**צרפתית**](./README.french.md), [![BR](./assets/flags/BR.png)**פורטוגזית**](./README.brazilian-portuguese.md), [![RU](./assets/flags/RU.png)**רוסית**](./README.russian.md), [![PL](./assets/flags/PL.png)**פולנית**](./README.polish.md), [![JA](./assets/flags/JA.png)**יפנית**](./README.japanese.md), [![EU](./assets/flags/EU.png)**באסקית**](./README.basque.md) [(![ES](./assets/flags/ES.png)**ספרדית**, ![HE](./assets/flags/HE.png)**עברית**, ![KR](./assets/flags/KR.png)**קוריאנית** ו ![TR](./assets/flags/TR.png)**טורקית** בתהליך! )](#translations)

<br/>

## 🚀 יש לנו [Node.js starter רשמי - Practica.js](https://github.com/practicajs/practica). השתמשו בזה כדי לייצר שלד חדש לפרוייקט שמבוסס על כל שיטות העבודה המומלצות כלולות בפנים. או רק כדי ללמוד על ידי דוגמאות קוד.

<br/>

# Latest Best Practices and News

- **🛰 2023 edition is released soon**: We're now writing the next edition, stay tuned?

- **✨ 89,000 stars**: Blushing, surprised and proud!

- **🔖 New menu and tags**: Our menu is collapsible now and includes `#tags`. New visitors can read `#strategic` items first. Returning visitors can focus on `#new` content. Seniors can filter for `#advanced` items. Courtesy of the one and only [Rubek Joshi](https://github.com/rubek-joshi)

- **![FR](./assets/flags/FR.png) French translation!1! :** The latest translation that joins our international guide is French. Bienvenue

<br/><br/>

# ברוכים הבאים! שלושה דברים שכדאי לדעת לפני שגוללים מטה

**1. הנכם קוראים עשרות מאמרים של שיטות העבודה המומלצות ב Node.js -** המאגר הזה הוא סיכום לא יסולא בפז של שיטות העבודה המומלצות ב Node.js , כמו כן הוא נעשה על בשיתוף פעולה.

**2. זהו האוסף הגדול ביותר, והוא ממשיך לגדול כל שבוע -** נכון לרגע זה, יש למעלה מ 100 שיטות עבודה מומלצות, המלצות ארכיטקטורה והמלצות סגנון כתיבה. נושאים חדשים ובקשות חדשות (PR's) מתווספים כל יום במטרה לשמור את התוכן מעודכן. אנחנו נשמח לראותכם תורמים לפה, בין אם לתקן שגיאות קוד, עזרה בתרגום, או להציע רעיונות מבריקים חדשים. ראו את [המדריך לכתיבת הנחיות](./.operations/writing-guidelines.md).

**3. שיטות העבודה כוללות מידע נוסף -**  רוב הנקודות כוללות קישור **🔗לקריאה נוספת** שמרחיב על ידי דוגמאות קוד, ציטוטים מבלוגים נבחרים ומידע נוסף.

<br/><br/>

## תוכן העניינים

<details>
  <summary>
    <a href="#1-project-architecture-practices">1. מבנה הפרוייקט (6)</a>
  </summary>

&emsp;&emsp;[1.1 בנו את הפרוייקט לפי רכיבים עסקיים `#strategic` `#updated`](#-11-structure-your-solution-by-business-components)</br>
&emsp;&emsp;[1.2 חלוקת הרכיבים ל3 שכבות, שמירה על שכבת הווב בגבולותיה `#strategic` `#updated`](#-12-layer-your-components-with-3-tiers-keep-the-web-layer-within-its-boundaries)</br>
&emsp;&emsp;[1.3 עטפו כלים משותפים בחבילות, שקלו את הפצתם](#-13-wrap-common-utilities-as-packages-consider-publishing)</br>
&emsp;&emsp;[1.4 השתמשו בקונפיגורציה עם משתני סביבה באופן מודע, מאובטח והיררכי `#updated`](#-14-use-environment-aware-secure-and-hierarchical-config)</br>
&emsp;&emsp;[1.5 שקלו את כל ההשלכות בעת בחירת מסגרת `#new`](#-15-consider-all-the-consequences-when-choosing-the-main-framework)</br>
&emsp;&emsp;[1.6 השתמשו ב-TypeScript במידתיות ובצורה מושכלת `#new`](#-16-use-typescript-sparingly-and-thoughtfully)</br>

</details>

<details>
  <summary>
    <a href="#2-error-handling-practices">2. ניהול שגיאות (12)</a>
  </summary>

&emsp;&emsp;[2.1 Use Async-Await or promises for async error handling](#-21-use-async-await-or-promises-for-async-error-handling)</br>
&emsp;&emsp;[2.2 Extend the built-in Error object `#strategic` `#updated`](#-22-extend-the-built-in-error-object)</br>
&emsp;&emsp;[2.3 Distinguish operational vs programmer errors `#strategic` `#updated`](#-23-distinguish-catastrophic-errors-from-operational-errors)</br>
&emsp;&emsp;[2.4 Handle errors centrally, not within a middleware `#strategic`](#-24-handle-errors-centrally-not-within-a-middleware)</br>
&emsp;&emsp;[2.5 Document API errors using OpenAPI or GraphQL](#-25-document-api-errors-using-openapi-or -graphql)</br>
&emsp;&emsp;[2.6 Exit the process gracefully when a stranger comes to town `#strategic`](#-26-exit-the-process-gracefully-when-a-stranger-comes-to-town)</br>
&emsp;&emsp;[2.7 Use a mature logger to increase errors visibility `#updated`](#-27-use-a-mature-logger-to-increase-errors-visibility)</br>
&emsp;&emsp;[2.8 Test error flows using your favorite test framework `#updated`](#-28-test-error-flows-using-your-favorite-test-framework)</br>
&emsp;&emsp;[2.9 Discover errors and downtime using APM products](#-29-discover-errors-and-downtime-using-apm-products)</br>
&emsp;&emsp;[2.10 Catch unhandled promise rejections `#updated`](#-210-catch-unhandled-promise-rejections)</br>
&emsp;&emsp;[2.11 Fail fast, validate arguments using a dedicated library](#-211-fail-fast-validate-arguments-using-a-dedicated-library)</br>
&emsp;&emsp;[2.12 Always await promises before returning to avoid a partial stacktrace `#new`](#-212-always-await-promises-before-returning-to-avoid-a-partial-stacktrace)</br>

</details>

<details>
  <summary>
    <a href="#3-code-patterns-and-style-practices">3. תבניות קוד וסגנון עיצוב (12)</a>
  </summary>

&emsp;&emsp;[3.1 Use ESLint `#strategic`](#-31-use-eslint)</br>
&emsp;&emsp;[3.2 Use Node.js eslint extension plugins `#updated`](#-32-use-nodejs-eslint-extension-plugins)</br>
&emsp;&emsp;[3.3 Start a Codeblock's Curly Braces on the Same Line](#-33-start-a-codeblocks-curly-braces-on-the-same-line)</br>
&emsp;&emsp;[3.4 Separate your statements properly](#-34-separate-your-statements-properly)</br>
&emsp;&emsp;[3.5 Name your functions](#-35-name-your-functions)</br>
&emsp;&emsp;[3.6 Use naming conventions for variables, constants, functions and classes](#-36-use-naming-conventions-for-variables-constants-functions-and-classes)</br>
&emsp;&emsp;[3.7 Prefer const over let. Ditch the var](#-37-prefer-const-over-let-ditch-the-var)</br>
&emsp;&emsp;[3.8 Require modules first, not inside functions](#-38-require-modules-first-not-inside-functions)</br>
&emsp;&emsp;[3.9 Set an explicit entry point to a module/folder `#updated`](#-39-set-an-explicit-entry-point-to-a-modulefolder)</br>
&emsp;&emsp;[3.10 Use the === operator](#-310-use-the--operator)</br>
&emsp;&emsp;[3.11 Use Async Await, avoid callbacks `#strategic`](#-311-use-async-await-avoid-callbacks)</br>
&emsp;&emsp;[3.12 Use arrow function expressions (=>)](#-312-use-arrow-function-expressions-)</br>
&emsp;&emsp;[3.13 Avoid effects outside of functions `#new`](#-313-avoid-effects-outside-of-functions)</br>

</details>

<details>
  <summary>
    <a href="#4-testing-and-overall-quality-practices">4. בדיקות ובקרת איכות (13)</a>
  </summary>

&emsp;&emsp;[4.1 At the very least, write API (component) testing `#strategic`](#-41-at-the-very-least-write-api-component-testing)</br>
&emsp;&emsp;[4.2 Include 3 parts in each test name `#new`](#-42-include-3-parts-in-each-test-name)</br>
&emsp;&emsp;[4.3 Structure tests by the AAA pattern `#strategic`](#-43-structure-tests-by-the-aaa-pattern)</br>
&emsp;&emsp;[4.4 Ensure Node version is unified `#new`](#-44-ensure-node-version-is-unified)</br>
&emsp;&emsp;[4.5 Avoid global test fixtures and seeds, add data per-test `#strategic`](#-45-avoid-global-test-fixtures-and-seeds-add-data-per-test)</br>
&emsp;&emsp;[4.6 Tag your tests `#advanced`](#-46-tag-your-tests)</br>
&emsp;&emsp;[4.7 Check your test coverage, it helps to identify wrong test patterns](#-47-check-your-test-coverage-it-helps-to-identify-wrong-test-patterns)</br>
&emsp;&emsp;[4.8 Use production-like environment for e2e testing](#-48-use-production-like-environment-for-e2e-testing)</br>
&emsp;&emsp;[4.9 Refactor regularly using static analysis tools](#-49-refactor-regularly-using-static-analysis-tools)</br>
&emsp;&emsp;[4.10 Mock responses of external HTTP services #advanced `#new` `#advanced`](#-410-mock-responses-of-external-http-services)</br>
&emsp;&emsp;[4.11 Test your middlewares in isolation](#-411-test-your-middlewares-in-isolation)</br>
&emsp;&emsp;[4.12 Specify a port in production, randomize in testing `#new`](#-412-specify-a-port-in-production-randomize-in-testing)</br>
&emsp;&emsp;[4.13 Test the five possible outcomes #strategic `#new`](#-413-test-the-five-possible-outcomes)</br>

</details>

<details>
  <summary>
    <a href="#5-going-to-production-practices">5. עלייה לאוויר (19)</a>
  </summary>

&emsp;&emsp;[5.1. Monitoring `#strategic`](#-51-monitoring)</br>
&emsp;&emsp;[5.2. Increase the observability using smart logging `#strategic`](#-52-increase-the-observability-using-smart-logging)</br>
&emsp;&emsp;[5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy `#strategic`](#-53-delegate-anything-possible-eg-gzip-ssl-to-a-reverse-proxy)</br>
&emsp;&emsp;[5.4. Lock dependencies](#-54-lock-dependencies)</br>
&emsp;&emsp;[5.5. Guard process uptime using the right tool](#-55-guard-process-uptime-using-the-right-tool)</br>
&emsp;&emsp;[5.6. Utilize all CPU cores](#-56-utilize-all-cpu-cores)</br>
&emsp;&emsp;[5.7. Create a ‘maintenance endpoint’](#-57-create-a-maintenance-endpoint)</br>
&emsp;&emsp;[5.8. Discover the unknowns using APM products `#advanced` `#updated`](#-58-discover-the-unknowns-using-apm-products)</br>
&emsp;&emsp;[5.9. Make your code production-ready](#-59-make-your-code-production-ready)</br>
&emsp;&emsp;[5.10. Measure and guard the memory usage `#advanced`](#-510-measure-and-guard-the-memory-usage)</br>
&emsp;&emsp;[5.11. Get your frontend assets out of Node](#-511-get-your-frontend-assets-out-of-node)</br>
&emsp;&emsp;[5.12. Strive to be stateless `#strategic`](#-512-strive-to-be-stateless)</br>
&emsp;&emsp;[5.13. Use tools that automatically detect vulnerabilities](#-513-use-tools-that-automatically-detect-vulnerabilities)</br>
&emsp;&emsp;[5.14. Assign a transaction id to each log statement `#advanced`](#-514-assign-a-transaction-id-to-each-log-statement)</br>
&emsp;&emsp;[5.15. Set NODE_ENV=production](#-515-set-node_envproduction)</br>
&emsp;&emsp;[5.16. Design automated, atomic and zero-downtime deployments `#advanced`](#-516-design-automated-atomic-and-zero-downtime-deployments)</br>
&emsp;&emsp;[5.17. Use an LTS release of Node.js](#-517-use-an-lts-release-of-nodejs)</br>
&emsp;&emsp;[5.18. Log to stdout, avoid specifying log destination within the app](#-518-log-to-stdout-avoid-specifying-log-destination-within-the-app)</br>
&emsp;&emsp;[5.19. Install your packages with npm ci `#new`](#-519-install-your-packages-with-npm-ci)</br>

</details>

<details>
  <summary>
    <a href="#6-security-best-practices">6. אבטחה (27)</a>
  </summary>

&emsp;&emsp;[6.1. Embrace linter security rules](#-61-embrace-linter-security-rules)</br>
&emsp;&emsp;[6.2. Limit concurrent requests using a middleware](#-62-limit-concurrent-requests-using-a-middleware)</br>
&emsp;&emsp;[6.3 Extract secrets from config files or use packages to encrypt them `#strategic`](#-63-extract-secrets-from-config-files-or-use-packages-to-encrypt-them)</br>
&emsp;&emsp;[6.4. Prevent query injection vulnerabilities with ORM/ODM libraries `#strategic`](#-64-prevent-query-injection-vulnerabilities-with-ormodm-libraries)</br>
&emsp;&emsp;[6.5. Collection of generic security best practices](#-65-collection-of-generic-security-best-practices)</br>
&emsp;&emsp;[6.6. Adjust the HTTP response headers for enhanced security](#-66-adjust-the-http-response-headers-for-enhanced-security)</br>
&emsp;&emsp;[6.7. Constantly and automatically inspect for vulnerable dependencies `#strategic`](#-67-constantly-and-automatically-inspect-for-vulnerable-dependencies)</br>
&emsp;&emsp;[6.8. Protect Users' Passwords/Secrets using bcrypt or scrypt `#strategic`](#-68-protect-users-passwordssecrets-using-bcrypt-or-scrypt)</br>
&emsp;&emsp;[6.9. Escape HTML, JS and CSS output](#-69-escape-html-js-and-css-output)</br>
&emsp;&emsp;[6.10. Validate incoming JSON schemas `#strategic`](#-610-validate-incoming-json-schemas)</br>
&emsp;&emsp;[6.11. Support blocklisting JWTs](#-611-support-blocklisting-jwts)</br>
&emsp;&emsp;[6.12. Prevent brute-force attacks against authorization `#advanced`](#-612-prevent-brute-force-attacks-against-authorization)</br>
&emsp;&emsp;[6.13. Run Node.js as non-root user](#-613-run-nodejs-as-non-root-user)</br>
&emsp;&emsp;[6.14. Limit payload size using a reverse-proxy or a middleware](#-614-limit-payload-size-using-a-reverse-proxy-or-a-middleware)</br>
&emsp;&emsp;[6.15. Avoid JavaScript eval statements](#-615-avoid-javascript-eval-statements)</br>
&emsp;&emsp;[6.16. Prevent evil RegEx from overloading your single thread execution](#-616-prevent-evil-regex-from-overloading-your-single-thread-execution)</br>
&emsp;&emsp;[6.17. Avoid module loading using a variable](#-617-avoid-module-loading-using-a-variable)</br>
&emsp;&emsp;[6.18. Run unsafe code in a sandbox](#-618-run-unsafe-code-in-a-sandbox)</br>
&emsp;&emsp;[6.19. Take extra care when working with child processes `#advanced`](#-619-take-extra-care-when-working-with-child-processes)</br>
&emsp;&emsp;[6.20. Hide error details from clients](#-620-hide-error-details-from-clients)</br>
&emsp;&emsp;[6.21. Configure 2FA for npm or Yarn `#strategic`](#-621-configure-2fa-for-npm-or-yarn)</br>
&emsp;&emsp;[6.22. Modify session middleware settings](#-622-modify-session-middleware-settings)</br>
&emsp;&emsp;[6.23. Avoid DOS attacks by explicitly setting when a process should crash `#advanced`](#-623-avoid-dos-attacks-by-explicitly-setting-when-a-process-should-crash)</br>
&emsp;&emsp;[6.24. Prevent unsafe redirects](#-624-prevent-unsafe-redirects)</br>
&emsp;&emsp;[6.25. Avoid publishing secrets to the npm registry](#-625-avoid-publishing-secrets-to-the-npm-registry)</br>
&emsp;&emsp;[6.26. 6.26 Inspect for outdated packages](#-626-inspect-for-outdated-packages)</br>
&emsp;&emsp;[6.27. Import built-in modules using the 'node:' protocol `#new`](#-627-import-built-in-modules-using-the-node-protocol)</br>

</details>

<details>
  <summary>
    <a href="#7-draft-performance-best-practices">7. ביצועים (2) (בתהליך ✍️)</a>
  </summary>

&emsp;&emsp;[7.1. Don't block the event loop](#-71-dont-block-the-event-loop)</br>
&emsp;&emsp;[7.2. Prefer native JS methods over user-land utils like Lodash](#-72-prefer-native-js-methods-over-user-land-utils-like-lodash)</br>

</details>

<details>
  <summary>
    <a href="#8-docker-best-practices">8. דוקר (15)</a>
  </summary>

&emsp;&emsp;[8.1 Use multi-stage builds for leaner and more secure Docker images `#strategic`](#-81-use-multi-stage-builds-for-leaner-and-more-secure-docker-images)</br>
&emsp;&emsp;[8.2. Bootstrap using node command, avoid npm start](#-82-bootstrap-using-node-command-avoid-npm-start)</br>
&emsp;&emsp;[8.3. Let the Docker runtime handle replication and uptime `#strategic`](#-83-let-the-docker-runtime-handle-replication-and-uptime)</br>
&emsp;&emsp;[8.4. Use .dockerignore to prevent leaking secrets](#-84-use-dockerignore-to-prevent-leaking-secrets)</br>
&emsp;&emsp;[8.5. Clean-up dependencies before production](#-85-clean-up-dependencies-before-production)</br>
&emsp;&emsp;[8.6. Shutdown smartly and gracefully `#advanced`](#-86-shutdown-smartly-and-gracefully)</br>
&emsp;&emsp;[8.7. Set memory limits using both Docker and v8 `#advanced` `#strategic`](#-87-set-memory-limits-using-both-docker-and-v8)</br>
&emsp;&emsp;[8.8. Plan for efficient caching](#-88-plan-for-efficient-caching)</br>
&emsp;&emsp;[8.9. Use explicit image reference, avoid latest tag](#-89-use-explicit-image-reference-avoid-latest-tag)</br>
&emsp;&emsp;[8.10. Prefer smaller Docker base images](#-810-prefer-smaller-docker-base-images)</br>
&emsp;&emsp;[8.11. Clean-out build-time secrets, avoid secrets in args `#strategic #new`](#-811-clean-out-build-time-secrets-avoid-secrets-in-args)</br>
&emsp;&emsp;[8.12. Scan images for multi layers of vulnerabilities `#advanced`](#-812-scan-images-for-multi-layers-of-vulnerabilities)</br>
&emsp;&emsp;[8.13 Clean NODE_MODULE cache](#-813-clean-node_module-cache)</br>
&emsp;&emsp;[8.14. Generic Docker practices](#-814-generic-docker-practices)</br>
&emsp;&emsp;[8.15. Lint your Dockerfile `#new`](#-815-lint-your-dockerfile)</br>

</details>

<br/><br/>

# `1. מבנה הפרוייקט`

## ![✔] 1.1 בנו את הפרוייקט לפי רכיבים עסקיים

**אמ;לק:** בסיס המערכת צריך לכלול תיקיות או מאגרים שמייצג בצורה הגיונית את המידול העסקי. כל רכיב מייצג תחום מוצר (כלומר הקשר מוגבל), למשל 'משתמשים', 'הזמנות', וכולי... כל רכיב מכיל את ה API, לוגיקה ומסד הנתונים שלו. מה המטרה של זה? כאשר יש סביבה עצמאית כל שינוי משפיע אך ורק על החלק הרלוונטי - העומס הנפשי, סיבוכיות הפיתוח והחשש מפריסה חדשה של הרכיב הרבה יותר קטן. כתוצאה מכך, מתכנתים יכולים לפתח הרבה יותר מהר. זה לא דורש בהכרח הפרדה פיזית ויכול להיות מושג גם בMonorepo או multi-repo.

```bash
my-system
├─ apps (components)
│  ├─ orders
│  ├─ users
│  ├─ payments
├─ libraries (generic cross-component functionality)
│  ├─ logger
│  ├─ authenticator
```

**אחרת:** כאשר מוצרים של מודולים או נושאים שונים מעורבבים יחד, ישנו סיכוי גבוה שתיווצר מערכת ספגטי בעלת צימוד גבוה. לדוגמה, בארכיטקטורה שבה 'מודול א`' קורא לשירות מ'מודול ב;', אין הפרדה ברורהבין המודולים השונים - כל שינוי בקוד עלול להשפיע על משהו אחר. עם הגישה הזאת , מתכנתים שצריכים להוסיף מוצר חדש למערכת יאבקו בה בהבנה על מה השינוי שלהם יכול להשפיע. כתוצאה מכך, הם חששו לשבור מודולים אחרים, וכל פריסה נהייתה איטית יותר ומסוכנת יותר.

🔗 [**לקריאה נוספת: בנייה לפי רכיבים**](./sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 חלוקת הרכיבים ל3 שכבות, שמירה על שכבת הווב בגבולותיה

**אמ;לק:** כל רכיב צריך לכלול 'שכבות' - תיקייה יעודית עם אחריות משותפת: 'entry-point' איפה שחלקי השליטה נמצאים, 'domain' איפה שהלוגיקה נמצאת ו 'data-access'. העיקרון המנחה של הארכיטקטורות המובילות בשוק הוא להפריד את האחריות הטכנית (למשל: HTTP, DB ועוד) מהלוגיקה היעודית של המוצר כך שהמתכנתים יוכלו לקודד יותר תכולות בלי לדאוג לגבי ניהול תשתיות. השמה של כל שכבה בתיקייה יעודית, שידועה גם כ-[מודל 3 השכבות](https://he.wikipedia.org/wiki/%D7%90%D7%A8%D7%9B%D7%99%D7%98%D7%A7%D7%98%D7%95%D7%A8%D7%94_%D7%A8%D7%91-%D7%A9%D7%9B%D7%91%D7%AA%D7%99%D7%AA#%D7%90%D7%A8%D7%9B%D7%99%D7%98%D7%A7%D7%98%D7%95%D7%A8%D7%AA_%D7%A9%D7%9C%D7%95%D7%A9_%D7%A9%D7%9B%D7%91%D7%95%D7%AA) ([באנגלית](https://en.wikipedia.org/wiki/Multitier_architecture#Three-tier_architecture)) זאת הדרך _הפשוטה_ להשיג את המטרה.

```bash
my-system
├─ apps (components)
│  ├─ component-a
   │  ├─ entry-points
   │  │  ├─ api # controller comes here
   │  │  ├─ message-queue # message consumer comes here
   │  ├─ domain # features and flows: DTO, services, logic
   │  ├─ data-access # DB calls w/o ORM
```

**אחרת:** לעתים דחופות נתקלים בכך שהמתכנתים מעבירים אובייקטי תקשורת כדוגמת request/reqponse לפונקציות בשכבות של הלוגיקה או ניהול המידע - דבר זה פוגע בעיקרון ההפרדה וגורם לכך שבעתיד יהיה קשה יותר להנגיש את הלוגיקה לסוגי קלינטים אחרים כדוגמת: בדיקות יחידה, משימות מתוזמנות וmessage queues.

🔗 [**לקריאה נוספת: חלק את המוצר לשכבות**](./sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 עטפו כלים משותפים בחבילות, שקלו את הפצתם

**אמ;לק:** מקמו את כל הכלים שאפשר לשתף אותם בתיקייה ייעודית, למשל 'libraries' וכל כלי בתיקייה פנימית נפרדת, למשל '/libraries/logger'. הפכו את הכלי לחבילה בלתי תלויה עם קובץ ה package.json שלו וזאת כדי להגדיל את הכימוס (encapsulation), ואפשרו הפצה עתידית למאגר. כאשר הפרוייקט שלכם בנוי בתצורת monorepo, כלים אלו יכולים להיות מוגדרים על ידי שימוש ב 'npm linking' לכתובת הפיזית שלהם על ידי שימוש ב ts-paths או על ידי הפצה והתקנה על ידימנהל חבילות כדוגמת 'npm registry'.

```bash
my-system
├─ apps (components)
  │  ├─ component-a
├─ libraries (generic cross-component functionality)
│  ├─ logger
│  │  ├─ package.json
│  │  ├─ src
│  │  │ ├─ index.js

```

**אחרת:** צרכנים של כלי יהיו צמודים לפונקציונליות הפנימית שלו. על ידי הגדרה של package.json בשורש הכלי מישהו יכול להגדיר קובץ package.json.main או package.json.exports כדי להצהיר במפורש אילו קבצים ופונקציולניות היא חלק מהחלקים הנגישים של הכלי.

🔗 [**לקריאה נוספת: בנייה לפי תכונה**](./sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 השתמשו בקונפיגורציה עם משתני סביבה באופן מודע, מאובטח והיררכי

**אמ;לק:** הגדרת סביבה מושלמת צריכה להבטיח כי (א) שמות משתנים יכולים להיקרא מקבצים כמו גם ממשתני סביבה (ב) סודות נשמרים מחוץ לקוד ששייך למאגר (ג) הקונפיגורציה היא היררכית לצורך חיפוש קל יותר (ד) תמיכה בסוגים שונים של משתנים (ה) וידוא מוקדם של משתנים לא תקינים (ו) הגדרת ברירת מחדל לכל שדה. ישנן מספר ספריות שעונות על רוב הדרישות הללו כמו [convict](https://www.npmjs.com/package/convict), [env-var](env-var), [zod](https://github.com/colinhacks/zod), ועוד...

**אחרת:** נניח וישנו משתנה סביבה הכרחי שלא הוגדר, המערכת תתחיל לרוץ בהצלחה, תענה לבקשות, חלק מהמידע יעודכן במסד הנתונים, ולפתע יהיה חסר לה שדה הכרחי להמשך התהליך ושבלעדיו היא לא יכולה לסיים את הפעולה, מה שייצור מערכת במצב "מלוכלך".

🔗 [**לקריאה נוספת: שיטות עבודה של קונפיגורציה**](./sections/projectstructre/configguide.md)

<br/><br/>

## ![✔] 1.5 שקלו את כל ההשלכות בעת בחירת <abbr title="framework">מסגרת</abbr>

**אמ;לק:** כאשר בונים אפליקציות ו API-ים, שימוש בפריימוורק הוא חובה. קל להתעלם מהאפשרויות השונות שקיימות ומשיקולים חשובים ובסופו של דבר להשתמש באפשרות שפחות תואמת לדרישות של המוצר. נכון ל2023/2024 אנו מאמינים כי ארבעת הפריימוורקים הללו הם הכדאיים ביותר להשוואה: [Nest.js](https://nestjs.com/), [Fastify](https://www.fastify.io/), [express](https://expressjs.com/), ו [Koa](https://koajs.com/). לחצו על לקריאה נוספת בהמשך כדי לקרוא פרטים נוספים בעד ונגד כל אחת מהאפשרויות.  באופן פשטני, אנו מאמינים כי Node.js זאת ההתאמה הכי טובה לצוותים שרוצים לעבוד בשיטת OOP או לבנות מוצרים שמיועדים לגדול בצורה ניכרת ואי אפשר לחלק אותם לרכיבים קטנים _ועצמאיים_. ההמלצה שלנו היא Fastify עבור מערכות בגודל סבירents (כמו Microservices) שמושתתים על עקרונות פשוטים של Node.js.

**אחרת:** בשל הכמות העצומה של השיקולים, קל לקבל החלטה על בסיס מידע חלקי ולהשוות תפוחים לתפוזים. למשל, ישנה הנחה רווחת שFastify הוא web-server מינימלי שראוי להשוות לexpress בלבד. בפועל, זהו פריימוורק עשיר עם הרבה הרחבות רשמיות שמכסות הרבה צרכים.

🔗 [**לקריאה נוספת: בחירת הפריימוורק הנכון**](./sections/projectstructre/choose-framework.md)

## ![✔] 1.6 השתמשו ב-TypeScript במידתיות ובצורה מושכלת

**אמ;לק:** קידוד ללא מקדמי בטיחות של סיווג משתנים הוא כבר לא אפשרות בת קיימא, TypeScript מהווה את האפשרות הפופולרית ביותר למשימה זו. משתמשים בה להגדרת סוגי משתנים וערכי החזרה של פונקציות. עם זאת, זוהי חרב פיפיות שיכולה בקלות ליצור מורכבות בשל בסביבות 50 מילות מפתח נוספות שיש לה ותכונות מתוחכמות שצריך לדעת להשתמש בהן. שימוש בה צריך להיעשות במידה, בעדיפות להגדרות פשוטות של משתנים, ושימוש ביכולות מתקדמות רק כאשר צורך הכרחי מופיע.

**אחרת:** [מחקרים](https://earlbarr.com/publications/typestudy.pdf) מראים כי שימוש ב-TypeScript יכול לעזור בזיהוי כ20% מהבאגים בשלבים מוקדמים יותר. ללא TypeScript חווית הפיתוח ב IDE נהיית בלתי נסבלת. מהצד השני, 80% מהבאגים היא לא עוזרת לזהות. כתוצאה מכך, שימוש בTypeScript מוסיף ערך מוגבל. רק הוספה של בדיקות איכותיות יכולה לעזור לזהות את מגוון הבאגים הרחב, כולל כאלו שנגרמים מאפיון לא תקין של סוג המשתנה. שימוש לא טוב גם עלול להרוג את המטרה, תכונות מורכבות של קוד מעלות אתמורכבות הקוד מה שבאופן ישיר מעלה את מספר הבאגים וזמן התיקון של כל באג.

🔗 [**לקריאה נוספת: שיקולים לשימוש ב-TypeScript**](./sections/projectstructre/typescript-considerations.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

# `2. ניהול שגיאות`

## ![✔] 2.1 Use Async-Await or promises for async error handling

**אמ;לק:** Handling async errors in callback style is probably the fastest way to hell (a.k.a the pyramid of doom). The best gift you can give to your code is using Promises with async-await which enables a much more compact and familiar code syntax like try-catch

**אחרת:** Node.js callback style, function(err, response), is a promising way to un-maintainable code due to the mix of error handling with casual code, excessive nesting, and awkward coding patterns

🔗 [**Read More: avoiding callbacks**](./sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Extend the built-in Error object

**אמ;לק:** Some libraries throw errors as a string or as some custom type – this complicates the error handling logic and the interoperability between modules. Instead, create app error object/class that extends the built-in Error object and use it whenever rejecting, throwing or emitting an error. The app error should add useful imperative properties like the error name/code and isCatastrophic. By doing so, all errors have a unified structure and support better error handling .There is `no-throw-literal` ESLint rule that strictly checks that (although it has some [limitations](https://eslint.org/docs/rules/no-throw-literal) which can be solved when using TypeScript and setting the `@typescript-eslint/no-throw-literal` rule)

**אחרת:** When invoking some component, being uncertain which type of errors come in return – it makes proper error handling much harder. Even worse, using custom types to describe errors might lead to loss of critical error information like the stack trace!

🔗 [**Read More: using the built-in error object**](./sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Distinguish catastrophic errors from operational errors

**אמ;לק:** Operational errors (e.g. API received an invalid input) refer to known cases where the error impact is fully understood and can be handled thoughtfully. On the other hand, catastrophic error (also known as programmer errors) refers to unusual code failures that dictate to gracefully restart the application

**אחרת:** You may always restart the application when an error appears, but why let ~5000 online users down because of a minor, predicted, operational error? The opposite is also not ideal – keeping the application up when an unknown catastrophic issue (programmer error) occurred might lead to an unpredicted behavior. Differentiating the two allows acting tactfully and applying a balanced approach based on the given context

🔗 [**Read More: operational vs programmer error**](./sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Handle errors centrally, not within a middleware

**אמ;לק:** Error handling logic such as logging, deciding whether to crash and monitoring metrics should be encapsulated in a dedicated and centralized object that all entry-points (e.g. APIs, cron jobs, scheduled jobs) call when an error comes in

**אחרת:** Not handling errors within a single place will lead to code duplication and probably to improperly handled errors

🔗 [**Read More: handling errors in a centralized place**](./sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Document API errors using OpenAPI or GraphQL

**אמ;לק:** Let your API callers know which errors might come in return so they can handle these thoughtfully without crashing. For RESTful APIs, this is usually done with documentation frameworks like OpenAPI. If you're using GraphQL, you can utilize your schema and comments as well

**אחרת:** An API client might decide to crash and restart only because it received back an error it couldn’t understand. Note: the caller of your API might be you (very typical in a microservice environment)

🔗 [**Read More: documenting API errors in Swagger or GraphQL**](./sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Exit the process gracefully when a stranger comes to town

**אמ;לק:** When an unknown error occurs (catastrophic error, see best practice 2.3) - there is uncertainty about the application healthiness. In this case, there is no escape from making the error observable, shutting off connections and exiting the process. Any reputable runtime framework like Dockerized services or cloud serverless solutions will take care to restart

**אחרת:** When an unfamiliar exception occurs, some object might be in a faulty state (e.g. an event emitter which is used globally and not firing events anymore due to some internal failure) and all future requests might fail or behave crazily

🔗 [**Read More: shutting the process**](./sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Use a mature logger to increase errors visibility

**אמ;לק:** A robust logging tools like [Pino](https://github.com/pinojs/pino) or [Winston](https://github.com/winstonjs/winston) increases the errors visibility using features like log-levels, pretty print coloring and more. Console.log lacks these imperative features and should be avoided. The best in class logger allows attaching custom useful properties to log entries with minimized serialization performance penalty. Developers should write logs to `stdout` and let the infrastructure pipe the stream to the appropriate log aggregator

**אחרת:** Skimming through console.logs or manually through messy text file without querying tools or a decent log viewer might keep you busy at work until late

🔗 [**Read More: using a mature logger**](./sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Test error flows using your favorite test framework

**אמ;לק:** Whether professional automated QA or plain manual developer testing – Ensure that your code not only satisfies positive scenarios but also handles and returns the right errors. On top of this, simulate deeper error flows like uncaught exceptions an ensure that the error handler treat these properly (see code examples within the "read more" section)

**אחרת:** Without testing, whether automatically or manually, you can’t rely on your code to return the right errors. Without meaningful errors – there’s no error handling

🔗 [**Read More: testing error flows**](./sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Discover errors and downtime using APM products

**אמ;לק:** Monitoring and performance products (a.k.a APM) proactively gauge your codebase or API so they can automagically highlight errors, crashes, and slow parts that you were missing

**אחרת:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which are your slowest code parts under real-world scenario and how these affect the UX

🔗 [**Read More: using APM products**](./sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Catch unhandled promise rejections

**אמ;לק:** Any exception thrown within a promise will get swallowed and discarded unless a developer didn’t forget to explicitly handle it. Even if your code is subscribed to `process.uncaughtException`! Overcome this by registering to the event `process.unhandledRejection`

**אחרת:** Your errors will get swallowed and leave no trace. Nothing to worry about

🔗 [**Read More: catching unhandled promise rejection**](./sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Fail fast, validate arguments using a dedicated library

**אמ;לק:** Assert API input to avoid nasty bugs that are much harder to track later. The validation code is usually tedious unless you are using a modern validation library like [ajv](https://www.npmjs.com/package/ajv), [zod](https://github.com/colinhacks/zod), or [typebox](https://github.com/sinclairzx81/typebox)

**אחרת:** Consider this – your function expects a numeric argument “Discount” which the caller forgets to pass, later on, your code checks if Discount!=0 (amount of allowed discount is greater than zero), then it will allow the user to enjoy a discount. OMG, what a nasty bug. Can you see it?

🔗 [**Read More: failing fast**](./sections/errorhandling/failfast.md)

<br/><br/>

## ![✔] 2.12 Always await promises before returning to avoid a partial stacktrace

**אמ;לק:** Always do `return await` when returning a promise to benefit full error stacktrace. If a
function returns a promise, that function must be declared as `async` function and explicitly
`await` the promise before returning it

**אחרת:** The function that returns a promise without awaiting won't appear in the stacktrace.
Such missing frames would probably complicate the understanding of the flow that leads to the error,
especially if the cause of the abnormal behavior is inside of the missing function

🔗 [**Read More: returning promises**](./sections/errorhandling/returningpromises.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

# `3. תבניות קוד וסגנון עיצוב`

## ![✔] 3.1 Use ESLint

**אמ;לק:** [ESLint](https://eslint.org) is the de-facto standard for checking possible code errors and fixing code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. Though ESLint can automatically fix code styles, other tools like [prettier](https://www.npmjs.com/package/prettier) are more powerful in formatting the fix and work in conjunction with ESLint

**אחרת:** Developers will focus on tedious spacing and line-width concerns and time might be wasted overthinking the project's code style

🔗 [**Read More: Using ESLint and Prettier**](./sections/codestylepractices/eslint_prettier.md)

<br/><br/>

## ![✔] 3.2 Use Node.js eslint extension plugins

**אמ;לק:** On top of ESLint standard rules that cover vanilla JavaScript, add Node.js specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security), [eslint-plugin-require](https://www.npmjs.com/package/eslint-plugin-require), [/eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) and other useful rules

**אחרת:** Many faulty Node.js code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as a path which allows attackers to execute any JS script. Node.js linters can detect such patterns and complain early

<br/><br/>

## ![✔] 3.3 Start a Codeblock's Curly Braces on the Same Line

**אמ;לק:** The opening curly braces of a code block should be on the same line as the opening statement

### Code Example

```javascript
// Do
function someFunction() {
  // code block
}

// Avoid
function someFunction() {
  // code block
}
```

**אחרת:** Deferring from this best practice might lead to unexpected results, as seen in the StackOverflow thread below:

🔗 [**Read more:** "Why do results vary based on curly brace placement?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Separate your statements properly

No matter if you use semicolons or not to separate your statements, knowing the common pitfalls of improper linebreaks or automatic semicolon insertion, will help you to eliminate regular syntax errors.

**אמ;לק:** Use ESLint to gain awareness about separation concerns. [Prettier](https://prettier.io/) or [Standardjs](https://standardjs.com/) can automatically resolve these issues.

**אחרת:** As seen in the previous section, JavaScript's interpreter automatically adds a semicolon at the end of a statement if there isn't one, or considers a statement as not ended where it should, which might lead to some undesired results. You can use assignments and avoid using immediately invoked function expressions to prevent most of the unexpected errors.

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

## ![✔] 3.5 Name your functions

**אמ;לק:** Name all functions, including closures and callbacks. Avoid anonymous functions. This is especially useful when profiling a node app. Naming all functions will allow you to easily understand what you're looking at when checking a memory snapshot

**אחרת:** Debugging production issues using a core dump (memory snapshot) might become challenging as you notice significant memory consumption from anonymous functions

<br/><br/>

## ![✔] 3.6 Use naming conventions for variables, constants, functions and classes

**אמ;לק:** Use **_lowerCamelCase_** when naming constants, variables and functions, **_UpperCamelCase_** (capital first letter as well) when naming classes and **_UPPER_SNAKE_CASE_** when naming global or static variables. This will help you to easily distinguish between plain variables, functions, classes that require instantiation and variables declared at global module scope. Use descriptive names, but try to keep them short

**אחרת:** JavaScript is the only language in the world that allows invoking a constructor ("Class") directly without instantiating it first. Consequently, Classes and function-constructors are differentiated by starting with UpperCamelCase

### 3.6 Code Example

```javascript
// for global variables names we use the const/let keyword and UPPER_SNAKE_CASE
let MUTABLE_GLOBAL = "mutable value";
const GLOBAL_CONSTANT = "immutable value";
const CONFIG = {
  key: "value",
};

// examples of UPPER_SNAKE_CASE convention in nodejs/javascript ecosystem
// in javascript Math.PI module
const PI = 3.141592653589793;

// https://github.com/nodejs/node/blob/b9f36062d7b5c5039498e98d2f2c180dca2a7065/lib/internal/http2/core.js#L303
// in nodejs http2 module
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;

// for class name we use UpperCamelCase
class SomeClassExample {
  // for static class properties we use UPPER_SNAKE_CASE
  static STATIC_PROPERTY = "value";
}

// for functions names we use lowerCamelCase
function doSomething() {
  // for scoped variable names we use the const/let keyword and lowerCamelCase
  const someConstExample = "immutable value";
  let someMutableExample = "mutable value";
}
```

<br/><br/>

## ![✔] 3.7 Prefer const over let. Ditch the var

**אמ;לק:** Using `const` means that once a variable is assigned, it cannot be reassigned. Preferring `const` will help you to not be tempted to use the same variable for different uses, and make your code clearer. If a variable needs to be reassigned, in a for loop, for example, use `let` to declare it. Another important aspect of `let` is that a variable declared using it is only available in the block scope in which it was defined. `var` is function scoped, not block-scoped, and [shouldn't be used in ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) now that you have `const` and `let` at your disposal

**אחרת:** Debugging becomes way more cumbersome when following a variable that frequently changes

🔗 [**Read more: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Require modules first, not inside functions

**אמ;לק:** Require modules at the beginning of each file, before and outside of any functions. This simple best practice will not only help you easily and quickly tell the dependencies of a file right at the top but also avoids a couple of potential problems

**אחרת:** Requires are run synchronously by Node.js. If they are called from within a function, it may block other requests from being handled at a more critical time. Also, if a required module or any of its dependencies throw an error and crash the server, it is best to find out about it as soon as possible, which might not be the case if that module is required from within a function

<br/><br/>

## ![✔] 3.9 Set an explicit entry point to a module/folder

**אמ;לק:** When developing a module/library, set an explicit root file that exports the public and interesting code. Discourage the client code from importing deep files and becoming familiar with the internal structure. With commonjs (require), this can be done with an index.js file at the folder's root or the package.json.main field. With ESM (import), if a package.json exists on the root, the field "exports" allow specifying the module's root file. If no package.json exists, you may put an index.js file on the root which re-exports all the public functionality

**אחרת:** Having an explicit root file acts like a public 'interface' that encapsulates the internal, directs the caller to the public code and facilitates future changes without breaking the contract

### 3.9 Code example - avoid coupling the client to the module structure

```javascript
// Avoid: client has deep familiarity with the internals

// Client code
const SMSWithMedia = require("./SMSProvider/providers/media/media-provider.js");

// Better: explicitly export the public functions

//index.js, module code
module.exports.SMSWithMedia = require("./SMSProvider/providers/media/media-provider.js");

// Client code
const { SMSWithMedia } = require("./SMSProvider");
```

<br/><br/>

## ![✔] 3.10 Use the `===` operator

**אמ;לק:** Prefer the strict equality operator `===` over the weaker abstract equality operator `==`. `==` will compare two variables after converting them to a common type. There is no type conversion in `===`, and both variables must be of the same type to be equal

**אחרת:** Unequal variables might return true when compared with the `==` operator

### 3.10 Code example

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

All statements above will return false if used with `===`

<br/><br/>

## ![✔] 3.11 Use Async Await, avoid callbacks

**אמ;לק:** Node 8 LTS now has full support for Async-await. This is a new way of dealing with asynchronous code which supersedes callbacks and promises. Async-await is non-blocking, and it makes asynchronous code look synchronous. The best gift you can give to your code is using async-await which provides a much more compact and familiar code syntax like try-catch

**אחרת:** Handling async errors in callback style are probably the fastest way to hell - this style forces to check errors all over, deal with awkward code nesting, and makes it difficult to reason about the code flow

🔗[**Read more:** Guide to async-await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use arrow function expressions (=>)

**אמ;לק:** Though it's recommended to use async-await and avoid function parameters when dealing with older APIs that accept promises or callbacks - arrow functions make the code structure more compact and keep the lexical context of the root function (i.e. `this`)

**אחרת:** Longer code (in ES5 functions) is more prone to bugs and cumbersome to read

🔗 [**Read more: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/>

## ![✔] 3.13 Avoid effects outside of functions

**אמ;לק:** Avoid putting code with effects like network or DB calls outside of functions. Such a code will be executed immediately when another file requires the file. This 'floating' code might get executed when the underlying system is not ready yet. It also comes with a performance penalty even when this module's functions will finally not be used in runtime. Last, mocking these DB/network calls for testing is harder outside of functions. Instead, put this code inside functions that should get called explicitly. If some DB/network code must get executed right when the module loads, consider using the factory or revealing module patterns

**אחרת:** A typical web framework sets error handler, environment variables and monitoring. When DB/network calls are made before the web framework is initialized, they won't be monitored or fail due to a lack of configuration data

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

# `4. בדיקות ובקרת איכות`

\_We have dedicated guides for testing, see below. The best practices list here is a brief summary of these guides

a. [JavaScript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
b. [Node.js testing - beyond the basics](https://github.com/testjavascript/nodejs-integration-tests-best-practices)
\_

## ![✔] 4.1 At the very least, write API (component) testing

**אמ;לק:** Most projects just don't have any automated testing due to short timetables or often the 'testing project' ran out of control and was abandoned. For that reason, prioritize and start with API testing which is the easiest way to write and provides more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/)). Afterwards, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**אחרת:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Include 3 parts in each test name

**אמ;לק:** Make the test speak at the requirements level so it's self-explanatory also to QA engineers and developers who are not familiar with the code internals. State in the test name what is being tested (unit under test), under what circumstances, and what is the expected result

**אחרת:** A deployment just failed, a test named “Add product” failed. Does this tell you what exactly is malfunctioning?

🔗 [**Read More: Include 3 parts in each test name**](./sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Structure tests by the AAA pattern

**אמ;לק:** Structure your tests with 3 well-separated sections: Arrange, Act & Assert (AAA). The first part includes the test setup, then the execution of the unit under test, and finally the assertion phase. Following this structure guarantees that the reader spends no brain CPU on understanding the test plan

**אחרת:** Not only you spend long daily hours on understanding the main code, but now also what should have been the simple part of the day (testing) stretches your brain

🔗 [**Read More: Structure tests by the AAA pattern**](./sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Ensure Node version is unified

**אמ;לק:** Use tools that encourage or enforce the same Node.js version across different environments and developers. Tools like [nvm](https://github.com/nvm-sh/nvm), and [Volta](https://volta.sh/) allow specifying the project's version in a file so each team member can run a single command to conform with the project's version. Optionally, this definition can be replicated to CI and the production runtime (e.g., copy the specified value to .Dockerfile build and to the CI declaration file)

**אחרת:** A developer might face or miss an error because she uses a different Node.js version than her teammates. Even worse - the production runtime might be different than the environment where tests were executed

<br/><br/>

## ![✔] 4.5 Avoid global test fixtures and seeds, add data per-test

**אמ;לק:** To prevent test coupling and easily reason about the test flow, each test should add and act on its own set of DB rows. Whenever a test needs to pull or assume the existence of some DB data - it must explicitly add that data and avoid mutating any other records

**אחרת:** Consider a scenario where deployment is aborted due to failing tests, team is now going to spend precious investigation time that ends in a sad conclusion: the system works well, the tests however interfere with each other and break the build

🔗 [**Read More: Avoid global test fixtures**](./sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Tag your tests

**אמ;לק:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**אחרת:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

<br/><br/>

## ![✔] 4.7 Check your test coverage, it helps to identify wrong test patterns

**אמ;לק:** Code coverage tools like [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but not least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**אחרת:** There won't be any automated metric telling you when a large portion of your code is not covered by testing

<br/><br/>

## ![✔] 4.8 Use production-like environment for e2e testing

**אמ;לק:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Use an environment which is as close to your real production environment as possible like a-continue (Missed -continue here, needs content. Judging by the **Otherwise** clause, this should mention docker-compose)

**אחרת:** Without docker-compose, teams must maintain a testing DB for each testing environment including developers' machines, keep all those DBs in sync so test results won't vary across environments

<br/><br/>

## ![✔] 4.9 Refactor regularly using static analysis tools

**אמ;לק:** Using static analysis tools helps by giving objective ways to improve code quality and keeps your code maintainable. You can add static analysis tools to your CI build to fail when it finds code smells. Its main selling points over plain linting are the ability to inspect quality in the context of multiple files (e.g. detect duplications), perform advanced analysis (e.g. code complexity), and follow the history and progress of code issues. Two examples of tools you can use are [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) and [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**אחרת:** With poor code quality, bugs and performance will always be an issue that no shiny new library or state of the art features can fix

🔗 [**Read More: Refactoring!**](./sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.10 Mock responses of external HTTP services

**אמ;לק:** Use network mocking tools to simulate responses of external collaborators' services that are approached over the network (e.g., REST, Graph). This is imperative not only to isolate the component under test but mostly to simulate non-happy path flows. Tools like [nock](https://github.com/nock/nock) (in-process) or [Mock-Server](https://www.mock-server.com/) allow defining a specific response of external service in a single line of code. Remember to simulate also errors, delays, timeouts, and any other event that is likely to happen in production

**אחרת:** Allowing your component to reach real external services instances will likely result in naive tests that mostly cover happy paths. The tests might also be flaky and slow

🔗 [**Read More: Mock external services**](./sections/testingandquality/mock-external-services.md)

## ![✔] 4.11 Test your middlewares in isolation

**אמ;לק:** When a middleware holds some immense logic that spans many requests, it is worth testing it in isolation without waking up the entire web framework. This can be easily achieved by stubbing and spying on the {req, res, next} objects

**אחרת:** A bug in Express middleware === a bug in all or most requests

🔗 [**Read More: Test middlewares in isolation**](./sections/testingandquality/test-middlewares.md)

## ![✔] 4.12 Specify a port in production, randomize in testing

**אמ;לק:** When testing against the API, it's common and desirable to initialize the web server inside the tests. Let the server randomize the web server port in testing to prevent collisions. If you're using Node.js http server (used by most frameworks), doing so demands nothing but passing a port number zero - this will randomize an available port

**אחרת:** Specifying a fixed port will prevent two testing processes from running at the same time. Most of the modern test runners run with multiple processes by default

🔗 [**Read More: Randomize a port for testing**](./sections/testingandquality/randomize-port.md)

## ![✔] 4.13 Test the five possible outcomes

**אמ;לק:** When testing a flow, ensure to cover five potential categories. Any time some action is triggered (e.g., API call), a reaction occurs, a meaningful **outcome** is produced and calls for testing. There are five possible outcome types for every flow: a response, a visible state change (e.g., DB), an outgoing API call, a new message in a queue, and an observability call (e.g., logging, metric). See a [checklist here](https://testjavascript.com/wp-content/uploads/2021/10/the-backend-checklist.pdf). Each type of outcome comes with unique challenges and techniques to mitigate those challenges - we have a dedicated guide about this topic: [Node.js testing - beyond the basics](https://github.com/testjavascript/nodejs-integration-tests-best-practices)

**אחרת:** Consider a case when testing the addition of a new product to the system. It's common to see tests that assert on a valid response only. What if the product was failed to persist regardless of the positive response? what if when adding a new product demands calling some external service, or putting a message in the queue - shouldn't the test assert these outcomes as well? It's easy to overlook various paths, this is where a [checklist comes handy](https://testjavascript.com/wp-content/uploads/2021/10/the-backend-checklist.pdf)

🔗 [**Read More: Test five outcomes**](./sections/testingandquality/test-five-outcomes.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

# `5. עלייה לאוויר`

## ![✔] 5.1. Monitoring

**אמ;לק:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. In any case, the 4 layers of observability must be covered: uptime, metrics with focus on user-facing symptoms and Node.js technical metrics like event loop lag, distributed flows measurement with Open Telemetry and logging. Click ‘Read More’ below for an overview of the solutions

**אחרת:** Failure === disappointed customers. Simple

🔗 [**Read More: Monitoring!**](./sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase the observability using smart logging

**אמ;לק:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**אחרת:** You end up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Increase transparency using smart logging**](./sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**אמ;לק:** Node is quite bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use specialized infrastructure like nginx, HAproxy or cloud vendor services instead

**אחרת:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**Read More: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](./sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**אמ;לק:** Your code must be identical across all environments, but without a special lockfile npm lets dependencies drift across environments. Ensure to commit your package-lock.json so all the environments will be identical

**אחרת:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code

🔗 [**Read More: Lock dependencies**](./sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**אמ;לק:** The process must go on and get restarted upon failures. Modern runtime platforms like Docker-ized platforms (e.g. Kubernetes), and Serverless take care for this automatically. When the app is hosted on a bare metal server, one must take care for a process management tools like [systemd](https://systemd.io/). Avoid including a custom process management tool in a modern platform that monitor an app instance (e.g., Kubernetes) - doing so will hide failures from the infrastructure. When the underlying infrastructure is not aware of errors, it can't perform useful mitigation steps like re-placing the instance in a different location

**אחרת:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to DevOps chaos

🔗 [**Read More: Guard process uptime using the right tool**](./sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**אמ;לק:** At its basic form, a Node app runs on a single CPU core while all others are left idling. It’s your duty to replicate the Node process and utilize all CPUs. Most of the modern run-times platform (e.g., Kubernetes) allow replicating instances of the app but they won't verify that all cores are utilized - this is your duty. If the app is hosted on a bare server, it's also your duty to use some process replication solution (e.g. systemd)

**אחרת:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**Read More: Utilize all CPU cores**](./sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**אמ;לק:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tested tools, some valuable information and operations are easier done using code

**אחרת:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**Read More: Create a ‘maintenance endpoint’**](./sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover the unknowns using APM products

**אמ;לק:** Consider adding another safety layer to the production stack - APM. While the majority of symptoms and causes can be detected using traditional monitoring techniques, in a distributed system there is more than meets the eye. Application monitoring and performance products (a.k.a. APM) can auto-magically go beyond traditional monitoring and provide additional layer of discovery and developer-experience. For example, some APM products can highlight a transaction that loads too slow on the **end-user's side** while suggesting the root cause. APMs also provide more context for developers who try to troubleshoot a log error by showing what was the server busy with when the error occurred. To name a few example

**אחרת:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affect the UX

🔗 [**Read More: Discover errors and downtime using APM products**](./sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**אמ;לק:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click 'Read More')

**אחרת:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**Read More: Make your code production-ready**](./sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**אמ;לק:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leak memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large apps consider baking your memory watch into a robust monitoring system

**אחרת:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Read More: Measure and guard the memory usage**](./sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**אמ;לק:** Serve frontend content using a specialized infrastructure (nginx, S3, CDN) because Node performance gets hurt when dealing with many static files due to its single-threaded model. One exception to this guideline is when doing server-side rendering

**אחרת:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**Read More: Get your frontend assets out of Node**](./sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Strive to be stateless

**אמ;לק:** Store any type of _data_ (e.g. user sessions, cache, uploaded files) within external data stores. When the app holds data in-process this adds additional layer of maintenance complexity like routing users to the same instance and higher cost of restarting a process. To enforce and encourage a stateless approach, most modern runtime platforms allows 'reapp-ing' instances periodically

**אחרת:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**Read More: Be stateless, kill your Servers almost every day**](./sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**אמ;לק:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can be easily be tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**אחרת:** Keeping your code clean from vulnerabilities without dedicated tools will require you to constantly follow online publications about new threats. Quite tedious

🔗 [**Read More: Use tools that automatically detect vulnerabilities**](./sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Assign a transaction id to each log statement

**אמ;לק:** Assign the same identifier, transaction-id: uuid(), to each log entry within a single request (also known as correlation-id/tracing-id/request-context). Then when inspecting errors in logs, easily conclude what happened before and after. Node has a built-in mechanism, [AsyncLocalStorage](https://nodejs.org/api/async_context.html), for keeping the same context across asynchronous calls. see code examples inside

**אחרת:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**Read More: Assign ‘TransactionId’ to each log statement**](./sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Set `NODE_ENV=production`

**אמ;לק:** Set the environment variable `NODE_ENV` to ‘production’ or ‘development’ to flag whether production optimizations should get activated – some npm packages determine the current environment and optimize their code for production

**אחרת:** Omitting this simple property might greatly degrade performance when dealing with some specific libraries like Express server-side rendering

🔗 [**Read More: Set NODE_ENV=production**](./sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**אמ;לק:** Research shows that teams who perform many deployments lower the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improve the deployment process. You should probably achieve this using Docker combined with CI tools as they became the industry standard for streamlined deployment

**אחרת:** Long deployments -> production downtime & human-related error -> team unconfident in making deployment -> fewer deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**אמ;לק:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**אחרת:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**Read More: Use an LTS release of Node.js**](./sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Log to stdout, avoid specifying log destination within the app

**אמ;לק:** Log destinations should not be hard-coded by developers within the application code, but instead should be defined by the execution environment the application runs in. Developers should write logs to `stdout` using a logger utility and then let the execution environment (container, server, etc.) pipe the `stdout` stream to the appropriate destination (i.e. Splunk, Graylog, ElasticSearch, etc.).

**אחרת:** If developers set the log routing, less flexibility is left for the ops professional who wishes to customize it. Beyond this, if the app tries to log directly to a remote location (e.g., Elastic Search), in case of panic or crash - further logs that might explain the problem won't arrive

🔗 [**Read More: Log Routing**](./sections/production/logrouting.md)

<br/><br/>

## ![✔] 5.19. Install your packages with `npm ci`

**אמ;לק:** Run `npm ci` to strictly do a clean install of your dependencies matching package.json and package-lock.json. Obviously production code must use the exact version of the packages that were used for testing. While package-lock.json file sets strict version for dependencies, in case of mismatch with the file package.json, the command 'npm install' will treat package.json as the source of truth. On the other hands, the command 'npm ci' will exit with error in case of mismatch between these files

**אחרת:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code.

🔗 [**Read More: Use npm ci**](./sections/production/installpackageswithnpmci.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

# `6. אבטחה`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**אמ;לק:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible, preferably while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**אחרת:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**Read More: Lint rules**](./sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**אמ;לק:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**אחרת:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Read More: Implement rate limiting**](./sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**אמ;לק:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**אחרת:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**Read More: Secret management**](./sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**אמ;לק:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**אחרת:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Read More: Query injection prevention using ORM/ODM libraries**](./sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**אמ;לק:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Read More: Common security best practices**](./sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**אמ;לק:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**אחרת:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**Read More: Using secure headers in your application**](./sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**אמ;לק:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**אחרת:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Read More: Dependency security**](./sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Protect Users' Passwords/Secrets using bcrypt or scrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**אמ;לק:** Passwords or secrets (e.g. API keys) should be stored using a secure hash + salt function like `bcrypt`,`scrypt`, or worst case `pbkdf2`.

**אחרת:** Passwords and secrets that are stored without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Read More: User Passwords**](./sections/security/userpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**אמ;לק:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**אחרת:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Read More: Escape output**](./sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**אמ;לק:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**אחרת:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Read More: Validate incoming JSON schemas**](./sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blocklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**אמ;לק:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blocklist of untrusted tokens that are validated on each request.

**אחרת:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Read More: Blocklist JSON Web Tokens**](./sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**אמ;לק:** A simple and powerful technique is to limit authorization attempts using two metrics:

1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**אחרת:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Read More: Login rate limiting**](./sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**אמ;לק:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**אחרת:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to their server)

🔗 [**Read More: Run Node.js as non-root user**](./sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**אמ;לק:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**אחרת:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Read More: Limit payload size**](./sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**אמ;לק:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**אחרת:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Read More: Avoid JavaScript eval statements**](./sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**אמ;לק:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**אחרת:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Read More: Prevent malicious RegEx**](./sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**אמ;לק:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**אחרת:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the file system, or access already existing system files.

🔗 [**Read More: Safe module loading**](./sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**אמ;לק:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**אחרת:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Read More: Run unsafe code in a sandbox**](./sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**אמ;לק:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**אחרת:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Read More: Be cautious when working with child processes**](./sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**אמ;לק:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**אחרת:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Read More: Hide error details from client**](./sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**אמ;לק:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**אחרת:** [Have you heard about the eslint developer whose password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**אמ;לק:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**אחרת:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Read More: Cookie and session security**](./sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**אמ;לק:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**אחרת:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**אמ;לק:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**אחרת:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Read More: Prevent unsafe redirects**](./sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**אמ;לק:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to ignore specific files or folders, or the `files` array in `package.json` can act as an allow list.

**אחרת:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**Read More: Avoid publishing secrets**](./sections/security/avoid_publishing_secrets.md)

<br/><br/>

## ![✔] 6.26 Inspect for outdated packages

**אמ;לק:** Use your preferred tool (e.g. `npm outdated` or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)) to detect installed outdated packages, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a severe scenario might be when an installed package is 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**אחרת:** Your production will run packages that have been explicitly tagged by their author as risky

<br/><br/>

## ![✔] 6.27. Import built-in modules using the 'node:' protocol

<a href="https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20A06:2021 – Vulnerable and Outdated Components-green.svg" alt=""/></a>

**אמ;לק:** Import or require built-in Node.js modules using the 'node protocol' syntax:

```javascript
import { functionName } from "node:module"; // note that 'node:' prefix
```

For example:

```javascript
import { createServer } from "node:http";
```

This style ensures that there is no ambiguity with global npm packages and makes it clear for the reader that the code refers to a well-trusted official module. This style can be enforced with the eslint rule ['prefer-node-protocol'](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)

**אחרת:** Using the import syntax without 'node:' prefix opens the door for [typosquatting attacks](https://en.wikipedia.org/wiki/Typosquatting) where one could mistakenly mistype a module name (e.g., 'event' instead of 'events) and get a malicious package that was built only to trick users into installing them

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

# `7. טיוטה: ביצועים`

## Our contributors are working on this section. [Would you like to join?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Don't block the event loop

**אמ;לק:** Avoid CPU intensive tasks as they will block the mostly single-threaded Event Loop and offload those to a dedicated thread, process or even a different technology based on the context.

**אחרת:** As the Event Loop is blocked, Node.js will be unable to handle other request thus causing delays for concurrent users. **3000 users are waiting for a response, the content is ready to be served, but one single request blocks the server from dispatching the results back**

🔗 [**Read More: Do not block the event loop**](./sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. Prefer native JS methods over user-land utils like Lodash

**אמ;לק:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**אחרת:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Read More: Native over user land utils**](./sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

# `8. דוקר`

🏅 Many thanks to [Bret Fisher](https://github.com/BretFisher) from whom we learned many of the following practices

<br/><br/>

## ![✔] 8.1 Use multi-stage builds for leaner and more secure Docker images

**אמ;לק:** Use multi-stage build to copy only necessary production artifacts. A lot of build-time dependencies and files are not needed for running your application. With multi-stage builds these resources can be used during build while the runtime environment contains only what's necessary. Multi-stage builds are an easy way to get rid of overweight and security threats.

**אחרת:** Larger images will take longer to build and ship, build-only tools might contain vulnerabilities and secrets only meant for the build phase might be leaked.

### Example Dockerfile for multi-stage builds

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

🔗 [**Read More: Use multi-stage builds**](./sections/docker/multi_stage_builds.md)

<br /><br /><br />

## ![✔] 8.2. Bootstrap using `node` command, avoid `npm start`

**אמ;לק:** Use `CMD ['node','server.js']` to start your app, avoid using npm scripts which don't pass OS signals to the code. This prevents problems with child-processes, signal handling, graceful shutdown and having zombie processes

Update: [Starting from npm 7, npm claim](https://docs.npmjs.com/cli/v7/using-npm/changelog#706-2020-10-27) to pass signals. We follow and will update accordingly

**אחרת:** When no signals are passed, your code will never be notified about shutdowns. Without this, it will lose its chance to close properly possibly losing current requests and/or data

[**Read More: Bootstrap container using node command, avoid npm start**](./sections/docker/bootstrap-using-node.md)

<br /><br /><br />

## ![✔] 8.3. Let the Docker runtime handle replication and uptime

**אמ;לק:** When using a Docker run time orchestrator (e.g., Kubernetes), invoke the Node.js process directly without intermediate process managers or custom code that replicate the process (e.g. PM2, Cluster module). The runtime platform has the highest amount of data and visibility for making placement decision - It knows best how many processes are needed, how to spread them and what to do in case of crashes

**אחרת:** Container keeps crashing due to lack of resources will get restarted indefinitely by the process manager. Should Kubernetes be aware of that, it could relocate it to a different roomy instance

🔗 [**Read More: Let the Docker orchestrator restart and replicate processes**](./sections/docker/restart-and-replicate-processes.md)

<br/><br /><br />

## ![✔] 8.4. Use .dockerignore to prevent leaking secrets

**TL;DR**: Include a `.dockerignore` file that filters out common secret files and development artifacts. By doing so, you might prevent secrets from leaking into the image. As a bonus the build time will significantly decrease. Also, ensure not to copy all files recursively rather explicitly choose what should be copied to Docker

**Otherwise**: Common personal secret files like `.env`, `.aws` and `.npmrc` will be shared with anybody with access to the image (e.g. Docker repository)

🔗 [**Read More: Use .dockerignore**](./sections/docker/docker-ignore.md)

<br /><br /><br />

## ![✔] 8.5. Clean-up dependencies before production

**אמ;לק:** Although Dev-Dependencies are sometimes needed during the build and test life-cycle, eventually the image that is shipped to production should be minimal and clean from development dependencies. Doing so guarantees that only necessary code is shipped and the amount of potential attacks (i.e. attack surface) is minimized. When using multi-stage build (see dedicated bullet) this can be achieved by installing all dependencies first and finally running `npm ci --production`

**אחרת:** Many of the infamous npm security breaches were found within development packages (e.g. [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes))

🔗 Read More: [Remove development dependencies](./sections/docker/install-for-production.md)

<br /><br /><br />

## ![✔] 8.6. Shutdown smartly and gracefully

**אמ;לק:** Handle the process SIGTERM event and clean-up all existing connection and resources. This should be done while responding to ongoing requests. In Dockerized runtimes, shutting down containers is not a rare event, rather a frequent occurrence that happen as part of routine work. Achieving this demands some thoughtful code to orchestrate several moving parts: The load balancer, keep-alive connections, the HTTP server and other resources

**אחרת:** Dying immediately means not responding to thousands of disappointed users

🔗 [**Read More: Graceful shutdown**](./sections/docker/graceful-shutdown.md)

<br /><br /><br />

## ![✔] 8.7. Set memory limits using both Docker and v8

**אמ;לק:** Always configure a memory limit using both Docker and the JavaScript runtime flags. The Docker limit is needed to make thoughtful container placement decision, the --v8's flag max-old-space is needed to kick off the GC on time and prevent under utilization of memory. Practically, set the v8's old space memory to be a just bit less than the container limit

**אחרת:** The docker definition is needed to perform thoughtful scaling decision and prevent starving other citizens. Without also defining the v8's limits, it will under utilize the container resources - Without explicit instructions it crashes when utilizing ~50-60% of its host resources

🔗 [**Read More: Set memory limits using Docker only**](./sections/docker/memory-limit.md)

<br /><br /><br />

## ![✔] 8.8. Plan for efficient caching

**אמ;לק:** Rebuilding a whole docker image from cache can be nearly instantaneous if done correctly. The less updated instructions should be at the top of your Dockerfile and the ones constantly changing (like app code) should be at the bottom.

**אחרת:** Docker build will be very long and consume lot of resources even when making tiny changes

🔗 [**Read More: Leverage caching to reduce build times**](./sections/docker/use-cache-for-shorter-build-time.md)

<br /><br /><br />

## ![✔] 8.9. Use explicit image reference, avoid `latest` tag

**אמ;לק:** Specify an explicit image digest or versioned label, never refer to `latest`. Developers are often led to believe that specifying the `latest` tag will provide them with the most recent image in the repository however this is not the case. Using a digest guarantees that every instance of the service is running exactly the same code.

In addition, referring to an image tag means that the base image is subject to change, as image tags cannot be relied upon for a deterministic install. Instead, if a deterministic install is expected, a SHA256 digest can be used to reference an exact image.

**אחרת:** A new version of a base image could be deployed into production with breaking changes, causing unintended application behaviour.

🔗 [**Read More: Understand image tags and use the "latest" tag with caution**](./sections/docker/image-tags.md)

<br /><br /><br />

## ![✔] 8.10. Prefer smaller Docker base images

**אמ;לק:** Large images lead to higher exposure to vulnerabilities and increased resource consumption. Using leaner Docker images, such as Slim and Alpine Linux variants, mitigates this issue.

**אחרת:** Building, pushing, and pulling images will take longer, unknown attack vectors can be used by malicious actors and more resources are consumed.

🔗 [**Read More: Prefer smaller images**](./sections/docker/smaller_base_images.md)

<br /><br /><br />

## ![✔] 8.11. Clean-out build-time secrets, avoid secrets in args

**אמ;לק:** Avoid secrets leaking from the Docker build environment. A Docker image is typically shared in multiple environment like CI and a registry that are not as sanitized as production. A typical example is an npm token which is usually passed to a dockerfile as argument. This token stays within the image long after it is needed and allows the attacker indefinite access to a private npm registry. This can be avoided by coping a secret file like `.npmrc` and then removing it using multi-stage build (beware, build history should be deleted as well) or by using Docker build-kit secret feature which leaves zero traces

**אחרת:** Everyone with access to the CI and docker registry will also get access to some precious organization secrets as a bonus

🔗 [**Read More: Clean-out build-time secrets**](./sections/docker/avoid-build-time-secrets.md)

<br /><br /><br />

## ![✔] 8.12. Scan images for multi layers of vulnerabilities

**אמ;לק:** Besides checking code dependencies vulnerabilities also scan the final image that is shipped to production. Docker image scanners check the code dependencies but also the OS binaries. This E2E security scan covers more ground and verifies that no bad guy injected bad things during the build. Consequently, it is recommended running this as the last step before deployment. There are a handful of free and commercial scanners that also provide CI/CD plugins

**אחרת:** Your code might be entirely free from vulnerabilities. However it might still get hacked due to vulnerable version of OS-level binaries (e.g. OpenSSL, TarBall) that are commonly being used by applications

🔗 [**Read More: Scan the entire image before production**](./sections/docker/scan-images.md)

<br /><br /><br />

## ![✔] 8.13 Clean NODE_MODULE cache

**אמ;לק:** After installing dependencies in a container remove the local cache. It doesn't make any sense to duplicate the dependencies for faster future installs since there won't be any further installs - A Docker image is immutable. Using a single line of code tens of MB (typically 10-50% of the image size) are shaved off

**אחרת:** The image that will get shipped to production will weigh 30% more due to files that will never get used

🔗 [**Read More: Clean NODE_MODULE cache**](./sections/docker/clean-cache.md)

<br /><br /><br />

## ![✔] 8.14. Generic Docker practices

**אמ;לק:** This is a collection of Docker advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Read More: Generic Docker practices**](./sections/docker/generic-tips.md)

<br/><br /><br />

## ![✔] 8.15. Lint your Dockerfile

**אמ;לק:** Linting your Dockerfile is an important step to identify issues in your Dockerfile which differ from best practices. By checking for potential flaws using a specialised Docker linter, performance and security improvements can be easily identified, saving countless hours of wasted time or security issues in production code.

**אחרת:** Mistakenly the Dockerfile creator left Root as the production user, and also used an image from unknown source repository. This could be avoided with with just a simple linter.

🔗 [**Read More: Lint your Dockerfile**](./sections/docker/lint-dockerfile.md)

<br/><br /><br />

<p align="right"><a href="#table-of-contents">⬆ חזרה למעלה</a></p>

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
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/web.svg" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in the USA, Europe, and Israel on building large-scale Node.js applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at [@goldbergyoni](https://github.com/goldbergyoni) or [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<a id="josh-hemphill" href="https://github.com/josh-hemphill" target="_blank"><img src="assets/images/members/josh-hemphill.png" align="left" width="100" height="100" alt="Josh Hemphill" loading="lazy"/></a>

[Josh Hemphill](https://github.com/josh-hemphill)
<a href="https://twitter.com/spooklogical"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/joshuahemphill/"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>
<a href="https://joshuahemphill.com"><img src="assets/images/web.svg" width="16" height="16"></img></a>

Full Stack Software Engineer / Developer specializing in Security, DevOps/DevSecOps, and ERP Integrations.

<br/>

<a id="raz-luvaton" href="https://github.com/rluvaton" target="_blank"><img src="assets/images/members/raz-luvaton.jpg" align="left" width="100" height="100" alt="Raz Luvaton" loading="lazy"/></a>

[Raz Luvaton](https://github.com/rluvaton)
<a href="https://twitter.com/rluvaton"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/rluvaton/"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>

Full Stack Developer who knows how to exit from Vim and loves Architecture, Virtualization and Security.

<br/>

## Contributing

If you've ever wanted to contribute to open source, now is your chance! See the [contributing docs](.operations/CONTRIBUTING.md) for more information.

## Contributors ✨

Thanks goes to these wonderful people who have contributed to this repository!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kevinrambaud"><img src="https://avatars1.githubusercontent.com/u/7501477?v=4" width="100px;" alt="Kevin Rambaud"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kevin Rambaud</b></sub></a><br /><a href="#content-kevinrambaud" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mfine15"><img src="https://avatars1.githubusercontent.com/u/1286554?v=4" width="100px;" alt="Michael Fine"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michael Fine</b></sub></a><br /><a href="#content-mfine15" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://squgeim.github.io"><img src="https://avatars0.githubusercontent.com/u/4996818?v=4" width="100px;" alt="Shreya Dahal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shreya Dahal</b></sub></a><br /><a href="#content-squgeim" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://matheusrocha89.com"><img src="https://avatars1.githubusercontent.com/u/3718366?v=4" width="100px;" alt="Matheus Cruz Rocha"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Matheus Cruz Rocha</b></sub></a><br /><a href="#content-matheusrocha89" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bityog.github.io/Portfolio/"><img src="https://avatars2.githubusercontent.com/u/28219178?v=4" width="100px;" alt="Yog Mehta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yog Mehta</b></sub></a><br /><a href="#content-BitYog" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kudapara.co.zw"><img src="https://avatars3.githubusercontent.com/u/13519184?v=4" width="100px;" alt="Kudakwashe Paradzayi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kudakwashe Paradzayi</b></sub></a><br /><a href="#content-kudapara" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.t1st3.com/"><img src="https://avatars1.githubusercontent.com/u/1469638?v=4" width="100px;" alt="t1st3"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>t1st3</b></sub></a><br /><a href="#content-t1st3" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mulijordan1976"><img src="https://avatars0.githubusercontent.com/u/33382022?v=4" width="100px;" alt="mulijordan1976"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>mulijordan1976</b></sub></a><br /><a href="#content-mulijordan1976" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/matchai"><img src="https://avatars0.githubusercontent.com/u/4658208?v=4" width="100px;" alt="Matan Kushner"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Matan Kushner</b></sub></a><br /><a href="#content-matchai" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://fabiothiroki.github.io"><img src="https://avatars2.githubusercontent.com/u/670057?v=4" width="100px;" alt="Fabio Hiroki"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fabio Hiroki</b></sub></a><br /><a href="#content-fabiothiroki" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://james.sumners.info/"><img src="https://avatars1.githubusercontent.com/u/321201?v=4" width="100px;" alt="James Sumners"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>James Sumners</b></sub></a><br /><a href="#content-jsumners" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/_DanGamble"><img src="https://avatars2.githubusercontent.com/u/7152041?v=4" width="100px;" alt="Dan Gamble"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dan Gamble</b></sub></a><br /><a href="#content-dan-gamble" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/trainorpj"><img src="https://avatars3.githubusercontent.com/u/13276704?v=4" width="100px;" alt="PJ Trainor"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>PJ Trainor</b></sub></a><br /><a href="#content-trainorpj" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/reod"><img src="https://avatars0.githubusercontent.com/u/3164299?v=4" width="100px;" alt="Remek Ambroziak"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Remek Ambroziak</b></sub></a><br /><a href="#content-reod" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://ca.non.co.il"><img src="https://avatars0.githubusercontent.com/u/1829789?v=4" width="100px;" alt="Yoni Jah"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yoni Jah</b></sub></a><br /><a href="#content-yonjah" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hazolsky"><img src="https://avatars1.githubusercontent.com/u/1270790?v=4" width="100px;" alt="Misha Khokhlov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Misha Khokhlov</b></sub></a><br /><a href="#content-hazolsky" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://plus.google.com/+ЕвгенийОрехов/"><img src="https://avatars3.githubusercontent.com/u/8045060?v=4" width="100px;" alt="Evgeny Orekhov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Evgeny Orekhov</b></sub></a><br /><a href="#content-EvgenyOrekhov" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gediminasml"><img src="https://avatars3.githubusercontent.com/u/19854105?v=4" width="100px;" alt="-"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>-</b></sub></a><br /><a href="#content-gediminasml" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://hisaac.net"><img src="https://avatars3.githubusercontent.com/u/923876?v=4" width="100px;" alt="Isaac Halvorson"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Isaac Halvorson</b></sub></a><br /><a href="#content-hisaac" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.vedrankaracic.com"><img src="https://avatars3.githubusercontent.com/u/2808092?v=4" width="100px;" alt="Vedran Karačić"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vedran Karačić</b></sub></a><br /><a href="#content-vkaracic" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lallenlowe"><img src="https://avatars3.githubusercontent.com/u/10761165?v=4" width="100px;" alt="lallenlowe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>lallenlowe</b></sub></a><br /><a href="#content-lallenlowe" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nwwells"><img src="https://avatars2.githubusercontent.com/u/1039473?v=4" width="100px;" alt="Nathan Wells"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nathan Wells</b></sub></a><br /><a href="#content-nwwells" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/paulovitin"><img src="https://avatars0.githubusercontent.com/u/125503?v=4" width="100px;" alt="Paulo Reis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Paulo Reis</b></sub></a><br /><a href="#content-paulovitin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://snap.simpego.ch"><img src="https://avatars2.githubusercontent.com/u/1989646?v=4" width="100px;" alt="syzer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>syzer</b></sub></a><br /><a href="#content-syzer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://sancho.dev"><img src="https://avatars0.githubusercontent.com/u/3763599?v=4" width="100px;" alt="David Sancho"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>David Sancho</b></sub></a><br /><a href="#content-davesnx" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://apiforge.it"><img src="https://avatars0.githubusercontent.com/u/4929965?v=4" width="100px;" alt="Robert Manolea"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Robert Manolea</b></sub></a><br /><a href="#content-pupix" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jumptoglide.com"><img src="https://avatars2.githubusercontent.com/u/708395?v=4" width="100px;" alt="Xavier Ho"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Xavier Ho</b></sub></a><br /><a href="#content-spaxe" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.ocular-rhythm.io"><img src="https://avatars0.githubusercontent.com/u/2738518?v=4" width="100px;" alt="Aaron"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Aaron</b></sub></a><br /><a href="#content-ocularrhythm" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://septa97.me"><img src="https://avatars2.githubusercontent.com/u/13742634?v=4" width="100px;" alt="Jan Charles Maghirang Adona"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jan Charles Maghirang Adona</b></sub></a><br /><a href="#content-septa97" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.cakeresume.com/allenfang"><img src="https://avatars2.githubusercontent.com/u/5351390?v=4" width="100px;" alt="Allen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Allen</b></sub></a><br /><a href="#content-AllenFang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leonardovillela"><img src="https://avatars3.githubusercontent.com/u/8650543?v=4" width="100px;" alt="Leonardo Villela"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Leonardo Villela</b></sub></a><br /><a href="#content-leonardovillela" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://michalzalecki.com"><img src="https://avatars1.githubusercontent.com/u/3136577?v=4" width="100px;" alt="Michał Załęcki"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michał Załęcki</b></sub></a><br /><a href="#content-MichalZalecki" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.wealthbar.com"><img src="https://avatars1.githubusercontent.com/u/156449?v=4" width="100px;" alt="Chris Nicola"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Chris Nicola</b></sub></a><br /><a href="#content-chrisnicola" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/aecorredor"><img src="https://avatars3.githubusercontent.com/u/9114987?v=4" width="100px;" alt="Alejandro Corredor"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alejandro Corredor</b></sub></a><br /><a href="#content-aecorredor" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cwar"><img src="https://avatars3.githubusercontent.com/u/272843?v=4" width="100px;" alt="cwar"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>cwar</b></sub></a><br /><a href="#content-cwar" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/keyfoxth"><img src="https://avatars3.githubusercontent.com/u/10647132?v=4" width="100px;" alt="Yuwei"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yuwei</b></sub></a><br /><a href="#content-keyfoxth" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bigcodenerd.org"><img src="https://avatars3.githubusercontent.com/u/10895594?v=4" width="100px;" alt="Utkarsh Bhatt"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Utkarsh Bhatt</b></sub></a><br /><a href="#content-utkarshbhatt12" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/duartemendes"><img src="https://avatars2.githubusercontent.com/u/12852058?v=4" width="100px;" alt="Duarte Mendes"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Duarte Mendes</b></sub></a><br /><a href="#content-duartemendes" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jasonkim.ca"><img src="https://avatars2.githubusercontent.com/u/103456?v=4" width="100px;" alt="Jason Kim"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jason Kim</b></sub></a><br /><a href="#content-serv" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Max101"><img src="https://avatars2.githubusercontent.com/u/2124249?v=4" width="100px;" alt="Mitja O."style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mitja O.</b></sub></a><br /><a href="#content-Max101" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://sandromiguel.com"><img src="https://avatars0.githubusercontent.com/u/6423157?v=4" width="100px;" alt="Sandro Miguel Marques"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sandro Miguel Marques</b></sub></a><br /><a href="#content-SandroMiguel" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GabeKuslansky"><img src="https://avatars3.githubusercontent.com/u/9855482?v=4" width="100px;" alt="Gabe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Gabe</b></sub></a><br /><a href="#content-GabeKuslansky" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ripper234.com/"><img src="https://avatars1.githubusercontent.com/u/172282?v=4" width="100px;" alt="Ron Gross"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ron Gross</b></sub></a><br /><a href="#content-ripper234" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.thecodebarbarian.com"><img src="https://avatars2.githubusercontent.com/u/1620265?v=4" width="100px;" alt="Valeri Karpov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Valeri Karpov</b></sub></a><br /><a href="#content-vkarpov15" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sergiobernal.com"><img src="https://avatars3.githubusercontent.com/u/20087388?v=4" width="100px;" alt="Sergio Bernal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sergio Bernal</b></sub></a><br /><a href="#content-imsergiobernal" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ntelkedzhiev"><img src="https://avatars2.githubusercontent.com/u/7332371?v=4" width="100px;" alt="Nikola Telkedzhiev"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nikola Telkedzhiev</b></sub></a><br /><a href="#content-ntelkedzhiev" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vitordagamagodoy"><img src="https://avatars0.githubusercontent.com/u/26370059?v=4" width="100px;" alt="Vitor Godoy"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vitor Godoy</b></sub></a><br /><a href="#content-vitordagamagodoy" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.manishsaraan.com/"><img src="https://avatars2.githubusercontent.com/u/19797340?v=4" width="100px;" alt="Manish Saraan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Manish Saraan</b></sub></a><br /><a href="#content-manishsaraan" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4" width="100px;" alt="Sangbeom Han"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sangbeom Han</b></sub></a><br /><a href="#content-uronly14me" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://blackmatch.github.io"><img src="https://avatars3.githubusercontent.com/u/12443954?v=4" width="100px;" alt="blackmatch"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>blackmatch</b></sub></a><br /><a href="#content-blackmatch" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://simmsreeve.com"><img src="https://avatars3.githubusercontent.com/u/5173131?v=4" width="100px;" alt="Joe Reeve"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Joe Reeve</b></sub></a><br /><a href="#content-ISNIT0" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BusbyActual"><img src="https://avatars2.githubusercontent.com/u/14985016?v=4" width="100px;" alt="Ryan Busby"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ryan Busby</b></sub></a><br /><a href="#content-BusbyActual" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jsdecorator.com"><img src="https://avatars3.githubusercontent.com/u/4482199?v=4" width="100px;" alt="Iman Mohamadi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Iman Mohamadi</b></sub></a><br /><a href="#content-ImanMh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HeeL"><img src="https://avatars1.githubusercontent.com/u/287769?v=4" width="100px;" alt="Sergii Paryzhskyi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sergii Paryzhskyi</b></sub></a><br /><a href="#content-HeeL" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kapilepatel"><img src="https://avatars3.githubusercontent.com/u/25738473?v=4" width="100px;" alt="Kapil Patel"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kapil Patel</b></sub></a><br /><a href="#content-kapilepatel" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/justjavac"><img src="https://avatars1.githubusercontent.com/u/359395?v=4" width="100px;" alt="迷渡"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>迷渡</b></sub></a><br /><a href="#content-justjavac" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hozefaj"><img src="https://avatars1.githubusercontent.com/u/2084833?v=4" width="100px;" alt="Hozefa"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hozefa</b></sub></a><br /><a href="#content-hozefaj" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/el-ethan"><img src="https://avatars3.githubusercontent.com/u/10249884?v=4" width="100px;" alt="Ethan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ethan</b></sub></a><br /><a href="#content-el-ethan" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/milkdeliver"><img src="https://avatars2.githubusercontent.com/u/3108407?v=4" width="100px;" alt="Sam"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sam</b></sub></a><br /><a href="#content-milkdeliver" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ArlindXh"><img src="https://avatars0.githubusercontent.com/u/19508764?v=4" width="100px;" alt="Arlind"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Arlind</b></sub></a><br /><a href="#content-ArlindXh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ttous"><img src="https://avatars0.githubusercontent.com/u/19815440?v=4" width="100px;" alt="Teddy Toussaint"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Teddy Toussaint</b></sub></a><br /><a href="#content-ttous" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ardern.io"><img src="https://avatars2.githubusercontent.com/u/2419690?v=4" width="100px;" alt="Lewis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lewis</b></sub></a><br /><a href="#content-LewisArdern" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://gabriellidenor.com/"><img src="https://avatars2.githubusercontent.com/u/765963?v=4" width="100px;" alt="Gabriel Lidenor "style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Gabriel Lidenor </b></sub></a><br /><a href="#content-GabrielLidenor" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/animir"><img src="https://avatars3.githubusercontent.com/u/4623196?v=4" width="100px;" alt="Roman"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Roman</b></sub></a><br /><a href="#content-animir" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Francozeira"><img src="https://avatars1.githubusercontent.com/u/47419763?v=4" width="100px;" alt="Francozeira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Francozeira</b></sub></a><br /><a href="#content-Francozeira" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/invvard"><img src="https://avatars0.githubusercontent.com/u/7305493?v=4" width="100px;" alt="Invvard"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Invvard</b></sub></a><br /><a href="#content-Invvard" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://romulogarofalo.github.io/"><img src="https://avatars1.githubusercontent.com/u/18492592?v=4" width="100px;" alt="Rômulo Garofalo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rômulo Garofalo</b></sub></a><br /><a href="#content-romulogarofalo" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://thoqbk.github.io/"><img src="https://avatars0.githubusercontent.com/u/1491103?v=4" width="100px;" alt="Tho Q Luong"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tho Q Luong</b></sub></a><br /><a href="#content-thoqbk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Qeneke"><img src="https://avatars2.githubusercontent.com/u/20271568?v=4" width="100px;" alt="Burak Shen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Burak Shen</b></sub></a><br /><a href="#content-Qeneke" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.happy-css.com"><img src="https://avatars0.githubusercontent.com/u/2950505?v=4" width="100px;" alt="Martin Muzatko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Martin Muzatko</b></sub></a><br /><a href="#content-MartinMuzatko" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/autoboxer"><img src="https://avatars3.githubusercontent.com/u/2757601?v=4" width="100px;" alt="Jared Collier"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jared Collier</b></sub></a><br /><a href="#content-autoboxer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://hiltonmeyer.com"><img src="https://avatars3.githubusercontent.com/u/4545860?v=4" width="100px;" alt="Hilton Meyer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hilton Meyer</b></sub></a><br /><a href="#content-bikingbadger" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kr.vuejs.org"><img src="https://avatars0.githubusercontent.com/u/1451365?v=4" width="100px;" alt="ChangJoo Park(박창주)"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ChangJoo Park(박창주)</b></sub></a><br /><a href="#content-ChangJoo-Park" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MasahiroSakaguchi"><img src="https://avatars0.githubusercontent.com/u/16427431?v=4" width="100px;" alt="Masahiro Sakaguchi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Masahiro Sakaguchi</b></sub></a><br /><a href="#content-MasahiroSakaguchi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TheHollidayInn"><img src="https://avatars1.githubusercontent.com/u/1253400?v=4" width="100px;" alt="Keith Holliday"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Keith Holliday</b></sub></a><br /><a href="#content-TheHollidayInn" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.coreycleary.me"><img src="https://avatars3.githubusercontent.com/u/1485356?v=4" width="100px;" alt="coreyc"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>coreyc</b></sub></a><br /><a href="#content-coreyc" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4" width="100px;" alt="Maximilian Berkmann"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Maximilian Berkmann</b></sub></a><br /><a href="#content-Berkmann18" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DouglasMV"><img src="https://avatars3.githubusercontent.com/u/32845487?v=4" width="100px;" alt="Douglas Mariano Valero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Douglas Mariano Valero</b></sub></a><br /><a href="#content-DouglasMV" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marcelosdm"><img src="https://avatars0.githubusercontent.com/u/18266600?v=4" width="100px;" alt="Marcelo Melo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Marcelo Melo</b></sub></a><br /><a href="#content-marcelosdm" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/mperk_"><img src="https://avatars0.githubusercontent.com/u/3465794?v=4" width="100px;" alt="Mehmet Perk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mehmet Perk</b></sub></a><br /><a href="#content-mperk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ryanouyang"><img src="https://avatars2.githubusercontent.com/u/360426?v=4" width="100px;" alt="ryan ouyang"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ryan ouyang</b></sub></a><br /><a href="#content-ryanouyang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shabeer-mdy"><img src="https://avatars0.githubusercontent.com/u/26842535?v=4" width="100px;" alt="Shabeer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shabeer</b></sub></a><br /><a href="#content-shabeer-mdy" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/halfzebra"><img src="https://avatars1.githubusercontent.com/u/3983879?v=4" width="100px;" alt="Eduard Kyvenko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Eduard Kyvenko</b></sub></a><br /><a href="#content-halfzebra" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://deyvisonrocha.com"><img src="https://avatars2.githubusercontent.com/u/686067?v=4" width="100px;" alt="Deyvison Rocha"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Deyvison Rocha</b></sub></a><br /><a href="#content-deyvisonrocha" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://twitter.com/georgemamer"><img src="https://avatars1.githubusercontent.com/u/20108934?v=4" width="100px;" alt="George Mamer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>George Mamer</b></sub></a><br /><a href="#content-georgem3" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leimonio"><img src="https://avatars0.githubusercontent.com/u/1969742?v=4" width="100px;" alt="Konstantinos Leimonis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Konstantinos Leimonis</b></sub></a><br /><a href="#content-leimonio" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zybax"><img src="https://avatars3.githubusercontent.com/u/22094453?v=4" width="100px;" alt="Oliver Lluberes"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Oliver Lluberes</b></sub></a><br /><a href="#translation-Zybax" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stackoverflow.com/story/tiendq"><img src="https://avatars2.githubusercontent.com/u/815910?v=4" width="100px;" alt="Tien Do"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tien Do</b></sub></a><br /><a href="#content-tiendq" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://singh1114.github.io/"><img src="https://avatars0.githubusercontent.com/u/11356398?v=4" width="100px;" alt="Ranvir Singh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ranvir Singh</b></sub></a><br /><a href="#content-singh1114" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/collierrgbsitisfise"><img src="https://avatars3.githubusercontent.com/u/13496126?v=4" width="100px;" alt="Vadim Nicolaev"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vadim Nicolaev</b></sub></a><br /><a href="#content-collierrgbsitisfise" title="Content">🖋</a> <a href="#translation-collierrgbsitisfise" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/germangamboa95"><img src="https://avatars3.githubusercontent.com/u/28633849?v=4" width="100px;" alt="German Gamboa Gonzalez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>German Gamboa Gonzalez</b></sub></a><br /><a href="#content-germangamboa95" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AbdelrahmanHafez"><img src="https://avatars3.githubusercontent.com/u/19984935?v=4" width="100px;" alt="Hafez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hafez</b></sub></a><br /><a href="#content-AbdelrahmanHafez" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://linkedin.com/in/chandiran-dmc"><img src="https://avatars3.githubusercontent.com/u/42678579?v=4" width="100px;" alt="Chandiran"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Chandiran</b></sub></a><br /><a href="#content-chandiran-dmc" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/VinayaSathyanarayana"><img src="https://avatars2.githubusercontent.com/u/16976677?v=4" width="100px;" alt="VinayaSathyanarayana"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>VinayaSathyanarayana</b></sub></a><br /><a href="#content-VinayaSathyanarayana" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.kimkern.de"><img src="https://avatars1.githubusercontent.com/u/2671139?v=4" width="100px;" alt="Kim Kern"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kim Kern</b></sub></a><br /><a href="#content-kiwikern" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kennethfreitas.github.io/"><img src="https://avatars2.githubusercontent.com/u/55669043?v=4" width="100px;" alt="Kenneth Freitas"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kenneth Freitas</b></sub></a><br /><a href="#content-kennethfreitas" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/songe"><img src="https://avatars2.githubusercontent.com/u/1531561?v=4" width="100px;" alt="songe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>songe</b></sub></a><br /><a href="#content-songe" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ksed.dev"><img src="https://avatars1.githubusercontent.com/u/30693707?v=4" width="100px;" alt="Kirill Shekhovtsov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kirill Shekhovtsov</b></sub></a><br /><a href="#content-Ksedline" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SerzN1"><img src="https://avatars0.githubusercontent.com/u/2534649?v=4" width="100px;" alt="Serge"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Serge</b></sub></a><br /><a href="#content-SerzN1" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/keyrwinz"><img src="https://avatars3.githubusercontent.com/u/21241761?v=4" width="100px;" alt="keyrwinz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>keyrwinz</b></sub></a><br /><a href="#content-keyrwinz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nDmitry"><img src="https://avatars0.githubusercontent.com/u/2134568?v=4" width="100px;" alt="Dmitry Nikitenko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dmitry Nikitenko</b></sub></a><br /><a href="#content-nDmitry" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bushuai.cc"><img src="https://avatars0.githubusercontent.com/u/1875256?v=4" width="100px;" alt="bushuai"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>bushuai</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Abushuai" title="Reviewed Pull Requests">👀</a> <a href="#content-bushuai" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stackoverflow.com/users/1348195/benjamin-gruenbaum"><img src="https://avatars2.githubusercontent.com/u/1315533?v=4" width="100px;" alt="Benjamin Gruenbaum"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin Gruenbaum</b></sub></a><br /><a href="#content-benjamingr" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/byeze"><img src="https://avatars1.githubusercontent.com/u/7424138?v=4" width="100px;" alt="Ezequiel"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ezequiel</b></sub></a><br /><a href="#translation-byeze" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/juaoose"><img src="https://avatars3.githubusercontent.com/u/994594?v=4" width="100px;" alt="Juan José Rodríguez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Juan José Rodríguez</b></sub></a><br /><a href="#translation-juaoose" title="Translation">🌍</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/OrBin"><img src="https://avatars1.githubusercontent.com/u/6897234?v=4" width="100px;" alt="Or Bin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Or Bin</b></sub></a><br /><a href="#content-OrBin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/andreoav07"><img src="https://avatars2.githubusercontent.com/u/508827?v=4" width="100px;" alt="Andreo Vieira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Andreo Vieira</b></sub></a><br /><a href="#content-andreoav" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mikicho"><img src="https://avatars1.githubusercontent.com/u/11459632?v=4" width="100px;" alt="Michael Solomon"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michael Solomon</b></sub></a><br /><a href="#content-mikicho" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jimmycallin"><img src="https://avatars0.githubusercontent.com/u/2225828?v=4" width="100px;" alt="Jimmy Callin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jimmy Callin</b></sub></a><br /><a href="#content-jimmycallin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/siddharthofficial/"><img src="https://avatars2.githubusercontent.com/u/26025955?v=4" width="100px;" alt="Siddharth"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Siddharth</b></sub></a><br /><a href="#content-w01fS" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ryansmith.tech/"><img src="https://avatars0.githubusercontent.com/u/1578766?v=4" width="100px;" alt="Ryan Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ryan Smith</b></sub></a><br /><a href="#content-ryan3E0" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://de.linkedin.com/in/tom-boettger"><img src="https://avatars2.githubusercontent.com/u/49961674?v=4" width="100px;" alt="Tom Boettger"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tom Boettger</b></sub></a><br /><a href="#content-bttger" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jormaechea"><img src="https://avatars3.githubusercontent.com/u/5612500?v=4" width="100px;" alt="Joaquín Ormaechea"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Joaquín Ormaechea</b></sub></a><br /><a href="#translation-jormaechea" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dfrzuz"><img src="https://avatars3.githubusercontent.com/u/71859096?v=4" width="100px;" alt="dfrzuz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>dfrzuz</b></sub></a><br /><a href="#translation-dfrzuz" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/victor-homyakov"><img src="https://avatars1.githubusercontent.com/u/121449?v=4" width="100px;" alt="Victor Homyakov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Victor Homyakov</b></sub></a><br /><a href="#content-victor-homyakov" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://joshuahemphill.com"><img src="https://avatars3.githubusercontent.com/u/46608115?v=4" width="100px;" alt="Josh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Josh</b></sub></a><br /><a href="#content-josh-hemphill" title="Content">🖋</a> <a href="#security-josh-hemphill" title="Security">🛡️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alec-francis"><img src="https://avatars2.githubusercontent.com/u/32949882?v=4" width="100px;" alt="Alec Francis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alec Francis</b></sub></a><br /><a href="#content-alec-francis" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/arjun6610"><img src="https://avatars1.githubusercontent.com/u/61268891?v=4" width="100px;" alt="arjun6610"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>arjun6610</b></sub></a><br /><a href="#content-arjun6610" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jan-osch"><img src="https://avatars2.githubusercontent.com/u/11651780?v=4" width="100px;" alt="Jan Osch"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jan Osch</b></sub></a><br /><a href="#content-jan-osch" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/thiagotrs"><img src="https://avatars2.githubusercontent.com/u/32005779?v=4" width="100px;" alt="Thiago Rotondo Sampaio"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Thiago Rotondo Sampaio</b></sub></a><br /><a href="#translation-thiagotrs" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alexsey"><img src="https://avatars0.githubusercontent.com/u/6392013?v=4" width="100px;" alt="Alexsey"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alexsey</b></sub></a><br /><a href="#content-Alexsey" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/13luismb"><img src="https://avatars1.githubusercontent.com/u/32210483?v=4" width="100px;" alt="Luis A. Acurero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Luis A. Acurero</b></sub></a><br /><a href="#translation-13luismb" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lromano97.github.io/"><img src="https://avatars1.githubusercontent.com/u/22394847?v=4" width="100px;" alt="Lucas Romano"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lucas Romano</b></sub></a><br /><a href="#translation-lromano97" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/denisecase"><img src="https://avatars0.githubusercontent.com/u/13016516?v=4" width="100px;" alt="Denise Case"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Denise Case</b></sub></a><br /><a href="#content-denisecase" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stackoverflow.com/story/elektronik"><img src="https://avatars3.githubusercontent.com/u/1078554?v=4" width="100px;" alt="Nick Ribal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nick Ribal</b></sub></a><br /><a href="#content-elektronik2k5" title="Content">🖋</a> <a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Aelektronik2k5" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0xflotus"><img src="https://avatars3.githubusercontent.com/u/26602940?v=4" width="100px;" alt="0xflotus"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>0xflotus</b></sub></a><br /><a href="#content-0xflotus" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.dijonkitchen.org/"><img src="https://avatars3.githubusercontent.com/u/11434205?v=4" width="100px;" alt="Jonathan Chen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jonathan Chen</b></sub></a><br /><a href="#content-dijonkitchen" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dilansri"><img src="https://avatars2.githubusercontent.com/u/5089728?v=4" width="100px;" alt="Dilan Srilal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dilan Srilal</b></sub></a><br /><a href="#content-dilansri" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://vectree.ru"><img src="https://avatars3.githubusercontent.com/u/4215285?v=4" width="100px;" alt="vladthelittleone"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>vladthelittleone</b></sub></a><br /><a href="#translation-vladthelittleone" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.nikolaso.com"><img src="https://avatars0.githubusercontent.com/u/60047271?v=4" width="100px;" alt="Nik Osvalds"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nik Osvalds</b></sub></a><br /><a href="#content-nosvalds" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kdaniel21"><img src="https://avatars0.githubusercontent.com/u/39854385?v=4" width="100px;" alt="Daniel Kiss"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Daniel Kiss</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=kdaniel21" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/forresst17"><img src="https://avatars2.githubusercontent.com/u/163352?v=4" width="100px;" alt="Forresst"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Forresst</b></sub></a><br /><a href="#content-forresst" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/svenheden"><img src="https://avatars1.githubusercontent.com/u/76098?v=4" width="100px;" alt="Jonathan Svenheden"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jonathan Svenheden</b></sub></a><br /><a href="#content-svenheden" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AustrisC"><img src="https://avatars2.githubusercontent.com/u/12381652?v=4" width="100px;" alt="AustrisC"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>AustrisC</b></sub></a><br /><a href="#content-AustrisC" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cisco0808"><img src="https://avatars0.githubusercontent.com/u/60251188?v=4" width="100px;" alt="kyeongtae kim"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>kyeongtae kim</b></sub></a><br /><a href="#translation-cisco0808" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://keybase.io/651z9pz968v2accj"><img src="https://avatars.githubusercontent.com/u/65741741?v=4" width="100px;" alt="007"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>007</b></sub></a><br /><a href="#content-6gx7iycn53ioq2e8apk1j1ypwov4giui" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.anediaz.com"><img src="https://avatars.githubusercontent.com/u/17216937?v=4" width="100px;" alt="Ane Diaz de Tuesta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ane Diaz de Tuesta</b></sub></a><br /><a href="#translation-anediaz" title="Translation">🌍</a> <a href="#content-anediaz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://yukioh.net"><img src="https://avatars.githubusercontent.com/u/23182489?v=4" width="100px;" alt="YukiOta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>YukiOta</b></sub></a><br /><a href="#translation-YukiOta" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.yeovilhospital.co.uk/"><img src="https://avatars.githubusercontent.com/u/43814140?v=4" width="100px;" alt="Frazer Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Frazer Smith</b></sub></a><br /><a href="#content-Fdawgs" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rluvaton"><img src="https://avatars.githubusercontent.com/u/16746759?v=4" width="100px;" alt="Raz Luvaton"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Raz Luvaton</b></sub></a><br /><a href="#content-rluvaton" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/YA21"><img src="https://avatars.githubusercontent.com/u/37298463?v=4" width="100px;" alt="Yuta Azumi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yuta Azumi</b></sub></a><br /><a href="#content-YA21" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andrewjbarbour"><img src="https://avatars.githubusercontent.com/u/77080074?v=4" width="100px;" alt="andrewjbarbour"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>andrewjbarbour</b></sub></a><br /><a href="#content-andrewjbarbour" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://MasujimaRyohei.jp"><img src="https://avatars.githubusercontent.com/u/17163541?v=4" width="100px;" alt="mr"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>mr</b></sub></a><br /><a href="#content-MasujimaRyohei" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kubanac95"><img src="https://avatars.githubusercontent.com/u/16191931?v=4" width="100px;" alt="Aleksandar"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Aleksandar</b></sub></a><br /><a href="#content-kubanac95" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://vincentjonathan.com"><img src="https://avatars.githubusercontent.com/u/32597776?v=4" width="100px;" alt="Owl"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Owl</b></sub></a><br /><a href="#content-SuspiciousLookingOwl" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yedidyas"><img src="https://avatars.githubusercontent.com/u/36074789?v=4" width="100px;" alt="Yedidya Schwartz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yedidya Schwartz</b></sub></a><br /><a href="#content-yedidyas" title="Content">🖋</a> <a href="#example-yedidyas" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ariel-diaz"><img src="https://avatars.githubusercontent.com/u/20423540?v=4" width="100px;" alt="ari"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ari</b></sub></a><br /><a href="#content-ariel-diaz" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.koenigthomas.de/"><img src="https://avatars.githubusercontent.com/u/7080389?v=4" width="100px;" alt="Thomas König"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Thomas König</b></sub></a><br /><a href="#content-Vispercept" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/coocos"><img src="https://avatars.githubusercontent.com/u/1397804?v=4" width="100px;" alt="Kalle Lämsä"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kalle Lämsä</b></sub></a><br /><a href="#content-coocos" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://math.cat"><img src="https://avatars.githubusercontent.com/u/10328430?v=4" width="100px;" alt="Wyatt"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Wyatt</b></sub></a><br /><a href="#content-ZhyMC" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://libkhadir.fr"><img src="https://avatars.githubusercontent.com/u/45130488?v=4" width="100px;" alt="KHADIR Tayeb"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>KHADIR Tayeb</b></sub></a><br /><a href="#content-tkhadir" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shankarregmi"><img src="https://avatars.githubusercontent.com/u/7703345?v=4" width="100px;" alt="Shankar Regmi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shankar Regmi</b></sub></a><br /><a href="#content-shankarregmi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/codebyshubham"><img src="https://avatars.githubusercontent.com/u/10389723?v=4" width="100px;" alt="Shubham"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shubham</b></sub></a><br /><a href="#content-codebyshubham" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://lucalves.me/"><img src="https://avatars.githubusercontent.com/u/17712401?v=4" width="100px;" alt="Lucas Alves"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lucas Alves</b></sub></a><br /><a href="#content-lucalves" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/benjaminudoh10"><img src="https://avatars.githubusercontent.com/u/9018331?v=4" width="100px;" alt="Benjamin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin</b></sub></a><br /><a href="#content-benjaminudoh10" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.yjoer.com"><img src="https://avatars.githubusercontent.com/u/47742486?v=4" width="100px;" alt="Yeoh Joer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yeoh Joer</b></sub></a><br /><a href="#content-yjoer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.miigon.net"><img src="https://avatars.githubusercontent.com/u/16161991?v=4" width="100px;" alt="Miigon"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Miigon</b></sub></a><br /><a href="#content-Miigon" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://brainstorage.me/Egregor2011"><img src="https://avatars.githubusercontent.com/u/3630318?v=4" width="100px;" alt="Rostislav Bogorad"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rostislav Bogorad</b></sub></a><br /><a href="#content-Egregor2011" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Flouse"><img src="https://avatars.githubusercontent.com/u/1297478?v=4" width="100px;" alt="Flouse"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Flouse</b></sub></a><br /><a href="#content-Flouse" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://taranttini.com"><img src="https://avatars.githubusercontent.com/u/6922125?v=4" width="100px;" alt="Tarantini Pereira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tarantini Pereira</b></sub></a><br /><a href="#content-taranttini" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kzmat"><img src="https://avatars.githubusercontent.com/u/34614358?v=4" width="100px;" alt="Kazuki Matsuo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kazuki Matsuo</b></sub></a><br /><a href="#content-kzmat" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/burkybang"><img src="https://avatars.githubusercontent.com/u/927886?v=4" width="100px;" alt="Adam Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Adam Smith</b></sub></a><br /><a href="#content-burkybang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://codekodo.tistory.com"><img src="https://avatars.githubusercontent.com/u/33795856?v=4" width="100px;" alt="Dohyeon Ko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dohyeon Ko</b></sub></a><br /><a href="#content-k906506" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vlad99902"><img src="https://avatars.githubusercontent.com/u/67615003?v=4" width="100px;" alt="Vladislav Legkov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vladislav Legkov</b></sub></a><br /><a href="#content-vlad99902" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kerolloz.github.io"><img src="https://avatars.githubusercontent.com/u/36763164?v=4" width="100px;" alt="Kerollos Magdy"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kerollos Magdy</b></sub></a><br /><a href="#content-kerolloz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/erez-lieberman-b90b7219/"><img src="https://avatars.githubusercontent.com/u/3277260?v=4" width="100px;" alt="Erez Lieberman"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Erez Lieberman</b></sub></a><br /><a href="#content-erezLieberman" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/breno-macedo-ernani-de-s%C3%A1-110223158/"><img src="https://avatars.githubusercontent.com/u/48841329?v=4" width="100px;" alt="Breno Macedo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Breno Macedo</b></sub></a><br /><a href="#content-breno404" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JFernando122"><img src="https://avatars.githubusercontent.com/u/40414805?v=4" width="100px;" alt="Fernando Flores"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fernando Flores</b></sub></a><br /><a href="#translation-JFernando122" title="Translation">🌍</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/rafaelconcept/"><img src="https://avatars.githubusercontent.com/u/43880669?v=4" width="100px;" alt="Rafael Brito"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rafael Brito</b></sub></a><br /><a href="#translation-rafaelconcept" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://emiliano-peralta-portfolio.vercel.app/"><img src="https://avatars.githubusercontent.com/u/63617637?v=4" width="100px;" alt="Emiliano Peralta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Emiliano Peralta</b></sub></a><br /><a href="#translation-emiperalta" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lannex.github.io"><img src="https://avatars.githubusercontent.com/u/7369541?v=4" width="100px;" alt="Shin, SJ"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shin, SJ</b></sub></a><br /><a href="#content-lannex" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.benjaminforster.com"><img src="https://avatars.githubusercontent.com/u/12589522?v=4" width="100px;" alt="Benjamin Forster"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin Forster</b></sub></a><br /><a href="#content-e-e-e" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DanieleFedeli"><img src="https://avatars.githubusercontent.com/u/37077048?v=4" width="100px;" alt="Daniele Fedeli"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Daniele Fedeli</b></sub></a><br /><a href="#content-DanieleFedeli" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/djob195"><img src="https://avatars.githubusercontent.com/u/17146669?v=4" width="100px;" alt="djob195"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>djob195</b></sub></a><br /><a href="#content-djob195" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/antspk"><img src="https://avatars.githubusercontent.com/u/78955792?v=4" width="100px;" alt="antspk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>antspk</b></sub></a><br /><a href="#content-antspk" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://jjy0821.tistory.com/"><img src="https://avatars.githubusercontent.com/u/88075341?v=4" width="100px;" alt="정진영"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>정진영</b></sub></a><br /><a href="#content-jjy821" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kkk-cashwalk"><img src="https://avatars.githubusercontent.com/u/91455122?v=4" width="100px;" alt="kkk-cashwalk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>kkk-cashwalk</b></sub></a><br /><a href="#content-kkk-cashwalk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/apainintheneck"><img src="https://avatars.githubusercontent.com/u/42982186?v=4" width="100px;" alt="apainintheneck"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>apainintheneck</b></sub></a><br /><a href="#content-apainintheneck" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/koyanyaroo"><img src="https://avatars.githubusercontent.com/u/9715368?v=4" width="100px;" alt="Fajar Budhi Iswanda"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fajar Budhi Iswanda</b></sub></a><br /><a href="#content-koyanyaroo" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jutiger"><img src="https://avatars.githubusercontent.com/u/97490806?v=4" width="100px;" alt="이주호"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>이주호</b></sub></a><br /><a href="#content-jutiger" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MisterSingh"><img src="https://avatars.githubusercontent.com/u/44462019?v=4" width="100px;" alt="Singh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Singh</b></sub></a><br /><a href="#content-MisterSingh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alex-Dumitru"><img src="https://avatars.githubusercontent.com/u/43738450?v=4" width="100px;" alt="Alex Dumitru"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alex Dumitru</b></sub></a><br /><a href="#content-Alex-Dumitru" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lykhatskyi"><img src="https://avatars.githubusercontent.com/u/18104686?v=4" width="100px;" alt="Anton Lykhatskyi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Anton Lykhatskyi</b></sub></a><br /><a href="#content-lykhatskyi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/EverythingAvailable"><img src="https://avatars.githubusercontent.com/u/81002379?v=4" width="100px;" alt="sangwonlee"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>sangwonlee</b></sub></a><br /><a href="#content-EverythingAvailable" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/euberdeveloper"><img src="https://avatars.githubusercontent.com/u/33126163?v=4" width="100px;" alt="Eugenio Berretta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Eugenio Berretta</b></sub></a><br /><a href="#content-euberdeveloper" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/soranakk"><img src="https://avatars.githubusercontent.com/u/3930307?v=4" width="100px;" alt="soranakk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>soranakk</b></sub></a><br /><a href="#content-soranakk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/backend-joonyoung"><img src="https://avatars.githubusercontent.com/u/94430145?v=4" width="100px;" alt="고준영"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>고준영</b></sub></a><br /><a href="#content-backend-joonyoung" title="Content">🖋</a> <a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=backend-joonyoung" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GuilhermePortella"><img src="https://avatars.githubusercontent.com/u/59876059?v=4" width="100px;" alt="Guilherme Portella "style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Guilherme Portella </b></sub></a><br /><a href="#content-GuilhermePortella" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.youtube.com/channel/UCBxzOQd2v9wWfiMDrf_RQ7A"><img src="https://avatars.githubusercontent.com/u/18497570?v=4" width="100px;" alt="André Esser"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>André Esser</b></sub></a><br /><a href="#content-Esser50K" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ShiChenCong"><img src="https://avatars.githubusercontent.com/u/22486446?v=4" width="100px;" alt="Scc"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Scc</b></sub></a><br /><a href="#translation-ShiChenCong" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.mauroaccornero.it"><img src="https://avatars.githubusercontent.com/u/1875822?v=4" width="100px;" alt="Mauro Accornero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mauro Accornero</b></sub></a><br /><a href="#content-mauroaccornero" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/no-yan"><img src="https://avatars.githubusercontent.com/u/63000297?v=4" width="100px;" alt="no-yan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>no-yan</b></sub></a><br /><a href="#content-no-yan" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### Steering Committee Emeriti

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/web.svg" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png"/>

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kevyn.png"/>

[Kevyn Bruyere](https://github.com/kevynb)
<a href="https://www.linkedin.com/in/kevynbruyere/"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>

Independent full-stack developer with a taste for Ops and automation.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png"/>

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/web.svg" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, TypeScript, GraphQL, MongoDB, pretty much anything that involves JS/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation.
