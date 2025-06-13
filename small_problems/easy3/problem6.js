let isPalindrome = function(string) {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
};

let isPalindromicNumber = number => isPalindrome(String(number));

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true