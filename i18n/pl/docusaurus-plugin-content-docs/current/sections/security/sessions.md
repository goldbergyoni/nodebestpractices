# Zmodyfikuj domyślne ustawienia sesji oprogramowania pośredniego

<br/><br/>


### Wyjaśnienie jednym akapitem

Wiele popularnych programów pośrednich sesji nie stosuje ustawień najlepszych praktyk / bezpiecznych plików cookie po wyjęciu z box'a. Dostosowanie tych ustawień w stosunku do ustawień domyślnych zapewnia lepszą ochronę zarówno dla użytkownika, jak i aplikacji, poprzez zmniejszenie zagrożenia atakami, takimi jak przejęcie sesji i identyfikacja sesji.

Najczęstszym ustawieniem pozostawionym domyślnie jest sesja `name` - w `express-session` jest to `connect.sid`. Osoba atakująca może wykorzystać te informacje do zidentyfikowania podstawowej struktury aplikacji sieci Web, a także słabych punktów modułu. Zmiana tej wartości na inną niż domyślna utrudni określenie, który mechanizm sesji jest używany.

Również w `express-session` opcja `cookie.secure` jest ustawiona na wartość false jako wartość domyślna. Zmiana tej wartości na true ograniczy transport pliku cookie tylko do protokołu https, co zapewnia bezpieczeństwo przed atakami typu man-in-the-middle

<br/><br/>


### Przykład kodu: Setting secure cookie settings

```javascript
// using the express session middleware
app.use(session({  
  secret: 'youruniquesecret', // secret string used in the signing of the session ID that is stored in the cookie
  name: 'youruniquename', // set a unique name to remove the default connect.sid
  cookie: {
    httpOnly: true, // minimize risk of XSS attacks by restricting the client from reading the cookie
    secure: true, // only send cookie over https
    maxAge: 60000*60*24 // set cookie expiry length in ms
  }
}));
```

<br/><br/>


### Co mówią inni blogerzy

Z [bloga NodeSource](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/): 
> ...Express has default cookie settings that aren’t highly secure. They can be manually tightened to enhance security - for both an application and its user.*

<br/><br/>
