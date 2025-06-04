function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let removedElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return removedElement;
}

function push(arr, ...args) {
  for (let arg of args) {
    arr[arr.length] = arg;
  }
  return arr.length;
}