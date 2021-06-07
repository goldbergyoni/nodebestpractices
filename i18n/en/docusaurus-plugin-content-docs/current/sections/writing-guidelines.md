# Our content writing manifest

How we enhance the reading and learning experience for our visitors.

## 1. Simple is better than better

Making it easy to read and absorb knowledge is our mission, we curate content. As such we focus on transforming complex and exhausting topics into a simplified list, trade overloaded information with shortened and less-accurate details, avoid ‘flammable’ and controversial topics and escape subjective ideas in favor of generally accepted practices.

## 2. Be evidence-based and reliable

Our readers should have great confidence that the content they skim through is reliable. We achieve this by including evidence like references, data and other resources available to this topic. Practically, strive to include quotes from reliable sources, show benchmarks, related design patterns or any scientific measure to prove your claims.

## 3. MECE (Mutually Exclusive and Collectively Exhaustive)

Apart from the content being greatly edited and reliable, skimming through it should also provide full coverage of the topic. No important sub-topic should be left out.

## 4. Consistent formatting

The content is presented using fixed templates. Any future content must conform to the same template. If you wish to add new bullets copy a bullet format from an existing bullet and extend it to your needs. For additional information please view [this template](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/template.md).

## 5. It's About Node.js

Each advice should be related directly to Node.js and not to software development in general. When we advise to implement generic pattern/rule in Node.js, the content should focus on the Node implementation. For example, when we advise to sanitize all requests input for security reasons, Node-lingo should be used - ‘Use middleware to sanitize request input’. If an item has no specific implementation in Node.js (e.g. it looks the same in Python & Java) - include it within a generic container item, see item 6.5 for example.

## 6. Leading vendors only

Sometimes it's useful to include names of vendors that can address certain challenges and problems like npm packages, open source tools or even commercial products. To avoid overwhelmingly long lists or recommending non-reputable and unstable projects, we came up with the following rules:

- Only the top 3 vendors should be recommended – a vendor that appears in the top 3 results of a search engine (Google or GitHub sorted by popularity) for a given relevant keyword can be included in our recommendation.
- If it’s a npm package it must also be downloaded at least 750 times a day on average.
- If it’s an open-source project, it must have been updated at least once in the last 6 months.
