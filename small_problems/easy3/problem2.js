const rlSync = require('readline-sync');

const numbers = [];

numbers.push(rlSync.question('Enter the 1st number: '));
numbers.push(rlSync.question('Enter the 2nd number: '));
numbers.push(rlSync.question('Enter the 3rd number: '));
numbers.push(rlSync.question('Enter the 4th number: '));
numbers.push(rlSync.question('Enter the 5th number: '));

const lastNumber   = rlSync.question('Enter the last number: ');

const appearsOrNot = numbers.indexOf(lastNumber) === -1 ? 'does not appear' : 'appears';

console.log(`The number ${lastNumber} ${appearsOrNot} in [${numbers.join(', ')}].`);