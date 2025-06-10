// What does the following code log? Why is this so?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// The following code will log:
// 40
// 45
//
// The reason That `totalPayable` has access
// to the latest value assigned to `startingBalance`, is because when you define
// a function, and within that function, you reference a variable from its
// lexical scope, a closure gets created that contains both the function object
// and a reference to the variables that it references. The key lies in that it
// references the variable, not the value that variable had at the time of
// definition. This is why, by the time the first `totalPayable` invocation is
// executed, it looks what `startingBalance`'s current value is, which is `5`,
// and thus uses the correct value for its return value. The same applies for
// the second invocation. It looks for the current value of `startingBalance`,
// and finds it to be 10, and thus used the updated value for its return value.