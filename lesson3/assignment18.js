function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let lowerCaseString = "";
  for (let i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    lowerCaseString += String.fromCharCode(charCode);
  }

  console.log(lowerCaseString);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"