[✔]: assets/images/checkbox-small-blue.png

# Boas Práticas em Node.js

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Boas Práticas em Node.js">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2073%20Best%20practices-blue.svg" alt="73 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20September%209%202018-green.svg" alt="Last update: September 9th, 2018"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.11.3%20LTS-brightgreen.svg" alt="Updated for Node 8.11.3 LTS">
</div>

<br/>

---

Este idioma ainda está em fase de tradução, quer ajudar?

---

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Siga-nos no Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Leia noutro idioma: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md) [(![ES](/assets/flags/ES.png)
**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, 
![RU](/assets/flags/RU.png)**RU**, ![TR](/assets/flags/TR.png)**TR** e ![pt-PT](/assets/flags/PT.png)**pt-PT** em 
progresso!)](#translations)

<br/>

###### Construído e mantido pelo nosso [Comité Diretivo](#comité-diretivo) e [Colaboradores](#colaboradores)

# Bem-vindo! 3 coisas que você deve saber primeiro:

**1. Ao ler este texto, de facto está a ler um apanhado dos melhores artigos sobre Node.js -** trata-se de um 
resumo do conteúdo melhor classificado sobre as melhores práticas em Node.js

**2. É a maior compilação e está a crescer a cada semana -** atualmente, são apresentadas mais de 50 práticas 
recomendadas, guias de estilo e dicas de arquitetura. Todos os dias são apresentadas novas questões e criados novos 
PRs para manter este livro vivo atualizado. Adoraríamos vê-lo contribuindo aqui, seja corrigindo algum erro de código
 ou sugerindo novas ideias brilhantes. Ver os nossos [marcos aqui](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open)

**3. A maioria dos tópicos contém informações adicionais -** em cada tópico encontra **🔗Mais informações** que o 
remeterá para exemplos de código, citações de blogs, e outras informações

<br/><br/><br/>

## Table of Contents

1.  [Estrutura do projeto (5)](#1-estrutura-do-projeto)
2.  [Tratamento de erros (11) ](#2-tratamento-de-erros)
3.  [Estilo de código (12) ](#3-estilo-de-código)
4.  [Teste e qualidade geral (11) ](#4-teste-e-qualidade-geral)
5.  [Entrar em produção (18) ](#5-entrar-em-produção)
6.  [Segurança (25)](#6-segurança)
7.  [Performance (1) (Em Progresso ✍️)](#7-performance)

<br/><br/><br/>

# `1. Estrutura do projeto`

## ![✔] 1.1 Organize o seu projeto em componentes

**TL;DR:** O pior obstáculo de grandes aplicações é manter uma enorme base de código com centenas de dependências - 
Tal monólito desacelera os programadores quando tentam incorporar novos recursos. Em vez disso, deve dividir o código
 em componentes, cada um na sua própria pasta ou numa base de código dedicada, e certifique-se que cada unidade seja 
 pequena e simples. Clique em 'Mais informações' abaixo para ver exemplos da estrutura correta do projeto.

**Caso contrário:** quando os programadores que codificam novos recursos tentam perceber o impacto das suas 
alterações e têm medo de quebrar outros componentes dependentes - as implementações tornam-se mais lentas e 
arriscadas. Também é mais difícil de escalar quando as unidades de negócios não estão separadas.

🔗 [**Mais informações: estrutura em componentes**](/sections/projectstructre/breakintcomponents.pt-PT.md)

<br/><br/>

## ![✔] 1.2 Organize os componentes em camadas, mantenha o Express dentro das suas responsabilidades

**TL;DR:** Cada componente deve conter camadas (layers) - um objeto dedicado à web, lógica e código de acesso a dados. 
Isso não apenas cria uma separação de responsabilidades bem definida, como também facilita significativamente o 
mocking e o teste do sistema. Embora esse seja um padrão muito comum, os programadores de APIs tendem a misturar 
camadas passando os objetos da camada da Web (Express req, res) para a lógica de negócios e camadas de dados - isso 
torna a aplicação dependente e acessível somente pelo Express.

**Caso contrário:** Aplicações que misturam objetos da web com outras camadas não podem ser acedidos pelo código de 
teste, CRON jobs e outros *callers* que não o Express.

🔗 [**Mais informações: organize a aplicação em camadas**](/sections/projectstructre/createlayers.pt-PT.md)

<br/><br/>

## ![✔] 1.3 Crie _packages_ NPM de utilitários comuns

**TL;DR:** Em aplicações grandes, os utilitários comuns que são necessários nas várias camadas, como o _logger_, 
criptografia e outros, devem ser disponibilizados em pacotes NPM privados. Isso permite partilhá-los entre vários 
projetos.

**Caso contrário:** terá que inventar a sua própria implantação e dependência.

🔗 [**Mais informações: estrutura por característica**](/sections/projectstructre/wraputilities.pt-PT.md)

<br/><br/>

## ![✔] 1.4 Separar o 'app' e o 'server' no Express

**TL;DR:** Evite o péssimo hábito de definir toda a aplicação [Express](https://expressjs.com/) num único ficheiro 
enorme - separe as suas definições do 'Express' em pelo menos dois ficheiros: a declaração da API (app.js) e as 
responsabilidades de rede (WWW). Para uma estrutura ainda melhor, defina a sua declaração da API nos componentes.

**Caso contrário:** a API ficará apenas acessível por meio de chamadas HTTP (mais lenta e muito mais difícil de 
gerar relatórios de cobertura). Provavelmente não será um grande prazer manter centenas de linhas de código num 
único arquivo.

🔗 [**Mais informações: separar o 'app' e 'server' no Express**](/sections/projectstructre/separateexpress.pt-PT.md)

<br/><br/>

## ![✔] 1.5 Use uma configuração de ambiente segura e hierárquica 

**TL;DR:** Uma configuração perfeita deve garantir que (a) as chaves podem ser lidas do ficheiro E da variável de 
ambiente (b) a informação sensível é mantidos fora do código onde são feitos _commits_ (c) a configuração é hierárquica 
para facilitar a sua localização. Existem alguns _packages_ que podem ajudar a lidar com a maioria desses pontos, 
tais como o [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf) e 
[config](https://www.npmjs.com/package/config)

**Caso contrário:** Não satisfazer qualquer um desses requisitos de configuração simplesmente atrapalhará a equipa
 de desenvolvimento ou devops. Provavelmente ambas.

🔗 [**Mais informações: boas práticas de configuração**](/sections/projectstructre/configguide.pt-PT.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Voltar ao início</a></p>

# `2. Tratamento de erros`

## ![✔] 2.1 Utilize o Async-Await ou promessas no tratamento de erros assíncronos

**TL;DR:** Tratar erros assíncronos com _callbacks_ é provavelmente o caminho mais rápido para o inferno (vulgo, _the
 pyramid of doom_). O melhor presente que pode oferecer ao seu código é usar uma biblioteca de promessas respeitável ou
  o async-await, que permite uma sintaxe de código muito mais compacta e familiar, como o try-catch.

**Caso contrário:** O estilo de _callback_ do Node.js, function(err, response), é uma forma inevitável para criar 
código de difícil de manter devido à mistura do tratamento do erro com o restante código, _nesting_ excessivo e 
padrões de código inadequados.

🔗 [**Mais informações: evitar _callbacks_**](/sections/errorhandling/asyncerrorhandling.pt-PT.md)

<br/><br/>

## ![✔] 2.2 Utilize apenas o objeto _Error_ interno

**TL;DR:** Muitas vezes são lançados erros com uma string ou com um tipo personalizado – isso complica a lógica de 
tratamento de erros e a interoperabilidade entre módulos. Quer rejeite uma promessa, lance uma exceção ou emita um 
erro – utilizar apenas o objeto _Error_ aumentará a uniformidade e evitará a perda de informações.

**Caso contrário:** Ao invocar algum componente, sendo incerto qual o tipo de erro que é devolvido – torna o tratamento
 de erros muito mais difícil. Além disso, usar tipos personalizados para descrever erros pode levar à perda de 
 informação de erros críticos, como o _stack trace_!

🔗 [**Mais informações: utilizar o objeto Error**](/sections/errorhandling/useonlythebuiltinerror.pt-PT.md)

<br/><br/>

## ![✔] 2.3 Distinguir os erros operacionais dos erros de programação

**TL;DR:** Os erros operacionais (por exemplo, a API recebe um pedido inválido) referem-se a casos conhecidos em que o 
impacto do erro é totalmente compreendido e pode ser tratado. Por outro lado, erros de programação (por exemplo, 
tentar ler uma variável não definida) refere-se a falhas de código desconhecidas que implicam a reinicialização da 
aplicação.

**Caso contrário:** Poderá sempre reiniciar a aplicação quando ocorre um erro, mas por que deixar ~5000 utilizadores 
"pendurados" devido a um pequeno erro operacional que podia ser previsto? O oposto também não é o ideal, ou seja, 
manter a aplicação ativa mesmo quando ocorre um problema desconhecido (erro de programação) pode causar um 
comportamento imprevisível. Diferenciar os dois tipos de erro permite planear o que apresentar ao utilizador e aplicar 
uma abordagem equilibrada baseada no contexto.

🔗 [**Mais informações: erro operacional vs programador**](/sections/errorhandling/operationalvsprogrammererror.pt-PT.md)

<br/><br/>

## ![✔] 2.4 Tratar os erros de forma centralizada, não dentro de um middleware Express

**TL;DR:** A lógica de tratamento de erros, como enviar emails para o administrador e _logging_, deve ser encapsulada
 num objeto dedicado e centralizado que todos os _endpoints_ (por exemplo, _middleware_ do Express, _cron jobs_, 
 testes unitários) invocam quando é recebido um erro.

**Caso contrário:** Não tratar os erros num único local levará à duplicação de código e, provavelmente, a erros 
tratados incorretamente.

🔗 [**Mais informações: tratar os erros num local centralizado**](/sections/errorhandling/centralizedhandling.pt-PT.md)

<br/><br/>

## ![✔] 2.5 Documentar erros da API com o Swagger ou GraphQL

**TL;DR:** Permita que os utilizadores da sua API saibam quais são os erros que podem ser retornados para que possam ser tratados e não causarem falhas. Para APIs RESTful geralmente é feito com frameworks de documentação REST API, como o Swagger. Se usar o GraphQL, também pode utilizar o seu esquema e comentários.

**Caso contrário:** Um cliente da API pode "rebentar" e reiniciar apenas porque lhe foi devolvido um erro que não 
consegue interpretar. Nota: o cliente da API pode ser você (muito comum num ambiente de microsserviços)

🔗 [**Mais informações: documentar erros no Swagger**](/sections/errorhandling/documentingusingswagger.pt-PT.md)

<br/><br/>

## ![✔] 2.6 Reiniciar o processo

**TL;DR:** Quando ocorre um erro desconhecido (um erro de programação, veja a boa prática #3) - não há certeza sobre a integridade da aplicação. Uma prática comum consiste em reiniciar o processo utilizando uma ferramenta como o [Forever](https://www.npmjs.com/package/forever) ou [PM2](http://pm2.keymetrics.io/).

**Caso contrário:** Quando uma exceção desconhecida é capturada, algum objeto pode ficar com o seu estado incorreto (por exemplo, um *event emitter* que é usado globalmente e que deixa de disparar eventos devido a alguma falha interna) e todas as requisições futuras podem falhar


🔗 [**Mais informações: Reiniciar o processo**](/sections/errorhandling/shuttingtheprocess.pt-PT.md)

<br/><br/>

## ![✔] 2.7 Use a mature logger to increase error visibility

**TL;DR:** A set of mature logging tools like Winston, Bunyan or Log4J, will speed-up error discovery and understanding. So forget about console.log

**Caso contrário:** Skimming through console.logs or manually through messy text file without querying tools or a decent log viewer might keep you busy at work until late

🔗 [**Mais informações: using a mature logger**](/sections/errorhandling/usematurelogger.pt-PT.md)

<br/><br/>

## ![✔] 2.8 Test error flows using your favorite test framework

**TL;DR:** Whether professional automated QA or plain manual developer testing – Ensure that your code not only satisfies positive scenario but also handle and return the right errors. Testing frameworks like Mocha & Chai can handle this easily (see code examples within the "Gist popup")

**Caso contrário:** Without testing, whether automatically or manually, you can’t rely on our code to return the right errors. Without meaningful errors – there’s no error handling

🔗 [**Mais informações: testing error flows**](/sections/errorhandling/testingerrorflows.pt-PT.md)

<br/><br/>

## ![✔] 2.9 Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge your codebase or API so they can automagically highlight errors, crashes and slow parts that you were missing

**Caso contrário:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which are your slowest code parts under real-world scenario and how these affect the UX

🔗 [**Mais informações: using APM products**](/sections/errorhandling/apmproducts.pt-PT.md)

<br/><br/>

## ![✔] 2.10 Catch unhandled promise rejections

**TL;DR:** Any exception thrown within a promise will get swallowed and discarded unless a developer didn’t forget to explicitly handle. Even if your code is subscribed to process.uncaughtException! Overcome this by registering to the event process.unhandledRejection

**Caso contrário:** Your errors will get swallowed and leave no trace. Nothing to worry about

🔗 [**Mais informações: catching unhandled promise rejection**](/sections/errorhandling/catchunhandledpromiserejection.pt-PT.md)

<br/><br/>

## ![✔] 2.11 Fail fast, validate arguments using a dedicated library

**TL;DR:** This should be part of your Express best practices – Assert API input to avoid nasty bugs that are much harder to track later. The validation code is usually tedious unless you are using a very cool helper library like Joi

**Caso contrário:** Consider this – your function expects a numeric argument “Discount” which the caller forgets to pass, later on, your code checks if Discount!=0 (amount of allowed discount is greater than zero), then it will allow the user to enjoy a discount. OMG, what a nasty bug. Can you see it?

🔗 [**Mais informações: failing fast**](/sections/errorhandling/failfast.pt-PT.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Voltar ao início</a></p>

# `3. Estilo de código`

## ![✔] 3.1 Use ESLint

**TL;DR:** [ESLint](https://eslint.org) is the de-facto standard for checking possible code errors and fixing code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. Though ESLint can automatically fix code styles, other tools like [prettier](https://www.npmjs.com/package/prettier) and [beautify](https://www.npmjs.com/package/js-beautify) are more powerful in formatting the fix and work in conjunction with ESLint

**Caso contrário:** Developers will focus on tedious spacing and line-width concerns and time might be wasted overthinking about the project's code style

🔗 [**Mais informações: Using ESLint and Prettier**](/sections/codestylepractices/eslint_prettier.pt-PT.md)

<br/><br/>

## ![✔] 3.2 Node.js Specific Plugins

**TL;DR:** On top of ESLint standard rules that cover vanilla JS only, add Node-specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Caso contrário:** Many faulty Node.js code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as path which allows attackers to execute any JS script. Node.js linters can detect such patterns and complain early

<br/><br/>

## ![✔] 3.3 Start a Codeblock's Curly Braces on the Same Line

**TL;DR:** The opening curly braces of a code block should be in the same line of the opening statement

### Code Example

```javascript
// Do
function someFunction() {
  // code block
}

// Avoid
function someFunction()
{
  // code block
}
```

**Caso contrário:** Deferring from this best practice might lead to unexpected results, as seen in the StackOverflow thread below:

🔗 [**Mais informações:** "Why does a results vary based on curly brace placement?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Don't Forget the Semicolon

**TL;DR:** While not unanimously agreed upon, it is still recommended to put a semicolon at the end of each statement. This will make your code more readable and explicit to other developers who read it

**Caso contrário:** As seen in the previous section, JavaScript's interpreter automatically adds a semicolon at the end of a statement if there isn't one which might lead to some undesired results

<br/><br/>

## ![✔] 3.5 Name Your Functions

**TL;DR:** Name all functions, including closures and callbacks. Avoid anonymous functions. This is especially useful when profiling a node app. Naming all functions will allow you to easily understand what you're looking at when checking a memory snapshot

**Caso contrário:** Debugging production issues using a core dump (memory snapshot) might become challenging as you notice significant memory consumption from anonymous functions

<br/><br/>

## ![✔] 3.6 Naming conventions for variables, constants, functions and classes

**TL;DR:** Use **_lowerCamelCase_** when naming constants, variables and functions and **_UpperCamelCase_** (capital first letter as well) when naming classes. This will help you to easily distinguish between plain variables/functions, and classes that require instantiation. Use descriptive names, but try to keep them short

**Caso contrário:** Javascript is the only language in the world which allows invoking a constructor ("Class") directly without instantiating it first. Consequently, Classes and function-constructors are differentiated by starting with UpperCamelCase

### Code Example

```javascript
// for class name we use UpperCamelCase
class SomeClassExample {}

// for const names we use the const keyword and lowerCamelCase
const config = {
  key: 'value'
};

// for variables and functions names we use lowerCamelCase
let someVariableExample = 'value';
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Prefer const over let. Ditch the var

**TL;DR:** Using `const` means that once a variable is assigned, it cannot be reassigned. Preferring const will help you to not be tempted to use the same variable for different uses, and make your code clearer. If a variable needs to be reassigned, in a for loop, for example, use `let` to declare it. Another important aspect of `let` is that a variable declared using it is only available in the block scope in which it was defined. `var` is function scoped, not block scoped, and [shouldn't be used in ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) now that you have const and let at your disposal

**Caso contrário:** Debugging becomes way more cumbersome when following a variable that frequently changes

🔗 [**Mais informações: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Requires come first, and not inside functions

**TL;DR:** Require modules at the beginning of each file, before and outside of any functions. This simple best practice will not only help you easily and quickly tell the dependencies of a file right at the top but also avoids a couple of potential problems

**Caso contrário:** Requires are run synchronously by Node.js. If they are called from within a function, it may block other requests from being handled at a more critical time. Also, if a required module or any of its own dependencies throw an error and crash the server, it is best to find out about it as soon as possible, which might not be the case if that module is required from within a function

<br/><br/>

## ![✔] 3.9 Do Require on the folders, not directly on the files

**TL;DR:** When developing a module/library in a folder, place an index.js file that exposes the module's
internals so every consumer will pass through it. This serves as an 'interface' to your module and eases
future changes without breaking the contract

**Caso contrário:** Changing the internal structure of files or the signature may break the interface with
clients

### Code example

```javascript
// Do
module.exports.SMSProvider = require('./SMSProvider');
module.exports.SMSNumberResolver = require('./SMSNumberResolver');

// Avoid
module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>

## ![✔] 3.10 Use the `===` operator

**TL;DR:** Prefer the strict equality operator `===` over the weaker abstract equality operator `==`. `==` will compare two variables after converting them to a common type. There is no type conversion in `===`, and both variables must be of the same type to be equal

**Caso contrário:** Unequal variables might return true when compared with the `==` operator

### Code example

```javascript
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```

All statements above will return false if used with `===`

<br/><br/>

## ![✔] 3.11 Use Async Await, avoid callbacks

**TL;DR:** Node 8 LTS now has full support for Async-await. This is a new way of dealing with asynchronous code which supersedes callbacks and promises. Async-await is non-blocking, and it makes asynchronous code look synchronous. The best gift you can give to your code is using async-await which provides a much more compact and familiar code syntax like try-catch

**Caso contrário:** Handling async errors in callback style is probably the fastest way to hell - this style forces to check errors all over, deal with awkward code nesting and make it difficult to reason about the code flow

🔗[**Mais informações:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use Fat (=>) Arrow Functions

**TL;DR:** Though it's recommended to use async-await and avoid function parameters when dealing with older API that accept promises or callbacks - arrow functions make the code structure more compact and keep the lexical context of the root function (i.e. 'this')

**Caso contrário:** Longer code (in ES5 functions) is more prone to bugs and cumbersome to read

🔗 [**Mais informações: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Voltar ao início</a></p>

# `4. Teste e qualidade geral`

## ![✔] 4.1 At the very least, write API (component) testing

**TL;DR:** Most projects just don't have any automated testing due to short timetables or often the 'testing project' run out of control and being abandoned. For that reason, prioritize and start with API testing which is the easiest to write and provide more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterward, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**Caso contrário:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Detect code issues with a linter

**TL;DR:** Use a code linter to check basic quality and detect anti-patterns early. Run it before any test and add it as a pre-commit git-hook to minimize the time needed to review and correct any issue. Also check [Section 3](https://github.com/i0natan/nodebestpractices#3-code-style-practices) on Code Style Practices

**Caso contrário:** You may let pass some anti-pattern and possible vulnerable code to your production environment.

🔗 [**Mais informações: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.pt-PT.md)

<br/><br/>

## ![✔] 4.3 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowadays, it became much easier to set up a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**Caso contrário:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**Mais informações: Choosing CI platform**](/sections/testingandquality/citools.pt-PT.md)

<br/><br/>

## ![✔] 4.4 Constantly inspect for vulnerable dependencies

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [nsp](https://github.com/nodesecurity/nsp) that can be invoked from your CI on every build

**Caso contrário:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

🔗 [**Mais informações: Avoid global test fixtures**](/sections/testingandquality/avoid-global-test-fixture.pt-PT.md)

<br/><br/>

## ![✔] 4.5 Tag your tests

**TL;DR:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**Caso contrário:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

<br/><br/>

## ![✔] 4.6 Check your test coverage, it helps to identify wrong test patterns

**TL;DR:** Code coverage tools like [Istanbul/NYC ](https://github.com/gotwarlost/istanbul)are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but not least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**Caso contrário:** There won't be any automated metric telling you when a large portion of your code is not covered by testing

<br/><br/>

## ![✔] 4.7 Inspect for outdated packages

**TL;DR:** Use your preferred tool (e.g. 'npm outdated' or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to detect installed packages which are outdated, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a severe scenario might be when an installed package is 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**Caso contrário:** Your production will run packages that have been explicitly tagged by their author as risky

<br/><br/>

## ![✔] 4.8 Use docker-compose for e2e testing

**TL;DR:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Docker-compose turns this problem into a breeze by crafting production-like environment using a simple text file and easy commands. It allows crafting all the dependent services, DB and isolated network for e2e testing. Last but not least, it can keep a stateless environment that is invoked before each test suite and dies right after

**Caso contrário:** Without docker-compose teams must maintain a testing DB for each testing environment including developers machines, keep all those DBs in sync so test results won't vary across environments

<br/><br/>

## ![✔] 4.9 Refactor regularly using static analysis tools

**TL;DR:** Using static analysis tools helps by giving objective ways to improve code quality and keep your code maintainable. You can add static analysis tools to your CI build to fail when it finds code smells. Its main selling points over plain linting are the ability to inspect quality in the context of multiple files (e.g. detect duplications), perform advanced analysis (e.g. code complexity) and follow the history and progress of code issues. Two examples of tools you can use are [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) and [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**Caso contrário:** With poor code quality, bugs and performance will always be an issue that no shiny new library or state of the art features can fix.

<br/><br/>

## ![✔] 4.10 Refactor regularly using static analysis tools

**TL;DR:** Using static analysis tools helps by giving objective ways to improve code quality and keeps your code maintainable. You can add static analysis tools to your CI build to fail when it finds code smells. Its main selling points over plain linting are the ability to inspect quality in the context of multiple files (e.g. detect duplications), perform advanced analysis (e.g. code complexity) and follow the history and progress of code issues. Two examples of tools you can use are [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) and [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**Otherwise:** With poor code quality, bugs and performance will always be an issue that no shiny new library or state of the art features can fix

🔗 [**Mais informações: Refactoring!**](/sections/testingandquality/refactoring.pt-PT.md)

<br/><br/>

## ![✔] 4.11 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowadays, it has become much easier to set up a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**Otherwise:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**Mais informações: Choosing CI platform**](/sections/testingandquality/citools.pt-PT.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Voltar ao início</a></p>

# `5. Entrar em produção`

## ![✔] 5.1. Monitoring!

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**Caso contrário:** Failure === disappointed customers. Simple

🔗 [**Mais informações: Monitoring!**](/sections/production/monitoring.pt-PT.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Caso contrário:** You end-up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Mais informações: Increase transparency using smart logging**](/sections/production/smartlogging.pt-PT.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**Caso contrário:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**Mais informações: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.pt-PT.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly npm lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using npm config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grain control use npm” shrinkwrap”. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Caso contrário:** QA will thoroughly test the code and approve a version that will behave differently at production. Even worse, different servers at the same production cluster might run different code

🔗 [**Mais informações: Lock dependencies**](/sections/production/lockdependencies.pt-PT.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenarios, ‘restarter’ tools like PM2 might be enough but in today ‘dockerized’ world – a cluster management tools should be considered as well

**Caso contrário:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to a DevOps chaos

🔗 [**Mais informações: Guard process uptime using the right tool**](/sections/production/guardprocess.pt-PT.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs on a single CPU core while all other are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Caso contrário:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**Mais informações: Utilize all CPU cores**](/sections/production/utilizecpu.pt-PT.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Caso contrário:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**Mais informações: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.pt-PT.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Caso contrário:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affects the UX

🔗 [**Mais informações: Discover errors and downtime using APM products**](/sections/production/apmproducts.pt-PT.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**Caso contrário:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**Mais informações: Make your code production-ready**](/sections/production/productioncode.pt-PT.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leaks memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large app consider baking your memory watch into a robust monitoring system

**Caso contrário:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Mais informações: Measure and guard the memory usage**](/sections/production/measurememory.pt-PT.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single threaded model

**Caso contrário:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**Mais informações: Get your frontend assets out of Node**](/sections/production/frontendout.pt-PT.md)

<br/><br/>

## ![✔] 5.12. Be stateless, kill your Servers almost every day

**TL;DR:** Store any type of data (e.g. users session, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Caso contrário:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**Mais informações: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.pt-PT.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can get easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Caso contrário:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

🔗 [**Mais informações: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.pt-PT.md)

<br/><br/>

## ![✔] 5.14. Assign ‘TransactionId’ to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due to its async nature, see code examples inside

**Caso contrário:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**Mais informações: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.pt-PT.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many npm packages determining the current environment and optimize their code for production

**Caso contrário:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes the slower by a factor of three!

🔗 [**Mais informações: Set NODE_ENV=production**](/sections/production/setnodeenv.pt-PT.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Researches show that teams who perform many deployments – lowers the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improves the deployment process. You should probably achieve that using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Caso contrário:** Long deployments -> production down time & human-related error -> team unconfident and in making deployment -> less deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**TL;DR:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**Otherwise:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**Mais informações: Use an LTS release of Node.js**](/sections/production/LTSrelease.pt-PT.md)

<br/><br/>

## ![✔] 5.18. Don't route logs within the app

**TL;DR:** Log destinations should not be hard-coded by developers within the application code, but instead should be defined by the execution environment the application runs in. Developers should write logs to `stdout` using a logger utility and then let the execution environment (container, server, etc.) pipe the `stdout` stream to the appropriate destination (i.e. Splunk, Graylog, ElasticSearch, etc.).

**Otherwise:** Application handling log routing === hard to scale, loss of logs, poor separation of concerns

🔗 [**Mais informações: Log Routing**](/sections/production/logrouting.pt-PT.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Voltar ao início</a></p>


# `6. Segurança`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="53 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible , at best  while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**Caso contrário:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories


🔗 [**Mais informações: Lint rules**](sections/security/lintrules.pt-PT.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, or (for smaller and less critical apps) a rate limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Caso contrário:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Mais informações: Implement rate limiting**](sections/security/limitrequests.pt-PT.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>


**TL;DR:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last result, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**Caso contrário:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).


🔗 [**Mais informações: Secret management**](sections/security/secretmanagement.pt-PT.md)

<br/><br/>


## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection agains injection attacks

**Caso contrário:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Mais informações: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.pt-PT.md)

<br/><br/>


## ![✔] 6.5. Collection of generic security best practices

**TL;DR:** These is a collection of security advice that are not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.


🔗 [**Mais informações: Common security best practices**](/sections/security/commonsecuritybestpractices.pt-PT.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**Caso contrário:** Attackers could perform direct attacks on your application's users, leading huge security vulnerabilities


🔗 [**Mais informações: Using secure headers in your application**](/sections/security/secureheaders.pt-PT.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**Caso contrário:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Mais informações: Dependency security**](/sections/security/dependencysecurity.pt-PT.md)

<br/><br/>


## ![✔] 6.8. Avoid using the Node.js crypto library for handling passwords, use Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>


**TL;DR:** Passwords or secrets (API keys) should be stored using a secure hash + salt function like `bcrypt`, that should be a preferred choice over its JavaScript implementation due to performance and security reasons.

**Caso contrário:** Passwords or secrets that are persisted without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Mais informações: Use Bcrypt**](/sections/security/bcryptpasswords.pt-PT.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly being referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**Caso contrário:** An attacker might store a malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Mais informações: Escape output**](/sections/security/escape-output.pt-PT.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validate the incoming requests' body payload and ensure it qualifies the expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**Caso contrário:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Mais informações: Validate incoming JSON schemas**](/sections/security/validation.pt-PT.md)

<br/><br/>


## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**Caso contrário:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.


🔗 [**Mais informações: Blacklist JSON Web Tokens**](/sections/security/expirejwt.pt-PT.md)

<br/><br/>


## ![✔] 6.12. Limit the allowed login requests of each user

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** A brute force protection middleware such as [express-brute](https://www.npmjs.com/package/express-brute) should be used inside an express application to prevent brute force/dictionary attacks on sensitive routes such as /admin or /login based on request properties such as the user name, or other identifiers such as body parameters

**Caso contrário:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Mais informações: Login rate limiting**](/sections/security/login-rate-limit.pt-PT.md)

<br/><br/>


## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this users' behalf by invoking the container with the flag "-u username"

**Caso contrário:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)


🔗 [**Mais informações: Run Node.js as non-root user**](/sections/security/non-root-user.pt-PT.md)

<br/><br/>


## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**Caso contrário:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks


🔗 [**Mais informações: Limit payload size**](/sections/security/requestpayloadsizelimit.pt-PT.md)

<br/><br/>


## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>


**TL;DR:** `eval` is evil as it allows executing  a custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to  malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**Caso contrário:** Malicious JavaScript code finds a way into a text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.


🔗 [**Mais informações: Avoid JavaScript eval statements**](/sections/security/avoideval.pt-PT.md)

<br/><br/>


## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**Caso contrário:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Mais informações: Prevent malicious RegEx**](/sections/security/regex.pt-PT.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>


**TL;DR:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**Caso contrário:** Malicious user input could find its way to a parameter that is used to require tampered files, for example a previously uploaded file on the filesystem, or access already existing system files.


🔗 [**Mais informações: Safe module loading**](/sections/security/safemoduleloading.pt-PT.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. cluster.fork()), serverless environment or dedicated npm packages that acting as a sandbox

**Caso contrário:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables


🔗 [**Mais informações: Run unsafe code in a sandbox**](/sections/security/sandbox.pt-PT.md)

<br/><br/>


## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**Caso contrário:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Mais informações: Be cautious when working with child processes**](/sections/security/childprocesses.pt-PT.md)

<br/><br/>


## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**Caso contrário:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Mais informações: Hide error details from client**](/sections/security/hideerrors.pt-PT.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**Caso contrário:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)


<br/><br/>

## ![✔] 6.22. Modify session middleware settings
<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>


**TL;DR:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**Caso contrário:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Mais informações: Cookie and session security**](/sections/security/sessions.pt-PT.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**Caso contrário:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**Otherwise:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Mais informações: Prevent unsafe redirects**](/sections/security/saferedirects.pt-PT.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

**Otherwise:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**Mais informações: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.pt-PT.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `7. Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/i0natan/nodebestpractices/issues/256)

## ![✔] 7.1. Prefer native JS methods over user-land utils like Lodash

 **TL;DR:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
 Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**Otherwise:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Mais informações: Native over user land utils**](/sections/performance/nativeoverutil.pt-PT.md)

<br/><br/><br/>

# Feitos

Para manter este guia e deixá-lo atualizado, estamos constantemente a atualizar e a aprimorar as diretrizes e as práticas recomendadas com a ajuda da comunidade. Você pode acompanhar o nossos [feitos](https://github.com/i0natan/nodebestpractices/milestones) e se juntar aos grupos de trabalho, caso queira contribuir neste projeto.

<br/>

## Traduções

Todas as traduções são contribuições da comunidade. Ficaremos felizes em ter ajuda com traduções finalizadas, em andamento, ou mesmo com novas traduções!

### Traduções concluídas

- ![BR](/assets/flags/BR.png) [Português Brasileiro](/README.brazilian-portuguese.md) - Cortesia de [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinês](README.chinese.md) - Cortesia de [Matt Jin](https://github.com/mattjin)

### Traduções em andamento

* ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
* ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
* ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
* ![RU](/assets/flags/RU.png) [Russian](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/105))
* ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
* ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))
* ![pt-PT](/assets/flags/PT.png) [Portuguese (Portugal)](https://github.com/SandroMiguel/nodebestpractices/blob/master/README.pt-PT.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/196))

<br/><br/><br/>

## Comité Diretivo

Conheça os membros do comité diretivo - as pessoas que trabalham juntas para fornecer orientação e direção futura para o projeto. Além disso, cada membro do comité lidera um projeto monitorado em [projetos do Github](https://github.com/i0natan/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/i0natan)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Consultor de Node.js independente, que trabalha com clientes nos EUA, Europa e Israel, na criação de aplicações Node dimensionáveis em grande escala. Muitas das melhores práticas acima foram inicialmente publicadas num post do seu blog em [goldbergyoni.com](https://goldbergyoni.com). Contacte-o em @goldbergyoni ou me@goldbergyoni.com

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer e entusiasta de Node.js & GraphQL

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer na Nova Zelândia, interessado ​​em segurança de aplicações Web, e arquitetando e construindo aplicações Node.js para execução em escala global.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Especialista em JavaScript e o seu ecossistema - React, Node.js, MongoDB, praticamente qualquer coisa que envolva o uso de JavaScript/JSON em qualquer camada do sistema - cria produtos usando a plataformas web para as mais reconhecidas marcas do mundo. Membro individual da "Node.js Foundation", colaborador na "Community Committee's Website Redesign Initiative".

<br/>

## Colaboradores

Obrigado a todos os colaboradores! 🙏

Os nossos colaboradores são membros que contribuem regularmente no repositório, sugerindo novas práticas recomendadas, realizam a triagem de problemas, analisam Pull Requests e muito mais. Se estiver interessado em nos ajudar a orientar milhares de pessoas a criar melhores aplicações Node.js, leia as nossas [diretrizes de colaborador](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :--: | :--: |
| [Ido Richter (Founder)](https://github.com/idori) | [Keith Holliday](https://github.com/TheHollidayInn) |

### Colaboradores anteriores

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :--: |
| [Refael Ackermann](https://github.com/refack) |

<br/>

# Notas de Agradecimento

Apreciamos qualquer contribuição, desde a correção de uma simples palavra até uma nova boa prática. Abaixo, segue a lista de todos os que contribuíram para este projeto. Uma 🌻 simboliza um Pull Request bem sucedido e uma ⭐ simboliza uma nova boa prática aprovada.

### Flores

🌻 [Kevin Rambaud](https://github.com/kevinrambaud),
🌻 [Michael Fine](https://github.com/mfine15),
🌻 [Shreya Dahal](https://github.com/squgeim),
🌻 [ChangJoo Park](https://github.com/ChangJoo-Park),
🌻 [Matheus Cruz Rocha](https://github.com/matheusrocha89),
🌻 [Yog Mehta](https://github.com/BitYog),
🌻 [Kudakwashe Paradzayi](https://github.com/kudapara),
🌻 [t1st3](https://github.com/t1st3),
🌻 [mulijordan1976](https://github.com/mulijordan1976),
🌻 [Matan Kushner](https://github.com/matchai),
🌻 [Fabio Hiroki](https://github.com/fabiothiroki),
🌻 [James Sumners](https://github.com/jsumners),
🌻 [Chandan Rai](https://github.com/crowchirp),
🌻 [Dan Gamble](https://github.com/dan-gamble),
🌻 [PJ Trainor](https://github.com/trainorpj),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Yoni Jah](https://github.com/yonjah),
🌻 [Misha Khokhlov](https://github.com/hazolsky),
🌻 [Evgeny Orekhov](https://github.com/EvgenyOrekhov),
🌻 [Gediminas Petrikas](https://github.com/gediminasml),
🌻 [Isaac Halvorson](https://github.com/hisaac),
🌻 [Vedran Karačić](https://github.com/vkaracic),
🌻 [lallenlowe](https://github.com/lallenlowe),
🌻 [Nathan Wells](https://github.com/nwwells),
🌻 [Paulo Vítor S Reis](https://github.com/paulovitin),
🌻 [syzer](https://github.com/syzer),
🌻 [David Sancho](https://github.com/davesnx),
🌻 [Robert Manolea](https://github.com/pupix),
🌻 [Xavier Ho](https://github.com/spaxe),
🌻 [Aaron Arney](https://github.com/ocularrhythm),
🌻 [Jan Charles Maghirang Adona](https://github.com/septa97),
🌻 [Allen Fang](https://github.com/AllenFang),
🌻 [Leonardo Villela](https://github.com/leonardovillela),
🌻 [Michal Zalecki](https://github.com/MichalZalecki)
🌻 [Chris Nicola](https://github.com/chrisnicola),
🌻 [Alejandro Corredor](https://github.com/aecorredor),
🌻 [Ye Min Htut](https://github.com/ymhtut),
🌻 [cwar](https://github.com/cwar),
🌻 [Yuwei](https://github.com/keyfoxth),
🌻 [Utkarsh Bhatt](https://github.com/utkarshbhatt12),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Sagir Khan](https://github.com/sagirk),
🌻 [Jason Kim](https://github.com/serv),
🌻 [Mitja O.](https://github.com/Max101),
🌻 [Sandro Miguel Marques](https://github.com/SandroMiguel),
🌻 [Gabe Kuslansky](https://github.com/GabeKuslansky),
🌻 [Ron Gross](https://github.com/ripper234),
🌻 [Valeri Karpov](https://github.com/vkarpov15)
🌻 [Sergio](https://github.com/imsergiobernal),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Nikola Telkedzhiev](https://github.com/ntelkedzhiev),
🌻 [Vitor Godoy](https://github.com/vitordagamagodoy),
🌻 [Manish Saraan](https://github.com/manishsaraan),
🌻 [Sangbeom Han](https://github.com/uronly14me),
🌻 [blackmatch](https://github.com/blackmatch),
🌻 [Joe Reeve](https://github.com/ISNIT0),
🌻 [Marcelo Melo](https://github.com/marcelosdm),
🌻 [Ryan Busby](https://github.com/BusbyActual),
🌻 [Iman Mohamadi](https://github.com/ImanMh),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Sergii Paryzhskyi](https://github.com/HeeL),
🌻 [Kapil Patel](https://github.com/kapilepatel),
🌻 [迷渡](https://github.com/justjavac),
🌻 [Hozefa](https://github.com/hozefaj),
🌻 [Ethan](https://github.com/el-ethan),
🌻 [Sam](https://github.com/milkdeliver),
🌻 [Arlind](https://github.com/ArlindXh),
🌻 [Teddy Toussaint](https://github.com/ttous),
🌻 [Lewis](https://github.com/LewisArdern),
🌻 [DouglasMV](https://github.com/DouglasMV),
🌻 [Corey Cleary](https://github.com/coreyc),
🌻 [Mehmet Perk](https://github.com/mperk),
🌻 [Ryan Ouyang](https://github.com/ryanouyang),
🌻 [Gabriel Lidenor](https://github.com/GabrielLidenor),
🌻 [Roman](https://github.com/animir),
🌻 [Francozeira](https://github.com/Francozeira),
🌻 [Invvard](https://github.com/Invvard),
🌻 [Rômulo Garofalo](https://github.com/romulogarofalo),
🌻 [Tho Q Luong](https://github.com/thoqbk),
🌻 [Burak Shen](https://github.com/Qeneke),
🌻 [Martin Muzatko](https://github.com/MartinMuzatko),
🌻 [zhuweiyou](https://github.com/zhuweiyou)

### Estrelas

⭐ [Kyle Martin](https://github.com/js-kyle),
⭐ [Keith Holliday](https://github.com/TheHollidayInn),
⭐ [Corey Cleary](https://github.com/coreyc),
⭐ [Maximilian Berkmann](https://github.com/Berkmann18),
⭐ [DouglasMV](https://github.com/DouglasMV),
⭐ [Marcelo Melo](https://github.com/marcelosdm),
⭐ [Mehmet Perk](https://github.com/mperk),
⭐ [Ryan Ouyang](https://github.com/ryanouyang)

<br/><br/><br/>
