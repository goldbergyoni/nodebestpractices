Node handles the Event Loop on a single thread rotating through multiple queues. Syncronous functions (usually ending with Sync) like `readFileSync` will prevent Node from moving through its phases thus blocking the Event Loop. Using too many `process.nextTick` calls or creating an infinite callback loop is another way to block the event loop. Use `process.nextTick` sparingly and carefully. Other CPU intensive tasks, such as DNS Lookup or Crypto will be offload to `lubuv`, take up other threads and starve new CPU intensive tasks. Use libraries such as `loopbench` or `blocked-at` to monitor your Event Loop and diagnose areas where the loop is being blocked.

## Image of the Event Loop
![1*aU5dr98pxTsZ4AMfnA6lNA.png](https://cdn-images-1.medium.com/max/1600/1*aU5dr98pxTsZ4AMfnA6lNA.png)

>Here's a good rule of thumb for keeping your Node server speedy: Node is fast when the work associated with each client at any given time is "small".
>[Don't Block the Event Loop (or the Worker Pool) \| Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Most people fail their first few NodeJS apps merely due to the lack of understanding of the concepts such as the Event Loop, Error handling and asynchrony 
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)