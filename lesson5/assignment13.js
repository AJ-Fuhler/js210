function repeatedCharacters(string) {
  let allChars = {};

  for (let char of string) {
    char = char.toLowerCase();

    if (char in allChars) {
      allChars[char] += 1;
    } else {
      allChars[char] = 1;
    }
  }

  let repeatedChars = {};

  for (let key in allChars) {
    if (allChars[key] >= 2) {
      repeatedChars[key] = allChars[key];
    }
  }

  return repeatedChars;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }