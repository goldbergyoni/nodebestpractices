# Use environment aware, secure and hirearchical config

<br/><br/>


### Bullet Point Explainer

When dealing with configuration data, many things can just annoy and slow down:

- **environment vs config files**: setting all the keys using process environment variables becomes very tedious when in need to inject 100 keys (instead of just committing those in a config file), however when dealing with files only, the devops admins can not alter the behaviour without changing the code. A reliable config solution must combine both configuration files + overrides from the process variables,

- **merging configurations**: when specifying all keys in a flat JSON, it becomes frustrating to find and modify entries when the list grows bigger. A hierarchical JSON files that is grouped into section can overcome this issue + few config libraries allow to store the configuration in multiple files and take care to union all in runtime. See example below,

- **handling sensitive info**: storing sensitive information like DB passwords is obviously not recommended but no quick and handy solution exists for this challenge. Some configuration libraries allow to encrypt files, others encrypt those entries during GIT commits. Another solution is to simply not store real values for those entries and specify the actual value during deployment via environment variables.

- **centralized configuration**: certain advanced config scenarios demand to inject configuration values via command line (vargs) or sync configuration info via centralized cache like Redis so different servers won't hold different data.

Some configuration libraries can provide most of these features for free, have a look at NPM libraries like [nconf](https://www.npmjs.com/package/nconf) and [config](https://www.npmjs.com/package/config) which tick many of these requirements.

<br/><br/>

### Code Example – hirearchical config helps to find entries and maintain huge config files

```javascript
{
  // Customer module configs 
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Set low for development 
      "initialDays": 1
    }
  }
}
```

<br/><br/>
