```Javascript
logValue();

function logValue() {
  console.log('Hello, world!');
}
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log `'Hello, world!'`. Again, talking about the concept of
hoisting: during the creation phase of running the code, all declarations are
hoisted, but also functions. However, unlike with variable declarations,
function declarations are hoisted together with the entire function definition.
Because of this, you can access a function before its appearance in your source
code. The hoisted equivalent of this code is:

```Javascript
function logValue() {
    console.log('Hello, world');
}

logValue();
```

Further exploration:

This logs `'string'`. Functions are hoisted above variable declarations. This
means the equivalent hoisted code would be:

```Javascript
function logValue() {
    console.log('Hello, world!');
}

var logValue = 'foo'

console.log(typeof logValue)
```

As we can see in the code snippet, The variable logValue no longer contains a
pointer to a function object, but instead is reassigned to the value `'foo'`.
`'foo'` is a string, so `typeof logValue` logs `'string'`.