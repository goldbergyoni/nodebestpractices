# Używaj konfiguracji przyjaznej środowisku, bezpiecznej i hierarchicznej

<br/><br/>

### Wyjaśnienie jednym akapitem

W przypadku danych konfiguracyjnych wiele rzeczy może po prostu denerwować i spowalniać:

1. ustawienie wszystkich kluczy przy użyciu zmiennych środowiskowych procesu staje się bardzo żmudne, gdy trzeba wstrzyknąć 100 kluczy (zamiast po prostu zatwierdzić je w pliku konfiguracyjnym), jednak podczas pracy z plikami tylko administratorzy DevOps nie mogą zmienić zachowania bez zmiany kodu. Niezawodne rozwiązanie konfiguracyjne musi łączyć oba pliki konfiguracyjne + przesłonięcia zmiennych procesowych

2. przy określaniu wszystkich kluczy w płaskim JSON, frustracją jest szukanie i modyfikowanie wpisów, gdy lista powiększa się. Hierarchiczny plik JSON zgrupowany w sekcje może rozwiązać ten problem + kilka bibliotek konfiguracji pozwala przechowywać konfigurację w wielu plikach i zadbać o połączenie wszystkich w czasie wykonywania. Zobacz przykład poniżej

3. przechowywanie poufnych informacji, takich jak hasło BD, oczywiście nie jest zalecane, ale nie istnieje szybkie i wygodne rozwiązanie tego wyzwania. Niektóre biblioteki konfiguracyjne pozwalają na szyfrowanie plików, inne szyfrują te wpisy podczas zatwierdzeń GIT lub po prostu nie przechowują rzeczywistych wartości tych wpisów i określają rzeczywistą wartość podczas wdrażania za pomocą zmiennych środowiskowych.

4. niektóre zaawansowane scenariusze konfiguracji wymagają wprowadzenia wartości konfiguracji za pomocą wiersza poleceń (vargs) lub zsynchronizowania informacji o konfiguracji za pośrednictwem scentralizowanej pamięci podręcznej, takiej jak Redis, aby wiele serwerów używało tych samych danych konfiguracyjnych.

5. aplikacja powinna zakończyć się tak szybko, jak to możliwe i przekazać natychmiastowe informacje zwrotne, jeśli wymagane zmienne środowiskowe nie są obecne podczas uruchamiania, można to osiągnąć za pomocą [convict](https://www.npmjs.com/package/convict) aby sprawdzić poprawność konfiguracji.

Niektóre biblioteki konfiguracyjne mogą zapewniać większość tych funkcji za darmo, zobacz biblioteki npm, takie jak [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config) i [convict](https://www.npmjs.com/package/convict) które spełniają wiele z tych wymagań.

<br/><br/>

### Przykład kodu - konfiguracja hierarchiczna pomaga znaleźć wpisy i zarządzać dużymi plikami konfiguracyjnymi

```json5
{
  // Customer module configs 
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Set low for development 
      "initialDays": 1
    }
  }
}
```

<br/><br/>
