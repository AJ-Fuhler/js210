```Javascript
console.log(a);

var a = 1;
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log `undefined`. Variables declared with `var` have function
scope. What this means is that during the creation phase of running this code,
one of the things the Javascript engine does is find all identifiers and find
out what scope they're in. This process is called 'hoisting'. Because `var` has
function scope, the variable can be accessed before it's declared in the source
code, but it's been given a default value of `undefined`. This explains the
output. Even though no physical rearranging of code happens, we can access
identifiers with function scope as if it did, keeping in mind that those
identifiers will have the default value of `undefined` until the initialization
actually happens during the executing phase. After hoisting, the code is run as
if it was written like this:

```Javascript
var a;
console.log(a);

a = 1;
```