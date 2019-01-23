[✔]: ../../assets/images/checkbox-small-blue.png

# Common Node.js security best practices

The common performance guidelines section contains best practices that are standardized in many frameworks and conventions, running an application with compression for example should be a common guideline and convention followed in every setup to achieve great performance benefits.

## ![✔] Use compression on your responses

**TL;DR:** Use the compression middleware (or the compression module with Nginx) to reduce the response from your server, thus speeding up your API.

**Otherwise:** You will have a larger response than you need, thus taking more time to send your data to users. 

🔗 [**Read More: Using compression**](/sections/performance/compression.md)

<br/><br/>


## ![✔] Deal with database and external APIs in batches

**TL;DR:** 

**Otherwise:** 

🔗 [**Read More: Batch APIs**](/sections/performance/batch-apis.md)

<br/><br/>


## ![✔] Benchmark slow db calls

Monitoring your database for common and slow db calls. When viewing these queries, check the docs for how to optimize these queries or cache them. Here are links to some commong way to monitor your database queres: [postgres](https://wiki.postgresql.org/wiki/Monitoring), [mysql](https://www.digitalocean.com/community/tutorials/how-to-use-mysql-query-profiling), [mongodb](https://stackoverflow.com/questions/15204341/mongodb-logging-all-queries)

<br/><br/>

## ![✔] Analyze repeated API Calls

**TL;DR:** 

**Otherwise:** 

🔗 [**Read More: Analyze API calls**](/sections/performance/analyze-api-calls.md)

<br/><br/>

## ![✔] Serve static assets from a CDN

**TL;DR:** 

**Otherwise:** 

🔗 [**Read More: Use CDN**](/sections/performance/use-cdn.md)

<br/><br/>

