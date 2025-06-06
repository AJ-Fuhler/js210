function reverse(inputForReversal) {
  let reversedResult = [];

  for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
    reversedResult.push(inputForReversal[index]);
  }

  return Array.isArray(inputForReversal) ? reversedResult : reversedResult.join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]