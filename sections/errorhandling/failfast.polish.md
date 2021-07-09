# Szybko się nie powiedzie, sprawdź poprawność argumentów za pomocą dedykowanej biblioteki

### Wyjaśnienie jednym akapitem

Wszyscy wiemy, jak sprawdzanie argumentów i szybkie niepowodzenie jest ważne, aby uniknąć ukrytych błędów (patrz przykład kodu anty-wzorca poniżej). Jeśli nie, przeczytaj o programowaniu jawnym i programowaniu defensywnym. W rzeczywistości staramy się go unikać ze względu na irytację związaną z jego kodowaniem (np. myśl o sprawdzeniu poprawności hierarchicznego obiektu JSON za pomocą pól takich jak e-mail i daty) - biblioteki takie jak Joi i Validator zmieniają to żmudne zadanie w bryłę.

### Wikipedia: Defensive Programming

Programowanie defensywne to podejście do ulepszania oprogramowania i kodu źródłowego pod względem ogólnej jakości - zmniejszające liczbę błędów oprogramowania i problemów. Uczynienie kodu źródłowego zrozumiałym - kod źródłowy powinien być czytelny i zrozumiały, aby został zatwierdzony podczas audytu kodu. Sprawiając, że oprogramowanie zachowuje się w przewidywalny sposób, pomimo nieoczekiwanych danych wejściowych lub działań użytkownika.

### Przykład kodu: sprawdzanie poprawności złożonego wejścia JSON przy użyciu ‘Joi’

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



### Antywzorzec: brak sprawdzania poprawności powoduje nieprzyjemne błędy

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

### Cytat z Bloga: "You should throw these errors immediately"

Z bloga: Joyent

 > A degenerate case is where someone calls an asynchronous function but doesn’t pass a callback. You should throw these errors immediately since the program is broken and the best chance of debugging it involves getting at least a stack trace and ideally a core file at the point of the error. To do this, we recommend validating the types of all arguments at the start of the function.
