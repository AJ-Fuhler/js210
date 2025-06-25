const isLower = char => /[a-z]/.test(char);
const isUpper = char => /[A-Z]/.test(char);

const swapCase = string => {
  return string.split('').map(char => {
    if (isLower(char)) {
      return char.toUpperCase();
    } else if (isUpper(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"