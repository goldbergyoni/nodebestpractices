# Zablokuj zależności

<br/><br/>

### Wyjaśnienie jednym akapitem

Twój kod zależy od wielu zewnętrznych pakietów, powiedzmy, że „wymaga” i używa momentjs-2.1.4, a następnie domyślnie po wdrożeniu do produkcji npm może pobrać momentjs 2.1.5, co niestety wprowadza kilka nowych błędów do tabeli. Użycie plików konfiguracyjnych npm i argumentu ``–save-exact = true`` instruuje npm, aby odwoływał się do *dokładnie* tej samej wersji, która została zainstalowana, więc gdy następnym razem uruchomisz ``npm install`` (w wersji produkcyjnej lub w kontenerze Docker, który planujesz wysłać do testowania), zostanie pobrana ta sama zależna wersja. Alternatywnym i popularnym podejściem jest użycie pliku `.shrinkwrap` (łatwego do wygenerowania przy użyciu npm), który dokładnie określa, które pakiety i wersje powinny zostać zainstalowane, aby żadne środowisko nie mogło ulec pokusie pobierania nowszych wersji niż oczekiwano.

* **Aktualizacja:** od npm 5 zależności są blokowane automatycznie przy użyciu .shrinkwrap. Yarn, nowy menedżer pakietów, domyślnie blokuje również zależności.

<br/><br/>

### Przykład kodu: plik .npmrc, który instruuje npm, aby używał dokładnych wersji

```npmrc
// save this as .npmrc file on the project directory
save-exact:true
```

<br/><br/>

### Przykład kodu: plik shrinkwrap.json, który destyluje dokładne drzewo zależności

```json
{
    "name": "A",
    "dependencies": {
        "B": {
            "version": "0.0.1",
            "dependencies": {
                "C": {
                    "version": "0.1.0"
                }
            }
        }
    }
}
```

<br/><br/>

### Przykład kodu: plik blokady zależności npm 5 – package.json

```json
{
    "name": "package-name",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "dependencies": {
        "cacache": {
            "version": "9.2.6",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
            "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
        },
        "duplexify": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
            "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
            "dependencies": {
                "end-of-stream": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
                    "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
                }
            }
        }
    }
}
```
