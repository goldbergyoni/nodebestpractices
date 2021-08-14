# Escanee toda la imagen antes de producción

<br/><br/>

### Párrafo de explicación

Escanear el código en busca de vulnerabilidades es un acto valioso, pero no cubre todas las amenazas potenciales. ¿Por qué? Porque también existen vulnerabilidades en el nivel del SO (Sistema Operativo) y la aplicación puede ejecutar esos binarios como Shell, Tarball, OpenSSL. Además, las dependencias vulnerables pueden inyectarse después del escaneo del código (es decir, ataques a la cadena de suministros) - por lo tanto, es necesario escanear la imagen final justo antes de producción. Esta idea se asemeja a las pruebas E2E - después de probar las diversas piezas de forma aislada, es valioso verificar finalmente el producto ensamblado. Hay 3 familias principales de escáneres: binarios locales/CI con una base de datos de vulnerabilidades en caché, escáneres como servicio en la nube y un nicho de herramientas que escanean durante la propia compilación de Docker. El primer grupo es el más popular y, por lo general, el más rápido - Vale la pena explorar herramientas como [Trivvy](https://github.com/aquasecurity/trivy), [Anchore](https://github.com/anchore/anchore) y [Snyk](https://support.snyk.io/hc/en-us/articles/360003946897-Container-security-overview). La mayoría de los proveedores de CI ofrecen un complemento local que facilita la interacción con estos escáneres. Cabe señalar que estos escáneres cubren una gran cantidad de terreno y, por lo tanto, mostrarán hallazgos en casi todos los escaneos - considere establecer un umbral alto para evitar abrumarse.

<br/><br/>

### Código de ejemplo – Escaneando con Trivvy

<details>

<summary><strong>Bash</strong></summary>

```console
$ sudo apt-get install rpm
$ wget https://github.com/aquasecurity/trivy/releases/download/{TRIVY_VERSION}/trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ sudo dpkg -i trivy_{TRIVY_VERSION}_Linux-64bit.deb
$ trivy image [YOUR_IMAGE_NAME]
```

</details>

<br/><br/>

### Informe de ejemplo – Resultados del escaneo de Docker (por Anchore)

![Report examples](../../assets/images/anchore-report.png "Docker scan report")
