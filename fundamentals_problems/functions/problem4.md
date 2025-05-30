```Javascript
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log '`This is global'` to the console. When we invoke
`someFunction`, JavaScript will execute this line: `console.log(myVar);`.
Javascript will look for the `myVar` variable, starting in the current scope,
which is the function scope within `someFunction`. Since it won't find a
variable declared with that name inside of it, JavaScript will look for it in
the lexical scope. It will find the globally declared `myVar` and use its
assigned value as the argument to `console.log`.