function generatePattern(nStars) {
  let lastRowString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    let numberOfStars = width - string.length;
    string += '*'.repeat(numberOfStars);

    console.log(string);
  }
}

generatePattern(20);