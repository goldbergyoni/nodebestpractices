# Unikaj ładowania modułu za pomocą zmiennej

### Wyjaśnienie jednym akapitem

Unikaj wymagania / importowania innego pliku ze ścieżką podaną jako parametr ze względu na obawy, że mógł on pochodzić z danych wejściowych użytkownika. Regułę tę można rozszerzyć w celu uzyskania ogólnego dostępu do plików (tj. `Fs.readFile()`) lub innych wrażliwych zasobów ze zmiennymi dynamicznymi pochodzącymi z danych wprowadzanych przez użytkownika.

### Przykład kodu

```javascript
// insecure, as helperPath variable may have been modified by user input
const badWayToRequireUploadHelpers = require(helperPath);

// secure
const uploadHelpers = require('./helpers/upload');
```
