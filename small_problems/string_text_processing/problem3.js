const letterCaseCount = string => {
  const lowercase = string.replace(/[^a-z]/g, '').length;
  const uppercase = string.replace(/[^A-Z]/g, '').length;
  const neither = string.replace(/[a-z]/ig, '').length;

  return {
    lowercase,
    uppercase,
    neither,
  };
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }