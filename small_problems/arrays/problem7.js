function shift(array) {
  let result = array[0];

  if (array.length !== 0) {
    array.splice(0, 1);
  }

  return result;
}

function unshift(array, ...elements) {
  for (let i = 0; i < elements.length; i += 1) {
    array.splice(i, 0, elements[i]);
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5, 6, 7));           // 3
console.log(testArray);                       // [5, 2, 3]
