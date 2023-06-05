# Lock dependencies

<br/><br/>

### One Paragraph Explainer

Your code depends on many external packages, let’s say it ‘requires’ and use momentjs-2.1.4, then by default when you deploy to production npm might fetch momentjs 2.1.5 which unfortunately brings some new bugs to the table. Using npm config files and the argument `–save-exact=true` instructs npm to refer to the _exact_ same version that was installed so the next time you run `npm install` (in production or within a Docker container you plan to ship forward for testing) the same dependent version will be fetched. Due to this, starting from npm version 5 a package-lock.json file is generated in every install. This lock file pins all the dependencies and child dependencies versions. When the file is committed, any future install the gets a copy of the app will install the same dependencies version

<br/><br/>

### Code example: .npmrc file that instructs npm to use exact versions

```npmrc
// save this as .npmrc file on the project directory
save-exact:true
```

<br/><br/>

### Code example: npm 5 dependencies lock file – package-lock.json

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
