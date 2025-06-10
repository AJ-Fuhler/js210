// The productOfSums function shown below is expected to return the product of
// the sums of two arrays of numbers. Read through the following code. Will it
// produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

console.log(productOfSums([1, 2, 3], [1, 2, 3]));

// The `productOfSums` function will return NaN in all cases, since the `total`
// function doesn't return its `sum` variable. The return statement is omitted,
// and thus total implicitly returns `undefined`. On top of that, even if we did
// return `sum`, since `sum` is not initialized explicitly, it has a value of
// `undefined`. incrementing numbers to `undefined` results in `Nan`. This means
// we are assigning `result` to `undefined * undefined` which equals `NaN`.