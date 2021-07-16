# Mide y protege el uso de la memoria

<br/><br/>

### Párrafo de explicación

En un mundo perfecto, un desarrollador web no debería lidiar con fugas de memoria. En la realidad, los problemas de memoria son un asunto conocido de Node del que uno debe ser consciente. El uso de la memoria se debe monitorizar constantemente. En sitios de desarrollo o pequeños sitios en producción, quizá puedas medir la memoria manualmente mediante comandos Linux o herramientas NPM como node-inspector y memwatch. El principal inconveniente de estas actividades manuales es que requieren de una persona que las realice activamente. Para sitios de producción serios, es absolutamente indispensable el uso de herramientas de monitorización robustas —por ej. AWS CloudWatch, DataDog o cualquier sistema proactivo similar— que alerten cuando ocurra una fuga de memoria. También existen algunas pautas para evitar estas fugas: evita almacenar datos a nivel global, utiliza streams de datos con tamaño dinámico, limita el scope de las variables mediante el uso de let y const.

<br/><br/>

### Cita de Blog: "No podemos alocar o desalocar memoria en JavaScript"

* Del blog [Dyntrace](http://apmblog.dynatrace.com/)

> ... ”As we already learned, in Node.js JavaScript is compiled to native code by V8. The resulting native data structures don’t have much to do with their original representation and are solely managed by V8. This means that we cannot actively allocate or deallocate memory in JavaScript. V8 uses a well-known mechanism called garbage collection to address this problem.”

> ... "Como ya hemos aprendido, Node.js JavaScript es compilado a código nativo por V8. Las estructuras de datos nativas resultantes no tienen mucho que ver con la representación original y son completamente manejadas por V8. Esto significa que no podemos alocar o desalocar memoria en JavaScript. V8 utiliza un mecanismo bien conocido llamado recolector de basura para resolver este problema."

### Cita de Blog
* Del blog [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load)

> ... “Although this example leads to obvious results the process is always the same: Create heap dumps with some time and a fair amount of memory allocation in between Compare a few dumps to find out what’s growing”

> ..."Aunque este ejemplo conduce a resultados obvios, el proceso es siempre el mismo: Crear volcados de pila con algo de tiempo y una cantidad buena de memoria entre ellos, Compara unos cuantos para encontrar que está creciendo"

### Cita de Blog: "El programa se detiene mientras la recolección de basura está en progreso"

* Del blog [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load)

> ... “fault, Node.js will try to use about 1.5GBs of memory, which has to be capped when running on systems with less memory. This is the expected behavior as garbage collection is a very costly operation. The solution for it was adding an extra parameter to the Node.js process: node –max_old_space_size=400 server.js –production ” “Why is garbage collection expensive? The V8 JavaScript engine employs a stop-the-world garbage collector mechanism. In practice, it means that the program stops execution while garbage collection is in progress.”

> .. "falla, Node.js va a intentar usar cerca de 1.5GBs de memoria, lo que presentará problemas al correr en sistemas con poca memoria. Este es el comportamiento esperado de el recolector de basura ya que esta es una operación muy costos. La solución a ello era agregando un parámetro extra al proceso de Node.js: node -max_old_space_size=400 server.js -production" "¿Porqué el recolector de basura es costoso? el motor de JavaScript de V8 emplea un mecanismo detener-el-mundo (stop-the-world). En práctica, significa que el programa se detiene mientras el recolector de basura está en progreso"