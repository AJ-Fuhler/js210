rlSync = require('readline-sync');

let integer = parseInt(rlSync.question('Please enter an integer greater than 0: '))
while (Number.isNaN(integer) || integer < 1) {
  integer = parseInt(rlSync.question('Your input was invalid, please enter an integer greater than 0: '))
}

let sumOrProduct = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ')
while (sumOrProduct !== 's' && sumOrProduct !== 'p') {
  sumOrProduct = rlSync.question('Your input was invalid, enter "s" for the sum, or "p" for the product. ')
}

let result = 1;

if (sumOrProduct === 's') {
  for (let num = 2; num <= integer; num += 1) {
    result += num;
  }

  console.log(`The sum of the integers between 1 and ${integer} is ${result}.`)
} else {
  for (let multiplier = 2; multiplier <= integer; multiplier += 1) {
    result *= multiplier;
  }

  console.log(`The product of the integers between 1 and ${integer} is ${result}.`)
}

