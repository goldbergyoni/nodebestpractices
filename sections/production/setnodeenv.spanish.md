# Asigna NODE_ENV = production

<br/><br/>

### Párrafo de explicación

Las variables de entorno de proceso son un conjunto de pares clave-valor que se hacen disponibles para un programa en ejecución, generalmente con fines de configuración. Aunque se puede usar cualquier variable, Node fomenta la convención de usar una variable llamada NODE_ENV para marcar si estamos en producción en este momento. Esta información permite a los componentes proporcionar mejores diagnósticos durante el desarrollo, por ejemplo, deshabilitando el caché o registrando logs más detallados. Cualquier herramienta moderna de deploy —Chef, Puppet, CloudFormation y otros— soporta la asignación de variables de entorno durante el deploy.

<br/><br/>

### Code example: Setting and reading the NODE_ENV environment variable

```javascript
// Setting environment variables in bash before starting the node process
$ NODE_ENV=development
$ node

// Reading the environment variable using code
if (process.env.NODE_ENV === “production”)
    useCaching = true;
```

<br/><br/>

### What Other Bloggers Say

From the blog [dynatrace](https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/):
> ...In Node.js there is a convention to use a variable called NODE_ENV to set the current mode. We see that it, in fact, reads NODE_ENV and defaults to ‘development’ if it isn’t set. We clearly see that by setting NODE_ENV to production the number of requests Node.js can handle jumps by around two-thirds while the CPU usage even drops slightly. *Let me emphasize this: Setting NODE_ENV to production makes your application 3 times faster!*

![NODE_ENV=production](/assets/images/setnodeenv1.png "NODE_ENV=production")

<br/><br/>
