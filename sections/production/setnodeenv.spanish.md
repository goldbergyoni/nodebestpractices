# Asigna NODE_ENV = production

<br/><br/>

### Párrafo de explicación

Las variables de entorno de proceso son un conjunto de pares clave-valor que se hacen disponibles para un programa en ejecución, generalmente con fines de configuración. Aunque se puede usar cualquier variable, Node fomenta la convención de usar una variable llamada NODE_ENV para marcar si estamos en producción en este momento. Esta información permite a los componentes proporcionar mejores diagnósticos durante el desarrollo, por ejemplo, deshabilitando el caché o registrando logs más detallados. Cualquier herramienta moderna de deploy —Chef, Puppet, CloudFormation y otros— soporta la asignación de variables de entorno durante el deploy.

<br/><br/>

### Código de ejemplo: Configurando y leyendo la variable de entorno NODE_ENV

```shell script
# Configurando las variables de entorno en bash antes de empezar el proceso Node
$ NODE_ENV=development
$ node
```

```javascript
// Leyendo la variable de entorno usando código
if (process.env.NODE_ENV === 'production')
    useCaching = true;
```

<br/><br/>

### Cita de Blog: "Se lee NODE_ENV y está predeterminada como "development""

From the blog [dynatrace](https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/):
> ...In Node.js there is a convention to use a variable called NODE_ENV to set the current mode. We see that it, in fact, reads NODE_ENV and defaults to ‘development’ if it isn’t set. We clearly see that by setting NODE_ENV to production the number of requests Node.js can handle jumps by around two-thirds while the CPU usage even drops slightly. *Let me emphasize this: Setting NODE_ENV to production makes your application 3 times faster!*

> ... En Node.js existe una convención en usar una variable llamada NODE_ENV y asignarle el modo actual, Podemos ver que, en realidad, Se lee NODE_ENV y está predeterminada como "development" si no es asignada. Podemos ver claramente que al configurar NODE_ENV a "production" el número de peticiones que Node.js puede manejar aumenta alrededor de dos-tercios mientras que el uso del CPU incluso baja un poco. *Permiteme enfatizar eso: ¡Configurar NODE_ENV a "production" hace tu aplicación 3 veces más rápida!*

![NODE_ENV=production](/assets/images/setnodeenv1.png "NODE_ENV=production")

<br/><br/>
