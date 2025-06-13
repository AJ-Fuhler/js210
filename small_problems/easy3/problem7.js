let runningTotal = function(numbers) {
  let totals = [];
  let currentTotal = 0;

  for (let number of numbers) {
    currentTotal += number;
    totals.push(currentTotal);
  }

  return totals;
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// further exploration

// let runningTotal = function(numbers) {
//   let currentTotal = 0;
//   return numbers.map(function(number) {
//     currentTotal += number;
//     return currentTotal;
//   });
// };