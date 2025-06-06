const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const integerToString = function(number) {
  if (number === 0) {
    return '0';
  }

  let stringNumber = '';

  while (number > 0) {
    let remainder = number % 10;
    stringNumber = DIGITS[remainder] + stringNumber;
    number = Math.floor(number / 10);
  }

  return stringNumber;
};

const signedIntegerToString = function(number) {
  if (Object.is(number, -0)) {
    return '-0';
  }

  if (number === 0) {
    return '0';
  }

  if (number > 0) {
    return '+' + integerToString(number);
  }

  return '-' + integerToString(-number);
};

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
console.log(signedIntegerToString(-0));         // "-0"
