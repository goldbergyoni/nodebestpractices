# Use TypeScript sparingly and thoughtfully

<br/><br/>

### One Paragraph Explainer

TypeScript has won the community's hearts and is almost a standard for modern JavaScript apps. Compared to plain JS, it brings much better coding ergonomics, facilitates editor code completions, even for historical libraries that were written with JavaScript and was proven to [prevent specific type of bugs](https://earlbarr.com/publications/typestudy.pdf). With that, if you look carefully under the hype, TypeScript actually brings two **mutually-exclusive** offerings to the table: type-safety and advanced design constructs like abstract classes, interfaces, namespaces and more. Many teams chose TypeScript for better type safety yet _unintentionally_, without any proper planning, use it for other purposes, such as OOP. These teams change their design style unintentionally due to the ['law of the instruments'](https://en.wikipedia.org/wiki/Law_of_the_instrument) — a cognitive bias that involves using the tooling in hand whether they are the right choice for the mission or not. In other words, if an 'abstract class' exists in the toolbox — developers will use it. If teams consciously opted for the coding techniques mentioned above — that's fair and legit. For others, positively consider coding with classic JavaScript, plain functions and objects, which are simply decorated with primitive types. The latter option is likely to result in lower complexity

<br/><br/>

### Research Quote: "15% less bugs"

From the research [To Type or Not to Type](https://earlbarr.com/publications/typestudy.pdf)

> "our central finding is that both static type systems find an important percentage of public bugs: both Flow 0.30 and TypeScript 2.0 successfully detect 15%!"

<br/><br/>

### Blog Quote: "TypeScript will always miss 80% of bugs"

From the post [The TypeScript tax](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b)

> "Some will argue that TypeScript provides realtime bug feedback, so you can catch the bugs earlier, but so do type inference, lint, and testing... You may argue that these other measures have a cost, but because TypeScript will always miss 80% of bugs, you can’t safely skip them either way, so their cost applies to both sides of the ROI math, and is already factored in"
