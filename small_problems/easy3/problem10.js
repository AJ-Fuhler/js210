const wordSizes = string => {
  if (string === '') {
    return {};
  }

  const wordSizeCount = {};
  const cleanedString = string.replace(/[^a-zA-Z ]/g, '');
  const words = cleanedString.split(' ');

  words.forEach(word => {
    wordSizeCount[word.length] = (wordSizeCount[word.length] || 0) + 1;
  });

  return wordSizeCount;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}