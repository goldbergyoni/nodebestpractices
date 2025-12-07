# Stale i automatycznie sprawdzaj podatne zależności

### Wyjaśnienie jednym akapitem

Większość aplikacji Node.js polega w dużej mierze na dużej liczbie modułów innych firm, npm lub Yarn, które są popularnymi rejestrami pakietów, ze względu na łatwość i szybkość programowania. Jednak wadą tej korzyści jest ryzyko związane z bezpieczeństwem wynikające z włączenia nieznanych luk w zabezpieczeniach aplikacji, które to ryzyko jest rozpoznawane po umieszczeniu go na liście najważniejszych zagrożeń bezpieczeństwa aplikacji internetowych OWASP.

Dostępnych jest wiele narzędzi pomagających w identyfikacji pakietów stron trzecich w aplikacjach Node.js, które zostały zidentyfikowane przez społeczność jako podatne na zagrożenia, w celu zmniejszenia ryzyka wprowadzenia ich do projektu. Można ich używać okresowo z narzędzi CLI lub dołączać jako część procesu kompilacji aplikacji.

### Spis treści

- [NPM audit](#npm-audit)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)

### NPM Audit

`npm audit` to nowe narzędzie cli wprowadzone z NPM@6.

Uruchomienie `npm audit` wygeneruje raport o słabych punktach bezpieczeństwa wraz z nazwą pakietu, istotnością i opisem podatności, ścieżką i innymi informacjami oraz, jeśli są dostępne, polecenia zastosowania łat w celu usunięcia luk.

![npm audit example](../../assets/images/npm-audit.png)

🔗 [Czytaj: NPM blog](https://docs.npmjs.com/getting-started/running-a-security-audit)

### Snyk

Snyk oferuje bogaty w funkcje interfejs CLI, a także integrację z GitHub. Snyk idzie dalej i oprócz powiadamiania o lukach, automatycznie tworzy również nowe pull requesty, usuwając luki w miarę wydawania łat na znane luki.

Bogata w funkcje strona internetowa Snyka pozwala również na ocenę ad-hoc zależności, jeśli jest dostarczana z repozytorium GitHub lub adresem URL modułu npm. Możesz także wyszukiwać pakiety npm, które mają luki bezpośrednio.

Przykład danych wyjściowych integracji Synk GitHub automatycznie utworzony pull request:
![synk GitHub example](../../assets/images/snyk.png)

🔗 [Czytaj: Snyk website](https://snyk.io/)

🔗 [Czytaj: Synk online tool to check npm packages and GitHub modules](https://snyk.io/test)

### Greenkeeper

Greenkeeper to usługa oferująca aktualizacje zależności w czasie rzeczywistym, która zapewnia bezpieczeństwo aplikacji, zawsze używając najbardziej aktualnych i poprawionych wersji zależności.

Greenkeeper śledzi zależności npm określone w pliku `package.json` repozytorium i automatycznie tworzy działającą gałąź przy każdej aktualizacji zależności. Następnie uruchamiany jest pakiet CI repozytorium w celu ujawnienia wszelkich przełomowych zmian w zaktualizowanej wersji zależności w aplikacji. Jeśli CI nie powiedzie się z powodu aktualizacji zależności, w repozytorium, które ma zostać auctioned, powstaje wyraźny i zwięzły problem, przedstawiający aktualne i zaktualizowane wersje pakietów, a także informacje i historię zatwierdzeń zaktualizowanej wersji.

Przykład danych wyjściowych integracji Greenkeeper GitHub tworzący automatycznie pull request:

![synk github example](../../assets/images/greenkeeper.png)
🔗 [Czytaj: Greenkeeper website](https://greenkeeper.io/)

### Dodatkowe źródła

🔗 [Rising Stack Blog: Node.js dependency risks](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Improving npm security](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)
