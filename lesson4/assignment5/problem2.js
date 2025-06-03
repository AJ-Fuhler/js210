function splice(arr, start, toRemove) {
  let removedElements = [];

  for (let index = start; index < arr.length; index += 1) {
    if (index < start + toRemove) {
      removedElements.push(arr[index]);
    }

    arr[index] = arr[index + toRemove];
  }

  arr.length = arr.length - removedElements.length;
  return removedElements;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]