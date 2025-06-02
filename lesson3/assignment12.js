function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }
  } while (num1 !== num2);
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53