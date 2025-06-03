for (let num = 1; num <= 99; num += 2) {
  console.log(num);
}

// further exploration

function logOddNumbers(num1, num2) {
  if (num1 % 2 !== 1 || num2 % 2 !== 1) {
    console.log("You have to provide 2 odd numbers.")
    return;
  }
  for (let num = num1; num <= num2; num += 2) {
    console.log(num);
  }
}

logOddNumbers(45, 67);