# Use environment aware, secure and hirearchical config

<br/><br/>


### One Paragraph Explainer

When dealing with configuration data, many things can just annoy and slow down: (1) setting all the keys using process environment variables becomes very tedious when in need to inject 100 keys (instead of just committing those in a config file), however when dealing with files only the devops admins can not alter the behaviour without changing the code. A reliable config solution must combine both configuration files + overrides from the process variables (b) when specifying all keys in a flat JSON, it becomes frustrating to find and modify entries when the list grows bigger. A hierarchical JSON file that is grouped into sections can overcome this issue + few config libraries allow to store the configuration in multiple files and take care to union all in runtime. See example below (3) storing sensitive information like DB password is obviously not recommended but no quick and handy solution exists for this challenge. Some configuraiton library allows to encrypt files, others encrypt those entries during GIT commits or simple don't store real values for those entries and specify the actual value during deployment via environment variables. (4) some advanced config scenario demand to inject configuration value via command line (vargs) or sync configuration info via centralized cache like Redis so different servers won't hold different data.

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
