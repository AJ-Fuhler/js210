function substr(string, start, length) {
  if (start < 0) {
    start = string.length - 3;
  }

  let newString = "";

  for (let index = start; newString.length < length; index += 1) {
    if (index >= string.length) {
      break;
    }

    newString += string[index];
  }

  console.log(newString);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""