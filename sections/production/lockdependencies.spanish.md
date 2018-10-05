# Bloquea dependencias

<br/><br/>

### Párrafo de explicación

Tu código depende de muchos paquetes externos. Digamos que 'requiere' y usa momentjs-2.1.4, entonces, por defecto, al deployear a producción NPM quizá baje momentjs 2.1.5, lo que por desgracia arroja nuevos bugs a la sopa. Utilizando archivos de configuración de NPM y el argumento ```–save-exact=true``` se le ordena a NPM hacer uso de la versión exacta que se instaló para que la próxima vez que ejecutes ```npm install``` (en producción o en un contenedor Docker que vas a mandar para testing) se instale la misma versión del paquete. Una solución alternativa y popular es usar un archivo `.shrinkwrap` (generado fácilmente con NPM) que declara con exactitud qué paquetes y versiones deben instalarse de modo que ningún entorno pueda verse tentado a buscar versiones más recientes.

* **Actualización:** a partir de NPM 5, las dependencias se bloquean automáticamente mediante .shrinkwrap. Yarn, un gestor de paquetes en auge, también bloquea las dependencias por defecto.

<br/><br/>

### Code example: .npmrc file that instructs NPM to use exact versions

```npmrc
// save this as .npmrc file on the project directory
save-exact:true
```

<br/><br/>

### Code example: shrinkwrap.json file that distills the exact dependency tree

```json
{
    "name": "A",
    "dependencies": {
        "B": {
            "version": "0.0.1",
            "dependencies": {
                "C": {
                    "version": "0.1.0"
                }
            }
        }
    }
}
```

<br/><br/>

### Code example: NPM 5 dependencies lock file – package.json

```json
{
    "name": "package-name",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "dependencies": {
        "cacache": {
            "version": "9.2.6",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
            "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
        },
        "duplexify": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
            "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
            "dependencies": {
                "end-of-stream": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
                    "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
                }
            }
        }
    }
}
```
