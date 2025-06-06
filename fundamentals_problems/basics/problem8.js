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

// or

const betterStringToSignedInteger = function(stringOfDigits) {
  switch (stringOfDigits[0]) {
    case '+': return stringToInteger(stringOfDigits.slice(1));
    case '-': return -stringToInteger(stringOfDigits.slice(1));
    default: return stringToInteger(stringOfDigits);
  }
};

console.log(betterStringToSignedInteger('4321'));      // 4321
console.log(betterStringToSignedInteger('-570'));      // -570
console.log(betterStringToSignedInteger('+100'));      // 100