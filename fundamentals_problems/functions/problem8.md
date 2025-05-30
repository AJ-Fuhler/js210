```Javascript
let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
```

Question:

What will the following code log to the console and why? Don't run the code
until after you have tried to answer.

Answer:

This code will log `[1, 2, 10]` to the console. In Javascript, objects (like
arrays) are not stored in the same memory location as the variable, like with
primitive values. Instead, the variable will point to a memory location that
stores the actual object. When we pass a variable that points to an object to a
function, like we do with `myValue(a)`, we are passing a reference to the
original object, not a copy of the value like with primitive values, also known
as pass-by-reference. That means that the function parameter `b` now contains a
pointer or reference to the same object in memory that the global `a` does. Any
destructive actions will directly affect `a` as well, since it is the same
object. Since we do mutate the array by reassigning the element at index 2 and
replacing it by the value `10`. We will see this change when logging `a`.