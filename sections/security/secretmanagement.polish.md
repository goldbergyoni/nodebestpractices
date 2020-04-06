# Wyodrębnij dane wrażliwe z plików konfiguracyjnych lub użyj pakietu npm, który je szyfruje

### Wyjaśnienie jednym akapitem

Najczęstszym i bezpiecznym sposobem zapewnienia dostępu aplikacji Node.js do kluczy i kluczy tajnych jest przechowywanie ich przy użyciu zmiennych środowiskowych w systemie, w którym jest uruchomiona. Po ustawieniu można uzyskać do nich dostęp z globalnego obiektu `process.env`.
Testem lakmusowym sprawdzającym, czy aplikacja poprawnie skonfigurowała konfigurację z kodu, jest to, czy baza kodu może zostać w dowolnym momencie otwarta, bez narażania jakichkolwiek poświadczeń.

W rzadkich sytuacjach, w których tajemnice muszą być przechowywane w ramach kontroli źródła, za pomocą pakietu takiego jak [cryptr](https://www.npmjs.com/package/cryptr) pozwala na przechowywanie ich w postaci zaszyfrowanej w przeciwieństwie do zwykłego tekstu.

Istnieje wiele dostępnych narzędzi, które używają git commit do kontrolowania zatwierdzeń i wysyłania komunikatów w celu przypadkowego dodania sekretów, takich jak [git-secrets](https://github.com/awslabs/git-secrets).

### Przykład kodu

Dostęp do klucza API przechowywanego w zmiennej środowiskowej:

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

Użycie `cryptr` do przechowywania zaszyfrowanej danej wrażliwej:

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
 
let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');
 
console.log(accessToken);  // outputs decrypted string which was not stored in source control
```

### Co mówią inni blogerzy

> Env vars are easy to change between deploys without changing any code; unlike config files, there is little chance of them being checked into the code repo accidentally; and unlike custom config files, or other config mechanisms such as Java System Properties, they are a language- and OS-agnostic standard. [From: The 12 factor app](https://12factor.net/config)
