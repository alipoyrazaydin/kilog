# kilog
a small Node.JS Package that will make your console logs look like Tree-View. Here's how you use it:
```js
// Initialize kiLog, so it can tamper with Global variables.
require("kilog")();

// Use kiLog :>
log("Hello!")
   .logEnd("My name is kiLog!");
```
but wait, there is more usages, like Verbose logging and Error logging!!1!
```js
// Initialize kiLog, so it can tamper with Global variables.
require("kilog")();

// Set Process' verbose boolean if you want to see the output :P
process.verbose = true;

// Use kiLog :>
const c = log("Initializing Classes");
c.verboseMore("Initializing Caching Class...");
c.verboseEnd("Initializing YourMom Class...")
            .errorEnd("ERROR: Target class is too huge!");
```

tl;dr:
 use it like a normal console.log but it's object-based.

have fun coding!
