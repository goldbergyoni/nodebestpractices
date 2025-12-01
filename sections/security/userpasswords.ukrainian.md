# Захистіть паролі ваших користувачів

### Пояснення за один абзац

**Завжди** хешуйте паролі користувачів замість зберігання їх як тексту; є три варіанти, які залежать від вашого випадку використання для хешування паролів користувачів. Всі наведені нижче функції повинні бути правильно реалізовані для забезпечення будь-якої безпеки. (Дивіться мінімуми або [рекомендації IETF](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) щодо параметрів для кожної) Ви повинні використовувати рекомендовані властивості як мінімум, використання вищих параметрів і комбінації, унікальної для вашої програми, може допомогти пом'якшити деяку шкоду, якщо хтось колись викраде ваші хеші паролів. Також завжди додавайте [сіль](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) (відтворювані дані, унікальні для користувача і вашої системи) до ваших паролів перед хешуванням.

  - Для більшості випадків використання можна використовувати популярну бібліотеку [`bcrypt`](https://www.npmjs.com/package/bcrypt). (мінімум: `cost:12`, довжина паролів повинна бути <64)
  - Для трохи складнішого нативного рішення або для паролів необмеженого розміру використовуйте функцію [`scrypt`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback). (мінімуми: `N:32768, r:8, p:1`)
  - Для відповідності FIPS/урядовим вимогам використовуйте старішу функцію [`PBKDF2`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback), включену в нативний crypto модуль. (мінімуми: `iterations: 10000, length:{salt: 16, password: 32}`)
  
(ПРИМІТКА: `Math.random()` **ніколи** не повинен використовуватися як частина генерації паролів або токенів через його передбачуваність. Дивіться [розширений розділ](#випадковість) для додаткової інформації)

### Приклад коду - Bcrypt

```javascript
const iterations = 12;
try {
// асинхронно генеруємо безпечний пароль
  const hash = await bcrypt.hash('myPassword', iterations);
  // Зберігаємо безпечний хеш у записі користувача

  // порівнюємо наданий ввід пароля зі збереженим хешем
  const match = await bcrypt.compare('somePassword', hash);
  if (match) {
   // Паролі збігаються
  } else {
   // Паролі не збігаються
  }
} catch {
  logger.error('could not hash password.')
}
```

### Приклад коду - SCrypt

```javascript
  const outSize = 64;
  const hash = crypto.scryptSync('myUnlimitedPassword','someUniqueUserValueForSalt',outSize).toString('hex');

  // Зберігаємо безпечний хеш у записі користувача

  // порівнюємо наданий ввід пароля зі збереженим хешем
  const match = hash === crypto.scryptSync('someUnlimitedPassword','derivedSalt',outSize).toString('hex');

  if (match) {
   // Паролі збігаються
  } else {
   // Паролі не збігаються
  }
```

### Приклад коду - PBKDF2 (Password-Based Key Derivation Function, Crypto Spec v2.1)

```javascript
try {
  const outSize = 64;
  const digest = 'blake2b512';
  const iterations = 12;
  const hash = crypto.pbkdf2Sync('myPassword','someUniqueUserValueForSalt', iterations * 1000, digest, outSize).toString('hex');

  // Зберігаємо безпечний хеш у записі користувача

  // порівнюємо наданий ввід пароля зі збереженим хешем
  const match = hash === crypto.pbkdf2Sync('somePassword','derivedSalt', iterations * 1000, digest, outSize).toString('hex');

  if (match) {
   // Паролі збігаються
  } else {
   // Паролі не збігаються
  }
} catch {
  logger.error('could not hash password.')
}
```

### Що кажуть інші блогери

З блогу [Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt):
> ...справа не лише у використанні правильного алгоритму хешування. Я багато говорив про те, як правильний інструмент також включає необхідний інгредієнт "часу" як частину алгоритму хешування пароля і що це означає для зловмисника, який намагається зламати паролі методом грубої сили.

З блогу [Troy Hunt - Творець HaveIBeenPwned.com](https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/):
> Повторення того, що паролі "зашифровані" знову і знову, не робить це правдою. Вони є bcrypt хешами, так що тут хороша робота, але той факт, що вони пропонують всім змінити пароль, ілюструє, що навіть хороше хешування має свої ризики.

### Розширений розділ та посилання

#### Алгоритми

При зберіганні паролів користувачів є кілька варіантів для розгляду залежно від пріоритету.

Всі наведені нижче алгоритми/функції повинні бути правильно реалізовані для забезпечення будь-якої безпеки. Будь ласка, дивіться [рекомендації IETF](https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html#name-kdf-recommendations) щодо параметрів для кожної.

Зовнішня залежність [`bcrypt`](https://www.npmjs.com/package/bcrypt) є найширше підтримуваною і повинна використовуватися, коли це можливо, оскільки при використанні `bcrypt` можна вказати кількість 'раундів' для забезпечення безпечного хешу.

Функція [`scrypt`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback), включена в нативний crypto модуль, може використовуватися, оскільки є незначним покращенням порівняно з `bcrypt`, дозволяючи паролі необмеженої довжини і не додаючи залежностей.

Якщо відповідність FIPS або іншим стандартам абсолютно необхідна, слід використовувати старішу функцію [`PBKDF2`](https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback), включену в нативний crypto модуль.

#### Соління

Незалежно від алгоритму/функції, завжди включайте якийсь рядок, унікальний для вашої системи і конкретного користувача. Деякі приклади можуть бути комбінацією імені користувача/userID і назви вашого додатку або email користувача і вашого бізнес email.

##### Навіщо використовувати сіль?

Додавання солі змінює хеш і таким чином робить його відмінним від хешу того ж пароля в чужій системі. Якщо хтось використовує той же пароль для кількох сайтів, і хеш їхнього пароля отримано з чужого витоку даних, вони не зможуть зіставити його з хешем у вашій базі даних.

#### Довжина пароля

Якщо ваш пароль плюс сіль повинні вміщатися в ліміт, і якщо ви використовуєте хорошу сіль, паролі ваших користувачів будуть ще більш обмеженими. Один спосіб обійти це — попередньо хешувати паролі. Якщо ви можете послідовно використовувати один простий хеш на фронтенді, ви можете налаштувати попередній хеш для генерації hex рядків точної довжини з пароля перед передачею на ваш сервер.

Приклад коду браузера: `const hash = crypto.subtle.digest('sha-256', password)`;

#### Випадковість

Коли можливо, залишайте генерацію випадковості алгоритмам, які ви обираєте. *Випадковість* — це особливий вид обмеженого ресурсу на комп'ютері, і зловживання нею може спричинити проблеми для вашої програми і навіть інших програм на машині.

#### Посилання

  - IETF - Рекомендації зберігання паролів: https://tools.ietf.org/id/draft-whited-kitten-password-storage-00.html
  - OWASP - Password Storage CheatSheet: https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md
  - auth0 - Що таке Password Salt: https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/
  - Troy Hunt - Різниця між хешуванням і шифруванням: https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/
  - Password Hashing Competition: https://password-hashing.net/

