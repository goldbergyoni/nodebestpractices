# Skonstruuj swoje rozwiązanie według komponentów

<br/><br/>

### Wyjaśnienie jednym akapitem

W przypadku średnich aplikacji i wyższych monolity są naprawdę złe - posiadanie jednego dużego oprogramowania z wieloma zależnościami jest po prostu trudne do uzasadnienia i często prowadzi do kodu spaghetti. Nawet inteligentni architekci - ci, którzy są wystarczająco wykwalifikowani, aby oswoić bestię i ją „zmodularyzować” - poświęcają wielki wysiłek umysłowy na projektowanie, a każda zmiana wymaga starannej oceny wpływu na inne zależne obiekty. Ostatecznym rozwiązaniem jest opracowanie małego oprogramowania: podziel cały stos na niezależne komponenty, które nie współużytkują plików z innymi, każdy stanowi bardzo niewiele plików (np. API, usługa, dostęp do danych, test itp.), Dzięki czemu jest bardzo łatwo to uzasadnić. Niektórzy mogą nazywać tę architekturę „mikrousługami” - ważne jest, aby zrozumieć, że mikrousługi nie są specyfikacją, której należy przestrzegać, ale raczej zbiorem zasad. Możesz zastosować wiele zasad w pełnej architekturze mikrousług lub zastosować tylko kilka. Oba są dobre, o ile złożoność oprogramowania jest niska. To co, co najmniej powinieneś zrobić, to utworzyć podstawowe granice między komponentami, przypisać folder w katalogu głównym projektu dla każdego komponentu biznesowego i uczynić go samodzielnym - inne komponenty mogą korzystać z jego funkcji tylko za pośrednictwem publicznego interfejsu lub interfejsu API. Jest to podstawa do uproszczenia komponentów, uniknięcia piekła zależności i utorowania drogi do pełnej obsługi mikrousług w przyszłości, gdy Twoja aplikacja się rozwinie.
<br/><br/>

### Cytat z Bloga: "Skalowanie wymaga skalowania całej aplikacji"

 Z bloga [MartinFowler.com](https://martinfowler.com/articles/microservices.html)

> Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more applications are being deployed to the cloud. Change cycles are tied together - a change made to a small part of the application requires the entire monolith to be rebuilt and deployed. Over time it's often hard to keep a good modular structure, making it harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application rather than parts of it that require greater resource.

<br/><br/>

### Cytat z Bloga: "Więc co krzyczy architektura Twojej aplikacji?"

 Z bloga [uncle-bob](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) 

> ...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: Library.<br/>

Więc co krzyczy architektura twojej aplikacji? Gdy spojrzysz na strukturę katalogów najwyższego poziomu i pliki źródłowe w pakiecie najwyższego poziomu; czy krzyczą: system opieki zdrowotnej, system rachunkowości lub system zarządzania zapasami? A może krzyczą: Railsy, Spring / Hibernate lub ASP ?.

<br/><br/>

### Dobre: Skonstruuj swoje rozwiązanie według samodzielnych komponentów

![alt text](../../assets/images/structurebycomponents.PNG "Structuring solution by components")

<br/><br/>

### Złe: Pogrupuj pliki według roli technicznej

![alt text](../../assets/images/structurebyroles.PNG "Structuring solution by technical roles")
