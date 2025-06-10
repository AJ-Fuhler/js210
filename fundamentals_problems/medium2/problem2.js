// Read through the following code. Currently, it does not log the expected
// result. Explain why this happens, then refactor the code so that it works as
// expected.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// The reason that this logs false, is because if one of the operands of the
// strict equality operator is an object, JavaScript will check whether the two
// operands have the same identity, meaning, whether they are the same object at
// the same memory location. Since they are not --they are defined separately--,
// it logs false. One way to refactor the code is:

const person = { name: 'Victor' };
const otherPerson = person; // otherPerson now contains a reference to the same object that person references.

console.log(person === otherPerson);