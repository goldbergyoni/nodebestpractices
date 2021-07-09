# Przygotuj kod do produkcji

<br/><br/>

### Wyjaśnienie jednym akapitem

Poniżej znajduje się lista wskazówek programistycznych, które znacznie wpływają na utrzymanie produkcji i stabilność:

* Dwunastoczęściowy przewodnik - zapoznaj się z przewodnikiem [Dwanaście czynników](https://12factor.net/)
* Bądź bezstanowy - nie zapisuj danych lokalnie na określonym serwerze internetowym (patrz oddzielny punkt - „Bądź bezstanowy”)
* Pamięć podręczna - mocno wykorzystuj pamięć podręczną, ale nigdy nie zawiedzie z powodu niedopasowania pamięci podręcznej
* Pamięć testowa - mierzy zużycie pamięci i wycieki w ramach rozwoju, narzędzia takie jak „memwatch” mogą znacznie ułatwić to zadanie
* Funkcje nazw - zminimalizuj użycie funkcji anonimowych (tj. wbudowane wywołanie zwrotne), ponieważ typowy profiler pamięci zapewni użycie pamięci według nazwy metody
* Użyj narzędzi CI - użyj narzędzia CI do wykrywania awarii przed wysłaniem do produkcji. Na przykład użyj ESLint do wykrywania błędów odniesienia i niezdefiniowanych zmiennych. Użyj –trace-sync-io, aby zidentyfikować kod korzystający z synchronicznych interfejsów API (zamiast wersji asynchronicznej)
* Loguj mądrze - dołącz do każdej informacji kontekstowej instrukcji dziennika, miejmy nadzieję w formacie JSON, aby narzędzia agregujące logi, takie jak Elastic, mogły przeszukiwać te właściwości (patrz oddzielny punkt - „Zwiększ widoczność za pomocą inteligentnych logów”). Dołącz także identyfikator transakcji, który identyfikuje każde żądanie i pozwala na korelację wierszy opisujących tę samą transakcję (patrz oddzielny punkt - „Dołącz identyfikator transakcji”)
* Zarządzanie błędami - obsługa błędów to pięta achillesowa witryn produkcyjnych Node.js - wiele procesów Node ulega awarii z powodu drobnych błędów, podczas gdy inne zawieszają się żywe w wadliwym stanie zamiast awarii. Ustawienie strategii obsługi błędów jest absolutnie niezbędne, przeczytaj tutaj moje [najlepsze praktyki obsługi błędów](http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)
