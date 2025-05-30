```Javascript
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log `7`. Even though we're passing `a` as an argument to the
`myValue` function, since the variable `a` points to a `number`, Javascript
will act as "pass-by-value", meaning the parameter `b` will be assigned the
same value as `a`, which is `7`, but this is merely a copy of the value, rather
than a reference to it. In Javascript, primitive values are stored directly in
the memory location that the variable points to. Only copies of the value it
contains can be made, which makes those values immutable. This is why `b += 10`
simply reassigns the `b` variable, but doesn't affect the `a` variable in any
way.