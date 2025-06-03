function unshift(arr, value) {
  for (let idx = arr.length; idx > 0; idx -= 1) {
    arr[idx] = arr[idx - 1]
  }

  arr[0] = value;
  return arr.length;
}