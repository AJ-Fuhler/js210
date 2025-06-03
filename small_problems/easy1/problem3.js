rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = Number(rlSync.prompt());

console.log('Enter the width of the room in meters:');
let width = Number(rlSync.prompt());

let squareMeters = (length * width).toFixed(2);
let sqft = (squareMeters * SQMETERS_TO_SQFEET).toFixed(2);

console.log(`The area of the room is ${squareMeters} square meters (${sqft} square feet).`)