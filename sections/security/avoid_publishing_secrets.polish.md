# Unikaj publikowania danych wrażliwych w rejestrze npm

### Wyjaśnienie jednym akapitem
Należy podjąć środki ostrożności, aby uniknąć ryzyka przypadkowego opublikowania danych wrażliwych w publicznych rejestrach npm. Plik `.npmignore` może być użyty do umieszczenia na czarnej liście określonych plików lub folderów, lub tablica `files` w `package.json` może działać jako biała lista.

Aby uzyskać widok tego, co publikacja npm naprawdę opublikuje w rejestrze, można dodać flagę `--dry-run` do polecenia npm opublikuj, aby zapewnić pełny widok utworzonego pakietu tarbell.

Ważne jest, aby pamiętać, że jeśli projekt wykorzystuje zarówno pliki `.npmignore`, jak i `.gitignore`, wszystko, czego nie ma w pliku .npmignore, jest publikowane w rejestrze (tzn. plik `.npmignore` zastępuje `.gitignore`). Ten stan jest powszechnym źródłem zamieszania i stanowi problem, który może prowadzić do ujawnienia danych wrażliwych. Deweloperzy mogą w końcu zaktualizować plik `.gitignore`, ale zapomnieć zaktualizować również` .npmignore`, co może doprowadzić do tego, że potencjalnie wrażliwy plik nie zostanie przekazany do kontroli źródła, ale nadal będzie zawarty w pakiecie npm.

### Przykład kodu
Example .npmignore file
```
# Tests
test
coverage

# Build tools
.travis.yml
.jenkins.yml

# Environment
.env
.config

```

Przykład zastosowania tablicy plików w package.json

```json
{ 
  "files" : [
    "dist/moment.js",
    "dist/moment.min.js"
  ]
}
```

### Co mówią inni blogerzy

Z bloga od [Liran Tal & Juan Picado at Snyk](https://snyk.io/blog/ten-npm-security-best-practices/):
> ... Another good practice to adopt is making use of the files property in package.json, which works as a whitelist and specifies the array of files to be included in the package that is to be created and installed (while the ignore file functions as a blacklist). The files property and an ignore file can both be used together to determine which files should explicitly be included, as well as excluded, from the package. When using both, the former the files property in package.json takes precedence over the ignore file.

Z [bloga npm](https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish)
> ... When you run npm publish, npm bundles up all the files in the current directory. It makes a few decisions for you about what to include and what to ignore. To make these decisions, it uses the contents of several files in your project directory. These files include .gitignore, .npmignore, and the files array in the package.json. It also always includes certain files and ignores others.
