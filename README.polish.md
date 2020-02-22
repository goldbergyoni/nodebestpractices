[✔]: assets/images/checkbox-small-blue.png

# Node.js - Najlepsze praktyki

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2085%20Best%20Practices-blue.svg" alt="85 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20November%2012%202019-green.svg" alt="Last update: Oct 12, 2019"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2012.12.0-brightgreen.svg" alt="Updated for Node 12.12.0">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Follow us on Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Przeczytaj także w innych językach: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md), [![BR](/assets/flags/BR.png)**BR**](/README.brazilian-portuguese.md), [![RU](/assets/flags/RU.png)**RU**](/README.russian.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR** and ![TR](/assets/flags/TR.png)**TR** in progress!)](#translations)

<br/>

###### Zbudowane i utrzymywane przez nasz [Steering Committee](#steering-committee) oraz [Collaborators](#collaborators)

# Najnowsze najlepsze praktyki i aktualności

- **✅ Nowa najlepsza praktyka:** 7.1: [Nie blokuj pętli zdarzeń](#7-draft-performance-best-practices) od Keith Holliday

- **🇷🇺 Rosyjskie tłumaczenie:** Niesamowity Alex Ivanov właśnie opublikował [rosyjskie tłumaczenie](/README.russian.md)

- **Szukamy autorów typescript:** chcesz pomóc w tworzeniu przykładów TypeScript? weź udział, otwierając issue

<br/><br/>

# Witamy! 3 rzeczy, które musisz wiedzieć na początku

**1. W rzeczywistości czytasz dziesiątki najlepszych artykułów na temat Node.js -** to repozytorium jest podsumowaniem i zbiorem najlepszych pozycji na temat najlepszych praktyk Node.js, a także treści napisanych tutaj przez współpracowników
**2. Jest to największa kompilacja, która rośnie z każdym tygodniem -** obecnie prezentowanych jest ponad 80 najlepszych praktyk, przewodników po stylach i wskazówek architektonicznych. Nowe wydania i pull requesty są tworzone codziennie, aby aktualizować tę książkę na żywo. Chcielibyśmy zobaczyć Twój wkład w to, czy to naprawiasz błędy w kodzie, pomagasz w tłumaczeniach, czy sugerujesz nowe genialne pomysły. Zobacz nasze [wskazówki dotyczące pisania tutaj] (/.Operations/writing-guidelines.md)

**3. Większość najlepszych praktyk ma dodatkowe informacje -** większość pocisków zawiera link **🔗Przeczytaj więcej**, który rozszerza praktykę o przykłady kodu, cytaty z wybranych blogów i więcej informacji
<br/><br/>

## Spis treści

1. [Praktyki dotyczące struktury projektu (5)](#1-project-structure-practices)
2. [Procedury obsługi błędów (11) ](#2-error-handling-practices)
3. [Praktyki stylu kodu (12) ](#3-code-style-practices)
4. [Testy i ogólne praktyki jakości (12) ](#4-testing-and-overall-quality-practices)
5. [Przejście do praktyk produkcyjnych (18) ](#5-going-to-production-practices)
6. [Praktyki bezpieczeństwa (25)](#6-security-best-practices)
7. [Praktyki wydajnościowe (2) (Work In Progress️ ✍️)](#7-draft-performance-best-practices)

<br/><br/>

# `1. Praktyki dotyczące struktury projektu`

## ![✔] 1.1 Skonstruuj swoje rozwiązanie według komponentów

**TL;DR:** Najgorszym problemem związanym z dużymi aplikacjami jest utrzymanie ogromnej bazy kodu z setkami zależności - taki monolit spowalnia programistów, którzy próbują wprowadzić nowe funkcje. Zamiast tego podziel kod na części, każdy otrzyma własny folder lub dedykowaną bazę kodów i zapewni, że każda jednostka będzie niewielka i prosta. Odwiedź „Czytaj więcej” poniżej, aby zobaczyć przykłady prawidłowej struktury projektu

**W przeciwnym razie:** Gdy programiści, którzy kodują nowe funkcje, walczą o uświadomienie sobie wpływu ich zmian i boją się zniszczyć inne zależne komponenty - wdrożenia stają się wolniejsze i bardziej ryzykowne. Trudniej jest także skalować, gdy wszystkie jednostki biznesowe nie są rozdzielone

🔗 [**Czytaj więcej: struktura według komponentów**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Nakładaj warstwy na komponenty, zachowując Express w granicach

**TL;DR:** Każdy komponent powinien zawierać „warstwy” - dedykowany obiekt dla sieci, logiki i kodu dostępu do danych. Nie tylko pozwala to na wyraźne oddzielenie problemów, ale także znacznie ułatwia drwiny i testowanie systemu. Chociaż jest to bardzo powszechny wzorzec, programiści API mają tendencję do mieszania warstw, przekazując obiekty warstwy internetowej (wymagania ekspresowe, res) do logiki biznesowej i warstw danych - dzięki temu aplikacja jest zależna i dostępna tylko przez Express

**W przeciwnym razie:** Nie można uzyskać dostępu do aplikacji, która miesza obiekty internetowe z innymi warstwami, testując kod, zadania CRON i inne obiekty wywołujące inne niż Express

🔗 [**Czytaj więcej: warstwa twojej aplikacji**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Opakuj typowe narzędzia jako pakiety npm

**TL;DR:** W dużej aplikacji, która stanowi dużą bazę kodu, kluczowe narzędzia, takie jak rejestrator, szyfrowanie i podobne, powinny być owinięte własnym kodem i udostępnione jako prywatne pakiety npm. Pozwala to na dzielenie się nimi między wieloma bazami kodów i projektami
**W przeciwnym razie:** Będziesz musiał wymyślić własne koło wdrażania i zależności

🔗 [**Czytaj więcej: Struktura według funkcji**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Oddzielna „aplikacja” i „serwer” Express

**TL;DR:** Unikaj nieprzyjemnego nawyku definiowania całości [Express](https://expressjs.com/) aplikacja w jednym dużym pliku - rozdziel definicję „Express” na co najmniej dwa pliki: deklarację API (app.js) i problemy z siecią (WWW). Aby uzyskać jeszcze lepszą strukturę, znajdź deklarację API w komponentach
**W przeciwnym razie:** Twój interfejs API będzie dostępny do testowania tylko za pośrednictwem połączeń HTTP (wolniejsze i znacznie trudniejsze do generowania raportów zasięgu). Utrzymanie setek linii kodu w jednym pliku prawdopodobnie nie będzie wielką przyjemnością
🔗 [**Czytaj więcej: oddzielna aplikacja „Express” i „serwer”**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Używaj konfiguracji przyjaznej środowisku, bezpiecznej i hierarchicznej

  **TL;DR:** Idealna i bezbłędna konfiguracja konfiguracji powinna zapewnić, że (a) klucze można odczytać z pliku ORAZ ze zmiennych środowiskowych (b) tajemnice są przechowywane poza zatwierdzonym kodem (c) konfiguracja jest hierarchiczna dla łatwiejszego wyszukiwania. Istnieje kilka pakietów, które mogą pomóc zaznaczyć większość z tych pól, takich jak [rc] (https://www.npmjs.com/package/rc), [nconf] (https://www.npmjs.com/package/nconf ) i [config] (https://www.npmjs.com/package/config)
  **W przeciwnym razie:** Failing to satisfy any of the config requirements will simply bog down the development or devops team. Probably both

🔗 [**Czytaj więcej: najlepsze praktyki dotyczące konfiguracji**](/sections/projectstructre/configguide.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

  # `2. Procedury obsługi błędów`

## ![✔] 2.1 Użyj Async-Await lub promises do obsługi błędów asynchronicznych

**TL;DR:** Obsługa błędów asynchronicznych w stylu wywołania zwrotnego jest prawdopodobnie najszybszą drogą do piekła (znane też jako Piramida zagłady). Najlepszy prezent, jaki możesz dać kodowi, to skorzystanie z renomowanej biblioteki obietnic lub async-czekaj zamiast tego, co umożliwia znacznie bardziej zwartą i znaną składnię kodu, taką jak try-catch
**W przeciwnym razie:** Node.js styl wywołania zwrotnego, funkcja (błąd, odpowiedź) jest obiecującym sposobem na niemożliwy do utrzymania kod ze względu na połączenie obsługi błędów z przypadkowym kodem, nadmiernym zagnieżdżaniem i niewygodnymi wzorcami kodowania

🔗 [**Czytaj więcej: avoiding callbacks**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Używaj tylko wbudowanego obiektu Error

**TL;DR:** Wiele z nich wyrzuca błędy jako ciąg znaków lub jako niestandardowy typ - komplikuje to logikę obsługi błędów i interoperacyjność między modułami. Niezależnie od tego, czy odrzucisz obietnicę, rzucisz wyjątek, czy wyślesz błąd - użycie tylko wbudowanego obiektu Error (lub obiektu, który rozszerza wbudowany obiekt Error) zwiększy jednolitość i zapobiegnie utracie informacji

**W przeciwnym razie:** Podczas wywoływania jakiegoś komponentu brak pewności, jaki rodzaj błędów w zamian wraca - znacznie utrudnia prawidłowe zarządzanie błędami. Co gorsza, używanie niestandardowych typów do opisywania błędów może prowadzić do utraty krytycznych informacji o błędach, takich jak ślad stosu!

🔗 [**Czytaj więcej: using the built-in error object**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Rozróżnij błędy operacyjne i programistyczne

**TL;DR:** Błędy operacyjne (np. API otrzymało niepoprawne dane wejściowe) odnoszą się do znanych przypadków, w których wpływ błędu jest w pełni zrozumiały i można go starannie rozpatrzyć. Z drugiej strony błąd programisty (np. Próba odczytania niezdefiniowanej zmiennej) odnosi się do nieznanych błędów kodu, które zmuszają do płynnego restartu aplikacji

**W przeciwnym razie:** Zawsze możesz ponownie uruchomić aplikację, gdy pojawi się błąd, ale dlaczego zawieść ~5000 użytkowników online z powodu drobnego, przewidywanego błędu operacyjnego? wręcz przeciwnie, nie jest też idealne - utrzymanie aplikacji w stanie, gdy wystąpi nieznany problem (błąd programisty), może prowadzić do nieprzewidzianego zachowania. Rozróżnienie tych dwóch pozwala działać taktownie i stosować zrównoważone podejście oparte na danym kontekście

🔗 [**Czytaj więcej: operational vs programmer error**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Obsługuj błędy centralnie, a nie w oprogramowaniu pośrednim Express

**TL;DR:** Obsługa błędów związanych z logiką, taką jak poczta do administratora i rejestrowanie, powinna być zamknięta w dedykowanym i scentralizowanym obiekcie, do którego wywoływane są wszystkie punkty końcowe (np. Express middleware, zadania cron, testy jednostkowe), gdy pojawia się błąd

**W przeciwnym razie:** Brak obsługi błędów w jednym miejscu prowadzi do duplikacji kodu i prawdopodobnie do nieprawidłowej obsługi błędów

🔗 [**Czytaj więcej: handling errors in a centralized place**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Dokumentuj błędy interfejsu API za pomocą Swagger lub GraphQL

**TL;DR:** Poinformuj osoby dzwoniące do interfejsu API, które błędy mogą w zamian otrzymać, aby mogły je starannie obsługiwać bez awarii. W przypadku interfejsów API RESTful odbywa się to zwykle w ramach dokumentacji takich jak Swagger. Jeśli korzystasz z GraphQL, możesz również wykorzystać swój schemat i komentarze.

**W przeciwnym razie:** Klient API może zdecydować o awarii i ponownym uruchomieniu tylko dlatego, że otrzymał błąd, którego nie mógł zrozumieć. Uwaga: osobą wywołującą interfejs API może być Ty (bardzo typowe w środowisku mikrousług)

🔗 [**Czytaj więcej: documenting API errors in Swagger or GraphQL**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Opuść ten proces z wdziękiem, gdy do miasta przyjedzie nieznajomy

**TL;DR:** Gdy wystąpi nieznany błąd (błąd programisty, patrz najlepsza praktyka 2.3) - nie ma pewności co do kondycji aplikacji. Powszechna praktyka sugeruje ostrożne ponowne uruchomienie procesu za pomocą narzędzia do zarządzania procesami, takiego jak [Forever](https://www.npmjs.com/package/forever) lub [PM2](http://pm2.keymetrics.io/)

**W przeciwnym razie:** Gdy wystąpi nieznany wyjątek, niektóre obiekty mogą znajdować się w stanie wadliwym (np. Emiter zdarzeń, który jest używany globalnie i nie uruchamia już zdarzeń z powodu pewnych wewnętrznych awarii), a wszystkie przyszłe żądania mogą zawieść lub zachowywać się szaleńczo

🔗 [**Czytaj więcej: shutting the process**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Użyj dojrzałego programu rejestrującego, aby zwiększyć widoczność błędów

**TL;DR:** Zestaw dojrzałych narzędzi do rejestrowania, takich jak [Winston] (https://www.npmjs.com/package/winston), [Bunyan] (https://github.com/trentm/node-bunyan), [Log4js] (http : //stritti.github.io/log4js/) lub [Pino] (https://github.com/pinojs/pino), przyspieszy wykrywanie błędów i zrozumienie. Więc zapomnij o console.log

**W przeciwnym razie:** Przeglądanie w pliku console.logs lub ręcznie przez niechlujny plik tekstowy bez korzystania z narzędzi zapytań lub porządnej przeglądarki dziennika może być zajęty w pracy do późna

🔗 [**Czytaj więcej: using a mature logger**](/sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Przepływy błędów testowych przy użyciu ulubionego środowiska testowego

**TL;DR:** Niezależnie od tego, czy jest to profesjonalna automatyczna kontrola jakości, czy zwykłe ręczne testowanie programisty - upewnij się, że Twój kod nie tylko spełnia pozytywne scenariusze, ale także obsługuje i zwraca odpowiednie błędy. Ramy testowe, takie jak Mocha i Chai, mogą sobie z tym poradzić (zobacz przykłady kodu w "Gist popup")

**W przeciwnym razie:** Bez testowania, automatycznie lub ręcznie, nie można polegać na kodzie, który zwraca prawidłowe błędy. Bez znaczących błędów - nie ma obsługi błędów

🔗 [**Czytaj więcej: testing error flows**](/sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Odkryj błędy i przestoje przy użyciu produktów APM

**TL;DR:** Produkty do monitorowania i wydajności (np. APM) proaktywnie oceniają twoją bazę kodu lub interfejs API, aby mogły automatycznie zaznaczać błędy, awarie i spowalniające brakujące części

**W przeciwnym razie:** Możesz poświęcić wiele wysiłku na pomiar wydajności interfejsu API i przestojów, prawdopodobnie nigdy nie będziesz wiedział, jakie są twoje najwolniejsze części kodu w rzeczywistym scenariuszu i jak wpływają one na UX

🔗 [**Czytaj więcej: using APM products**](/sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Złap nieobsługiwane odrzucenia promise

**TL;DR:** Każdy wyjątek zgłoszony w ramach obietnicy zostanie połknięty i odrzucony, chyba że programista nie zapomni o jawnej obsłudze. Nawet jeśli Twój kod jest subskrybowany w `process.uncaughtException`! Sforsuj to, rejestrując się na wydarzeniu `process.unhandledRejection`

**W przeciwnym razie:** Twoje błędy zostaną połknięte i nie pozostawiają śladu. Nie ma się o co martwić

🔗 [**Czytaj więcej: catching unhandled promise rejection**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Szybko się nie powiedzie, sprawdź poprawność argumentów za pomocą dedykowanej biblioteki

**TL;DR:** Powinno to być częścią najlepszych praktyk Express - Assert API, aby uniknąć nieprzyjemnych błędów, które później będą znacznie trudniejsze do wyśledzenia. Kod weryfikacyjny jest zwykle uciążliwy, chyba że używasz bardzo fajnej biblioteki pomocniczej, takiej jak Joi

**W przeciwnym razie:** Rozważ to - twoja funkcja oczekuje argumentu liczbowego „Rabat”, który wywołujący zapomina przekazać, a następnie kod sprawdza, czy Rabat! = 0 (kwota dozwolonego rabatu jest większa od zera), a następnie pozwoli użytkownikowi cieszyć się zniżka. OMG, co za paskudny błąd. Możesz to zobaczyć?

🔗 [**Czytaj więcej: failing fast**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Wróć na górę</a></p>

# `3. Praktyki stylu kodu`

## ![✔] 3.1 Użyj ESLint

**TL;DR:** [ESLint](https://eslint.org) jest de facto standardem sprawdzania możliwych błędów kodu i ustalania stylu kodu, nie tylko w celu zidentyfikowania drobiazgowych problemów z odstępami, ale także w celu wykrycia poważnych anty-wzorów kodu, takich jak programiści zgłaszający błędy bez klasyfikacji. Chociaż ESLint może automatycznie naprawiać style kodu, inne narzędzia, takie jak [ładniejsze] (https://www.npmjs.com/package/prettier) i [upiększyć] (https://www.npmjs.com/package/js-beautify) mają większą moc formatowania poprawki i współpracują z ESLint

**W przeciwnym razie:** Programiści skoncentrują się na żmudnych odstępach i problemach z szerokością linii, a czas może zostać zmarnowany na przemyślenie stylu kodu projektu

🔗 [**Czytaj więcej: Using ESLint and Prettier**](/sections/codestylepractices/eslint_prettier.md)

<br/><br/>

## ![✔] 3.2 Specyficzne wtyczki Node.js

**TL;DR:** Oprócz standardowych reguł ESLint obejmujących waniliowy JavaScript, dodaj wtyczki Node.js, takie jak [eslint-plugin-node] (https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin- mocha] (https://www.npmjs.com/package/eslint-plugin-mocha) i [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**W przeciwnym razie:** Wiele wadliwych wzorców kodu Node.js może uciekać pod radarem. Na przykład programiści mogą wymagać plików (zmiennaAsPath) ze zmienną podaną jako ścieżka, która umożliwia atakującym wykonanie dowolnego skryptu JS. Linters Node.js mogą wcześnie wykrywać takie wzorce i narzekać

<br/><br/>

## ![✔] 3.3 Uruchom nawiasy klamrowe Codeblock na tej samej linii

**TL;DR:** Nawiasy klamrowe otwierające bloku kodu powinny znajdować się w tym samym wierszu, co instrukcja otwierająca

### Przykład kodu

```javascript
// Do
function someFunction() {
  // code block
}

// Avoid
function someFunction()
{
  // code block
}
```

**W przeciwnym razie:** Odstąpienie od tej najlepszej praktyki może prowadzić do nieoczekiwanych rezultatów, jak widać w poniższym wątku StackOverflow:

🔗 [**Czytaj więcej:** "Why do results vary based on curly brace placement?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Oddziel swoje deklaracje poprawnie

Bez względu na to, czy używasz średników, czy też nie rozdzielasz swoich instrukcji, znajomość typowych pułapek niewłaściwych podziałów linii lub automatycznego wstawiania średników pomoże Ci wyeliminować regularne błędy składniowe.

**TL;DR:** Użyj ESLint, aby zyskać świadomość problemów związanych z separacją. [Ładniej](https://prettier.io/) lub [Standardjs](https://standardjs.com/) może automatycznie rozwiązać te issues.

**W przeciwnym razie:** Jak widać w poprzedniej sekcji, interpreter JavaScript automatycznie dodaje średnik na końcu instrukcji, jeśli nie istnieje, lub uważa instrukcję za niezakończoną tam, gdzie powinna, co może prowadzić do niepożądanych wyników. Możesz używać przypisań i unikać używania natychmiastowych wywoływanych wyrażeń funkcyjnych, aby zapobiec większości nieoczekiwanych błędów.

### Przykład kodu

```javascript
// Do
function doThing() {
    // ...
}

doThing()

// Do

const items = [1, 2, 3]
items.forEach(console.log)

// Avoid — throws exception
const m = new Map()
const a = [1,2,3]
[...m.values()].forEach(console.log)
> [...m.values()].forEach(console.log)
>  ^^^
> SyntaxError: Unexpected token ...

// Avoid — throws exception
const count = 2 // it tries to run 2(), but 2 is not a function
(function doSomething() {
  // do something amazing
}())
// put a semicolon before the immediate invoked function, after the const definition, save the return value of the anonymous function to a variable or avoid IIFEs alltogether
```

🔗 [**Czytaj więcej:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**Czytaj więcej:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Nazwij swoje funkcje

**TL;DR:** Nazwij wszystkie funkcje, w tym zamknięcia i połączenia zwrotne. Unikaj anonimowych funkcji. Jest to szczególnie przydatne podczas profilowania aplikacji węzła. Nazewnictwo wszystkich funkcji pozwoli ci łatwo zrozumieć, na co patrzysz podczas sprawdzania migawki pamięci

**W przeciwnym razie:** Debugowanie problemów produkcyjnych przy użyciu zrzutu pamięci (migawki pamięci) może stać się trudnym zadaniem, ponieważ zauważysz znaczne zużycie pamięci przez funkcje anonimowe

<br/><br/>

## ![✔] 3.6 Użyj konwencji nazewnictwa dla zmiennych, stałych, funkcji i klas

**TL;DR:** Użyj **_lowerCamelCase_** podczas nazywania stałych, zmiennych i funkcji oraz **_UpperCamelCase_** (również pierwsza litera) podczas nazywania klas. Pomoże Ci to łatwo odróżnić zwykłe zmienne / funkcje od klas wymagających tworzenia instancji. Używaj opisowych nazw, ale staraj się, aby były krótkie

**W przeciwnym razie:** JavaScript jest jedynym językiem na świecie, który umożliwia bezpośrednie wywoływanie konstruktora („klasy”) bez uprzedniego jego tworzenia. W konsekwencji klasy i konstruktory funkcji są zróżnicowane, zaczynając od UpperCamelCase

### 3.6 Przykład kodu

```javascript
// for class name we use UpperCamelCase
class SomeClassExample {}

// for const names we use the const keyword and lowerCamelCase
const config = {
  key: 'value'
};

// for variables and functions names we use lowerCamelCase
let someVariableExample = 'value';
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Wolę const nad let. Porzuć var

**TL;DR:** Używanie `const` oznacza, że po przypisaniu zmiennej nie można jej ponownie przypisać. Preferowanie `const` pomoże ci nie ulec pokusie użycia tej samej zmiennej do różnych zastosowań i sprawi, że twój kod będzie wyraźniejszy. Jeśli zmienna wymaga ponownego przypisania, na przykład w pętli for, użyj `let`, aby ją zadeklarować. Innym ważnym aspektem „let” jest to, że zmienna zadeklarowana przy użyciu tej zmiennej jest dostępna tylko w zakresie bloku, w którym została zdefiniowana. `var` ma zasięg działania, a nie blok, i [nie powinien być używany w ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) teraz masz `const` i `let` do Twojej dyspozycji

**W przeciwnym razie:** Debugowanie staje się znacznie bardziej kłopotliwe, gdy podąża się za często zmieniającą się zmienną

🔗 [**Czytaj więcej: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Wymagaj najpierw modułów, a nie funkcji wewnętrznych

**TL;DR:** Wymagaj modułów na początku każdego pliku, przed dowolnymi funkcjami i poza nimi. Ta prosta najlepsza praktyka nie tylko pomoże ci łatwo i szybko określić zależności pliku na samej górze, ale także pozwoli uniknąć kilku potencjalnych problemów

**W przeciwnym razie:** Wymagania są uruchamiane synchronicznie przez Node.js. Jeśli są wywoływane z funkcji, może blokować obsługę innych żądań w bardziej krytycznym momencie. Ponadto, jeśli wymagany moduł lub dowolna z jego zależności zgłasza błąd i powoduje awarię serwera, najlepiej dowiedzieć się o nim jak najszybciej, co może nie mieć miejsca, jeśli moduł ten jest wymagany z funkcji

<br/><br/>

## ![✔] 3.9 Wymagaj modułów według folderów, a nie bezpośrednio plików

**TL;DR:** Podczas opracowywania modułu / biblioteki w folderze umieść plik index.js, który ujawnia elementy wewnętrzne modułu, aby każdy konsument mógł przez niego przejść. Służy to jako „interfejs” do modułu i ułatwia przyszłe zmiany bez zerwania umowy

**W przeciwnym razie:** Zmiana wewnętrznej struktury plików lub podpisu może uszkodzić interfejs z klientami

### 3.9 Przykład kodu

```javascript
// Do
module.exports.SMSProvider = require('./SMSProvider');
module.exports.SMSNumberResolver = require('./SMSNumberResolver');

// Avoid
module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>

## ![✔] 3.10 Używaj operatora `===`

**TL;DR:** Preferuj operator ścisłej równości `===` zamiast słabszego abstrakcyjnego operatora równości `==`. `==` porówna dwie zmienne po przekształceniu ich we wspólny typ. W `===` nie ma konwersji typu i obie zmienne muszą być tego samego typu, aby były równe

**W przeciwnym razie:** Nierówne zmienne mogą zwracać wartość true w porównaniu z operatorem `==`

### 3.10 Przykład kodu

```javascript
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```

Wszystkie powyższe instrukcje zwrócą wartość false, jeśli zostaną użyte z `===`

<br/><br/>

## ![✔] 3.11 Użyj Async Await, unikaj połączeń zwrotnych

**TL;DR:** Node 8 LTS teraz ma pełne wsparcie dla Async-czekaj. Jest to nowy sposób radzenia sobie z kodem asynchronicznym, który zastępuje wywołania zwrotne i obiecuje. Oczekiwanie na asynchronizację nie jest blokowane i sprawia, że kod asynchroniczny wygląda na synchroniczny. Najlepszym prezentem, jaki możesz dać kodowi, jest użycie funkcji async-czekaj, która zapewnia znacznie bardziej zwartą i znaną składnię kodu, taką jak try-catch

**W przeciwnym razie:** Obsługa błędów asynchronicznych w stylu wywołania zwrotnego jest prawdopodobnie najszybszą drogą do piekła - ten styl zmusza do sprawdzania błędów, radzenia sobie z dziwnym zagnieżdżaniem kodu i utrudnia uzasadnienie przepływu kodu

🔗[**Czytaj więcej:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use arrow function expressions (=>)

**TL;DR:** Chociaż zaleca się stosowanie asynchronicznego oczekiwania i unikania parametrów funkcji w przypadku starszych interfejsów API, które akceptują obietnice lub wywołania zwrotne - funkcje strzałek sprawiają, że struktura kodu jest bardziej zwarta i zachowuje kontekst leksykalny funkcji root (np. `this`)

**W przeciwnym razie:** Dłuższy kod (w funkcjach ES5) jest bardziej podatny na błędy i trudny do odczytania

🔗 [**Czytaj więcej: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `4. Testy i ogólne praktyki jakości`

## ![✔] 4.1 Przynajmniej napisz testowanie API (komponentu)

**TL;DR:** Większość projektów po prostu nie ma żadnych automatycznych testów z powodu krótkich harmonogramów lub często „projekt testowy” wymykał się spod kontroli i został porzucony. Z tego powodu ustal priorytetyzację i zacznij od testowania interfejsu API, który jest najłatwiejszym sposobem pisania i zapewnia większy zasięg niż testowanie jednostkowe (możesz nawet tworzyć testy API bez kodu za pomocą narzędzi takich jak [Postman] (https://www.getpostman.com/ Następnie, jeśli masz więcej zasobów i czasu, kontynuuj zaawansowane typy testów, takie jak testy jednostkowe, testy DB, testy wydajności itp.

**W przeciwnym razie:** Możesz spędzać długie dni na pisaniu testów jednostkowych, aby dowiedzieć się, że masz tylko 20% zasięgu systemu

<br/><br/>

## ![✔] 4.2 Dołącz 3 części do każdej nazwy testu

**TL;DR:** Spraw, aby test mówił na poziomie wymagań, aby był zrozumiały również dla inżynierów i programistów kontroli jakości, którzy nie znają wewnętrznych elementów kodu. Podaj w nazwie testu, co jest testowane (testowana jednostka), w jakich okolicznościach i jaki jest oczekiwany wynik

**W przeciwnym razie:** Wdrożenie właśnie nie powiodło się, test o nazwie „Dodaj produkt” nie powiódł się. Czy to mówi ci, co dokładnie działa nieprawidłowo?

🔗 [**Czytaj więcej: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Testy struktury według wzorca AAA

**TL;DR:** Ustrukturyzuj swoje testy za pomocą 3 dobrze oddzielonych sekcji: Arrange, Act & Assert (AAA). Pierwsza część obejmuje konfigurację testu, następnie wykonanie testowanego urządzenia i wreszcie fazę asercji. Przestrzeganie tej struktury gwarantuje, że czytelnik nie poświęci procesora mózgu na zrozumienie planu testu

**W przeciwnym razie:** Nie tylko spędzasz długie codzienne godziny na zrozumieniu głównego kodu, ale także to, co powinno być prostą częścią dnia (testowanie) rozciąga Twój mózg

🔗 [**Czytaj więcej: Structure tests by the AAA pattern**](/sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Wykryj problemy z kodem za pomocą lintera

**TL;DR:** Użyj lintera kodu, aby sprawdzić podstawową jakość i wcześnie wykryć anty-wzory. Uruchom go przed jakimkolwiek testem i dodaj jako git-hook przed zatwierdzeniem, aby zminimalizować czas potrzebny na sprawdzenie i naprawienie dowolnego problemu. Sprawdź także [Część 3] (# 3-style-stylowe praktyki) w części Praktyki stylu kodu

**W przeciwnym razie:** Możesz przekazać kod anty-wzorcowy i potencjalnie podatny na atak do środowiska produkcyjnego.

<br/><br/>

## ![✔] 4.5 Unikaj globalnych urządzeń testowych i nasion, dodawaj dane na test

**TL;DR:** Aby zapobiec sprzężeniu testów i łatwo uzasadnić przebieg testu, każdy test powinien dodawać i działać na swoim własnym zestawie wierszy DB. Ilekroć test wymaga wyciągnięcia lub założenia istnienia niektórych danych DB - musi jawnie dodać te dane i unikać mutowania jakichkolwiek innych rekordów

**W przeciwnym razie:** Rozważmy scenariusz, w którym wdrożenie zostało przerwane z powodu nieudanych testów, zespół zamierza teraz poświęcić cenny czas na dochodzenie, który kończy się smutnym wnioskiem: system działa dobrze, testy jednak przeszkadzają sobie nawzajem i przerywają kompilację

🔗 [**Czytaj więcej: Avoid global test fixtures**](/sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Nieustannie sprawdzaj wrażliwe zależności

**TL;DR:** Nawet najbardziej renomowane zależności, takie jak Express, mają znane luki w zabezpieczeniach. Można to łatwo oswoić za pomocą narzędzi społecznościowych i komercyjnych, takich jak 🔗 [npm audit] (https://docs.npmjs.com/cli/audit) i 🔗 [snyk.io] (https://snyk.io), które mogą być wywoływane z twojego CI na każdej kompilacji

**W przeciwnym razie:** Utrzymywanie kodu w czystości przed lukami bez dedykowanych narzędzi będzie wymagało ciągłego śledzenia publikacji online na temat nowych zagrożeń. Dość nudne

<br/><br/>

## ![✔] 4.7 Oznacz swoje testy

**TL;DR:** Różne testy muszą być uruchamiane w różnych scenariuszach: szybki dym, bez we / wy, testy powinny być uruchamiane, gdy programista zapisuje lub zatwierdza plik, pełne kompleksowe testy zwykle uruchamiane są po przesłaniu nowego żądania ściągnięcia itp. Można to osiągnąć poprzez oznaczenie testów słowami kluczowymi takimi jak #cold #api #sanity, aby można było grepować za pomocą uprzęży testującej i wywołać pożądany podzbiór. Na przykład w ten sposób można wywoływać tylko grupę testową rozsądku [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**W przeciwnym razie:** Uruchamianie wszystkich testów, w tym testów, które wykonują dziesiątki zapytań DB, za każdym razem, gdy programista wprowadzi małą zmianę, może to być bardzo powolne i powstrzymuje programistów przed uruchomieniem testów

<br/><br/>

## ![✔] 4.8 Sprawdź zasięg testu, pomaga zidentyfikować nieprawidłowe wzorce testowe

**TL;DR:** Narzędzia pokrycia kodu, takie jak [Istanbul] (https://github.com/istanbuljs/istanbuljs) / [NYC] (https://github.com/istanbuljs/nyc) są świetne z 3 powodów: przychodzi za darmo (bez wysiłku jest niezbędny do skorzystania z tych raportów), pomaga zidentyfikować zmniejszenie zasięgu testowania, a na koniec podkreśla niedopasowania testowania: patrząc na kolorowe raporty pokrycia kodu można zauważyć, na przykład, obszary kodu, które nigdy nie są testowane jak catch klauzule (co oznacza, że testy wywołują tylko szczęśliwe ścieżki, a nie zachowanie aplikacji w przypadku błędów). Ustaw na niepowodzenia kompilacji, jeśli zasięg spadnie poniżej określonego progu

**W przeciwnym razie:** Nie będzie żadnych zautomatyzowanych danych informujących, kiedy duża część kodu nie jest objęta testowaniem

<br/><br/>

## ![✔] 4.9 Sprawdź nieaktualne pakiety

**TL;DR:** Użyj preferowanego narzędzia (np. „Npm przestarzałe” lub [npm-check-updates] (https://www.npmjs.com/package/npm-check-updates), aby wykryć zainstalowane pakiety, które są nieaktualne, wstrzyknij to Potok CI, a nawet awaria kompilacji w trudnym scenariuszu. Na przykład poważnym scenariuszem może być sytuacja, gdy zainstalowany pakiet ma 5 łatek zatwierdzeń (np. Wersja lokalna to 1.3.1, a wersja repozytorium to 1.3.8) lub jest oznaczony jako przestarzałe przez jego autora - zabij kompilację i uniemożliwi wdrożenie tej wersji

**W przeciwnym razie:** Produkcja będzie uruchamiać pakiety, które zostały wyraźnie oznaczone przez autora jako ryzykowne

<br/><br/>

## ![✔] 4.10 Do testowania e2e używaj env zbliżonego do produkcji

**TL;DR:** Testy end-to-end (e2e), które obejmują dane na żywo, były najsłabszym ogniwem procesu CI, ponieważ zależy to od wielu ciężkich usług, takich jak DB. Skorzystaj ze środowiska, które jest jak najbardziej zbliżone do Twojej rzeczywistej produkcji, jak a-continue

**W przeciwnym razie:** Bez zespołów tworzących dokery muszą utrzymywać testową bazę danych dla każdego środowiska testowego, w tym na komputerach programistów, synchronizuj wszystkie te bazy danych, aby wyniki testów nie różniły się w zależności od środowiska

<br/><br/>

## ![✔] 4.11 Refaktoryzuj regularnie za pomocą narzędzi do analizy statycznej

**TL;DR:** Korzystanie z narzędzi analizy statycznej pomaga, zapewniając obiektywne sposoby poprawy jakości kodu i utrzymując kod w łatwości konserwacji. Możesz dodać narzędzia analizy statycznej do kompilacji CI, aby zawieść, gdy wykryje zapach kodu. Jego głównymi zaletami w stosunku do zwykłego szarpania jest możliwość kontroli jakości w kontekście wielu plików (np. Wykrywanie duplikacji), przeprowadzania zaawansowanej analizy (np. Złożoności kodu) oraz śledzenia historii i postępu problemów z kodem. Dwa przykłady narzędzi, których możesz użyć, to [Sonarqube] (https://www.sonarqube.org/) (2600+ [gwiazdek] (https://github.com/SonarSource/sonarqube)) i [Code Climate] (https : //codeclimate.com/) (1500+ [gwiazdek] (https://github.com/codeclimate/codeclimate)).

**W przeciwnym razie:** Przy złej jakości kodu błędy i wydajność zawsze będą stanowić problem, którego nie będzie w stanie naprawić żadna nowa błyszcząca biblioteka ani najnowocześniejsze funkcje

🔗 [**Czytaj więcej: Refactoring!**](/sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 Ostrożnie wybierz swoją platformę CI (Jenkins vs CircleCI vs Travis vs Reszta świata)

**TL;DR:** Twoja platforma ciągłej integracji (CICD) będzie hostować wszystkie narzędzia wysokiej jakości (np. Test, strzępki), więc powinna mieć żywy ekosystem wtyczek. [Jenkins] (https://jenkins.io/) był domyślny dla wielu projektów, ponieważ ma największą społeczność wraz z bardzo potężną platformą w cenie złożonej konfiguracji, która wymaga stromej krzywej uczenia się. Obecnie znacznie łatwiej jest skonfigurować rozwiązanie CI za pomocą narzędzi SaaS, takich jak [CircleCI] (https://circleci.com) i innych. Narzędzia te umożliwiają stworzenie elastycznego potoku CI bez konieczności zarządzania całą infrastrukturą. Ostatecznie jest to kompromis między wytrzymałością a szybkością - wybierz stronę ostrożnie

**W przeciwnym razie:** Wybranie jakiegoś niszowego dostawcy może spowodować zablokowanie użytkownika, gdy będzie potrzebne zaawansowane dostosowanie. Z drugiej strony pójście z Jenkinsem może skrócić cenny czas na konfigurację infrastruktury

🔗 [**Czytaj więcej: Choosing CI platform**](/sections/testingandquality/citools.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Powrót do góry</a></p>

# `5. Przejście do praktyk produkcyjnych`

## ![✔] 5.1. Monitoring

**TL;DR:** Monitorowanie to gra polegająca na wykrywaniu problemów, zanim zrobią to klienci - oczywiście należy im to nadać niespotykane znaczenie. Rynek jest przytłoczony ofertami, dlatego rozważ rozpoczęcie od zdefiniowania podstawowych wskaźników, których należy przestrzegać (moje sugestie w środku), a następnie przejrzyj dodatkowe wymyślne funkcje i wybierz rozwiązanie, które zaznacza wszystkie pola. Kliknij „The Gist” poniżej, aby wyświetlić przegląd rozwiązań

**W przeciwnym razie:** Awaria === rozczarowani klienci. Proste

🔗 [**Czytaj więcej: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Zwiększ przejrzystość za pomocą inteligentnego rejestrowania

**TL;DR:** Dzienniki mogą być głupim magazynem instrukcji debugowania lub aktywować piękny pulpit nawigacyjny, który opowiada historię Twojej aplikacji. Zaplanuj swoją platformę rejestrowania od pierwszego dnia: w jaki sposób dzienniki są gromadzone, przechowywane i analizowane, aby zapewnić, że pożądane informacje (np. Poziom błędu, po całej transakcji za pośrednictwem usług i serwerów itp.) Mogą być naprawdę wydobyte

**W przeciwnym razie:** W rezultacie pojawia się czarna skrzynka, o której trudno uzasadnić, a następnie zaczynasz ponownie pisać wszystkie instrukcje rejestrowania, aby dodać dodatkowe informacje

🔗 [**Czytaj więcej: Increase transparency using smart logging**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Deleguj wszystko, co możliwe (np. Gzip, SSL) na zwrotny serwer proxy

**TL;DR:** Node jest strasznie kiepski w wykonywaniu zadań intensywnie wykorzystujących procesor, takich jak gzipping, zakończenie SSL itp. Zamiast tego należy używać „rzeczywistych” usług oprogramowania pośredniego, takich jak nginx, HAproxy lub usług dostawcy w chmurze

**W przeciwnym razie:** Twój słaby pojedynczy wątek pozostanie zajęty wykonywaniem zadań infrastrukturalnych zamiast zajmowania się rdzeniem aplikacji, a wydajność odpowiednio się obniży

🔗 [**Czytaj więcej: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Zablokuj zależności

**TL;DR:** Twój kod musi być identyczny we wszystkich środowiskach, ale zadziwiająco npm pozwala domyślnie dryfować zależności między środowiskami - podczas instalowania pakietów w różnych środowiskach próbuje pobrać najnowszą wersję łatek. Aby temu zaradzić, użyj plików konfiguracyjnych npm, .npmrc, które każą każdemu środowisku zapisać dokładną (nie najnowszą) wersję każdego pakietu. Alternatywnie, dla dokładniejszej kontroli ziarna, użyj „npm folię termokurczliwą”. \ * Aktualizacja: od NPM5 zależności są domyślnie zablokowane. Nowy menedżer pakietów w mieście, Yarn, również domyślnie nas objął

**W przeciwnym razie:** Dział kontroli jakości dokładnie przetestuje kod i zatwierdzi wersję, która będzie zachowywać się inaczej w środowisku produkcyjnym. Co gorsza, różne serwery w tym samym klastrze produkcyjnym mogą uruchamiać inny kod

🔗 [**Czytaj więcej: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Zabezpiecz czas pracy bez przestojów za pomocą odpowiedniego narzędzia

**TL;DR:** Proces musi trwać i uruchamiać się ponownie w przypadku awarii. W przypadku prostych scenariuszy narzędzia do zarządzania procesami, takie jak PM2, mogą być wystarczające, ale w dzisiejszym świecie „zadokowanym” należy również wziąć pod uwagę narzędzia do zarządzania klastrami

**W przeciwnym razie:** Uruchomienie dziesiątek instancji bez jasnej strategii i zbyt wielu narzędzi razem (zarządzanie klastrami, okno dokowane, PM2) może doprowadzić do chaosu DevOps

🔗 [**Czytaj więcej: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Wykorzystaj wszystkie rdzenie procesora

**TL;DR:** W swojej podstawowej formie aplikacja Node działa na jednym rdzeniu procesora, podczas gdy wszystkie pozostałe pozostają bezczynne. Twoim obowiązkiem jest replikacja procesu Node i wykorzystanie wszystkich procesorów - w przypadku małych i średnich aplikacji możesz użyć Node Cluster lub PM2. W przypadku większej aplikacji rozważ replikację procesu przy użyciu klastra Docker (np. K8S, ECS) lub skryptów wdrażania opartych na systemie inicjującym Linux (np. systemd)

**W przeciwnym razie:** Twoja aplikacja prawdopodobnie wykorzysta tylko 25% dostępnych zasobów (!) Lub nawet mniej. Zauważ, że typowy serwer ma 4 rdzenie procesora lub więcej, naiwne wdrożenie Node.js wykorzystuje tylko 1 (nawet przy użyciu usług PaaS, takich jak AWS beanstalk!)

🔗 [**Czytaj więcej: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Utwórz „punkt końcowy konserwacji”

**TL;DR:** Ujawnij zestaw informacji związanych z systemem, takich jak użycie pamięci i REPL itp. W zabezpieczonym interfejsie API. Chociaż wysoce zalecane jest poleganie na standardowych i narzędziach do testów bitewnych, niektóre cenne informacje i operacje można łatwiej wykonać za pomocą kodu

**W przeciwnym razie:** Przekonasz się, że wykonujesz wiele „wdrożeń diagnostycznych” - wysyłasz kod do produkcji tylko po to, aby wyodrębnić niektóre informacje do celów diagnostycznych

🔗 [**Czytaj więcej: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Odkryj błędy i przestoje przy użyciu produktów APM

**TL;DR:** Produkty do monitorowania aplikacji i wydajności (np. APM) proaktywnie oceniają bazę kodu i interfejs API, dzięki czemu mogą automatycznie wykraczać poza tradycyjny monitoring i mierzyć ogólne wrażenia użytkownika na różnych usługach i poziomach. Na przykład niektóre produkty APM mogą wyróżniać transakcję, która ładuje się zbyt wolno po stronie użytkowników końcowych, sugerując jednocześnie główną przyczynę

**W przeciwnym razie:** Możesz poświęcić wiele wysiłku na pomiar wydajności interfejsu API i przestojów, prawdopodobnie nigdy nie będziesz wiedział, jakie są twoje najwolniejsze części kodu w rzeczywistym scenariuszu i jak wpływają one na UX

🔗 [**Czytaj więcej: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Przygotuj kod do produkcji

**TL;DR:** Kod z myślą o końcu, plan produkcji od pierwszego dnia. Brzmi to nieco niejasno, dlatego opracowałem kilka wskazówek programistycznych, które są ściśle związane z utrzymaniem produkcji (kliknij przycisk Gist poniżej)

**W przeciwnym razie:** Mistrz świata IT / DevOps nie uratuje źle napisanego systemu

🔗 [**Czytaj więcej: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Zmierz i zabezpiecz zużycie pamięci

**TL;DR:** Node.js ma kontrowersyjne relacje z pamięcią: silnik v8 ma miękkie limity wykorzystania pamięci (1,4 GB) i istnieją znane ścieżki wycieku pamięci w kodzie Node - dlatego oglądanie pamięci procesu Node jest koniecznością. W małych aplikacjach możesz okresowo mierzyć pamięć za pomocą poleceń powłoki, ale w średnio-dużych aplikacjach rozważ umieszczenie zegarka pamięci w solidnym systemie monitorowania

**W przeciwnym razie:** Pamięć procesowa może przeciekać sto megabajtów dziennie, jak to się stało [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Czytaj więcej: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Wydobądź swoje zasoby frontendowe Node

**TL;DR:** Podawaj zawartość interfejsu użytkownika za pomocą dedykowanego oprogramowania pośredniego (nginx, S3, CDN), ponieważ wydajność węzła naprawdę spada podczas pracy z wieloma plikami statycznymi ze względu na model jednowątkowy

**W przeciwnym razie:** Twój pojedynczy wątek Node'a będzie zajęty przesyłaniem strumieniowym setek plików HTML / images / Angular / React zamiast przydzielania wszystkich swoich zasobów do zadania, dla którego się urodził - udostępniania treści dynamicznych

🔗 [**Czytaj więcej: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Bądź bezstanowy, zabijaj serwery prawie codziennie

**TL;DR:** Przechowuj wszelkiego rodzaju dane (np. Sesje użytkownika, pamięć podręczną, przesłane pliki) w zewnętrznych magazynach danych. Rozważ „zabijanie” swoich serwerów okresowo lub skorzystaj z platformy „bezserwerowej” (np. AWS Lambda), która wyraźnie wymusza zachowanie bezstanowe

**W przeciwnym razie:** Awaria na danym serwerze spowoduje przestoje aplikacji, a nie tylko zabicie wadliwego komputera. Co więcej, elastyczność skalowania stanie się trudniejsza ze względu na zależność od konkretnego serwera

🔗 [**Czytaj więcej: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Użyj narzędzi, które automatycznie wykrywają luki w zabezpieczeniach

**TL;DR:** Nawet najbardziej renomowane zależności, takie jak Express, mają znane luki (od czasu do czasu), które mogą stanowić zagrożenie dla systemu. Można to łatwo oswoić za pomocą narzędzi społecznościowych i komercyjnych, które stale sprawdzają luki w zabezpieczeniach i ostrzegają (lokalnie lub w GitHub), niektóre mogą nawet natychmiast je załatać

**W przeciwnym razie:** Utrzymanie kodu w czystości przed lukami bez dedykowanych narzędzi będzie wymagało ciągłego śledzenia publikacji online na temat nowych zagrożeń. Dość nudne

🔗 [**Czytaj więcej: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Przypisz identyfikator transakcji do każdej instrukcji dziennika

**TL;DR:** Przypisz ten sam identyfikator, identyfikator transakcji: {pewna wartość} do każdego wpisu dziennika w ramach jednego żądania. Następnie podczas sprawdzania błędów w logach łatwo wyciągnij wnioski przed i po. Niestety, nie jest to łatwe do osiągnięcia w Węźle ze względu na jego asynchroniczny charakter, patrz przykłady kodu wewnątrz

**W przeciwnym razie:** Patrzenie na dziennik błędów produkcyjnych bez kontekstu - co zdarzyło się wcześniej - sprawia, że znacznie trudniej i wolniej jest myśleć o problemie

🔗 [**Czytaj więcej: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Ustaw NODE_ENV = produkcja

**TL;DR:** Ustaw zmienną środowiskową NODE_ENV na „produkcja” lub „rozwój”, aby oznaczyć, czy optymalizacje produkcji powinny zostać aktywowane - wiele pakietów npm określa bieżące środowisko i optymalizuje kod do produkcji

**W przeciwnym razie:** Pominięcie tej prostej właściwości może znacznie obniżyć wydajność. Na przykład, używając Express do renderowania po stronie serwera, pominięcie `NODE_ENV` powoduje spowolnienie trzykrotnie!

🔗 [**Czytaj więcej: Set NODE_ENV=production**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Projektowanie wdrożeń zautomatyzowanych, atomowych i bez przestojów

**TL;DR:** Badania pokazują, że zespoły wykonujące wiele wdrożeń zmniejszają prawdopodobieństwo poważnych problemów produkcyjnych. Szybkie i zautomatyzowane wdrożenia, które nie wymagają ryzykownych ręcznych kroków i przestojów usług, znacznie usprawniają proces wdrażania. Prawdopodobnie powinieneś to osiągnąć za pomocą Dockera w połączeniu z narzędziami CI, ponieważ stały się one standardem branżowym dla usprawnionego wdrażania

**W przeciwnym razie:** Długie wdrożenia -> przestoje produkcyjne i błąd związany z człowiekiem -> zespół nie jest pewny co do wdrożenia -> mniej wdrożeń i funkcji

<br/><br/>

## ![✔] 5.17. Użyj wersji LTS środowiska Node.js

**TL;DR:** Upewnij się, że używasz wersji LTS Node.js , aby otrzymywać krytyczne poprawki błędów, aktualizacje zabezpieczeń i ulepszenia wydajności

**W przeciwnym razie:** Nowo odkryte błędy lub luki można wykorzystać do wykorzystania aplikacji działającej w środowisku produkcyjnym, a aplikacja może nie być obsługiwana przez różne moduły i trudniejsza do utrzymania

🔗 [**Czytaj więcej: Use an LTS release of Node.js**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Nie kieruj dzienników w aplikacji

**TL;DR:** Miejsca docelowe dziennika nie powinny być zakodowane na stałe przez programistów w kodzie aplikacji, ale powinny być zdefiniowane przez środowisko wykonawcze, w którym działa aplikacja. Programiści powinni zapisywać dzienniki na `stdout` za pomocą narzędzia rejestrującego, a następnie pozwolić środowisku wykonawczemu (kontener, serwer itp.) potokuj strumień `stdout` do odpowiedniego miejsca docelowego (tj. Splunk, Graylog, ElasticSearch itp.).

**W przeciwnym razie:** Trasowanie dzienników obsługi aplikacji === trudne do skalowania, utrata dzienników, słaba separacja problemów

🔗 [**Czytaj więcej: Log Routing**](/sections/production/logrouting.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Powrót do góry</a></p>

# `6. Najlepsze praktyki bezpieczeństwa`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Ustanowienie zasad bezpieczeństwa linter

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Skorzystaj z wtyczek liniowych związanych z bezpieczeństwem, takich jak [eslint-plugin-security] (https://github.com/nodesecurity/eslint-plugin-security), aby wychwycić luki w zabezpieczeniach i problemy jak najwcześniej, najlepiej gdy są one jest kodowany. Może to pomóc w wykrywaniu słabych punktów bezpieczeństwa, takich jak używanie eval, wywoływanie procesu potomnego lub importowanie modułu z literałem łańcucha (np. Dane wejściowe użytkownika). Kliknij „Czytaj więcej” poniżej, aby zobaczyć przykłady kodu, które zostaną złapane przez linijkę bezpieczeństwa

**W przeciwnym razie:** To, co mogło być bezpośrednią słabością bezpieczeństwa podczas programowania, staje się poważnym problemem w produkcji. Ponadto projekt może nie być zgodny ze spójnymi praktykami bezpieczeństwa kodu, co prowadzi do wprowadzenia luk w zabezpieczeniach lub poufnych tajemnic popełnionych w zdalnych repozytoriach

🔗 [**Czytaj więcej: Lint rules**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Ogranicz równoczesne żądania przy użyciu oprogramowania pośredniego

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Ataki DOS są bardzo popularne i stosunkowo łatwe do przeprowadzenia. Wdrażanie ograniczenia prędkości za pomocą usługi zewnętrznej, takiej jak usługi równoważenia obciążenia w chmurze, zapory w chmurze, nginx, [szybkość-ogranicznik-elastyczny] (https://www.npmjs.com/package/rate-limiter-fiętki) pakiet lub (dla mniejszych i mniej krytycznych aplikacji) ograniczające szybkość oprogramowanie pośrednie (np. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**W przeciwnym razie:** Aplikacja może zostać zaatakowana, co spowoduje odmowę usługi, w wyniku której prawdziwi użytkownicy otrzymają usługę o obniżonej jakości lub niedostępną.

🔗 [**Czytaj więcej: Implement rate limiting**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Wyodrębnij sekrety z plików konfiguracyjnych lub użyj pakietów, aby je zaszyfrować

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Nigdy nie przechowuj tajemnic zwykłego tekstu w plikach konfiguracyjnych lub kodzie źródłowym. Zamiast tego skorzystaj z systemów zarządzania sekretami, takich jak produkty Vault, Kubernetes / Docker Secrets lub wykorzystując zmienne środowiskowe. W ostateczności tajemnice przechowywane w kontroli źródła muszą być szyfrowane i zarządzane (klucze, wygasanie, kontrola itp.). Skorzystaj z haków poprzedzających zatwierdzenie / push, aby zapobiec przypadkowemu popełnieniu tajemnicy

**W przeciwnym razie:** Kontrola źródła, nawet w przypadku prywatnych repozytoriów, może zostać omyłkowo upubliczniona, w którym to momencie ujawniane są wszystkie tajemnice. Dostęp do kontroli źródła dla strony zewnętrznej nieumyślnie zapewni dostęp do powiązanych systemów (baz danych, apis, usług itp.).

🔗 [**Czytaj więcej: Secret management**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Zapobiegaj podatności na wstrzykiwanie zapytań w bibliotekach ORM / ODM

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Aby zapobiec wstrzykiwaniu SQL / NoSQL i innym złośliwym atakom, zawsze używaj ORM / ODM lub biblioteki bazy danych, która ucieka przed danymi lub obsługuje nazwane lub indeksowane zapytania sparametryzowane, i dba o sprawdzenie poprawności danych wejściowych użytkownika dla oczekiwanych typów. Nigdy nie używaj ciągów szablonów JavaScript ani konkatenacji ciągów, aby wstrzykiwać wartości do zapytań, ponieważ otwiera to aplikację na szeroki zakres luk. Wszystkie renomowane biblioteki dostępu do danych Node.js (np. [Sequelize] (https://github.com/sequelize/sequelize), [Knex] (https://github.com/tgriesser/knex), [mongoose] (https://github.com/Automattic/mongoose)) mają wbudowaną ochronę przed atakami iniekcyjnymi.

**W przeciwnym razie:** Nieprawidłowe lub niezaangażowane dane wejściowe użytkownika mogą prowadzić do wstrzyknięcia przez operatora podczas pracy z MongoDB dla NoSQL, a niestosowanie odpowiedniego systemu odkażania lub ORM z łatwością pozwoli na ataki z zastrzykiem SQL, tworząc ogromną lukę.

🔗 [**Czytaj więcej: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Zbiór ogólnych dobrych praktyk w zakresie bezpieczeństwa

**TL;DR:** Jest to zbiór porad bezpieczeństwa, które nie są bezpośrednio związane z Node.js - implementacja Node nie różni się niczym od żadnego innego języka. Kliknij Czytaj więcej, aby przejrzeć.

🔗 [**Czytaj więcej: Common security best practices**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Dostosuj nagłówki odpowiedzi HTTP, aby zwiększyć bezpieczeństwo

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Twoja aplikacja powinna korzystać z bezpiecznych nagłówków, aby uniemożliwić atakującym typowe ataki, takie jak skrypty cross-site scripting (XSS), kliknięcia i inne złośliwe ataki. Można je łatwo skonfigurować za pomocą modułów takich jak [helmet](https://www.npmjs.com/package/helmet).

**W przeciwnym razie:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**Czytaj więcej: Using secure headers in your application**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**W przeciwnym razie:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Czytaj więcej: Dependency security**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Avoid using the Node.js crypto library for handling passwords, use Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Passwords or secrets (API keys) should be stored using a secure hash + salt function like `bcrypt`, that should be a preferred choice over its JavaScript implementation due to performance and security reasons.

**W przeciwnym razie:** Passwords or secrets that are persisted without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Czytaj więcej: Use Bcrypt**](/sections/security/bcryptpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**W przeciwnym razie:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Czytaj więcej: Escape output**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**W przeciwnym razie:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Czytaj więcej: Validate incoming JSON schemas**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**W przeciwnym razie:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Czytaj więcej: Blacklist JSON Web Tokens**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** A simple and powerful technique is to limit authorization attempts using two metrics:

1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**W przeciwnym razie:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Czytaj więcej: Login rate limiting**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**W przeciwnym razie:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**Czytaj więcej: Run Node.js as non-root user**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**W przeciwnym razie:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Czytaj więcej: Limit payload size**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**W przeciwnym razie:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Czytaj więcej: Avoid JavaScript eval statements**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**W przeciwnym razie:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Czytaj więcej: Prevent malicious RegEx**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**W przeciwnym razie:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the filesystem, or access already existing system files.

🔗 [**Czytaj więcej: Safe module loading**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**W przeciwnym razie:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Czytaj więcej: Run unsafe code in a sandbox**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**W przeciwnym razie:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Czytaj więcej: Be cautious when working with child processes**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**W przeciwnym razie:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Czytaj więcej: Hide error details from client**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**W przeciwnym razie:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**W przeciwnym razie:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Czytaj więcej: Cookie and session security**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**W przeciwnym razie:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**W przeciwnym razie:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Czytaj więcej: Prevent unsafe redirects**](/sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

**W przeciwnym razie:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**Czytaj więcej: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `7. Draft: Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/i0natan/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Don't block the event loop

**TL;DR:** Avoid CPU intensive tasks as they will block the mostly single-threaded Event Loop and offload those to a dedicated thread, process or even a different technology based on the context.

**W przeciwnym razie:** As the Event Loop is blocked, Node.js will be unable to handle other request thus causing delays for concurrent users. **3000 users are waiting for a response, the content is ready to be served, but one single request blocks the server from dispatching the results back**

🔗 [**Czytaj więcej: Do not block the event loop**](/sections/performance/block-loop.md)

<br /><br /><br />


## ![✔] 7.2. Prefer native JS methods over user-land utils like Lodash

 **TL;DR:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
 Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**W przeciwnym razie:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Czytaj więcej: Native over user land utils**](/sections/performance/nativeoverutil.md)

<br/><br/><br/>


# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/i0natan/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](./README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](./README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)
- ![RU](/assets/flags/RU.png) [Russian](./README.russian.md) - Courtesy of [Alex Ivanov](https://github.com/contributorpw)

### Translations in progress

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [Github projects](https://github.com/i0natan/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/i0natan)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in the USA, Europe, and Israel on building large-scale Node.js applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at [@goldbergyoni](https://github.com/goldbergyoni) or [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, MongoDB, pretty much anything that involves using JavaScript/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation, collaborating on the Community Committee's Website Redesign Initiative.

<br/>

## Współpracownicy

Dziękujemy wzsystkim wpółpracownikom! 🙏

Our collaborators are members who are contributing to the repository on a regular basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :--: | :--: |
| [Ido Richter (Founder)](https://github.com/idori) | [Keith Holliday](https://github.com/TheHollidayInn) |

### Wcześniejsza współpraca

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :--: |
| [Refael Ackermann](https://github.com/refack) |

<br/>

## Dziękujemy za uwagi

Doceniamy każdy wkład, od poprawki pojedynczego słowa po nową najlepszą praktykę. Zobacz naszych autorów i [dokumentację tutaj!] (CONTRIBUTORS.md)
<br/><br/><br/>
