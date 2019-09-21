# Estructura tu solución en componentes

<br/><br/>

### Párrafo de explicación

Para aplicaciones de tamaño medio o superior, los monolitos son bastante malos. Un enorme software con muchas dependencias se torna complicado de manejar y por lo general termina en código espagueti. Incluso arquitectos inteligentes –aquellos con suficiente habilidad como para domar a la bestia y "modularizarla"– invierten gran esfuerzo mental en el diseño, y cada cambio requiere una evaluación cuidadosa del impacto en dependencias. La solución definitiva es desarrollar software pequeño: dividir el total en componentes autocontenidos, que no compartan archivos con otros, cada uno de los cuales constituye un pequeño conjunto de archivos (ej. API, servicio, acceso de datos, pruebas, etc), lo que aporta una estructura muy fácil de digerir. Algunos lo llaman arquitectura de "microservicios". Es importante entender que los microservicios no son ninguna especificación que debas seguir, sino un conjunto de principios. Puedes optar por atenerte a muchos principios en una arquitectura de microservicios completa, o simplemente adoptar unos pocos. Ambas opciones son buenas siempre y cuando mantengas baja la complejidad del software. Al final, lo que deberías hacer es crear límites básicos entre componentes, asignar una carpeta en la raíz de tu proyecto para cada entidad de negocio (componente) y hacer que sea autocontenido. A otros componentes solo se les permite consumir su funcionalidad a través de su interfaz pública o API. Esta es la base para mantener tus componentes simples, evitar el infierno de las dependencias y abrir el camino a microservicios completos en el futuro una vez tu aplicación crezca.

<br/><br/>

### Blog Quote: "Scaling requires scaling of the entire application"

 From the blog MartinFowler.com

> Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more applications are being deployed to the cloud. Change cycles are tied together - a change made to a small part of the application requires the entire monolith to be rebuilt and deployed. Over time it's often hard to keep a good modular structure, making it harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application rather than parts of it that require greater resource.

<br/><br/>

### Blog Quote: "So what does the architecture of your application scream?"

 From the blog [uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html) 

> ...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: Library.<br/>

So what does the architecture of your application scream? When you look at the top level directory structure, and the source files in the highest level package; do they scream: Health Care System, or Accounting System, or Inventory Management System? Or do they scream: Rails, or Spring/Hibernate, or ASP?.

<br/><br/>

### Good: Structure your solution by self-contained components

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

<br/><br/>

### Bad: Group your files by technical role

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
