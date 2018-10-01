# Documentar errores API mediante Swagger

### Párrafo de explicación

Las APIs basadas en REST devuelven resultados utilizando códigos de estado HTTP. Es absolutamente necesario para el usuario de la API el ser consciente, no solo del esquema API, sino también de los errores potenciales. De ese modo puede atrapar el error y actuar en consecuencia. Por ejemplo, la documentación de tu API puede aclarar por adelantado que se devuelve el código HTTP 409 cuando el nombre del cliente ya existe (asumiendo que la API registre nuevos usuarios), por tanto la aplicación que consume la API puede proporcionar la mejor UX para la situación dada. Swagger es un estándar que define un esquema para generar documentación API, ofreciendo un ecosistema de herramientas que permiten crear fácilmente documentación online. Observa las siguientes capturas de pantalla.

### Blog Quote: "You have to tell your callers what errors can happen"

From the blog Joyent, ranked 1 for the keywords “Node.js logging”

 > We’ve talked about how to handle errors, but when you’re writing a new function, how do you deliver errors to the code that called your function? …If you don’t know what errors can happen or don’t know what they mean, then your program cannot be correct except by accident. So if you’re writing a new function, you have to tell your callers what errors can happen and what they mean…

### Useful Tool: Swagger Online Documentation Creator

![Swagger API Scheme](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "API error handling")
