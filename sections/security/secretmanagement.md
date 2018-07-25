# Extract secrets from config files or use npm package that encrypts them

### One Paragraph Explainer

The most common and secure way to provide a Node.js application access to keys and secrets is to store them using environment variables on the system where it is being run. Once set, these can be accessed from the global `process.env` object.
A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials.

For rare situations where secrets do need to be stored inside source control, using a package such as [cryptr](https://www.npmjs.com/package/cryptr) allows these to be stored in an encrypted form as opposed to in plain text.

There are a variety of tools available which use git commit to audit commits and commit messages for accidental additions of secrets, such as [git-secrets](https://github.com/awslabs/git-secrets).

### Code example

Accessing an API key stored in an environment variable:

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

Using `cryptr` to store an encrypted secret:

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
 
let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');
 
console.log(accessToken);  // outputs decrypted string which was not stored in source control
```

### What other bloggers say

> Env vars are easy to change between deploys without changing any code; unlike config files, there is little chance of them being checked into the code repo accidentally; and unlike custom config files, or other config mechanisms such as Java System Properties, they are a language- and OS-agnostic standard. [From: The 12 factor app](https://12factor.net/config)
