var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();


Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log the string `'This is local'`. When we invoke `someFunction`
on line 8, we declare a local variable `myVar` and initialize it with the value
`'This is local'`. This does not reassign the global variable `myVar` that was
declared and initialized on line 1, because in Javascript, function create
function scope and any variables declared within it are local to the function,
even if a local variable has the same name as a variable in the outer scope. In
this case, the local `myVar` 'shadows' and blocks access to the global `myVar`.
Then, we invoke `console.log` with `myVar` as its argument. Javascript will
first look for the variable `myVar` in the current environment, which is within
the `someFunction` function. It does find a variable with that name there, and
thus logs the value it points to: `'This is local'`.