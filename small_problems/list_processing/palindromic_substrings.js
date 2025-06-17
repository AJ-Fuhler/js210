const leadingSubstrings = string => {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
};

const substrings = string => {
  return [...string].flatMap((_, idx) => {
    return leadingSubstrings(string.slice(idx));
  });
};

const reverseString = string => [...string].reverse().join('');

const isPalindrome = (string) => {
  return string.length > 1 && string === reverseString(string);
};

const palindromes = string => {
  return substrings(string).filter(substring => isPalindrome(substring));
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]