let isPalindrome = function(string) {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true