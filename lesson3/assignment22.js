/*
input: 2 strings
output: Number

P:

Explicit:

- search for first instance of substring in firstString that matches secondString.
- return index of character where that substring begins.
- if not found, return -1
- Don't use any built-in methods.
- You can use indexing syntax and the length property.

Implicit:

- case sensitive

D:

- the strings them selves
- for loop

A:

1. init secondStringLength = length of secondString
2. for each index in range from 0 through (length of firstString - secondStringLength)
   - if firstString[index] matches secondString[0]:
     - substring = ""
     - for each jdx in range from index through index + secondStringLength:
       - substring = substring + firstString[jdx]
     - if substring is equal to secondString:
       - return index
3. return -1



*/

function indexOf(firstString, secondString) {
  for (let idx = 0; idx <= (firstString.length - secondString.length); idx += 1) {
    if (firstString[idx] === secondString[0]) {
      let substring = "";
      for (let jdx = idx; jdx < (idx + secondString.length); jdx += 1) {
        substring += firstString[jdx];
      }

      if (substring === secondString) {
        return idx;
      }
    }
  }

  return -1;
}

function reverseString(string) {
  let reversedString = "";

  for (let idx = string.length - 1; idx >= 0; idx -= 1) {
    reversedString += string[idx];
  }

  return reversedString;
}


function lastIndexOf(firstString, secondString) {
  let revFirst = reverseString(firstString);
  let revSecond = reverseString(secondString);
  let revIndex = indexOf(revFirst, revSecond);
  if (revIndex === -1) {
    return revIndex;
  }
  let lastIndex = firstString.length - revIndex - secondString.length;

  return lastIndex;
}



console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Killer Whale, Killer Whale', 'Killer'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1