const rlSync = require('readline-sync');

const currentAge    = Number(rlSync.question('What is your age? '));
const retirementAge = Number(rlSync.question('At what age would you like to retire? '));

const today = new Date();

const currentYear = today.getFullYear();
const yearsUntilRetirement = retirementAge - currentAge;
const retirementYear = currentYear + yearsUntilRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsUntilRetirement} years of work to go!`);
