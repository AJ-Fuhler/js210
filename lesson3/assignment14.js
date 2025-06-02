function trim(string) {
  result = trimLeadingWhitespace(string);
  result = trimTrailingWhitespace(result);
  console.log(result);
}

function trimLeadingWhitespace(string) {
  let result = "";
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === " ") {
      continue;
    } else {
      for (let jdx = idx; jdx < string.length; jdx += 1) {
        result += string[jdx]
      }
      break;
    }
  }
  return result;
}

function trimTrailingWhitespace(string) {
  let reversedString = reverseString(string);
  let trimmedString = trimLeadingWhitespace(reversedString);
  let result = reverseString(trimmedString);

  return result;
}

function reverseString(string) {
  result = "";
  for (let i = string.length -1; i >= 0; i -= 1) {
    result += string[i];
  }
  return result;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""