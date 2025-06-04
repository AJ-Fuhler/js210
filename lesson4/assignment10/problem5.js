function uniqueElements(arr) {
  let set = [];

  for (let element of arr) {
    if (set.indexOf(element) === -1) {
      set.push(element);
    }
  }

  return set;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));