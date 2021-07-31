# Desarrolla código listo para producción

<br/><br/>

### Párrafo de explicación

La siguiente lista contiene consejos de desarrollo que afectan en gran medida al mantenimiento y estabilidad de producción:

* La guía de los doce factores: familiarízate con la guía de [Los doce factores](https://12factor.net/).
* Sin estado: no guardes datos localmente en un servidor web específico (consulta el apartado separado: "Sin estado").
* Caché: utiliza mucho caché, pero nunca falles por discordancia de caché.
* Prueba la memoria: vigila el uso de la memoria y las fugas como parte del flujo de desarrollo —herramientas como "memwatch" pueden facilitar enormemente esta tarea.
* Nombra tus funciones: minimiza el uso de funciones anónimas (es decir, inline callbacks) ya que el típico perfilador de memoria relacionará cada uso de memoria con su nombre de función respectiva.
* Utiliza herramientas de CI: utiliza la herramienta de CI para detectar fallos antes de mandar el código a producción. Por ejemplo, utiliza ESLint para detectar errores de referencia y variables no definidas. Utiliza --trace-sync-io para identificar código que ejecute APIs síncronas en vez de su versión asíncrona.
* Logs inteligentemente: incluye en cada entrada de log información contextual, si puede ser en formato JSON, para que las herramientas de agregadores de log como Elastic puedan buscar en esas propiedades (consulta la sección separada: "Aumentar la visibilidad mediante logs inteligentes"). Además, incluye la ID de transacción que identifica cada petición y permite correlacionar líneas que describen la misma transacción (vea sección aparte: "Incluir ID de transacción").
* Gestión de errores: la gestión de errores es el talón de Aquiles de los sitios de producción de Node.js: muchos procesos de Node se bloquean debido a errores menores, mientras que otros se cuelgan en un estado defectuoso en vez de fallar. Establecer una estrategia de gestión de errores es absolutamente crítico, lee aquí mis [mejores prácticas para la gestión de errores](http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/).
