const leadingSubstrings = string => {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
};

const substrings = string => {
  return [...string].flatMap((_, idx) => {
    return leadingSubstrings(string.slice(idx));
  });
};

console.log(substrings('abcde'));