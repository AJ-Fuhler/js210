// const rotateRightmostDigits = (number, rotateBy) => {
//   let digitsArray = [...String(number)];
//   digitsArray.push(digitsArray.splice(-rotateBy, 1)[0]);
//   return Number(digitsArray.join(''));
// }

function rotateRightmostDigits(number, rotateBy) {
  let digitsArray = [...String(number)];
  let unchanged = digitsArray.slice(0, -rotateBy);
  let toChange = digitsArray.slice(-rotateBy);

  toChange.push(toChange.shift());
  return Number(unchanged.concat(toChange).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917