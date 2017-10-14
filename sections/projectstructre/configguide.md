# Use environment aware, secure and hirearchical config

<br/><br/>


### One Paragraph Explainer

When dealing with configuration data, many things can just annoy and slow down: (1) when setting all the keys using environment variables it just become very tedious to inject 100 keys into the process (instead of just committing those in a config file), however when dealing with files only the devops admins can not alter the behaviour without changing the code. A reliable config solution must combine both configuration files + overrides from the process variables (b) when specifying all keys in a flat JSON, it become frustrating to find and modify entries when the list grows above 100 lines. An hirearchical JSON files that is grouped into section can overcome this issue + few config libraries allows to store the configuration in multiple files and take care to union all in runtime (3) storing sensitive information like DB password is obviously not recommended but no quick and handy solution exists for this challenge. Some configuraiton library allows to encrypt files, others encrypt those entries during GIT commits or simple don't store real values for those entries and specify the actual value during deployment via environment variables. (4) some advances scenario demand to inject configuration value via command line (vargs), sync configuration info via centralized cache like Redis so different servers will hold different data - some configuration libraries can provide all these features for free. 

You may have a look at NPM libraries like [nconf](https://www.npmjs.com/package/nconf) and [config](https://www.npmjs.com/package/config) which tick many of these requirements.

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
