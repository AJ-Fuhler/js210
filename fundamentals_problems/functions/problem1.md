```Javascript
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log the string 'This is global'.
On line 1, we declare a global variable `myVar` and initialize it with the
value `'This is global'`. When we invoke `someFunction` on line 7, someFunction
creates a local variable `myVar`, which is different from the global `myVar`.
Javascript has function scope, and any variables declared inside of a function
do not affect variables from outside of it, even if it shares a name with a
variable from its outer scope.