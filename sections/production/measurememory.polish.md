# Zmierz i zabezpiecz zużycie pamięci

<br/><br/>

### Wyjaśnienie jednym akapitem

W idealnym świecie programista nie powinien zajmować się wyciekami pamięci. W rzeczywistości problemy z pamięcią to znane problemy węzłów, o których trzeba pamiętać. Przede wszystkim należy stale monitorować zużycie pamięci. W witrynach programistycznych i małych zakładach produkcyjnych można ręcznie oceniać za pomocą poleceń systemu Linux lub narzędzi i bibliotek npm, takich jak inspektor węzłów i memwatch. Główną wadą tych ręcznych czynności jest to, że wymagają one aktywnego monitorowania przez człowieka - w przypadku poważnych zakładów produkcyjnych absolutnie niezbędne jest użycie solidnych narzędzi monitorowania, np. (AWS CloudWatch, DataDog lub inny podobny proaktywny system), który ostrzega o wystąpieniu wycieku. Istnieje również kilka wskazówek programistycznych, aby zapobiec wyciekom: unikaj przechowywania danych na poziomie globalnym, używaj strumieni danych o dynamicznym rozmiarze, ogranicz zakres zmiennych za pomocą let i const.

<br/><br/>

### Co mówią inni blogerzy

* Z bloga [Dyntrace](https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/):
> ... ”As we already learned, in Node.js JavaScript is compiled to native code by V8. The resulting native data structures don’t have much to do with their original representation and are solely managed by V8. This means that we cannot actively allocate or deallocate memory in JavaScript. V8 uses a well-known mechanism called garbage collection to address this problem.”

* Z bloga [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “Although this example leads to obvious results the process is always the same:
Create heap dumps with some time and a fair amount of memory allocation in between
Compare a few dumps to find out what’s growing”

* Z bloga [Rising Stack](https://blog.risingstack.com/finding-a-memory-leak-in-node-js/):
> ... “fault, Node.js will try to use about 1.5GBs of memory, which has to be capped when running on systems with less memory. This is the expected behavior as garbage collection is a very costly operation.
The solution for it was adding an extra parameter to the Node.js process:
node –max_old_space_size=400 server.js –production ”
“Why is garbage collection expensive? The V8 JavaScript engine employs a stop-the-world garbage collector mechanism. In practice, it means that the program stops execution while garbage collection is in progress.”
