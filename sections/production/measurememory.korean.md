# Measure and guard the memory usage

<br/><br/>

### One Paragraph Explainer

In a perfect world, a web developer shouldn’t deal with memory leaks. In reality, memory issues are a known Node’s gotcha one must be aware of. Above all, memory usage must be monitored constantly. In the development and small production sites, you may gauge manually using Linux commands or npm tools and libraries like node-inspector and memwatch. The main drawback of this manual activities is that they require a human being actively monitoring – for serious production sites, it’s absolutely vital to use robust monitoring tools e.g. (AWS CloudWatch, DataDog or any similar proactive system) that alerts when a leak happens. There are also few development guidelines to prevent leaks: avoid storing data on the global level, use streams for data with dynamic size, limit variables scope using let and const.

<br/><br/>

### What Other Bloggers Say

* From the blog [Dyntrace](https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/):
> ... ”As we already learned, in Node.js JavaScript is compiled to native code by V8. The resulting native data structures don’t have much to do with their original representation and are solely managed by V8. This means that we cannot actively allocate or deallocate memory in JavaScript. V8 uses a well-known mechanism called garbage collection to address this problem.”

* From the blog [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “Although this example leads to obvious results the process is always the same:
Create heap dumps with some time and a fair amount of memory allocation in between
Compare a few dumps to find out what’s growing”

* From the blog [Rising Stack](https://blog.risingstack.com/finding-a-memory-leak-in-node-js/):
> ... “fault, Node.js will try to use about 1.5GBs of memory, which has to be capped when running on systems with less memory. This is the expected behavior as garbage collection is a very costly operation.
The solution for it was adding an extra parameter to the Node.js process:
node –max_old_space_size=400 server.js –production ”
“Why is garbage collection expensive? The V8 JavaScript engine employs a stop-the-world garbage collector mechanism. In practice, it means that the program stops execution while garbage collection is in progress.”
