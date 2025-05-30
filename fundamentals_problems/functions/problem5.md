```Javascript
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log '`This is global'` to the console. When we invoke
`someFunction`, we execute this line in the function body: `myVar = 'This is
global'`. Since this statement lacks a `let`, `const`, or `var` keyword,
Javascript will go up the scope chain to find a variable by that name, and
attempt to reassign it if possible. In this case, there is no `myVar` variable
declared anywhere, so in that case, Javascript will declare a global variable
`myVar` and assign it the value `This is global`. Because `myVar` is global,
Javascript has access to that variable when calling `console.log(myVar)`, which
explains the output of this code snippet.