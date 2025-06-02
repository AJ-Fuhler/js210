function gcd(num1, num2) {
  let commonDiv = 1;
  smallestNum = Math.min(num1, num2);
  for (let div = 2; div <= smallestNum; div += 1) {
    if (num1 % div === 0 && num2 % div === 0) {
      commonDiv = div;
    }
  }

  return commonDiv;
}

console.log(gcd(4, 12));   // 4
console.log(gcd(10, 15));  // 5
console.log(gcd(9, 2));    // 1

// further exploration:

function recursiveGcd(numbers) {
  let commonDiv = 1;

  let smallestNum = Math.min(numbers[0], numbers[1]);
  for (let div = 2; div <= smallestNum; div += 1) {
    if (numbers[0] % div === 0 && numbers[1] % div === 0) {
      commonDiv = div;
    }
  }

  if (numbers.length === 2) {
    return commonDiv;
  } else {
    let newArray = [commonDiv].concat(numbers.slice(2));
    return recursiveGcd(newArray);
  }
}

console.log(recursiveGcd([4, 12, 8]));
console.log(recursiveGcd([9, 15, 21, 12]));