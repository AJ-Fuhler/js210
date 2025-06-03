function reverseArray(arr) {
  let newArr = [];
  for (let idx = arr.length - 1; idx >= 0; i -= 1) {
    newArr.push(arr[idx]);
  }

  return newArr;
}