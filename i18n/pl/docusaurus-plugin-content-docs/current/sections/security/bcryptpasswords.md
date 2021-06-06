# Unikaj używania biblioteki Crypto Node.js dla haseł, używaj Bcrypt

### Wyjaśnienie jednym akapitem

Podczas przechowywania haseł użytkowników zalecane jest użycie adaptacyjnego algorytmu haszującego, takiego jak bcrypt, oferowanego przez [bcrypt npm module](https://www.npmjs.com/package/bcrypt), w przeciwieństwie do korzystania z natywnego modułu kryptograficznego Node.js . `Math.random ()` również nie powinien być nigdy używany jako część generowania haseł lub tokenów ze względu na jego przewidywalność.

Moduł `bcrypt` lub podobny powinien być używany w przeciwieństwie do implementacji JavaScript, ponieważ podczas korzystania z `bcrypt` można określić kilka „rund” w celu zapewnienia bezpiecznego skrótu. Określa współczynnik pracy lub liczbę „rund”, dla których przetwarzane są dane, a więcej rund mieszających prowadzi do bezpieczniejszego skrótu (chociaż odbywa się to kosztem czasu procesora). Wprowadzenie rund mieszających oznacza, że czynnik brute force jest znacznie zmniejszony, ponieważ łamacze haseł są spowalniane, co zwiększa czas wymagany do wygenerowania jednej próby.

### Przykład kodu

```javascript
try {
// asynchronously generate a secure password using 10 hashing rounds
  const hash = await bcrypt.hash('myPassword', 10);
  // Store secure hash in user record

  // compare a provided password input with saved hash
  const match = await bcrypt.compare('somePassword', hash);
  if (match) {
   // Passwords match
  } else {
   // Passwords don't match
  } 
} catch {
  logger.error('could not hash password.')
}
```

### Co inni blogerzy mówią

Z bloga od [Max McCarty](https://dzone.com/articles/nodejs-and-password-storage-with-bcrypt):
> ... it’s not just using the right hashing algorithm. I’ve talked extensively about how the right tool also includes the necessary ingredient of “time” as part of the password hashing algorithm and what it means for the attacker who’s trying to crack passwords through brute-force.
