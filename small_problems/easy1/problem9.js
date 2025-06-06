function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  sumOfMultiples = 0;
  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sumOfMultiples += number;
    }
  }

  return sumOfMultiples;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168