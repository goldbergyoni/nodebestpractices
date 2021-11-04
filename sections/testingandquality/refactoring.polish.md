# Refaktoryzacja

<br/><br/>

### Wyjaśnienie jednym akapitem

Refaktoryzacja jest ważnym procesem w iteracyjnym przepływie rozwoju. Usunięcie „Code smells” (złych praktyk kodowania), takich jak powielony kod, długie metody, długa lista parametrów, poprawi kod i sprawi, że będzie on łatwiejszy w utrzymaniu. Korzystanie z narzędzi do analizy statycznej pomoże ci znaleźć te code smells i zbudować proces wokół refaktoryzacji. Dodanie tych narzędzi do kompilacji CI pomoże zautomatyzować proces kontroli jakości. Jeśli Twój CI zintegruje się z narzędziem takim jak Sonar lub Code Climate, kompilacja zakończy się niepowodzeniem, jeśli wykryje code smells i poinformuje autora, jak rozwiązać problem. Te narzędzia do analizy statycznej uzupełnią narzędzia do lintowania, takie jak ESLint. Większość narzędzi do lintowania skupia się na stylach kodu, takich jak wcięcia i brakujące średniki (chociaż niektóre code smells kodu jak Długie funkcje) w jednym pliku, podczas gdy narzędzia analizy statycznej skoncentrują się na wyszukiwaniu code smells (duplikat kodu, analiza złożoności itp.) pojedyncze pliki i wiele plików.

<br/><br/>


### Martin Fowler - Główny Naukowiec w ThoughtWorks

 Z książki, "Refactoring - Improving the Design of Existing Code"

 > Refactoring is a controlled technique for improving the design of an existing code base.

<br/><br/>

### Evan Burchard - Web Development Consultant i Autor

 Z książki, "Refactoring JavaScript: Turning Bad Code into Good Code"

 > No matter what framework or
“compiles-to-JS” language or library you use, bugs and performance concerns
will always be an issue if the underlying quality of your JavaScript is poor.

<br/><br/>

 ### Przykład: Analiza złożonych metod za pomocą CodeClimate (komercyjna)

![alt text](../../assets/images/codeanalysis-climate-complex-methods.PNG "Complex methods analysis")

### Przykład: trendy i historia analizy kodu za pomocą CodeClimate (komercyjna)

![alt text](../../assets/images/codeanalysis-climate-history.PNG "Code analysis history")

### Przykład: Podsumowanie analizy kodu i trendy w SonarQube (komercyjna)

![alt text](../../assets/images/codeanalysis-sonarqube-dashboard.PNG "Code analysis history")


<br/><br/>
