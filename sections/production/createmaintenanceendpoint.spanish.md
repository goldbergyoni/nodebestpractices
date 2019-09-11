# Crea un endpoint de mantenimiento

<br/><br/>

### Párrafo de explicación

Un endpoint de mantenimiento es una API HTTP plana y securizada que es parte del código de la aplicación y su propósito es ser usado por el equipo de ops/producción para monitorizar y exponer funcionalidades de mantenimiento. Por ejemplo, puede devolver un "Heap Dump" (snapshot de memoria) del proceso, reportar si hay fugas de memoria e incluso permitir la ejecución de comandos REPL directamente. El endpoint se necesita donde las herramientas convencionales de devops (productos de monitorización, logs, etc) fallan en recoger algún tipo específico de información o si simplemente eliges no comprar/instalar dichas herramientas. La regla de oro es utilizar herramientas externas y profesionales para monitorizar y mantener la aplicación en producción, ya que normalmente éstas son más robustas y precisas. Dicho eso, puede haber casos en los que las herramientas genéricas fallen en extraer información específica de Node o de tu aplicación —por ejemplo, si deseas generar una snapshot de memoria en el instante en el que GC completa un ciclo— algo que unas cuantas librerías NPM estarán encantadas de hacer por ti, pero que probablemente falte en herramientas de monitorización populares.

<br/><br/>

### Code example: generating a head dump via code

```javascript
var heapdump = require('heapdump');

router.get('/ops/headump', (req, res, next) => {
    logger.info('About to generate headump');
    heapdump.writeSnapshot((err, filename) => {
        console.log('headump file is ready to be sent to the caller', filename);
        fs.readFile(filename, "utf-8", (err, data) => {
            res.end(data);
        });
    });
});
```

<br/><br/>

### Recommended Resources

[Getting your Node.js app production ready (Slides)](http://naugtur.pl/pres3/node2prod)

▶ [Getting your Node.js app production ready (Video)](https://www.youtube.com/watch?v=lUsNne-_VIk)

![Getting your Node.js app production ready](/assets/images/createmaintenanceendpoint1.png "Getting your Node.js app production ready")
