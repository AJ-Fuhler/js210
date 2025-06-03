rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

let unit;


do {
  console.log('Please choose between these two units: (sqft/m2)')
  unit = rlSync.prompt();
} while (unit !== 'sqft' && unit !== 'm2')



console.log(`Enter the length of the room in ${unit}:`);
let length = Number(rlSync.prompt());

console.log(`Enter the width of the room in ${unit}:`);
let width = Number(rlSync.prompt());

let squareMeters;
let sqft;

if (unit === 'm2') {
  squareMeters = (length * width);
  sqft = (squareMeters * SQMETERS_TO_SQFEET);
} else {
  sqft = (length * width);
  squareMeters = (sqft / SQMETERS_TO_SQFEET);
}


console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${sqft.toFixed(2)} square feet).`)