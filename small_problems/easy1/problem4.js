rlSync = require('readline-sync');

let bill = Number(rlSync.question("What is the bill? "));
let tipPercentage = Number(rlSync.question("What is the tip percentage? ")) / 100;

let tip = bill * tipPercentage;
let total = tip + bill;

console.log(`\nThe tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);