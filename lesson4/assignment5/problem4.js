function join(arr, separator) {
  let newString = '';
  for (let index = 0; index < arr.length; index += 1) {
    newString += String(arr[index])

    if (index < arr.length - 1) {
      newString += separator;
    }
  }

  return newString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'