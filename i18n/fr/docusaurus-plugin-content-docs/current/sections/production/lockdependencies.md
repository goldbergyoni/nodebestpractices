# Verrouillez les dépendances

<br/><br/>

### Un paragraphe d'explication

Votre code dépend de nombreux paquets externes, disons qu'il "requiert" et utilise momentjs-2.1.4, puis par défaut lorsque vous déployez en production, npm peut récupérer momentjs 2.1.5, ce qui malheureusement apporte quelques nouveaux bogues. L'utilisation de fichiers de configuration npm et de l'argument ```–save-exact=true``` indique à npm de se référer à la version *strictement* identique à celle qui a été installée, donc la prochaine fois que vous exécuterez ```npm install``` (en production ou dans un conteneur Docker que vous prévoyez d'expédier pour test), la même version dépendante sera récupérée. Une approche alternative et populaire utilise un fichier `.shrinkwrap` (facilement généré à l'aide de npm) qui indique exactement quels packages et versions doivent être installés afin qu'aucun environnement ne soit tenté de récupérer des versions plus récentes que prévu.

* **Mise à jour :** à partir de npm 5, les dépendances sont verrouillées automatiquement à l'aide de .shrinkwrap. Yarn, un nouveau gestionnaire de packages, verrouille également les dépendances par défaut.

<br/><br/>

### Exemple de code : fichier .npmrc qui demande à npm d'utiliser des versions exactes

```npmrc
// enregistrez-le en tant que fichier .npmrc dans le répertoire du projet
save-exact:true
```

<br/><br/>

### Exemple de code : fichier shrinkwrap.json qui extrait l'arbre exact des dépendances

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

### Exemple de code : fichier de verrouillage des dépendances npm 5 - package-lock.json

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
