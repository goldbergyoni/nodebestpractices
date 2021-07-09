# Быстро проваливайтесь, проверяя аргументы, используя выделенную библиотеку

### Объяснение в один абзац

Мы все знаем, как важно проверять аргументы и быстро отказывать, чтобы избежать скрытых ошибок (см. пример кода анти-паттерна ниже). Если нет, прочитайте о явном программировании и защитном программировании. В действительности, мы склонны избегать этого из-за досадного кодирования (например, проверка правильности иерархического объекта JSON с полями, такими как электронная почта и даты) - библиотеки, такие как Joi и Validator, превращают эту утомительную задачу в бриз.

### Википедия: защитное программирование

Защитное программирование - это подход к улучшению программного обеспечения и исходного кода, с точки зрения общего качества - уменьшения количества программных ошибок и проблем. Делать исходный код понятным - исходный код должен быть читаемым и понятным, чтобы он был одобрен в ходе аудита кода. Заставить программное обеспечение вести себя предсказуемо, несмотря на неожиданные входные данные или действия пользователя.

### Пример кода: проверка сложного ввода JSON с помощью "Joi"

```javascript
var memberSchema = Joi.object().keys({
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});

function addNewMember(newMember) {
 // assertions come first
 Joi.assert(newMember, memberSchema); //throws if validation fails
 // other logic here
}
```



### Анти-шаблон: проверка не приводит к неприятным ошибкам

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// if the discount is positive let's then redirect the user to print his discount coupons
function redirectToPrintDiscount(httpResponse, member, discount) {
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}

redirectToPrintDiscount(httpResponse, someMember);
// forgot to pass the parameter discount, why the heck was the user redirected to the discount screen?
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// if the discount is positive let's then redirect the user to print his discount coupons
function redirectToPrintDiscount(httpResponse: Response, member: Member, discount: number) {
  if (discount != 0) {
    httpResponse.redirect(`/discountPrintView/${member.id}`);
  }
}

redirectToPrintDiscount(httpResponse, someMember, -12);
// We passed a negative parameter discount, why the heck was the user redirected to the discount screen?
```
</details>

### Цитата блога: "Вы должны немедленно выбросить эти ошибки"

Из блога: Джойент

> Вырожденный случай - это когда кто-то вызывает асинхронную функцию, но не передает обратный вызов. Вы должны немедленно выбросить эти ошибки, так как программа не работает, и наилучшая возможность отладки заключается в получении как минимум трассировки стека и, в идеале, файла ядра в точке ошибки. Для этого мы рекомендуем проверять типы всех аргументов в начале функции.
