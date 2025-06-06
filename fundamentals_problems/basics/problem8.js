"use strict mode";

const stringToSignedInteger = function(stringOfDigits) {
  let digitsArray = stringOfDigits.split('');
  let sign = '+';
  if (digitsArray[0] === '-' || digitsArray[0] === '+') {
    sign = digitsArray.shift();
  }

  let number = 0;
  let multiplier = 1;

  for (let index = digitsArray.length - 1; index >= 0; index -= 1) {
    number += (+digitsArray[index] * multiplier);
    multiplier *= 10;
  }

  return sign === '-' ? -number : number;
};

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100