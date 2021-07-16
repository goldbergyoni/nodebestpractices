# Usa herramientas de detección automática de vulnerabilidades

<br/><br/>

### Párrafo de explicación

Las aplicaciones modernas de Node tienen decenas y a veces cientos de dependencias. Si alguna de las dependencias que utilizas tiene una vulnerabilidad de seguridad, tu aplicación también es vulnerable. Las siguientes herramientas detectan automáticamente si hay vulnerabilidades de seguridad conocidas en tus dependencias:

- [npm audit](https://docs.npmjs.com/cli/audit) - npm audit
- [snyk](https://snyk.io/) - Continuamente busca y repara vulnerabilidades en sus dependencias.

<br/><br/>

### Cita de blog "La seguridad de tu aplicación es tan fuerte como su "eslabón mas débil" en las dependencias..."

Del blog [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/) 

> ...Using to manage your application’s dependencies is powerful and convenient.  But the packages that you use may contain critical security vulnerabilities that could also affect your application.  The security of your app is only as strong as the “weakest link” in your dependencies. Fortunately, there are two helpful tools you can use to ensure the third-party packages you use: and requireSafe.  These two tools do largely the same thing, so using both might be overkill, but “better safe than sorry” are words to live by when it comes to security...

> Usarlas para manejar tus dependencias de la aplicación es poderoso y conveniente. Pero los paquetes que usan pueden contener vulnerabilidades de seguridad críticas que también podrían afectar tu aplicación. La seguridad de tu aplicación es tan fuerte como su "eslabón mas débil" en las dependencias. Afortunadamente hay dos herramientas muy buenas que pueden usarse para asegurar que los paquetes de terceros que utilices sean seguros. Estas dos herramientas hacen mayormente lo mismo, así que usan las dos sería demasiado, pero "más vale prevenir que lamentar" son palabras clave cuando se habla de seguridad...

