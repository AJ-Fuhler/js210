/*
Input: string
Output: string

P:
- If the characters is in the alphabet, change it to the character 13 positions later: a becomes n.
- If end of alphabet is reached, return to beginning: o becomes b.
- Preserve case, A becomes N, a becomes n.
- Don't modify but do add non-alphabetic characters.

D:
- ALPHABET CONSTANT to calculate which letter is 13 positions later.
- cipher to continue adding characters to 1-by-1.
- isAlpha function to check whether character is alphabetic

A:
1. init ALPHABET to string containing alphabet
2. init cipher to ""
3. for each char in originalString
   - if isAlpha(char):
     - init isUpper to return value of (check if char is upper)
     - init newCharIndex to found index of lowercase version of char.
     - if newCharIndex > 25 (MAX_INDEX):
       - newCharIndex -= 25 (MAX_INDEX)
     - newChar = ALPHABET[newCharIndex]
     - if isUpper is truthy:
       - newChar = uppercase version of newChar
     - cipher = cipher + newChar
   - else:
     - cipher = cipher + char
4. return cipher

C:
*/

function isAlpha(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'
}

function isUpper(char) {
  return char === char.toUpperCase();
}

function rot13(originalString) {
  const MAX_ASCII_NUMERIC = 'z'.charCodeAt(0);
  const LETTERS_IN_ALPHABET = 26;
  const CONVERSION_OFFSET = 13;
  let cipher = '';

  for (let originalChar of originalString) {
    if (isAlpha(originalChar)) {
      let asciiNumeric = originalChar.toLowerCase().charCodeAt(0);
      let newAsciiNumeric = asciiNumeric + CONVERSION_OFFSET;

      if (newAsciiNumeric > MAX_ASCII_NUMERIC) {
        newAsciiNumeric -= LETTERS_IN_ALPHABET;
      }

      let newChar = String.fromCharCode(newAsciiNumeric);

      if (isUpper(originalChar)) {
        newChar = newChar.toUpperCase();
      }

      cipher += newChar;
    } else {
      cipher += originalChar;
    }
  }

  return cipher;
}





console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.