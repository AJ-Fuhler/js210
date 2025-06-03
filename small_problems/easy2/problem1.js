function crunch(string) {
  let newString = "";
  for (let char of string) {
    if (char !== newString[newString.length - 1]) {
      newString += char;
    }
  }

  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""