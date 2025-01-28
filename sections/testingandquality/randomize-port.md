# Specify a port in production, randomize in testing

<br/><br/>

### One Paragraph Explainer

When writing component/integration tests, the web server should be started by the tests in the same process - this opens the door for many desirable testing features like mocking, coverage, and more. In a multi-process test runner, multiple web server instances will be opened. If these instances try to open the same port, they will collide. In testing only, let the server randomize a port to prevent collisions. This can easily achieved by providing an [ephemeral port](https://en.wikipedia.org/wiki/Ephemeral_port), the number zero, so the operating system will allocate an available port 

<br/><br/>

### Code Example – starting the web server with testing in-mind

```javascript
// api-under-test.js
const initializeWebServer = async () => {
  return new Promise((resolve, reject) => {
    // Fixed port in production, a zero port (ephemeral) for testing
    const webServerPort = process.env.PORT ? process.env.PORT : 0;
    expressApp = express();
    connection = expressApp.listen(webServerPort, () => {
      // No port
      resolve(expressApp);
    });
  });
};

// test.js
beforeAll(async () => {
  expressApp = await initializeWebServer(); // No port
});
```
