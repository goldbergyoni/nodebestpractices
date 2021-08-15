
Una imágen grande de Docker puede generar una mayor exposición a vulnerabilidades y un mayor consumo de recursos. A menudo, no es necesario instalar ciertos paquetes en tiempo de ejecución que son necesarios para la compilación.
Extraer y almacenar imágenes más grandes será más costoso a escala, cuando se trata de imágenes más grandes. Por diseño, es posible que las imágenes pequeñas no vengan con las bibliotecas comunes necesarias para compilar módulos nativos o paquetes útiles para depurar (por ejemplo, curl) pre-instaladas.
El uso de las variantes de imágenes de Alpine Linux puede reducir la huella en términos de recursos utilizados y la cantidad de vectores de ataque presentes en sistemas con todas las funciones. La imagen de Docker de Node.js v14.4.0 tiene un tamaño de ~345MB frente a ~39MB de la versión Alpine, que es casi 10 veces más pequeña.
La variante Slim basada en Debian, que tiene solo 38MB de tamaño y contiene los paquetes mínimos necesarios para ejecutar Node.js, también es una excelente opción.

### Cita de Blog: "Si desea reducir sus imágenes de Docker, hacer que sus servicios se inicien más rápido y sean más seguros, entonces pruebe Alpine"

Desde [Nick Janetakis' blog](https://nickjanetakis.com/blog/the-3-biggest-wins-when-using-alpine-as-a-base-docker-image)

> It’s no secret by now that Docker is heavily using Alpine as a base image for official Docker images. This movement started near the beginning of 2016. [...]
  When pulling down new Docker images onto a fresh server, you can expect the initial pull to be quite a bit faster on Alpine. The slower your network is, the bigger the difference it will be. [...] Another perk of being much smaller in size is that the surface area to be attacked is much less. When there’s not a lot of packages and libraries on your system, there’s very little that can go wrong.

> A estas alturas, no es ningún secreto que Docker utiliza en gran medida Alpine como imagen base para las imágenes oficiales de Docker. Este movimiento comenzó a principios de 2016. [...]
   Al descargar nuevas imágenes de Docker en un servidor nuevo, puede esperar que la extracción inicial sea bastante más rápida en Alpine. Cuanto más lenta sea su red, mayor será la diferencia. [...] Otra ventaja de ser mucho más pequeño es que la superficie a atacar es mucho menor. Cuando no hay muchos paquetes y bibliotecas en su sistema, hay muy pocas cosas que pueden salir mal.
