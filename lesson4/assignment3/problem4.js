function shift(arr) {
  let removedValue = arr[0]

  if (arr.length === 0) {
    return undefined;
  }

  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    arr[idx] = arr[idx + 1]
  }

  arr.length = arr.length - 1;
  return removedValue;
}

let count = [1, 2, 3];
console.log(shift(count));
console.log(count);
