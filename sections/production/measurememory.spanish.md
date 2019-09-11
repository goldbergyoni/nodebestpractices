# Mide y protege el uso de la memoria

<br/><br/>

### Párrafo de explicación

En un mundo perfecto, un desarrollador web no debería lidiar con fugas de memoria. En la realidad, los problemas de memoria son un asunto conocido de Node del que uno debe ser consciente. El uso de la memoria se debe monitorizar constantemente. En sites de desarrollo o pequeños sites en producción, quizá puedas medir la memoria manualmente mediante comandos Linux o herramientas NPM como node-inspector y memwatch. El principal inconveniente de estas actividades manuales es que requieren de una persona que las realice activamente. Para sites serios en producción, es absolutamente indispensable el uso de herramientas de monitorización robustas —por ej. AWS CloudWatch, DataDog o cualquier sistema proactivo similar— que alerten cuando ocurra una fuga de memoria. También existen algunas pautas para evitar estas fugas: evita almacenar datos a nivel global, utiliza streams de datos con tamaño dinámico, limita el scope de las variables mediante el uso de let y const.

<br/><br/>

### What Other Bloggers Say

* From the blog [Dyntrace](http://apmblog.dynatrace.com/):
> ... ”As we already learned, in Node.js JavaScript is compiled to native code by V8. The resulting native data structures don’t have much to do with their original representation and are solely managed by V8. This means that we cannot actively allocate or deallocate memory in JavaScript. V8 uses a well-known mechanism called garbage collection to address this problem.”

* From the blog [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “Although this example leads to obvious results the process is always the same:
Create heap dumps with some time and a fair amount of memory allocation in between
Compare a few dumps to find out what’s growing”

* From the blog [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “fault, Node.js will try to use about 1.5GBs of memory, which has to be capped when running on systems with less memory. This is the expected behavior as garbage collection is a very costly operation.
The solution for it was adding an extra parameter to the Node.js process:
node –max_old_space_size=400 server.js –production ”
“Why is garbage collection expensive? The V8 JavaScript engine employs a stop-the-world garbage collector mechanism. In practice, it means that the program stops execution while garbage collection is in progress.”
