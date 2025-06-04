function missing(integers) {
  let missingIntegers = [];
  let smallestInteger = Math.min(...integers);
  let largestInteger = Math.max(...integers);

  for (let integer = smallestInteger; integer <= largestInteger; integer += 1) {
    if (integers.indexOf(integer) === -1) {
      missingIntegers.push(integer);
    }
  }

  return missingIntegers;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []