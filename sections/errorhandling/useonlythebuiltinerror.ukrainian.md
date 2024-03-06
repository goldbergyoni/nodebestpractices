# Використовуйте лише вбудований об’єкт Error

### Пояснення за один абзац

Дозвільний характер JavaScript разом із різноманітністю параметрів потоку коду (наприклад, EventEmitter, Callbacks, Promises тощо) призводить до великої різниці в тому, як розробники викликають помилки – одні використовують рядки, інші визначають власні спеціальні типи. Використання вбудованого об’єкта Error Node.js допомагає підтримувати однорідність у вашому коді, а зі сторонніми бібліотеками також зберігається важлива інформація, як-от StackTrace. Під час виклику винятку зазвичай доцільно заповнити його додатковими контекстними властивостями, наприклад назвою помилки та пов’язаним кодом помилки HTTP. Щоб досягти цієї одноманітності та практики, розгляньте можливість розширення об’єкта Error додатковими властивостями, але будьте обережні, щоб не перестаратися. Загалом доцільно розширити вбудований об’єкт Error лише один раз за допомогою AppError для всіх помилок рівня програми та передавати будь-які дані, необхідні для розрізнення різних типів помилок, як аргументи. Немає потреби розширювати об’єкт Error кілька разів (по одному для кожного випадку помилки, наприклад DbError, HttpError) Перегляньте приклади коду нижче

### Приклад коду – як правильно це зробити

```javascript
// видає помилку функції, незалежно від того, синхронна чи асинхронна
if(!productToAdd)
    throw new Error('How can I add new product when no value provided?');

// "викидування" помилки від EventEmitter
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));

// 'викидування' помилка з обіцянки (Promise)
const addProduct = async (productToAdd) => {
  try {
    const existingProduct = await DAL.getProduct(productToAdd.id);
    if (existingProduct !== null) {
      throw new Error('Product already exists!');
    }
  } catch (err) {
    // ...
  }
}
```

### Приклад коду – антишаблон

```javascript
// викидання рядка не містить будь-якої інформації трасування стека та інших важливих властивостей даних
if(!productToAdd)
    throw ('How can I add new product when no value provided?');
```

### Приклад коду – зробити це ще краще

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// централізований об’єкт помилки, який походить від помилки вузла (Node’s Error)
function AppError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //...інші властивості
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports.AppError = AppError;

// клієнт створює виключення
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// централізований об’єкт помилки, який походить від помилки вузла (Node’s Error)
export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: HttpCode, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // відновити ланцюжок прототипів

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// клієнт створює виключення
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

*Пояснення щодо `Object.setPrototypeOf` у Typescript: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget*

### Цитата з блогу: «Я не бачу сенсу в наявності великої кількості різних типів»

У блозі Бен Надель посів 5 місце за ключовими словами «об’єкт помилки Node.js».

>…”Особисто я не бачу сенсу в наявності великої кількості різних типів об’єктів помилок [на відміну від того, щоб мати лише один] – JavaScript, як мова, схоже, не підтримує відлов помилок на основі конструктора. Таким чином, диференціювати властивість об’єкта здається набагато легшим, ніж диференціювати тип конструктора…

### Цитата з блогу: "Рядок не є помилкою"

У блозі devthought.com посів 6 місце за ключовими словами «об’єкт помилки Node.js»

> …передача рядка замість помилки призводить до зниження сумісності між модулями. Він розриває контракти з API, які можуть виконувати перевірку помилок `instanceof` або хочуть дізнатися більше про помилку. Об’єкти помилок, як ми побачимо, мають дуже цікаві властивості в сучасних двигунах JavaScript, окрім утримання повідомлення, переданого конструктору…

### Цитата з блогу: "Успадкування від Error не додає надто великої цінності"

From the blog machadogj

> …Одна проблема, яка у мене виникає з класом Error, полягає в тому, що його не так просто розширити. Звичайно, ви можете успадкувати клас і створити власні класи Error, наприклад HttpError, DbError тощо. Однак це потребує часу та не додає надто великої цінності [порівняно з одноразовим розширенням для AppError], якщо ви не робите щось з типами. Іноді ви просто хочете додати повідомлення та зберегти внутрішню помилку, а іноді ви можете розширити помилку параметрами тощо…

### Цитата з блогу: "Усі JavaScript і системні помилки, викликані Node.js, успадковуються від Error"

З офіційної документації Node.js

> …Усі JavaScript і системні помилки, викликані Node.js, успадковують або є екземплярами стандартного класу JavaScript Error і гарантовано надають принаймні властивості, доступні для цього класу. Загальний об’єкт JavaScript Error, який не вказує на будь-яку конкретну обставину, чому сталася помилка. Об’єкти Error фіксують «трасування стека», де деталізується точка в коді, де була створена помилка, і можуть надавати текстовий опис помилки. Усі помилки, згенеровані Node.js, у тому числі всі системні помилки та помилки JavaScript, будуть або екземплярами класу Error, або успадковані від нього…
