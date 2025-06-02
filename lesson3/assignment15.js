function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return;
  }

  let currentString = "";
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(currentString);
      currentString = "";
    } else if (delimiter === "") {
      console.log(string[index]);
    } else {
      currentString += string[index]
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello