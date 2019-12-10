# Lock dependencies

<br/><br/>

### One Paragraph Explainer

Your code depends on many external packages, let’s say it ‘requires’ and use momentjs-2.1.4, then by default when you deploy to production npm might fetch momentjs 2.1.5 which unfortunately brings some new bugs to the table. Using npm config files and the argument ```–save-exact=true``` instructs npm to refer to the *exact* same version that was installed so the next time you run ```npm install``` (in production or within a Docker container you plan to ship forward for testing) the same dependent version will be fetched. An alternative and popular approach is using a `.shrinkwrap` file (easily generated using npm) that states exactly which packages and versions should be installed so no environment can get tempted to fetch newer versions than expected.

* **Update:** as of npm 5, dependencies are locked automatically using .shrinkwrap. Yarn, an emerging package manager, also locks down dependencies by default.

<br/><br/>

### Code example: .npmrc file that instructs npm to use exact versions

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

### Code example: npm 5 dependencies lock file – package.json

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
