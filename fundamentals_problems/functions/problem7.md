```Javascript
let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log `7`. If we look at the function body by itself, we could be
fooled into thinking that we are reassigning the global variable `a`. However,
`myValue` has a parameter with the name `a`, which takes on whichever value is
passed to it. In this case, a copy of the value that the global `a` contains is
passed in and assigned to the parameter `a`. This parameter or local variable
`a` shadows the global variable `a` and besides having the same value
temporarily, are completely distinct variables. Because of how scope chain
works, when Javascript encounters `a += 10;` in the function body, it will
first look in its current lexical environment, which is the `myValue` function
and in this case will find the local `a` variable and reassigns that. The
global variable `a` is completely unchanged since the variable shadowing that
happened blocked access to it.