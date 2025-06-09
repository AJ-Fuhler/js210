// What will the following code snippets log?

// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }


// Snippet 1:
// This snippet will output the string 'The total value is 15'. You may think
// that because of hoisting, the function declaration takes presedence over its
// equally named variable declaration, which is true. However, once we actually
// execute this code during the execution phase, we run into the initialization
// of `counter` to `5` before the function declaration. This means that by the
// time we reach our `console.log` invocation, `counter` is 5 and we get our
// expected string.



// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;

// Snippet 2:
// In this case, the function declaration appears before we reassign
// `counter` to `5`, which means during our `console.log` invocation, `counter`
// references a function object. On top of that, Even though rate is hoisted and
// already accessible, it is first initialized to `undefined` until we reach the
// initialization, which only comes after our `console.log` invocation. This
// means our output will be 'The total value is NaN', since `String(counter *
// rate) === String(NaN * NaN) === String(NaN)`.



// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// Snippet 3:
// In this case, counter originally references the function because of hoisting.
// However, we reach the initialization of counter to `5` and the `console.log`
// invocation before reaching the function declaration.  In this case, that
// means once we reach our `console.log` invocation and we evaluate
// `String(counter * rate)`, it equals `String(5 * 3)`, which evaluates to `15`.
// This is why this snippet will output 'The total value is 15`.



// let counter = 5;
// let rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// Snippet 4:
// In this case, `counter` is declared with the `let` statement,
// which will raise a SyntaxError during the creation phase, because you can not
// have a function and a variable declared with `let` with the same name.