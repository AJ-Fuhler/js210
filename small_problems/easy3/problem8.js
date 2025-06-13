const swapFirstAndLast = word => {
  const chars = word.split('');
  [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];

  return chars.join('');
};

const swap = string => {
  const words = string.split(' ');
  const swappedWords = [];
  for (let word of words) {
    swappedWords.push(swapFirstAndLast(word));
  }

  return swappedWords.join(' ');
};

// or with map:

// const swap = string => {
//   return string.split(' ').map(word => swapFirstAndLast(word)).join(' ');
// };

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"