const wordSizes = string => {
  if (string === '') {
    return {};
  }

  const wordSizeCount = {};
  const words = string.split(' ');

  words.forEach(word => {
    if (wordSizeCount[word.length]) {
      wordSizeCount[word.length] += 1;
    } else {
      wordSizeCount[word.length] = 1;
    }
  });

  return wordSizeCount;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}