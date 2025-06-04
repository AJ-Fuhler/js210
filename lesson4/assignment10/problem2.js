function mirrorArr(arr) {
  let result = arr.slice();

  for (let index = arr.length - 1; index >= 0; index -= 1) {
    result.push(arr[index]);
  }

  return result;
}

let arr = [1, 2, 3];


// or, more concisely:

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

console.log(mirroredArray(arr));
console.log(mirrorArr(arr));