var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log the string `'This is local'`. On line 1, we declare and
initialize a variable `myVar` to the string `'This is global'`. On line 7, we
invoke `someFunction`. Since we omitted a keyword like `let`, `const`, or `var`
inside the function body, the statement `myVar = 'this is local'` actually
reassigns the global variable `myVar` to `'This is local'`. In JavaScript, you
have access to variables declared in outer scopes.