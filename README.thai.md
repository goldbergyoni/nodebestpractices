[✔]: assets/images/checkbox-small-blue.png

# Node.js Best Practices

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices"/>
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 items"/> <img id="last-update-badge" src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20January%2024%2C%202022-green.svg" alt="Last update: January 24, 2022" /> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2014.0.0-brightgreen.svg" alt="Updated for Node 14.0.0"/>
</div>

<br/>

[![nodepractices](./assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **ติดตามพวกเราบน Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>


อ่านในภาษาอื่น: [![CN](./assets/flags/CN.png)**CN**](./README.chinese.md), [![FR](./assets/flags/FR.png)**FR**](./README.french.md), [![BR](./assets/flags/BR.png)**BR**](./README.brazilian-portuguese.md), [![RU](./assets/flags/RU.png)**RU**](./README.russian.md), [![PL](./assets/flags/PL.png)**PL**](./README.polish.md), [![JA](./assets/flags/JA.png)**JA**](./README.japanese.md), [![EU](./assets/flags/EU.png)**EU**](./README.basque.md) [(![ES](./assets/flags/ES.png)**ES**, ![HE](./assets/flags/HE.png)**HE**, ![KR](./assets/flags/KR.png)**KR** and ![TR](./assets/flags/TR.png)**TR** กำลังเขียนจ้า! )](#translations)

<br/>

###### จัดทำและดูแลโดย [คณะกรรมการอำนวยการ](#steering-committee) และ [ผู้ร่วมงาน](#collaborators)

# Best Practices และ ข่าวล่าสุด

- **🔖 เมนูและแท็กใหม่**: เมนูของพวกเรากดปุ่มเปิดปิดได้แล้วรวมถึง `#tags`. ผู้ชมที่เข้ามาใหม่สามารถอ่านเรื่อง `#strategic` ก่อนได้. ผู้ชมที่แวะกลับมาดูสามารถโฟกัสหัวข้อใหม่ได้ที่ `#new`. สำหรับผู้ที่เชี่ยวชาญแล้วสามารถกรองหัวข้อที่ `#advanced` ได้. เป็นความอนุเคราะห์จากคุณ [Rubek Joshi](https://github.com/rubek-joshi@rubek-joshi)


- **👨‍👩‍👧‍👦 สมาชิกใหม่ในครอบครัว!**: มี repository ใหม่เพิ่มเข้ามาในครอบครัวของเรา - [การทำ Best Practices สำหรับการ Integration Tests บน Node.js ✨](https://github.com/testjavascript/nodejs-integration-tests-best-practices). ซึ่งมี best practices กว่า 40 หัวข้อสำหรับใช้ในการเขียน component tests ได้อย่างเทพซ่าและมีประสิทธิภาพบน Node.js

- **![FR](./assets/flags/FR.png) แปลภาษาฝรั่งเศส!1! :** ล่าสุดได้มีการแปลภาษาฝรั่งเศสเพิ่มเข้ามาในไกด์ของเรา. Bienvenue (ยินดีต้อนรับ) 

<br/><br/>

# ยินดีต้อนรับ! มี 3 สิ่งที่คุณควรจะรู้ก่อนน

**1. คุณกำลังอ่านบทความที่ดีที่สุด จำนวนมากเกี่ยวกับ Node.js -** repository นี้เป็นการสรุปและการดูแลเนื้อหาตัวท็อปของ Node.js best practices, เช่นเดียวกับเนื้อหาที่ถูกเขียนโดยทีมงาน

**2. เป็นการรวบรวมที่เยอะที่สุด, และมีการอัพเดททุกอาทิตย์ -** ขณะนี้มีเนื้อหาที่นำเสนอที่เกี่ยวกับ best practices, style guides, และเคล็ดลับในการออกแบบสถาปัตยกรรม มากกว่า 80 บทความ. Issues and pull requests ใหม่ถูกสร้างขึ้นทุกวันเพื่อทำให้หนังสือเล่มนี้ใหม่อยู่เสมอ.ิและเราอยากให้คุณได้เข้ามามีส่วนร่วมอีกด้วย ไม่ว่าจะเป็นการแก้ code ที่ผิดพลาด, ช่วยในการแปลภาษา หรือ เสนอไอเดียเจ๋งๆใหม่ๆ, สามารถอ่าน [Guideline ในการเขียนได้ที่นี่](./.operations/writing-guidelines.md)

**3. Best practices นั้นมีข้อมูลเสริม -** หัวข้อส่วนมากจะมีลิ้งค์ **🔗อ่านเพิ่มเติม** ที่ช่วยขยายความเกี่ยวกับ practice นั้นๆ และ code ตัวอย่าง, คำอ้างอิงจาก Blog ที่ถูกเลือก, และข้อมูลเพิ่มเติมต่างๆ

<br/><br/>

## สารบัญ

<details>
  <summary>
    <a href="#1-project-structure-practices">1. วิธีการวาง Project Structure (5)</a>
  </summary>

&emsp;&emsp;[1.1 วิธีการวาง Structure โดยใช้วิธีอิง components เป็นหลัก `#strategic`](#-11-structure-your-solution-by-components)</br>
&emsp;&emsp;[1.2 วาง Layer ของ component ต่างๆ, สร้างขอบเขตให้กับ web layer `#strategic`](#-12-layer-your-components-keep-the-web-layer-within-its-boundaries)</br>
&emsp;&emsp;[1.3 รวบ utilities ที่ใช้บ่อยให้เป็น npm packages](#-13-wrap-common-utilities-as-npm-packages)</br>
&emsp;&emsp;[1.4 แบ่งแยก Express 'app' กับ 'server' ออกจากกัน](#-14-separate-express-app-and-server)</br>
&emsp;&emsp;[1.5 คำนึงถึงการตั้งค่า environment, ความปลอดภัย และ hierarchy `#modified-recently`](#-15-use-environment-aware-secure-and-hierarchical-config)</br>

</details>

<details>
  <summary>
    <a href="#2-error-handling-practices">2. การรับมือกับ Error (12)</a>
  </summary>

&emsp;&emsp;[2.1 ใช้ Async-Await หรือ promise ในการแก้ async error](#-21-use-async-await-or-promises-for-async-error-handling)</br>
&emsp;&emsp;[2.2 ให้ใช้แต่ built-in Error object `#strategic`](#-22-use-only-the-built-in-error-object)</br>
&emsp;&emsp;[2.3 จำแนกระหว่าง operational กับ programmer errors `#strategic`](#-23-distinguish-operational-vs-programmer-errors)</br>
&emsp;&emsp;[2.4 รับมือกับ errors จากส่วนกลาง, ไม่ใช่ข้างใน middleware `#strategic`](#-24-handle-errors-centrally-not-within-a-middleware)</br>
&emsp;&emsp;[2.5 ทำเอกสาร API errors โดยใช้ Swagger หรือ GraphQL `#modified-recently`](#-25-document-api-errors-using-swagger-or-graphql)</br>
&emsp;&emsp;[2.6 ออกจาก process แบบ graceful เมื่อมีสิ่งแปลกปลอมเข้ามาเยือน `#strategic`](#-26-exit-the-process-gracefully-when-a-stranger-comes-to-town)</br>
&emsp;&emsp;[2.7 ใช้เครื่องมือ Log ที่ mature แล้วเพื่อเพิ่มความชัดเจนของ error](#-27-use-a-mature-logger-to-increase-error-visibility)</br>
&emsp;&emsp;[2.8 ทดสอบ flow ของ error โดยใช้ test framework ที่คุณชอบ](#-28-test-error-flows-using-your-favorite-test-framework)</br>
&emsp;&emsp;[2.9 หา errors และ downtime โดยใช้ APM](#-29-discover-errors-and-downtime-using-apm-products)</br>
&emsp;&emsp;[2.10 Catch สิ่งที่ไม่ได้ handle ของ promise rejections `#modified-recently`](#-210-catch-unhandled-promise-rejections)</br>
&emsp;&emsp;[2.11 Fail fast, ตรวจสอบ arguments โดยใช้ library เฉพาะทาง](#-211-fail-fast-validate-arguments-using-a-dedicated-library)</br>
&emsp;&emsp;[2.12 ใช้ await promises ก่อน return เสมอเพื่อหลีกเลี่ยง partial stacktrace `#new`](#-212-always-await-promises-before-returning-to-avoid-a-partial-stacktrace)</br>

</details>

<details>
  <summary>
    <a href="#3-code-style-practices">3. การทำ Code Style (12)</a>
  </summary>

&emsp;&emsp;[3.1 ใช้ ESLint `#strategic`](#-31-use-eslint)</br>
&emsp;&emsp;[3.2 ใช้ Plugin เฉพาะทางของ Node.js](#-32-nodejs-specific-plugins)</br>
&emsp;&emsp;[3.3 ใช้ปีกกาของ Codeblock ในบรรทัดเดียวกัน](#-33-start-a-codeblocks-curly-braces-on-the-same-line)</br>
&emsp;&emsp;[3.4 แยก statements ให้ดี](#-34-separate-your-statements-properly)</br>
&emsp;&emsp;[3.5 ตั้งชื่อให้ ฟังค์ชั่น](#-35-name-your-ฟังค์ชั่น)</br>
&emsp;&emsp;[3.6 ใช้ naming conventions สำหรับ ตัวแปร, constants, ฟังค์ชั่น และ classes](#-36-use-naming-conventions-for-variables-constants-ฟังค์ชั่น-and-classes)</br>
&emsp;&emsp;[3.7 ใช้ const มากกว่า let. อย่าไปใช้ var](#-37-prefer-const-over-let-ditch-the-var)</br>
&emsp;&emsp;[3.8 Require modules ก่อนตลอด, ไม่ใช่เรียกใช้ใน ฟังค์ชั่น](#-38-require-modules-first-not-inside-ฟังค์ชั่น)</br>
&emsp;&emsp;[3.9 Require modules โดยใช้ folder ไม่ใช่เรียกจาก file ตรงๆ](#-39-require-modules-by-folders-as-opposed-to-the-files-directly)</br>
&emsp;&emsp;[3.10 ใช้ === ](#-310-use-the--operator)</br>
&emsp;&emsp;[3.11 ใช้ Async Await, อย่าใช้ callbacks `#strategic`](#-311-use-async-await-avoid-callbacks)</br>
&emsp;&emsp;[3.12 ใช้ arrow ฟังค์ชั่น (=>)](#-312-use-arrow-ฟังค์ชั่น-expressions-)</br>

</details>

<details>
  <summary>
    <a href="#4-testing-and-overall-quality-practices">4. การทำ Testing และควบคุม Quality (13)</a>
  </summary>

&emsp;&emsp;[4.1 อย่างน้อยก็เขียน test ให้ API (component) `#strategic`](#-41-at-the-very-least-write-api-component-testing)</br>
&emsp;&emsp;[4.2 ใส่ 3 ลักษณะในชื่อของ test `#new`](#-42-include-3-parts-in-each-test-name)</br>
&emsp;&emsp;[4.3 วางโครงสร้างการ tests โดยใช้ AAA pattern `#strategic`](#-43-structure-tests-by-the-aaa-pattern)</br>
&emsp;&emsp;[4.4 หา code เจ้าปัญหาโดยใช้ linter](#-44-detect-code-issues-with-a-linter)</br>
&emsp;&emsp;[4.5 อย่าทำ global test fixtures และ seeds, ให้เพิ่มข้อมูลต่อการ test `#strategic`](#-45-avoid-global-test-fixtures-and-seeds-add-data-per-test)</br>
&emsp;&emsp;[4.6 ตรวจสอบ vulnerable(รั่ว) dependencies อยู่เสมอ](#-46-constantly-inspect-for-vulnerable-dependencies)</br>
&emsp;&emsp;[4.7 ใส่ tag ให้ tests  `#advanced`](#-47-tag-your-tests)</br>
&emsp;&emsp;[4.8 ตรวจสอบความครอบคลุมของ test , มันจะช่วยบอกว่า test pattern ผิดตรงไหน](#-48-check-your-test-coverage-it-helps-to-identify-wrong-test-patterns)</br>
&emsp;&emsp;[4.9 ตรวจ packages เก่า/ไม่ได้ update มานาน](#-49-inspect-for-outdated-packages)</br>
&emsp;&emsp;[4.10 ใช้ environment ที่เหมือนอยู่บน production ในการทำ e2e testing](#-410-use-production-like-environment-for-e2e-testing)</br>
&emsp;&emsp;[4.11 Refactor บ่อยๆโดยใช้เครื่องมือทำ static analysis](#-411-refactor-regularly-using-static-analysis-tools)</br>
&emsp;&emsp;[4.12 เลือกใช้ CI platform ดีๆ(Jenkins กับ CircleCI กับ Travis กับ Rest of the world)](#-412-carefully-choose-your-ci-platform-jenkins-vs-circleci-vs-travis-vs-rest-of-the-world)</br>
&emsp;&emsp;[4.13 Test middleware แบบเดี่ยวๆ](#-413-test-your-middlewares-in-isolation)</br>

</details>

<details>
  <summary>
    <a href="#5-going-to-production-practices">5. การเข้าสู่โลก Production (19)</a>
  </summary>

&emsp;&emsp;[5.1. การ Monitoring `#strategic`](#-51-monitoring)</br>
&emsp;&emsp;[5.2. เพิ่มความชัดเจนโดยใช้ logging `#strategic`](#-52-increase-transparency-using-smart-logging)</br>
&emsp;&emsp;[5.3. Delegate ทุกอย่างเท่าที่จะทำได้ (e.g. gzip, SSL) ให้ reverse proxy `#strategic`](#-53-delegate-anything-possible-eg-gzip-ssl-to-a-reverse-proxy)</br>
&emsp;&emsp;[5.4. ล็อค dependencies](#-54-lock-dependencies)</br>
&emsp;&emsp;[5.5. ปกป้อง uptime ของ process โดยใช้เครื่องมือที่ถูกต้อง](#-55-guard-process-uptime-using-the-right-tool)</br>
&emsp;&emsp;[5.6. ใช้งาน CPU ทุก core](#-56-utilize-all-cpu-cores)</br>
&emsp;&emsp;[5.7. สร้าง ‘maintenance endpoint’](#-57-create-a-maintenance-endpoint)</br>
&emsp;&emsp;[5.8. ค้นหา errors และ downtime โดยใช้ APM products  `#advanced`](#-58-discover-errors-and-downtime-using-apm-products)</br>
&emsp;&emsp;[5.9. ทำให้ code production-ready](#-59-make-your-code-production-ready)</br>
&emsp;&emsp;[5.10. วัดค่า และ ปกป้อง การใช้งาน memory `#advanced`](#-510-measure-and-guard-the-memory-usage)</br>
&emsp;&emsp;[5.11. เอา Asset ที่ใช้ใน frontend ออกจาก Node ให้หมด](#-511-get-your-frontend-assets-out-of-node)</br>
&emsp;&emsp;[5.12. ทำให้เป็น stateless, รีเครื่อง servers ทุกวัน](#-512-be-stateless-kill-your-servers-almost-every-day)</br>
&emsp;&emsp;[5.13. ใช้เครื่องมือที่หา vulnerabilities (รอยโหว่) อัตโนมัติ](#-513-use-tools-that-automatically-detect-vulnerabilities)</br>
&emsp;&emsp;[5.14. ให้ทุก log มี transaction id `#advanced`](#-514-assign-a-transaction-id-to-each-log-statement)</br>
&emsp;&emsp;[5.15. ตั้งค่า NODE_ENV=production](#-515-set-node_envproduction)</br>
&emsp;&emsp;[5.16. ออกแบบการ deploy แบบ automated, atomic and zero-downtime  `#advanced`](#-516-design-automated-atomic-and-zero-downtime-deployments)</br>
&emsp;&emsp;[5.17. ใช้ Node.js ที่เป็น LTS](#-517-use-an-lts-release-of-nodejs)</br>
&emsp;&emsp;[5.18. อย่า route logs ข้างใน app](#-518-dont-route-logs-within-the-app)</br>
&emsp;&emsp;[5.19. Install packages โดยใช้ npm ci `#new`](#-519-install-your-packages-with-npm-ci)</br>

</details>

<details>
  <summary>
    <a href="#6-security-best-practices">6. การทำ Security (25)</a>
  </summary>

&emsp;&emsp;[6.1. ยืดอก ยอมรับ security rules ของ linter](#-61-embrace-linter-security-rules)</br>
&emsp;&emsp;[6.2. จำกัด concurrent requests โดยใช้ middleware](#-62-limit-concurrent-requests-using-a-middleware)</br>
&emsp;&emsp;[6.3 เรียก secrets จาก config files หรือใช้ packages เพื่อทำการ encrypt  `#strategic`](#-63-extract-secrets-from-config-files-or-use-packages-to-encrypt-them)</br>
&emsp;&emsp;[6.4. ป้องกันการทำ query injection โดยใช้ ORM/ODM libraries `#strategic`](#-64-prevent-query-injection-vulnerabilities-with-ormodm-libraries)</br>
&emsp;&emsp;[6.5. Security แบบ best practices ทั่วไป](#-65-collection-of-generic-security-best-practices)</br>
&emsp;&emsp;[6.6. ปรับ header ของ HTTP response เพื่อเพิ่มความปลอดภัย](#-66-adjust-the-http-response-headers-for-enhanced-security)</br>
&emsp;&emsp;[6.7. คอยตรวจสอบหา vulnerable dependencies ด้วยตัวเอง หรือ ออโต้อยู่เสมอ `#strategic`](#-67-constantly-and-automatically-inspect-for-vulnerable-dependencies)</br>
&emsp;&emsp;[6.8. ปกป้องรหัสผ่านหรือความลับของผู้ใช้ โดยใช้ bcrypt หรือ scrypt `#strategic`](#-68-protect-users-passwordssecrets-using-bcrypt-or-scrypt)</br>
&emsp;&emsp;[6.9. หลีกเลี่ยง output ที่เป็น HTML, JS และ CSS](#-69-escape-html-js-and-css-output)</br>
&emsp;&emsp;[6.10. ตรวจสอบความถูกต้องของ JSON ที่เข้ามา `#strategic`](#-610-validate-incoming-json-schemas)</br>
&emsp;&emsp;[6.11. Support blocklisting ของเหล่า JWT](#-611-support-blocklisting-jwts)</br>
&emsp;&emsp;[6.12. ป้องกันการโจมตีแบบ brute-force ใส่ authorization `#advanced`](#-612-prevent-brute-force-attacks-against-authorization)</br>
&emsp;&emsp;[6.13. รัน Node.js แบบไม่ใช่ root user](#-613-run-nodejs-as-non-root-user)</br>
&emsp;&emsp;[6.14. จำกัดขนาด payload โดยใช้ reverse-proxy หรือ middleware](#-614-limit-payload-size-using-a-reverse-proxy-or-a-middleware)</br>
&emsp;&emsp;[6.15. หลีกเลี่ยงการทำ eval statement ใน JavaScript](#-615-avoid-javascript-eval-statements)</br>
&emsp;&emsp;[6.16. หลีกเลี่ยงการใช้ RegEx แบบพิศดาร ไม่ให้ overloading การทำงานบน single thread](#-616-prevent-evil-regex-from-overloading-your-single-thread-execution)</br>
&emsp;&emsp;[6.17. หลีกเลี่ยงการเรียกใช้ module จากตัวแปร](#-617-avoid-module-loading-using-a-variable)</br>
&emsp;&emsp;[6.18. รัน code ที่ไม่ปลอดภัยบน sandbox](#-618-run-unsafe-code-in-a-sandbox)</br>
&emsp;&emsp;[6.19. ระวังเป็นพิเศษเมื่อต้องทำงานกับ child processes  `#advanced`](#-619-take-extra-care-when-working-with-child-processes)</br>
&emsp;&emsp;[6.20. อย่าให้ผู้ใช้เห็นรายละเอียดของ error](#-620-hide-error-details-from-clients)</br>
&emsp;&emsp;[6.21. ตั้งค่า 2FA สำหรับ npm หรือ Yarn `#strategic`](#-621-configure-2fa-for-npm-or-yarn)</br>
&emsp;&emsp;[6.22. แก้ไขการตั้งค่า session middleware](#-622-modify-session-middleware-settings)</br>
&emsp;&emsp;[6.23. หลบ DOS attacks โดยตั้งค่าให้ชัดว่า process ควรบึ้มตอนไหน  `#advanced`](#-623-avoid-dos-attacks-by-explicitly-setting-when-a-process-should-crash)</br>
&emsp;&emsp;[6.24. เลี่ยงการ redirect ที่ไม่ปลอดภัย](#-624-prevent-unsafe-redirects)</br>
&emsp;&emsp;[6.25. เลี่ยงการปล่อย secrets บน npm registry](#-625-avoid-publishing-secrets-to-the-npm-registry)</br>

</details>

<details>
  <summary>
    <a href="#7-draft-performance-best-practices">7. เกี่ยวกับ Performance (2) (กำลังเขียนนะจ๊ะ ✍️)</a>
  </summary>

&emsp;&emsp;[7.1. อย่า block event loop](#-71-dont-block-the-event-loop)</br>
&emsp;&emsp;[7.2. เลือกใช้ฟังค์ชันจาก native JS มากกว่าการใช้พวก user-land util แบบ Lodash](#-72-prefer-native-js-methods-over-user-land-utils-like-lodash)</br>

</details>

<details>
  <summary>
    <a href="#8-docker-best-practices">8. การใช้ Docker (15)</a>
  </summary>

&emsp;&emsp;[8.1 ใช้ multi-stage builds เพื่อขนาดและความปลอดภัยให้กับ Docker images `#strategic`](#-81-use-multi-stage-builds-for-leaner-and-more-secure-docker-images)</br>
&emsp;&emsp;[8.2. Bootstrap โดยใช้ node command, เลี่ยงการใช้คำสั่ง npm start](#-82-bootstrap-using-node-command-avoid-npm-start)</br>
&emsp;&emsp;[8.3. ปล่อยให้ Docker runtime รับมือกับ replication และ uptime `#strategic`](#-83-let-the-docker-runtime-handle-replication-and-uptime)</br>
&emsp;&emsp;[8.4. ใช้ .dockerignore เพื่อไม่ให้ secret หลุด](#-84-use-dockerignore-to-prevent-leaking-secrets)</br>
&emsp;&emsp;[8.5. Clean-up dependencies ก่อนเอาขึ้น production](#-85-clean-up-dependencies-before-production)</br>
&emsp;&emsp;[8.6. Shutdown อย่างชาญฉลาด and graceful  `#advanced`](#-86-shutdown-smartly-and-gracefully)</br>
&emsp;&emsp;[8.7. ตั้งค่า memory limits โดยใช้ both Docker และ v8 `#advanced #strategic`](#-87-set-memory-limits-using-both-docker-and-v8)</br>
&emsp;&emsp;[8.8. วางแผนเพื่อการทำ caching อย่างมีประสิทธิภาพ](#-88-plan-for-efficient-caching)</br>
&emsp;&emsp;[8.9. ใช้ explicit image reference, เลี่ยงการใช้ latest tag](#-89-use-explicit-image-reference-avoid-latest-tag)</br>
&emsp;&emsp;[8.10. พอใจกับ Docker base images ที่ขนาดเล็กกว่า](#-810-prefer-smaller-docker-base-images)</br>
&emsp;&emsp;[8.11. Clean-out build-time secrets, หลีกเลี่ยงการใส่ secrets ข้างใน args  `#strategic #new`](#-811-clean-out-build-time-secrets-avoid-secrets-in-args)</br>
&emsp;&emsp;[8.12. Scan images สำหรับช่องโหว่ในหลายๆ Layer  `#advanced`](#-812-scan-images-for-multi-layers-of-vulnerabilities)</br>
&emsp;&emsp;[8.13 Clean NODE_MODULE cache](#-813-clean-node_module-cache)</br>
&emsp;&emsp;[8.14. Docker practices แบบทั่วไป](#-814-generic-docker-practices)</br>
&emsp;&emsp;[8.15. Lint Dockerfile ของคุณ `#new`](#-815-lint-your-dockerfile)</br>

</details>

<br/><br/>

# `1. วิธีการวาง Project Structure`

## ![✔] 1.1 วิธีการวาง Structure โดยใช้วิธีอิง components เป็นหลัก

**ยาวไปไม่อ่าน:** ในการพัฒนา App ขนาดใหญ่มักมีหลุมพรางที่ใหญ่ที่สุดนั่นคือคือการ Maintain codebase ขนาดใหญ่ที่มี dependency นับร้อย - ซึ่งมันเป็นอะไรที่ช้ามากสำหรับเหล่า dev ทั้งหลายเมื่อต้องการทำงานกับ feature ใหม่ๆ. กลับกันหากเราแบ่ง code ให้เป็น component แต่ละอันเข้าไปอยู่ใน folder หรือ dedicated codebase, และทำให้แต่ละชิ้นเล็ก และ เข้าใจง่าย. เข้าไป 'อ่านเพิ่มเติม' ข้างล่างเพื่อดูตัวอย่างของการวาง Project Structure ที่ถูกต้อง

**หรือไม่ก็:** เมื่อ developer พัฒนา feature ใหม่มา กลัวว่าจะมี impact จากการ code ของเขาว่าจะไปทำ component อื่นบึ้มหรือเปล่า - ทำให้การ deploy ช้าลงและเสี่ยงมากกว่าเดิม และยังทำให้ scale ยากกว่าเดิม เมื่อไม่ได้แยก business unit ออกจากกัน

🔗 [**อ่านเพิ่มเติม: วิธีการวาง Structure โดยใช้วิธีอิง components เป็นหลัก**](./sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 วาง Layer ของ component ต่างๆ, สร้างขอบเขตให้กับ web layer

**ยาวไปไม่อ่าน:** ในแต่ละ component ควรมี 'layers' - ซึ่งเป็น object ไว้สำหรับเว็บ, ลอจิค, และ code สำหรับการเข้าถึงข้อมูล นอกจากจะทำให้โค้ดดูสะอาดและมีการทำ separation of concerns ที่ดี แต่ยังทำให้การทำ mock และ test ระบบง่ายขึ้นอีกด้วย แม้ว่านี่จะเป็น pattern ที่สามารถเห็นได้ทั่วไป แต่ผู้พัฒนา API มักจะรวม layers โดยการส่ง web layer objects (เช่น req, res ใน Express ) ไปหา business logic และ layer ข้อมูล - นี่จะทำให้ application ของคุณต้องพึ่งพาการเข้าถึงโดยใช้ web frameworks บางตัว

**หรือไม่ก็:** App ที่รวม web objects กับ layer อื่นทำให้ code ที่ใช้ test ไม่สามารถเข้าถึงได้, CRON jobs, ถูก triggers จาก message queues เป็นต้น

🔗 [**อ่านเพิ่มเติม: การวาง Layer ให้ app**](./sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 รวบ utilities ที่ใช้บ่อยให้เป็น npm packages

**ยาวไปไม่อ่าน:** ใน app ขนาดใหญ่และมี codebase ขนาดใหญ่, ที่มี cross-cutting-concern utilities เช่น logger, การเข้ารหัสและอะไรเทือกๆนั้น, ควรถูก wrap โดย code ของคุณและเปิดเผยออกไปในฐานะ npm packages แบบส่วนตัว. นี่จะทำให้มีความสามารถในการแบ่งปันเพื่อนำไปใช้ในส่วนต่างๆใน codebases และ projects

**หรือไม่ก็:** ไปคิดค้นวิธี deploy และ dependency wheel มาใหม่ซะ

🔗 [**อ่านเพิ่มเติม: การวาง Structure โดยใช้หลัก feature**](./sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 แบ่งแยก Express 'app' กับ 'server' ออกจากกัน

**ยาวไปไม่อ่าน:** เลี่ยงนิสัยแย่ๆ ในการ [Express](https://expressjs.com/) app ทั้งหมดในไฟล์ใหญ่ไฟล์เดียว - แยก 'Express' ให้ออกมาอย่างน้อยเป็นสองไฟล์ : การประกาศ API (app.js) และ ส่วนที่เกี่ยวข้องกับการทำ networking (WWW). เพื่อเป็นการวาง structure ที่ดีโดยประกาศ API ไว้ข้างใน components

**หรือไม่ก็:** API สามารถถูก test โดยการเรียกใช้ผ่าน HTTP เท่านั้น (ช้ากว่าและ ยากกว่ามากๆในการทำรายงานความครอบคลุมในการ test). และมันก็คงไม่สนุกแน่ที่ต้องมานั่ง maintain code หลายร้อยบรรทัดในไฟล์เดียว

🔗 [**อ่านเพิ่มเติม: แยก Express 'app' กับ 'server'**](./sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 คำนึงถึงการตั้งค่า environment, ความปลอดภัย และ hierarchy

**ยาวไปไม่อ่าน:** การตั้งค่าที่เพอร์เฟคและไร้ที่ติควรคำนึงถึงว่า (a) keys สามารถอ่านได้จากไฟล์ file และจาก environment variable (b) secrets ถูกเก็บแยกจาก code ส่วนที่ commit (c) ตั้งค่าอย่างเป็นลำดับชั้นเพื่อความสะดวกในการหา มีเครื่องมือบางตัวที่มีความสามารถ"เกือบ"ครบตามข้างบนได้แก่. [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), and [convict](https://www.npmjs.com/package/convict).

**หรือไม่ก็:** ไม่สามารถทำตาม requirements ข้างบนซักอันจะทำให้ทีม dev หรือ DevOps ชะงักเอาได้ หรือไม่ก็ชะงักทั้งคู่

🔗 [**อ่านเพิ่มเติม: การตั้งค่าแบบ best practices**](./sections/projectstructre/configguide.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ กลับขึ้นไปข้างบน</a></p>

# `2. การรับมือกับ Error`

## ![✔] 2.1 ใช้ Async-Await หรือ promise ในการแก้ async error

**ยาวไปไม่อ่าน:** การรับมือกับ async errors ในวิธี callback นั้นคงเป็นวิธีที่เร็วที่สุดในการตกนรกทั้งเป็น (หรือเรียกว่า ไอ้ต้าวปิรามิดแห่งความชิบหาย) สิ่งที่ดีที่สุดที่สามารถมอบให้โค้ดคุณได้คือการใช้งาน promise library ที่โด่งดัง หรือ ซุปตาร์ async-await แทนซึ่งสามารถทำให้ดูกระชับกว่าและมีความคุ้นหน้าคุ้นตากับ syntax อย่างพวก try-catch

**หรือไม่ก็:** สไตล์ callback ใน Node.js , ฟังค์ชั่น(err, response), ทำให้โค้ดไม่สามารถ maintain ได้เพราะมันรวมวิธีรับมือ error กับโค้ดปกติตัวอื่นมารวมกัน และยังมีการซ้อนกันทุกโคตรยุ่งเหยิงและทำให้เกิด pattern แบบพิศดารอีกด้วย

🔗 [**อ่านเพิ่มเติม: อย่าใช้ callback**](./sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 ให้ใช้แต่ built-in Error object

**ยาวไปไม่อ่าน:** หลายคน throw error ออกมาเป็น string บางคนก็ออกมาเป็น custom type บ้างล่ะ – นี่ทำให้วิธีการรับมือกับ error ดูยุ่งยากและวุ่นวายกว่าที่ควร  และ เกิดการทำงานร่วมกันระหว่าง modules. ไม่ว่าจะ reject promise หรือ throw exception หรือจะ emit error – ใช้แต่ built-in Error object (หรือ object ที่ใช้เสริมกับ built-in Error object) จะเพิ่มความสม่ำเสมอเป็นหนึ่งเดียวและป้องกันข้อมูลสูญหายระหว่างทางอีกด้วย. มันมี `no-throw-literal` ในกฎของ ESLint ที่ว่าด้วยการตรวจสอบอย่างเข้มงวด  (ถึงจะมี [ข้อจำกัด](https://eslint.org/docs/rules/no-throw-literal) ที่สามารถแก้ด้วยการใช้ TypeScript และตั้งค่ากฎ `@typescript-eslint/no-throw-literal`)

**หรือไม่ก็:** เมื่อเรียกใช้ component บางตัว, จะไม่ชัวร์ว่าจะได้ errors แบบไหนกลับมา – ทำให้การรับมือกับ error ที่เหมาะสมยากยิ่งขึ้น และที่แย่ไปกว่านั้นการใช้ custom types เพื่ออธิบาย errors อาจทำให้ข้อมูล error ที่สำคัญสูญหายเช่น stack trace เป็นต้น!

🔗 [**อ่านเพิ่มเติม: ใช้ built-in error object**](./sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 จำแนกระหว่าง operational กับ programmer errors

**ยาวไปไม่อ่าน:** Operational errors (เช่น API รับข้อมูลผิดๆเข้ามา) จะสามารถอ้างอิงจาก Case ต่างๆและสามารถรู้ได้ว่าผลกระทบจาก Error นั้นๆจะเป็นยังไงและสามารถรับมือได้ยังไง ในทางกลับกัน Programmer error (เช่น พยายามอ่านค่าตัวแปร undefined) มาจากการไม่รู้ว่า Code ตัวไหนเจ๊ง ทำให้ต้อง Gracefully restart application

**หรือไม่ก็:** คุณก็แค่รีแอปไปทุกครั้งที่เจอ Error แต่ทำไมต้องให้ผู้ใช้ออนไลน์ 5,000 กว่าคนในระบบหลุดเพราะ Error เล็กๆหรือที่ถูกคาดการณ์มาแล้วว่าจะเกิด ในส่วนของ operational error อะเหรอตรงข้ามเลยไม่ดีอย่างมาก รันแอปต่อไปเรื่อยๆถึงแม้จะรู้ว่าเกิดปัญหาอะไรไม่รู้ขึ้น (programmer error) อาจทำให้เกิดเหตุการณ์ที่ไม่คาดคิดได้ จำแนก Error ทั้งสองให้ดี จะทำให้รับมือกับปัญหาได้อย่างแนบเนียนและสมดุลแต่ก็ขึ้นอยู่กับบริบทด้วย

🔗 [**อ่านเพิ่มเติม: operational vs programmer error**](./sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 รับมือจาก Error จากส่วนกลาง, ไม่ใช่ข้างใน middleware

**ยาวไปไม่อ่าน:** Logic การทำ Error handling เช่นส่งจดหมายให้แอดมิน และ logging ควรถูก encapsulate ใน object เฉพาะทางและเป็นส่วนกลางให้ endpoint ทั้งหมด (เช่น Express middleware, cron jobs, unit-testing) และเรียกใช้เวลาเกิด Error

**หรือไม่ก็:** ไม่รับมือ Error ในที่ๆเดียวทำให้โค้ดซ้ำและอาจจะรับมือแบบไม่ถูกต้องเท่าที่ควร นะจ๊ะ 

🔗 [**อ่านเพิ่มเติม: รับมือกับ Error จากส่วนกลาง**](./sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 ทำเอกสาร API errors โดยใช้ Swagger หรือ GraphQL

**ยาวไปไม่อ่าน:** ให้คนที่เรียกใช้ API รู้ว่าอาจจะมี Errors ไหนบ้างที่ถูกส่งกลับไปพวกเขาจะได้รับมือถูกและไม่บึ้ม. สำหรับ RESTful API ทั้งหลาย, ปกติจะใช้ documentation frameworks ทำเช่น Swagger. ถ้าคุณใช้ GraphQL, คุณสามารถใช้ schema และ comments ของคุณได้.

**หรือไม่ก็:** คนเรียกใช้ API อาจจะคิดว่าระบบบึ้มแล้วต้องรีเครื่องเพราะได้ Error แบบที่ไม่เข้าใจกลับมา Note: ซึ่งคนเรียก API ก็อาจจะเป็นคุณนั่นแหละ (ปกติมากในโลกของ microservice)

🔗 [**อ่านเพิ่มเติม: ทำ Document API errors โดยใช้ Swagger หรือ GraphQL**](./sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 ออกจาก process แบบ graceful เมื่อมีสิ่งแปลกปลอมเข้ามาเยือน

**ยาวไปไม่อ่าน:** ตอนที่เกิด Error ที่ไม่รู้จัก (ถ้าเป็น Developer error, อ่าน best practice 2.3) - เมื่อมีความไม่มันใจเกี่ยวกับสุขภาพของแอปนั้นปกติที่ทำกันคือการ Restart process อย่างระมัดระวัง โดยใช้เครื่องมือในการจัดการ process เช่น [Forever](https://www.npmjs.com/package/forever) หรือ [PM2](http://pm2.keymetrics.io/)

**หรือไม่ก็:** เมื่อมี exception ที่ไม่คุ้นตาเกิดขึ้น, object บางตัวอยู่ใน faulty state (เช่น event emitter ที่ถูกใช้แบบ global ไม่ส่ง events ต่อจากความผิดพลาดบางอย่างจากข้างใน) และ requests ทั้งหมดในอนาคตอาจบึ้มหรือทำตัวแปลกๆ

🔗 [**อ่านเพิ่มเติม: การปิด process**](./sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 ใช้เครื่องมือ Log ที่ mature แล้วเพื่อเพิ่มความชัดเจนของ error

**ยาวไปไม่อ่าน:** ไอ้ต้าวพวกเครื่องมือ logging ต่างๆเช่น [Pino](https://github.com/pinojs/pino) หรือ [Log4js](https://www.npmjs.com/package/log4js), จะทำให้หา error และเข้าใจมันได้ไวขึ้น เพราะงั้นก็ลืม console.log ไปได้เลย

**หรือไม่ก็:** ก็หาไปดิจาก console.logs หรือ text file รกๆของคุณ ถ้าไม่มี querying tools ดีๆหรือ log viewer ดีๆนายอาจจะได้จ้องจอจนดึกก็ได้นะ

🔗 [**อ่านเพิ่มเติม: การใช้ mature logger**](./sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 ทดสอบ flow ของ error โดยใช้ test framework ที่คุณชอบ

**ยาวไปไม่อ่าน:** ไม่ว่าคุณจะเป็น Automated QA ระดับเทพหรือคนเทสมือธรรมดา ต้องทำให้มั่นใจว่าโค้ดของคุณทำงานได้อย่างดี รับมือและ return error ให้ถูกต้อง ใช้ Testing frameworks เช่น Mocha และ Chai จะทำให้สามารถรับมือพวกนี้ได้อย่างง่ายดาย (ดูโค้ดตัวอย่างได้ใน "Gist popup")

**หรือไม่ก็:** ไม่มีการเทสอะเหรอ, ไม่ว่าจะเป็นแบบ auto หรือ เทสมือ, คุณจะไม่สามารถพึ่งพาโค้ดของคุณให้ return errors ที่ถูกต้องได้ ถ้าไม่มี error ที่มีความหมาย = ไม่มีการรับมือกับ error นั่นเอง

🔗 [**อ่านเพิ่มเติม: testing error flows**](./sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 หา errors และ downtime โดยใช้ APM

**ยาวไปไม่อ่าน:** Monitoring and performance products (หรือเรียกว่า APM) เป็นการประเมินคุณภาพ Codebase หรือ API ของคุณในเชิงรุกเพื่อที่จะทำให้สามารถ highlight errors, crashes, และจุดที่ทำงานช้าที่คุณหาไม่เจอได้อย่างอัตโนมัติ

**หรือไม่ก็:** คุณก็ใช้แรงเยอะๆของคุณนั่งวัดประสิทธิภาพ API กับ Downtimes ที่คุณคงหาไม่เจอหรอกว่าโค้ดส่วนไหนทำงานช้าสุดในการทำงานจริง และมันจะกระทบต่อประสบการณ์ผู้ใช้อย่างไรบ้าง

🔗 [**อ่านเพิ่มเติม: การใช้งานผลิตภัณฑ์ APM **](./sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Catch สิ่งที่ไม่ได้ handle ของ promise rejections

**ยาวไปไม่อ่าน:** Exception ใดๆที่ถูก throw ออกมาจาก Promise จะถูกทิ้งไปนอกจาก ผู้พัฒนาไม่ได้ลืมที่จะรับมือกับมันอย่างชัดเจน ถึงแม้ว่าโค้ดของคุณจะ subscribe กับ `process.uncaughtException`! หรือข้ามมันโดยการ register event `process.unhandledRejection`

**หรือไม่ก็:** Errors ของคุณโดนเขมือบไปอย่างไร้ร่องรอยไม่มีอะไรที่น่าเป็นห่วงหรอก...มั้ง?

🔗 [**อ่านเพิ่มเติม: Catch สิ่งที่ไม่ได้ handle ของ promise rejections**](./sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Fail fast, ตรวจสอบ arguments โดยใช้ library เฉพาะทาง

**ยาวไปไม่อ่าน:** Assert API input เพื่อเลี่ยงบั๊ก ที่น่าปวดหัวที่ยากต่อการหาหากเกิดขึ้นในภายหลัง การทำ validation ให้ Code นั้นปกติแล้วเป็นเรื่องที่น่าเบื่อเว้นแต่คุณจะใช้ helper library สุดคูลเช่น [ajv](https://www.npmjs.com/package/ajv) and [Joi](https://www.npmjs.com/package/joi)

**หรือไม่ก็:** คิดงี้นะฟังค์ชั่นของคุณคิดว่าจะมี argument ที่เป็นเลขชื่อ “ส่วนลด” โยนเข้ามา แต่คนเรียกใช้ลืมใส่ให้แล้วต่อมาโค้ดคุณเช็คว่า Discount!=0 (จำนวนของส่วนลดมากกว่า 0) ทำให้ผู้ใช้งานกดส่วนลดเล่นได้อย่างสนุกสนาน. โอ้วหม่ายก้อดเป็นบั๊กที่น่าปวดหัวจริงๆ เห็นรึยัง?

🔗 [**อ่านเพิ่มเติม: failing fast**](./sections/errorhandling/failfast.md)

<br/><br/>

## ![✔] 2.12 ต้อง await promises ก่อน return ทุกครั้งเพื่อเลี่ยง partial stacktrace

**ยาวไปไม่อ่าน:** ต้อง `return await` ทุกครั้งเมื่อ return promise เพื่อที่คุณจะได้ error stacktrace แบบเต็มๆ. ถ้าฟังค์ชั่น returns promise มาฟังค์ชั่นนั้นต้องถูกประกาศเป็นแบบ `async` และ `await` promise ก่อน return

**หรือไม่ก็:** ฟังค์ชั่นที่ return promise โดยไม่ await จะไม่โผล่บน stacktrace.
ข้อมูลที่หายไปอาจทำให้เกิดความยุ่งยากในการเข้าใจในการหา error โดยเฉพาะอย่างยิ่งหากต้นตอของปัญหานี้มาจากฟังค์ชั่นที่หายไป

🔗 [**อ่านเพิ่มเติม: returning promises**](./sections/errorhandling/returningpromises.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `3. Code Style Practices`

## ![✔] 3.1 ใช้ ESLint

**ยาวไปไม่อ่าน:** [ESLint](https://eslint.org) นั้นเป็นมาตรฐานในการเช็คความเป็นไปได้ที่จะเกิด error และปรับสไตล์การโค้ดนอกจากการแก้ไขปัญหา spacing โง่ๆแล้วยังช่วยหาโค้ดที่มีการทำ anti-patterns แบบเลวร้ายได้อีกด้วยเช่น developer throw error โดยไม่มี classification. ด้วย ESLint คุณสามารถแก้ไข code style ได้อย่างอัตโนมัติหรือจะใช้เครื่องมืออื่น เช่น [prettier](https://www.npmjs.com/package/prettier) และ [beautify](https://www.npmjs.com/package/js-beautify) ซึ่งจะเทพกว่าในการแก้ไขต่างๆและยังใช้งานร่วมกับ ESLint อีกด้วย

**หรือไม่ก็:** Developers จะโฟกัสกับการเคาะ space และ ความยาวบรรทัดเป็นปัญหาที่เสียเวลาและคิดมากจนเกิดไปเกี่ยวกับ code style ของโปรเจค

🔗 [**อ่านเพิ่มเติม: การใช้งาน ESLint และ Prettier**](./sections/codestylepractices/eslint_prettier.md)

<br/><br/>

## ![✔] 3.2 Node.js specific plugins

**ยาวไปไม่อ่าน:** On top of ESLint standard rules that cover vanilla JavaScript, add Node.js specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**หรือไม่ก็:** Many faulty Node.js code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as a path which allows attackers to execute any JS script. Node.js linters can detect such patterns and complain early

<br/><br/>

## ![✔] 3.3 Start a Codeblock's Curly Braces on the Same Line

**ยาวไปไม่อ่าน:** The opening curly braces of a code block should be on the same line as the opening statement

### Code Example

```javascript
// Do
function someฟังค์ชั่น() {
  // code block
}

// Avoid
function someฟังค์ชั่น() 
{
  // code block
}
```

**หรือไม่ก็:** Deferring from this best practice might lead to unexpected results, as seen in the StackOverflow thread below:

🔗 [**อ่านเพิ่มเติม:** "Why do results vary based on curly brace placement?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Separate your statements properly

No matter if you use semicolons or not to separate your statements, knowing the common pitfalls of improper linebreaks or automatic semicolon insertion, will help you to eliminate regular syntax errors.

**ยาวไปไม่อ่าน:** Use ESLint to gain awareness about separation concerns. [Prettier](https://prettier.io/) or [Standardjs](https://standardjs.com/) can automatically resolve these issues.

**หรือไม่ก็:** As seen in the previous section, JavaScript's interpreter automatically adds a semicolon at the end of a statement if there isn't one, or considers a statement as not ended where it should, which might lead to some undesired results. You can use assignments and avoid using immediately invoked ฟังค์ชั่น expressions to prevent most of the unexpected errors.

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
const count = 2 // it tries to run 2(), but 2 is not a ฟังค์ชั่น
(function doSomething() {
  // do something amazing
}())
// put a semicolon before the immediate invoked ฟังค์ชั่น, after the const definition, save the return value of the anonymous ฟังค์ชั่น to a variable or avoid IIFEs altogether
```

🔗 [**อ่านเพิ่มเติม:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**อ่านเพิ่มเติม:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Name your ฟังค์ชั่น

**ยาวไปไม่อ่าน:** Name all ฟังค์ชั่น, including closures and callbacks. Avoid anonymous ฟังค์ชั่น. This is especially useful when profiling a node app. Naming all ฟังค์ชั่น will allow you to easily understand what you're looking at when checking a memory snapshot

**หรือไม่ก็:** Deบั๊กging production issues using a core dump (memory snapshot) might become challenging as you notice significant memory consumption from anonymous ฟังค์ชั่น

<br/><br/>

## ![✔] 3.6 Use naming conventions for variables, constants, ฟังค์ชั่น and classes

**ยาวไปไม่อ่าน:** Use **_lowerCamelCase_** when naming constants, variables and ฟังค์ชั่น, **_UpperCamelCase_** (capital first letter as well) when naming classes and **_UPPER_SNAKE_CASE_** when naming global or static variables. This will help you to easily distinguish between plain variables, ฟังค์ชั่น, classes that require instantiation and variables declared at global module scope. Use descriptive names, but try to keep them short

**หรือไม่ก็:** JavaScript is the only language in the world that allows invoking a constructor ("Class") directly without instantiating it first. Consequently, Classes and ฟังค์ชั่น-constructors are differentiated by starting with UpperCamelCase

### 3.6 Code Example

```javascript
// for global variables names we use the const/let keyword and UPPER_SNAKE_CASE
let MUTABLE_GLOBAL = "mutable value"
const GLOBAL_CONSTANT = "immutable value";
const CONFIG = {
  key: "value",
};

// examples of UPPER_SNAKE_CASE convetion in nodejs/javascript ecosystem
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

// for function names we use lowerCamelCase
function doSomething() {
  // for scoped variable names we use the const/let keyword and lowerCamelCase
  const someConstExample = "immutable value";
  let someMutableExample = "mutable value";
}
```

<br/><br/>

## ![✔] 3.7 Prefer const over let. Ditch the var

**ยาวไปไม่อ่าน:** Using `const` means that once a variable is assigned, it cannot be reassigned. Preferring `const` will help you to not be tempted to use the same variable for different uses, and make your code clearer. If a variable needs to be reassigned, in a for loop, for example, use `let` to declare it. Another important aspect of `let` is that a variable declared using it is only available in the block scope in which it was defined. `var` is ฟังค์ชั่น scoped, not block-scoped, and [shouldn't be used in ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) now that you have `const` and `let` at your disposal

**หรือไม่ก็:** Deบั๊กging becomes way more cumbersome when following a variable that frequently changes

🔗 [**อ่านเพิ่มเติม: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Require modules first, not inside ฟังค์ชั่น

**ยาวไปไม่อ่าน:** Require modules at the beginning of each file, before and outside of any ฟังค์ชั่น. This simple best practice will not only help you easily and quickly tell the dependencies of a file right at the top but also avoids a couple of potential problems

**หรือไม่ก็:** Requires are run synchronously by Node.js. If they are called from within a ฟังค์ชั่น, it may block other requests from being handled at a more critical time. Also, if a required module or any of its dependencies throw an error and crash the server, it is best to find out about it as soon as possible, which might not be the case if that module is required from within a ฟังค์ชั่น

<br/><br/>

## ![✔] 3.9 Require modules by folders, as opposed to the files directly

**ยาวไปไม่อ่าน:** When developing a module/library in a folder, place an index.js file that exposes the module's internals so every consumer will pass through it. This serves as an 'interface' to your module and eases future changes without breaking the contract

**หรือไม่ก็:** Changing the internal structure of files or the signature may break the interface with clients

### 3.9 Code example

```javascript
// Do
module.exports.SMSProvider = require("./SMSProvider");
module.exports.SMSNumberResolver = require("./SMSNumberResolver");

// Avoid
module.exports.SMSProvider = require("./SMSProvider/SMSProvider.js");
module.exports.SMSNumberResolver = require("./SMSNumberResolver/SMSNumberResolver.js");
```

<br/><br/>

## ![✔] 3.10 Use the `===` operator

**ยาวไปไม่อ่าน:** Prefer the strict equality operator `===` over the weaker abstract equality operator `==`. `==` will compare two variables after converting them to a common type. There is no type conversion in `===`, and both variables must be of the same type to be equal

**หรือไม่ก็:** Unequal variables might return true when compared with the `==` operator

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

**ยาวไปไม่อ่าน:** Node 8 LTS now has full support for Async-await. This is a new way of dealing with asynchronous code which supersedes callbacks and promises. Async-await is non-blocking, and it makes asynchronous code look synchronous. The best gift you can give to your code is using async-await which provides a much more compact and familiar code syntax like try-catch

**หรือไม่ก็:** Handling async errors in callback style are probably the fastest way to hell - this style forces to check errors all over, deal with awkward code nesting, and makes it difficult to reason about the code flow

🔗[**อ่านเพิ่มเติม:** Guide to async-await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use arrow ฟังค์ชั่น expressions (=>)

**ยาวไปไม่อ่าน:** Though it's recommended to use async-await and avoid ฟังค์ชั่น parameters when dealing with older APIs that accept promises or callbacks - arrow ฟังค์ชั่น make the code structure more compact and keep the lexical context of the root ฟังค์ชั่น (i.e. `this`)

**หรือไม่ก็:** Longer code (in ES5 ฟังค์ชั่น) is more prone to บั๊ก and cumbersome to read

🔗 [**อ่านเพิ่มเติม: It’s Time to Embrace Arrow ฟังค์ชั่น**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-ฟังค์ชั่น-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `4. Testing And Overall Quality Practices`

## ![✔] 4.1 At the very least, write API (component) testing

**ยาวไปไม่อ่าน:** Most projects just don't have any automated testing due to short timetables or often the 'testing project' ran out of control and was abandoned. For that reason, prioritize and start with API testing which is the easiest way to write and provides more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/)). Afterward, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**หรือไม่ก็:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Include 3 parts in each test name

**ยาวไปไม่อ่าน:** Make the test speak at the requirements level so it's self-explanatory also to QA engineers and developers who are not familiar with the code internals. State in the test name what is being tested (unit under test), under what circumstances, and what is the expected result

**หรือไม่ก็:** A deployment just failed, a test named “Add product” failed. Does this tell you what exactly is malฟังค์ชั่นing?

🔗 [**อ่านเพิ่มเติม: Include 3 parts in each test name**](./sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Structure tests by the AAA pattern

**ยาวไปไม่อ่าน:** Structure your tests with 3 well-separated sections: Arrange, Act & Assert (AAA). The first part includes the test setup, then the execution of the unit under test, and finally the assertion phase. Following this structure guarantees that the reader spends no brain CPU on understanding the test plan

**หรือไม่ก็:** Not only you spend long daily hours on understanding the main code, but now also what should have been the simple part of the day (testing) stretches your brain

🔗 [**อ่านเพิ่มเติม: Structure tests by the AAA pattern**](./sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Detect code issues with a linter

**ยาวไปไม่อ่าน:** Use a code linter to check the basic quality and detect anti-patterns early. Run it before any test and add it as a pre-commit git-hook to minimize the time needed to review and correct any issue. Also check [Section 3](#3-code-style-practices) on Code Style Practices

**หรือไม่ก็:** You may let pass some anti-pattern and possible vulnerable code to your production environment.

<br/><br/>

## ![✔] 4.5 Avoid global test fixtures and seeds, add data per-test

**ยาวไปไม่อ่าน:** To prevent test coupling and easily reason about the test flow, each test should add and act on its own set of DB rows. Whenever a test needs to pull or assume the existence of some DB data - it must explicitly add that data and avoid mutating any other records

**หรือไม่ก็:** Consider a scenario where deployment is aborted due to failing tests, team is now going to spend precious investigation time that ends in a sad conclusion: the system works well, the tests however interfere with each other and break the build

🔗 [**อ่านเพิ่มเติม: Avoid global test fixtures**](./sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Constantly inspect for vulnerable dependencies

**ยาวไปไม่อ่าน:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [npm audit](https://docs.npmjs.com/cli/audit) and 🔗 [snyk.io](https://snyk.io) that can be invoked from your CI on every build

**หรือไม่ก็:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.7 Tag your tests

**ยาวไปไม่อ่าน:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**หรือไม่ก็:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

<br/><br/>

## ![✔] 4.8 Check your test coverage, it helps to identify wrong test patterns

**ยาวไปไม่อ่าน:** Code coverage tools like [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but not least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**หรือไม่ก็:** There won't be any automated metric telling you when a large portion of your code is not covered by testing

<br/><br/>

## ![✔] 4.9 Inspect for outdated packages

**ยาวไปไม่อ่าน:** Use your preferred tool (e.g. `npm outdated` or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)) to detect installed outdated packages, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a severe scenario might be when an installed package is 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**หรือไม่ก็:** Your production will run packages that have been explicitly tagged by their author as risky

<br/><br/>

## ![✔] 4.10 Use production-like environment for e2e testing

**ยาวไปไม่อ่าน:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Use an environment which is as close to your real production environment as possible like a-continue (Missed -continue here, needs content. Judging by the **หรือไม่ก็** clause, this should mention docker-compose)

**หรือไม่ก็:** Without docker-compose, teams must maintain a testing DB for each testing environment including developers' machines, keep all those DBs in sync so test results won't vary across environments

<br/><br/>

## ![✔] 4.11 Refactor regularly using static analysis tools

**ยาวไปไม่อ่าน:** Using static analysis tools helps by giving objective ways to improve code quality and keeps your code maintainable. You can add static analysis tools to your CI build to fail when it finds code smells. Its main selling points over plain linting are the ability to inspect quality in the context of multiple files (e.g. detect duplications), perform advanced analysis (e.g. code complexity), and follow the history and progress of code issues. Two examples of tools you can use are [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) and [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**หรือไม่ก็:** With poor code quality, บั๊ก and performance will always be an issue that no shiny new library or state of the art features can fix

🔗 [**อ่านเพิ่มเติม: Refactoring!**](./sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

**ยาวไปไม่อ่าน:** Your continuous integration platform (CICD) will host all the quality tools (e.g. test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of a complex setup that demands a steep learning curve. Nowadays, it has become much easier to set up a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**หรือไม่ก็:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**อ่านเพิ่มเติม: Choosing CI platform**](./sections/testingandquality/citools.md)

## ![✔] 4.13 Test your middlewares in isolation

**ยาวไปไม่อ่าน:** When a middleware holds some immense logic that spans many requests, it is worth testing it in isolation without waking up the entire web framework. This can be easily achieved by stubbing and spying on the {req, res, next} objects

**หรือไม่ก็:** A บั๊ก in Express middleware === a บั๊ก in all or most requests

🔗 [**อ่านเพิ่มเติม: Test middlewares in isolation**](./sections/testingandquality/test-middlewares.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `5. Going To Production Practices`

## ![✔] 5.1. Monitoring

**ยาวไปไม่อ่าน:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**หรือไม่ก็:** Failure === disappointed customers. Simple

🔗 [**อ่านเพิ่มเติม: Monitoring!**](./sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**ยาวไปไม่อ่าน:** Logs can be a dumb warehouse of deบั๊ก statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**หรือไม่ก็:** You end up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**อ่านเพิ่มเติม: Increase transparency using smart logging**](./sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**ยาวไปไม่อ่าน:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**หรือไม่ก็:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**อ่านเพิ่มเติม: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](./sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**ยาวไปไม่อ่าน:** Your code must be identical across all environments, but amazingly npm lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using npm config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grained control use `npm shrinkwrap`. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**หรือไม่ก็:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code

🔗 [**อ่านเพิ่มเติม: Lock dependencies**](./sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**ยาวไปไม่อ่าน:** The process must go on and get restarted upon failures. For simple scenarios, process management tools like PM2 might be enough but in today's ‘dockerized’ world, cluster management tools should be considered as well

**หรือไม่ก็:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to DevOps chaos

🔗 [**อ่านเพิ่มเติม: Guard process uptime using the right tool**](./sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**ยาวไปไม่อ่าน:** At its basic form, a Node app runs on a single CPU core while all others are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**หรือไม่ก็:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**อ่านเพิ่มเติม: Utilize all CPU cores**](./sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**ยาวไปไม่อ่าน:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tested tools, some valuable information and operations are easier done using code

**หรือไม่ก็:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**อ่านเพิ่มเติม: Create a ‘maintenance endpoint’**](./sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**ยาวไปไม่อ่าน:** Application monitoring and performance products (a.k.a. APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-user's side while suggesting the root cause

**หรือไม่ก็:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affect the UX

🔗 [**อ่านเพิ่มเติม: Discover errors and downtime using APM products**](./sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**ยาวไปไม่อ่าน:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**หรือไม่ก็:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**อ่านเพิ่มเติม: Make your code production-ready**](./sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**ยาวไปไม่อ่าน:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leak memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large apps consider baking your memory watch into a robust monitoring system

**หรือไม่ก็:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**อ่านเพิ่มเติม: Measure and guard the memory usage**](./sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**ยาวไปไม่อ่าน:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single-threaded model

**หรือไม่ก็:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**อ่านเพิ่มเติม: Get your frontend assets out of Node**](./sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Be stateless, kill your servers almost every day

**ยาวไปไม่อ่าน:** Store any type of data (e.g. user sessions, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**หรือไม่ก็:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**อ่านเพิ่มเติม: Be stateless, kill your Servers almost every day**](./sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**ยาวไปไม่อ่าน:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can be easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**หรือไม่ก็:** Keeping your code clean from vulnerabilities without dedicated tools will require you to constantly follow online publications about new threats. Quite tedious

🔗 [**อ่านเพิ่มเติม: Use tools that automatically detect vulnerabilities**](./sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Assign a transaction id to each log statement

Also known as correlation id / transit id / tracing id / request id / request context / etc.

**ยาวไปไม่อ่าน:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Until version 14 of Node, this was not easy to achieve due to Node's async nature, but since AsyncLocalStorage came to town, this became possible and easy than ever. see code examples inside

**หรือไม่ก็:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**อ่านเพิ่มเติม: Assign ‘TransactionId’ to each log statement**](./sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Set `NODE_ENV=production`

**ยาวไปไม่อ่าน:** Set the environment variable `NODE_ENV` to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many npm packages determine the current environment and optimize their code for production

**หรือไม่ก็:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes it slower by a factor of three!

🔗 [**อ่านเพิ่มเติม: Set NODE_ENV=production**](./sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**ยาวไปไม่อ่าน:** Research shows that teams who perform many deployments lower the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improve the deployment process. You should probably achieve this using Docker combined with CI tools as they became the industry standard for streamlined deployment

**หรือไม่ก็:** Long deployments -> production downtime & human-related error -> team unconfident in making deployment -> fewer deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**ยาวไปไม่อ่าน:** Ensure you are using an LTS version of Node.js to receive critical บั๊ก fixes, security updates and performance improvements

**หรือไม่ก็:** Newly discovered บั๊ก or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**อ่านเพิ่มเติม: Use an LTS release of Node.js**](./sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Don't route logs within the app

**ยาวไปไม่อ่าน:** Log destinations should not be hard-coded by developers within the application code, but instead should be defined by the execution environment the application runs in. Developers should write logs to `stdout` using a logger utility and then let the execution environment (container, server, etc.) pipe the `stdout` stream to the appropriate destination (i.e. Splunk, Graylog, ElasticSearch, etc.).

**หรือไม่ก็:** Application handling log routing === hard to scale, loss of logs, poor separation of concerns

🔗 [**อ่านเพิ่มเติม: Log Routing**](./sections/production/logrouting.md)

<br/><br/>

## ![✔] 5.19. Install your packages with `npm ci`

**ยาวไปไม่อ่าน:** You have to be sure that production code uses the exact version of the packages you have tested it with. Run `npm ci` to strictly do a clean install of your dependencies matching package.json and package-lock.json. Using this command is recommended in automated environments such as continuous integration pipelines.

**หรือไม่ก็:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code.

🔗 [**อ่านเพิ่มเติม: Use npm ci**](./sections/production/installpackageswithnpmci.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `6. Security Best Practices`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible, preferably while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'อ่านเพิ่มเติม' below to see code examples that will get caught by a security linter

**หรือไม่ก็:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**อ่านเพิ่มเติม: Lint rules**](./sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**หรือไม่ก็:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**อ่านเพิ่มเติม: Implement rate limiting**](./sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**หรือไม่ก็:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**อ่านเพิ่มเติม: Secret management**](./sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**หรือไม่ก็:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**อ่านเพิ่มเติม: Query injection prevention using ORM/ODM libraries**](./sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**ยาวไปไม่อ่าน:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click อ่านเพิ่มเติม to skim through.

🔗 [**อ่านเพิ่มเติม: Common security best practices**](./sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**หรือไม่ก็:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**อ่านเพิ่มเติม: Using secure headers in your application**](./sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**หรือไม่ก็:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**อ่านเพิ่มเติม: Dependency security**](./sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Protect Users' Passwords/Secrets using bcrypt or scrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Passwords or secrets (e.g. API keys) should be stored using a secure hash + salt ฟังค์ชั่น like `bcrypt`,`scrypt`, or worst case `pbkdf2`.

**หรือไม่ก็:** Passwords and secrets that are stored without using a secure ฟังค์ชั่น are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**อ่านเพิ่มเติม: User Passwords**](./sections/security/userpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**หรือไม่ก็:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**อ่านเพิ่มเติม: Escape output**](./sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**หรือไม่ก็:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**อ่านเพิ่มเติม: Validate incoming JSON schemas**](./sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blocklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blocklist of untrusted tokens that are validated on each request.

**หรือไม่ก็:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**อ่านเพิ่มเติม: Blocklist JSON Web Tokens**](./sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** A simple and powerful technique is to limit authorization attempts using two metrics:

1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**หรือไม่ก็:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**อ่านเพิ่มเติม: Login rate limiting**](./sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**หรือไม่ก็:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to their server)

🔗 [**อ่านเพิ่มเติม: Run Node.js as non-root user**](./sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**หรือไม่ก็:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**อ่านเพิ่มเติม: Limit payload size**](./sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new ฟังค์ชั่น` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**หรือไม่ก็:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language ฟังค์ชั่น, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**อ่านเพิ่มเติม: Avoid JavaScript eval statements**](./sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**หรือไม่ก็:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**อ่านเพิ่มเติม: Prevent malicious RegEx**](./sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**หรือไม่ก็:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the file system, or access already existing system files.

🔗 [**อ่านเพิ่มเติม: Safe module loading**](./sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**หรือไม่ก็:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**อ่านเพิ่มเติม: Run unsafe code in a sandbox**](./sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**หรือไม่ก็:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**อ่านเพิ่มเติม: Be cautious when working with child processes**](./sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**หรือไม่ก็:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**อ่านเพิ่มเติม: Hide error details from client**](./sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**หรือไม่ก็:** [Have you heard about the eslint developer whose password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**หรือไม่ก็:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**อ่านเพิ่มเติม: Cookie and session security**](./sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**หรือไม่ก็:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**หรือไม่ก็:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**อ่านเพิ่มเติม: Prevent unsafe redirects**](./sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**ยาวไปไม่อ่าน:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to ignore specific files or folders, or the `files` array in `package.json` can act as an allow list.

**หรือไม่ก็:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**อ่านเพิ่มเติม: Avoid publishing secrets**](./sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `7. Draft: Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Don't block the event loop

**ยาวไปไม่อ่าน:** Avoid CPU intensive tasks as they will block the mostly single-threaded Event Loop and offload those to a dedicated thread, process or even a different technology based on the context.

**หรือไม่ก็:** As the Event Loop is blocked, Node.js will be unable to handle other request thus causing delays for concurrent users. **3000 users are waiting for a response, the content is ready to be served, but one single request blocks the server from dispatching the results back**

🔗 [**อ่านเพิ่มเติม: Do not block the event loop**](./sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. Prefer native JS methods over user-land utils like Lodash

**ยาวไปไม่อ่าน:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**หรือไม่ก็:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**อ่านเพิ่มเติม: Native over user land utils**](./sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `8. Docker Best Practices`

🏅 Many thanks to [Bret Fisher](https://github.com/BretFisher) from whom we learned many of the following practices

<br/><br/>

## ![✔] 8.1 Use multi-stage builds for leaner and more secure Docker images

**ยาวไปไม่อ่าน:** Use multi-stage build to copy only necessary production artifacts. A lot of build-time dependencies and files are not needed for running your application. With multi-stage builds these resources can be used during build while the runtime environment contains only what's necessary. Multi-stage builds are an easy way to get rid of overweight and security threats.

**หรือไม่ก็:** Larger images will take longer to build and ship, build-only tools might contain vulnerabilities and secrets only meant for the build phase might be leaked.

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

🔗 [**อ่านเพิ่มเติม: Use multi-stage builds**](./sections/docker/multi_stage_builds.md)

<br /><br /><br />

## ![✔] 8.2. Bootstrap using `node` command, avoid `npm start`

**ยาวไปไม่อ่าน:** use `CMD ['node','server.js']` to start your app, avoid using npm scripts which don't pass OS signals to the code. This prevents problems with child-processes, signal handling, graceful shutdown and having zombie processes.

**หรือไม่ก็:** When no signals are passed, your code will never be notified about shutdowns. Without this, it will lose its chance to close properly possibly losing current requests and/or data.

[**อ่านเพิ่มเติม: Bootstrap container using node command, avoid npm start**](./sections/docker/bootstrap-using-node.md)

<br /><br /><br />

## ![✔] 8.3. Let the Docker runtime handle replication and uptime

**ยาวไปไม่อ่าน:** When using a Docker run time orchestrator (e.g., Kubernetes), invoke the Node.js process directly without intermediate process managers or custom code that replicate the process (e.g. PM2, Cluster module). The runtime platform has the highest amount of data and visibility for making placement decision - It knows best how many processes are needed, how to spread them and what to do in case of crashes

**หรือไม่ก็:** Container keeps crashing due to lack of resources will get restarted indefinitely by the process manager. Should Kubernetes be aware of that, it could relocate it to a different roomy instance

🔗 [**อ่านเพิ่มเติม: Let the Docker orchestrator restart and replicate processes**](./sections/docker/restart-and-replicate-processes.md)

<br/><br /><br />

## ![✔] 8.4. Use .dockerignore to prevent leaking secrets

**ยาวไปไม่อ่าน**: Include a `.dockerignore` file that filters out common secret files and development artifacts. By doing so, you might prevent secrets from leaking into the image. As a bonus the build time will significantly decrease. Also, ensure not to copy all files recursively rather explicitly choose what should be copied to Docker

**หรือไม่ก็**: Common personal secret files like `.env`, `.aws` and `.npmrc` will be shared with anybody with access to the image (e.g. Docker repository)

🔗 [**อ่านเพิ่มเติม: Use .dockerignore**](./sections/docker/docker-ignore.md)

<br /><br /><br />

## ![✔] 8.5. Clean-up dependencies before production

**ยาวไปไม่อ่าน:** Although Dev-Dependencies are sometimes needed during the build and test life-cycle, eventually the image that is shipped to production should be minimal and clean from development dependencies. Doing so guarantees that only necessary code is shipped and the amount of potential attacks (i.e. attack surface) is minimized. When using multi-stage build (see dedicated bullet) this can be achieved by installing all dependencies first and finally running `npm ci --production`

**หรือไม่ก็:** Many of the infamous npm security breaches were found within development packages (e.g. [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes))

🔗 อ่านเพิ่มเติม: [Remove development dependencies](./sections/docker/install-for-production.md)

<br /><br /><br />

## ![✔] 8.6. Shutdown smartly and gracefully

**ยาวไปไม่อ่าน:** Handle the process SIGTERM event and clean-up all existing connection and resources. This should be done while responding to ongoing requests. In Dockerized runtimes shutting down containers is not a rare event, rather a frequent occurrence that happen as part of routine work. Achieving this demands some thoughtful code to orchestrate several moving parts: The load balancer, keep-alive connections, the HTTP server and other resources

**หรือไม่ก็:** Dying immediately means not responding to thousands of disappointed users

🔗 [**อ่านเพิ่มเติม: Graceful shutdown**](./sections/docker/graceful-shutdown.md)

<br /><br /><br />

## ![✔] 8.7. Set memory limits using both Docker and v8

**ยาวไปไม่อ่าน:** Always configure a memory limit using both Docker and the JavaScript runtime flags. The Docker limit is needed to make thoughtful container placement decision, the --v8's flag max-old-space is needed to kick off the GC on time and prevent under utilization of memory. Practically, set the v8's old space memory to be a just bit less than the container limit

**หรือไม่ก็:** The docker definition is needed to perform thoughtful scaling decision and prevent starving other citizens. Without also defining the v8's limits, it will under utilize the container resources - Without explicit instructions it crashes when utilizing ~50-60% of its host resources

🔗 [**อ่านเพิ่มเติม: Set memory limits using Docker only**](./sections/docker/memory-limit.md)

<br /><br /><br />

## ![✔] 8.8. Plan for efficient caching

**ยาวไปไม่อ่าน:** Rebuilding a whole docker image from cache can be nearly instantaneous if done correctly. The less updated instructions should be at the top of your Dockerfile and the ones constantly changing (like app code) should be at the bottom.

**หรือไม่ก็:** Docker build will be very long and consume lot of resources even when making tiny changes

🔗 [**อ่านเพิ่มเติม: Leverage caching to reduce build times**](./sections/docker/use-cache-for-shorter-build-time.md)

<br /><br /><br />

## ![✔] 8.9. Use explicit image reference, avoid `latest` tag

**ยาวไปไม่อ่าน:** Specify an explicit image digest or versioned label, never refer to `latest`. Developers are often led to believe that specifying the `latest` tag will provide them with the most recent image in the repository however this is not the case. Using a digest guarantees that every instance of the service is running exactly the same code.

In addition, referring to an image tag means that the base image is subject to change, as image tags cannot be relied upon for a deterministic install. Instead, if a deterministic install is expected, a SHA256 digest can be used to reference an exact image.

**หรือไม่ก็:** A new version of a base image could be deployed into production with breaking changes, causing unintended application behaviour.

🔗 [**อ่านเพิ่มเติม: Understand image tags and use the "latest" tag with caution**](./sections/docker/image-tags.md)

<br /><br /><br />

## ![✔] 8.10. Prefer smaller Docker base images

**ยาวไปไม่อ่าน:** Large images lead to higher exposure to vulnerabilities and increased resource consumption. Using leaner Docker images, such as Slim and Alpine Linux variants, mitigates this issue.

**หรือไม่ก็:** Building, pushing, and pulling images will take longer, unknown attack vectors can be used by malicious actors and more resources are consumed.

🔗 [**อ่านเพิ่มเติม: Prefer smaller images**](./sections/docker/smaller_base_images.md)

<br /><br /><br />

## ![✔] 8.11. Clean-out build-time secrets, avoid secrets in args

**ยาวไปไม่อ่าน:** Avoid secrets leaking from the Docker build environment. A Docker image is typically shared in multiple environment like CI and a registry that are not as sanitized as production. A typical example is an npm token which is usually passed to a dockerfile as argument. This token stays within the image long after it is needed and allows the attacker indefinite access to a private npm registry. This can be avoided by coping a secret file like `.npmrc` and then removing it using multi-stage build (beware, build history should be deleted as well) or by using Docker build-kit secret feature which leaves zero traces

**หรือไม่ก็:** Everyone with access to the CI and docker registry will also get access to some precious organization secrets as a bonus

🔗 [**อ่านเพิ่มเติม: Clean-out build-time secrets**](./sections/docker/avoid-build-time-secrets.md)

<br /><br /><br />

## ![✔] 8.12. Scan images for multi layers of vulnerabilities

**ยาวไปไม่อ่าน:** Besides checking code dependencies vulnerabilities also scan the final image that is shipped to production. Docker image scanners check the code dependencies but also the OS binaries. This E2E security scan covers more ground and verifies that no bad guy injected bad things during the build. Consequently, it is recommended running this as the last step before deployment. There are a handful of free and commercial scanners that also provide CI/CD plugins

**หรือไม่ก็:** Your code might be entirely free from vulnerabilities. However it might still get hacked due to vulnerable version of OS-level binaries (e.g. OpenSSL, TarBall) that are commonly being used by applications

🔗 [**อ่านเพิ่มเติม: Scan the entire image before production**](./sections/docker/scan-images.md)

<br /><br /><br />

## ![✔] 8.13 Clean NODE_MODULE cache

**ยาวไปไม่อ่าน:** After installing dependencies in a container remove the local cache. It doesn't make any sense to duplicate the dependencies for faster future installs since there won't be any further installs - A Docker image is immutable. Using a single line of code tens of MB (typically 10-50% of the image size) are shaved off

**หรือไม่ก็:** The image that will get shipped to production will weigh 30% more due to files that will never get used

🔗 [**อ่านเพิ่มเติม: Clean NODE_MODULE cache**](./sections/docker/clean-cache.md)

<br /><br /><br />

## ![✔] 8.14. Generic Docker practices

**ยาวไปไม่อ่าน:** This is a collection of Docker advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click อ่านเพิ่มเติม to skim through.

🔗 [**อ่านเพิ่มเติม: Generic Docker practices**](./sections/docker/generic-tips.md)

<br/><br /><br />

## ![✔] 8.15. Lint your Dockerfile

**ยาวไปไม่อ่าน:** Linting your Dockerfile is an important step to identify issues in your Dockerfile which differ from best practices. By checking for potential flaws using a specialised Docker linter, performance and security improvements can be easily identified, saving countless hours of wasted time or security issues in production code.

**หรือไม่ก็:** Mistakenly the Dockerfile creator left Root as the production user, and also used an image from unknown source repository. This could be avoided with with just a simple linter.

🔗 [**อ่านเพิ่มเติม: Lint your Dockerfile**](./sections/docker/lint-dockerfile.md)

<br/><br /><br />

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

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

<a id="josh-hemphill" href="https://github.com/josh-hemphill" target="_blank"><img src="assets/images/members/jhemphill.jpg" align="left" width="100" height="100" alt="Josh Hemphill" loading="lazy"/></a>

[Josh Hemphill](https://github.com/josh-hemphill)
<a href="https://twitter.com/spooklogical"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/joshuahemphill/"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>
<a href="https://joshuahemphill.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Full Stack Software Engineer / Developer specializing in Security, DevOps/DevSecOps, and ERP Integrations.

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

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"/></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"/></a> | <a href="https://github.com/rluvaton" target="_blank"><img src="assets/images/members/raz-luvaton.jpg" width="75" height="75" alt="Raz Luvaton" loading="lazy"/></a> |
| :----------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                    [Ido Richter (Founder)](https://github.com/idori)                                     |                                         [Keith Holliday](https://github.com/TheHollidayInn)                                         |                                                              [Raz Luvaton](https://github.com/rluvaton)                                                              |

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
    <td align="center"><a href="http://www.benjaminforster.com"><img src="https://avatars.githubusercontent.com/u/12589522?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin Forster</b></sub></a><br /><a href="#content-e-e-e" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/DanieleFedeli"><img src="https://avatars.githubusercontent.com/u/37077048?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniele Fedeli</b></sub></a><br /><a href="#content-DanieleFedeli" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/djob195"><img src="https://avatars.githubusercontent.com/u/17146669?v=4?s=100" width="100px;" alt=""/><br /><sub><b>djob195</b></sub></a><br /><a href="#content-djob195" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/antspk"><img src="https://avatars.githubusercontent.com/u/78955792?v=4?s=100" width="100px;" alt=""/><br /><sub><b>antspk</b></sub></a><br /><a href="#content-antspk" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://jjy0821.tistory.com/"><img src="https://avatars.githubusercontent.com/u/88075341?v=4?s=100" width="100px;" alt=""/><br /><sub><b>정진영</b></sub></a><br /><a href="#content-jjy821" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kkk-cashwalk"><img src="https://avatars.githubusercontent.com/u/91455122?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kkk-cashwalk</b></sub></a><br /><a href="#content-kkk-cashwalk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/apainintheneck"><img src="https://avatars.githubusercontent.com/u/42982186?v=4?s=100" width="100px;" alt=""/><br /><sub><b>apainintheneck</b></sub></a><br /><a href="#content-apainintheneck" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/koyanyaroo"><img src="https://avatars.githubusercontent.com/u/9715368?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fajar Budhi Iswanda</b></sub></a><br /><a href="#content-koyanyaroo" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jutiger"><img src="https://avatars.githubusercontent.com/u/97490806?v=4?s=100" width="100px;" alt=""/><br /><sub><b>이주호</b></sub></a><br /><a href="#content-jutiger" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->