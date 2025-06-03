function slice(array, start, end) {
  let newArray = [];

  for (let index = start; index < end; index += 1) {
    newArray.push(array[index]);
  }

  return newArray;
}