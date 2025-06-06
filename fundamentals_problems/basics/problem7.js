"use strict mode";

const stringToInteger = function(stringOfDigits) {
  let number = 0;
  let multiplier = 1;

  for (let index = stringOfDigits.length - 1; index >= 0; index -= 1) {
    number += (stringOfDigits[index] * multiplier);
    multiplier *= 10;
  }

  return number;
};

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570