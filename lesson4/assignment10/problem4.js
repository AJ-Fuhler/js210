function matrixSums(arr) {
  let subArraySums = [];

  for (let sublist of arr) {
    let sum = 0;
    for (let number of sublist) {
      sum += number;
    }

    subArraySums.push(sum);
  }

  return subArraySums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));