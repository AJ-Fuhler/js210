function lastNOf(arr, count) {
  let start = count < arr.length ? arr.length - count : 0;
  return arr.slice(start)
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 7));    // returns [16, 23, 42]