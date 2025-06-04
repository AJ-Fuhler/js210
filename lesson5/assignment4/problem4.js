function wordCount(string) {
  let result = {};

  for (let word of string.split(' ')) {
    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }

  return result;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }