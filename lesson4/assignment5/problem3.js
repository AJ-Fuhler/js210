function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function concat(arr1, arr2) {
  let newArr = [];

  for (let elem of arr1) {
    push(newArr, elem);
  }

  for(let elem of arr2) {
    push(newArr, elem)
  }

  return newArr;
}