# Призначайте 'TransactionId' кожному записові логу

<br/><br/>

### Пояснення за один абзац

Типовий лог — це сховище записів з усіх компонентів і запитів. При виявленні якогось підозрілого рядка або помилки стає складно зіставити інші рядки, що належать до того ж конкретного потоку (наприклад, користувач "John" спробував щось купити). Це стає ще критичнішим і складнішим у середовищі мікросервісів, коли запит/транзакція може охоплювати кілька комп'ютерів. Вирішіть це, призначаючи унікальне значення ідентифікатора транзакції всім записам з того ж запиту, щоб при виявленні одного рядка можна було скопіювати id і шукати кожен рядок з подібним id транзакції. Однак досягнення цього в Node не є прямолінійним, оскільки один потік використовується для обслуговування всіх запитів — розгляньте використання бібліотеки, яка може групувати дані на рівні запиту — див. приклад коду нижче. При виклику інших мікросервісів передавайте id транзакції за допомогою HTTP заголовка, такого як "x-transaction-id", щоб зберегти той самий контекст.

<br/>

### Приклад коду: спільне використання TransactionId між функціями запиту та між сервісами за допомогою [async-local-storage](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage)

 **Що таке async-local-storage?** Ви можете думати про це як про Node альтернативу thread local storage. 
 По суті це сховище для асинхронних потоків у Node. Ви можете прочитати більше про це [тут](https://www.freecodecamp.org/news/async-local-storage-nodejs/).

```javascript
const express = require('express');
const { AsyncLocalStorage } = require('async_hooks');
const uuid = require('uuid/v4');

const asyncLocalStorage = new AsyncLocalStorage();

// Встановлюємо TransactionId вхідних запитів
const transactionIdMiddleware = (req, res, next) => {
    // Перший аргумент asyncLocalStorage.run — це ініціалізація стану сховища, другий аргумент — функція, яка має доступ до цього сховища
    asyncLocalStorage.run(new Map(), () => {
        // Спробуємо витягти TransactionId із заголовка запиту або генеруємо новий, якщо він не існує
        const transactionId = req.headers['transactionId'] || uuid();

        // Встановлюємо TransactionId всередині сховища
        asyncLocalStorage.getStore().set('transactionId', transactionId);
        
        // Викликаючи next() всередині функції, ми переконуємося, що всі інші middleware працюють у тому ж контексті AsyncLocalStorage 
        next();
    });
};

const app = express();
app.use(transactionIdMiddleware);

// Встановлюємо TransactionId вихідних запитів
app.get('/', (req, res) => {
    // Після ініціалізації TransactionId у middleware, він доступний у будь-якій точці потоку запиту
    const transactionId = asyncLocalStorage.getStore().get('transactionId');

    try {
        // Додаємо TransactionId як заголовок для передачі наступному сервісу
        const response = await axios.get('https://externalService.com/api/getAllUsers', headers: {
        'x-transaction-id': transactionId
        });
    } catch (err) {
        // Помилка передається до middleware, і немає потреби надсилати TransactionId
        next(err);
    }

    logger.info('externalService was successfully called with TransactionId header');

    res.send('OK');
});

// Middleware обробки помилок викликає logger
app.use(async (err, req, res, next) => {
    await logger.error(err);
});

// Logger тепер може додавати TransactionId до кожного запису, щоб записи з того ж запиту мали однакове значення
class logger {
    error(err) {
        console.error(`${err} ${asyncLocalStorage.getStore().get('transactionId')}`);
    }

    info(message) {
        console.log(`${message} ${asyncLocalStorage.getStore().get('transactionId')}`);
    }
}
```
<br/>

**ПРИМІТКА: є два обмеження на використання async-local-storage:**
1. Вимагає Node v.14. 
2. Базується на низькорівневій конструкції в Node під назвою async_hooks, яка все ще експериментальна, тому у вас може бути страх проблем з продуктивністю. Навіть якщо вони існують, вони дуже незначні, але ви повинні зробити власні висновки.

<br/>

<br/><br/>

### Добре: Логи з призначеним TransactionId — можуть використовуватися як фільтр для перегляду лише одного потоку
![alt text](https://i.ibb.co/YjJwgbN/logs-with-transaction-id.jpg "Логи з id транзакції")
<br/><br/>

### Погано: логи без TransactionId — немає можливості використовувати фільтр і бачити лише один потік, вам потрібно самостійно розуміти, які логи є релевантними серед усього "шуму" навколо
![alt text](https://i.ibb.co/PFgVNfn/logs-withtout-transaction-id.jpg "Логи з id транзакції")

<br/><br/>

### Цитата з блогу: "Концепція Correlation ID проста. Це значення, спільне для всіх запитів, повідомлень і відповідей у даній транзакції."

З [rapid7](https://blog.rapid7.com/2016/12/23/the-value-of-correlation-ids/)

> У старі часи, коли транзакційна поведінка відбувалася в одному домені, покроковими процедурами, відстеження поведінки запит/відповідь було простим завданням. Однак сьогодні один запит до конкретного домену може включати безліч подальших асинхронних запитів від початкового домену до інших. Наприклад, ви надсилаєте запит до Expedia, але за лаштунками Expedia пересилає ваш запит як повідомлення до брокера повідомлень. Потім це повідомлення споживається готелем, авіакомпанією та агентством оренди автомобілів, які також відповідають асинхронно. Тож виникає питання: якщо ваш один запит передається безлічі споживачів обробки, як ми відстежуємо транзакцію? Відповідь: використовуйте Correlation ID.

